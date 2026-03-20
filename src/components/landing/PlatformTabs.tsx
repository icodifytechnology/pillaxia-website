import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2Icon,
  StethoscopeIcon,
  SmartphoneIcon,
  SparklesIcon,
  UsersIcon,
  ShieldCheckIcon,
  EyeIcon,
  HeartHandshakeIcon,
  ArrowRightIcon } from
'lucide-react';
function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>);

}
function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M3.18 23.76c.3.17.64.22.98.15l13.5-7.76-2.9-2.9-11.58 10.51zM.54 1.57C.2 1.9 0 2.43 0 3.12v17.76c0 .69.2 1.22.54 1.55l.08.08 9.95-9.95v-.23L.62 1.49l-.08.08zM20.1 10.7l-2.83-1.63-3.17 3.17 3.17 3.17 2.85-1.64c.81-.47.81-1.23-.02-1.7v.03zM4.16.24L17.67 8c.82.48.82 1.24 0 1.72l-2.9 2.9-3.17-3.17L4.16.24z" />
    </svg>);

}
const BRAND = '#010d3e';
const BRAND_MID = '#0a1a6b';
const ACCENT = '#3b9eff';
const MAGENTA = '#ec4899';
const TEAL = '#2dd4bf';
const platforms = [
{
  id: 'rx',
  label: 'PillaxiaRx',
  tagline: 'For Clinicians & Hospitals',
  icon: StethoscopeIcon,
  heading: 'For Clinicians, Hospitals & Care Organisations',
  body: 'A clinician-facing web platform designed to support safer, smarter connected care. PillaxiaRx gives care teams visibility between visits, enabling proactive intervention rather than reactive care.',
  features: [
  'Medication oversight and interaction awareness',
  'Missed dose and adherence risk alerts',
  'Follow-up tracking and discharge care plans',
  'Patient history and documentation audit trails',
  'Secure patient-clinician communication',
  'Role-based access for multidisciplinary teams'],

  callout:
  'Designed to integrate, not disrupt. PillaxiaRx complements existing systems while closing critical care gaps.',
  cta: 'See PillaxiaRx for Clinicians',
  ctaTo: '/book-demo'
},
{
  id: 'app',
  label: 'Pillaxia App',
  tagline: 'For Patients & Families',
  icon: SmartphoneIcon,
  heading: 'For Patients & Families',
  body: "A supportive, human-centred companion for everyday health. Patients can track medications, symptoms, and stay connected to their care team with Angela, Pillaxia's AI companion.",
  features: [
  'Understand and follow medication routines',
  'Track symptoms and side effects',
  'Stay connected to their care team',
  'Involve trusted family or caregivers',
  'Feel supported, not monitored'],

  callout:
  "This is not 'just another reminder app.' It's care that continues after the appointment ends.",
  cta: 'Explore the Patient Experience',
  ctaTo: '#',
  angela: true
},
{
  id: 'carehub',
  label: 'CareHub',
  tagline: 'Shared Care Coordination',
  icon: UsersIcon,
  heading: 'Care Is a Team Sport. CareHub Makes It Visible',
  body: 'CareHub enables shared care coordination between patients, clinicians, and trusted supporters. With clear permissions and auditability, everyone stays informed without overstepping.',
  features: null,
  careHubCards: [
  {
    icon: HeartHandshakeIcon,
    title: 'Families support without overstepping',
    desc: 'Clear permission boundaries keep everyone in their lane'
  },
  {
    icon: EyeIcon,
    title: 'Connected care and coordination',
    desc: 'Streamlined monitoring, reduced readmissions and valuable data insights to inform healthcare planning'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Patients feel held, not watched',
    desc: 'Auditability and consent built into every interaction'
  }],

  callout: 'This is how healthcare becomes connected, not chaotic.',
  cta: 'Explore CareHub',
  ctaTo: '/book-demo'
}];

function StoreButton({
  store,
  href



}: {store: 'ios' | 'android';href: string;}) {
  const isIos = store === 'ios';
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative flex items-center gap-3 rounded-2xl px-4 py-3.5 overflow-hidden transition-all duration-250 hover:-translate-y-0.5 bg-white/5 border border-white/10 hover:border-[#3b9eff]/50">
      
      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 bg-gradient-to-br from-[#3b9eff] to-[#ec4899] shadow-[0_3px_10px_rgba(236,72,153,0.3)]">
        {isIos ? <AppleIcon /> : <GooglePlayIcon />}
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-[9.5px] font-medium leading-none mb-1 text-slate-400 tracking-wider">
          {isIos ? 'Download on the' : 'Get it on'}
        </span>
        <span className="text-[13.5px] font-bold leading-none text-white">
          {isIos ? 'App Store' : 'Google Play'}
        </span>
      </div>
      <div className="ml-auto shrink-0 w-6 h-6 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0 bg-white/10">
        <ArrowRightIcon size={12} color="#fff" />
      </div>
    </a>);

}
function SidebarDownload() {
  return (
    <div className="hidden lg:flex flex-col gap-3 mt-4 pt-5 border-t border-white/10">
      <div className="flex items-center gap-2 mb-0.5">
        <div className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 bg-gradient-to-br from-[#3b9eff] to-[#ec4899]">
          <SmartphoneIcon size={11} color="#fff" />
        </div>
        <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-white">
          Download the App
        </p>
      </div>
      <p className="text-[10.5px] text-slate-400 leading-relaxed">
        Manage your health on the go — available on iOS and Android.
      </p>
      <StoreButton
        store="ios"
        href="https://apps.apple.com/app/pillaxia/id6520385747" />
      
      <StoreButton
        store="android"
        href="https://play.google.com/store/apps/details?id=com.icodify.pillaxia" />
      
      <div className="flex items-center justify-center gap-1.5 pt-0.5">
        <div className="flex -space-x-1">
          {[BRAND, ACCENT, MAGENTA].map((c, i) =>
          <div
            key={i}
            className="w-4 h-4 rounded-full border-2 border-[#010d3e]"
            style={{
              background: c,
              zIndex: 3 - i
            }} />

          )}
        </div>
        <span className="text-[10px] font-medium text-slate-400">
          Rated 4.8 · Free to download
        </span>
      </div>
    </div>);

}
export function PlatformTabs() {
  const [active, setActive] = useState(0);
  const p = platforms[active];
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden mesh-dark" style={{
      backgroundImage: 'url(https://pillaxia.com/images/bg-3.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="absolute top-0 left-0 right-0 neon-line" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 bg-[#3b9eff]/10 border border-[#3b9eff]/30">
            <SparklesIcon className="w-3.5 h-3.5 text-[#3b9eff]" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#3b9eff]">
              The Platform
            </span>
          </div>
          <h2 className="text-3xl lg:text-[2.6rem] font-extrabold tracking-tight leading-tight mb-3 text-white">
            One Platform. <span className="neon-text">Three Purpose-Built</span>{' '}
            Experiences.
          </h2>
          <p className="text-base max-w-lg mx-auto text-slate-300">
            Built for every stakeholder in the care journey — clinicians,
            patients, families, and pharmacies.
          </p>
        </div>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
          {/* LEFT: sidebar */}
          <div className="flex lg:flex-col gap-3 lg:w-[230px] shrink-0 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {/* Tab buttons */}
            {platforms.map((pl, idx) => {
              const Icon = pl.icon;
              const isActive = idx === active;
              return (
                <button
                  key={pl.id}
                  onClick={() => setActive(idx)}
                  className="relative flex items-center gap-3 text-left rounded-2xl px-4 py-4 transition-all duration-300 shrink-0 lg:shrink w-[175px] lg:w-full"
                  style={{
                    background: isActive ?
                    `linear-gradient(135deg, ${ACCENT} 0%, ${MAGENTA} 100%)` :
                    'rgba(255,255,255,0.05)',
                    border: isActive ?
                    'none' :
                    '1px solid rgba(255,255,255,0.1)',
                    boxShadow: isActive ?
                    `0 0 20px rgba(236,72,153,0.4)` :
                    'none',
                    color: 'white'
                  }}>
                  
                  {isActive &&
                  <motion.div
                    layoutId="sideBar"
                    className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-white"
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 35
                    }} />

                  }
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: isActive ?
                      'rgba(255,255,255,0.2)' :
                      'rgba(255,255,255,0.1)'
                    }}>
                    
                    <Icon
                      style={{
                        width: 18,
                        height: 18
                      }} />
                    
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold leading-tight truncate">
                      {pl.label}
                    </p>
                    <p
                      className="text-[11px] leading-snug truncate mt-0.5 hidden lg:block"
                      style={{
                        opacity: isActive ? 0.9 : 0.5
                      }}>
                      
                      {pl.tagline}
                    </p>
                  </div>
                  {isActive &&
                  <ArrowRightIcon className="w-4 h-4 ml-auto shrink-0 hidden lg:block opacity-80" />
                  }
                </button>);

            })}

            {/* Step indicators */}
            <div className="hidden lg:flex flex-col gap-1.5 mt-1 px-2">
              {platforms.map((_, i) =>
              <div
                key={i}
                className="h-1 rounded-full transition-all duration-300"
                style={{
                  background: i === active ? ACCENT : 'rgba(255,255,255,0.1)',
                  width: i === active ? '100%' : '40%',
                  boxShadow: i === active ? `0 0 10px ${ACCENT}` : 'none'
                }} />

              )}
            </div>

            {/* Download section */}
            <SidebarDownload />
          </div>

          {/* RIGHT: animated panel */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={p.id}
                initial={{
                  opacity: 0,
                  x: 20
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                exit={{
                  opacity: 0,
                  x: -12
                }}
                transition={{
                  duration: 0.38,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-xl neon-border">
                
                {/* Panel header */}
                <div className="relative px-8 py-6 md:px-10 md:py-7 bg-gradient-to-br from-[#010d3e] to-[#0a1a6b]">
                  <div className="absolute top-0 left-12 right-12 h-px bg-white/20" />
                  <div className="absolute bottom-0 left-0 right-0 neon-line" />
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-white/10 backdrop-blur-md border border-white/20">
                      <p.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase mb-0.5">
                        {p.tagline}
                      </p>
                      <h3 className="text-xl md:text-2xl font-extrabold text-white leading-tight">
                        {p.label}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Panel body */}
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left: text */}
                  <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10">
                    <h4 className="text-lg font-bold mb-3 leading-snug text-white">
                      {p.heading}
                    </h4>
                    <p className="text-sm leading-relaxed mb-6 text-slate-300">
                      {p.body}
                    </p>

                    {/* Features */}
                    {p.features &&
                    <ul className="space-y-2.5 mb-6">
                        {p.features.map((f, i) =>
                      <motion.li
                        key={i}
                        initial={{
                          opacity: 0,
                          x: -8
                        }}
                        animate={{
                          opacity: 1,
                          x: 0
                        }}
                        transition={{
                          delay: 0.05 * i,
                          duration: 0.3
                        }}
                        className="flex items-start gap-3">
                        
                            <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-[#2dd4bf]/10 border border-[#2dd4bf]/30">
                              <CheckCircle2Icon className="w-3 h-3 text-[#2dd4bf]" />
                            </div>
                            <span className="text-sm text-slate-300">{f}</span>
                          </motion.li>
                      )}
                      </ul>
                    }

                    {/* CareHub cards */}
                    {p.careHubCards &&
                    <div className="space-y-3 mb-6">
                        {p.careHubCards.map(({ icon: CI, title, desc }, i) =>
                      <motion.div
                        key={i}
                        initial={{
                          opacity: 0,
                          x: -8
                        }}
                        animate={{
                          opacity: 1,
                          x: 0
                        }}
                        transition={{
                          delay: 0.08 * i
                        }}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                        
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-gradient-to-br from-[#3b9eff] to-[#ec4899]">
                              <CI className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold mb-0.5 text-white">
                                {title}
                              </p>
                              <p className="text-xs leading-snug text-slate-400">
                                {desc}
                              </p>
                            </div>
                          </motion.div>
                      )}
                      </div>
                    }

                    {/* Angela callout */}
                    {p.angela &&
                    <div className="relative p-4 rounded-xl mb-5 overflow-hidden bg-[#ec4899]/5 border border-[#ec4899]/20">
                        <SparklesIcon className="absolute top-3 right-3 w-8 h-8 opacity-10 text-[#ec4899]" />
                        <div className="flex items-center gap-2 mb-1.5">
                          <SparklesIcon className="w-4 h-4 text-[#ec4899]" />
                          <span className="text-sm font-bold text-white">
                            Meet Angela
                          </span>
                        </div>
                        <p className="text-xs leading-relaxed text-slate-300">
                          At the heart of the experience is Angela, Pillaxia's
                          AI-powered companion, designed to reinforce clinical
                          guidance with empathy, clarity, and consistency.
                        </p>
                      </div>
                    }

                    {/* Callout box */}
                    <div className="relative p-4 rounded-xl mb-7 overflow-hidden bg-white/5 border border-white/10">
                      <div className="absolute top-0 left-0 right-0 neon-line rounded-t-xl" />
                      <p className="text-xs font-medium leading-relaxed italic text-slate-300">
                        "{p.callout}"
                      </p>
                    </div>

                    {/* CTA */}
                    <Link
                      to={p.ctaTo}
                      className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:gap-4 bg-gradient-to-r from-[#3b9eff] to-[#ec4899]">
                      
                      {p.cta}
                      <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Right: illustration */}
                  <div className="relative flex items-center justify-center p-8 md:p-10 min-h-[280px] bg-white/5">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={p.id + '-svg'}
                        initial={{
                          opacity: 0,
                          scale: 0.93
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.95
                        }}
                        transition={{
                          duration: 0.38
                        }}
                        className="relative z-10 w-full">
                        
                        {p.id === 'rx' && <RxIllustration />}
                        {p.id === 'app' && <AppIllustration />}
                        {p.id === 'carehub' && <CareHubIllustration />}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>);

}
/* ── Illustrations ── */
function RxIllustration() {
  return (
    <svg
      viewBox="0 0 320 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-sm mx-auto drop-shadow-[0_0_15px_rgba(59,158,255,0.3)]">
      
      <defs>
        <linearGradient id="rxG" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor={ACCENT} />
          <stop offset="1" stopColor={MAGENTA} />
        </linearGradient>
      </defs>
      <rect
        x="0"
        y="0"
        width="320"
        height="260"
        rx="20"
        fill="#010d3e"
        stroke={ACCENT}
        strokeWidth="1.5" />
      
      <rect
        x="0"
        y="0"
        width="64"
        height="260"
        rx="20"
        fill="rgba(255,255,255,0.05)"
        stroke={ACCENT}
        strokeWidth="1.5" />
      
      <circle cx="32" cy="34" r="12" fill="url(#rxG)" fillOpacity="0.9" />
      <path
        d="M28 34 V40 M32 30 V40 M36 34 V40"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round" />
      
      {[62, 80, 98, 116].map((y, i) =>
      <rect
        key={i}
        x="16"
        y={y}
        width={i === 0 ? 32 : 24}
        height="7"
        rx="3.5"
        fill={i === 0 ? ACCENT : 'rgba(255,255,255,0.2)'}
        fillOpacity={i === 0 ? 0.75 : 1} />

      )}
      <rect x="80" y="14" width="220" height="26" rx="8" fill="url(#rxG)" />
      <rect
        x="90"
        y="22"
        width="80"
        height="10"
        rx="5"
        fill="white"
        fillOpacity="0.55" />
      
      <circle cx="280" cy="27" r="8" fill="white" fillOpacity="0.2" />
      {[0, 1, 2].map((i) =>
      <g key={i}>
          <rect
          x={80 + i * 80}
          y="52"
          width="68"
          height="48"
          rx="12"
          fill={i === 0 ? 'rgba(59,158,255,0.1)' : 'rgba(255,255,255,0.05)'}
          stroke={i === 0 ? ACCENT : 'rgba(255,255,255,0.1)'}
          strokeWidth="1.2" />
        
          <rect
          x={88 + i * 80}
          y="61"
          width="24"
          height="7"
          rx="3.5"
          fill={i === 0 ? ACCENT : 'rgba(255,255,255,0.3)'} />
        
          <rect
          x={88 + i * 80}
          y="74"
          width="36"
          height="5"
          rx="2.5"
          fill="rgba(255,255,255,0.1)" />
        
          <rect
          x={88 + i * 80}
          y="85"
          width="20"
          height="5"
          rx="2.5"
          fill="rgba(255,255,255,0.05)" />
        
        </g>
      )}
      <rect
        x="80"
        y="112"
        width="220"
        height="82"
        rx="14"
        fill="rgba(255,255,255,0.05)"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1.2" />
      
      <path
        d="M96 168 L120 148 L148 158 L178 130 L208 150 L238 136 L280 142"
        stroke={MAGENTA}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round" />
      
      <path
        d="M96 168 L120 148 L148 158 L178 130 L208 150 L238 136 L280 142 L280 194 L96 194Z"
        fill={MAGENTA}
        fillOpacity="0.1" />
      
      {[120, 178, 238].map((cx, i) =>
      <circle
        key={i}
        cx={cx}
        cy={[148, 130, 136][i]}
        r="4.5"
        fill="#010d3e"
        stroke={MAGENTA}
        strokeWidth="2" />

      )}
      <rect x="148" y="112" width="52" height="22" rx="6" fill={MAGENTA} />
      <rect
        x="156"
        y="118"
        width="18"
        height="5"
        rx="2.5"
        fill="white"
        fillOpacity="0.8" />
      
      <rect
        x="156"
        y="125"
        width="30"
        height="4"
        rx="2"
        fill="white"
        fillOpacity="0.45" />
      
      {[206, 220, 234].map((y, i) =>
      <g key={i}>
          <rect
          x="80"
          y={y}
          width="220"
          height="12"
          rx="4"
          fill={i % 2 === 0 ? 'rgba(255,255,255,0.05)' : 'transparent'} />
        
          <rect
          x="88"
          y={y + 3}
          width={[65, 50, 80][i]}
          height="6"
          rx="3"
          fill="rgba(255,255,255,0.2)" />
        
          <rect
          x="258"
          y={y + 3}
          width="28"
          height="6"
          rx="3"
          fill={
          i === 1 ? '#fde68a' : i === 2 ? TEAL : 'rgba(255,255,255,0.1)'
          } />
        
        </g>
      )}
    </svg>);

}
function AppIllustration() {
  return (
    <svg
      viewBox="0 0 190 310"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[55%] mx-auto drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">
      
      <defs>
        <linearGradient id="cardG" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor={ACCENT} />
          <stop offset="1" stopColor={MAGENTA} />
        </linearGradient>
      </defs>
      <rect
        x="4"
        y="4"
        width="182"
        height="302"
        rx="26"
        fill="#010d3e"
        stroke={MAGENTA}
        strokeWidth="2" />
      
      <rect
        x="4"
        y="4"
        width="182"
        height="302"
        rx="26"
        fill="none"
        stroke={ACCENT}
        strokeWidth="1.2"
        strokeOpacity="0.5" />
      
      <rect
        x="68"
        y="10"
        width="54"
        height="9"
        rx="4.5"
        fill="rgba(255,255,255,0.1)" />
      
      <circle cx="24" cy="24" r="2.5" fill="rgba(255,255,255,0.3)" />
      <circle cx="32" cy="24" r="2.5" fill="rgba(255,255,255,0.1)" />
      <rect
        x="14"
        y="32"
        width="90"
        height="9"
        rx="4.5"
        fill={ACCENT}
        fillOpacity="0.3" />
      
      <rect
        x="14"
        y="46"
        width="58"
        height="7"
        rx="3.5"
        fill="rgba(255,255,255,0.1)" />
      
      <circle cx="163" cy="43" r="16" fill="rgba(255,255,255,0.1)" />
      <circle cx="163" cy="39" r="7" fill={ACCENT} fillOpacity="0.8" />
      <path
        d="M152 55 C152 49 174 49 174 55"
        stroke={ACCENT}
        strokeWidth="2"
        strokeLinecap="round"
        fill={ACCENT}
        fillOpacity="0.5" />
      
      <rect x="14" y="68" width="162" height="72" rx="18" fill="url(#cardG)" />
      <rect
        x="14"
        y="68"
        width="162"
        height="72"
        rx="18"
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1" />
      
      <path
        d="M28 104 H44 L52 88 L63 120 L70 104 H86"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round" />
      
      <rect
        x="100"
        y="82"
        width="56"
        height="9"
        rx="4.5"
        fill="white"
        fillOpacity="0.85" />
      
      <rect
        x="100"
        y="96"
        width="40"
        height="6.5"
        rx="3.2"
        fill="white"
        fillOpacity="0.5" />
      
      <rect
        x="100"
        y="108"
        width="64"
        height="6"
        rx="3"
        fill="white"
        fillOpacity="0.3" />
      
      <rect
        x="14"
        y="152"
        width="70"
        height="7"
        rx="3.5"
        fill="rgba(255,255,255,0.1)" />
      
      <rect
        x="90"
        y="152"
        width="40"
        height="7"
        rx="3.5"
        fill="rgba(255,255,255,0.05)" />
      
      {[166, 192, 218, 244].map((y, i) =>
      <g key={i}>
          <rect
          x="14"
          y={y}
          width="162"
          height="22"
          rx="10"
          fill={i === 0 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)'}
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1" />
        
          <circle
          cx="30"
          cy={y + 11}
          r="8"
          fill={ACCENT}
          fillOpacity={[0.85, 0.55, 0.35, 0.2][i]} />
        
          <rect
          x="44"
          y={y + 5}
          width="58"
          height="6"
          rx="3"
          fill="rgba(255,255,255,0.3)" />
        
          <rect
          x="44"
          y={y + 13}
          width="38"
          height="5"
          rx="2.5"
          fill="rgba(255,255,255,0.1)" />
        
          <rect
          x="148"
          y={y + 7}
          width="22"
          height="8"
          rx="4"
          fill={i === 0 ? ACCENT : 'rgba(255,255,255,0.1)'} />
        
        </g>
      )}
      <rect
        x="14"
        y="274"
        width="118"
        height="24"
        rx="12"
        fill="rgba(255,255,255,0.05)"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1" />
      
      <circle cx="30" cy="286" r="5" fill={TEAL} fillOpacity="0.9" />
      <rect
        x="40"
        y="281"
        width="50"
        height="5"
        rx="2.5"
        fill="rgba(255,255,255,0.3)" />
      
      <rect
        x="40"
        y="289"
        width="36"
        height="5"
        rx="2.5"
        fill="rgba(255,255,255,0.1)" />
      
    </svg>);

}
function CareHubIllustration() {
  const nodes = [
  {
    cx: 150,
    cy: 56,
    r: 26,
    label: 'Patient',
    color: MAGENTA
  },
  {
    cx: 48,
    cy: 152,
    r: 20,
    label: 'Clinician',
    color: TEAL
  },
  {
    cx: 252,
    cy: 152,
    r: 20,
    label: 'Family',
    color: ACCENT
  },
  {
    cx: 80,
    cy: 244,
    r: 17,
    label: 'Pharmacy',
    color: MAGENTA
  },
  {
    cx: 220,
    cy: 244,
    r: 17,
    label: 'Carer',
    color: TEAL
  }];

  const lines: [number, number, number, number][] = [
  [150, 82, 48, 132],
  [150, 82, 252, 132],
  [150, 82, 80, 227],
  [150, 82, 220, 227],
  [68, 152, 80, 227],
  [232, 152, 220, 227],
  [48, 152, 252, 152],
  [80, 244, 220, 244]];

  const icons = [
  (cx: number, cy: number) =>
  <>
        <circle cx={cx} cy={cy - 7} r={8} fill={MAGENTA} fillOpacity="0.8" />
        <path
      d={`M${cx - 10} ${cy + 8} C${cx - 10} ${cy + 1} ${cx + 10} ${cy + 1} ${cx + 10} ${cy + 8}`}
      fill={MAGENTA}
      fillOpacity="0.6"
      stroke={MAGENTA}
      strokeWidth="1.5"
      strokeLinecap="round" />
    
      </>,

  (cx: number, cy: number) =>
  <>
        <rect
      x={cx - 7}
      y={cy - 9}
      width="14"
      height="14"
      rx="4"
      fill={TEAL}
      fillOpacity="0.8" />
    
        <path
      d={`M${cx} ${cy - 9} V${cy - 3} M${cx - 4} ${cy - 6} H${cx + 4}`}
      stroke="#010d3e"
      strokeWidth="1.8"
      strokeLinecap="round" />
    
      </>,

  (cx: number, cy: number) =>
  <>
        <circle
      cx={cx - 5}
      cy={cy - 5}
      r={5.5}
      fill={ACCENT}
      fillOpacity="0.8" />
    
        <circle
      cx={cx + 5}
      cy={cy - 5}
      r={5.5}
      fill={ACCENT}
      fillOpacity="0.7" />
    
        <path
      d={`M${cx - 10} ${cy + 6} C${cx - 10} ${cy} ${cx + 10} ${cy} ${cx + 10} ${cy + 6}`}
      stroke={ACCENT}
      strokeWidth="1.8"
      strokeLinecap="round" />
    
      </>,

  (cx: number, cy: number) =>
  <>
        <rect
      x={cx - 8}
      y={cy - 8}
      width="16"
      height="14"
      rx="4"
      fill={MAGENTA}
      fillOpacity="0.8" />
    
        <circle cx={cx} cy={cy} r="3.5" fill="#010d3e" />
      </>,

  (cx: number, cy: number) =>
  <path
    d={`M${cx} ${cy + 6} C${cx - 14} ${cy - 2} ${cx - 14} ${cy - 10} ${cx} ${cy - 4} C${cx + 14} ${cy - 10} ${cx + 14} ${cy - 2} ${cx} ${cy + 6}Z`}
    fill={TEAL}
    fillOpacity="0.8" />];



  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[82%] mx-auto drop-shadow-[0_0_15px_rgba(45,212,191,0.3)]">
      
      <circle cx="150" cy="168" r="100" fill={`${TEAL}10`} />
      {lines.map(([x1, y1, x2, y2], i) =>
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={ACCENT}
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeDasharray="5 6" />

      )}
      {nodes.map((n, i) =>
      <g key={i}>
          <circle
          cx={n.cx}
          cy={n.cy}
          r={n.r + 10}
          fill={n.color}
          fillOpacity="0.1" />
        
          <circle
          cx={n.cx}
          cy={n.cy}
          r={n.r + 5}
          fill={n.color}
          fillOpacity="0.2" />
        
          <circle
          cx={n.cx}
          cy={n.cy}
          r={n.r}
          fill="#010d3e"
          stroke={n.color}
          strokeWidth="2"
          strokeOpacity="0.9" />
        
          {icons[i](n.cx, n.cy)}
          <text
          x={n.cx}
          y={n.cy + n.r + 13}
          textAnchor="middle"
          fontSize="7.5"
          fill="white"
          fillOpacity="0.9"
          fontWeight="700"
          fontFamily="system-ui">
          
            {n.label}
          </text>
        </g>
      )}
      <circle
        cx="150"
        cy="168"
        r="20"
        fill="#010d3e"
        stroke={TEAL}
        strokeWidth="1.5"
        strokeOpacity="0.8" />
      
      <path
        d="M150 158 L158 163 V170 C158 175 150 179 150 179 C150 179 142 175 142 170 V163 Z"
        fill={TEAL}
        fillOpacity="0.8" />
      
      <path
        d="M146 169 L149 172 L154 166"
        stroke="#010d3e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round" />
      
      <circle
        cx="150"
        cy="168"
        r="44"
        stroke={TEAL}
        strokeOpacity="0.3"
        strokeWidth="1.5"
        strokeDasharray="4 7"
        fill="none" />
      
      <circle
        cx="150"
        cy="168"
        r="60"
        stroke={MAGENTA}
        strokeOpacity="0.2"
        strokeWidth="1"
        strokeDasharray="3 6"
        fill="none" />
      
    </svg>);

}