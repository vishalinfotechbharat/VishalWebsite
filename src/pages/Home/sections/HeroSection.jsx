import React, { useEffect, useRef } from 'react';
import Button from '../../../components/Button/Button';
import Container from '../../../components/Container/Container';
import styles from './HeroSection.module.scss';

const qualityPillars = [
  { label: 'Full-Stack Engineering' },
  { label: 'Design-Driven' },
  { label: 'Startup-Focused' },
];

const HeroSection = () => {
  const dashRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!dashRef.current) return;
      const rect = dashRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / window.innerWidth;
      const dy = (e.clientY - cy) / window.innerHeight;
      dashRef.current.style.transform =
        `perspective(1000px) rotateY(${dx * 6}deg) rotateX(${-dy * 4}deg)`;
    };
    const handleLeave = () => {
      if (!dashRef.current) return;
      dashRef.current.style.transform =
        'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <section className={styles.hero} aria-label="Hero">
      {/* ── Background ── */}
      <div className={styles.hero__bg} aria-hidden="true">
        <div className={styles.hero__gridOverlay} />
        <div className={styles.hero__orb1} />
        <div className={styles.hero__orb2} />
        <div className={styles.hero__orb3} />
      </div>

      <Container>
        <div className={styles.hero__layout}>

          {/* ── Left: Content ── */}
          <div className={styles.hero__content}>
            <div className={styles.hero__badge}>
              <span className={styles.hero__badgeDot} />
              A Modern Software Studio
            </div>

            <h1 className={styles.hero__title}>
              We Design &amp; Build<br />
              <span className={styles.hero__titleGradient}>
                Digital Products
              </span>
              <br />
              That Grow With You
            </h1>

            <p className={styles.hero__description}>
              Vishal Infotech is a software studio specializing in websites,
              SaaS platforms, ERPs, and custom digital experiences — crafted
              with clean engineering, thoughtful design, and a genuine passion
              for quality.
            </p>

            <div className={styles.hero__actions}>
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                }
              >
                Start a Project
              </Button>
              <Button to="/projects" variant="outline" size="lg">
                See Our Work
              </Button>
            </div>

            {/* Quality pillars — no fake numbers */}
            <div className={styles.hero__pillars}>
              {qualityPillars.map((p) => (
                <div key={p.label} className={styles.hero__pillar}>
                  <span className={styles.hero__pillarDot} />
                  <span className={styles.hero__pillarLabel}>{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Dashboard Mockup (illustrates what we build) ── */}
          <div className={styles.hero__visual} aria-hidden="true">
            <div className={styles.hero__dashWrap} ref={dashRef}>

              {/* Main Dashboard Card */}
              <div className={styles.hero__dash}>
                <div className={styles.hero__dashHeader}>
                  <div className={styles.hero__dashDots}>
                    <span /><span /><span />
                  </div>
                  <span className={styles.hero__dashTitle}>Platform Dashboard</span>
                  <div className={styles.hero__dashLive}>
                    <span className={styles.hero__dashLiveDot} />
                    Preview
                  </div>
                </div>

                <div className={styles.hero__dashMetrics}>
                  <div className={styles.hero__dashMetric}>
                    <span className={styles.hero__dashMetricVal}>$48k</span>
                    <span className={styles.hero__dashMetricLbl}>MRR</span>
                  </div>
                  <div className={styles.hero__dashMetric}>
                    <span className={styles.hero__dashMetricVal}>1,240</span>
                    <span className={styles.hero__dashMetricLbl}>Users</span>
                  </div>
                  <div className={styles.hero__dashMetric}>
                    <span className={styles.hero__dashMetricVal}>99.9%</span>
                    <span className={styles.hero__dashMetricLbl}>Uptime</span>
                  </div>
                </div>

                <div className={styles.hero__dashChart}>
                  <div className={styles.hero__dashChartLabel}>Monthly Growth</div>
                  <div className={styles.hero__dashBars}>
                    {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                      <div key={i} className={styles.hero__dashBar}
                        style={{ '--h': `${h}%`, '--delay': `${i * 0.06}s` }} />
                    ))}
                  </div>
                  <div className={styles.hero__dashChartFooter}>
                    <span>Jan</span><span>Mar</span><span>Jun</span>
                    <span>Sep</span><span>Dec</span>
                  </div>
                </div>
              </div>

              {/* Floating card: what this illustrates */}
              <div className={styles.hero__floatCard1}>
                <div className={styles.hero__floatIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                </div>
                <div className={styles.hero__floatInfo}>
                  <span className={styles.hero__floatVal}>Real-Time</span>
                  <span className={styles.hero__floatLbl}>Data Dashboards</span>
                </div>
              </div>

              {/* Floating card: capability */}
              <div className={styles.hero__floatCard2}>
                <div className={styles.hero__floatInfo2}>
                  <span className={styles.hero__floatVal2}>Scalable</span>
                  <span className={styles.hero__floatLbl2}>Architecture</span>
                </div>
                <div className={styles.hero__floatBar}>
                  <div className={styles.hero__floatBarFill} />
                </div>
              </div>

              {/* Floating card: tech pills */}
              <div className={styles.hero__floatCard3}>
                <div className={styles.hero__techPills}>
                  {['React', 'Node', 'AWS', 'TS'].map((t) => (
                    <span key={t} className={styles.hero__techPill}>{t}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>

      {/* ── Scroll Indicator ── */}
      <div className={styles.hero__scrollIndicator} aria-hidden="true">
        <div className={styles.hero__scrollMouse}>
          <div className={styles.hero__scrollWheel} />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default HeroSection;
