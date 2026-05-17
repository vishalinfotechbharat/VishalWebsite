import React, { useState, useMemo } from 'react';
import Container from '../../components/Container/Container';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import CTABanner from '../Home/sections/CTABanner';
import styles from './Projects.module.scss';

const categories = ['All work', 'SaaS', 'E-commerce', 'Dashboards', 'Corporate'];

const projects = [
  {
    id: 1,
    title: 'Nexus CRM Dashboard',
    category: 'Dashboards',
    description: 'Modern CRM platform unifying pipeline, contacts and revenue reporting.',
    tags: ['CRM', 'SaaS', 'Dashboard'],
    artType: 'nexus',
  },
  {
    id: 2,
    title: 'Vogue Storefront',
    category: 'E-commerce',
    description: 'Headless commerce flagship with editorial, search and Shopify checkout.',
    tags: ['E-commerce', 'Headless', 'Next.js'],
    artType: 'vogue',
  },
  {
    id: 3,
    title: 'InsightPro Analytics',
    category: 'SaaS',
    description: 'Self-serve product analytics with funnels, cohorts and dashboards.',
    tags: ['Analytics', 'SaaS', 'B2B'],
    artType: 'insight',
  },
  {
    id: 4,
    title: 'Lumina Corporate',
    category: 'Corporate',
    description: 'Editorial-led corporate site for a renewable-energy company.',
    tags: ['Corporate', 'Editorial', 'CMS'],
    artType: 'lumina',
  },
];

const ProjectArtwork = ({ type }) => {
  return (
    <div className={`${styles.art} ${styles[`art--${type}`]}`}>
      {type === 'nexus' && (
        <div className={styles.artInner}>
          <div className={styles.artSidebar}>
            <div className={styles.artLine} style={{width: '60%', opacity: 0.5}} />
            <div className={styles.artLine} />
            <div className={styles.artLine} />
            <div className={styles.artLine} style={{width: '80%'}} />
          </div>
          <div className={styles.artMain}>
            <div className={styles.artTopbar} />
            <div className={styles.artGrid}>
              <div className={styles.artCard}>
                 <svg viewBox="0 0 100 40" preserveAspectRatio="none" className={styles.artChart}>
                   <path d="M0,35 Q25,15 50,30 T100,20" fill="none" stroke="#3B5EFB" strokeWidth="2"/>
                 </svg>
              </div>
              <div className={`${styles.artCard} ${styles.artCardSolid}`} />
            </div>
          </div>
        </div>
      )}
      
      {type === 'vogue' && (
        <div className={styles.artInnerDark}>
          <div className={styles.artDarkTop} />
          <div className={styles.artDarkBody}>
            <div className={styles.artDarkLeft}>
              <div className={styles.artDarkLogo}>VOGUE</div>
              <div className={styles.artDarkLine} />
              <div className={styles.artDarkLine} style={{width: '70%'}} />
              <div className={styles.artDarkPill} />
            </div>
            <div className={styles.artDarkRight}>
               <div className={styles.artDarkBoxes}>
                 <div className={styles.artDarkBox} />
                 <div className={styles.artDarkBox} />
               </div>
               <div className={styles.artDarkSolidBox} />
            </div>
          </div>
        </div>
      )}

      {type === 'insight' && (
        <div className={styles.artInner}>
           <div className={styles.artTopbarMini}>
             <div className={styles.artPillMini} />
           </div>
           <div className={styles.artGridMini}>
             <div className={styles.artCard} />
             <div className={styles.artCard} />
             <div className={`${styles.artCard} ${styles.artCardSolid}`} />
           </div>
           <div className={styles.artLargeCard}>
             <svg viewBox="0 0 100 30" preserveAspectRatio="none" className={styles.artChart}>
               <path d="M0,25 Q20,10 40,5 T80,15 T100,20" fill="none" stroke="#3B5EFB" strokeWidth="1.5"/>
             </svg>
           </div>
        </div>
      )}

      {type === 'lumina' && (
        <div className={styles.artInnerLumina}>
          <div className={styles.artLuminaHeader}>
            <div className={styles.artLuminaHeaderPill} style={{width: '40px', background: '#fff'}} />
            <div className={styles.artLuminaHeaderGroup}>
              <div className={styles.artLuminaHeaderPill} />
              <div className={styles.artLuminaHeaderPill} />
              <div className={styles.artLuminaHeaderPill} />
            </div>
          </div>
          <div className={styles.artLuminaBody}>
            <div className={styles.artLuminaLeft}>
              <div className={styles.artLuminaLogo}>Lumina.</div>
              <div className={styles.artLine} style={{height: '6px'}} />
              <div className={styles.artLine} style={{height: '6px', width: '70%'}} />
              <div className={styles.artLuminaButton} />
            </div>
            <div className={styles.artLuminaRight}>
              <div className={styles.artLuminaCircle} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

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
                <span className={styles.projects__badge}>— Selected Work • 2024-2025</span>
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
                    <ProjectArtwork type={project.artType} />
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
