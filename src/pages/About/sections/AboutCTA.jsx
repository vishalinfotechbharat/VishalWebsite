import React from 'react';
import Container from '../../../components/Container/Container';
import Button from '../../../components/Button/Button';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import styles from './AboutCTA.module.scss';

const AboutCTA = () => (
  <section className={styles.cta} aria-label="Call to Action">
    <div className={styles.cta__bg} aria-hidden="true">
      <div className={styles.cta__orb1} />
      <div className={styles.cta__orb2} />
      <div className={styles.cta__grid} />
    </div>

    <Container>
      <ScrollReveal>
        <div className={styles.cta__card}>
          <span className={styles.cta__badge}>
            <span className={styles.cta__badgeDot} />
            Available for New Projects
          </span>

          <h2 className={styles.cta__title}>
            Let's Turn Your Ideas Into<br />
            <span className={styles.cta__accent}>Modern Digital Experiences</span>
          </h2>

          <p className={styles.cta__sub}>
            We'd love to hear what you're working on. Share your idea —
            No pressure, no commitment, just a transparent conversation.
          </p>

          <div className={styles.cta__actions}>
            <Button
              to="/contact"
              variant="white"
              size="lg"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              }
            >
              Start a Conversation
            </Button>
            <Button to="/services" variant="outline-white" size="lg">
              Explore Services
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </Container>
  </section>
);

export default AboutCTA;
