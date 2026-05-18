import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.scss';
import logoImg from '../../assets/hero.png';

const navLinks = [
  { path: '/',         label: 'Home'     },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Projects' },
  { path: '/process',  label: 'Process'  },
  { path: '/about',    label: 'About'    },
  { path: '/contact',  label: 'Contact'  },
];

// ─── Variants ─────────────────────────────────────────────────
const navbarVar = {
  hidden:  { y: -90, opacity: 0 },
  visible: {
    y: 0, opacity: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
};

const linksContainerVar = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
};
const linkItemVar = {
  hidden:  { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const mobileMenuVar = {
  hidden:  { opacity: 0, scale: 1.03, y: -10 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0, scale: 1.02, y: -6,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
};
const mobileLinkVar = {
  hidden:  { opacity: 0, x: -18 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

// ─── Component ────────────────────────────────────────────────
const Navbar = ({ introDelay = 0 }) => {
  const [isOpen, setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close on route change
  useEffect(() => { setIsOpen(false); }, [location]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <motion.header
      className={`${styles.navbar} ${scrolled ? styles['navbar--scrolled'] : ''}`}
      variants={navbarVar}
      initial="hidden"
      animate="visible"
      style={introDelay ? { '--nav-delay': `${introDelay}s` } : undefined}
    >
      <div className={styles.navbar__inner}>

        {/* ── Logo ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -24, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="/" className={styles.navbar__logoCard}>
            <img src={logoImg} alt="Vishal Infotech" className={styles.navbar__logoImg} />
          </Link>
        </motion.div>

        {/* ── Desktop Nav Capsule ───────────────────────────── */}
        <motion.nav
          className={styles.navbar__capsule}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Main navigation"
        >
          <motion.ul
            className={styles.navbar__links}
            variants={linksContainerVar}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => (
              <motion.li key={link.path} className={styles.navbar__item} variants={linkItemVar}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `${styles.navbar__link}${isActive ? ` ${styles['navbar__link--active']}` : ''}`
                  }
                  end={link.path === '/'}
                >
                  {link.label}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/contact" className={styles.navbar__cta}>
              Get Started
            </Link>
          </motion.div>
        </motion.nav>

        {/* ── Mobile Hamburger ──────────────────────────────── */}
        <motion.button
          className={`${styles.navbar__toggle}${isOpen ? ` ${styles['navbar__toggle--open']}` : ''}`}
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <span /><span /><span />
        </motion.button>

      </div>

      {/* ── Mobile Overlay Menu ─────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.navbar__mobile}
            variants={mobileMenuVar}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <motion.ul
              className={styles.navbar__mobileLinks}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => (
                <motion.li key={link.path} variants={mobileLinkVar}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `${styles.navbar__mobileLink}${isActive ? ` ${styles['navbar__mobileLink--active']}` : ''}`
                    }
                    end={link.path === '/'}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/contact"
                className={styles.navbar__mobileCta}
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
