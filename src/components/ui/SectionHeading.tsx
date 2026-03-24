import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { AlertCircleIcon } from 'lucide-react';
interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  dark?: boolean;
}
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className = '',
  dark = false
}: SectionHeadingProps) {
  return (
    <AnimatedSection
      className={`mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      
      {eyebrow &&
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 bg-[#3b9eff]/10 border border-[#3b9eff]/30 text-[#3b9eff]">
          <AlertCircleIcon className="w-3.5 h-3.5" />
          <span className="text-[11px] font-bold tracking-[0.22em] uppercase">
            {eyebrow}
          </span>
        </div>
      }

      <h2
        className={`text-3xl md:text-4xl lg:text-[2.6rem] font-bold mb-6 ${dark ? 'text-white' : 'text-[#010d3e]'}`}>
        
        {title}
      </h2>
      {subtitle &&
      <p
        className={`text-lg ${dark ? 'text-slate-300' : 'text-slate-600'} ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
        
          {subtitle}
        </p>
      }
    </AnimatedSection>);

}