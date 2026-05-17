import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../../components/Container/Container';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import Button from '../../../components/Button/Button';
import styles from './PortfolioPreview.module.scss';

const capabilities = [
  {
    id: 1,
    type: 'SaaS & Web Applications',
    headline: 'Analytics Dashboards & Platforms',
    description:
      'We build data-rich SaaS products with multi-tenant architectures, subscription billing, real-time charts, and user management — designed to scale from your first user to your thousandth.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Charts'],
    color: '#2563EB',
    features: ['Multi-tenant auth', 'Real-time data', 'Subscription billing', 'Admin panels'],
    size: 'large',
  },
  {
    id: 2,
    type: 'Business Platforms',
    headline: 'ERP & Workflow Systems',
    description:
      'Custom business software that replaces spreadsheets and manual processes — inventory, HR, operations, and finance modules built around how your team actually works.',
    tags: ['Next.js', 'Python', 'PostgreSQL', 'REST APIs'],
    color: '#8B5CF6',
    features: ['Role-based access', 'Custom workflows', 'Reporting', 'Integrations'],
    size: 'medium',
  },
  {
    id: 3,
    type: 'Mobile-First Experiences',
    headline: 'Responsive Apps & PWAs',
    description:
      'Fast, touch-friendly applications that feel native on every device. From progressive web apps to cross-platform mobile interfaces built with performance at their core.',
    tags: ['React Native', 'PWA', 'TypeScript', 'REST APIs'],
    color: '#10B981',
    features: ['Offline support', 'Push notifications', 'Native-feel UI', 'App store ready'],
    size: 'medium',
  },
];

const PortfolioPreview = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className={styles.portfolio}>
      <Container>
        <SectionHeader
          subtitle="What We Build"
          title={<>Products We <span>Craft With Care</span></>}
          description="A look at the types of digital products we design and engineer — built for performance, usability, and growth."
        />

        <div className={styles.portfolio__grid}>
          {capabilities.map((cap, i) => (
            <ScrollReveal key={cap.id} delay={i * 0.1}>
              <div
                className={`${styles.portfolio__card} ${styles[`portfolio__card--${cap.size}`]}`}
                style={{ '--color': cap.color }}
                onMouseEnter={() => setHovered(cap.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Visual mockup */}
                <div className={styles.portfolio__visual}>
                  <div className={styles.portfolio__visualBg} />
                  <div className={styles.portfolio__mockup}>
                    <div className={styles.portfolio__mockupBar}>
                      <span /><span /><span />
                    </div>
                    <div className={styles.portfolio__mockupContent}>
                      <div className={styles.portfolio__mockupRow} />
                      <div className={`${styles.portfolio__mockupRow} ${styles['portfolio__mockupRow--short']}`} />
                      <div className={styles.portfolio__mockupGrid}>
                        <div className={styles.portfolio__mockupBlock} />
                        <div className={styles.portfolio__mockupBlock} />
                        <div className={styles.portfolio__mockupBlock} />
                      </div>
                    </div>
                  </div>

                  {/* Feature pills on hover */}
                  <div className={`${styles.portfolio__overlay} ${hovered === cap.id ? styles['portfolio__overlay--show'] : ''}`}>
                    <div className={styles.portfolio__featurePills}>
                      {cap.features.map((f) => (
                        <span key={f} className={styles.portfolio__featurePill}>{f}</span>
                      ))}
                    </div>
                    <Link to="/contact" className={styles.portfolio__viewBtn}>
                      Build Something Like This
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Info */}
                <div className={styles.portfolio__info}>
                  <span className={styles.portfolio__type}>{cap.type}</span>
                  <h3 className={styles.portfolio__title}>{cap.headline}</h3>
                  <p className={styles.portfolio__desc}>{cap.description}</p>
                  <div className={styles.portfolio__tags}>
                    {cap.tags.map((t) => (
                      <span key={t} className={styles.portfolio__tag}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className={styles.portfolio__cta}>
            <p className={styles.portfolio__ctaNote}>
              Have a product idea in mind? Let's talk about what we can build together.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Discuss Your Project
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};

export default PortfolioPreview;
