import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/logo.png';
import styles from './LogoIntro.module.scss';

// Shows once per browser session
const SEEN_KEY = 'vi_intro_seen';

const LogoIntro = ({ onDone }) => {
  const [show, setShow] = useState(() => {
    try { return !sessionStorage.getItem(SEEN_KEY); }
    catch { return false; }
  });

  useEffect(() => {
    if (!show) { onDone?.(); return; }

    // After 1.9s start exit; after exit (0.6s) call onDone
    const exitTimer = setTimeout(() => setShow(false), 1900);
    const doneTimer = setTimeout(() => {
      try { sessionStorage.setItem(SEEN_KEY, '1'); } catch {}
      onDone?.();
    }, 2500);

    return () => { clearTimeout(exitTimer); clearTimeout(doneTimer); };
  }, []);  // eslint-disable-line

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={styles.intro}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          aria-hidden="true"
        >
          {/* Animated Edge Borders (Brand Blue) */}
          <motion.div
            className={`${styles.intro__edgeLine} ${styles['intro__edgeLine--top']}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
          />
          <motion.div
            className={`${styles.intro__edgeLine} ${styles['intro__edgeLine--right']}`}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ originY: 0 }}
          />
          <motion.div
            className={`${styles.intro__edgeLine} ${styles['intro__edgeLine--bottom']}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 1 }}
          />
          <motion.div
            className={`${styles.intro__edgeLine} ${styles['intro__edgeLine--left']}`}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ originY: 1 }}
          />

          <div className={styles.intro__logoWrap}>
            {/* Logo image inside a professional rounded rectangular container */}
            <motion.div
              className={styles.intro__imgRing}
              initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.95, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <img
                src={logoImg}
                alt=""
                className={styles.intro__img}
              />
            </motion.div>

            {/* Tagline */}
            <motion.span
              className={styles.intro__tag}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Freelance IT Solutions
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LogoIntro;
