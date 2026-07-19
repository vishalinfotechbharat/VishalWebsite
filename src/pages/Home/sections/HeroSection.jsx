import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Button from '../../../components/Button/Button';
import Container from '../../../components/Container/Container';
import styles from './HeroSection.module.scss';

// ─── Data ─────────────────────────────────────────────────────
const trustTags = [
  'Modern Web Solutions',
  'SaaS & ERP Experts',
  'UI/UX Driven Development',
  'Scalable Architecture',
];

const sidebarItems = [
  {
    label: 'Website',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    label: 'SaaS Platform',
    active: true,
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    label: 'ERP System',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
      </svg>
    ),
  },
  {
    label: 'UI/UX Design',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
];

const chartBars = [55, 38, 78, 48, 88, 42, 72, 60, 94, 50];

// ─── Animation Variants ───────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Component ────────────────────────────────────────────────
const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springCfg = { stiffness: 45, damping: 16, mass: 1 };
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springCfg);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3.5, -3.5]), springCfg);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className={styles.hero} aria-label="Hero section">

      {/* ── Animated Background ─────────────────────────────── */}
      <div className={styles.hero__bg} aria-hidden="true">
        <div className={styles.hero__grid} />
        <div className={styles.hero__orb1} />
        <div className={styles.hero__orb2} />
        <div className={styles.hero__orb3} />
        <div className={styles.hero__radialMask} />
      </div>

      <Container>
        <div className={styles.hero__layout}>

          {/* ── Left: Content ───────────────────────────────── */}
          <motion.div
            className={styles.hero__content}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main heading */}
            <motion.h1 className={styles.hero__title} variants={itemVariants}>
              Engineering Digital<br />
              Experiences That<br />
              <span className={styles.hero__grad}>Scale Businesses</span>
              <br className={styles.hero__titleBreak} />
              <span className={styles.hero__grad}>Faster</span>
            </motion.h1>

            {/* Description */}
            <motion.p className={styles.hero__desc} variants={itemVariants}>
              We Build high-performance websites, SaaS platforms,
              ERP systems, and scalable digital solutions designed to help modern
              businesses grow faster.
            </motion.p>

            {/* CTA buttons */}
            <motion.div className={styles.hero__actions} variants={itemVariants}>
              <Button
                to="/services"
                variant="primary"
                size="lg"
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                }
              >
                Explore Services
              </Button>
            </motion.div>
          </motion.div>

          {/* ── Right: Visual Composition ────────────────────── */}
          <div
            className={styles.hero__visual}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            aria-hidden="true"
          >
            <motion.div
              className={styles.hero__visualInner}
              style={{ rotateX, rotateY }}
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >

              {/* ── Main App Window Card ──────────────────────── */}
              <div className={styles.hero__appCard}>

                {/* Window chrome */}
                <div className={styles.hero__winBar}>
                  <div className={styles.hero__winDots}>
                    <span /><span /><span />
                  </div>
                  <div className={styles.hero__winUrl}>
                    <span className={styles.hero__winLock}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2zM12 3a4 4 0 014 4v4H8V7a4 4 0 014-4z" />
                      </svg>
                    </span>
                    vishalinfotech.app
                  </div>
                  <div className={styles.hero__winLive}>
                    <span className={styles.hero__winLiveDot} />
                    Live
                  </div>
                </div>

                {/* App body: sidebar + main */}
                <div className={styles.hero__appBody}>

                  {/* Sidebar nav */}
                  <nav className={styles.hero__sidebar}>
                    <span className={styles.hero__sideHead}>Services</span>
                    {sidebarItems.map((item) => (
                      <div
                        key={item.label}
                        className={`${styles.hero__sideItem}${item.active ? ` ${styles['hero__sideItem--active']}` : ''}`}
                      >
                        <span className={styles.hero__sideIcon}>{item.icon}</span>
                        <span className={styles.hero__sideLabel}>{item.label}</span>
                        {item.active && <span className={styles.hero__sideIndicator} />}
                      </div>
                    ))}
                  </nav>

                  {/* Main content area */}
                  <div className={styles.hero__appMain}>

                    {/* Header row */}
                    <div className={styles.hero__mainHead}>
                      <div className={styles.hero__mainTitle} />
                      <div className={styles.hero__mainStatus}>
                        <span className={styles.hero__mainStatusDot} />
                        <span>Active</span>
                      </div>
                    </div>

                    {/* Metric cards */}
                    <div className={styles.hero__metricRow}>
                      <div className={styles.hero__metricCard}>
                        <div className={styles.hero__metricIcon}>
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                            <polyline points="16 7 22 7 22 13" />
                          </svg>
                        </div>
                        <div className={styles.hero__metricLines}>
                          <div className={styles.hero__metricLine} />
                          <div className={`${styles.hero__metricLine} ${styles['hero__metricLine--sm']}`} />
                        </div>
                      </div>
                      <div className={styles.hero__metricCard}>
                        <div className={`${styles.hero__metricIcon} ${styles['hero__metricIcon--purple']}`}>
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                          </svg>
                        </div>
                        <div className={styles.hero__metricLines}>
                          <div className={styles.hero__metricLine} />
                          <div className={`${styles.hero__metricLine} ${styles['hero__metricLine--xs']}`} />
                        </div>
                      </div>
                      <div className={styles.hero__metricCard}>
                        <div className={`${styles.hero__metricIcon} ${styles['hero__metricIcon--cyan']}`}>
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                          </svg>
                        </div>
                        <div className={styles.hero__metricLines}>
                          <div className={styles.hero__metricLine} />
                          <div className={`${styles.hero__metricLine} ${styles['hero__metricLine--md']}`} />
                        </div>
                      </div>
                    </div>

                    {/* Chart area */}
                    <div className={styles.hero__chartArea}>
                      <div className={styles.hero__chartHead}>
                        <div className={styles.hero__chartAccent} />
                        <span>Performance Overview</span>
                      </div>
                      <div className={styles.hero__bars}>
                        {chartBars.map((h, i) => (
                          <div
                            key={i}
                            className={styles.hero__bar}
                            style={{ '--bh': `${h}%`, '--bd': `${i * 0.07}s` }}
                          />
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* ── Float Card 1: Launch notification ─────────── */}
              <motion.div
                className={styles.hero__notifCard}
                animate={{ y: [0, -11, 0] }}
                transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
              >
                <div className={styles.hero__notifIcon}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className={styles.hero__notifText}>
                  <span className={styles.hero__notifTitle}>Website Launched</span>
                  <span className={styles.hero__notifSub}>client.vishalinfotech.io</span>
                </div>
              </motion.div>

              {/* ── Float Card 2: Tech stack ──────────────────── */}
              <motion.div
                className={styles.hero__techCard}
                animate={{ y: [0, 11, 0] }}
                transition={{ duration: 5.8, ease: 'easeInOut', repeat: Infinity, delay: 1 }}
              >
                <span className={styles.hero__techLabel}>Built with</span>
                <div className={styles.hero__techPills}>
                  {['React', 'Node.js', 'AWS', 'Next.js'].map((t) => (
                    <span key={t} className={styles.hero__techPill}>{t}</span>
                  ))}
                </div>
              </motion.div>

              {/* ── Float Card 3: Active project status ──────── */}
              <motion.div
                className={styles.hero__statusCard}
                animate={{ x: [0, -7, 0] }}
                transition={{ duration: 4.5, ease: 'easeInOut', repeat: Infinity, delay: 0.6 }}
              >
                <span className={styles.hero__statusDot} />
                <div className={styles.hero__statusText}>
                  <span className={styles.hero__statusTitle}>ERP Module</span>
                  <span className={styles.hero__statusSub}>In Development</span>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </Container>

      {/* ── Scroll Indicator ────────────────────────────────── */}
      <motion.div
        className={styles.hero__scroll}
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.7 }}
      >
        <div className={styles.hero__scrollMouse}>
          <motion.div
            className={styles.hero__scrollDot}
            animate={{ y: [0, 8, 0], opacity: [1, 0.15, 1] }}
            transition={{ duration: 1.6, ease: 'easeInOut', repeat: Infinity }}
          />
        </div>
        <span>Scroll to explore</span>
      </motion.div>

    </section>
  );
};

export default HeroSection;
