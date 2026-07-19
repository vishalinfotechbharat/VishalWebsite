import React from 'react';
import Container from '../../../components/Container/Container';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import styles from './ServicesProcess.module.scss';

const steps = [
  {
    num: '01',
    color: '#60A5FA',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: 'Discovery',
    desc: 'We start by deeply understanding your problem. User research, stakeholder interviews, competitive landscape - before any solution is proposed.',
    actions: ['Requirements workshop', 'User persona mapping', 'Technical feasibility check', 'Project scope agreement'],
  },
  {
    num: '02',
    color: '#818CF8',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: 'Design',
    desc: 'Wireframes become prototypes. Prototypes get tested. Only when we\'re confident the UX is right do we move to visual design and developer handoff.',
    actions: ['Information architecture', 'Lo-fi wireframes', 'Interactive prototype', 'Design system creation'],
  },
  {
    num: '03',
    color: '#34D399',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Development',
    desc: 'Sprint-based development with weekly demos. You see working software early and often - not a big reveal at the end. Feedback shapes every sprint.',
    actions: ['Weekly sprint cycles', 'Continuous integration', 'Code review practice', 'Staging environment demos'],
  },
  {
    num: '04',
    color: '#FBBF24',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    title: 'Testing',
    desc: 'Testing isn\'t a phase - it runs throughout. Unit tests, integration tests, and end-to-end flows are written and maintained alongside the code.',
    actions: ['Automated test suite', 'Cross-browser QA', 'Performance audits', 'Security review'],
  },
  {
    num: '05',
    color: '#F472B6',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'Launch',
    desc: 'A coordinated launch - not a rushed push. We prepare deployment runbooks, monitoring setup, rollback plans, and communicate clearly throughout.',
    actions: ['Production deployment', 'Monitoring & alerting', 'Load testing', 'Rollback plan ready'],
  },
  {
    num: '06',
    color: '#06B6D4',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round">
        <path d="M18 20V10M12 20V4M6 20v-6"/>
      </svg>
    ),
    title: 'Support & Growth',
    desc: 'We stay engaged after the launch. Bug fixes, performance improvements, new features - and clear advice on what to build next and what to skip.',
    actions: ['Ongoing bug support', 'Monthly health reports', 'Feature roadmapping', 'Performance tuning'],
  },
];

const ServicesProcess = () => (
  <section className={styles.process}>
    <div className={styles.process__bg} aria-hidden="true">
      <div className={styles.process__orb1} />
      <div className={styles.process__orb2} />
    </div>

    <Container>
      <ScrollReveal>
        <div className={styles.process__header}>
          <span className={styles.process__eyebrow}>How We Work</span>
          <h2 className={styles.process__title}>
            A Process That Keeps You{' '}
            <span>In Control</span>
          </h2>
          <p className={styles.process__sub}>
            No big reveals. No surprise scope changes. We maintain continuous progress
            visibility so you are always in the loop. Our process is built around
            constant collaboration and early feedback.
          </p>
        </div>
      </ScrollReveal>

      <div className={styles.process__steps}>
        {[steps.slice(0, 3), steps.slice(3, 6)].map((column, colIndex) => (
          <div className={styles.process__col} key={colIndex}>
            {column.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.08}>
                <div className={styles.step} style={{ '--sc': step.color }}>
                  <div className={styles.step__left}>
                    <div className={styles.step__numWrap}>
                      <div className={styles.step__iconWrap}>
                        {step.icon}
                      </div>
                      {i < column.length - 1 && (
                        <div className={styles.step__connector} />
                      )}
                    </div>
                  </div>

                  <div className={styles.step__right}>
                    <div className={styles.step__meta}>
                      <span className={styles.step__num}>{step.num}</span>
                    </div>
                    <h3 className={styles.step__title}>{step.title}</h3>
                    <p className={styles.step__desc}>{step.desc}</p>
                    <ul className={styles.step__actions}>
                      {step.actions.map(a => (
                        <li key={a} className={styles.step__action}>
                          <span className={styles.step__actionDot} />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default ServicesProcess;
