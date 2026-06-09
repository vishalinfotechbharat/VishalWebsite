import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../../../components/Container/Container';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import Button from '../../../components/Button/Button';
import styles from './PortfolioPreview.module.scss';

// Import images
import project1 from '../../../assets/project1.jpg';
import project2 from '../../../assets/project2.png';
import project3Jpg from '../../../assets/project3.jpg';
import project3Png from '../../../assets/project3.png';
import project4 from '../../../assets/project4.png';

const capabilities = [
  {
    id: 1,
    type: 'SaaS & Web Applications',
    headline: 'AiFin Financial Platform',
    description: 'Your smart finance companion - a secure digital banking and asset management platform for tracking wealth and real-time market data.',
    tags: ['SaaS', 'Finance', 'Analytics'],
    color: '#2563EB',
    features: ['Multi-tenant auth', 'Real-time data', 'Subscription billing', 'Admin panels'],
    size: 'large',
    image: project1,
  },
  {
    id: 2,
    type: 'Business Platforms',
    headline: 'Smarter Funding Dashboard',
    description: 'Accelerate business growth - an intelligent business funding and capital management dashboard for tracking credit, cash flow, and analytics.',
    tags: ['Dashboard', 'Fintech', 'SaaS'],
    color: '#3B5EFB',
    features: ['Role-based access', 'Custom workflows', 'Reporting', 'Integrations'],
    size: 'medium',
    image: project4,
  },
  {
    id: 3,
    type: 'Mobile-First Experiences',
    headline: 'Kutulus Booking App',
    description: 'Where adventure meets serenity - a luxury mobile-first booking experience and hospitality management system for high-end boutique resorts.',
    tags: ['Booking', 'Hospitality', 'Mobile-First'],
    color: '#10B981',
    features: ['Offline support', 'Push notifications', 'Native-feel UI', 'App store ready'],
    size: 'medium',
    image: project2,
  },
  {
    id: 4,
    type: 'Luxury Showrooms',
    headline: 'Timezone Luxury Showcase',
    description: 'Discover timeless elegance - a high-end luxury watch showroom featuring Audemars Piguet watches with interactive customization options.',
    tags: ['E-commerce', 'Luxury', 'Retail'],
    color: '#8B5CF6',
    features: ['High-fidelity 3D', 'Custom checkout', 'Product configurator', 'Fast loading'],
    size: 'medium',
    image: project3Jpg,
  },
  {
    id: 5,
    type: 'Creative Portfolios',
    headline: 'The Sanctuary Portfolio',
    description: 'Elevate your escape - a premium architectural property portfolio showcasing ultra-exclusive luxury villa rentals and estates.',
    tags: ['Real Estate', 'Portfolio', 'Corporate'],
    color: '#1C1D21',
    features: ['Interactive map', 'Property search', 'Booking scheduler', 'Virtual tours'],
    size: 'medium',
    image: project3Png,
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
          description="A look at the types of digital products we design and engineer - built for performance, usability, and growth."
        />

        <div className={styles.portfolio__grid}>
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className={`${styles.portfolio__card} ${styles[`portfolio__card--${cap.size}`]}`}
                style={{ '--color': cap.color }}
                onMouseEnter={() => setHovered(cap.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className={styles.portfolio__visual}>
                  <div className={styles.portfolio__visualBg} />
                  <img src={cap.image} alt={cap.headline} className={styles.portfolio__img} />
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
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </div>

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
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.portfolio__cta}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.portfolio__ctaNote}>
            Have a product idea in mind? Let's talk about what we can build together.
          </p>
          <Button to="/contact" variant="primary" size="lg">
            Discuss Your Project
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default PortfolioPreview;
