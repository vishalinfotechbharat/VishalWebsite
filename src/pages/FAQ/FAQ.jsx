import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../../components/Container/Container';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import Button from '../../components/Button/Button';
import styles from './FAQ.module.scss';

const categories = ['All', 'General', 'Services & Tech', 'Process', 'Pricing & Legal'];

const faqs = [
  {
    category: 'General',
    question: 'What services are offered?',
    answer: 'Website development, web applications, UI/UX design, API integration, maintenance, and technical support.',
  },
  {
    category: 'Process',
    question: 'How long does a typical project take?',
    answer: 'Timelines depend on project scope and complexity. A detailed schedule is provided before development begins.',
  },
  {
    category: 'Services & Tech',
    question: 'Can an existing website be redesigned?',
    answer: 'Yes, existing websites can be modernized with improved design, performance, and functionality while preserving important content.',
  },
  {
    category: 'Pricing & Legal',
    question: 'Is post-launch support available?',
    answer: 'Ongoing maintenance, updates, and technical assistance can be provided after project completion.',
  },
  {
    category: 'Services & Tech',
    question: 'Are websites optimized for mobile devices?',
    answer: 'Yes, all websites are designed to provide a responsive experience across desktops, tablets, and mobile devices.',
  },
  {
    category: 'Services & Tech',
    question: 'Can third-party services be integrated?',
    answer: 'Integrations such as payment gateways, CRMs, analytics, APIs, and other business tools can be incorporated based on project requirements.',
  },
  {
    category: 'Services & Tech',
    question: 'What technologies are used for development?',
    answer: 'Modern, well-supported technologies are used for frontend, backend, and database layers, along with secure cloud hosting platforms selected to fit each project.',
  },
  {
    category: 'Pricing & Legal',
    question: 'Who owns the code and design assets after completion?',
    answer: 'Full ownership of the source code, design files, databases, and related assets is transferred upon final payment.',
  },
];

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

const localBusinessSchema = {
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
  "sameAs": [
    "https://github.com/vishalinfotechbharat"
  ]
};

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndexes, setOpenIndexes] = useState({});

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
      <Helmet>
        <title>FAQ | Frequently Asked Questions | Vishal Infotech</title>
        <meta name="description" content="Find detailed answers to frequently asked questions about Vishal Infotech freelance IT solutions, including custom web development, SaaS platforms, ERP systems, pricing, and our development lifecycle." />
        <link rel="canonical" href="https://www.vishalinfotech.com/faq" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vishalinfotech.com/faq" />
        <meta property="og:title" content="FAQ | Frequently Asked Questions | Vishal Infotech" />
        <meta property="og:description" content="Find detailed answers to frequently asked questions about Vishal Infotech freelance IT solutions, including custom web development, SaaS platforms, ERP systems, pricing, and our development lifecycle." />
        <meta property="og:image" content="https://www.vishalinfotech.com/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.vishalinfotech.com/faq" />
        <meta name="twitter:title" content="FAQ | Frequently Asked Questions | Vishal Infotech" />
        <meta name="twitter:description" content="Find detailed answers to frequently asked questions about Vishal Infotech freelance IT solutions, including custom web development, SaaS platforms, ERP systems, pricing, and our development lifecycle." />
        <meta name="twitter:image" content="https://www.vishalinfotech.com/logo.png" />

        {/* Schemas */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vishalinfotech.com/" },
              { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://www.vishalinfotech.com/faq" }
            ]
          })}
        </script>
      </Helmet>
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
