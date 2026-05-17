import React from 'react';
import styles from './SectionHeader.module.scss';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const SectionHeader = ({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
  className = '',
}) => {
  return (
    <div
      className={[
        styles.header,
        styles[`header--${align}`],
        light ? styles['header--light'] : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {subtitle && (
        <ScrollReveal>
          <span className={styles.header__eyebrow}>{subtitle}</span>
        </ScrollReveal>
      )}
      {title && (
        <ScrollReveal delay={0.08}>
          <h2 className={styles.header__title}>{title}</h2>
        </ScrollReveal>
      )}
      {description && (
        <ScrollReveal delay={0.16}>
          <p className={styles.header__description}>{description}</p>
        </ScrollReveal>
      )}
    </div>
  );
};

export default SectionHeader;
