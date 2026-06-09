// import React, { useState } from 'react';
// import Container from '../../../components/Container/Container';
// import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
// import styles from './ContactHero.module.scss';

// const highlights = [
//   {
//     icon: (
//       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
//         strokeWidth="2" strokeLinecap="round">
//         <circle cx="12" cy="12" r="10"/>
//         <path d="M12 8v4l3 3"/>
//       </svg>
//     ),
//     label: 'Quick Response',
//     desc: 'Usually within 24 hours',
//   },
//   {
//     icon: (
//       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
//         strokeWidth="2" strokeLinecap="round">
//         <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
//       </svg>
//     ),
//     label: 'Free Consultation',
//     desc: 'No strings attached',
//   },
//   {
//     icon: (
//       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
//         strokeWidth="2" strokeLinecap="round">
//         <polyline points="16 18 22 12 16 6"/>
//         <polyline points="8 6 2 12 8 18"/>
//       </svg>
//     ),
//     label: 'Design & Development',
//     desc: 'End-to-end capability',
//   },
//   {
//     icon: (
//       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
//         strokeWidth="2" strokeLinecap="round">
//         <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
//         <circle cx="9" cy="7" r="4"/>
//         <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
//       </svg>
//     ),
//     label: 'Flexible Engagement',
//     desc: 'Adapts to your workflow',
//   },
// ];

// const projectTypes = [
//   'Web Application',
//   'SaaS Product',
//   'UI/UX Design',
//   'Mobile App',
//   'E-commerce Platform',
//   'API / Backend',
//   'IT Consulting',
//   'Maintenance & Support',
//   'Other / Not Sure Yet',
// ];

// const budgetRanges = [
//   'Under $5,000',
//   '$5,000 – $15,000',
//   '$15,000 – $30,000',
//   '$30,000 – $60,000',
//   '$60,000+',
//   'Prefer not to say',
// ];

// const ContactHero = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     projectType: '',
//     budget: '',
//     message: '',
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [focused, setFocused] = useState(null);

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   const handleReset = () => {
//     setSubmitted(false);
//     setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
//   };

//   return (
//     <section className={styles.hero} aria-label="Contact Hero">
//       {/* Background elements */}
//       <div className={styles.hero__bg} aria-hidden="true">
//         <div className={styles.hero__orb1} />
//         <div className={styles.hero__orb2} />
//         <div className={styles.hero__orb3} />
//         <div className={styles.hero__grid} />
//         <div className={styles.hero__curve} />
//       </div>

//       <Container>
//         <div className={styles.hero__inner}>

//           {/* ── LEFT: content ── */}
//           <div className={styles.hero__content}>
//             <ScrollReveal>
//               <span className={styles.hero__eyebrow}>
//                 <span className={styles.hero__eyebrowDot} />
//                 Get in Touch
//               </span>
//             </ScrollReveal>

//             <ScrollReveal delay={0.08}>
//               <h1 className={styles.hero__title}>
//                 Let's Start Building Something{' '}
//                 <span className={styles.hero__accent}>Meaningful.</span>
//               </h1>
//             </ScrollReveal>

//             <ScrollReveal delay={0.14}>
//               <p className={styles.hero__sub}>
//                 Have a project in mind, a problem to solve, or just an idea
//                 you'd like to explore? We'd love to hear it. Share what you're
//                 thinking — no pitch decks required.
//               </p>
//             </ScrollReveal>

//             <ScrollReveal delay={0.2}>
//               <div className={styles.hero__highlights}>
//                 {highlights.map((h) => (
//                   <div key={h.label} className={styles.highlight}>
//                     <div className={styles.highlight__icon}>{h.icon}</div>
//                     <div className={styles.highlight__text}>
//                       <span className={styles.highlight__label}>{h.label}</span>
//                       <span className={styles.highlight__desc}>{h.desc}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </ScrollReveal>

//             {/* Decorative floating elements */}
//             <div className={styles.hero__decor} aria-hidden="true">
//               <div className={styles.hero__decorDot1} />
//               <div className={styles.hero__decorDot2} />
//               <div className={styles.hero__decorLine} />
//             </div>
//           </div>

//           {/* ── RIGHT: form card ── */}
//           <div className={styles.hero__formWrap}>
//             <ScrollReveal direction="left" delay={0.1}>
//               <div className={styles.form__card}>
//                 <div className={styles.form__cardGlow} />

//                 {!submitted ? (
//                   <>
//                     <div className={styles.form__header}>
//                       <h2 className={styles.form__title}>Send Us a Message</h2>
//                       <p className={styles.form__subtitle}>
//                         Tell us about your project. We'll get back to you within a day.
//                       </p>
//                     </div>

//                     <form className={styles.form} onSubmit={handleSubmit} noValidate>
//                       {/* Row: name + email */}
//                       <div className={styles.form__row}>
//                         <div className={`${styles.form__field} ${focused === 'name' ? styles['form__field--focused'] : ''} ${formData.name ? styles['form__field--filled'] : ''}`}>
//                           <label className={styles.form__label} htmlFor="c-name">
//                             Full Name <span className={styles.form__req}>*</span>
//                           </label>
//                           <input
//                             id="c-name"
//                             name="name"
//                             type="text"
//                             className={styles.form__input}
//                             placeholder="Alex Johnson"
//                             value={formData.name}
//                             onChange={handleChange}
//                             onFocus={() => setFocused('name')}
//                             onBlur={() => setFocused(null)}
//                             required
//                             autoComplete="name"
//                           />
//                         </div>

//                         <div className={`${styles.form__field} ${focused === 'email' ? styles['form__field--focused'] : ''} ${formData.email ? styles['form__field--filled'] : ''}`}>
//                           <label className={styles.form__label} htmlFor="c-email">
//                             Email Address <span className={styles.form__req}>*</span>
//                           </label>
//                           <input
//                             id="c-email"
//                             name="email"
//                             type="email"
//                             className={styles.form__input}
//                             placeholder="alex@company.com"
//                             value={formData.email}
//                             onChange={handleChange}
//                             onFocus={() => setFocused('email')}
//                             onBlur={() => setFocused(null)}
//                             required
//                             autoComplete="email"
//                           />
//                         </div>
//                       </div>

//                       {/* Row: project type + budget */}
//                       <div className={styles.form__row}>
//                         <div className={`${styles.form__field} ${focused === 'projectType' ? styles['form__field--focused'] : ''} ${formData.projectType ? styles['form__field--filled'] : ''}`}>
//                           <label className={styles.form__label} htmlFor="c-type">
//                             Project Type <span className={styles.form__req}>*</span>
//                           </label>
//                           <div className={styles.form__selectWrap}>
//                             <select
//                               id="c-type"
//                               name="projectType"
//                               className={styles.form__select}
//                               value={formData.projectType}
//                               onChange={handleChange}
//                               onFocus={() => setFocused('projectType')}
//                               onBlur={() => setFocused(null)}
//                               required
//                             >
//                               <option value="" disabled>Select a type...</option>
//                               {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
//                             </select>
//                             <svg className={styles.form__selectIcon} width="14" height="14"
//                               viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
//                               <polyline points="6 9 12 15 18 9"/>
//                             </svg>
//                           </div>
//                         </div>

//                         {/* <div className={`${styles.form__field} ${focused === 'budget' ? styles['form__field--focused'] : ''} ${formData.budget ? styles['form__field--filled'] : ''}`}>
//                           <label className={styles.form__label} htmlFor="c-budget">
//                             Budget Range
//                             <span className={styles.form__opt}> (optional)</span>
//                           </label>
//                           <div className={styles.form__selectWrap}>
//                             <select
//                               id="c-budget"
//                               name="budget"
//                               className={styles.form__select}
//                               value={formData.budget}
//                               onChange={handleChange}
//                               onFocus={() => setFocused('budget')}
//                               onBlur={() => setFocused(null)}
//                             >
//                               <option value="">Select a range...</option>
//                               {budgetRanges.map(b => <option key={b} value={b}>{b}</option>)}
//                             </select>
//                             <svg className={styles.form__selectIcon} width="14" height="14"
//                               viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
//                               <polyline points="6 9 12 15 18 9"/>
//                             </svg>
//                           </div>
//                         </div> */}
//                       </div>

//                       {/* Message */}
//                       <div className={`${styles.form__field} ${focused === 'message' ? styles['form__field--focused'] : ''} ${formData.message ? styles['form__field--filled'] : ''}`}>
//                         <label className={styles.form__label} htmlFor="c-message">
//                           Your Message <span className={styles.form__req}>*</span>
//                         </label>
//                         <textarea
//                           id="c-message"
//                           name="message"
//                           className={styles.form__textarea}
//                           placeholder="Tell us about your project, idea, or challenge. The more context you share, the more useful our first conversation will be."
//                           rows={4}
//                           value={formData.message}
//                           onChange={handleChange}
//                           onFocus={() => setFocused('message')}
//                           onBlur={() => setFocused(null)}
//                           required
//                         />
//                       </div>

//                       <button type="submit" className={styles.form__submit}>
//                         <span>Send Message</span>
//                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
//                           stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
//                           <path d="M5 12h14M12 5l7 7-7 7"/>
//                         </svg>
//                       </button>

//                       <p className={styles.form__note}>
//                         We respect your privacy. No spam, ever.
//                       </p>
//                     </form>
//                   </>
//                 ) : (
//                   <div className={styles.form__success}>
//                     <div className={styles.form__successIcon}>
//                       <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
//                         stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                         <polyline points="20 6 9 17 4 12"/>
//                       </svg>
//                     </div>
//                     <h3 className={styles.form__successTitle}>Message Sent!</h3>
//                     <p className={styles.form__successText}>
//                       Thank you for reaching out. We've received your message and will
//                       get back to you within 24 hours.
//                     </p>
//                     <button className={styles.form__successReset} onClick={handleReset}>
//                       Send another message
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </ScrollReveal>
//           </div>

//         </div>
//       </Container>
//     </section>
//   );
// };

// export default ContactHero;
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import Container from '../../../components/Container/Container';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';

import styles from './ContactHero.module.scss';

const highlights = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    label: 'Quick Response',
    desc: 'Usually within 24 hours',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    label: 'Free Consultation',
    desc: 'No strings attached',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    label: 'Design & Development',
    desc: 'End-to-end capability',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    label: 'Flexible Engagement',
    desc: 'Adapts to your workflow',
  },
];

const projectTypes = [
  'Web Application',
  'SaaS Product',
  'UI/UX Design',
  'Mobile App',
  'E-commerce Platform',
  'API / Backend',
  'IT Consulting',
  'Maintenance & Support',
  'Other / Not Sure Yet',
];

const ContactHero = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);
    setError('');

    try {

      const templateParams = {
        name: formData.name,
        email: formData.email,
        project_type: formData.projectType,
        message: formData.message,
        time: new Date().toLocaleString(),
      };

      const response = await emailjs.send(
        'service_b5t44ac',
        'template_vefiyqa',
        templateParams,
        'Gxo-Fx7MMQ5fGBBvA'
      );

      console.log('EMAIL SUCCESS:', response);

      setSubmitted(true);

      setFormData({
        name: '',
        email: '',
        projectType: '',
        message: '',
      });

    } catch (err) {

      console.error('EMAIL ERROR:', err);

      setError(
        err?.text || 'Failed to send message'
      );

    } finally {

      setLoading(false);

    }
  };

  const handleReset = () => {
    setSubmitted(false);

    setFormData({
      name: '',
      email: '',
      projectType: '',
      message: '',
    });
  };

  return (
    <section className={styles.hero} aria-label="Contact Hero">

      <div className={styles.hero__bg} aria-hidden="true">
        <div className={styles.hero__orb1} />
        <div className={styles.hero__orb2} />
        <div className={styles.hero__orb3} />
        <div className={styles.hero__grid} />
        <div className={styles.hero__curve} />
      </div>

      <Container>

        <div className={styles.hero__inner}>

          {/* LEFT CONTENT */}
          <div className={styles.hero__content}>

            <ScrollReveal>
              <span className={styles.hero__eyebrow}>
                <span className={styles.hero__eyebrowDot} />
                Get in Touch
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h1 className={styles.hero__title}>
                Let's Start Building Something{' '}
                <span className={styles.hero__accent}>
                  Meaningful.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.14}>
              <p className={styles.hero__sub}>
                Have a project in mind, a problem to solve,
                or just an idea you'd like to explore?
                We'd love to hear it.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className={styles.hero__highlights}>
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className={styles.highlight}
                  >
                    <div className={styles.highlight__icon}>
                      {h.icon}
                    </div>

                    <div className={styles.highlight__text}>
                      <span className={styles.highlight__label}>
                        {h.label}
                      </span>

                      <span className={styles.highlight__desc}>
                        {h.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.26}>
              <div className={styles.hero__emailSection}>
                <a href="mailto:vishalinfotechbharat@gmail.com" className={styles.hero__emailCard}>
                  <div className={styles.hero__emailIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className={styles.hero__emailText}>
                    <span className={styles.hero__emailLabel}>Direct Email</span>
                    <span className={styles.hero__emailValue}>vishalinfotechbharat@gmail.com</span>
                  </div>
                </a>
              </div>
            </ScrollReveal>

          </div>

          {/* RIGHT FORM */}
          <div className={styles.hero__formWrap}>

            <ScrollReveal direction="left" delay={0.1}>

              <div className={styles.form__card}>

                {!submitted ? (
                  <>

                    <div className={styles.form__header}>
                      <h2 className={styles.form__title}>
                        Send Us a Message
                      </h2>

                      <p className={styles.form__subtitle}>
                        Tell us about your project.
                      </p>
                    </div>

                    <form
                      className={styles.form}
                      onSubmit={handleSubmit}
                    >

                      {/* NAME */}
                      <div className={styles.form__field}>
                        <label className={styles.form__label}>
                          Full Name
                        </label>

                        <input
                          type="text"
                          name="name"
                          className={styles.form__input}
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* EMAIL */}
                      <div className={styles.form__field}>
                        <label className={styles.form__label}>
                          Email Address
                        </label>

                        <input
                          type="email"
                          name="email"
                          className={styles.form__input}
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* PROJECT TYPE */}
                      <div className={styles.form__field}>
                        <label className={styles.form__label}>
                          Project Type
                        </label>

                        <select
                          name="projectType"
                          className={styles.form__select}
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                        >
                          <option value="">
                            Select Project Type
                          </option>

                          {projectTypes.map((item) => (
                            <option
                              key={item}
                              value={item}
                            >
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* MESSAGE */}
                      <div className={styles.form__field}>
                        <label className={styles.form__label}>
                          Message
                        </label>

                        <textarea
                          name="message"
                          rows="5"
                          className={styles.form__textarea}
                          placeholder="Tell us about your project..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {error && (
                        <p className={styles.form__error}>
                          {error}
                        </p>
                      )}

                      <button
                        type="submit"
                        className={styles.form__submit}
                        disabled={loading}
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                      </button>

                    </form>

                  </>
                ) : (
                  <div className={styles.form__success}>

                    <h3 className={styles.form__successTitle}>
                      Message Sent Successfully
                    </h3>

                    <p className={styles.form__successText}>
                      Thank you for contacting us.
                      We'll get back to you shortly.
                    </p>

                    <button
                      className={styles.form__successReset}
                      onClick={handleReset}
                    >
                      Send Another Message
                    </button>

                  </div>
                )}

              </div>

            </ScrollReveal>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default ContactHero;