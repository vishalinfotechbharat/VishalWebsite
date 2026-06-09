import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../../components/Container/Container';
import styles from './Legal.module.scss';

const PrivacyPolicy = () => {
  return (
    <div className={styles.legalPage}>
      <Helmet>
        <title>Privacy Policy | Vishal Infotech</title>
        <meta name="description" content="Read the Privacy Policy of Vishal Infotech. Learn how we collect, protect, and use your personal information." />
        <link rel="canonical" href="https://www.vishalinfotech.com/privacy-policy" />
        <meta name="robots" content="index, follow" />
        
        {/* Breadcrumb List Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vishalinfotech.com/" },
              { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://www.vishalinfotech.com/privacy-policy" }
            ]
          })}
        </script>
      </Helmet>

      <Container>
        <article className={styles.legalPage__card}>
          <h1 className={styles.legalPage__title}>Privacy Policy</h1>
          <p className={styles.legalPage__updated}>Last updated: June 10, 2026</p>

          <div className={styles.legalPage__content}>
            <p>
              At Vishal Infotech, accessible from vishalinfotech.com, one of our main priorities is the privacy of our visitors. 
              This Privacy Policy document contains types of information that is collected and recorded by Vishal Infotech and how we use it.
            </p>

            <h2>1. Consent</h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its terms.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, 
              will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <p>
              If you contact us directly via our contact form or email, we may receive additional information about you 
              such as your name, email address, phone number, the contents of the message and/or attachments you may send us, 
              and any other information you may choose to provide.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul>
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you regarding project inquiries and support</li>
              <li>Send you emails relating to project updates or milestones</li>
            </ul>

            <h2>4. Log Files</h2>
            <p>
              Vishal Infotech follows a standard procedure of using log files. These files log visitors when they visit websites. 
              All hosting companies do this and a part of hosting services' analytics. The information collected by log files 
              includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, 
              referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us 
              at <strong>vishalinfotechbharat@gmail.com</strong>.
            </p>
          </div>
        </article>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
