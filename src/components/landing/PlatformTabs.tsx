import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2Icon,
  StethoscopeIcon,
  SmartphoneIcon,
  SparklesIcon,
  UsersIcon,
  ShieldCheckIcon,
  EyeIcon,
  HeartHandshakeIcon,
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

const careHubFeatures = [
  { icon: HeartHandshakeIcon, title: 'Families support without overstepping', description: 'Clear permission boundaries keep everyone in their lane' },
  { icon: EyeIcon, title: 'Clinicians see who\'s involved in care', description: 'Full visibility into the patient\'s support network' },
  { icon: ShieldCheckIcon, title: 'Patients feel held, not watched', description: 'Auditability and consent built into every interaction' },
];

export function PlatformTabs() {
  const [activeTab, setActiveTab] = useState<'rx' | 'app' | 'carehub'>('rx');

  const tabs = [
    { id: 'rx', label: 'PillaxiaRx', icon: StethoscopeIcon },
    { id: 'app', label: 'Pillaxia App', icon: SmartphoneIcon },
    { id: 'carehub', label: 'CareHub', icon: UsersIcon },
  ] as const;

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="THE PLATFORM"
          title="One Platform. Two Purpose-Built Experiences."
        />

        <div className="max-w-5xl mx-auto">
          {/* Tab Controls */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-12">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`relative px-7 py-4 rounded-2xl text-base font-bold transition-colors ${
                  activeTab === id
                    ? 'text-brand-900'
                    : 'text-slate-500 hover:text-slate-700 bg-white border border-slate-200'
                }`}
              >
                {activeTab === id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-2xl shadow-md border border-blue-100"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className="w-5 h-5" /> {label}
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm min-h-[500px]">
            <AnimatePresence mode="wait">

              {/* PillaxiaRx */}
              {activeTab === 'rx' && (
                <motion.div
                  key="rx"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-12 items-center"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-brand-900 mb-4">
                      For Clinicians, Hospitals & Care Organisations
                    </h3>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      A clinician-facing web platform designed to support safer,
                      smarter chronic care. PillaxiaRx gives care teams
                      visibility between visits, enabling proactive intervention
                      rather than reactive care.
                    </p>
                    <ul className="space-y-4 mb-8">
                      {[
                        'Medication oversight and interaction awareness',
                        'Missed dose and adherence risk alerts',
                        'Follow-up tracking and discharge care plans',
                        'Patient history and documentation audit trails',
                        'Secure patient-clinician communication',
                        'Role-based access for multidisciplinary teams',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2Icon className="w-5 h-5 text-brand-700 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="p-4 bg-brand-50 rounded-xl mb-8">
                      <p className="text-sm text-brand-900 font-medium">
                        Designed to integrate, not disrupt—PillaxiaRx
                        complements existing systems while closing critical care gaps.
                      </p>
                    </div>
                    <Button as={Link} to="/book-demo" className="w-full sm:w-auto">
                      See PillaxiaRx for Clinicians
                    </Button>
                  </div>
                  <div className="bg-slate-100 rounded-2xl aspect-square flex items-center justify-center border border-slate-200 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                      alt="Clinician dashboard"
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>
                </motion.div>
              )}

              {/* Pillaxia App */}
              {activeTab === 'app' && (
                <motion.div
                  key="app"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-12 items-center"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-brand-900 mb-4">
                      For Patients & Families
                    </h3>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      A supportive, human-centred companion for everyday health.
                    </p>
                    <ul className="space-y-4 mb-8">
                      {[
                        'Understand and follow medication routines',
                        'Track symptoms and side effects',
                        'Stay connected to their care team',
                        'Involve trusted family or caregivers',
                        'Feel supported, not monitored',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2Icon className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="p-5 bg-gradient-to-r from-accent-50 to-white border border-accent-100 rounded-2xl mb-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-10">
                        <SparklesIcon className="w-16 h-16 text-accent-500" />
                      </div>
                      <div className="relative z-10">
                        <h4 className="font-bold text-brand-900 flex items-center gap-2 mb-2">
                          <SparklesIcon className="w-4 h-4 text-accent-500" /> Meet Angela
                        </h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          At the heart of the experience is Angela, Pillaxia's
                          AI-powered companion—designed to reinforce clinical
                          guidance with empathy, clarity, and consistency.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 font-medium mb-8 italic">
                      This is not "just another reminder app." It's care that
                      continues after the appointment ends.
                    </p>
                    <Button
                      as="a"
                      href="#"
                      variant="outline"
                      className="w-full sm:w-auto border-accent-500 text-accent-600 hover:bg-accent-50"
                    >
                      Explore the Patient Experience
                    </Button>
                  </div>
                  <div className="bg-slate-100 rounded-2xl aspect-square flex items-center justify-center border border-slate-200 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                      alt="Patient mobile app"
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>
                </motion.div>
              )}

              {/* CareHub */}
              {activeTab === 'carehub' && (
                <motion.div
                  key="carehub"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-12 items-center"
                >
                  <div>
                    {/* Eyebrow badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgb(238_244_255)] border border-blue-100 mb-5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                      <span className="text-[11px] font-semibold tracking-widest uppercase text-blue-500">
                        Shared Care Coordination
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-brand-900 mb-4">
                      Care Is a Team Sport — CareHub Makes It Visible
                    </h3>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      CareHub enables shared care coordination between patients,
                      clinicians, and trusted supporters. With clear permissions
                      and auditability, everyone stays informed without overstepping.
                    </p>

                    {/* Feature cards */}
                    <div className="space-y-3 mb-8">
                      {careHubFeatures.map(({ icon: Icon, title, description }, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-4 bg-white border-l-4 border-l-blue-400 border border-blue-100 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md hover:border-l-blue-500 hover:translate-x-1 transition-all duration-300 ease-out group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                            <Icon className="w-4 h-4 text-white" strokeWidth={1.8} />
                          </div>
                          <div>
                            <p className="text-[14px] font-semibold text-slate-900 mb-0.5">{title}</p>
                            <p className="text-[12px] text-slate-500 leading-snug">{description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Closing statement */}
                    <div className="relative rounded-2xl border border-blue-100 bg-[rgb(238_244_255)] px-5 py-4 mb-8 overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400" />
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">
                        This is how healthcare becomes{' '}
                        <span className="font-bold text-blue-600">connected</span>, not chaotic.
                      </p>
                    </div>

                    <Button as={Link} to="/book-demo" className="w-full sm:w-auto">
                      Explore CareHub
                    </Button>
                  </div>

                  {/* Right visual */}
                  <div className="flex flex-col gap-4">
                    <div className="bg-[rgb(238_244_255)] rounded-2xl border border-blue-100 p-6 flex flex-col gap-4">
                      {[
                        { role: 'Patient', initial: 'P', color: 'bg-blue-500', status: 'Active · 3 medications tracked' },
                        { role: 'Clinician', initial: 'C', color: 'bg-indigo-500', status: 'Last reviewed 2 days ago' },
                        { role: 'Family Member', initial: 'F', color: 'bg-blue-300', status: 'View-only access · notified' },
                      ].map(({ role, initial, color, status }, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-blue-100 shadow-sm">
                          <div className={`w-9 h-9 rounded-full ${color} flex items-center justify-center flex-shrink-0`}>
                            <span className="text-white text-sm font-bold">{initial}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[13px] font-semibold text-slate-900">{role}</p>
                            <p className="text-[11px] text-slate-400 truncate">{status}</p>
                          </div>
                          <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                        </div>
                      ))}

                      <div className="flex items-center gap-2 pt-1">
                        <div className="flex-1 h-px bg-blue-100" />
                        <span className="text-[10px] uppercase tracking-widest text-blue-300 font-semibold">All connected · audited</span>
                        <div className="flex-1 h-px bg-blue-100" />
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-1 bg-white rounded-xl border border-blue-100 px-4 py-3 text-center shadow-sm">
                        <p className="text-xl font-bold text-blue-600">100%</p>
                        <p className="text-[11px] text-slate-400">Permission-based</p>
                      </div>
                      <div className="flex-1 bg-white rounded-xl border border-blue-100 px-4 py-3 text-center shadow-sm">
                        <p className="text-xl font-bold text-blue-600">Real-time</p>
                        <p className="text-[11px] text-slate-400">Care visibility</p>
                      </div>
                      <div className="flex-1 bg-white rounded-xl border border-blue-100 px-4 py-3 text-center shadow-sm">
                        <p className="text-xl font-bold text-blue-600">Audited</p>
                        <p className="text-[11px] text-slate-400">Every action</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}