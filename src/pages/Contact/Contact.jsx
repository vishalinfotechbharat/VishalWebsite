import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactHero from './sections/ContactHero';
import ContactFAQ  from './sections/ContactFAQ';

const Contact = () => (
  <>
    <Helmet>
      <title>Contact Vishal Infotech | Start Your Project</title>
      <meta name="description" content="Get in touch with Vishal Infotech. Share your project idea and receive a free consultation within 24 hours. Web, SaaS, ERP and app development." />
      <link rel="canonical" href="https://www.vishalinfotech.com/contact" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.vishalinfotech.com/contact" />
      <meta property="og:title" content="Contact Vishal Infotech | Start Your Project" />
      <meta property="og:description" content="Get in touch with Vishal Infotech. Share your project idea and receive a free consultation within 24 hours. Web, SaaS, ERP and app development." />
      <meta property="og:image" content="https://www.vishalinfotech.com/logo.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.vishalinfotech.com/contact" />
      <meta name="twitter:title" content="Contact Vishal Infotech | Start Your Project" />
      <meta name="twitter:description" content="Get in touch with Vishal Infotech. Share your project idea and receive a free consultation within 24 hours. Web, SaaS, ERP and app development." />
      <meta name="twitter:image" content="https://www.vishalinfotech.com/logo.png" />

      {/* Breadcrumb List Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vishalinfotech.com/" },
            { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.vishalinfotech.com/contact" }
          ]
        })}
      </script>
    </Helmet>
    <ContactHero />
    <ContactFAQ />
  </>
);

export default Contact;
