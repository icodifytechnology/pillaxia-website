import React from 'react';
import {
  ShieldCheckIcon,
  StethoscopeIcon,
  Share2Icon,
  SparklesIcon,
  GlobeIcon } from
'lucide-react';
import { AnimatedSection, AnimatedItem } from '../ui/AnimatedSection';
import { SectionHeading } from '../ui/SectionHeading';
const values = [
{
  title: 'Security & Privacy First',
  desc: 'GDPR-aligned, consent-driven architecture with role-based access controls.',
  icon: <ShieldCheckIcon className="w-8 h-8 text-brand-700" />
},
{
  title: 'Clinician-Led Design',
  desc: 'Built alongside doctors, pharmacists, nurses, and care providers.',
  icon: <StethoscopeIcon className="w-8 h-8 text-accent-500" />
},
{
  title: 'Interoperable by Design',
  desc: 'API-first architecture to integrate with existing systems.',
  icon: <Share2Icon className="w-8 h-8 text-brand-700" />
},
{
  title: 'Human-Centred AI',
  desc: 'AI that supports—not replaces—clinical judgement.',
  icon: <SparklesIcon className="w-8 h-8 text-accent-500" />
},
{
  title: 'Global-Ready',
  desc: 'Designed for use across public and private healthcare systems, from Ireland to Nigeria to the Middle East.',
  icon: <GlobeIcon className="w-8 h-8 text-brand-700" />
}];

export function WhyPillaxia() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="WHY PILLAXIA"
          title="Built for Trust. Designed for Reality." />
        

        <AnimatedSection
          stagger
          className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          
          {values.map((item, i) =>
          <AnimatedItem
            key={i}
            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
            
              <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl h-full flex flex-col">
                <div className="mb-6 w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-100">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedItem>
          )}
        </AnimatedSection>
      </div>
    </section>);

}