'use client';

import React, { useEffect, useRef, createElement } from 'react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CheckCircle2Icon, ShieldCheckIcon, CalendarIcon } from 'lucide-react';
export function BookDemoPage() {
  const calendlyRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
    return () => {
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);
  return (
    <main className="pt-32 pb-20 mesh-dark min-h-screen relative">
      <div className="absolute top-0 left-0 right-0 neon-line" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Book a Demo"
          subtitle="See how Pillaxia can transform your healthcare delivery. Schedule a 30-minute walkthrough with our team."
          dark={true} />
        

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto items-start">
          {/* Calendly Embed */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            <div className="bg-white/5 neon-card overflow-hidden border border-white/10">
              {/* Header */}
              <div className="px-8 py-5 border-b border-[#3b9eff]/20 flex items-center gap-3 bg-[#010d3e]">
                <div className="w-10 h-10 rounded-xl bg-[#3b9eff] flex items-center justify-center">
                  <CalendarIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    Schedule Your Demo
                  </h3>
                  <p className="text-xs text-slate-400">
                    Pick a time that works for you
                  </p>
                </div>
              </div>

              {/* Calendly Widget */}
              <div
                ref={calendlyRef}
                className="calendly-inline-widget bg-white"
                data-url="https://calendly.com/connect-pillaxia/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=010d3e&primary_color=3b9eff"
                style={{
                  minWidth: '320px',
                  height: '680px'
                }} />
              
            </div>
          </AnimatedSection>

          {/* Right sidebar */}
          <AnimatedSection direction="left" className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                What to expect
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2Icon className="w-6 h-6 text-[#2dd4bf] flex-shrink-0" />
                  <span className="text-slate-300">
                    Personalized walkthrough tailored to your organization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2Icon className="w-6 h-6 text-[#2dd4bf] flex-shrink-0" />
                  <span className="text-slate-300">
                    See real patient workflows and clinician dashboards
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2Icon className="w-6 h-6 text-[#2dd4bf] flex-shrink-0" />
                  <span className="text-slate-300">
                    Q&A with our healthcare technology experts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2Icon className="w-6 h-6 text-[#2dd4bf] flex-shrink-0" />
                  <span className="text-slate-300">No commitment required</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#3b9eff]/5 p-6 rounded-2xl border border-[#3b9eff]/20">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheckIcon className="w-6 h-6 text-[#3b9eff]" />
                <h4 className="font-bold text-[#3b9eff]">
                  Enterprise Grade Security
                </h4>
              </div>
              <p className="text-sm text-slate-300">
                Pillaxia is fully compliant with healthcare data regulations
                across our operating regions, ensuring patient data is always
                protected.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md neon-border">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80"
                alt="Healthcare professional using digital platform"
                className="w-full h-48 object-cover" />
              
            </div>

            {/* Partner code note */}
            <div className="bg-[#ec4899]/5 p-6 rounded-2xl border border-[#ec4899]/20">
              <h4 className="font-bold text-[#ec4899] mb-2 text-sm">
                🏥 Partner Hospital Access
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                If you've received a special access code from your hospital or
                clinic, your patients can access Pillaxia Premium at no cost.
                Ask us about our partner programme during the demo.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </main>);

}