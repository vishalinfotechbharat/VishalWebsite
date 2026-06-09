import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImg from '../../assets/logo.png';
import styles from './Footer.module.scss';

const companyLinks = [
  { to: '/',        label: 'Home'     },
  { to: '/about',   label: 'About'    },
  { to: '/projects',label: 'Projects' },
  { to: '/process', label: 'Process'  },
  { to: '/contact', label: 'Contact'  },
];

const serviceLinks = [
  'Web Development',
  'UI/UX Design',
  'SaaS Solutions',
  'ERP Systems',
  'Business Automation',
];

const legalLinks = [
  { href: '#', label: 'Privacy Policy'   },
  { href: '#', label: 'Terms of Service' },
  { href: '#', label: 'Cookie Policy'    },
];

// ─── Variants ─────────────────────────────────────────────────
const cardVar = {
  hidden:  { opacity: 0, y: 48 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const leftVar = {
  hidden:  { opacity: 0, x: -32 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
  },
};

const colsContainerVar = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
};

const colVar = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// ─── Component ────────────────────────────────────────────────
const Footer = () => (
  <footer className={styles.footer} aria-label="Site footer">
    <div className={styles.footer__wrapper}>
      <motion.div
        className={styles.footer__card}
        variants={cardVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* Brand */}
        <motion.div
          className={styles.footer__left}
          variants={leftVar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <Link to="/" className={styles.footer__logoCard}>
            <img src={logoImg} alt="Vishal Infotech" className={styles.footer__logoImg} />
          </Link>
          <p className={styles.footer__tagline}>
            A freelance IT solutions partner building high-performance websites,
            SaaS platforms, ERP systems, and custom software — crafted with
            honesty and purpose.
          </p>

          {/* Social / contact pill */}
          <div className={styles.footer__contact}>
            <Link to="/contact" className={styles.footer__contactBtn}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Start a Project
            </Link>
            <a href="mailto:vishalinfotechbharat@gmail.com" className={styles.footer__emailLink}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              vishalinfotechbharat@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Link Columns */}
        <motion.div
          className={styles.footer__columns}
          variants={colsContainerVar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div className={styles.footer__column} variants={colVar}>
            <h4 className={styles.footer__columnTitle}>Company</h4>
            <ul className={styles.footer__list}>
              {companyLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={styles.footer__link}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className={styles.footer__column} variants={colVar}>
            <h4 className={styles.footer__columnTitle}>Services</h4>
            <ul className={styles.footer__list}>
              {serviceLinks.map((s) => (
                <li key={s}>
                  <span className={styles.footer__link}>{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className={styles.footer__column} variants={colVar}>
            <h4 className={styles.footer__columnTitle}>Legal</h4>
            <ul className={styles.footer__list}>
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={styles.footer__link}>{l.label}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

      </motion.div>

      {/* Bottom bar */}
      <motion.div
        className={styles.footer__bottom}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className={styles.footer__copy}>
          © 2026 Vishal Infotech. All rights reserved.
        </p>
        <p className={styles.footer__made}>
          Crafted with care &amp; purpose.
        </p>
      </motion.div>
    </div>
  </footer>
);

export default Footer;
