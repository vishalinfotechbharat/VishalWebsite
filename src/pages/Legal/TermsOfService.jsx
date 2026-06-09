import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../../components/Container/Container';
import styles from './Legal.module.scss';

const TermsOfService = () => {
  return (
    <div className={styles.legalPage}>
      <Helmet>
        <title>Terms of Service | Vishal Infotech</title>
        <meta name="description" content="Read the Terms of Service of Vishal Infotech. Learn about our service terms, copyright ownership, and operational policies." />
        <link rel="canonical" href="https://www.vishalinfotech.com/terms-of-service" />
        <meta name="robots" content="index, follow" />
        
        {/* Breadcrumb List Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vishalinfotech.com/" },
              { "@type": "ListItem", "position": 2, "name": "Terms of Service", "item": "https://www.vishalinfotech.com/terms-of-service" }
            ]
          })}
        </script>
      </Helmet>

      <Container>
        <article className={styles.legalPage__card}>
          <h1 className={styles.legalPage__title}>Terms of Service</h1>
          <p className={styles.legalPage__updated}>Last updated: June 10, 2026</p>

          <div className={styles.legalPage__content}>
            <p>
              Welcome to Vishal Infotech. By accessing or using our website, services, and applications, you agree to comply with and be bound by 
              the following terms and conditions. If you do not agree with any part of these terms, please do not use our services.
            </p>

            <h2>1. Intellectual Property Ownership</h2>
            <p>
              Unless otherwise agreed upon in writing for a specific client contract:
            </p>
            <p>
              Once a project is completed and the final invoice is paid, the client receives 100% full ownership of the source code, 
              custom designs, databases, and intellectual property. Vishal Infotech retains the right to display project screenshots 
              in its design portfolio unless a Non-Disclosure Agreement (NDA) states otherwise.
            </p>

            <h2>2. User Representations & Form Use</h2>
            <p>
              By submitting an inquiry through our contact form, you represent and warrant that all information you submit 
              is truthful and accurate, and that you will not use our form to transmit spam or malicious code.
            </p>

            <h2>3. Limitation of Liability</h2>
            <p>
              In no event shall Vishal Infotech be liable for any indirect, incidental, special, consequential, or punitive damages, 
              including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from 
              your access to or use of (or inability to access or use) our website or custom solutions.
            </p>

            <h2>4. Third-Party Links & Services</h2>
            <p>
              Our website may contain links to third-party websites (such as GitHub, social media profiles, or payment gateways). 
              We do not control and are not responsible for the privacy practices, content, or terms of service of third-party platforms.
            </p>

            <h2>5. Governing Law</h2>
            <p>
              These terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>

            <h2>6. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If you have any questions 
              about these Terms, please contact us at <strong>vishalinfotechbharat@gmail.com</strong>.
            </p>
          </div>
        </article>
      </Container>
    </div>
  );
};

export default TermsOfService;
