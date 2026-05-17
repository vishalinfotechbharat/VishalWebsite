import React from 'react';
import Container from '../../components/Container/Container';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './Process.module.scss';

const steps = [
  {
    number: '01',
    title: 'Analysis & Discovery',
    description: 'We start by understanding your business, goals, target audience, and market landscape. Through workshops, interviews, and research, we define the project scope and create a comprehensive roadmap.',
    details: [
      'Stakeholder interviews & workshops',
      'Market & competitor analysis',
      'User research & persona development',
      'Technical feasibility assessment',
      'Project roadmap & timeline',
    ],
  },
  {
    number: '02',
    title: 'Design & Prototyping',
    description: 'Our designers transform insights into intuitive, visually stunning interfaces. We create wireframes, interactive prototypes, and polished designs that align with your brand and delight your users.',
    details: [
      'Information architecture',
      'Wireframing & user flows',
      'Visual design & branding',
      'Interactive prototyping',
      'Usability testing & iteration',
    ],
  },
  {
    number: '03',
    title: 'Development & Testing',
    description: 'Our engineers bring designs to life using modern technologies and best practices. We write clean, maintainable code with comprehensive testing to ensure reliability and performance.',
    details: [
      'Frontend & backend development',
      'API design & integration',
      'Database architecture',
      'Unit & integration testing',
      'Performance optimization',
    ],
  },
  {
    number: '04',
    title: 'Delivery & Support',
    description: 'We handle deployment, monitoring, and ongoing maintenance to ensure your product runs smoothly. Our support team is always ready to help you grow and evolve your digital presence.',
    details: [
      'Deployment & CI/CD setup',
      'Performance monitoring',
      'Security audits',
      'Ongoing maintenance & updates',
      'Analytics & optimization',
    ],
  },
];

const Process = () => {
  return (
    <div className={styles.process}>
      <section className={styles.process__hero}>
        <Container>
          <ScrollReveal>
            <span className={styles.process__badge}>Our Process</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className={styles.process__title}>
              How We Bring <span>Ideas to Reality</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className={styles.process__subtitle}>
              Our proven four-step process ensures every project is delivered with
              precision, quality, and on schedule.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className={styles.process__steps}>
        <Container>
          <div className={styles.process__timeline}>
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.1}>
                <div className={`${styles.process__step} ${index % 2 !== 0 ? styles['process__step--reverse'] : ''}`}>
                  <div className={styles.process__stepContent}>
                    <span className={styles.process__stepNumber}>{step.number}</span>
                    <h2 className={styles.process__stepTitle}>{step.title}</h2>
                    <p className={styles.process__stepDesc}>{step.description}</p>
                  </div>
                  <div className={styles.process__stepDetails}>
                    <div className={styles.process__detailsCard}>
                      <h4 className={styles.process__detailsTitle}>Key Activities</h4>
                      <ul className={styles.process__detailsList}>
                        {step.details.map((detail) => (
                          <li key={detail} className={styles.process__detailsItem}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Process;
