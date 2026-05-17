import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
  icon,
  className = '',
  ...props
}) => {
  const classes = [
    styles.btn,
    styles[`btn--${variant}`],
    styles[`btn--${size}`],
    disabled ? styles['btn--disabled'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      <span className={styles.btn__text}>{children}</span>
      {icon && <span className={styles.btn__icon}>{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} {...props}>
      {content}
    </button>
  );
};

export default Button;
