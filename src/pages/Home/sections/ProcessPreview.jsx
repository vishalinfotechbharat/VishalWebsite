import React from 'react';
import Container from '../../../components/Container/Container';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import Button from '../../../components/Button/Button';
import styles from './ProcessPreview.module.scss';

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'Deep dive into your business goals, target audience, technical requirements, and competitive landscape to define a winning roadmap.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
      </svg>
    ),
    color: '#60A5FA',
  },
  {
    number: '02',
    title: 'Design & Prototype',
    description: 'Wireframes, user flows, interactive prototypes and pixel-perfect visual design - all validated with real user feedback before a line of code is written.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    color: '#818CF8',
  },
  {
    number: '03',
    title: 'Development & QA',
    description: 'Agile sprints with timely updates. Every feature ships with automated tests, code reviews, and continuous integration for zero-surprise deployments.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    color: '#34D399',
  },
  {
    number: '04',
    title: 'Launch & Scale',
    description: 'Smooth deployment to production with monitoring, performance tuning, and ongoing support. We stay with you as your product grows.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    ),
    color: '#FBBF24',
  },
];

const ProcessPreview = () => (
  <section className={styles.process}>
    <div className={styles.process__bg} aria-hidden="true">
      <div className={styles.process__bgGrid} />
      <div className={styles.process__bgOrb} />
    </div>
    <Container>
      <SectionHeader
        subtitle="How We Work"
        title={<>Our <span>Development Process</span></>}
        description="A structured, transparent workflow designed to take your idea from concept to a polished, production-ready product."
        light
      />

      <div className={styles.process__steps}>
        {steps.map((step, i) => (
          <ScrollReveal key={step.number} delay={i * 0.12}>
            <div className={styles.process__step} style={{ '--color': step.color }}>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className={styles.process__connector} aria-hidden="true" />
              )}

              <div className={styles.process__stepHead}>
                <div className={styles.process__iconWrap}>{step.icon}</div>
                <div className={styles.process__num}>{step.number}</div>
              </div>

              <div className={styles.process__stepBody}>
                <h3 className={styles.process__stepTitle}>{step.title}</h3>
                <p className={styles.process__stepDesc}>{step.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className={styles.process__cta}>
          <Button to="/process" variant="outline-white" size="lg">
            Learn More About Our Process
          </Button>
        </div>
      </ScrollReveal>
    </Container>
  </section>
);

export default ProcessPreview;
