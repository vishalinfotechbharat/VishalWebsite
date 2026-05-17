import React from 'react';
import Container from '../../../components/Container/Container';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import styles from './AboutDifferent.module.scss';

const strengths = [
  {
    title: 'Thoughtful UI/UX',
    desc: 'We design interfaces that are clear, intuitive, and considered. Good UX is not decoration — it is engineering.',
    color: '#6366F1',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: 'Scalable Architecture',
    desc: 'We build foundations that grow. Clean separation, modular design, and systems that handle scale without needing a rewrite.',
    color: '#2563EB',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <path d="M2 20h20M4 20V10l8-6 8 6v10M10 20v-6h4v6" />
      </svg>
    ),
  },
  {
    title: 'Performance by Default',
    desc: 'Speed is a feature. We optimise for load time, rendering, and efficiency from the first sprint — not as a patch.',
    color: '#10B981',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Responsive-First',
    desc: 'Every product we ship looks and works perfectly across all devices — mobile is not an afterthought.',
    color: '#F59E0B',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    title: 'Attention to Detail',
    desc: 'The small things compound. Pixel precision, copy clarity, interaction polish — we notice what most skip.',
    color: '#EC4899',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: 'Clean Code Practices',
    desc: 'Readable, well-structured code that the next developer can understand. We write for maintainability, not just delivery.',
    color: '#06B6D4',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Transparent Communication',
    desc: 'No black-box development. You have visibility into progress, blockers, and decisions throughout the entire engagement.',
    color: '#8B5CF6',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    title: 'Product-Oriented Mindset',
    desc: 'We think beyond features. Every decision is weighed against your product goals, user experience, and business outcomes.',
    color: '#EF4444',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
];

const AboutDifferent = () => (
  <section className={styles.diff}>
    <Container>
      <div className={styles.diff__header}>
        <ScrollReveal>
          <span className={styles.diff__eyebrow}>What Makes Us Different</span>
          <h2 className={styles.diff__title}>
            Real Strengths,<br />
            <span>Not Generic Claims</span>
          </h2>
          <p className={styles.diff__sub}>
            Instead of promises, here is what we actually bring to every
            project — the qualities that shape our work and define how we
            operate.
          </p>
        </ScrollReveal>
      </div>

      <div className={styles.diff__grid}>
        {strengths.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.07}>
            <div className={styles.diff__card} style={{ '--dc': s.color }}>
              <div className={styles.diff__cardTop}>
                <div className={styles.diff__icon}>{s.icon}</div>
                <div className={styles.diff__glow} />
              </div>
              <h3 className={styles.diff__cardTitle}>{s.title}</h3>
              <p className={styles.diff__cardDesc}>{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Container>
  </section>
);

export default AboutDifferent;
