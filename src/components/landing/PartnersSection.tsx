import React from 'react';
import {
  Building2Icon,
  StethoscopeIcon,
  PillIcon,
  HomeIcon,
  LandmarkIcon,
  Building2,
  HeartPulse
} from
  'lucide-react';
import { AnimatedSection, AnimatedItem } from '../ui/AnimatedSection';
import { SectionHeading } from '../ui/SectionHeading';
const partners = [
  {
    name: 'Public & private hospitals',
    icon: <Building2Icon className="w-6 h-6" />
  },
  {
    name: 'Clinics and specialist practices',
    icon: <StethoscopeIcon className="w-6 h-6" />
  },
  {
    name: 'Pharmacies',
    icon: <PillIcon className="w-6 h-6" />
  },
  {
    name: 'Care homes and community providers',
    icon: <HomeIcon className="w-6 h-6" />
  },
  {
    name: 'Government and health agencies',
    icon: <LandmarkIcon className="w-6 h-6" />
  }];

export function PartnersSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="WHO WE WORK WITH"
          title="Partners Across the Care Ecosystem"
          subtitle="We collaborate with:" />


        <AnimatedSection
          stagger
          className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto mb-16">

          {partners.map((partner, i) =>
            <AnimatedItem key={i}>
              <div className="flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 text-slate-700 font-medium">
                <div className="text-accent-500">{partner.icon}</div>
                {partner.name}
              </div>
            </AnimatedItem>
          )}
        </AnimatedSection>

        <AnimatedSection className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl border border-blue-100 bg-white overflow-hidden px-8 py-10 md:px-12 md:py-12">

            {/* Top gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400" />

            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

            <div className="relative flex flex-col items-center text-center gap-5">

              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgb(238_244_255)] border border-blue-100">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[11px] font-semibold tracking-widest uppercase text-blue-500">
                  Our Model is B2B2C
                </span>
              </div>

              {/* Heading */}
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed max-w-xl">
                Healthcare organisations license{' '}
                <span className="font-semibold text-slate-900">Pillaxia</span>{' '}
                to support their patients — while patients and families experience{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 font-semibold text-blue-600">tangible day-to-day benefit.</span>
                  <span className="absolute bottom-0.5 left-0 right-0 h-[6px] bg-blue-100 rounded-full -z-0" />
                </span>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>);

}