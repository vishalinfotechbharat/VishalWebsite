import React from 'react';
import Container from '../../../components/Container/Container';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import styles from './IndustriesSection.module.scss';

const industries = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    name: 'Healthcare',
    desc: 'HIPAA-ready platforms, telemedicine, EHR systems and patient portals.',
    color: '#EF4444',
    bg: '#FEF2F2',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    name: 'Fintech',
    desc: 'Secure payment systems, trading dashboards, banking & lending platforms.',
    color: '#10B981',
    bg: '#ECFDF5',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 001.78 1.61H19.4a2 2 0 001.8-1.28l2.8-8.71H6" />
      </svg>
    ),
    name: 'E-Commerce',
    desc: 'Custom storefronts, marketplace platforms, inventory & logistics systems.',
    color: '#F59E0B',
    bg: '#FFFBEB',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    name: 'Logistics',
    desc: 'Fleet management, route optimization, warehouse and supply-chain software.',
    color: '#6366F1',
    bg: '#EEF2FF',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    name: 'SaaS Products',
    desc: 'End-to-end SaaS from MVP to full product with subscriptions, billing and auth.',
    color: '#2563EB',
    bg: '#EFF6FF',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    name: 'Startups',
    desc: 'From zero to launch — MVPs, product design, tech strategy and scaling support.',
    color: '#8B5CF6',
    bg: '#F5F3FF',
  },
];

const IndustriesSection = () => (
  <section className={styles.industries}>
    <Container>
      <SectionHeader
        subtitle="Who We Build For"
        title={<>Built for the Industries <span>That Move Fast</span></>}
        description="We design and engineer solutions tailored to the unique workflows, compliance needs, and growth patterns of these industries."
      />
      <div className={styles.industries__grid}>
        {industries.map((ind, i) => (
          <ScrollReveal key={ind.name} delay={i * 0.08}>
            <div className={styles.industries__card} style={{ '--color': ind.color, '--bg': ind.bg }}>
              <div className={styles.industries__icon}>{ind.icon}</div>
              <h3 className={styles.industries__name}>{ind.name}</h3>
              <p className={styles.industries__desc}>{ind.desc}</p>
              <div className={styles.industries__arrow}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Container>
  </section>
);

export default IndustriesSection;
