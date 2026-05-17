import React from 'react';
import Container from '../../../components/Container/Container';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import styles from './TechStack.module.scss';

// Row 1 — scrolls left
const row1 = [
  { name: 'React',       color: '#61DAFB' },
  { name: 'Next.js',     color: '#FFFFFF' },
  { name: 'TypeScript',  color: '#3178C6' },
  { name: 'Node.js',     color: '#84BA64' },
  { name: 'Python',      color: '#FFD04B' },
  { name: 'Figma',       color: '#F24E1E' },
  { name: 'PostgreSQL',  color: '#336791' },
  { name: 'MongoDB',     color: '#47A248' },
  { name: 'AWS',         color: '#FF9900' },
  { name: 'Docker',      color: '#2496ED' },
];

// Row 2 — scrolls right
const row2 = [
  { name: 'GraphQL',     color: '#E10098' },
  { name: 'Tailwind',    color: '#38BDF8' },
  { name: 'Firebase',    color: '#FFCA28' },
  { name: 'GitHub',      color: '#FFFFFF' },
  { name: 'Framer',      color: '#0055FF' },
  { name: 'Redis',       color: '#FF4438' },
  { name: 'Supabase',    color: '#3ECF8E' },
  { name: 'SCSS/SASS',   color: '#CC6699' },
  { name: 'Vercel',      color: '#FFFFFF' },
  { name: 'Stripe',      color: '#635BFF' },
];

const TechPill = ({ name, color }) => (
  <div className={styles.tech__pill} style={{ '--glow': color }}>
    <span className={styles.tech__pillDot} style={{ '--dot': color }} />
    <span className={styles.tech__pillName}>{name}</span>
  </div>
);

const TechStack = () => (
  <section className={styles.tech}>
    <div className={styles.tech__bg} aria-hidden="true">
      <div className={styles.tech__orb1} />
      <div className={styles.tech__orb2} />
    </div>

    <Container>
      <ScrollReveal>
        <div className={styles.tech__header}>
          <span className={styles.tech__eyebrow}>Our Toolkit</span>
          <h2 className={styles.tech__title}>
            Tools We Use to <span>Craft Great Products</span>
          </h2>
          <p className={styles.tech__subtitle}>
            We choose our tools deliberately — each one selected for performance,
            developer experience, and long-term reliability.
          </p>
        </div>
      </ScrollReveal>
    </Container>

    {/* Marquee — full bleed, outside container */}
    <div className={styles.tech__marqueeWrap}>
      {/* Row 1: scrolls left */}
      <div className={styles.tech__track} data-dir="left">
        <div className={styles.tech__trackInner}>
          {[...row1, ...row1].map((t, i) => (
            <TechPill key={`r1-${i}`} {...t} />
          ))}
        </div>
      </div>

      {/* Row 2: scrolls right */}
      <div className={styles.tech__track} data-dir="right">
        <div className={`${styles.tech__trackInner} ${styles['tech__trackInner--rev']}`}>
          {[...row2, ...row2].map((t, i) => (
            <TechPill key={`r2-${i}`} {...t} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TechStack;
