import React, { useState } from 'react';
import Container from '../../../components/Container/Container';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import Button from '../../../components/Button/Button';
import styles from './FAQSection.module.scss';

const faqs = [
  {
    question: 'How can your services benefit my business?',
    answer: 'We build custom solutions that automate manual workflows, reduce operational costs, and improve system performance. By eliminating off-the-shelf software limitations, we create digital tools tailored exactly to your operations, driving productivity and scaling capacity.',
  },
  {
    question: 'How do you tailor solutions to fit my business needs?',
    answer: 'We start with a discovery phase to understand your unique workflows, bottlenecks, and objectives. We don\'t believe in one-size-fits-all templates; we design the architecture, user experience, and integrations specifically around your business processes.',
  },
  {
    question: 'What technologies will you use to build my software?',
    answer: 'We use modern, stable, and highly supported technologies. Our core stack includes React and Next.js for frontend, Node.js and Python for backend, and PostgreSQL or MongoDB for database management, hosted securely on AWS or Google Cloud.',
  },
  {
    question: 'What services do you offer?',
    answer: 'We provide end-to-end digital product design, web development, SaaS product development, custom ERP system engineering, data-rich internal dashboards, IT consulting, QA testing, and API integration.',
  },
  {
    question: 'What types of SaaS platforms and ERP systems do you build?',
    answer: 'Our SaaS development includes multi-tenant architectures, user role management, subscription billing (Stripe), and usage dashboards. Our ERP services deliver custom operational tools for inventory, CRM, supply chain, and enterprise resource planning tailored to your exact workflows.',
  },
  {
    question: 'What kind of web development and UI/UX design do you do?',
    answer: 'We develop custom React and Next.js web applications, client portals, and high-performance, SEO-optimized marketing websites. In UI/UX, we provide user research, wireframes, and clickable high-fidelity Figma prototypes so you can test the system flow before code is written.',
  },
  {
    question: 'How much do your services cost?',
    answer: 'We offer fixed-price contracts for clearly defined projects, as well as hourly retainers for ongoing development. We provide a detailed cost estimate before any work begins.',
  },
  {
    question: 'How long does a project take?',
    answer: 'A standard website or custom tool typically takes 4 to 8 weeks. Larger, more complex platforms or integrations usually take 3 to 6 months.',
  },
  {
    question: 'Will I own the source code?',
    answer: 'Yes, absolutely. Once the project is completed and the final invoice is paid, you have 100% full ownership of the source code, design assets, and intellectual property.',
  },
  {
    question: 'Do you provide support after launch?',
    answer: 'Yes, we offer flexible post-launch support and maintenance plans that cover security updates, performance monitoring, database backups, and new feature additions.',
  },
  {
    question: 'Can you work with our existing codebase?',
    answer: 'Yes. We can audit, refactor, and optimize your current legacy applications, or build new features on top of your existing systems with minimal disruption.',
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
