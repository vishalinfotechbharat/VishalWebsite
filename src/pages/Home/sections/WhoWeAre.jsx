import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../../components/Container/Container';
import styles from './WhoWeAre.module.scss';

// ─── Differentiators (honest, qualitative) ────────────────────
const differentiators = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Built from Scratch',
    desc: 'Every project is custom-crafted to your exact needs. Zero templates, zero compromises.',
    color: '#2563EB',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Direct Collaboration',
    desc: 'Work directly with the developer — no account managers, no middlemen, just honest communication.',
    color: '#6366F1',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Clean, Tested Code',
    desc: 'Production-ready code with proper reviews, testing, and documentation — built to be maintained.',
    color: '#10B981',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Scalable Architecture',
    desc: 'Systems designed to grow from day one — so your product scales without a complete rebuild.',
    color: '#F59E0B',
  },
];

// ─── Mission / Vision ─────────────────────────────────────────
const values = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    label: 'Our Mission',
    title: 'Build Products That Actually Matter',
    desc: 'To help modern businesses and enterprise clients build digital products that are meaningful, scalable, and genuinely useful — crafted with honesty, care, and deep respect for the people using them.',
    color: '#60A5FA',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    label: 'Our Vision',
    title: 'A Partner That Teams Come Back To',
    desc: 'To grow into a trusted digital product partner — one where founders, product teams, and growing businesses know they will find not just capable engineers and designers, but genuine partners who care about their success as much as they do.',
    color: '#818CF8',
  },
];

// ─── Attribute Pills ──────────────────────────────────────────
const attrs = [
  'Full-Stack Development',
  'Design-Led Engineering',
  'Scalable Architecture',
  'Production-Ready Code',
  'Agile & Transparent Delivery',
  'Post-Launch Support',
];

// ─── Variants ─────────────────────────────────────────────────
const containerVar = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const itemVar = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// ─── Component ────────────────────────────────────────────────
const WhoWeAre = () => (
  <section className={styles.who} aria-labelledby="who-heading">
    <Container>

      {/* Header */}
      <motion.div
        className={styles.who__header}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className={styles.who__eyebrow}>Who We Are</span>
        <h2 className={styles.who__title} id="who-heading">
          Freelance IT Solutions Built on{' '}
          <span className={styles.who__grad}>Craft &amp; Honesty</span>
        </h2>
        <p className={styles.who__intro}>
          Vishal Infotech is a freelance IT solutions partner specialising in
          high-performance websites, SaaS platforms, ERP systems, and custom
          software. We work directly with founders and businesses — no agencies,
          no fluff — just clean engineering and thoughtful design that delivers
          real results.
        </p>
      </motion.div>

      {/* Differentiator Grid */}
      <motion.div
        className={styles.who__diff}
        variants={containerVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        role="list"
      >
        {differentiators.map((d) => (
          <motion.div
            key={d.title}
            className={styles.diff}
            style={{ '--dc': d.color }}
            variants={itemVar}
            role="listitem"
          >
            <div className={styles.diff__icon}>{d.icon}</div>
            <div className={styles.diff__text}>
              <h3 className={styles.diff__title}>{d.title}</h3>
              <p className={styles.diff__desc}>{d.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mission / Vision Cards */}
      <div className={styles.who__cards}>
        {values.map((v, i) => (
          <motion.div
            key={v.label}
            className={styles.who__card}
            style={{ '--vc': v.color }}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.who__cardGlow} aria-hidden="true" />
            <div className={styles.who__cardInner}>
              <div className={styles.who__cardTop}>
                <div className={styles.who__cardIcon}>{v.icon}</div>
                <span className={styles.who__cardEyebrow}>{v.label}</span>
              </div>
              <h3 className={styles.who__cardTitle}>{v.title}</h3>
              <p className={styles.who__cardDesc}>{v.desc}</p>
              <div className={styles.who__cardAccent} aria-hidden="true" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quote Statement */}
      <motion.div
        className={styles.who__statement}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className={styles.who__statementDeco} aria-hidden="true" />
        <p className={styles.who__statementText}>
          Every system we architect is built for longevity. Every interface
          we design serves a purpose. Every line of code we write earns its place.
        </p>
        <div className={styles.who__statementDeco} aria-hidden="true" />
      </motion.div>

      {/* Attribute Pills */}
      <motion.div
        className={styles.who__attrs}
        variants={containerVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        role="list"
        aria-label="Core capabilities"
      >
        {attrs.map((attr) => (
          <motion.span
            key={attr}
            className={styles.who__attr}
            variants={itemVar}
            role="listitem"
          >
            <span className={styles.who__attrDot} aria-hidden="true" />
            {attr}
          </motion.span>
        ))}
      </motion.div>

    </Container>
  </section>
);

export default WhoWeAre;
