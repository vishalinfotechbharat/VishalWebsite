import React from 'react';
import Container from '../../../components/Container/Container';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import styles from './StatsSection.module.scss';

const pillars = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Full-Stack Engineering',
    desc: 'Front-end to back-end, database to cloud — we engineer complete digital products from a single, cohesive team.',
    accent: '#60A5FA',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Design-Led Development',
    desc: 'Every interface we build begins with user experience. Good design is not decoration — it\'s the product\'s core.',
    accent: '#818CF8',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
      </svg>
    ),
    title: 'Modern Tech Stack',
    desc: 'React, Next.js, Node.js, TypeScript, AWS, Docker — tools selected for performance, scalability, and longevity.',
    accent: '#34D399',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Agile & Transparent',
    desc: 'Short sprints, weekly demos, and open communication. You always know where your project stands.',
    accent: '#FBBF24',
  },
];

const StatsSection = () => (
  <section className={styles.pillars}>
    <div className={styles.pillars__bg} aria-hidden="true">
      <div className={styles.pillars__bgGlow} />
    </div>
    <Container>
      <div className={styles.pillars__header}>
        <ScrollReveal>
          <span className={styles.pillars__eyebrow}>Our Approach</span>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h2 className={styles.pillars__title}>
            What Sets Our Work Apart
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className={styles.pillars__subtitle}>
            We are a small team with deep expertise. Every decision — from
            architecture to UI — is made with care.
          </p>
        </ScrollReveal>
      </div>

      <div className={styles.pillars__grid}>
        {pillars.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.1}>
            <div className={styles.pillars__card} style={{ '--accent': p.accent }}>
              <div className={styles.pillars__iconWrap}>{p.icon}</div>
              <h3 className={styles.pillars__cardTitle}>{p.title}</h3>
              <p className={styles.pillars__cardDesc}>{p.desc}</p>
              <div className={styles.pillars__line} />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Container>
  </section>
);

export default StatsSection;
