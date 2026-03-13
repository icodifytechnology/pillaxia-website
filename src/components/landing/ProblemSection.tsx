import React from 'react';
import { Stethoscope, HeartPulse, HandHeart, Building2 } from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '../ui/AnimatedSection';
import { SectionHeading } from '../ui/SectionHeading';

const challenges = [
  'Whether medications are taken correctly',
  'When follow-ups are missed',
  'How symptoms evolve at home',
  'Where caregivers are struggling',
  'When risk is quietly escalating',
];

const stakeholders = [
  { label: 'Clinicians', description: 'are left without feedback loops', icon: Stethoscope },
  { label: 'Patients', description: 'feel isolated between visits', icon: HeartPulse },
  { label: 'Caregivers', description: 'carry invisible load alone', icon: HandHeart },
  { label: 'Health systems', description: 'absorb preventable costs', icon: Building2 },
];

export function ProblemSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        <SectionHeading
          eyebrow="THE CHALLENGE"
          title="Chronic Care Is Still Built Around Moments, Not Lives"
          subtitle="For millions living with chronic or long-term conditions, care happens between visits — not during them. Yet healthcare systems still lack visibility into:"
        />

        <AnimatedSection stagger className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl border border-blue-100 px-6 py-10 md:px-12 md:py-12 overflow-hidden">

            {/* Challenge list */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {challenges.map((item, i) => (
                <AnimatedItem key={i}>
                  <div className="flex items-start gap-4 bg-white border-l-4 border-l-blue-400 border border-blue-100 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md hover:border-l-blue-500 hover:translate-x-1 transition-all duration-300 ease-out group">
                    <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300 ease-out">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <p className="text-[15px] text-slate-700 font-medium leading-snug">{item}</p>
                  </div>
                </AnimatedItem>
              ))}
              {challenges.length % 2 !== 0 && <div className="hidden sm:block" aria-hidden />}
            </div>

            {/* Stakeholder grid */}
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4">
              {stakeholders.map(({ label, description, icon: Icon }, i) => (
                <AnimatedItem key={i}>
                  <div className="group relative flex flex-col items-center text-center px-4 py-6 rounded-2xl border border-blue-100 bg-white overflow-hidden hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out">

                    {/* Top gradient bar */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />

                    {/* Glow behind icon */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-blue-400/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 ease-out" />

                    {/* Icon */}
                    <div className="relative w-12 h-12 rounded-xl bg-[rgb(238_244_255)] border border-blue-100 flex items-center justify-center mb-3 group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-out">
                      <Icon
                        className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors duration-300 ease-out"
                        strokeWidth={1.8}
                      />
                    </div>

                    <p className="text-[14px] font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300 ease-out">{label}</p>
                    <p className="text-[12px] text-slate-400 leading-snug">{description}</p>
                  </div>
                </AnimatedItem>
              ))}
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}