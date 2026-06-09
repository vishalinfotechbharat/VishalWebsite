import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../../components/Container/Container';
import styles from './Legal.module.scss';

const CookiePolicy = () => {
  return (
    <div className={styles.legalPage}>
      <Helmet>
        <title>Cookie Policy | Vishal Infotech</title>
        <meta name="description" content="Read the Cookie Policy of Vishal Infotech. Learn how we use cookies and tracking mechanisms on our website." />
        <link rel="canonical" href="https://www.vishalinfotech.com/cookie-policy" />
        <meta name="robots" content="index, follow" />
        
        {/* Breadcrumb List Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vishalinfotech.com/" },
              { "@type": "ListItem", "position": 2, "name": "Cookie Policy", "item": "https://www.vishalinfotech.com/cookie-policy" }
            ]
          })}
        </script>
      </Helmet>

      <Container>
        <article className={styles.legalPage__card}>
          <h1 className={styles.legalPage__title}>Cookie Policy</h1>
          <p className={styles.legalPage__updated}>Last updated: June 10, 2026</p>

          <div className={styles.legalPage__content}>
            <p>
              This is the Cookie Policy for Vishal Infotech, accessible from vishalinfotech.com. 
              As is common practice with almost all professional websites, this site uses cookies, which are tiny files 
              that are downloaded to your computer, to improve your experience.
            </p>

            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small pieces of text sent to your web browser by a website you visit. 
              A cookie file is stored in your web browser and allows the service or a third-party to recognize you 
              and make your next visit easier and the service more useful to you.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>
              We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry 
              standard options for disabling cookies without completely disabling the functionality and features they add to this site. 
              It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
            </p>

            <h2>3. The Cookies We Set</h2>
            <ul>
              <li>
                <strong>Forms-related cookies:</strong> When you submit data through a form such as those found on contact pages, 
                cookies may be set to remember your user details for future correspondence.
              </li>
              <li>
                <strong>Preference cookies:</strong> In order to provide you with a great experience on this site, we provide the 
                functionality to set your preferences for how this site runs when you use it. To remember your preferences, 
                we need to set cookies so that this information can be called whenever you interact with a page.
              </li>
            </ul>

            <h2>4. Third-Party Cookies</h2>
            <p>
              In some special cases, we also use cookies provided by trusted third parties. The following section details 
              which third-party cookies you might encounter through this site:
            </p>
            <ul>
              <li>
                This site uses analytics tools to track and measure usage of this site so that we can continue to produce 
                engaging content and optimize product features. These cookies may track things such as how long you spend 
                on the site or pages you visit.
              </li>
            </ul>

            <h2>5. Disabling Cookies</h2>
            <p>
              You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). 
              Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.
            </p>

            <h2>6. More Information</h2>
            <p>
              Hopefully, that has clarified things for you. If there is something that you aren't sure whether you need or not, 
              it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site. 
              If you require more information, you can contact us at <strong>vishalinfotechbharat@gmail.com</strong>.
            </p>
          </div>
        </article>
      </Container>
    </div>
  );
};

export default CookiePolicy;
