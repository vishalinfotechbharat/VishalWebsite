import React from 'react';
import Container from '../../../components/Container/Container';
import Button from '../../../components/Button/Button';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import styles from './CTABanner.module.scss';

const CTABanner = () => (
  <section className={styles.cta} aria-label="Call to Action">
    <div className={styles.cta__bg} aria-hidden="true">
      <div className={styles.cta__orb1} />
      <div className={styles.cta__orb2} />
      <div className={styles.cta__grid} />
    </div>

    <Container>
      <ScrollReveal>
        <div className={styles.cta__card}>
          <span className={styles.cta__available}>
            <span className={styles.cta__availableDot} />
            Available for New Projects
          </span>

          <h2 className={styles.cta__title}>
            Let's Build Something<br />
            <span className={styles.cta__accent}>Meaningful Together</span>
          </h2>

          <p className={styles.cta__sub}>
            Share your idea with us — we'll listen, think it through,
            and tell you honestly what we can build together.
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
            <Button to="/projects" variant="outline-white" size="lg">
              See Our Work
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </Container>
  </section>
);

export default CTABanner;
