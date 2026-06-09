import React from 'react';
import { Helmet } from 'react-helmet-async';
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

// ─── Homepage Structured Data Schemas ──────────────────────────
const homeFaqsSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can your services benefit my business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We build custom solutions that automate manual workflows, reduce operational costs, and improve system performance. By eliminating off-the-shelf software limitations, we create digital tools tailored exactly to your operations, driving productivity and scaling capacity."
      }
    },
    {
      "@type": "Question",
      "name": "How do you tailor solutions to fit my business needs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We start with a discovery phase to understand your unique workflows, bottlenecks, and objectives. We don't believe in one-size-fits-all templates; we design the architecture, user experience, and integrations specifically around your business processes."
      }
    },
    {
      "@type": "Question",
      "name": "What technologies will you use to build my software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use modern, stable, and highly supported technologies. Our core stack includes React and Next.js for frontend, Node.js and Python for backend, and PostgreSQL or MongoDB for database management, hosted securely on AWS or Google Cloud."
      }
    },
    {
      "@type": "Question",
      "name": "What services do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide end-to-end digital product design, web development, SaaS product development, custom ERP system engineering, data-rich internal dashboards, IT consulting, QA testing, and API integration."
      }
    },
    {
      "@type": "Question",
      "name": "What types of SaaS platforms and ERP systems do you build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our SaaS development includes multi-tenant architectures, user role management, subscription billing (Stripe), and usage dashboards. Our ERP services deliver custom operational tools for inventory, CRM, supply chain, and enterprise resource planning tailored to your exact workflows."
      }
    },
    {
      "@type": "Question",
      "name": "What kind of web development and UI/UX design do you do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We develop custom React and Next.js web applications, client portals, and high-performance, SEO-optimized marketing websites. In UI/UX, we provide user research, wireframes, and clickable high-fidelity Figma prototypes so you can test the system flow before code is written."
      }
    },
    {
      "@type": "Question",
      "name": "How much do your services cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer fixed-price contracts for clearly defined projects, as well as hourly retainers for ongoing development. We provide a detailed cost estimate before any work begins."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a project take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A standard website or custom tool typically takes 4 to 8 weeks. Larger, more complex platforms or integrations usually take 3 to 6 months."
      }
    },
    {
      "@type": "Question",
      "name": "Will I own the source code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, absolutely. Once the project is completed and the final invoice is paid, you have 100% full ownership of the source code, design assets, and intellectual property."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide support after launch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer flexible post-launch support and maintenance plans that cover security updates, performance monitoring, database backups, and new feature additions."
      }
    },
    {
      "@type": "Question",
      "name": "Can you work with our existing codebase?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We can audit, refactor, and optimize your current legacy applications, or build new features on top of your existing systems with minimal disruption."
      }
    }
  ]
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Vishal Infotech",
  "image": "https://www.vishalinfotech.com/logo.png",
  "@id": "https://www.vishalinfotech.com/#organization",
  "url": "https://www.vishalinfotech.com",
  "telephone": "+918169829398",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.076090,
    "longitude": 72.877793
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "6",
    "bestRating": "5"
  },
  "sameAs": [
    "https://github.com/vishalinfotechbharat"
  ]
};

const Home = () => (
  <>
    <Helmet>
      <title>Vishal Infotech | Web, SaaS & ERP Development India</title>
      <meta name="description" content="Custom web apps, SaaS platforms & ERP systems built by Vishal Infotech. High-performance, scalable digital products for startups and enterprises." />
      <link rel="canonical" href="https://www.vishalinfotech.com/" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.vishalinfotech.com/" />
      <meta property="og:title" content="Vishal Infotech | Web, SaaS & ERP Development India" />
      <meta property="og:description" content="Custom web apps, SaaS platforms & ERP systems built by Vishal Infotech. High-performance, scalable digital products for startups and enterprises." />
      <meta property="og:image" content="https://www.vishalinfotech.com/logo.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.vishalinfotech.com/" />
      <meta name="twitter:title" content="Vishal Infotech | Web, SaaS & ERP Development India" />
      <meta name="twitter:description" content="Custom web apps, SaaS platforms & ERP systems built by Vishal Infotech. High-performance, scalable digital products for startups and enterprises." />
      <meta name="twitter:image" content="https://www.vishalinfotech.com/logo.png" />

      {/* Structured Data Scripts */}
      <script type="application/ld+json">
        {JSON.stringify(homeFaqsSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(professionalServiceSchema)}
      </script>
    </Helmet>
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
