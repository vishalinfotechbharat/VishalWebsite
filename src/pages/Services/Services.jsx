import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesHero     from './sections/ServicesHero';
import ServicesGrid     from './sections/ServicesGrid';
import ServicesShowcase from './sections/ServicesShowcase';
import ServicesApproach from './sections/ServicesApproach';
import ServicesTech     from './sections/ServicesTech';
import ServicesProcess  from './sections/ServicesProcess';
import ServicesCTA      from './sections/ServicesCTA';

const Services = () => (
  <>
    <Helmet>
      <title>Web & SaaS Development Services | Vishal Infotech</title>
      <meta name="description" content="Explore Vishal Infotech's services: React web development, SaaS platforms, ERP systems, UI/UX design, API integration and IT consulting." />
      <link rel="canonical" href="https://www.vishalinfotech.com/services" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.vishalinfotech.com/services" />
      <meta property="og:title" content="Web & SaaS Development Services | Vishal Infotech" />
      <meta property="og:description" content="Explore Vishal Infotech's services: React web development, SaaS platforms, ERP systems, UI/UX design, API integration and IT consulting." />
      <meta property="og:image" content="https://www.vishalinfotech.com/logo.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.vishalinfotech.com/services" />
      <meta name="twitter:title" content="Web & SaaS Development Services | Vishal Infotech" />
      <meta name="twitter:description" content="Explore Vishal Infotech's services: React web development, SaaS platforms, ERP systems, UI/UX design, API integration and IT consulting." />
      <meta name="twitter:image" content="https://www.vishalinfotech.com/logo.png" />

      {/* Breadcrumb List Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vishalinfotech.com/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.vishalinfotech.com/services" }
          ]
        })}
      </script>
    </Helmet>
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
