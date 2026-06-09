import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LogoIntro from './components/LogoIntro/LogoIntro';
import FloatingEmail from './components/FloatingEmail/FloatingEmail';
import AppRoutes from './routes/AppRoutes';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

function App() {
  const [introDone, setIntroDone] = useState(() => {
    try {
      return !!sessionStorage.getItem('vi_intro_seen');
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId;
    function raf(time) {
      if (!document.hidden) {
        lenis.raf(time);
      }
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    window.lenis = lenis;

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <>
      <LogoIntro onDone={() => setIntroDone(true)} />
      <ScrollToTop />
      <Navbar introDelay={introDone ? 0 : 2.2} />
      <main style={{ minHeight: '100vh' }}>
        <AppRoutes />
      </main>
      <Footer />
      <FloatingEmail show={introDone} />
    </>
  );
}

export default App;
