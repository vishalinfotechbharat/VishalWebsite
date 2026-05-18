import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/hero.png';
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
          <div className={styles.intro__logoWrap}>
            {/* Logo image */}
            <motion.img
              src={logoImg}
              alt=""
              className={styles.intro__img}
              initial={{ opacity: 0, scale: 0.65, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Company name */}
            <motion.span
              className={styles.intro__name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              Vishal Infotech
            </motion.span>

            {/* Animated bar */}
            <motion.div
              className={styles.intro__bar}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0 }}
            />

            {/* Tagline */}
            <motion.span
              className={styles.intro__tag}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.85 }}
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
