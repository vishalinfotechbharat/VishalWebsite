import React from 'react';
import Container from '../../../components/Container/Container';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import styles from './AboutMissionVision.module.scss';

const cards = [
  {
    id: 'mission',
    eyebrow: 'Our Mission',
    title: 'Build Products That Create Real Value',
    body: 'To help businesses of every scale build digital products that are reliable, scalable, and genuinely meaningful - crafted with honesty, precision, and respect for the people who use them every day.',
    color: '#60A5FA',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    id: 'vision',
    eyebrow: 'Our Vision',
    title: 'A Partner That Teams Come Back To',
    body: 'To grow into a trusted digital product partner - one where founders, product teams, and growing businesses know they will find not just capable engineers and designers, but genuine partners who care about their success as much as they do.',
    color: '#818CF8',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

const AboutMissionVision = () => (
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
            Guided by Purpose.<br />
            <span>Defined by Quality.</span>
          </h2>
          <p className={styles.mv__sub}>
            Everything we build reflects a commitment to doing things right —
            not just quickly. Our mission and vision keep us honest.
          </p>
        </ScrollReveal>
      </div>

      <div className={styles.mv__cards}>
        {cards.map((card, i) => (
          <ScrollReveal key={card.id} delay={i * 0.15}>
            <div className={styles.mv__card} style={{ '--mc': card.color }}>
              <div className={styles.mv__cardGlow} />
              <div className={styles.mv__cardInner}>
                <div className={styles.mv__icon}>{card.icon}</div>
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

export default AboutMissionVision;
