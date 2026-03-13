import React from 'react';
import { AnimatedSection } from './AnimatedSection';
interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
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
      <span className="inline-block text-accent-500 uppercase tracking-widest text-sm font-semibold mb-3">
          {eyebrow}
        </span>
      }
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
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