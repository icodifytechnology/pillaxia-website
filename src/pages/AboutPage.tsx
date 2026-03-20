import React, { useEffect, useState, useRef, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  HeartIcon,
  ZapIcon,
  UsersIcon,
  GlobeIcon,
  SparklesIcon,
  PlayIcon,
  ArrowRightIcon,
  ShieldCheckIcon
} from
  'lucide-react';
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      {
        threshold
      }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return {
    ref,
    visible
  };
}
function Reveal({
  children,
  delay = 0,
  className = ''




}: { children: React.ReactNode; delay?: number; className?: string; }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`
      }}>

      {children}
    </div>);

}
function Blob({
  className,
  color = '#3b9eff',
  size = 400,
  opacity = 0.1





}: { className?: string; color?: string; size?: number; opacity?: number; }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        filter: `blur(${size * 0.3}px)`,
        opacity
      }} />);


}
function Pill({ children }: { children: React.ReactNode; }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase"
      style={{
        background: 'rgba(59,158,255,0.1)',
        color: '#3b9eff',
        border: '1px solid rgba(59,158,255,0.3)'
      }}>

      {children}
    </span>);

}
export function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden mesh-dark">
        <Blob
          className="-top-40 -left-40"
          color="#3b9eff"
          size={600}
          opacity={0.15} />

        <Blob
          className="top-1/3 right-0"
          color="#ec4899"
          size={500}
          opacity={0.1} />

        <Blob
          className="bottom-0 left-1/3"
          color="#2dd4bf"
          size={400}
          opacity={0.1} />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #3b9eff 1px, transparent 1px)',
            backgroundSize: '36px 36px'
          }} />


        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <Reveal className="space-y-8">
              <Pill>Our Story</Pill>
              <h1
                style={{
                  lineHeight: 1.08
                }}
                className="text-5xl md:text-7xl font-extrabold text-white">

                Why
                <br />
                <span className="neon-text">Pillaxia</span>
                <br />
                Exists
              </h1>
              <p
                className="text-lg leading-relaxed text-slate-300"
                style={{
                  maxWidth: 480
                }}>

                Founded after firsthand experience of how isolating, fragmented,
                and overwhelming chronic illness can be as a patient and as a
                caregiver. Pillaxia closes that gap by combining clinical
                rigour, human empathy, and responsible technology.
              </p>
              <Link
                to="#vision"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:gap-4 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
                style={{
                  background: 'linear-gradient(90deg, #3b9eff, #ec4899)',
                  color: '#fff'
                }}>

                Learn more <ArrowRightIcon size={15} />
              </Link>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative rounded-3xl p-10 overflow-hidden bg-white/5 border border-white/10 neon-card">
                <Blob
                  className="-top-20 -right-20"
                  color="#3b9eff"
                  size={260}
                  opacity={0.2} />

                <svg
                  viewBox="0 0 400 340"
                  fill="none"
                  className="w-full relative z-10">

                  <defs>
                    <linearGradient
                      id="heroG1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%">

                      <stop offset="0%" stopColor="#3b9eff" stopOpacity="0.3" />
                      <stop
                        offset="100%"
                        stopColor="#ec4899"
                        stopOpacity="0.3" />

                    </linearGradient>
                    <linearGradient
                      id="heroG2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%">

                      <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.5" />
                      <stop offset="60%" stopColor="#3b9eff" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                  {[
                    [55, 90],
                    [90, 200],
                    [45, 295],
                    [125, 70],
                    [155, 315]].
                    map(([cx, cy], i) =>
                      <circle
                        key={i}
                        cx={cx}
                        cy={cy}
                        r={6 + i * 2}
                        fill="rgba(59,158,255,0.2)"
                        stroke="rgba(59,158,255,0.4)"
                        strokeWidth="1" />

                    )}
                  <path
                    d="M90 200 C160 200 210 100 310 148"
                    stroke="url(#heroG2)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="8 8" />

                  <path
                    d="M125 70 C200 70 255 180 310 148"
                    stroke="url(#heroG2)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="8 8" />

                  <path
                    d="M155 315 C220 315 260 200 310 148"
                    stroke="url(#heroG2)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="8 8" />

                  <circle
                    cx="310"
                    cy="148"
                    r="52"
                    fill="url(#heroG1)"
                    stroke="rgba(59,158,255,0.5)"
                    strokeWidth="1.5" />

                  <circle cx="310" cy="148" r="28" fill="#3b9eff" />
                  <circle
                    cx="370"
                    cy="96"
                    r="18"
                    fill="rgba(59,158,255,0.3)"
                    stroke="rgba(59,158,255,0.5)"
                    strokeWidth="1.5" />

                  <circle
                    cx="360"
                    cy="218"
                    r="26"
                    fill="rgba(236,72,153,0.3)"
                    stroke="rgba(236,72,153,0.5)"
                    strokeWidth="1.5" />

                  <path
                    d="M310 148 L370 96"
                    stroke="#3b9eff"
                    strokeWidth="2.5"
                    strokeLinecap="round" />

                  <path
                    d="M310 148 L360 218"
                    stroke="#ec4899"
                    strokeWidth="2.5"
                    strokeLinecap="round" />

                  <text
                    x="50"
                    y="88"
                    fill="#94A3B8"
                    fontSize="11"
                    fontFamily="sans-serif">

                    Fragmented
                  </text>
                  <text
                    x="278"
                    y="262"
                    fill="#3b9eff"
                    fontSize="11"
                    fontFamily="sans-serif"
                    fontWeight="600">

                    Connected
                  </text>
                </svg>
                <div className="grid grid-cols-3 gap-4 mt-8 relative z-10 border-t border-white/10 pt-8">
                  {[
                    ['10K+', 'Patients'],
                    ['98%', 'Adherence'],
                    ['24/7', 'Support']].
                    map(([val, lbl]) =>
                      <div key={lbl} className="text-center">
                        <p className="neon-text text-2xl font-extrabold leading-none">
                          {val}
                        </p>
                        <p className="text-slate-400 text-[11px] mt-1">{lbl}</p>
                      </div>
                    )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INSIGHT QUOTE BAND */}
      <section className="relative py-24 overflow-hidden mesh-dark">
        <div className="absolute top-0 left-0 right-0 neon-line" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <Reveal>
            <Pill>The Insight</Pill>
            <div className="max-w-4xl mx-auto mt-10 relative">
              <span
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 120,
                  lineHeight: 1,
                  color: 'rgba(59,158,255,0.15)',
                  position: 'absolute',
                  top: -40,
                  left: -20,
                  userSelect: 'none'
                }}>

                "
              </span>
              <p className="text-3xl md:text-5xl font-bold relative z-10 text-white leading-tight">
                Healthcare doesn't end at the clinic door,{' '}
                <span className="neon-text">but support often does.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section
        id="vision"
        className="relative py-28 overflow-hidden bg-[#f8fbff]">

        <div className="absolute top-0 left-0 right-0 neon-line" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Reveal className="text-center mb-20">
            <Pill>What Drives Us</Pill>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-[#010d3e]">
              Vision &amp; Mission
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Reveal delay={0}>
              <div className="relative rounded-3xl p-10 h-full overflow-hidden transition-all duration-300 bg-white neon-card">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3b9eff] to-[#ec4899]" />
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-[#3b9eff]/10 border border-[#3b9eff]/20">
                  <GlobeIcon size={24} color="#3b9eff" />
                </div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4 text-[#3b9eff]">
                  Our Vision
                </p>
                <p className="text-[#010d3e] text-lg font-semibold leading-relaxed">
                  To build a global ecosystem of connected care where people
                  with chronic conditions feel empowered, supported and
                  understood turning every medication moment into an opportunity
                  for better health and human connection.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative rounded-3xl p-10 h-full overflow-hidden transition-all duration-300 bg-white neon-card">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ec4899] to-[#2dd4bf]" />
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-[#ec4899]/10 border border-[#ec4899]/20">
                  <ZapIcon size={24} color="#ec4899" />
                </div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4 text-[#ec4899]">
                  Our Mission
                </p>
                <p className="text-slate-600 text-base leading-relaxed">
                  To enhance global health standards by creating a sustainable
                  ecosystem of care, making advanced medication management
                  accessible to everyone, and transforming chronic illness
                  management into a supportive experience that reduces
                  isolation.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="relative py-28 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 right-0 neon-line" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Reveal className="text-center mb-20">
            <Pill>What We Stand For</Pill>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-[#010d3e]">
              Our Core Values
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
            {[
              {
                icon: <HeartIcon size={22} />,
                title: 'Empathy',
                color: '#ec4899'
              },
              {
                icon: <ZapIcon size={22} />,
                title: 'Empowerment',
                color: '#3b9eff'
              },
              {
                icon: <UsersIcon size={22} />,
                title: 'Collaboration',
                color: '#2dd4bf'
              },
              {
                icon: <GlobeIcon size={22} />,
                title: 'Inclusivity',
                color: '#ec4899'
              },
              {
                icon: <SparklesIcon size={22} />,
                title: 'Innovation',
                color: '#3b9eff'
              }].
              map((val, i) =>
                <Reveal key={i} delay={i * 80}>
                  <div className="group relative rounded-2xl p-7 flex flex-col items-center text-center h-full bg-white neon-card">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `${val.color}15`,
                        color: val.color
                      }}>

                      {val.icon}
                    </div>
                    <h3 className="text-[#010d3e] text-[15px] font-bold mb-2">
                      {val.title}
                    </h3>
                  </div>
                </Reveal>
              )}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="relative py-28 overflow-hidden mesh-dark">
        <div className="absolute top-0 left-0 right-0 neon-line" />
        <div className="container mx-auto px-6 md:px-12">
          <Reveal className="text-center mb-14">
            <Pill>See It In Action</Pill>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-white">
              Pillaxia in Motion
            </h2>
          </Reveal>

          <Reveal>
            <div className="relative rounded-3xl overflow-hidden cursor-pointer group max-w-5xl mx-auto bg-white/5 border border-white/10 neon-card aspect-video">
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-6">
                <div className="w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-white/10 border border-[#3b9eff]/30 backdrop-blur-md">
                  <PlayIcon
                    size={36}
                    fill="#fff"
                    color="#fff"
                    style={{
                      marginLeft: 4
                    }} />

                </div>
                <div className="text-center">
                  <h3 className="text-white text-2xl font-bold">
                    Pillaxia Promo Video
                  </h3>
                  <span className="inline-block mt-3 px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#ec4899]/20 text-[#ec4899] border border-[#ec4899]/30">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PILLAXIACARE + APEX-PITCH */}
      <section className="relative py-28 overflow-hidden bg-[#f8fbff]">
        <div className="absolute top-0 left-0 right-0 neon-line" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Reveal className="text-center mb-20">
            <Pill>PillaxiaCare</Pill>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-[#010d3e]">
              Our Commitment Beyond Technology
            </h2>
          </Reveal>

          <div className="max-w-6xl mx-auto space-y-24">

            {/* Block 1 — PillaxiaCare Community */}
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <Reveal delay={0} className="order-2 md:order-1 space-y-6">
                <h3 className="text-3xl font-bold text-[#010d3e] leading-tight">
                  Community at the{' '}
                  <span className="neon-text">heart of care</span>
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  PillaxiaCare is our community initiative dedicated to
                  supporting patients, caregivers, and healthcare professionals
                  through education, workshops, and outreach programmes. Rooted
                  in empathy and lived experience, PillaxiaCare extends beyond
                  digital tools to create safe spaces for dialogue, learning,
                  and practical support.
                </p>
                <p className="text-slate-600 leading-relaxed text-base">
                  In collaboration with the Apex Foundation in Nigeria, we are
                  expanding our philanthropic efforts to support mothers,
                  children, and underserved communities through health
                  education, digital access, and resource support.
                </p>
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {[
                    'Education',
                    'Workshops',
                    'Outreach',
                    'Nigeria & Ireland'].
                    map((tag) =>
                      <span
                        key={tag}
                        className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#3b9eff]/10 text-[#3b9eff] border border-[#3b9eff]/20">

                        {tag}
                      </span>
                    )}
                </div>
              </Reveal>

              <Reveal delay={120} className="order-1 md:order-2">
                <div className="relative rounded-3xl p-10 aspect-square flex items-center justify-center overflow-hidden bg-white neon-card">
                  <svg
                    viewBox="0 0 360 360"
                    fill="none"
                    className="w-full relative z-10">

                    <circle
                      cx="180"
                      cy="180"
                      r="120"
                      fill="rgba(59,158,255,0.05)"
                      stroke="rgba(59,158,255,0.2)"
                      strokeWidth="2" />

                    <circle
                      cx="180"
                      cy="180"
                      r="80"
                      fill="rgba(59,158,255,0.04)"
                      stroke="rgba(59,158,255,0.12)"
                      strokeWidth="1.5"
                      strokeDasharray="6 6" />

                    <path
                      d="M180 230 C180 230 120 190 120 150 C120 128 142 114 180 144 C218 114 240 128 240 150 C240 190 180 230 180 230 Z"
                      fill="rgba(236,72,153,0.5)"
                      stroke="#ec4899"
                      strokeWidth="1.5" />

                    {[0, 72, 144, 216, 288].map((deg, i) => {
                      const r = 130;
                      const x = 180 + r * Math.cos((deg - 90) * Math.PI / 180);
                      const y = 180 + r * Math.sin((deg - 90) * Math.PI / 180);
                      const colors = ['#3b9eff', '#ec4899', '#2dd4bf', '#3b9eff', '#ec4899'];
                      return (
                        <g key={i}>
                          <circle
                            cx={x}
                            cy={y}
                            r="22"
                            fill={`${colors[i]}18`}
                            stroke={colors[i]}
                            strokeWidth="1.5" />

                          <circle cx={x} cy={y - 7} r="7" fill={colors[i]} opacity="0.7" />
                          <path
                            d={`M${x - 10} ${y + 18} Q${x} ${y + 6} ${x + 10} ${y + 18}`}
                            stroke={colors[i]}
                            strokeWidth="2"
                            fill="none"
                            opacity="0.7" />

                        </g>);

                    })}
                    {[0, 72, 144, 216, 288].map((deg, i) => {
                      const r = 108;
                      const x = 180 + r * Math.cos((deg - 90) * Math.PI / 180);
                      const y = 180 + r * Math.sin((deg - 90) * Math.PI / 180);
                      return (
                        <line
                          key={i}
                          x1="180"
                          y1="180"
                          x2={x}
                          y2={y}
                          stroke="rgba(59,158,255,0.2)"
                          strokeWidth="1.5"
                          strokeDasharray="4 4" />);


                    })}
                  </svg>
                </div>
              </Reveal>
            </div>

            {/* Block 2 — Apex-Pitch Partnership */}
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <Reveal delay={0}>
                <div className="relative rounded-3xl p-10 aspect-square flex items-center justify-center overflow-hidden bg-white neon-card">
                  <svg
                    viewBox="0 0 360 360"
                    fill="none"
                    className="w-full relative z-10">

                    <circle
                      cx="145"
                      cy="180"
                      r="90"
                      fill="rgba(59,158,255,0.06)"
                      stroke="rgba(59,158,255,0.3)"
                      strokeWidth="2" />

                    <circle
                      cx="215"
                      cy="180"
                      r="90"
                      fill="rgba(236,72,153,0.06)"
                      stroke="rgba(236,72,153,0.3)"
                      strokeWidth="2" />

                    {/* intersection fill */}
                    <path
                      d="M180 106 Q215 143 215 180 Q215 217 180 254 Q145 217 145 180 Q145 143 180 106Z"
                      fill="rgba(59,158,255,0.1)" />

                    <text
                      x="112"
                      y="178"
                      textAnchor="middle"
                      fill="#3b9eff"
                      fontSize="11"
                      fontFamily="sans-serif"
                      fontWeight="700">

                      Pillaxia
                    </text>
                    <text
                      x="112"
                      y="194"
                      textAnchor="middle"
                      fill="rgba(59,158,255,0.6)"
                      fontSize="10"
                      fontFamily="sans-serif">

                      Digital
                    </text>
                    <text
                      x="248"
                      y="178"
                      textAnchor="middle"
                      fill="#ec4899"
                      fontSize="11"
                      fontFamily="sans-serif"
                      fontWeight="700">

                      Apex-Pitch
                    </text>
                    <text
                      x="248"
                      y="194"
                      textAnchor="middle"
                      fill="rgba(236,72,153,0.6)"
                      fontSize="10"
                      fontFamily="sans-serif">

                      Medical
                    </text>
                    <text
                      x="180"
                      y="176"
                      textAnchor="middle"
                      fill="#010d3e"
                      fontSize="10"
                      fontFamily="sans-serif"
                      fontWeight="700">

                      Shared
                    </text>
                    <text
                      x="180"
                      y="191"
                      textAnchor="middle"
                      fill="#64748b"
                      fontSize="9"
                      fontFamily="sans-serif">

                      Mission
                    </text>
                    {/* cross / plus icon at bottom */}
                    <g transform="translate(163,260)">
                      <rect x="10" y="0" width="14" height="34" rx="3" fill="rgba(59,158,255,0.2)" />
                      <rect x="0" y="10" width="34" height="14" rx="3" fill="rgba(59,158,255,0.2)" />
                    </g>
                  </svg>
                </div>
              </Reveal>

              <Reveal delay={120} className="space-y-6">
                <h3 className="text-3xl font-bold text-[#010d3e] leading-tight">
                  Apex-Pitch{' '}
                  <span className="neon-text">Partnership</span>
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  Pillaxia is proud to partner with Apex-Pitch Medical, one of
                  Nigeria's leading distributors of medical devices and
                  healthcare solutions. This collaboration brings together
                  Pillaxia's digital innovation with Apex-Pitch's deep-rooted
                  presence across hospitals and healthcare facilities in Nigeria.
                </p>
                <p className="text-slate-600 leading-relaxed text-base">
                  Through the integration of PillaxiaRx within Apex's hospital
                  network, we aim to strengthen care coordination, empower
                  clinicians, and improve medication adherence for patients who
                  need it most.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    { icon: <ShieldCheckIcon size={15} />, label: 'Hospital Network Integration' },
                    { icon: <HeartIcon size={15} />, label: 'Improved Adherence' },
                    { icon: <UsersIcon size={15} />, label: 'Clinician Empowerment' },
                    { icon: <GlobeIcon size={15} />, label: 'Nigeria-wide Reach' }].
                    map(({ icon, label }) =>
                      <div
                        key={label}
                        className="flex items-center gap-2.5 rounded-xl px-4 py-3 bg-[#3b9eff]/5 border border-[#3b9eff]/15">

                        <span className="text-[#3b9eff] shrink-0">{icon}</span>
                        <span className="text-[#010d3e] text-xs font-medium leading-snug">
                          {label}
                        </span>
                      </div>
                    )}
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative py-28 overflow-hidden mesh-dark">
        <div className="absolute top-0 left-0 right-0 neon-line" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-3xl">
          <Reveal>
            <Pill>Join the Movement</Pill>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-6 mb-6">
              Better care starts
              <br />
              <span className="neon-text">with connection</span>
            </h2>
            <p className="text-slate-300 text-lg mb-10">
              We're building a future where no one navigates chronic illness
              alone. Be part of the Pillaxia ecosystem.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/early-access"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:gap-4 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] bg-gradient-to-r from-[#3b9eff] to-[#ec4899] text-white">

                Get Early Access <ArrowRightIcon size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>);

}