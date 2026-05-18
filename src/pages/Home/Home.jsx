import React from 'react';
import HeroSection       from './sections/HeroSection';
import WhoWeAre          from './sections/WhoWeAre';
import ServicesSection   from './sections/ServicesSection';
import WhyChooseUs       from './sections/WhyChooseUs';
import TechStack         from './sections/TechStack';
import PortfolioPreview  from './sections/PortfolioPreview';
import ProcessPreview    from './sections/ProcessPreview';
import IndustriesSection from './sections/IndustriesSection';
import FAQSection        from './sections/FAQSection';
import CTABanner         from './sections/CTABanner';

// Section order (no duplicates, honest content):
// Hero → WhoWeAre → Services → WhyChooseUs → TechStack
// → Portfolio → Process → Industries → FAQ → CTA

const Home = () => (
  <>
    <HeroSection />
    <WhoWeAre />
    <ServicesSection />
    <WhyChooseUs />
    <TechStack />
    <PortfolioPreview />
    <ProcessPreview />
    <IndustriesSection />
    <FAQSection />
    <CTABanner />
  </>
);

export default Home;
