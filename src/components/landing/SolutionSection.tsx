import React, { useState } from 'react';
import {
  StethoscopeIcon,
  HeartPulseIcon,
  UsersIcon,
  Building2Icon,
  CheckCircle2Icon,
  SparklesIcon,
  ZapIcon,
} from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeading } from '../ui/SectionHeading';
import { motion } from 'framer-motion';

const MAGENTA = '#ec4899';

const connections = [
  {
    id: 'clinicians',
    icon: StethoscopeIcon,
    title: 'Clinicians',
    desc: 'Real-world adherence & risk signals',
    gradientFrom: '#3b9eff',
    gradientTo: '#ec4899',
    accentColor: '#3b9eff',
    accentLight: '#eff6ff',
    accentText: '#1d4ed8',
    backHeadline:
      'Pillaxia helps you monitor patients between visits and intervene earlier, without increasing your workload.',
    benefits: [
      'Visibility into patient adherence and risk',
      'Ability to prioritise high-risk patients',
      'Better decision-making with real data',
      'Saving time and improving outcomes without burnout',
    ],
  },
  {
    id: 'carers',
    icon: UsersIcon,
    title: 'Carers',
    desc: 'Structured involvement & visibility',
    gradientFrom: '#2dd4bf',
    gradientTo: '#3b9eff',
    accentColor: '#2dd4bf',
    accentLight: '#f0fdfa',
    accentText: '#0f766e',
    backHeadline:
      "Pillaxia helps you support your loved one's care without constantly worrying or checking in.",
    benefits: [
      'Visibility into adherence and health status',
      'Peace of mind',
      'Reduced need for constant monitoring',
      'Ability to step in when needed',
      'Reducing emotional burden',
    ],
  },
  {
    id: 'patients',
    icon: HeartPulseIcon,
    title: 'Patients',
    desc: 'Clarity, guidance, and support',
    gradientFrom: '#ec4899',
    gradientTo: '#2dd4bf',
    accentColor: '#ec4899',
    accentLight: '#fdf2f8',
    accentText: '#9d174d',
    backHeadline:
      'Pillaxia helps you stay on top of your treatment and feel in control of your health, without the stress of managing it alone.',
    benefits: [
      'A simple way to manage medications and symptoms',
      'A sense of control over their health',
      'Personalised guidance (Angela) that adapts to them',
      'Continuous support between doctor visits',
    ],
    angela: true,
  },
  {
    id: 'hospitals',
    icon: Building2Icon,
    title: 'Hospitals',
    desc: 'Revenue protection & patient retention',
    gradientFrom: '#7c3aed',
    gradientTo: '#3b9eff',
    accentColor: '#7c3aed',
    accentLight: '#f5f3ff',
    accentText: '#5b21b6',
    backHeadline:
      'Pillaxia helps hospitals protect revenue, grow repeat business, reduce patient leakage, and improve staff productivity by keeping chronic care patients connected to the hospital between visits.',
    benefits: [
      'Protect revenue and reduce patient leakage',
      'Grow repeat business from chronic care patients',
      'Improve staff productivity',
      'Keep chronic care patients connected between visits',
    ],
  },
];

function FlipCard({ item }: { item: typeof connections[0] }) {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ perspective: '1400px', minHeight: 300 }}
    >
      <motion.div
        animate={{ rotateY: hovered ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: 'preserve-3d', position: 'relative', minHeight: 300 }}
      >

        {/* ── FRONT ── */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            border: `2px solid ${item.accentColor}50`,
            boxShadow: `0 0 0 4px ${item.accentColor}0e, 0 8px 32px ${item.accentColor}28, 0 2px 8px rgba(1,13,62,0.06)`,
            background: '#ffffff',
          }}
          className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center text-center overflow-hidden"
        >
          {/* Gradient top bar */}
          <div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{ background: `linear-gradient(90deg, ${item.gradientFrom}, ${item.gradientTo})` }}
          />

          {/* Full-card colour wash */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `linear-gradient(155deg, ${item.gradientFrom}0f 0%, transparent 50%, ${item.gradientTo}0a 100%)` }}
          />

          {/* Decorative bottom-right orb */}
          <div
            className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, ${item.accentColor}16, transparent 65%)` }}
          />

          <div className="relative flex flex-col items-center gap-5 px-8 py-9">
            {/* Icon with halo */}
            <div className="relative flex items-center justify-center">
              <div
                className="absolute w-24 h-24 rounded-full"
                style={{ background: `radial-gradient(circle, ${item.accentColor}20, transparent 70%)` }}
              />
              <div
                className="relative w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${item.gradientFrom}, ${item.gradientTo})`,
                  boxShadow: `0 8px 28px ${item.accentColor}55`,
                }}
              >
                <Icon className="w-7 h-7 text-white" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-[#010d3e] mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-[190px] mx-auto">
                {item.desc}
              </p>
            </div>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: item.accentLight,
            border: `2px solid ${item.accentColor}50`,
            boxShadow: `0 0 0 4px ${item.accentColor}0e, 0 12px 44px ${item.accentColor}35`,
          }}
          className="absolute inset-0 rounded-3xl p-7 flex flex-col overflow-hidden"
        >
          {/* Gradient top bar */}
          <div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{ background: `linear-gradient(90deg, ${item.gradientFrom}, ${item.gradientTo})` }}
          />

          {/* Orb top-right */}
          <div
            className="absolute -top-8 -right-8 w-36 h-36 rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, ${item.accentColor}25, transparent 65%)` }}
          />
          {/* Orb bottom-left */}
          <div
            className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, ${item.gradientTo}18, transparent 65%)` }}
          />

          <div className="relative flex flex-col h-full pt-1">
            {/* Headline — exact client copy */}
            <p
              className="text-sm leading-relaxed mb-2 font-semibold"
              style={{ color: item.accentText }}
            >
              {item.backHeadline}
            </p>

            {/* Benefits list — exact client copy */}
            <ul className="space-y-2.5 flex-1">
              {item.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: `linear-gradient(135deg, ${item.gradientFrom}28, ${item.gradientTo}28)`,
                      border: `1.5px solid ${item.accentColor}55`,
                    }}
                  >
                    <CheckCircle2Icon style={{ width: 11, height: 11, color: item.accentColor }} />
                  </div>
                  <span className="text-sm leading-snug text-slate-700 font-medium">{b}</span>
                </li>
              ))}
            </ul>

            {/* Angela badge — patients only */}
            {item.angela && (
              <div
                className="mt-4 flex items-center gap-2 px-3 py-2.5 rounded-xl"
                style={{
                  background: `${MAGENTA}10`,
                  border: `1.5px solid ${MAGENTA}38`,
                }}
              >
                <SparklesIcon style={{ width: 13, height: 13, color: MAGENTA, flexShrink: 0 }} />
                <span className="text-xs text-slate-600">
                  Powered by{' '}
                  <span className="font-bold" style={{ color: MAGENTA }}>Angela</span>
                  {' '}— Pillaxia's AI companion
                </span>
              </div>
            )}
          </div>
        </div>

      </motion.div>
    </div>
  );
}

export function SolutionSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://pillaxia.com/images/bg-3.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute top-0 left-0 right-0 neon-line" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-10">
        <SectionHeading
          eyebrow="THE SOLUTION"
          title="Pillaxia Is The Missing Care Layer"
          subtitle="Pillaxia provides a secure, interoperable care layer that connects:"
          dark={false}
        />

        <p className="text-center text-slate-400 text-sm mb-10 -mt-3">
          Hover over each card to explore the benefits
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {connections.map((item, i) => (
            <AnimatedSection key={item.id} direction="up" delay={0.08 * (i + 1)}>
              <FlipCard item={item} />
            </AnimatedSection>
          ))}
        </div>

        {/* EHR callout */}
        <AnimatedSection delay={0.45} className="text-center">
          <div
            className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3.5 bg-white rounded-2xl"
            style={{
              border: '1.5px solid #e2e8f0',
              boxShadow: '0 2px 12px rgba(1,13,62,0.08)',
            }}
          >
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
              style={{
                background: 'linear-gradient(135deg, #3b9eff, #2dd4bf)',
                boxShadow: '0 3px 10px rgba(59,158,255,0.35)',
              }}
            >
              <ZapIcon style={{ width: 14, height: 14, color: '#fff' }} />
            </div>
            <span className="text-[#010d3e] font-bold text-sm">
              Enhances existing EHRs &amp; workflows
            </span>
            <span className="hidden sm:block w-px h-4 bg-slate-200" />
            <span className="text-slate-400 text-sm">Interoperable · Secure · Non-disruptive</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}