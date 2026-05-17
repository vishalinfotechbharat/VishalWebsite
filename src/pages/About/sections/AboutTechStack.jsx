import React from 'react';
import Container from '../../../components/Container/Container';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import styles from './AboutTechStack.module.scss';

const row1 = [
  { name: 'React',       color: '#61DAFB' },
  { name: 'Next.js',     color: '#000000' },
  { name: 'TypeScript',  color: '#3178C6' },
  { name: 'Node.js',     color: '#339933' },
  { name: 'Python',      color: '#3776AB' },
  { name: 'PostgreSQL',  color: '#4169E1' },
  { name: 'MongoDB',     color: '#47A248' },
  { name: 'GraphQL',     color: '#E10098' },
  { name: 'Tailwind CSS',color: '#06B6D4' },
  { name: 'Vite',        color: '#646CFF' },
];

const row2 = [
  { name: 'Docker',      color: '#2496ED' },
  { name: 'AWS',         color: '#FF9900' },
  { name: 'Vercel',      color: '#000000' },
  { name: 'Figma',       color: '#F24E1E' },
  { name: 'Redis',       color: '#DC382D' },
  { name: 'Supabase',    color: '#3ECF8E' },
  { name: 'Firebase',    color: '#FFCA28' },
  { name: 'Stripe',      color: '#635BFF' },
  { name: 'Prisma',      color: '#2D3748' },
  { name: 'Git',         color: '#F05032' },
];

const TechPill = ({ name, color }) => (
  <div
    className={styles.tech__pill}
    style={{ '--glow': color }}
  >
    <span
      className={styles.tech__pillDot}
      style={{ '--dot': color }}
    />
    <span className={styles.tech__pillName}>{name}</span>
  </div>
);

const AboutTechStack = () => (
  <section className={styles.tech}>
    <div className={styles.tech__bg} aria-hidden="true">
      <div className={styles.tech__orb1} />
      <div className={styles.tech__orb2} />
    </div>

    <Container>
      <div className={styles.tech__header}>
        <span className={styles.tech__eyebrow}>Our Toolkit</span>
        <h2 className={styles.tech__title}>
          Modern Technologies That<br />
          <span>Power Our Work</span>
        </h2>
        <p className={styles.tech__subtitle}>
          We choose tools based on what's right for the project — proven,
          battle-tested technologies paired with modern frameworks.
        </p>
      </div>
    </Container>

    <div className={styles.tech__marqueeWrap}>
      {/* Row 1 — scrolls left */}
      <div className={styles.tech__track}>
        <div className={styles.tech__trackInner}>
          {[...row1, ...row1].map((t, i) => (
            <TechPill key={`r1-${i}`} name={t.name} color={t.color} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className={styles.tech__track}>
        <div className={`${styles.tech__trackInner} ${styles['tech__trackInner--rev']}`}>
          {[...row2, ...row2].map((t, i) => (
            <TechPill key={`r2-${i}`} name={t.name} color={t.color} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutTechStack;
