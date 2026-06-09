import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notFound} role="main" aria-label="404 Page Not Found">
      <Helmet>
        <title>404 - Page Not Found | Vishal Infotech</title>
        <meta name="description" content="The page you are looking for does not exist or has been moved." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      {/* Animated background blobs and grid */}
      <div className={styles.notFound__bg} aria-hidden="true">
        <div className={styles.notFound__grid} />
        <div className={styles.notFound__orb1} />
        <div className={styles.notFound__orb2} />
      </div>

      <Container>
        <div className={styles.notFound__wrapper}>
          <motion.div
            className={styles.notFound__card}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Visual 404 block with hover scaling */}
            <motion.div
              className={styles.notFound__badge}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className={styles.notFound__badgeDot} />
              Error Code 404
            </motion.div>

            <h1 className={styles.notFound__title}>
              Oops! Page <span>Not Found</span>
            </h1>

            <p className={styles.notFound__desc}>
              The link you followed might be broken, or the page has been moved. 
              Let's get you back on track to exploring our digital solutions.
            </p>

            {/* CTA action buttons */}
            <div className={styles.notFound__actions}>
              <Button to="/" variant="primary" size="lg">
                Go back Home
              </Button>
              <Button to="/faq" variant="secondary" size="lg">
                Browse FAQs
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
