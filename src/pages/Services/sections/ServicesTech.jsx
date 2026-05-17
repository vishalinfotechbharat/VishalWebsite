import React from 'react';
import Container from '../../../components/Container/Container';
import styles from './ServicesTech.module.scss';

const row1 = [
  { name: 'React',        color: '#61DAFB' },
  { name: 'Next.js',      color: '#000000' },
  { name: 'TypeScript',   color: '#3178C6' },
  { name: 'Node.js',      color: '#339933' },
  { name: 'Python',       color: '#3776AB' },
  { name: 'PostgreSQL',   color: '#4169E1' },
  { name: 'MongoDB',      color: '#47A248' },
  { name: 'GraphQL',      color: '#E10098' },
  { name: 'Tailwind CSS', color: '#06B6D4' },
  { name: 'Vite',         color: '#646CFF' },
];

const row2 = [
  { name: 'Docker',       color: '#2496ED' },
  { name: 'AWS',          color: '#FF9900' },
  { name: 'Vercel',       color: '#555555' },
  { name: 'Figma',        color: '#F24E1E' },
  { name: 'Redis',        color: '#DC382D' },
  { name: 'Supabase',     color: '#3ECF8E' },
  { name: 'Firebase',     color: '#FFCA28' },
  { name: 'Stripe',       color: '#635BFF' },
  { name: 'Prisma',       color: '#2D3748' },
  { name: 'GitHub',       color: '#24292E' },
];

const row3 = [
  { name: 'Cypress',      color: '#69D3A7' },
  { name: 'Jest',         color: '#C21325' },
  { name: 'Playwright',   color: '#2EAD33' },
  { name: 'SCSS',         color: '#CC6699' },
  { name: 'Nginx',        color: '#009639' },
  { name: 'Linux',        color: '#FCC624' },
  { name: 'Postman',      color: '#FF6C37' },
  { name: 'Slack API',    color: '#4A154B' },
  { name: 'Notion API',   color: '#000000' },
  { name: 'Resend',       color: '#000000' },
];

const TechPill = ({ name, color }) => (
  <div className={styles.pill} style={{ '--glow': color, '--dot': color }}>
    <span className={styles.pill__dot} />
    <span className={styles.pill__name}>{name}</span>
  </div>
);

const ServicesTech = () => (
  <section className={styles.tech}>
    <div className={styles.tech__bg} aria-hidden="true">
      <div className={styles.tech__orb1} />
      <div className={styles.tech__orb2} />
    </div>

    <Container>
      <div className={styles.tech__header}>
        <span className={styles.tech__eyebrow}>Our Toolkit</span>
        <h2 className={styles.tech__title}>
          Tools We Use,{' '}
          <span>Not Tools We Show Off</span>
        </h2>
        <p className={styles.tech__sub}>
          Every technology in our stack earned its place. We pick tools based on
          reliability, community support, and what genuinely fits the project —
          not what's on the trending list this week.
        </p>
      </div>
    </Container>

    <div className={styles.tech__tracks}>
      {/* Row 1 — left */}
      <div className={styles.tech__track}>
        <div className={styles.tech__inner}>
          {[...row1, ...row1].map((t, i) => <TechPill key={`r1-${i}`} {...t} />)}
        </div>
      </div>

      {/* Row 2 — right */}
      <div className={styles.tech__track}>
        <div className={`${styles.tech__inner} ${styles['tech__inner--rev']}`}>
          {[...row2, ...row2].map((t, i) => <TechPill key={`r2-${i}`} {...t} />)}
        </div>
      </div>

      {/* Row 3 — left */}
      <div className={styles.tech__track}>
        <div className={styles.tech__inner}>
          {[...row3, ...row3].map((t, i) => <TechPill key={`r3-${i}`} {...t} />)}
        </div>
      </div>
    </div>
  </section>
);

export default ServicesTech;
