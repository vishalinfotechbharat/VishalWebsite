import React from 'react';
import styles from './TrustedBy.module.scss';

const logos = [
  'TechNova', 'FinEdge', 'HealthSphere', 'CloudBase',
  'DataPilot', 'LaunchHub', 'RetailPro', 'LogiFlow',
  'MediCore', 'SaaSify', 'EduVault', 'BuildForge',
];

const TrustedBy = () => (
  <section className={styles.trusted} aria-label="Trusted by">
    <div className={styles.trusted__header}>
      <p className={styles.trusted__label}>
        Trusted by innovative companies worldwide
      </p>
    </div>
    <div className={styles.trusted__marqueeWrap} aria-hidden="true">
      {/* Fades */}
      <div className={styles.trusted__fadeLeft} />
      <div className={styles.trusted__fadeRight} />

      <div className={styles.trusted__track}>
        <div className={styles.trusted__inner}>
          {[...logos, ...logos].map((name, i) => (
            <div key={i} className={styles.trusted__logo}>
              <div className={styles.trusted__logoDot} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TrustedBy;
