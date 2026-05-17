import React from 'react';
import Container from '../../../components/Container/Container';
import Button from '../../../components/Button/Button';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import styles from './ServicesCTA.module.scss';

const prompts = [
  { text: 'I have an idea and need a technical partner.' },
  { text: 'I need to redesign my product\'s UX.' },
  { text: 'I want to build a SaaS from the ground up.' },
  { text: 'My existing codebase needs a health check.' },
];

const ServicesCTA = () => (
  <section className={styles.cta}>
    <div className={styles.cta__bg} aria-hidden="true">
      <div className={styles.cta__orb1} />
      <div className={styles.cta__orb2} />
      <div className={styles.cta__grid} />
    </div>

    <Container>
      <ScrollReveal>
        <div className={styles.cta__card}>
          <div className={styles.cta__cardGlow} />

          <span className={styles.cta__badge}>
            <span className={styles.cta__badgeDot} />
            Available for New Projects
          </span>

          <h2 className={styles.cta__title}>
            Let's Build Modern Digital{' '}
            <span className={styles.cta__accent}>Experiences Together</span>
          </h2>

          <p className={styles.cta__sub}>
            Whether you have a fully-formed brief or just a rough idea, we're
            happy to have a conversation. No pressure, no commitment — just an
            honest discussion about what we can build together.
          </p>

          <div className={styles.cta__prompts}>
            {prompts.map(p => (
              <span key={p.text} className={styles.cta__prompt}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6l2.5 2.5 4.5-5" stroke="currentColor"
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {p.text}
              </span>
            ))}
          </div>

          <div className={styles.cta__actions}>
            <Button
              to="/contact"
              variant="white"
              size="lg"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              }
            >
              Start a Conversation
            </Button>
            <Button to="/about" variant="outline-white" size="lg">
              Learn About Us
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </Container>
  </section>
);

export default ServicesCTA;
