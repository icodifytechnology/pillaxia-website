'use client';

import React, { useState } from 'react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Button } from '../components/ui/Button';
import {
  MailIcon,
  MapPinIcon,
  CalendarIcon,
  SendIcon,
  ArrowLeftIcon } from
'lucide-react';
import { useSubmitContact } from '../lib/api';
import Link from 'next/link';
export function ContactPage() {
  const submitContact = useSubmitContact();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organisation: '',
    role: '',
    message: ''
  });
  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>

  {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContact.mutate(formData);
  };
  return (
    <main className="pt-32 pb-20 mesh-dark min-h-screen relative">
      <div className="absolute top-0 left-0 right-0 neon-line" />
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <div className="mb-12 text-center">
          <AnimatedSection>
            <span className="inline-block text-[#3b9eff] uppercase tracking-widest text-sm font-bold mb-4">
              CONTACT US
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Whether you're a hospital, clinic, pharmacy, investor, or press,
              we would love to hear from you.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Form */}
          <AnimatedSection direction="right">
            <h2 className="text-2xl font-bold text-white mb-6">
              Send us a message
            </h2>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 neon-card">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      Full Name <span className="text-[#ec4899]">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 focus:ring-2 focus:ring-[#3b9eff] focus:border-[#3b9eff] outline-none bg-white/5 text-white placeholder-white/30"
                      placeholder="Jane Smith" />
                    
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      Email <span className="text-[#ec4899]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 focus:ring-2 focus:ring-[#3b9eff] focus:border-[#3b9eff] outline-none bg-white/5 text-white placeholder-white/30"
                      placeholder="jane@hospital.ie" />
                    
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Organisation
                  </label>
                  <input
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 focus:ring-2 focus:ring-[#3b9eff] focus:border-[#3b9eff] outline-none bg-white/5 text-white placeholder-white/30"
                    placeholder="St James's Hospital" />
                  
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Your Role
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 focus:ring-2 focus:ring-[#3b9eff] focus:border-[#3b9eff] outline-none bg-white/5 text-white">
                    
                    <option value="" className="text-slate-800">
                      Select your role...
                    </option>
                    <option value="Doctor/Clinician" className="text-slate-800">
                      Doctor/Clinician
                    </option>
                    <option value="Nurse" className="text-slate-800">
                      Nurse
                    </option>
                    <option value="Pharmacist" className="text-slate-800">
                      Pharmacist
                    </option>
                    <option
                      value="Hospital Administrator"
                      className="text-slate-800">
                      
                      Hospital Administrator
                    </option>
                    <option value="Investor" className="text-slate-800">
                      Investor
                    </option>
                    <option value="Press/Media" className="text-slate-800">
                      Press/Media
                    </option>
                    <option value="Other" className="text-slate-800">
                      Other
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Message <span className="text-[#ec4899]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 focus:ring-2 focus:ring-[#3b9eff] focus:border-[#3b9eff] outline-none resize-none bg-white/5 text-white placeholder-white/30"
                    placeholder="Tell us about your organisation and what you're looking for...">
                  </textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2"
                  disabled={submitContact.isPending}>
                  
                  <SendIcon className="w-4 h-4" />
                  {submitContact.isPending ? 'Sending...' : 'Send Message'}
                </Button>
                {submitContact.isSuccess &&
                <p className="text-sm text-[#2dd4bf] text-center font-medium mt-2">
                    Message sent successfully! We'll be in touch soon.
                  </p>
                }
              </form>
            </div>
          </AnimatedSection>

          {/* Right Column - Info */}
          <AnimatedSection direction="left">
            <h2 className="text-2xl font-bold text-white mb-6">
              Contact information
            </h2>
            <div className="space-y-4">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="mt-1">
                  <MailIcon className="w-6 h-6 text-[#3b9eff]" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">
                    General Enquiries
                  </h3>
                  <a
                    href="mailto:connect@pillaxia.com"
                    className="text-[#3b9eff] hover:text-[#5cb3ff] transition-colors">
                    
                    connect@pillaxia.com
                  </a>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="mt-1">
                  <MapPinIcon className="w-6 h-6 text-[#3b9eff]" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Headquarters</h3>
                  <p className="text-slate-400 text-sm">Louth, Ireland</p>
                  <p className="text-slate-400 text-sm">Nigeria</p>
                </div>
              </div>

              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 mt-8 neon-card">
                <div className="mb-4">
                  <CalendarIcon className="w-8 h-8 text-[#3b9eff]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Book a Product Demo
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Schedule a 30-minute walkthrough of Pillaxia with our team.
                  We'll tailor it to your organisation's needs.
                </p>
                <Link
                  href="/book-demo"
                  className="inline-flex items-center font-bold text-[#3b9eff] hover:text-[#5cb3ff] transition-colors">
                  
                  Book Demo <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </main>);

}