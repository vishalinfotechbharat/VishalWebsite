import React from 'react';
import Container from '../../../components/Container/Container';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import styles from './MissionVision.module.scss';

const cards = [
  {
    id: 'mission',
    eyebrow: 'Our Mission',
    title: 'Build Products That Actually Matter',
    body: 'To help businesses and startups build digital products that are meaningful, scalable, and genuinely useful — crafted with honesty, care, and deep respect for the people using them.',
    color: '#60A5FA',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    id: 'vision',
    eyebrow: 'Our Vision',
    title: 'Become a Studio Teams Trust',
    body: 'To grow into a recognized digital product studio — where startups, founders, and growing businesses find not just skilled engineers and designers, but genuine collaborators who care about their success.',
    color: '#818CF8',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

const MissionVision = () => (
  <section className={styles.mv}>
    <div className={styles.mv__bg} aria-hidden="true">
      <div className={styles.mv__orb1} />
      <div className={styles.mv__orb2} />
    </div>
    <Container>
      <div className={styles.mv__header}>
        <ScrollReveal>
          <span className={styles.mv__eyebrow}>What Drives Us</span>
          <h2 className={styles.mv__title}>
            Purpose-Led.<br />
            <span>Product-Obsessed.</span>
          </h2>
          <p className={styles.mv__subtitle}>
            We don't just write code or push pixels. We build with intention — driven
            by a clear sense of why quality matters and who it's for.
          </p>
        </ScrollReveal>
      </div>

      <div className={styles.mv__cards}>
        {cards.map((card, i) => (
          <ScrollReveal key={card.id} delay={i * 0.15}>
            <div className={styles.mv__card} style={{ '--color': card.color }}>
              <div className={styles.mv__cardGlow} />
              <div className={styles.mv__cardInner}>
                <div className={styles.mv__icon}>
                  {card.icon}
                </div>
                <span className={styles.mv__cardEyebrow}>{card.eyebrow}</span>
                <h3 className={styles.mv__cardTitle}>{card.title}</h3>
                <p className={styles.mv__cardBody}>{card.body}</p>
                <div className={styles.mv__cardAccent} />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Container>
  </section>
);

export default MissionVision;
