import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../../components/Container/Container';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import styles from './WhyChooseUs.module.scss';

const benefits = [
  {
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>),
    title: 'Fast, Focused Delivery',
    desc: 'Short sprint cycles, clear milestones, and weekly demos — no endless delays or surprise bottlenecks.',
  },
  {
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>),
    title: 'Built to Scale',
    desc: 'We architect for growth from day one — so the product you launch today handles tomorrow\'s demand without a rebuild.',
  },
  {
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>),
    title: 'Ongoing Support',
    desc: 'We don\'t disappear after launch. Maintenance, improvements, and help are always available.',
  },
  {
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>),
    title: 'Security by Default',
    desc: 'We build with data protection, secure authentication, and responsible practices in mind from the very first line of code.',
  },
  {
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>),
    title: 'Outcome-Oriented',
    desc: 'We measure success by your product\'s performance — conversions, retention, load time — not just deliverables.',
  },
  {
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>),
    title: 'Collaborative by Nature',
    desc: 'You\'re a co-creator, not just a client. Your feedback shapes every sprint, design, and decision.',
  },
];

const codeLines = [
  { key: 'quality',       val: '"non-negotiable"',   color: '#34D399' },
  { key: 'deadlines',     val: '"always respected"', color: '#60A5FA' },
  { key: 'code',          val: '"clean + tested"',   color: '#FBBF24' },
  { key: 'design',        val: '"user-first"',       color: '#818CF8' },
  { key: 'communication', val: '"open + honest"',    color: '#F472B6' },
  { key: 'support',       val: '"post-launch too"',  color: '#34D399' },
];

const gridVar = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const itemVar = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const WhyChooseUs = () => (
  <section className={styles.why}>
    <Container>
      <div className={styles.why__layout}>

        {/* Left: Code Philosophy Card */}
        <div className={styles.why__visual}>
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.why__card}>
              <div className={styles.why__cardGlow} />
              <div className={styles.why__cardInner}>
                <div className={styles.why__codeHeader}>
                  <div className={styles.why__codeDots}>
                    <span /><span /><span />
                  </div>
                  <span className={styles.why__codeFile}>our-philosophy.ts</span>
                </div>
                <div className={styles.why__codeBody}>
                  <p className={styles.why__codeLine}>
                    <span className={styles.why__codeKw}>const</span>
                    <span className={styles.why__codeVar}> ourApproach</span>
                    <span className={styles.why__codePunct}> = {'{'}</span>
                  </p>
                  {codeLines.map((line) => (
                    <p key={line.key} className={styles.why__codeLine}>
                      <span className={styles.why__codeIndent} />
                      <span className={styles.why__codeKey}>{line.key}</span>
                      <span className={styles.why__codePunct}>: </span>
                      <span className={styles.why__codeStr} style={{ '--str-color': line.color }}>
                        {line.val}
                      </span>
                      <span className={styles.why__codePunct}>,</span>
                    </p>
                  ))}
                  <p className={styles.why__codeLine}>
                    <span className={styles.why__codePunct}>{'}'}</span>
                  </p>
                </div>
                <div className={styles.why__badges}>
                  {['Quality-First', 'Well-Tested', 'Scalable', 'Clean Code'].map((b) => (
                    <span key={b} className={styles.why__badge}>{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <div className={styles.why__orbBg} aria-hidden="true" />
        </div>

        {/* Right: Benefits */}
        <div className={styles.why__content}>
          <SectionHeader
            subtitle="Why Work With Us"
            title={<>A Partner Who <span>Genuinely Cares</span></>}
            description="We bring engineering discipline, design sensibility, and honest communication to every project we take on."
            align="left"
          />
          <motion.div
            className={styles.why__grid}
            variants={gridVar}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {benefits.map((b) => (
              <motion.div key={b.title} className={styles.why__item} variants={itemVar}>
                <div className={styles.why__itemIcon}>{b.icon}</div>
                <div className={styles.why__itemText}>
                  <h4 className={styles.why__itemTitle}>{b.title}</h4>
                  <p className={styles.why__itemDesc}>{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </Container>
  </section>
);

export default WhyChooseUs;
