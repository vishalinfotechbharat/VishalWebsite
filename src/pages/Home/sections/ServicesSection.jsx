import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../../components/Container/Container';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import styles from './ServicesSection.module.scss';

const services = [
  {
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>),
    title: 'Website Development',
    desc: 'High-performance, SEO-optimized websites and web apps built with React, Next.js and modern stacks.',
    tags: ['React', 'Next.js', 'CMS'],
    color: '#2563EB',
  },
  {
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>),
    title: 'SaaS Development',
    desc: 'End-to-end SaaS platforms with multi-tenancy, subscriptions, billing and analytics baked in.',
    tags: ['Node.js', 'Stripe', 'Auth'],
    color: '#6366F1',
  },
  {
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>),
    title: 'UI/UX Design',
    desc: 'User research, wireframes, prototypes and pixel-perfect designs that convert visitors into customers.',
    tags: ['Figma', 'Design Systems', 'Research'],
    color: '#EC4899',
  },
  {
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>),
    title: 'ERP Development',
    desc: 'Custom ERP solutions for operations, HR, finance and inventory — integrated and scalable.',
    tags: ['Modular', 'Realtime', 'Reporting'],
    color: '#10B981',
  },
  {
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg>),
    title: 'Dashboard Systems',
    desc: 'Data-rich admin dashboards, analytics portals and internal tools with real-time insights.',
    tags: ['Charts', 'Analytics', 'Admin'],
    color: '#F59E0B',
  },
  {
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>),
    title: 'API Integration',
    desc: 'Seamless third-party integrations — payment gateways, CRMs, ERPs, and any REST/GraphQL API.',
    tags: ['REST', 'GraphQL', 'Webhooks'],
    color: '#06B6D4',
  },
  {
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>),
    title: 'QA & Testing',
    desc: 'Comprehensive automated and manual QA: unit, integration, E2E, performance and security testing.',
    tags: ['Cypress', 'Jest', 'Automation'],
    color: '#8B5CF6',
  },
  {
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>),
    title: 'IT Consulting',
    desc: 'Expert tech guidance: architecture design, system audits, and stack selection built to scale.',
    tags: ['Tech Audit', 'Architecture', 'Roadmap'],
    color: '#EF4444',
  },
  {
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>),
    title: 'Maintenance & Support',
    desc: 'Proactive support: continuous monitoring, security updates, dependency patching, and rapid bug resolution.',
    tags: ['Monitoring', 'Updates', 'Bug Fixes'],
    color: '#F97316',
  },
];

const gridVar = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};
const cardVar = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const ServicesSection = () => (
  <section className={styles.services} aria-label="Our Services">
    <Container>
      <SectionHeader
        subtitle="What We Offer"
        title={<>Services Built for <span>Business Growth</span></>}
        description="From idea to enterprise — we cover every layer of your digital product journey."
      />
      <motion.div
        className={styles.services__grid}
        variants={gridVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        role="list"
      >
        {services.map((svc) => (
          <motion.div
            key={svc.title}
            className={styles.services__card}
            style={{ '--color': svc.color }}
            variants={cardVar}
            role="listitem"
          >
            <div className={styles.services__cardTop}>
              <div className={styles.services__icon}>{svc.icon}</div>
              <div className={styles.services__arrowBtn} aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
            <h3 className={styles.services__title}>{svc.title}</h3>
            <p className={styles.services__desc}>{svc.desc}</p>
            <div className={styles.services__tags}>
              {svc.tags.map((t) => (
                <span key={t} className={styles.services__tag}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  </section>
);

export default ServicesSection;
