import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './Navbar.module.scss';
import logoImg from '../../assets/hero.png';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Projects' },
  { path: '/process', label: 'Process' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles['navbar--scrolled'] : ''}`}>
      <div className={styles.navbar__inner}>
        {/* Left: Logo Card */}
        <Link to="/" className={styles.navbar__logoCard}>
          <img
            src={logoImg}
            alt="Vishal Infotech"
            className={styles.navbar__logoImg}
          />
        </Link>

        {/* Right: Capsule Nav */}
        <nav className={styles.navbar__capsule}>
          <ul className={styles.navbar__links}>
            {navLinks.map((link) => (
              <li key={link.path} className={styles.navbar__item}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `${styles.navbar__link} ${isActive ? styles['navbar__link--active'] : ''}`
                  }
                  end={link.path === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" className={styles.navbar__cta}>
            Get Started
          </Link>
        </nav>

        {/* Mobile: Hamburger */}
        <button
          className={`${styles.navbar__toggle} ${isOpen ? styles['navbar__toggle--open'] : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Mobile: Overlay Menu */}
        <div className={`${styles.navbar__mobile} ${isOpen ? styles['navbar__mobile--open'] : ''}`}>
          <ul className={styles.navbar__mobileLinks}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `${styles.navbar__mobileLink} ${isActive ? styles['navbar__mobileLink--active'] : ''}`
                  }
                  end={link.path === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className={styles.navbar__mobileCta}
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
