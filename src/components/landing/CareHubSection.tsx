import React, { useEffect, useState, useRef } from 'react';
import {
  UsersIcon,
  EyeIcon,
  HeartIcon,
  ArrowRightIcon,
  ShieldCheckIcon } from
'lucide-react';
const BRAND = '#010d3e';
const ACCENT = '#2dd4bf';
const MAGENTA = '#ec4899';
const cards = [
{
  icon: UsersIcon,
  title: 'Families',
  headline: 'Structured involvement & visibility',
  desc: 'Clear permission boundaries keep loved ones informed while respecting clinical boundaries.',
  stat: '3×',
  statLabel: 'better engagement'
},
{
  icon: EyeIcon,
  title: 'Clinicians',
  headline: 'Connected care and coordination',
  desc: 'Streamlined monitoring, reduced readmissions and valuable data insights to inform healthcare planning.',
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
      className="relative py-24 lg:py-32 overflow-hidden mesh-dark mesh-dark-teal">
      
      <div className="absolute top-0 left-0 right-0 neon-line" />

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
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-6 bg-[#2dd4bf]/10 border border-[#2dd4bf]/30 text-[#2dd4bf]">
            <ShieldCheckIcon className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase">
              CareHub
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.1] tracking-tight mb-6 text-white">
            Care Is a Team Sport.{' '}
            <span className="bg-gradient-to-r from-[#2dd4bf] to-[#3b9eff] bg-clip-text text-transparent">
              CareHub Makes It Visible
            </span>
          </h2>

          <p className="text-lg leading-relaxed text-slate-300">
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
                className="group relative rounded-3xl overflow-hidden transition-all duration-300 bg-white/5 border border-white/10 hover:border-[#2dd4bf] hover:shadow-[0_0_30px_rgba(45,212,191,0.3)] hover:-translate-y-1"
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
                
                {/* Left accent strip */}
                <div
                  className="absolute top-0 left-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to bottom, ${ACCENT}, #3b9eff)`
                  }} />
                

                <div className="p-8 flex flex-col h-full">
                  {/* Icon + title row */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-[#2dd4bf]/15 border border-[#2dd4bf]/30 text-[#2dd4bf]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold tracking-widest uppercase text-[#2dd4bf]">
                      {card.title}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {card.headline}
                  </h3>

                  {/* Body */}
                  <p className="text-sm leading-relaxed mb-8 flex-1 text-slate-400">
                    {card.desc}
                  </p>

                  {/* Stat badge */}
                  <div className="flex items-end gap-2 pt-5 border-t border-white/10">
                    <span className="text-3xl font-extrabold leading-none bg-gradient-to-r from-[#2dd4bf] to-[#3b9eff] bg-clip-text text-transparent">
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
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-md"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.6s ease 0.55s, transform 0.6s ease 0.55s'
          }}>
          
          {/* Gradient left strip */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2dd4bf] to-[#3b9eff]" />

          <div className="px-8 py-8 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-xl md:text-2xl font-bold text-center sm:text-left leading-snug text-white">
              This is how healthcare becomes{' '}
              <span className="bg-gradient-to-r from-[#2dd4bf] to-[#3b9eff] bg-clip-text text-transparent">
                connected
              </span>
              , not chaotic.
            </p>

            <button className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white whitespace-nowrap transition-all duration-200 shrink-0 bg-gradient-to-r from-[#2dd4bf] to-[#3b9eff] hover:shadow-[0_0_20px_rgba(45,212,191,0.4)]">
              Explore CareHub
              <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>);

}