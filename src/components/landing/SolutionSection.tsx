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
  icon: <StethoscopeIcon className="w-7 h-7 text-white" />,
  title: 'Clinicians',
  desc: 'Real-world patient adherence and risk signals',
  bg: 'bg-gradient-to-br from-[#3b9eff] to-[#ec4899]'
},
{
  icon: <HeartPulseIcon className="w-7 h-7 text-white" />,
  title: 'Patients',
  desc: 'Clarity, guidance, and support',
  bg: 'bg-gradient-to-br from-[#ec4899] to-[#2dd4bf]'
},
{
  icon: <UsersIcon className="w-7 h-7 text-white" />,
  title: 'Families & caregivers',
  desc: 'Structured involvement & visibility',
  bg: 'bg-gradient-to-br from-[#2dd4bf] to-[#3b9eff]'
},
{
  icon: <PillIcon className="w-7 h-7 text-white" />,
  title: 'Pharmacies & care teams',
  desc: 'Continuity and coordination',
  bg: 'bg-gradient-to-br from-[#3b9eff] to-[#2dd4bf]'
}];

export function SolutionSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://pillaxia.com/images/bg-3.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      
      <div className="absolute top-0 left-0 right-0 neon-line" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-10">
        <SectionHeading
          eyebrow="THE SOLUTION"
          title="Pillaxia Is The Missing Care Layer"
          subtitle="Pillaxia provides a secure, interoperable care layer that connects:"
          dark={false} />
        

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {connections.map((item, i) =>
          <AnimatedSection key={i} direction="up" delay={0.1 * (i + 1)}>
              <div className="bg-white rounded-3xl p-8 neon-card h-full">
                <div className="flex flex-col items-center text-center gap-4">
                  <div
                  className={`w-16 h-16 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#010d3e] mb-2">
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
          <p className="inline-block px-6 py-3 bg-white rounded-full text-[#3b9eff] font-semibold shadow-md border border-[#3b9eff]/30">
            Enhancing existing EHRs and workflows.
          </p>
        </AnimatedSection>
      </div>
    </section>);

}