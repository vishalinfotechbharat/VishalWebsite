import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../../components/Container/Container';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './Projects.module.scss';

// Import project images
import project1 from '../../assets/project1.jpg';
import project2 from '../../assets/project2.webp';
import hourglass from '../../assets/Hourglass.webp';
import project3Png from '../../assets/project3.webp';
import project4 from '../../assets/project4.webp';
import healthcareProject from '../../assets/HealthCareProject.webp';
import heartlyDating from '../../assets/Heartly Dating.webp';
import inventoryMngt from '../../assets/InventoryMngt.webp';

const categories = ['All work', 'SaaS', 'E-commerce', 'Dashboards', 'Corporate'];

const projects = [
  {
    id: 1,
    title: 'AiFin Financial Platform',
    category: 'SaaS',
    description: 'Your smart finance companion, a secure digital banking and asset management platform for tracking wealth and real-time market data.',
    tags: ['SaaS', 'Finance', 'Analytics'],
    image: project1,
    alt: 'AiFin Financial SaaS dashboard showing real-time asset tracking and market data',
  },
  {
    id: 2,
    title: 'Holiday Booking App',
    category: 'Corporate',
    description: 'Where adventure meets serenity, a luxury mobile-first booking experience and hospitality management system for high-end boutique resorts.',
    tags: ['Booking', 'Hospitality', 'Mobile-First'],
    image: project2,
    alt: 'Holiday booking application mobile-first interface for boutique resorts',
  },
  {
    id: 3,
    title: 'Hourglass Showcase',
    category: 'E-commerce',
    description: 'Discover timeless elegance, a high-end luxury watch showroom featuring Audemars Piguet watches with interactive customization options.',
    tags: ['E-commerce', 'Luxury', 'Retail'],
    image: hourglass,
    alt: 'Hourglass luxury watch e-commerce showroom showcase with AP watches',
  },
  {
    id: 4,
    title: 'The Sanctuary Portfolio',
    category: 'Corporate',
    description: 'Elevate your escape, a premium architectural property portfolio showcasing ultra-exclusive luxury villa rentals and estates.',
    tags: ['Real Estate', 'Portfolio', 'Corporate'],
    image: project3Png,
    alt: 'The Sanctuary property rental website and real estate portfolio',
  },
  {
    id: 5,
    title: 'Smarter Funding Dashboard',
    category: 'Dashboards',
    description: 'Accelerate business growth, an intelligent business funding and capital management dashboard for tracking credit, cash flow, and analytics.',
    tags: ['Dashboard', 'Fintech', 'SaaS'],
    image: project4,
    alt: 'Smarter Funding dashboard with cash flow graphs and credit score tracker',
  },
  {
    id: 6,
    title: 'CarePulse Health Platform',
    category: 'SaaS',
    description: 'A comprehensive patient monitoring and healthcare analytics platform designed for clinics and wellness tracking.',
    tags: ['Healthcare', 'SaaS', 'Analytics'],
    image: healthcareProject,
    alt: 'CarePulse healthcare dashboard showing patient telemetry, scheduling, and health analytics',
  },
  {
    id: 7,
    title: 'Heartly Dating App',
    category: 'Corporate',
    description: 'A modern, user-centric dating application built with interactive matching algorithms, chat capabilities, and premium onboarding flows.',
    tags: ['Dating', 'Mobile-First', 'Social'],
    image: heartlyDating,
    alt: 'Heartly dating application mobile-first user matching and chat interface',
  },
  {
    id: 8,
    title: 'Apex Inventory Manager',
    category: 'Dashboards',
    description: 'An enterprise-grade inventory management and warehouse tracking system designed to streamline stock control, order fulfillment, and logistics.',
    tags: ['Inventory', 'ERP', 'Logistics'],
    image: inventoryMngt,
    alt: 'Apex inventory management system showing warehouse analytics, stock tracking, and supplier controls',
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
      <Helmet>
        <title>Portfolio & Case Studies | Vishal Infotech</title>
        <meta name="description" content="View Vishal Infotech's portfolio: SaaS platforms, e-commerce stores, fintech dashboards and corporate websites built for real businesses." />
        <link rel="canonical" href="https://www.vishalinfotech.com/projects" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vishalinfotech.com/projects" />
        <meta property="og:title" content="Portfolio & Case Studies | Vishal Infotech" />
        <meta property="og:description" content="View Vishal Infotech's portfolio: SaaS platforms, e-commerce stores, fintech dashboards and corporate websites built for real businesses." />
        <meta property="og:image" content="https://www.vishalinfotech.com/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.vishalinfotech.com/projects" />
        <meta name="twitter:title" content="Portfolio & Case Studies | Vishal Infotech" />
        <meta name="twitter:description" content="View Vishal Infotech's portfolio: SaaS platforms, e-commerce stores, fintech dashboards and corporate websites built for real businesses." />
        <meta name="twitter:image" content="https://www.vishalinfotech.com/logo.png" />

        {/* Breadcrumb List Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vishalinfotech.com/" },
              { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://www.vishalinfotech.com/projects" }
            ]
          })}
        </script>
      </Helmet>
      <section className={styles.projects__hero}>
        <div className={styles.projects__heroBg} />
        <Container>
          <div className={styles.projects__heroContent}>
            <ScrollReveal>
              <div className={styles.projects__badgeWrapper}>
                <span className={styles.projects__badge}>Selected Work</span>
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
                    <img src={project.image} alt={project.alt} className={styles.projects__img} loading="lazy" />
                  </div>
                  <div className={styles.projects__cardBody}>
                    <h3 className={styles.projects__cardTitle}>{project.title}</h3>
                    <p className={styles.projects__cardDesc}>{project.description}</p>
                    <div className={styles.projects__cardTags}>
                      {project.tags.map((tag) => (
                        <span key={tag} className={styles.projects__tag}>{tag}</span>
                      ))}
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

export default Projects;
