import React from 'react';
import HeroSection from './sections/HeroSection';
import WhoWeAre from './sections/WhoWeAre';
import ServicesSection from './sections/ServicesSection';
import WhyChooseUs from './sections/WhyChooseUs';
import TechStack from './sections/TechStack';
import MissionVision from './sections/MissionVision';
import PortfolioPreview from './sections/PortfolioPreview';
import ProcessPreview from './sections/ProcessPreview';
import FAQSection from './sections/FAQSection';
import CTABanner from './sections/CTABanner';

const Home = () => (
  <>
    <HeroSection />
    <WhoWeAre />
    <ServicesSection />
    <WhyChooseUs />
    <TechStack />
    <MissionVision />
    <PortfolioPreview />
    <ProcessPreview />
    <FAQSection />
    <CTABanner />
  </>
);

export default Home;
