import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home     = lazy(() => import('../pages/Home/Home'));
const About    = lazy(() => import('../pages/About/About'));
const Services = lazy(() => import('../pages/Services/Services'));
const Projects = lazy(() => import('../pages/Projects/Projects'));
const Process  = lazy(() => import('../pages/Process/Process'));
const Contact  = lazy(() => import('../pages/Contact/Contact'));
const FAQ      = lazy(() => import('../pages/FAQ/FAQ'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const PrivacyPolicy = lazy(() => import('../pages/Legal/PrivacyPolicy'));
const TermsOfService = lazy(() => import('../pages/Legal/TermsOfService'));
const CookiePolicy = lazy(() => import('../pages/Legal/CookiePolicy'));

const Loader = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
  }}>
    <div style={{
      width: 40,
      height: 40,
      border: '3px solid #E5E7EB',
      borderTopColor: '#0129FA',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite',
    }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/about"    element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/process"  element={<Process />} />
        <Route path="/contact"  element={<Contact />} />
        <Route path="/faq"      element={<FAQ />} />
        <Route path="/privacy-policy"   element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy"    element={<CookiePolicy />} />
        <Route path="*"         element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
