import React from 'react';
import Container from '../../../components/Container/Container';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import styles from './AboutApproach.module.scss';

const steps = [
  {
    number: '01',
    title: 'Discovery & Research',
    desc: 'We start by understanding your business context, users, and goals. Before writing a line of code, we ask the questions that shape better outcomes.',
    color: '#60A5FA',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Design & Prototype',
    desc: 'Wireframes become high-fidelity designs. We prototype key interactions and validate flows before development begins - saving time and preventing costly rework.',
    color: '#818CF8',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Engineering & Development',
    desc: 'Agile sprints, daily visibility, and clean architecture. Every feature ships with code reviews and continuous integration - no technical debt by default.',
    color: '#34D399',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Testing & Quality Review',
    desc: 'Automated tests, manual QA, performance checks, and accessibility reviews - built into every cycle, not added as an afterthought at the end.',
    color: '#FBBF24',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Launch & Continuous Support',
    desc: 'We deploy with care and stay involved. Monitoring, performance tuning, and ongoing improvements - because a product launch is the beginning, not the end.',
    color: '#F472B6',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    ),
  },
];

const AboutApproach = () => (
  <section className={styles.approach}>
    <div className={styles.approach__bg} aria-hidden="true">
      <div className={styles.approach__orb} />
    </div>
    <Container>
      <div className={styles.approach__header}>
        <ScrollReveal>
          <span className={styles.approach__eyebrow}>Our Approach</span>
          <h2 className={styles.approach__title}>
            How We Turn Ideas Into<br />
            <span>Working Products</span>
          </h2>
          <p className={styles.approach__sub}>
            A structured, collaborative process designed to reduce risk, maintain
            quality, and keep you informed at every step.
          </p>
        </ScrollReveal>
      </div>

      <div className={styles.approach__steps}>
        {steps.map((step, i) => (
          <ScrollReveal key={step.number} delay={i * 0.1}>
            <div className={styles.approach__step} style={{ '--sc': step.color }}>
              {i < steps.length - 1 && (
                <div className={styles.approach__connector} aria-hidden="true" />
              )}
              <div className={styles.approach__stepLeft}>
                <div className={styles.approach__iconWrap}>{step.icon}</div>
                <div className={styles.approach__numBadge}>{step.number}</div>
              </div>
              <div className={styles.approach__stepBody}>
                <h3 className={styles.approach__stepTitle}>{step.title}</h3>
                <p className={styles.approach__stepDesc}>{step.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Container>
  </section>
);

export default AboutApproach;
