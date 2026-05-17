import React from 'react';
import Container from '../../../components/Container/Container';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import styles from './ServicesApproach.module.scss';

const principles = [
  {
    color: '#60A5FA',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: 'Design Before Code',
    desc: 'Every project starts with clarity — user flows, wireframes, and component specs — before the first line of code is written. This prevents expensive late-stage rework.',
  },
  {
    color: '#34D399',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Scalable by Architecture',
    desc: 'We design systems to handle growth — whether that\'s 10x more users, 10x more data, or a pivot you can\'t predict yet. The foundation holds.',
  },
  {
    color: '#FBBF24',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Security as a Default',
    desc: 'Authentication, data validation, dependency management, and responsible data practices — we treat security as a discipline, not an afterthought.',
  },
  {
    color: '#F472B6',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'Delivery in Sprints',
    desc: 'Short, focused development cycles with weekly demos. You see real progress, not a black box. Feedback shapes the next sprint before things go wrong.',
  },
  {
    color: '#818CF8',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Testing Before Shipping',
    desc: 'We write tests. We run them. We review them in CI before anything hits production. Not because clients demand it — because bugs in production cost more than prevention.',
  },
  {
    color: '#06B6D4',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: 'Transparent by Nature',
    desc: 'You have access to the same information we do — progress, blockers, decisions. We\'d rather tell you something difficult early than hide it until it\'s a crisis.',
  },
];

const ServicesApproach = () => (
  <section className={styles.approach}>
    <div className={styles.approach__bg} aria-hidden="true">
      <div className={styles.approach__orb1} />
      <div className={styles.approach__orb2} />
      <div className={styles.approach__grid} />
    </div>

    <Container>
      <ScrollReveal>
        <div className={styles.approach__header}>
          <span className={styles.approach__eyebrow}>Our Philosophy</span>
          <h2 className={styles.approach__title}>
            Why Our Approach{' '}
            <span className={styles.approach__accent}>Actually Works</span>
          </h2>
          <p className={styles.approach__sub}>
            There are a lot of ways to build software. We've chosen ours
            deliberately — each principle learned the hard way or designed to
            prevent the common mistakes.
          </p>
        </div>
      </ScrollReveal>

      <div className={styles.approach__grid2}>
        {principles.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.07}>
            <div className={styles.principle} style={{ '--pc': p.color }}>
              <div className={styles.principle__glow} />
              <div className={styles.principle__iconWrap}>
                {p.icon}
              </div>
              <h3 className={styles.principle__title}>{p.title}</h3>
              <p className={styles.principle__desc}>{p.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Container>
  </section>
);

export default ServicesApproach;
