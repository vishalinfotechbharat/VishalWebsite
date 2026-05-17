import React from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './ScrollReveal.module.scss';

const ScrollReveal = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${styles[`reveal--${direction}`]} ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
