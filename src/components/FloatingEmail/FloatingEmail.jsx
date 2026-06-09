import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FloatingEmail.module.scss';

const FloatingEmail = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="mailto:vishalinfotechbharat@gmail.com"
          className={styles.fab}
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Send Email"
        >
          {/* Tooltip that reveals on hover */}
          <span className={styles.fab__tooltip}>
            Email Us
          </span>

          <div className={styles.fab__iconWrap}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingEmail;
