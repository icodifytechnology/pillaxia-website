import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import {
  AlertCircleIcon
} from
  'lucide-react';
interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}
function Pill({ children }: { children: React.ReactNode; }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase"
      style={{
        background: 'rgba(14,165,233,0.1)',
        color: 'rgb(14,165,233)',
        border: '1px solid rgba(14,165,233,0.25)'
      }}>

      {children}
    </span>);

}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className = ''
}: SectionHeadingProps) {
  return (
    <AnimatedSection
      className={`mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}>

      {eyebrow &&
        <div style={{
          background: 'rgba(14,165,233,0.1)',
          color: 'rgb(14,165,233)',
          border: '1px solid rgba(14,165,233,0.25)'
        }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 bg-brand-50 border border-brand-100">
          <AlertCircleIcon className="w-3.5 h-3.5" />
          <span className="text-[11px] font-bold tracking-[0.22em] uppercase">
            {eyebrow}
          </span>
        </div>
      }

      <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-slate-900 mb-6">
        {title}
      </h2>
      {subtitle &&
        <p
          className={`text-lg text-slate-600 ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>

          {subtitle}
        </p>
      }
    </AnimatedSection>);

}