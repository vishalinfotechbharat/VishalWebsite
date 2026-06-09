import React, { useState } from 'react';
import Container from '../../../components/Container/Container';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import styles from './Testimonials.module.scss';

const testimonials = [
  {
    quote: "Vishal Infotech transformed our outdated ERP into a modern, real-time dashboard that our entire team loves. Delivery was ahead of schedule and the quality exceeded expectations.",
    name: 'Arjun Mehta',
    role: 'CEO',
    company: 'FinEdge Solutions',
    avatar: 'AM',
    color: '#2563EB',
    rating: 5,
  },
  {
    quote: "We launched our SaaS platform in just 6 weeks. The team's attention to detail - from design to API architecture - was remarkable. Our user retention is at 87% thanks to the UX work.",
    name: 'Priya Sharma',
    role: 'Founder',
    company: 'MediCare App',
    avatar: 'PS',
    color: '#10B981',
    rating: 5,
  },
  {
    quote: "Best tech partner we've worked with in 5 years. They brought ideas we hadn't thought of, pushed back on bad decisions, and delivered a product we're proud to show partners.",
    name: 'Rohit Kapoor',
    role: 'CTO',
    company: 'DataPilot Inc',
    avatar: 'RK',
    color: '#8B5CF6',
    rating: 5,
  },
  {
    quote: "Our e-commerce platform handles 50k+ daily users without a hiccup. The architecture Vishal Infotech built is rock-solid, and the support team is always responsive.",
    name: 'Sneha Patel',
    role: 'Head of Product',
    company: 'ShopForge',
    avatar: 'SP',
    color: '#F59E0B',
    rating: 5,
  },
  {
    quote: "From branding to deployment, the whole experience was seamless. They built our logistics platform in 8 weeks and it's now the backbone of our 200-city operation.",
    name: 'Vikram Singh',
    role: 'Operations Director',
    company: 'LogiFlow',
    avatar: 'VS',
    color: '#EF4444',
    rating: 5,
  },
  {
    quote: "I came with a rough idea on a napkin. They turned it into a highly successful digital product. The platform they built helped us scale and secure ₹2 Crore in expansion funding within 3 months of launch.",
    name: 'Nisha Agarwal',
    role: 'Co-Founder',
    company: 'LaunchHub',
    avatar: 'NA',
    color: '#06B6D4',
    rating: 5,
  },
];

const Stars = ({ count = 5 }) => (
  <div className={styles.stars}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonials__bg} aria-hidden="true">
        <div className={styles.testimonials__bgOrb} />
      </div>
      <Container>
        <SectionHeader
          subtitle="Client Testimonials"
          title={<>Trusted By Teams <span>Around the World</span></>}
          description="Real words from real clients who scaled their businesses with our solutions."
          light
        />

        <div className={styles.testimonials__grid}>
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.08}>
              <div
                className={`${styles.testimonials__card} ${i === active ? styles['testimonials__card--active'] : ''}`}
                onClick={() => setActive(i)}
                style={{ '--color': t.color }}
              >
                <div className={styles.testimonials__cardTop}>
                  <Stars count={t.rating} />
                  <svg className={styles.testimonials__quoteIcon} width="32" height="32"
                    viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                </div>
                <p className={styles.testimonials__quote}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.testimonials__author}>
                  <div className={styles.testimonials__avatar} style={{ '--avatar-bg': t.color }}>
                    {t.avatar}
                  </div>
                  <div className={styles.testimonials__authorInfo}>
                    <span className={styles.testimonials__name}>{t.name}</span>
                    <span className={styles.testimonials__meta}>
                      {t.role} · {t.company}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
