import React from 'react';
import {
  StethoscopeIcon,
  HeartPulseIcon,
  UsersIcon,
  PillIcon } from
'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeading } from '../ui/SectionHeading';
const connections = [
{
  icon: <StethoscopeIcon className="w-7 h-7 text-brand-700" />,
  title: 'Clinicians',
  desc: 'with real-world patient adherence and risk signals'
},
{
  icon: <HeartPulseIcon className="w-7 h-7 text-accent-500" />,
  title: 'Patients',
  desc: 'with clarity, guidance, and support'
},
{
  icon: <UsersIcon className="w-7 h-7 text-brand-700" />,
  title: 'Families & caregivers',
  desc: 'with structured involvement'
},
{
  icon: <PillIcon className="w-7 h-7 text-accent-500" />,
  title: 'Pharmacies & care teams',
  desc: 'with continuity and coordination'
}];

export function SolutionSection() {
  return (
    <section className="py-24 bg-brand-50 relative overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-[50px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff">
          </path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-10">
        <SectionHeading
          eyebrow="THE SOLUTION"
          title="Pillaxia Is The Missing Care Layer"
          subtitle="Pillaxia provides a secure, interoperable care layer that connects:" 
        />
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {connections.map((item, i) =>
          <AnimatedSection key={i} direction="up" delay={0.1 * (i + 1)}>
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white shadow-sm h-full">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-lg">{item.desc}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>

        <AnimatedSection delay={0.5} className="text-center">
          <p className="inline-block px-6 py-3 bg-white rounded-full text-brand-700 font-semibold shadow-sm border border-brand-100">
            All without replacing existing EHRs or workflows.
          </p>
        </AnimatedSection>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[50px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff">
          </path>
        </svg>
      </div>
    </section>);

}