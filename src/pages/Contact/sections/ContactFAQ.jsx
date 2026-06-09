import React, { useState } from 'react';
import Container from '../../../components/Container/Container';
import Button from '../../../components/Button/Button';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import styles from './ContactFAQ.module.scss';

const faqs = [
  {
    question: 'What services do you provide?',
    answer: 'We offer end-to-end digital product services: web development, UI/UX design, SaaS application development, software testing, IT consulting, and ongoing maintenance & support. We work across the full lifecycle — from initial idea and design to launch and beyond.',
  },
  {
    question: 'How long does a project usually take?',
    answer: 'It depends on scope and complexity. A focused digital product or website typically takes 4–8 weeks. A full SaaS platform or complex web app can take 3–6 months. We provide clear timeline estimates after the discovery phase, and we\'re transparent if scope changes affect delivery.',
  },
  {
    question: 'Do you work with growing businesses and mid-market companies?',
    answer: 'Yes — we partner with businesses of various sizes. Whether you\'re a growing company looking to optimize workflows or a larger enterprise scaling your digital systems, we adapt our process to fit your operations and goals.',
  },
  {
    question: 'Can you redesign or improve an existing product?',
    answer: 'Absolutely. We regularly take on existing products that need a design overhaul, a performance improvement, or a codebase refactor. We start with a thorough audit and give you an honest assessment of what needs to change and in what order.',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes. We don\'t disappear after launch. We offer flexible maintenance and support arrangements — from bug fixes and dependency updates to feature development and monitoring. We can discuss what level of ongoing engagement makes sense for your product.',
  },
  {
    question: 'How do we get started working together?',
    answer: 'Fill in the contact form above and we\'ll follow up within 24 hours. We\'ll schedule a short introductory call to hear about your project, ask a few questions, and share our honest thoughts. From there, we\'ll put together a proposal if it seems like a good fit.',
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
