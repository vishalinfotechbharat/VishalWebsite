import React, { useState } from 'react';
import Container from '../../../components/Container/Container';
import Button from '../../../components/Button/Button';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import styles from './ContactFAQ.module.scss';

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
    question: 'Can an existing product be redesigned or improved?',
    answer: 'Yes, existing products can be modernized with improved design, performance, and functionality while preserving important content.',
  },
  {
    question: 'Is post-launch support available?',
    answer: 'Ongoing maintenance, updates, and technical assistance can be provided after project completion.',
  },
  {
    question: 'Are digital products optimized for mobile devices?',
    answer: 'Yes, all builds are designed to provide a responsive experience across desktops, tablets, and mobile devices.',
  },
  {
    question: 'Can third-party services be integrated?',
    answer: 'Integrations such as payment gateways, CRMs, analytics, APIs, and other business tools can be incorporated based on project requirements.',
  },
];

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.faq}>
      <Container>
        <div className={styles.faq__layout}>

          {/* Left: sticky header */}
          <div className={styles.faq__left}>
            <ScrollReveal direction="right">
              <span className={styles.faq__eyebrow}>FAQ</span>
              <h2 className={styles.faq__title}>
                Got Questions?<br />
                <span>We Have Answers.</span>
              </h2>
              <p className={styles.faq__subtitle}>
                Everything you'd want to know before starting a conversation
                with us. Can't find what you're looking for? Just ask.
              </p>
              <div className={styles.faq__cta}>
                <Button to="/contact#hero" variant="primary" size="md">
                  Ask Us Directly
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: accordion */}
          <div className={styles.faq__right}>
            <div className={styles.faq__list}>
              {faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div
                    className={`${styles.faq__item} ${openIndex === i ? styles['faq__item--open'] : ''}`}
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    role="button"
                    aria-expanded={openIndex === i}
                    tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && setOpenIndex(openIndex === i ? null : i)}
                  >
                    <div className={styles.faq__question}>
                      <span>{faq.question}</span>
                      <span className={styles.faq__toggle} aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <polyline points="6 9 12 15 18 9"/>
                        </svg>
                      </span>
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

export default ContactFAQ;
