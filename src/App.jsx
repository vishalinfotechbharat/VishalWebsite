import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
