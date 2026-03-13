import React from 'react';
import {
  PlayCircleIcon,
  HeartIcon,
  ZapIcon,
  UsersIcon,
  GlobeIcon,
  SparklesIcon } from
'lucide-react';
import { AnimatedSection, AnimatedItem } from '../components/ui/AnimatedSection';
import { SectionHeading } from '../components/ui/SectionHeading';
const COMMUNITY_IMG_1 =
'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80';
const COMMUNITY_IMG_2 =
'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80';
export function AboutPage() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero / Our Story */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-accent-500 uppercase tracking-widest text-sm font-bold mb-4">
            OUR STORY
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
            Why Pillaxia Exists
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-10">
            Pillaxia was founded after firsthand experience of how isolating,
            fragmented, and overwhelming chronic illness can be—both as a
            patient and as a caregiver.
          </p>

          <div className="bg-brand-50 border border-brand-100 p-8 md:p-12 rounded-3xl mb-10">
            <p className="text-sm font-bold text-brand-700 uppercase tracking-widest mb-4">
              The Insight
            </p>
            <p className="text-2xl md:text-3xl font-bold text-brand-900 leading-tight">
              "Healthcare doesn't end at the clinic door—but support often
              does."
            </p>
          </div>

          <p className="text-xl text-slate-600 leading-relaxed">
            Pillaxia exists to close that gap—by combining clinical rigour,
            human empathy, and responsible technology.
          </p>
        </AnimatedSection>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-brand-900 text-white relative overflow-hidden mb-24">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(37,175,252,0.8) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(37,175,252,0.6) 0%, transparent 50%)'
          }}>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <AnimatedSection direction="right">
              <h2 className="text-accent-400 uppercase tracking-widest text-sm font-bold mb-4">
                OUR VISION
              </h2>
              <p className="text-2xl md:text-3xl font-bold leading-relaxed">
                To build a global ecosystem of connected care where people with
                chronic conditions feel empowered, supported and understood,
                turning every medication moment into an opportunity for better
                health and human connection.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <h2 className="text-accent-400 uppercase tracking-widest text-sm font-bold mb-4">
                OUR MISSION
              </h2>
              <p className="text-xl leading-relaxed text-white/90">
                To enhance global health standards by creating a sustainable
                ecosystem of care and support, making advanced and intuitive
                medication management accessible to everyone, and transforming
                the journey of chronic illness management into a supportive
                experience that reduces feelings of isolation.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 md:px-6 mb-32">
        <SectionHeading title="Our Core Values" />
        <AnimatedSection
          stagger
          className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          
          {[
          {
            icon: <HeartIcon className="w-6 h-6 text-accent-500" />,
            title: 'Empathy'
          },
          {
            icon: <ZapIcon className="w-6 h-6 text-brand-700" />,
            title: 'Empowerment'
          },
          {
            icon: <UsersIcon className="w-6 h-6 text-accent-500" />,
            title: 'Collaboration'
          },
          {
            icon: <GlobeIcon className="w-6 h-6 text-brand-700" />,
            title: 'Inclusivity'
          },
          {
            icon: <SparklesIcon className="w-6 h-6 text-accent-500" />,
            title: 'Human-Centred Innovation'
          }].
          map((val, i) =>
          <AnimatedItem key={i}>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center h-full flex flex-col items-center justify-center">
                <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-100">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {val.title}
                </h3>
              </div>
            </AnimatedItem>
          )}
        </AnimatedSection>
      </section>

      {/* Promo Video Placeholder */}
      <section className="container mx-auto px-4 md:px-6 mb-32">
        <AnimatedSection className="max-w-5xl mx-auto">
          <div className="relative aspect-video bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 group flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-900 to-brand-700 opacity-90"></div>
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)'
              }}>
            </div>

            <div className="relative z-10 text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
                <PlayCircleIcon className="w-10 h-10 text-white ml-1 opacity-50" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Pillaxia Promo Video
              </h3>
              <p className="text-white/60 font-medium tracking-widest uppercase text-sm">
                Coming Soon
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* PillaxiaCare & Apex-Pitch */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="PILLAXIACARE"
            title="Our Commitment Beyond Technology" />
          

          <div className="max-w-6xl mx-auto space-y-24">
            {/* Block 1 */}
            <AnimatedSection className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  PillaxiaCare is our community initiative dedicated to
                  supporting patients, caregivers, and healthcare professionals
                  through education, workshops, and outreach programmes. Rooted
                  in empathy and lived experience, PillaxiaCare extends beyond
                  digital tools to create safe spaces for dialogue, learning,
                  and practical support.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  In collaboration with the Apex Foundation in Nigeria, we are
                  expanding our philanthropic efforts to support mothers,
                  children, and underserved communities through health
                  education, digital access, and resource support. Together, we
                  are building more than a platform — we are building a movement
                  toward more compassionate, inclusive, and community-driven
                  healthcare systems.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={COMMUNITY_IMG_1}
                  alt="Community health support"
                  className="rounded-3xl shadow-lg w-full object-cover aspect-[4/3]" />
                
              </div>
            </AnimatedSection>

            {/* Block 2 */}
            <AnimatedSection className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={COMMUNITY_IMG_2}
                  alt="Medical partnership"
                  className="rounded-3xl shadow-lg w-full object-cover aspect-[4/3]" />
                
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-brand-900 mb-4">
                  Apex-Pitch Partnership
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Pillaxia is proud to partner with Apex-Pitch Medical, one of
                  Nigeria's leading distributors of medical devices and
                  healthcare solutions. This collaboration brings together
                  Pillaxia's digital innovation with Apex-Pitch's deep-rooted
                  presence across hospitals and healthcare facilities in
                  Nigeria.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  United by a shared mission to humanise healthcare and improve
                  outcomes for patients living with chronic conditions, we are
                  working to bridge gaps in care delivery through technology,
                  education, and community engagement. Through the integration
                  of PillaxiaRx within Apex's hospital network, and the joint
                  efforts of our respective foundations, we aim to strengthen
                  care coordination, empower clinicians, and improve medication
                  adherence for patients who need it most.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>);

}