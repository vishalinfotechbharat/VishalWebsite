import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__card}>
          <div className={styles.footer__left}>
            <Link to="/" className={styles.footer__logo}>
              Vishal Infotech
            </Link>
            <p className={styles.footer__tagline}>
              Pioneering the next generation of digital
              experiences through architectural precision and
              creative innovation.
            </p>
          </div>

          <div className={styles.footer__columns}>
            <div className={styles.footer__column}>
              <h4 className={styles.footer__columnTitle}>Company</h4>
              <ul className={styles.footer__list}>
                <li><Link to="/" className={styles.footer__link}>Home</Link></li>
                <li><Link to="/about" className={styles.footer__link}>About</Link></li>
                <li><Link to="/projects" className={styles.footer__link}>Projects</Link></li>
                <li><Link to="/process" className={styles.footer__link}>Process</Link></li>
                <li><Link to="/contact" className={styles.footer__link}>Contact</Link></li>
              </ul>
            </div>

            <div className={styles.footer__column}>
              <h4 className={styles.footer__columnTitle}>Services</h4>
              <ul className={styles.footer__list}>
                <li><span className={styles.footer__link}>Web Development</span></li>
                <li><span className={styles.footer__link}>UI/UX Design</span></li>
                <li><span className={styles.footer__link}>SaaS Solutions</span></li>
                <li><span className={styles.footer__link}>Consulting</span></li>
              </ul>
            </div>

            <div className={styles.footer__column}>
              <h4 className={styles.footer__columnTitle}>Legal</h4>
              <ul className={styles.footer__list}>
                <li><a href="#" className={styles.footer__link}>Privacy Policy</a></li>
                <li><a href="#" className={styles.footer__link}>Terms of Service</a></li>
                <li><a href="#" className={styles.footer__link}>Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
