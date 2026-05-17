import React from 'react';
import ServicesHero     from './sections/ServicesHero';
import ServicesGrid     from './sections/ServicesGrid';
import ServicesShowcase from './sections/ServicesShowcase';
import ServicesApproach from './sections/ServicesApproach';
import ServicesTech     from './sections/ServicesTech';
import ServicesProcess  from './sections/ServicesProcess';
import ServicesCTA      from './sections/ServicesCTA';

const Services = () => (
  <>
    <ServicesHero />
    <ServicesGrid />
    <ServicesShowcase />
    <ServicesApproach />
    <ServicesTech />
    <ServicesProcess />
    <ServicesCTA />
  </>
);

export default Services;
