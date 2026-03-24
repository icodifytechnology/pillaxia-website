import React from 'react';
import {
  ShieldCheckIcon,
  StethoscopeIcon,
  Share2Icon,
  SparklesIcon,
  GlobeIcon,
  AlertCircleIcon } from
'lucide-react';
import { AnimatedSection, AnimatedItem } from '../ui/AnimatedSection';
const values = [
{
  title: 'Security & Privacy First',
  desc: 'GDPR-aligned, consent-driven architecture with role-based access controls.',
  icon: <ShieldCheckIcon className="w-8 h-8 text-[#3b9eff]" />
},
{
  title: 'Clinician-Led Design',
  desc: 'Built alongside doctors, pharmacists, nurses, and care providers.',
  icon: <StethoscopeIcon className="w-8 h-8 text-[#ec4899]" />
},
{
  title: 'Interoperable by Design',
  desc: 'API-first architecture to integrate with existing systems.',
  icon: <Share2Icon className="w-8 h-8 text-[#2dd4bf]" />
},
{
  title: 'Human-Centred AI',
  desc: 'AI that supports, not replaces, clinical judgement.',
  icon: <SparklesIcon className="w-8 h-8 text-[#3b9eff]" />
},
{
  title: 'Global-Ready',
  desc: 'Designed for use across public and private healthcare systems, from Ireland to Nigeria to the Middle East.',
  icon: <GlobeIcon className="w-8 h-8 text-[#ec4899]" />
}];

export function WhyPillaxia() {
  return (
    <section className="py-24 relative overflow-hidden mesh-dark">
      <div className="absolute top-0 left-0 right-0 neon-line z-20" />

      {/* Dot Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
          'radial-gradient(circle, #3b9eff 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
      

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 bg-[#3b9eff]/10 border border-[#3b9eff]/30">
            <AlertCircleIcon className="w-3.5 h-3.5 text-[#3b9eff]" />
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#3b9eff]">
              WHY PILLAXIA
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-white mb-6">
            Built for Trust. Designed for Reality.
          </h2>
        </AnimatedSection>

        <AnimatedSection
          stagger
          className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          
          {values.map((item, i) =>
          <AnimatedItem
            key={i}
            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
            
              <div className="bg-white/[0.05] border border-white/[0.08] p-8 rounded-3xl h-full flex flex-col relative overflow-hidden group transition-all duration-300 hover:bg-white/[0.1] neon-card">
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-50 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-[#3b9eff] to-transparent" />
                <div className="mb-6 w-14 h-14 bg-white/10 rounded-2xl shadow-sm flex items-center justify-center border border-white/15 transition-colors group-hover:bg-white/20">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedItem>
          )}
        </AnimatedSection>
      </div>
    </section>);

}