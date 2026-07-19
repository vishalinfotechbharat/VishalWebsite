import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../../components/Container/Container';
import Button from '../../../components/Button/Button';
import styles from './ServicesHero.module.scss';

// ── Mockup card visuals ──────────────────────────────────────────
const AnalyticsMockup = () => (
  <svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg" className={styles.mockup__svg}>
    <rect width="300" height="190" fill="#0F172A"/>
    <rect x="0" y="0" width="300" height="36" fill="#1E293B"/>
    <circle cx="16" cy="18" r="6" fill="#2563EB"/>
    <rect x="28" y="14" width="50" height="8" rx="3" fill="#334155"/>
    <rect x="110" y="14" width="35" height="8" rx="3" fill="#1E3A8A"/>
    <rect x="152" y="14" width="35" height="8" rx="3" fill="#334155"/>
    <rect x="240" y="10" width="50" height="16" rx="4" fill="#2563EB"/>
    {/* KPI cards */}
    <rect x="8" y="46" width="88" height="52" rx="8" fill="#1E293B"/>
    <rect x="104" y="46" width="88" height="52" rx="8" fill="#1E293B"/>
    <rect x="200" y="46" width="92" height="52" rx="8" fill="#1E293B"/>
    <rect x="16" y="56" width="28" height="5" rx="2" fill="#60A5FA"/>
    <rect x="16" y="66" width="52" height="14" rx="3" fill="#F8FAFC"/>
    <rect x="16" y="86" width="36" height="5" rx="2" fill="#34D399"/>
    <rect x="112" y="56" width="28" height="5" rx="2" fill="#FBBF24"/>
    <rect x="112" y="66" width="52" height="14" rx="3" fill="#F8FAFC"/>
    <rect x="112" y="86" width="36" height="5" rx="2" fill="#F472B6"/>
    <rect x="208" y="56" width="28" height="5" rx="2" fill="#818CF8"/>
    <rect x="208" y="66" width="52" height="14" rx="3" fill="#F8FAFC"/>
    <rect x="208" y="86" width="36" height="5" rx="2" fill="#60A5FA"/>
    {/* Bar chart */}
    <rect x="8" y="108" width="136" height="74" rx="8" fill="#1E293B"/>
    <rect x="16" y="115" width="40" height="6" rx="2" fill="#334155"/>
    <rect x="18" y="154" width="14" height="22" rx="2" fill="#2563EB"/>
    <rect x="36" y="142" width="14" height="34" rx="2" fill="#3B82F6"/>
    <rect x="54" y="148" width="14" height="28" rx="2" fill="#1D4ED8"/>
    <rect x="72" y="134" width="14" height="42" rx="2" fill="#60A5FA"/>
    <rect x="90" y="144" width="14" height="32" rx="2" fill="#2563EB"/>
    <rect x="108" y="138" width="14" height="38" rx="2" fill="#3B82F6"/>
    {/* Line chart */}
    <rect x="152" y="108" width="140" height="74" rx="8" fill="#1E293B"/>
    <rect x="160" y="115" width="50" height="6" rx="2" fill="#334155"/>
    <polyline points="162,168 178,158 194,163 210,150 226,155 242,143 258,148 274,138 286,142"
      fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinejoin="round"/>
    <polygon points="162,168 178,158 194,163 210,150 226,155 242,143 258,148 274,138 286,142 286,175 162,175"
      fill="#60A5FA" fillOpacity="0.08"/>
    <circle cx="286" cy="142" r="4" fill="#60A5FA"/>
  </svg>
);

const CRMMockup = () => (
  <svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg" className={styles.mockup__svg}>
    <rect width="300" height="190" fill="#FFFFFF"/>
    <rect x="0" y="0" width="300" height="36" fill="#2563EB"/>
    <circle cx="16" cy="18" r="6" fill="white" fillOpacity="0.3"/>
    <rect x="28" y="14" width="60" height="8" rx="3" fill="white" fillOpacity="0.25"/>
    <rect x="230" y="10" width="60" height="16" rx="4" fill="white" fillOpacity="0.2"/>
    {/* Pipeline labels */}
    <rect x="8" y="44" width="50" height="7" rx="2" fill="#94A3B8"/>
    <rect x="68" y="44" width="50" height="7" rx="2" fill="#94A3B8"/>
    <rect x="128" y="44" width="50" height="7" rx="2" fill="#94A3B8"/>
    <rect x="188" y="44" width="50" height="7" rx="2" fill="#94A3B8"/>
    <rect x="248" y="44" width="44" height="7" rx="2" fill="#94A3B8"/>
    {/* Pipeline cards col1 */}
    <rect x="8" y="58" width="52" height="40" rx="6" fill="#EFF6FF" stroke="#DBEAFE" strokeWidth="1"/>
    <rect x="14" y="64" width="32" height="5" rx="2" fill="#1E3A8A"/>
    <rect x="14" y="74" width="22" height="4" rx="2" fill="#64748B"/>
    <rect x="14" y="84" width="16" height="8" rx="3" fill="#DBEAFE"/>
    <rect x="8" y="104" width="52" height="40" rx="6" fill="#EFF6FF" stroke="#DBEAFE" strokeWidth="1"/>
    <rect x="14" y="110" width="28" height="5" rx="2" fill="#1E3A8A"/>
    <rect x="14" y="120" width="22" height="4" rx="2" fill="#64748B"/>
    <rect x="14" y="130" width="20" height="8" rx="3" fill="#DBEAFE"/>
    {/* Pipeline cards col2 */}
    <rect x="68" y="58" width="52" height="40" rx="6" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1"/>
    <rect x="74" y="64" width="32" height="5" rx="2" fill="#14532D"/>
    <rect x="74" y="74" width="22" height="4" rx="2" fill="#64748B"/>
    <rect x="74" y="84" width="16" height="8" rx="3" fill="#BBF7D0"/>
    {/* Pipeline cards col3 */}
    <rect x="128" y="58" width="52" height="40" rx="6" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="1"/>
    <rect x="134" y="64" width="32" height="5" rx="2" fill="#78350F"/>
    <rect x="134" y="74" width="22" height="4" rx="2" fill="#64748B"/>
    <rect x="134" y="84" width="16" height="8" rx="3" fill="#FDE68A"/>
    <rect x="128" y="104" width="52" height="40" rx="6" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="1"/>
    <rect x="134" y="110" width="28" height="5" rx="2" fill="#78350F"/>
    <rect x="134" y="120" width="22" height="4" rx="2" fill="#64748B"/>
    {/* Pipeline cards col4 */}
    <rect x="188" y="58" width="52" height="40" rx="6" fill="#FFF1F2" stroke="#FECDD3" strokeWidth="1"/>
    <rect x="194" y="64" width="32" height="5" rx="2" fill="#881337"/>
    <rect x="194" y="74" width="22" height="4" rx="2" fill="#64748B"/>
    <rect x="194" y="84" width="16" height="8" rx="3" fill="#FECDD3"/>
    {/* Won column */}
    <rect x="248" y="58" width="44" height="40" rx="6" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1"/>
    <rect x="254" y="64" width="28" height="5" rx="2" fill="#14532D"/>
    <rect x="254" y="74" width="16" height="4" rx="2" fill="#64748B"/>
    <rect x="254" y="84" width="24" height="8" rx="3" fill="#86EFAC"/>
    {/* Progress bar at bottom */}
    <rect x="8" y="158" width="284" height="24" rx="6" fill="#F8FAFC"/>
    <rect x="14" y="164" width="40" height="5" rx="2" fill="#94A3B8"/>
    <rect x="60" y="164" width="120" height="5" rx="2" fill="#E2E8F0"/>
    <rect x="60" y="164" width="72" height="5" rx="2" fill="#2563EB"/>
    <rect x="200" y="164" width="40" height="5" rx="2" fill="#94A3B8"/>
    <rect x="250" y="162" width="34" height="8" rx="3" fill="#DBEAFE"/>
  </svg>
);

const FinanceMockup = () => (
  <svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg" className={styles.mockup__svg}>
    <rect width="300" height="190" fill="#0F172A"/>
    <rect x="0" y="0" width="70" height="190" fill="#1E293B"/>
    {/* Sidebar items */}
    <rect x="12" y="20" width="46" height="10" rx="3" fill="#2563EB"/>
    <rect x="12" y="40" width="36" height="7" rx="2" fill="#334155"/>
    <rect x="12" y="55" width="40" height="7" rx="2" fill="#334155"/>
    <rect x="12" y="70" width="30" height="7" rx="2" fill="#334155"/>
    <rect x="12" y="85" width="38" height="7" rx="2" fill="#60A5FA"/>
    <rect x="12" y="100" width="34" height="7" rx="2" fill="#334155"/>
    <rect x="12" y="115" width="40" height="7" rx="2" fill="#334155"/>
    {/* Main header */}
    <rect x="80" y="12" width="80" height="10" rx="3" fill="#F8FAFC"/>
    <rect x="80" y="28" width="52" height="7" rx="2" fill="#64748B"/>
    {/* Big number */}
    <rect x="80" y="46" width="110" height="22" rx="4" fill="#F8FAFC"/>
    <rect x="80" y="74" width="60" height="7" rx="2" fill="#34D399"/>
    {/* Mini KPIs */}
    <rect x="196" y="12" width="96" height="38" rx="8" fill="#1E293B"/>
    <rect x="202" y="18" width="30" height="5" rx="2" fill="#64748B"/>
    <rect x="202" y="28" width="50" height="12" rx="3" fill="#F8FAFC"/>
    <rect x="202" y="44" width="24" height="5" rx="2" fill="#FBBF24"/>
    {/* Area chart */}
    <rect x="80" y="92" width="212" height="88" rx="8" fill="#1E293B"/>
    <rect x="88" y="100" width="50" height="7" rx="2" fill="#334155"/>
    {/* Grid lines */}
    <line x1="88" y1="140" x2="284" y2="140" stroke="#334155" strokeWidth="0.5"/>
    <line x1="88" y1="128" x2="284" y2="128" stroke="#334155" strokeWidth="0.5"/>
    <line x1="88" y1="116" x2="284" y2="116" stroke="#334155" strokeWidth="0.5"/>
    {/* Chart line */}
    <polyline points="88,162 112,150 136,158 160,138 184,145 208,128 232,135 256,118 280,122"
      fill="none" stroke="#818CF8" strokeWidth="2.5" strokeLinejoin="round"/>
    <polygon points="88,162 112,150 136,158 160,138 184,145 208,128 232,135 256,118 280,122 280,170 88,170"
      fill="#818CF8" fillOpacity="0.1"/>
    <circle cx="280" cy="122" r="4" fill="#818CF8"/>
    <circle cx="280" cy="122" r="7" fill="#818CF8" fillOpacity="0.25"/>
    {/* Bottom labels */}
    <rect x="88" y="173" width="20" height="4" rx="1" fill="#475569"/>
    <rect x="136" y="173" width="20" height="4" rx="1" fill="#475569"/>
    <rect x="184" y="173" width="20" height="4" rx="1" fill="#475569"/>
    <rect x="232" y="173" width="20" height="4" rx="1" fill="#475569"/>
    <rect x="258" y="173" width="20" height="4" rx="1" fill="#475569"/>
  </svg>
);

const SaaSMockup = () => (
  <svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg" className={styles.mockup__svg}>
    <rect width="300" height="190" fill="#F8FAFC"/>
    <rect x="0" y="0" width="300" height="40" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1"/>
    <circle cx="20" cy="20" r="8" fill="#2563EB"/>
    <rect x="35" y="16" width="55" height="8" rx="3" fill="#0F172A"/>
    <rect x="110" y="16" width="38" height="8" rx="3" fill="#94A3B8"/>
    <rect x="155" y="16" width="38" height="8" rx="3" fill="#94A3B8"/>
    <rect x="200" y="16" width="38" height="8" rx="3" fill="#94A3B8"/>
    <rect x="255" y="12" width="36" height="16" rx="4" fill="#2563EB"/>
    {/* Table header */}
    <rect x="8" y="50" width="284" height="24" rx="4" fill="#EFF6FF"/>
    <rect x="16" y="58" width="50" height="6" rx="2" fill="#2563EB"/>
    <rect x="96" y="58" width="40" height="6" rx="2" fill="#64748B"/>
    <rect x="156" y="58" width="40" height="6" rx="2" fill="#64748B"/>
    <rect x="216" y="58" width="35" height="6" rx="2" fill="#64748B"/>
    {/* Table rows */}
    {[0,1,2,3,4].map((i) => (
      <g key={i}>
        <rect x="8" y={82 + i*21} width="284" height="18" rx="3"
          fill={i % 2 === 0 ? "#FFFFFF" : "#F8FAFC"} stroke="#F1F5F9" strokeWidth="0.5"/>
        <circle cx="22" cy={91 + i*21} r="5" fill={['#DBEAFE','#BBF7D0','#FDE68A','#FECDD3','#EDE9FE'][i]}/>
        <rect x="32" y={88 + i*21} width={[55,48,62,44,58][i]} height="6" rx="2" fill="#0F172A"/>
        <rect x="96" y={88 + i*21} width="35" height="6" rx="2" fill="#64748B"/>
        <rect x="156" y={87 + i*21} width="40" height="8" rx="3"
          fill={['#DBEAFE','#BBF7D0','#FEFCE8','#FFF1F2','#F5F3FF'][i]}/>
        <rect x="216" y={88 + i*21} width="30" height="6" rx="2" fill="#94A3B8"/>
        <rect x="268" y={87 + i*21} width="16" height="8" rx="3" fill="#F1F5F9"/>
      </g>
    ))}
  </svg>
);

const ProjectMockup = () => (
  <svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg" className={styles.mockup__svg}>
    <rect width="300" height="190" fill="#0F172A"/>
    <rect x="0" y="0" width="300" height="36" fill="#111827"/>
    <rect x="12" y="13" width="80" height="10" rx="3" fill="#F8FAFC"/>
    <rect x="224" y="10" width="64" height="16" rx="4" fill="#2563EB"/>
    {/* Column headers */}
    <rect x="8" y="44" width="86" height="8" rx="3" fill="#475569"/>
    <rect x="106" y="44" width="86" height="8" rx="3" fill="#475569"/>
    <rect x="204" y="44" width="88" height="8" rx="3" fill="#475569"/>
    {/* Col 1 - Todo */}
    <rect x="8" y="58" width="86" height="54" rx="8" fill="#1E293B"/>
    <rect x="14" y="65" width="55" height="6" rx="2" fill="#F8FAFC"/>
    <rect x="14" y="76" width="40" height="5" rx="2" fill="#64748B"/>
    <rect x="14" y="87" width="24" height="12" rx="3" fill="#1E3A8A"/>
    <rect x="44" y="89" width="20" height="8" rx="3" fill="#1E3A8A"/>
    <rect x="8" y="118" width="86" height="44" rx="8" fill="#1E293B"/>
    <rect x="14" y="125" width="45" height="6" rx="2" fill="#F8FAFC"/>
    <rect x="14" y="136" width="38" height="5" rx="2" fill="#64748B"/>
    <rect x="14" y="147" width="20" height="8" rx="3" fill="#134E4A"/>
    {/* Col 2 - In Progress */}
    <rect x="106" y="58" width="86" height="60" rx="8" fill="#1E293B"/>
    <rect x="112" y="65" width="52" height="6" rx="2" fill="#F8FAFC"/>
    <rect x="112" y="76" width="38" height="5" rx="2" fill="#64748B"/>
    <rect x="112" y="87" width="64" height="5" rx="2" fill="#FBBF24" fillOpacity="0.3"/>
    <rect x="112" y="87" width="40" height="5" rx="2" fill="#FBBF24"/>
    <rect x="112" y="98" width="24" height="12" rx="3" fill="#78350F"/>
    <rect x="142" y="100" width="20" height="8" rx="3" fill="#78350F"/>
    <rect x="106" y="124" width="86" height="38" rx="8" fill="#1E293B"/>
    <rect x="112" y="131" width="48" height="6" rx="2" fill="#F8FAFC"/>
    <rect x="112" y="142" width="34" height="5" rx="2" fill="#64748B"/>
    {/* Col 3 - Done */}
    <rect x="204" y="58" width="88" height="48" rx="8" fill="#1E293B"/>
    <rect x="210" y="65" width="50" height="6" rx="2" fill="#F8FAFC"/>
    <rect x="210" y="76" width="36" height="5" rx="2" fill="#64748B"/>
    <rect x="210" y="87" width="24" height="12" rx="3" fill="#14532D"/>
    <rect x="240" y="89" width="16" height="8" rx="3" fill="#14532D"/>
    <rect x="204" y="112" width="88" height="48" rx="8" fill="#1E293B"/>
    <rect x="210" y="119" width="44" height="6" rx="2" fill="#F8FAFC"/>
    <rect x="210" y="130" width="30" height="5" rx="2" fill="#64748B"/>
    <rect x="210" y="141" width="24" height="12" rx="3" fill="#14532D"/>
    {/* Bottom bar */}
    <rect x="8" y="168" width="284" height="16" rx="4" fill="#1E293B"/>
    <rect x="14" y="173" width="40" height="5" rx="2" fill="#475569"/>
    <rect x="70" y="173" width="100" height="5" rx="2" fill="#334155"/>
    <rect x="70" y="173" width="65" height="5" rx="2" fill="#2563EB"/>
    <rect x="240" y="171" width="44" height="10" rx="3" fill="#2563EB"/>
  </svg>
);

const EcommerceMockup = () => (
  <svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg" className={styles.mockup__svg}>
    <rect width="300" height="190" fill="#FFFFFF"/>
    <rect x="0" y="0" width="300" height="36" fill="#0F172A"/>
    <rect x="12" y="13" width="60" height="10" rx="3" fill="#F8FAFC"/>
    <rect x="120" y="15" width="60" height="6" rx="2" fill="#475569"/>
    <rect x="245" y="10" width="22" height="16" rx="4" fill="#1E293B"/>
    <rect x="271" y="10" width="22" height="16" rx="4" fill="#2563EB"/>
    {/* KPI row */}
    <rect x="8" y="44" width="66" height="36" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1"/>
    <rect x="82" y="44" width="66" height="36" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1"/>
    <rect x="156" y="44" width="66" height="36" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1"/>
    <rect x="230" y="44" width="62" height="36" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1"/>
    <rect x="14" y="50" width="24" height="5" rx="2" fill="#94A3B8"/>
    <rect x="14" y="60" width="44" height="12" rx="2" fill="#0F172A"/>
    <rect x="88" y="50" width="24" height="5" rx="2" fill="#94A3B8"/>
    <rect x="88" y="60" width="40" height="12" rx="2" fill="#0F172A"/>
    <rect x="162" y="50" width="24" height="5" rx="2" fill="#94A3B8"/>
    <rect x="162" y="60" width="44" height="12" rx="2" fill="#0F172A"/>
    <rect x="236" y="50" width="24" height="5" rx="2" fill="#94A3B8"/>
    <rect x="236" y="60" width="38" height="12" rx="2" fill="#0F172A"/>
    {/* Product grid */}
    <rect x="8" y="88" width="68" height="72" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1"/>
    <rect x="8" y="88" width="68" height="40" rx="8" fill="#DBEAFE"/>
    <rect x="14" y="134" width="40" height="6" rx="2" fill="#0F172A"/>
    <rect x="14" y="146" width="28" height="8" rx="3" fill="#2563EB"/>
    <rect x="84" y="88" width="68" height="72" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1"/>
    <rect x="84" y="88" width="68" height="40" rx="8" fill="#F0FDF4"/>
    <rect x="90" y="134" width="40" height="6" rx="2" fill="#0F172A"/>
    <rect x="90" y="146" width="28" height="8" rx="3" fill="#2563EB"/>
    <rect x="160" y="88" width="68" height="72" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1"/>
    <rect x="160" y="88" width="68" height="40" rx="8" fill="#FFF7ED"/>
    <rect x="166" y="134" width="40" height="6" rx="2" fill="#0F172A"/>
    <rect x="166" y="146" width="28" height="8" rx="3" fill="#2563EB"/>
    {/* Revenue mini-chart */}
    <rect x="236" y="88" width="56" height="72" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1"/>
    <rect x="241" y="94" width="30" height="5" rx="2" fill="#94A3B8"/>
    <rect x="241" y="105" width="44" height="12" rx="2" fill="#0F172A"/>
    <polyline points="241,150 252,142 263,145 274,135 283,138" fill="none" stroke="#2563EB" strokeWidth="2"/>
    <rect x="241" y="156" width="16" height="5" rx="2" fill="#34D399"/>
  </svg>
);

// ── Mockup card wrapper ──────────────────────────────────────────
const mockupCards = [
  { id: 'analytics', label: 'analytics.dashboard', accent: '#2563EB', component: <AnalyticsMockup /> },
  { id: 'crm',       label: 'crm.platform',        accent: '#10B981', component: <CRMMockup /> },
  { id: 'finance',   label: 'finance.tracker',      accent: '#818CF8', component: <FinanceMockup /> },
  { id: 'saas',      label: 'saas.admin',           accent: '#F59E0B', component: <SaaSMockup /> },
  { id: 'project',   label: 'project.manager',      accent: '#EC4899', component: <ProjectMockup /> },
  { id: 'ecommerce', label: 'shop.dashboard',       accent: '#06B6D4', component: <EcommerceMockup /> },
];

const MockupCard = ({ id, label, accent, component }) => (
  <div className={styles.mockup} style={{ '--accent': accent }}>
    <div className={styles.mockup__header}>
      <div className={styles.mockup__dots}>
        <span className={styles.mockup__dot} />
        <span className={styles.mockup__dot} />
        <span className={styles.mockup__dot} />
      </div>
      <span className={styles.mockup__label}>{label}</span>
    </div>
    <div className={styles.mockup__body}>
      {component}
    </div>
  </div>
);

// ── Services Hero ────────────────────────────────────────────────
const ServicesHero = () => {
  const col1 = [...mockupCards, ...mockupCards]; // duplicated for infinite loop
  const col2 = [...[...mockupCards].reverse(), ...[...mockupCards].reverse()];

  return (
    <section className={styles.hero} aria-label="Services Hero">
      {/* Background */}
      <div className={styles.hero__bg} aria-hidden="true">
        <div className={styles.hero__orb1} />
        <div className={styles.hero__orb2} />
        <div className={styles.hero__orb3} />
        <div className={styles.hero__grid} />
      </div>

      <Container>
        <div className={styles.hero__inner}>

          {/* Left: Content */}
          <div className={styles.hero__content}>
            <span className={styles.hero__eyebrow}>
              <span className={styles.hero__eyebrowDot} />
              What We Build
            </span>

            <h1 className={styles.hero__title}>
              Crafting Digital{' '}
              <span className={styles.hero__accent}>Experiences</span>{' '}
              That Blend Design &amp; Technology
            </h1>

            <p className={styles.hero__sub}>
              From scalable SaaS platforms to pixel-perfect interfaces —
              we design and engineer modern digital products that people
              actually enjoy using.
            </p>

            <div className={styles.hero__actions}>
              <Button
                to="/contact"
                variant="white"
                size="lg"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                }
              >
                Discuss Your Project
              </Button>
              <Button to="#services-grid" variant="outline-white" size="lg">
                Explore Services
              </Button>
            </div>

            <div className={styles.hero__tags}>
              {['Design-First', 'Scalable Systems', 'Clean Code', 'On-Time Delivery', 'Transparent Pricing'].map(tag => (
                <span key={tag} className={styles.hero__tag}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Infinite visual carousel */}
          <div className={styles.hero__visual} aria-hidden="true">
            <div className={styles.hero__fade} />
            <div className={styles.hero__fadeBottom} />

            <div className={styles.hero__cols}>
              {/* Column 1 - scrolls up */}
              <div className={styles.hero__col}>
                <div className={styles.hero__colTrack}>
                  {col1.map((card, i) => (
                    <MockupCard key={`c1-${i}`} {...card} />
                  ))}
                </div>
              </div>

              {/* Column 2 - scrolls down */}
              <div className={styles.hero__col}>
                <div className={`${styles.hero__colTrack} ${styles['hero__colTrack--rev']}`}>
                  {col2.map((card, i) => (
                    <MockupCard key={`c2-${i}`} {...card} />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ServicesHero;
