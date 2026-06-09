import React, { useState } from 'react';
import Container from '../../../components/Container/Container';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import styles from './ServicesGrid.module.scss';

const services = [
  {
    id: 'web-dev',
    color: '#2563EB',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Web Development',
    tagline: 'Fast. Responsive. Future-Ready.',
    desc: 'We build modern web applications using the right framework for your needs - not just the trendiest one. Our code is clean, tested, and built to last.',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
    points: [
      'Custom web apps tailored to your exact workflow',
      'Performance-first architecture, optimized for Core Web Vitals',
      'Fully responsive across all devices and screen sizes',
      'API integrations and third-party service connections',
    ],
  },
  {
    id: 'ui-ux',
    color: '#818CF8',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
    title: 'UI/UX Design',
    tagline: 'Intuitive. Beautiful. Purposeful.',
    desc: 'Great design is not decoration - it\'s the reason users stay. We design interfaces that are beautiful to look at and effortless to use.',
    tags: ['Figma', 'Design Systems', 'Prototyping', 'User Research', 'Wireframes'],
    points: [
      'User-centred design from research to pixel-perfect delivery',
      'Consistent design systems and reusable component libraries',
      'Interactive prototypes for stakeholder sign-off before a line of code',
      'Accessibility built in from the start, not retrofitted',
    ],
  },
  {
    id: 'saas',
    color: '#10B981',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'SaaS App Development',
    tagline: 'Scalable. Multi-tenant. Subscription-ready.',
    desc: 'We build SaaS products from the ground up - multi-tenant architecture, role-based access, billing integrations, and dashboards that give your users real value.',
    tags: ['SaaS Architecture', 'Auth', 'Stripe', 'APIs', 'Cloud Deploy'],
    points: [
      'Multi-tenant architecture designed to scale from day one',
      'Role-based access control and team management',
      'Subscription billing with Stripe or your preferred provider',
      'Analytics dashboards and usage reporting built in',
    ],
  },
  {
    id: 'testing',
    color: '#F59E0B',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    title: 'Software Testing',
    tagline: 'Caught before it ships. Every time.',
    desc: 'We treat testing as a first-class discipline. Our QA process catches regressions early, protects your users from bugs, and gives your team confidence to ship.',
    tags: ['Jest', 'Cypress', 'Playwright', 'CI/CD', 'Load Testing'],
    points: [
      'Unit, integration, and end-to-end test coverage',
      'Automated regression testing tied to your CI/CD pipeline',
      'Cross-browser and cross-device compatibility verification',
      'Performance and load testing before major releases',
    ],
  },
  {
    id: 'consulting',
    color: '#06B6D4',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: 'IT Consulting',
    tagline: 'Honest advice. No vendor agenda.',
    desc: 'We help you make better technology decisions - from choosing the right stack to auditing your existing systems. We tell you what will actually work, not what\'s fashionable.',
    tags: ['Tech Audits', 'Architecture', 'Stack Review', 'Roadmapping', 'Code Review'],
    points: [
      'Technology audits for existing systems and codebases',
      'Architecture planning for new products or migrations',
      'Vendor-neutral stack recommendations based on your needs',
      'Team capability reviews and technical roadmapping',
    ],
  },
  {
    id: 'support',
    color: '#EC4899',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6"/>
      </svg>
    ),
    title: 'Maintenance & Support',
    tagline: 'We don\'t disappear after launch.',
    desc: 'Software needs care after it goes live. We provide ongoing maintenance, monitoring, dependency updates, and fast turnaround on bugs - so you can focus on your business.',
    tags: ['Monitoring', 'Updates', 'Bug Fixes', 'Performance', 'Security'],
    points: [
      'Proactive monitoring and uptime alerts',
      'Dependency and security patch management',
      'Fast bug resolution with clear communication',
      'Monthly health reports and performance reviews',
    ],
  },
];

const ServicesGrid = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className={styles.grid} id="services-grid">
      <div className={styles.grid__bg} aria-hidden="true">
        <div className={styles.grid__orb1} />
        <div className={styles.grid__orb2} />
      </div>

      <Container>
        <ScrollReveal>
          <div className={styles.grid__header}>
            <span className={styles.grid__eyebrow}>What We Do</span>
            <h2 className={styles.grid__title}>
              Six Disciplines,{' '}
              <span>One Cohesive Team</span>
            </h2>
            <p className={styles.grid__sub}>
              Every service we offer is connected. Design informs development.
              Testing protects quality. Support keeps everything running.
              We work as one team across all of it.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid__cards}>
          {services.map((svc, i) => (
            <ScrollReveal key={svc.id} delay={i * 0.06}>
              <div
                className={`${styles.card} ${activeId === svc.id ? styles['card--active'] : ''}`}
                style={{ '--sc': svc.color }}
                onMouseEnter={() => setActiveId(svc.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                <div className={styles.card__glow} />
                <div className={styles.card__top}>
                  <div className={styles.card__iconWrap}>
                    {svc.icon}
                  </div>
                  <div className={styles.card__num}>0{i + 1}</div>
                </div>

                <h3 className={styles.card__title}>{svc.title}</h3>
                <p className={styles.card__tagline}>{svc.tagline}</p>
                <p className={styles.card__desc}>{svc.desc}</p>

                <ul className={styles.card__points}>
                  {svc.points.map(pt => (
                    <li key={pt} className={styles.card__point}>
                      <span className={styles.card__pointDot} />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className={styles.card__tags}>
                  {svc.tags.map(tag => (
                    <span key={tag} className={styles.card__tag}>{tag}</span>
                  ))}
                </div>

                <div className={styles.card__footer}>
                  <a href="/contact" className={styles.card__link}>
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesGrid;
