import React from 'react';
import Container from '../../../components/Container/Container';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import styles from './ServicesShowcase.module.scss';

// ── Inline dashboard mockups (SVG) ────────────────────────────
const WebDevVisual = () => (
  <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" className={styles.visual__svg}>
    {/* Browser chrome */}
    <rect width="480" height="320" rx="16" fill="#0F172A"/>
    <rect x="0" y="0" width="480" height="44" rx="16" fill="#1E293B"/>
    <rect x="0" y="32" width="480" height="12" fill="#1E293B"/>
    <circle cx="20" cy="22" r="5" fill="#FF5F57"/>
    <circle cx="36" cy="22" r="5" fill="#FFBD2E"/>
    <circle cx="52" cy="22" r="5" fill="#28CA41"/>
    <rect x="90" y="14" width="260" height="16" rx="4" fill="#0F172A"/>
    <rect x="100" y="18" width="140" height="8" rx="3" fill="#334155"/>
    {/* Landing page hero */}
    <rect x="16" y="60" width="448" height="240" rx="12" fill="#1E3A8A"/>
    <rect x="40" y="100" width="180" height="16" rx="4" fill="rgba(255,255,255,0.9)"/>
    <rect x="40" y="124" width="240" height="10" rx="3" fill="rgba(255,255,255,0.45)"/>
    <rect x="40" y="140" width="200" height="10" rx="3" fill="rgba(255,255,255,0.35)"/>
    <rect x="40" y="166" width="100" height="28" rx="6" fill="#FFFFFF"/>
    <rect x="148" y="166" width="100" height="28" rx="6" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
    {/* Feature cards row */}
    <rect x="40" y="222" width="118" height="62" rx="10" fill="rgba(255,255,255,0.08)"/>
    <rect x="50" y="232" width="30" height="6" rx="3" fill="rgba(255,255,255,0.5)"/>
    <rect x="50" y="244" width="72" height="30" rx="4" fill="rgba(255,255,255,0.06)"/>
    <rect x="168" y="222" width="118" height="62" rx="10" fill="rgba(255,255,255,0.08)"/>
    <rect x="178" y="232" width="30" height="6" rx="3" fill="rgba(255,255,255,0.5)"/>
    <rect x="178" y="244" width="72" height="30" rx="4" fill="rgba(255,255,255,0.06)"/>
    <rect x="296" y="222" width="118" height="62" rx="10" fill="rgba(255,255,255,0.08)"/>
    <rect x="306" y="232" width="30" height="6" rx="3" fill="rgba(255,255,255,0.5)"/>
    <rect x="306" y="244" width="72" height="30" rx="4" fill="rgba(255,255,255,0.06)"/>
    {/* Right floating card */}
    <rect x="296" y="92" width="152" height="120" rx="12" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
    <rect x="308" y="104" width="60" height="8" rx="3" fill="rgba(255,255,255,0.7)"/>
    <rect x="308" y="118" width="104" height="5" rx="2" fill="rgba(255,255,255,0.35)"/>
    <rect x="308" y="128" width="88" height="5" rx="2" fill="rgba(255,255,255,0.25)"/>
    {/* Metric bars */}
    <rect x="308" y="144" width="120" height="5" rx="2" fill="rgba(255,255,255,0.1)"/>
    <rect x="308" y="144" width="90" height="5" rx="2" fill="#60A5FA"/>
    <rect x="308" y="156" width="120" height="5" rx="2" fill="rgba(255,255,255,0.1)"/>
    <rect x="308" y="156" width="60" height="5" rx="2" fill="#34D399"/>
    <rect x="308" y="168" width="120" height="5" rx="2" fill="rgba(255,255,255,0.1)"/>
    <rect x="308" y="168" width="104" height="5" rx="2" fill="#FBBF24"/>
    {/* Performance badge */}
    <rect x="308" y="182" width="48" height="18" rx="4" fill="#34D399"/>
    <rect x="362" y="184" width="44" height="14" rx="4" fill="rgba(255,255,255,0.1)"/>
  </svg>
);

const UIUXVisual = () => (
  <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" className={styles.visual__svg}>
    <rect width="480" height="320" rx="16" fill="#F8FAFC"/>
    {/* Design canvas bg */}
    <rect x="0" y="0" width="480" height="44" rx="16" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1"/>
    <rect x="0" y="32" width="480" height="12" fill="#FFFFFF"/>
    <circle cx="20" cy="22" r="5" fill="#FF5F57"/>
    <circle cx="36" cy="22" r="5" fill="#FFBD2E"/>
    <circle cx="52" cy="22" r="5" fill="#28CA41"/>
    <rect x="90" y="15" width="220" height="14" rx="4" fill="#F1F5F9"/>
    <rect x="380" y="13" width="20" height="18" rx="4" fill="#EFF6FF"/>
    <rect x="406" y="13" width="20" height="18" rx="4" fill="#EFF6FF"/>
    <rect x="432" y="13" width="36" height="18" rx="4" fill="#2563EB"/>
    {/* Left panel - layers */}
    <rect x="8" y="52" width="90" height="260" rx="10" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1"/>
    <rect x="14" y="60" width="40" height="6" rx="2" fill="#94A3B8"/>
    {[0,1,2,3,4,5,6,7].map(i => (
      <g key={i}>
        <rect x="14" y={74 + i*24} width="8" height="8" rx="2" fill={['#DBEAFE','#F0FDF4','#FFF7ED','#FDF4FF','#FFF1F2','#F0F9FF','#FAFAF9','#ECFDF5'][i]}/>
        <rect x="28" y={76 + i*24} width={[42,36,48,30,44,38,40,34][i]} height="4" rx="2" fill="#CBD5E1"/>
      </g>
    ))}
    {/* Main canvas */}
    <rect x="106" y="52" width="268" height="260" rx="10" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1"/>
    {/* Component preview */}
    <rect x="122" y="68" width="236" height="50" rx="8" fill="#EFF6FF" stroke="#DBEAFE" strokeWidth="1"/>
    <circle cx="138" cy="93" r="10" fill="#2563EB"/>
    <rect x="154" y="87" width="80" height="8" rx="3" fill="#0F172A"/>
    <rect x="154" y="100" width="60" height="5" rx="2" fill="#94A3B8"/>
    <rect x="298" y="86" width="48" height="18" rx="4" fill="#2563EB"/>
    {/* Color palette */}
    <rect x="122" y="128" width="60" height="8" rx="2" fill="#94A3B8"/>
    {['#2563EB','#1E3A8A','#60A5FA','#DBEAFE','#0F172A','#475569','#94A3B8','#F8FAFC'].map((c, i) => (
      <circle key={i} cx={130 + i*24} cy={152} r={10} fill={c} stroke="#E2E8F0" strokeWidth="1"/>
    ))}
    {/* Typography preview */}
    <rect x="122" y="174" width="60" height="8" rx="2" fill="#94A3B8"/>
    <rect x="122" y="190" width="180" height="14" rx="3" fill="#0F172A"/>
    <rect x="122" y="210" width="140" height="10" rx="3" fill="#475569"/>
    <rect x="122" y="226" width="200" height="7" rx="2" fill="#94A3B8"/>
    <rect x="122" y="238" width="160" height="7" rx="2" fill="#94A3B8"/>
    {/* Spacing guide */}
    <rect x="122" y="258" width="236" height="44" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1"/>
    <rect x="132" y="266" width="4" height="28" rx="2" fill="#2563EB"/>
    <rect x="140" y="272" width="44" height="16" rx="4" fill="#DBEAFE"/>
    <rect x="190" y="272" width="44" height="16" rx="4" fill="#F0FDF4"/>
    <rect x="240" y="272" width="44" height="16" rx="4" fill="#FFF7ED"/>
    <rect x="290" y="272" width="44" height="16" rx="4" fill="#F5F3FF"/>
    {/* Right panel - properties */}
    <rect x="382" y="52" width="90" height="260" rx="10" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1"/>
    <rect x="388" y="60" width="40" height="6" rx="2" fill="#94A3B8"/>
    {[0,1,2,3,4].map(i => (
      <g key={i}>
        <rect x="388" y={74 + i*34} width="34" height="6" rx="2" fill="#CBD5E1"/>
        <rect x="388" y={84 + i*34} width="70" height="16" rx="4" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1"/>
      </g>
    ))}
  </svg>
);

const SaaSVisual = () => (
  <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" className={styles.visual__svg}>
    <rect width="480" height="320" rx="16" fill="#0F172A"/>
    {/* Sidebar */}
    <rect x="0" y="0" width="80" height="320" rx="16" fill="#111827"/>
    <rect x="0" y="0" width="16" height="320" fill="#111827"/>
    <circle cx="40" cy="36" r="14" fill="#2563EB"/>
    <rect x="16" y="70" width="48" height="8" rx="3" fill="#334155"/>
    {[0,1,2,3,4,5].map(i => (
      <g key={i}>
        <rect x="20" y={90 + i*32} width="40" height="22" rx="6"
          fill={i === 1 ? '#1E3A8A' : 'transparent'}/>
        <rect x="26" y={97 + i*32} width="28" height="7" rx="2"
          fill={i === 1 ? '#60A5FA' : '#475569'}/>
      </g>
    ))}
    {/* Header */}
    <rect x="80" y="0" width="400" height="48" fill="#1E293B"/>
    <rect x="96" y="16" width="100" height="16" rx="4" fill="#F8FAFC"/>
    <rect x="346" y="12" width="60" height="24" rx="6" fill="#2563EB"/>
    <circle cx="430" cy="24" r="14" fill="#1E3A8A"/>
    <rect x="448" y="17" width="24" height="14" rx="4" fill="#1E293B"/>
    {/* KPI Row */}
    {[['Total MRR','$0','↑ Growing'],['Active Users','—','Early Access'],['Churn Rate','—','Tracking'],['Uptime','99.9%','✓ Live']].map(([l,v,s], i) => (
      <g key={i}>
        <rect x={96 + i*95} y={60} width={88} height={56} rx={10} fill="#1E293B"/>
        <rect x={104 + i*95} y={68} width={50} height={6} rx="2" fill="#475569"/>
        <rect x={104 + i*95} y={80} width={60} height={14} rx="3" fill="#F8FAFC"/>
        <rect x={104 + i*95} y={98} width={40} height={6} rx="2" fill={['#34D399','#60A5FA','#FBBF24','#34D399'][i]}/>
      </g>
    ))}
    {/* Main chart */}
    <rect x="96" y="128" width="238" height="140" rx="12" fill="#1E293B"/>
    <rect x="108" y="138" width="80" height="10" rx="3" fill="#334155"/>
    <rect x="238" y="138" width="60" height="8" rx="3" fill="#1E3A8A"/>
    <line x1="108" y1="220" x2="326" y2="220" stroke="#334155" strokeWidth="0.5"/>
    <line x1="108" y1="206" x2="326" y2="206" stroke="#334155" strokeWidth="0.5"/>
    <line x1="108" y1="192" x2="326" y2="192" stroke="#334155" strokeWidth="0.5"/>
    <line x1="108" y1="178" x2="326" y2="178" stroke="#334155" strokeWidth="0.5"/>
    <polyline points="108,232 140,218 172,222 204,205 236,210 268,192 300,196 326,180"
      fill="none" stroke="#60A5FA" strokeWidth="2.5" strokeLinejoin="round"/>
    <polygon points="108,232 140,218 172,222 204,205 236,210 268,192 300,196 326,180 326,240 108,240"
      fill="#60A5FA" fillOpacity="0.07"/>
    {/* Right panels */}
    <rect x="342" y="128" width="130" height="60" rx="10" fill="#1E293B"/>
    <rect x="352" y="138" width="55" height="8" rx="3" fill="#334155"/>
    <rect x="352" y="152" width="90" height="16" rx="4" fill="#F8FAFC"/>
    <rect x="352" y="173" width="44" height="8" rx="3" fill="#34D399"/>
    <rect x="342" y="198" width="130" height="70" rx="10" fill="#1E293B"/>
    <rect x="352" y="208" width="55" height="8" rx="3" fill="#334155"/>
    {[0,1,2,3].map(i => (
      <g key={i}>
        <rect x="352" y={222 + i*11} width="100" height="5" rx="2" fill="#334155"/>
        <rect x="352" y={222 + i*11} width={[75,50,85,35][i]} height="5" rx="2"
          fill={['#2563EB','#818CF8','#10B981','#FBBF24'][i]}/>
      </g>
    ))}
    {/* Users table */}
    <rect x="96" y="278" width="376" height="34" rx="8" fill="#1E293B"/>
    {[0,1,2,3].map(i => (
      <g key={i}>
        <circle cx={114 + i*96} cy={295} r={8} fill={['#DBEAFE','#BBF7D0','#FDE68A','#F5F3FF'][i]}/>
        <rect x={128 + i*96} y={290} width={[50,44,58,46][i]} height={5} rx="2" fill="#475569"/>
        <rect x={128 + i*96} y={299} width={30} height={4} rx="2" fill="#334155"/>
      </g>
    ))}
  </svg>
);

// ── Showcase items ────────────────────────────────────────────
const showcaseItems = [
  {
    id: 'web',
    eyebrow: 'Web Development',
    title: 'Websites & Web Apps Built for the Real World',
    desc: 'We move quickly without cutting corners. Our web development practice covers everything from marketing sites to complex internal tools - and we make sure they look attractive and work perfectly on every device.',
    points: [
      { label: 'Responsive by default', text: 'Every layout tested across mobile, tablet, and desktop before it ships.' },
      { label: 'Performance-optimized', text: 'We target sub-2s load times and strong Core Web Vitals as standard practice.' },
      { label: 'Clean, maintainable code', text: 'No spaghetti. No "it works on my machine." Readable code you can hand off.' },
      { label: 'Scalable architecture', text: 'Systems that grow with you - not ones you outgrow in 18 months.' },
    ],
    color: '#2563EB',
    visual: <WebDevVisual />,
    flip: false,
  },
  {
    id: 'uiux',
    eyebrow: 'UI/UX Design',
    title: 'Design That Makes Users Feel Understood',
    desc: 'We design with a user-centric focus first. Before we open Figma, we understand who your users are, what they\'re trying to accomplish, and where they currently get stuck. Then we design around that reality.',
    points: [
      { label: 'Research-informed', text: 'We ask real questions before designing - who are your users, what do they need?' },
      { label: 'Component-driven systems', text: 'Design systems that developers love and designers can evolve easily.' },
      { label: 'Interactive prototypes', text: 'Clickable prototypes before a line of code is written. Test early, iterate cheaply.' },
      { label: 'Handoff-ready', text: 'Pixel-perfect specs, annotated flows, and developer notes included every time.' },
    ],
    color: '#818CF8',
    visual: <UIUXVisual />,
    flip: true,
  },
  {
    id: 'saas',
    eyebrow: 'SaaS Development',
    title: 'SaaS Platforms Built to Grow With Your Business',
    desc: 'Building a SaaS product is more than writing features. It requires the right foundation - multi-tenancy, security boundaries, billing, and a dashboard that actually helps your users succeed.',
    points: [
      { label: 'Multi-tenant from the start', text: 'Isolated data, flexible plans, and team management built into the core.' },
      { label: 'Billing that just works', text: 'Stripe integration, subscription tiers, usage-based pricing - we\'ve built it all.' },
      { label: 'User onboarding flows', text: 'New-user experiences designed to get people to their "Eureka moment" fast.' },
      { label: 'Admin & analytics dashboards', text: 'Tools for you to understand your product\'s health and your users\' behaviour.' },
    ],
    color: '#10B981',
    visual: <SaaSVisual />,
    flip: false,
  },
];

const ServicesShowcase = () => (
  <section className={styles.showcase}>
    <Container>
      {showcaseItems.map((item) => (
        <div
          key={item.id}
          className={`${styles.showcase__item} ${item.flip ? styles['showcase__item--flip'] : ''}`}
          style={{ '--ic': item.color }}
        >
          {/* Visual */}
          <ScrollReveal direction={item.flip ? 'left' : 'right'}>
            <div className={styles.visual}>
              <div className={styles.visual__glow} />
              <div className={styles.visual__wrap}>
                {item.visual}
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction={item.flip ? 'right' : 'left'}>
            <div className={styles.content}>
              <span className={styles.content__eyebrow}>{item.eyebrow}</span>
              <h2 className={styles.content__title}>{item.title}</h2>
              <p className={styles.content__desc}>{item.desc}</p>

              <ul className={styles.content__points}>
                {item.points.map(pt => (
                  <li key={pt.label} className={styles.content__point}>
                    <div className={styles.content__pointDot} />
                    <div>
                      <strong className={styles.content__pointLabel}>{pt.label}</strong>
                      <span className={styles.content__pointText}> - {pt.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      ))}
    </Container>
  </section>
);

export default ServicesShowcase;
