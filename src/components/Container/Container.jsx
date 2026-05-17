import React from 'react';
import styles from './Container.module.scss';

const Container = ({ children, className = '', wide = false, ...props }) => {
  const classes = [
    styles.container,
    wide ? styles['container--wide'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Container;
