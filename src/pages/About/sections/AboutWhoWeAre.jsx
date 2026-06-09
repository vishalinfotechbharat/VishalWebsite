import React from 'react';
import Container from '../../../components/Container/Container';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import styles from './AboutWhoWeAre.module.scss';

const pillars = [
  { label: 'Product Thinking',   color: '#2563EB' },
  { label: 'Clean Engineering',  color: '#6366F1' },
  { label: 'Thoughtful Design',  color: '#10B981' },
  { label: 'Transparent Process',color: '#F59E0B' },
];

const AboutWhoWeAre = () => (
  <section className={styles.who}>
    <Container>
      <div className={styles.who__layout}>

        {/* Left */}
        <div className={styles.who__content}>
          <ScrollReveal direction="right">
            <span className={styles.who__eyebrow}>Who We Are</span>
            <h2 className={styles.who__title}>
              Built Around One Belief:<br />
              <span>Quality Should Never Be Optional</span>
            </h2>
            <p className={styles.who__lead}>
              Vishal Infotech is a freelance IT solutions provider focused on crafting
              scalable, user-centered products. We combine rigorous engineering
              with thoughtful design to build things that genuinely work — for
              the people who use them and the businesses that depend on them.
            </p>
            <p className={styles.who__body}>
              Our team approaches every project as a product challenge, not just a
              development task. That means asking hard questions early, designing
              with clarity, and writing code that other engineers can actually work
              with. We care about the details — because that's where quality lives.
            </p>
            <blockquote className={styles.who__quote}>
              "We believe the best digital products are built where clean code,
              user empathy, and real business understanding meet."
            </blockquote>
            <div className={styles.who__pillars}>
              {pillars.map((p) => (
                <span key={p.label} className={styles.who__pillar}
                  style={{ '--pc': p.color }}>
                  <span className={styles.who__pillarDot} />
                  {p.label}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Right Visual */}
        <div className={styles.who__visual} aria-hidden="true">
          <ScrollReveal direction="left">
            <div className={styles.who__visualWrap}>
              <div className={styles.who__orb} />

              <div className={styles.who__card}>
                <div className={styles.who__cardHead}>
                  <div className={styles.who__cardAvatar}>VI</div>
                  <div className={styles.who__cardMeta}>
                    <span className={styles.who__cardName}>Vishal Infotech</span>
                    <span className={styles.who__cardSub}>Freelance IT Solutions</span>
                  </div>
                </div>
                <div className={styles.who__cardRows}>
                  {[
                    { lbl: 'Speciality', val: 'Web & Mobile Products' },
                    { lbl: 'Approach',   val: 'Design-Led Engineering' },
                    { lbl: 'Focus',      val: 'Scale & Performance' },
                    { lbl: 'Mindset',    val: 'Quality Without Compromise' },
                  ].map((r) => (
                    <div key={r.lbl} className={styles.who__cardRow}>
                      <span className={styles.who__cardLbl}>{r.lbl}</span>
                      <span className={styles.who__cardVal}>{r.val}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.who__cardTags}>
                  {['Design', 'Build', 'Scale', 'Ship'].map((t) => (
                    <span key={t} className={styles.who__cardTag}>{t}</span>
                  ))}
                </div>
              </div>

              <div className={styles.who__floatA}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
                <span>User-First</span>
              </div>
              <div className={styles.who__floatB}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="#10B981" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                <span>Clean Code</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </Container>
  </section>
);

export default AboutWhoWeAre;
