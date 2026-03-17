import React, { useEffect, useState, useRef } from 'react';
import {
  UsersIcon,
  EyeIcon,
  HeartIcon,
  ArrowRightIcon,
  ShieldCheckIcon
} from
  'lucide-react';
const BRAND = '#040f49';
const ACCENT = '#25affc';
const cards = [
  {
    icon: UsersIcon,
    title: 'Families',
    headline: 'Support without overstepping',
    desc: 'Clear permission boundaries keep loved ones informed while respecting clinical boundaries.',
    stat: '3×',
    statLabel: 'better engagement'
  },
  {
    icon: EyeIcon,
    title: 'Clinicians',
    headline: "See who's involved in care",
    desc: "Full visibility into the patient's support network so no one is left out of the loop.",
    stat: '100%',
    statLabel: 'care transparency'
  },
  {
    icon: HeartIcon,
    title: 'Patients',
    headline: 'Feel held, not watched',
    desc: 'Auditability and consent built into every interaction — always in control of their own care.',
    stat: '98%',
    statLabel: 'patient trust score'
  }];

export function CareHubSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      {
        threshold: 0.12
      }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 lg:py-32 overflow-hidden bg-brand-50">

      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
        style={{
          background: `linear-gradient(to right, transparent 5%, ${ACCENT}80 40%, ${ACCENT} 50%, ${ACCENT}80 60%, transparent 95%)`
        }} />


      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* ── Heading block ── */}
        <div
          className="text-center max-w-3xl mx-auto mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.65s ease, transform 0.65s ease'
          }}>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-6 bg-white border border-brand-100 shadow-sm">
            <ShieldCheckIcon className="w-3.5 h-3.5 text-brand-700" />
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-brand-700">
              CareHub
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.1] tracking-tight mb-6 text-brand-900">
            Care Is a Team Sport.{' '}
            <span style={{
              background: 'linear-gradient(90deg, rgb(14,165,233), #1A3BAE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>CareHub Makes It Visible</span>
          </h2>

          <p className="text-lg leading-relaxed text-slate-600">
            CareHub enables shared care coordination between patients,
            clinicians, and trusted supporters — with clear permissions and
            auditability built in at every step.
          </p>
        </div>

        {/* ── Three cards ── */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden transition-all duration-300 bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(28px)',
                  transition: `opacity 0.55s ease ${0.15 + i * 0.12}s, transform 0.55s ease ${0.15 + i * 0.12}s, box-shadow 0.3s ease, border-color 0.3s ease`
                }}>

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{
                    background: `linear-gradient(to right, transparent, ${ACCENT}, transparent)`
                  }} />


                <div className="p-8 flex flex-col h-full">
                  {/* Icon + title row */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-brand-50 border border-brand-100 text-accent-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold tracking-widest uppercase text-brand-700">
                      {card.title}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-xl font-bold text-brand-900 mb-3 leading-snug">
                    {card.headline}
                  </h3>

                  {/* Body */}
                  <p className="text-sm leading-relaxed mb-8 flex-1 text-slate-600">
                    {card.desc}
                  </p>

                  {/* Stat badge */}
                  <div className="flex items-end gap-2 pt-5 border-t border-slate-100">
                    <span className="text-3xl font-extrabold leading-none text-brand-700">
                      {card.stat}
                    </span>
                    <span className="text-xs font-medium mb-0.5 text-slate-500">
                      {card.statLabel}
                    </span>
                  </div>
                </div>
              </div>);

          })}
        </div>

        {/* ── Bottom CTA strip ── */}
        <div
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden bg-white border border-brand-100 shadow-md"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.6s ease 0.55s, transform 0.6s ease 0.55s'
          }}>

          {/* Gradient left strip */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-brand-500 to-accent-500" />

          <div className="px-8 py-8 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-xl md:text-2xl font-bold text-center sm:text-left leading-snug text-brand-900">
              This is how healthcare becomes{' '}
              <span style={{
                background: 'linear-gradient(90deg, rgb(14,165,233), #1A3BAE)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>connected</span>, not chaotic.
            </p>

            <button className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white whitespace-nowrap transition-all duration-200 shrink-0 bg-gradient-to-r from-brand-700 to-brand-600 hover:shadow-lg hover:shadow-brand-500/30">
              Explore CareHub
              <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>);

}