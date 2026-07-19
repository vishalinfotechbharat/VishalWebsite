import React from 'react';
import Container from '../../../components/Container/Container';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import styles from './AboutValues.module.scss';

const values = [
  {
    color: '#2563EB',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Innovation',
    desc: "We stay curious and up-to-date so we can bring forward-thinking solutions - without chasing hype for its own sake.",
  },
  {
    color: '#10B981',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    title: 'Quality',
    desc: "Every line of code, every pixel, every interaction - we hold ourselves to a high standard because we genuinely care about the work.",
  },
  {
    color: '#8B5CF6',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: 'Transparency',
    desc: "No hidden surprises. We communicate clearly about scope, timelines, and challenges - so you're always in the loop.",
  },
  {
    color: '#F59E0B',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Collaboration',
    desc: "Your vision drives our work. We build with you, not just for you - bringing your ideas to life through open dialogue every step of the way.",
  },
  {
    color: '#06B6D4',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Reliability',
    desc: "We follow through on our commitments. If something comes up, we'll communicate it early - never ghost, never surprise you with bad news.",
  },
  {
    color: '#EC4899',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: 'User-Centric Focus',
    desc: "The end user is always in the room. Every decision we make considers real people - how they think, what they need, and how they'll feel.",
  },
];

const AboutValues = () => (
  <section className={styles.values}>
    <div className={styles.values__bg} aria-hidden="true">
      <div className={styles.values__orb1} />
      <div className={styles.values__orb2} />
    </div>

    <Container>
      <div className={styles.values__header}>
        <span className={styles.values__eyebrow}>Our Values</span>
        <h2 className={styles.values__title}>
          What We <span>Stand By</span>
        </h2>
        <p className={styles.values__sub}>
          These aren't just words on a page - they're the principles that guide
          how we work, how we communicate, and how we show up for our clients.
        </p>
      </div>

      <div className={styles.values__grid}>
        {values.map((v, i) => (
          <ScrollReveal key={v.title} delay={i * 0.08}>
            <div
              className={styles.values__card}
              style={{ '--vc': v.color }}
            >
              <div className={styles.values__cardAccent} />
              <div className={styles.values__iconWrap}>
                {v.icon}
              </div>
              <h3 className={styles.values__cardTitle}>{v.title}</h3>
              <p className={styles.values__cardDesc}>{v.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Container>
  </section>
);

export default AboutValues;
