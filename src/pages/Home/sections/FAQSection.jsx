import React, { useState } from 'react';
import Container from '../../../components/Container/Container';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import Button from '../../../components/Button/Button';
import styles from './FAQSection.module.scss';

const faqs = [
  {
    question: 'What services are offered?',
    answer: 'Website development, web applications, UI/UX design, API integration, maintenance, and technical support.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Timelines depend on project scope and complexity. A detailed schedule is provided before development begins.',
  },
  {
    question: 'Can an existing website be redesigned?',
    answer: 'Yes, existing websites can be modernized with improved design, performance, and functionality while preserving important content.',
  },
  {
    question: 'Is post-launch support available?',
    answer: 'Ongoing maintenance, updates, and technical assistance can be provided after project completion.',
  },
  {
    question: 'Are websites optimized for mobile devices?',
    answer: 'Yes, all websites are designed to provide a responsive experience across desktops, tablets, and mobile devices.',
  },
  {
    question: 'Can third-party services be integrated?',
    answer: 'Integrations such as payment gateways, CRMs, analytics, APIs, and other business tools can be incorporated based on project requirements.',
  },
  {
    question: 'What technologies are used for development?',
    answer: 'Modern, well-supported technologies are used, including React, Next.js, and Node.js, along with reliable cloud hosting platforms selected to fit each project.',
  },
  {
    question: 'Who owns the code and design assets after completion?',
    answer: 'Full ownership of the source code, design files, and related assets is transferred upon final payment.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.faq}>
      <Container>
        <div className={styles.faq__layout}>
          {/* Left */}
          <div className={styles.faq__left}>
            <ScrollReveal direction="right">
              <span className={styles.faq__eyebrow}>FAQ</span>
              <h2 className={styles.faq__title}>
                Got Questions?<br />
                <span>We Have Answers.</span>
              </h2>
              <p className={styles.faq__subtitle}>
                Everything you need to know before starting your project with us.
                Can't find what you're looking for? Let's talk.
              </p>
              <div className={styles.faq__contact}>
                <Button to="/contact" variant="primary" size="md">
                  Ask Us Anything
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right */}
          <div className={styles.faq__right}>
            <div className={styles.faq__list}>
              {faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div
                    className={`${styles.faq__item} ${openIndex === i ? styles['faq__item--open'] : ''}`}
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={openIndex === i}
                    onKeyDown={(e) => e.key === 'Enter' && setOpenIndex(openIndex === i ? -1 : i)}
                  >
                    <div className={styles.faq__question}>
                      <span>{faq.question}</span>
                      <div className={styles.faq__toggle} aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                    <div className={styles.faq__answer}>
                      <div className={styles.faq__answerInner}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
