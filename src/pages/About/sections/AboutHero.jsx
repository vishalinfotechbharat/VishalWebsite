import React from 'react';
import Container from '../../../components/Container/Container';
import Button from '../../../components/Button/Button';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import styles from './AboutHero.module.scss';

const codeLines = [
  { key: 'company',  val: '"Vishal Infotech"',   color: '#34D399' },
  { key: 'focus',    val: '"Digital Products"',  color: '#60A5FA' },
  { key: 'approach', val: '"Design + Engineer"', color: '#FBBF24' },
  { key: 'quality',  val: '"non-negotiable"',    color: '#818CF8' },
];

const AboutHero = () => (
  <section className={styles.hero}>
    <div className={styles.hero__bg} aria-hidden="true">
      <div className={styles.hero__orb1} />
      <div className={styles.hero__orb2} />
      <div className={styles.hero__grid} />
    </div>

    <Container>
      <div className={styles.hero__layout}>

        {/* Left */}
        <div className={styles.hero__content}>
          <ScrollReveal>
            <div className={styles.hero__badge}>
              <span className={styles.hero__badgeDot} />
              About Vishal Infotech
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className={styles.hero__title}>
              Designing Digital Experiences That Blend{' '}
              <span className={styles.hero__accent}>Innovation & Craft</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className={styles.hero__sub}>
              We are a modern digital solutions company focused on building
              scalable, high-quality products — where thoughtful design meets
              precise engineering to create experiences that genuinely work.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className={styles.hero__actions}>
              <Button
                to="/contact"
                variant="white"
                size="lg"
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                }
              >
                Discuss Your Project
              </Button>
              <Button to="/services" variant="outline-white" size="lg">
                Explore Services
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Visual */}
        <div className={styles.hero__visual} aria-hidden="true">
          <ScrollReveal direction="left" delay={0.15}>
            <div className={styles.hero__visualWrap}>
              <div className={styles.hero__card}>
                <div className={styles.hero__cardHeader}>
                  <div className={styles.hero__cardDots}>
                    <span /><span /><span />
                  </div>
                  <span className={styles.hero__cardFile}>studio-profile.ts</span>
                </div>
                <div className={styles.hero__cardBody}>
                  <p className={styles.hero__codeLine}>
                    <span className={styles.hero__codeKw}>const</span>
                    <span className={styles.hero__codeVar}> studio</span>
                    <span className={styles.hero__codePunct}> = {'{'}</span>
                  </p>
                  {codeLines.map((line) => (
                    <p key={line.key} className={styles.hero__codeLine}
                      style={{ '--lc': line.color }}>
                      <span className={styles.hero__codeIndent} />
                      <span className={styles.hero__codeKey}>{line.key}</span>
                      <span className={styles.hero__codePunct}>: </span>
                      <span className={styles.hero__codeStr}>{line.val}</span>
                      <span className={styles.hero__codePunct}>,</span>
                    </p>
                  ))}
                  <p className={styles.hero__codeLine}>
                    <span className={styles.hero__codePunct}>{'}'}</span>
                  </p>
                </div>
              </div>

              <div className={styles.hero__chip1}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
                <span>Design-Driven</span>
              </div>
              <div className={styles.hero__chip2}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="#34D399" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Quality-First</span>
              </div>
              <div className={styles.hero__chip3}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <span>Scalable Systems</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </Container>
  </section>
);

export default AboutHero;
