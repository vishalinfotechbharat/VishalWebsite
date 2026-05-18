import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LogoIntro from './components/LogoIntro/LogoIntro';
import AppRoutes from './routes/AppRoutes';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <LogoIntro onDone={() => setIntroDone(true)} />
      <ScrollToTop />
      <Navbar introDelay={introDone ? 0 : 2.2} />
      <main style={{ minHeight: '100vh' }}>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
