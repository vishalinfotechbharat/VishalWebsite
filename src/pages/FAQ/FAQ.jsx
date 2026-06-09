import React, { useState, useEffect } from 'react';
import Container from '../../components/Container/Container';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import Button from '../../components/Button/Button';
import styles from './FAQ.module.scss';

const categories = ['All', 'General', 'Services & Tech', 'Process', 'Pricing & Legal'];

const faqs = [
  {
    category: 'General',
    question: 'What is Vishal Infotech and what services do you provide?',
    answer: 'Vishal Infotech is a premier freelance IT solutions provider offering high-performance web development, custom SaaS product engineering, custom ERP systems, UI/UX design, data-rich internal dashboards, and API integration services. We build secure, scalable, and tailored software designed to optimize business operations and drive growth.',
  },
  {
    category: 'General',
    question: 'Why should I choose a freelance IT solutions partner over an agency?',
    answer: 'Choosing a freelance IT solutions partner like Vishal Infotech offers several distinct advantages: direct communication with the lead engineer, greater flexibility, faster delivery times, and highly competitive pricing. Unlike large agencies with high overheads and layers of account managers, you work directly with the expert builder who understands your project inside and out.',
  },
  {
    category: 'Services & Tech',
    question: 'What technologies do you specialize in for custom software and web applications?',
    answer: 'We specialize in modern, robust, and highly scalable technology stacks. For frontend development, we use React.js, Next.js, HTML5, Vanilla CSS/SCSS, and Tailwind CSS. For backend development and APIs, we use Node.js (Express), Python (Django/FastAPI), and PHP. For databases, we use PostgreSQL, MySQL, and MongoDB. We host and deploy applications securely on AWS, Google Cloud Platform (GCP), Vercel, and Netlify.',
  },
  {
    category: 'Services & Tech',
    question: 'What types of custom ERP and SaaS systems do you design?',
    answer: 'For SaaS development, we build multi-tenant architectures, secure role-based access controls (RBAC), subscription billing flows (via Stripe or PayPal), and real-time usage analytics dashboards. For custom ERP systems, we engineer tailored operational modules including inventory management, Customer Relationship Management (CRM) tools, supply chain automation, billing/invoicing systems, and internal reporting pipelines aligned to your specific business workflows.',
  },
  {
    category: 'Services & Tech',
    question: 'How do you ensure the websites and web apps you build are SEO-ready?',
    answer: 'We implement SEO best practices at the architectural level. This includes server-side rendering (SSR) or static site generation (SSG) with Next.js for lightning-fast load times, semantic HTML5 tags, custom meta titles and descriptions for every page, optimized Open Graph (OG) tags for social sharing, clean URL structures, secure HTTPS setups, and structured data schema markups (like JSON-LD FAQPage, LocalBusiness, and Article schemas). We also generate automated sitemap.xml and robots.txt files to ensure search engines like Google can crawl and index your site efficiently.',
  },
  {
    category: 'Process',
    question: 'What is your development process and how do we collaborate?',
    answer: 'We follow a structured, transparent 4-stage process: 1) Discovery & Strategy: We align on your goals, requirements, and document user journeys. 2) UI/UX Design: We design high-fidelity, interactive Figma prototypes so you can preview the user interface. 3) Precise Engineering: We write clean, modular, and optimized code with regular progress updates. 4) Launch & Handover: We run extensive QA testing, deploy the system, and hand over 100% ownership.',
  },
  {
    category: 'Pricing & Legal',
    question: 'Who owns the source code and intellectual property once a project is finished?',
    answer: 'You do! Once the project is completed and the final invoice is paid, you have 100% full ownership of the source code, design assets, databases, and all intellectual property. We hand over the Github repository and deploy the system directly to your hosting accounts.',
  },
  {
    category: 'Pricing & Legal',
    question: 'How do you estimate project pricing and timelines?',
    answer: 'We offer two flexible pricing models: Fixed-Price Contracts (best for projects with clearly defined features and scope, providing a guaranteed cost and timeline) and Hourly/Retainer Contracts (best for ongoing development, scaling platforms, or evolving requirements). Most standard web applications or tools take between 4 to 8 weeks, while complex ERP or SaaS platforms take 3 to 6 months.',
  },
  {
    category: 'Pricing & Legal',
    question: 'Do you provide maintenance and technical support after launch?',
    answer: 'Yes, we provide flexible monthly maintenance and support retainers. These plans cover regular security patches, dependencies updates, cloud infrastructure monitoring, database backups, performance audits, and continuous minor feature additions to keep your system operating at peak performance.',
  },
  {
    category: 'Services & Tech',
    question: 'Can you optimize or integrate legacy codebases and existing databases?',
    answer: 'Absolutely. We can audit your existing legacy code, refactor slow queries, modernize the frontend UI/UX, or build custom API integrations to connect your current legacy systems with modern SaaS tools, payment processors, or external data pipelines.',
  },
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndexes, setOpenIndexes] = useState({});

  // Dynamic Page Title & Meta for SEO
  useEffect(() => {
    document.title = "FAQ — Frequently Asked Questions | Vishal Infotech";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Find detailed answers to frequently asked questions about Vishal Infotech freelance IT solutions, including custom web development, SaaS platforms, ERP systems, pricing, and our development lifecycle.');
    }

    // JSON-LD FAQ Schema injection for Google Rich Snippets
    const schemaMarkup = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-jsonld-schema';
    script.innerHTML = JSON.stringify(schemaMarkup);
    document.head.appendChild(script);

    return () => {
      if (metaDesc) metaDesc.setAttribute('content', originalDesc);
      const injectedScript = document.getElementById('faq-jsonld-schema');
      if (injectedScript) injectedScript.remove();
    };
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.faqPage}>
      {/* Hero */}
      <section className={styles.faqPage__hero}>
        <div className={styles.faqPage__heroBg} aria-hidden="true" />
        <Container>
          <div className={styles.faqPage__heroContent}>
            <ScrollReveal>
              <div className={styles.faqPage__badge}>
                <span className={styles.faqPage__badgeDot} />
                Help Center
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className={styles.faqPage__title}>
                Frequently Asked <span>Questions</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className={styles.faqPage__subtitle}>
                Everything you need to know about our freelance IT solutions, custom SaaS frameworks, ERP setups, pricing models, and how we deliver projects.
              </p>
            </ScrollReveal>

            {/* Search Bar */}
            <ScrollReveal delay={0.3}>
              <div className={styles.faqPage__searchWrapper}>
                <div className={styles.faqPage__searchIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search questions or keywords..."
                  className={styles.faqPage__searchInput}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button className={styles.faqPage__searchClear} onClick={() => setSearchQuery('')} aria-label="Clear search">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                )}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className={styles.faqPage__content}>
        <Container>
          {/* Category Filters */}
          <ScrollReveal>
            <div className={styles.faqPage__filters}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.faqPage__filterBtn} ${activeCategory === cat ? styles['faqPage__filterBtn--active'] : ''}`}
                  onClick={() => {
                    setActiveCategory(cat);
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Accordion List */}
          <div className={styles.faqPage__listWrapper}>
            {filteredFaqs.length > 0 ? (
              <div className={styles.faqPage__list}>
                {filteredFaqs.map((faq, i) => {
                  const isOpen = !!openIndexes[i];
                  return (
                    <ScrollReveal key={i} delay={i * 0.04}>
                      <article
                        className={`${styles.faqPage__item} ${isOpen ? styles['faqPage__item--open'] : ''}`}
                        onClick={() => toggleFAQ(i)}
                        role="button"
                        tabIndex={0}
                        aria-expanded={isOpen}
                        onKeyDown={(e) => e.key === 'Enter' && toggleFAQ(i)}
                      >
                        <header className={styles.faqPage__question}>
                          <h2 className={styles.faqPage__questionText}>{faq.question}</h2>
                          <div className={styles.faqPage__toggle} aria-hidden="true">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                              <path d="M6 9l6 6 6-6" />
                            </svg>
                          </div>
                        </header>
                        <div className={styles.faqPage__answer}>
                          <div className={styles.faqPage__answerInner}>
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      </article>
                    </ScrollReveal>
                  );
                })}
              </div>
            ) : (
              <div className={styles.faqPage__empty}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
                <h3>No results found</h3>
                <p>We couldn't find any questions matching "{searchQuery}". Try searching for other terms or get in touch with us.</p>
                <Button to="/contact" variant="primary" size="md">
                  Contact Support
                </Button>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* CTA Footer */}
      <section className={styles.faqPage__cta}>
        <Container>
          <div className={styles.faqPage__ctaBox}>
            <ScrollReveal>
              <h2 className={styles.faqPage__ctaTitle}>Still Have Questions?</h2>
              <p className={styles.faqPage__ctaSub}>
                If you didn't find the answers you were looking for, feel free to send us an email or fill out our project discovery form. We typically respond within 24 hours.
              </p>
              <div className={styles.faqPage__ctaActions}>
                <Button to="/contact" variant="white" size="lg">
                  Get in Touch
                </Button>
                <a href="mailto:vishalinfotechbharat@gmail.com" className={styles.faqPage__emailLink}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  vishalinfotechbharat@gmail.com
                </a>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default FAQ;
