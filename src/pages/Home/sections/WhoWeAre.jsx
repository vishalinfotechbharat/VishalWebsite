import React from 'react';
import Container from '../../../components/Container/Container';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import styles from './WhoWeAre.module.scss';

const values = [
  { label: 'Design-Driven',        color: '#6366F1' },
  { label: 'Engineering-Focused',  color: '#2563EB' },
  { label: 'Startup-Friendly',     color: '#10B981' },
  { label: 'Quality-First',        color: '#F59E0B' },
];

const WhoWeAre = () => (
  <section className={styles.who}>
    <Container>
      <div className={styles.who__layout}>

        {/* ── Left: Identity Copy ── */}
        <div className={styles.who__content}>
          <ScrollReveal direction="right">
            <span className={styles.who__eyebrow}>Who We Are</span>
            <h2 className={styles.who__title}>
              A Small Studio Built<br />
              on <span>Big Ambitions</span>
            </h2>
            <p className={styles.who__lead}>
              We are a passionate team of designers and engineers who believe great
              digital products can genuinely change businesses. We work closely with
              founders and startups to turn ideas into polished, scalable realities —
              without the overhead of a large agency.
            </p>
            <blockquote className={styles.who__belief}>
              "We believe the best digital products live at the intersection of clean
              code, thoughtful design, and genuine care for the person using them."
            </blockquote>
            <div className={styles.who__values}>
              {values.map((v) => (
                <span key={v.label} className={styles.who__value} style={{ '--color': v.color }}>
                  <span className={styles.who__valueDot} />
                  {v.label}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* ── Right: Visual ── */}
        <div className={styles.who__visual} aria-hidden="true">
          <ScrollReveal direction="left">
            <div className={styles.who__visualWrap}>
              <div className={styles.who__orb} />

              {/* Main identity card */}
              <div className={styles.who__card}>
                <div className={styles.who__cardHeader}>
                  <div className={styles.who__cardAvatar}>VI</div>
                  <div className={styles.who__cardMeta}>
                    <span className={styles.who__cardName}>Vishal Infotech</span>
                    <span className={styles.who__cardRole}>Digital Product Studio</span>
                  </div>
                  <span className={styles.who__cardStatus}>
                    <span className={styles.who__cardDot} />
                    Building
                  </span>
                </div>
                <div className={styles.who__cardBody}>
                  <div className={styles.who__cardRow}>
                    <span className={styles.who__cardLabel}>Focus</span>
                    <span className={styles.who__cardVal}>Design & Engineering</span>
                  </div>
                  <div className={styles.who__cardRow}>
                    <span className={styles.who__cardLabel}>Approach</span>
                    <span className={styles.who__cardVal}>Collaborative & Transparent</span>
                  </div>
                  <div className={styles.who__cardRow}>
                    <span className={styles.who__cardLabel}>Mindset</span>
                    <span className={styles.who__cardVal}>Startup-first, Quality-always</span>
                  </div>
                </div>
                <div className={styles.who__cardFooter}>
                  {['Design', 'Code', 'Launch', 'Scale'].map((tag) => (
                    <span key={tag} className={styles.who__cardTag}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Floating accent cards */}
              <div className={styles.who__floatCard1}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
                <span>User-first Design</span>
              </div>
              <div className={styles.who__floatCard2}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="#10B981" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                <span>Clean Architecture</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </Container>
  </section>
);

export default WhoWeAre;
