import React, { useState, useMemo } from 'react';
import Container from '../../components/Container/Container';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import CTABanner from '../Home/sections/CTABanner';
import styles from './Projects.module.scss';

// Import project images
import project1 from '../../assets/project1.jpg';
import project2 from '../../assets/project2.png';
import project3Jpg from '../../assets/project3.jpg';
import project3Png from '../../assets/project3.png';
import project4 from '../../assets/project4.png';

const categories = ['All work', 'SaaS', 'E-commerce', 'Dashboards', 'Corporate'];

const projects = [
  {
    id: 1,
    title: 'AiFin Financial Platform',
    category: 'SaaS',
    description: 'Your smart finance companion — a secure digital banking and asset management platform for tracking wealth and real-time market data.',
    tags: ['SaaS', 'Finance', 'Analytics'],
    image: project1,
  },
  {
    id: 2,
    title: 'Kutulus Booking App',
    category: 'Corporate',
    description: 'Where adventure meets serenity — a luxury mobile-first booking experience and hospitality management system for high-end boutique resorts.',
    tags: ['Booking', 'Hospitality', 'Mobile-First'],
    image: project2,
  },
  {
    id: 3,
    title: 'Timezone Luxury Showcase',
    category: 'E-commerce',
    description: 'Discover timeless elegance — a high-end luxury watch showroom featuring Audemars Piguet watches with interactive customization options.',
    tags: ['E-commerce', 'Luxury', 'Retail'],
    image: project3Jpg,
  },
  {
    id: 4,
    title: 'The Sanctuary Portfolio',
    category: 'Corporate',
    description: 'Elevate your escape — a premium architectural property portfolio showcasing ultra-exclusive luxury villa rentals and estates.',
    tags: ['Real Estate', 'Portfolio', 'Corporate'],
    image: project3Png,
  },
  {
    id: 5,
    title: 'Smarter Funding Dashboard',
    category: 'Dashboards',
    description: 'Accelerate business growth — an intelligent business funding and capital management dashboard for tracking credit, cash flow, and analytics.',
    tags: ['Dashboard', 'Fintech', 'SaaS'],
    image: project4,
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All work');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All work') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className={styles.projects}>
      <section className={styles.projects__hero}>
        <div className={styles.projects__heroBg} />
        <Container>
          <div className={styles.projects__heroContent}>
            <ScrollReveal>
              <div className={styles.projects__badgeWrapper}>
                <span className={styles.projects__badge}>— Selected Work</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className={styles.projects__title}>Our Projects.</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className={styles.projects__subtitle}>
                A showcase of our capabilities and design thinking.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className={styles.projects__content}>
        <Container>
          <ScrollReveal>
            <div className={styles.projects__filters}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.projects__filterBtn} ${activeFilter === cat ? styles['projects__filterBtn--active'] : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className={styles.projects__grid}>
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.08}>
                <div className={styles.projects__card}>
                  <div className={styles.projects__cardImage}>
                    <img src={project.image} alt={project.title} className={styles.projects__img} />
                  </div>
                  <div className={styles.projects__cardBody}>
                    <h3 className={styles.projects__cardTitle}>{project.title}</h3>
                    <p className={styles.projects__cardDesc}>{project.description}</p>
                    <div className={styles.projects__cardTags}>
                      {project.tags.map((tag) => (
                        <span key={tag} className={styles.projects__tag}>{tag}</span>
                      ))}
                    </div>
                    <div className={styles.projects__cardFooter}>
                      <span className={styles.projects__cardLink}>
                        View case study
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
      
      {/* We can include CTABanner at the bottom to match the image's bottom section */}
      <CTABanner />
    </div>
  );
};

export default Projects;
