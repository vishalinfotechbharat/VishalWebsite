import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutHero         from './sections/AboutHero';
import AboutWhoWeAre     from './sections/AboutWhoWeAre';
import AboutApproach     from './sections/AboutApproach';
import AboutMissionVision from './sections/AboutMissionVision';
import AboutDifferent    from './sections/AboutDifferent';
import AboutTechStack    from './sections/AboutTechStack';
import AboutValues       from './sections/AboutValues';
import AboutCTA          from './sections/AboutCTA';

const About = () => (
  <>
    <Helmet>
      <title>About Vishal Infotech | Freelance IT Partner</title>
      <meta name="description" content="Vishal Infotech is a freelance IT solutions provider specialising in custom web apps, SaaS platforms and ERP systems - built with craft, honesty and purpose." />
      <link rel="canonical" href="https://www.vishalinfotech.com/about" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.vishalinfotech.com/about" />
      <meta property="og:title" content="About Vishal Infotech | Freelance IT Partner" />
      <meta property="og:description" content="Vishal Infotech is a freelance IT solutions provider specialising in custom web apps, SaaS platforms and ERP systems - built with craft, honesty and purpose." />
      <meta property="og:image" content="https://www.vishalinfotech.com/logo.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.vishalinfotech.com/about" />
      <meta name="twitter:title" content="About Vishal Infotech | Freelance IT Partner" />
      <meta name="twitter:description" content="Vishal Infotech is a freelance IT solutions provider specialising in custom web apps, SaaS platforms and ERP systems - built with craft, honesty and purpose." />
      <meta name="twitter:image" content="https://www.vishalinfotech.com/logo.png" />

      {/* Breadcrumb List Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vishalinfotech.com/" },
            { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.vishalinfotech.com/about" }
          ]
        })}
      </script>
    </Helmet>
    <AboutHero />
    <AboutWhoWeAre />
    <AboutValues />
    <AboutApproach />
    <AboutMissionVision />
    <AboutDifferent />
    <AboutTechStack />
    <AboutCTA />
  </>
);

export default About;
