import React, { useEffect, useState, useRef } from 'react';
import {
  StethoscopeIcon,
  HeartPulseIcon,
  HandHeartIcon,
  Building2Icon,
  AlertCircleIcon
} from
  'lucide-react';
const BRAND = '#040f49';
const ACCENT = '#25affc';
const challenges = [
  'Whether medications are taken correctly',
  'When follow-ups are missed',
  'How symptoms evolve at home',
  'Where caregivers are struggling',
  'When risk is quietly escalating'];

const stakeholders = [
  {
    label: 'Clinicians',
    description: 'Left without feedback loops between visits',
    icon: StethoscopeIcon
  },
  {
    label: 'Patients',
    description: 'Feel isolated and unsupported between visits',
    icon: HeartPulseIcon
  },
  {
    label: 'Caregivers',
    description: 'Carry an invisible and unacknowledged burden',
    icon: HandHeartIcon
  },
  {
    label: 'Health systems',
    description: 'Absorb entirely preventable downstream costs',
    icon: Building2Icon
  }];

const stats = [
  {
    value: '40%',
    label: 'of readmissions preventable'
  },
  {
    value: '125M',
    label: 'adults with chronic conditions'
  },
  {
    value: '3×',
    label: 'higher cost when unmanaged'
  }];

function useInView(threshold = 0.1) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      {
        threshold
      }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible] as const;
}
export function ProblemSection() {
  const [ref, visible] = useInView();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden py-12 lg:py-24 bg-white">

      <style>{`
        @keyframes floatYLight {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes nodePopLight {
          0%   { transform: scale(0.5); opacity: 0; }
          70%  { transform: scale(1.12); }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* ── Heading ── */}
        <div
          className="text-center max-w-2xl mx-auto mb-20"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition:
              'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)'
          }}>

          <div style={{
            background: 'rgba(14,165,233,0.1)',
            color: 'rgb(14,165,233)',
            border: '1px solid rgba(14,165,233,0.25)'
          }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 bg-brand-50 border border-brand-100">
            <AlertCircleIcon className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase">
              The Challenge
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.08] tracking-tight mb-5 text-brand-900">
            Chronic Care Is Still Built Around{' '}
            <br className="hidden md:block" />
            <span style={{
              background: 'linear-gradient(90deg, rgb(14,165,233), #1A3BAE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Moments, Not Lives</span>
          </h2>

          <p className="text-base leading-relaxed text-slate-600">
            For millions living with chronic conditions, care happens between
            visits, not during them. Yet healthcare systems still lack
            visibility into what matters most.
          </p>
        </div>

        {/* ── Two column layout ── */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
          {/* ════ LEFT: Light panel — challenge timeline ════ */}
          <div
            className="relative rounded-3xl overflow-hidden bg-slate-50 border border-slate-200 shadow-lg"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(32px)',
              transition:
                'opacity 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s'
            }}>

            {/* Accent top border */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-500 to-accent-500" />

            <div className="relative z-10 p-8 md:p-10">
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-8 text-slate-500">
                What systems cannot see
              </p>

              {/* Timeline */}
              <div className="relative space-y-5">
                {/* Animated vertical line */}
                <div
                  className="absolute left-[20px] top-5 w-1 overflow-hidden rounded-full"
                  style={{
                    height: visible ? 'calc(100% - 20px)' : '0%',
                    transition: 'height 1.2s cubic-bezier(0.22,1,0.36,1) 0.5s',
                    background: `linear-gradient(to bottom, ${BRAND}, ${ACCENT})`
                  }} />


                {challenges.map((item, i) =>
                  <div
                    key={i}
                    className="flex items-center gap-5 relative z-10"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ?
                        'translateX(0)' :
                        'translateX(-20px)',
                      transition: `opacity 0.5s ease ${0.4 + i * 0.1}s, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${0.4 + i * 0.1}s`
                    }}>

                    {/* Animated node */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-sm font-black text-white shadow-md"
                      style={{
                        background: i === 0 ? BRAND : ACCENT,
                        animation: visible ?
                          `nodePopLight 0.4s ease ${0.35 + i * 0.1}s both` :
                          'none'
                      }}>

                      {String(i + 1).padStart(2, '0')}
                    </div>

                    {/* Row card */}
                    <div className="flex-1 px-5 py-4 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand-200 hover:-translate-y-0.5">
                      <p className="text-sm font-semibold leading-snug text-brand-900">
                        {item}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Pull quote */}
              <div
                className="mt-10 p-6 rounded-2xl bg-white border border-brand-100 shadow-sm"
                style={{
                  opacity: visible ? 1 : 0,
                  transition: 'opacity 0.6s ease 1s'
                }}>

                <p className="text-sm italic leading-relaxed text-slate-600 font-medium">
                  "The gap between visits is where outcomes are won or lost, yet
                  it remains a blind spot for most healthcare systems."
                </p>
              </div>
            </div>
          </div>

          {/* ════ RIGHT: Stakeholder cards + stats ════ */}
          <div className="flex flex-col gap-6">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-500">
              Who bears the cost
            </p>

            {/* 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {stakeholders.map(({ label, description, icon: Icon }, i) =>
                <div
                  key={i}
                  className="group relative rounded-2xl overflow-hidden cursor-default bg-white border border-slate-200 shadow-sm transition-all duration-300"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ?
                      'translateY(0) scale(1)' :
                      'translateY(20px) scale(0.97)',
                    transition: `opacity 0.55s cubic-bezier(0.22,1,0.36,1) ${0.3 + i * 0.1}s, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${0.3 + i * 0.1}s, box-shadow 0.3s ease, border-color 0.3s ease`,
                    animation: visible ?
                      `floatYLight ${6 + i}s ease-in-out infinite ${i * 0.8}s` :
                      'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 12px 24px rgba(4, 15, 73, 0.08)`;
                    e.currentTarget.style.borderColor = '#d4e4ff';
                    e.currentTarget.style.animation = 'none';
                    e.currentTarget.style.transform =
                      'translateY(-4px) scale(1.01)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 1px 2px 0 rgba(0, 0, 0, 0.05)`;
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.animation = `floatYLight ${6 + i}s ease-in-out infinite ${i * 0.8}s`;
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  }}>

                  {/* Top gradient bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="p-6 pt-7">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-brand-50 border border-brand-100 text-brand-700 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-brand-700 group-hover:text-white">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-[16px] font-extrabold mb-2 text-brand-900 group-hover:text-brand-700 transition-colors">
                      {label}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-slate-600">
                      {description}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Stats panel */}
            <div
              className="relative rounded-2xl overflow-hidden p-8 bg-brand-50 border border-brand-100 shadow-sm mt-2"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition:
                  'opacity 0.6s ease 0.65s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.65s'
              }}>

              <div className="relative z-10 grid grid-cols-3 gap-4">
                {stats.map((s, i) =>
                  <div
                    key={i}
                    className="flex flex-col items-center text-center"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? 'translateY(0)' : 'translateY(10px)',
                      transition: `opacity 0.5s ease ${0.8 + i * 0.12}s, transform 0.5s ease ${0.8 + i * 0.12}s`
                    }}>

                    <span className="text-2xl md:text-3xl font-extrabold leading-none mb-2 text-brand-700">
                      {s.value}
                    </span>
                    <span className="text-[11px] md:text-xs font-medium leading-tight text-slate-600">
                      {s.label}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}