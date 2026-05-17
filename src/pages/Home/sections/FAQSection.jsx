import React, { useState } from 'react';
import Container from '../../../components/Container/Container';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import Button from '../../../components/Button/Button';
import styles from './FAQSection.module.scss';

const faqs = [
  {
    question: 'What types of businesses do you work with?',
    answer: 'We partner with startups, scaleups, and enterprise clients across healthcare, fintech, e-commerce, SaaS, logistics, and more. Whether you are a solo founder with an idea or an enterprise needing a full rebuild, we have a model that fits.',
  },
  {
    question: 'How long does it take to build an MVP?',
    answer: 'Most MVPs are ready in 4–8 weeks depending on complexity. We follow a lean sprint model — design in week 1–2, core development in weeks 3–6, QA and launch in the final week. You get daily updates throughout.',
  },
  {
    question: 'Do you offer post-launch support and maintenance?',
    answer: 'Absolutely. Every project includes a 30-day free bug-fix warranty. Beyond that, we offer flexible maintenance retainers — from basic monitoring to full dedicated support teams on standby 24/7.',
  },
  {
    question: 'How do you handle project pricing and billing?',
    answer: 'We offer both fixed-price project contracts and time-and-material engagements depending on the scope. You get a detailed proposal with milestones before any work begins — no surprises, ever.',
  },
  {
    question: 'What is your tech stack, and can you work with ours?',
    answer: 'We are polyglot engineers. Our default stack is React / Next.js + Node.js / Python + PostgreSQL / MongoDB + AWS. But we regularly adapt to client stacks — Vue, Angular, Laravel, Django, Rails — you name it.',
  },
  {
    question: 'How do you ensure code quality and security?',
    answer: 'Every codebase goes through automated testing (unit, integration, E2E), peer code reviews, OWASP security checks, dependency audits, and CI/CD pipelines. We deliver production-grade code from sprint one.',
  },
  {
    question: 'Can you take over an existing project or legacy codebase?',
    answer: 'Yes. We conduct a thorough technical audit, document what exists, and create a clear refactoring or migration roadmap. We are comfortable working inside complex or unfamiliar codebases and will give you an honest assessment of what needs to change and why.',
  },
  {
    question: 'Do you sign NDAs and IP ownership agreements?',
    answer: 'Yes — we sign mutual NDAs before any discovery call. All IP created during a project is fully transferred to you upon final payment. We use industry-standard contracts vetted by legal professionals.',
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
                Everything you need to know before starting your project with Vishal Infotech.
                Don't find what you're looking for? Let's talk.
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
