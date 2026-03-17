import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    <main className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mb-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-brand-700 transition-colors mb-8">
            
            <ArrowLeftIcon className="w-4 h-4 mr-2" /> Back
          </Link>
          <AnimatedSection>
            <span className="inline-block text-accent-500 uppercase tracking-widest text-sm font-bold mb-4">
              CONTACT US
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Whether you're a hospital, clinic, pharmacy, investor, or press,
              we would love to hear from you.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Form */}
          <AnimatedSection direction="right">
            <h2 className="text-2xl font-bold text-brand-900 mb-6">
              Send us a message
            </h2>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none bg-slate-50/50"
                      placeholder="Jane Smith" />
                    
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none bg-slate-50/50"
                      placeholder="jane@hospital.ie" />
                    
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Organisation
                  </label>
                  <input
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none bg-slate-50/50"
                    placeholder="St James's Hospital" />
                  
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Your Role
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none bg-slate-50/50 text-slate-600">
                    
                    <option value="">Select your role...</option>
                    <option value="Doctor/Clinician">Doctor/Clinician</option>
                    <option value="Nurse">Nurse</option>
                    <option value="Pharmacist">Pharmacist</option>
                    <option value="Hospital Administrator">
                      Hospital Administrator
                    </option>
                    <option value="Investor">Investor</option>
                    <option value="Press/Media">Press/Media</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none resize-none bg-slate-50/50"
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
                <p className="text-sm text-emerald-600 text-center font-medium mt-2">
                    Message sent successfully! We'll be in touch soon.
                  </p>
                }
              </form>
            </div>
          </AnimatedSection>

          {/* Right Column - Info */}
          <AnimatedSection direction="left">
            <h2 className="text-2xl font-bold text-brand-900 mb-6">
              Contact information
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                <div className="mt-1">
                  <MailIcon className="w-6 h-6 text-accent-500" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-900 mb-1">
                    General Enquiries
                  </h3>
                  <a
                    href="mailto:connect@pillaxia.com"
                    className="text-accent-500 hover:text-accent-600 transition-colors">
                    
                    connect@pillaxia.com
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                <div className="mt-1">
                  <MapPinIcon className="w-6 h-6 text-accent-500" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-900 mb-1">
                    Headquarters
                  </h3>
                  <p className="text-slate-600 text-sm">Louth, Ireland</p>
                  <p className="text-slate-500 text-sm">Nigeria</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm mt-8">
                <div className="mb-4">
                  <CalendarIcon className="w-8 h-8 text-accent-500" />
                </div>
                <h3 className="text-xl font-bold text-brand-900 mb-3">
                  Book a Product Demo
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Schedule a 30-minute walkthrough of Pillaxia with our team.
                  We'll tailor it to your organisation's needs.
                </p>
                <Link
                  to="/book-demo"
                  className="inline-flex items-center font-bold text-accent-500 hover:text-accent-600 transition-colors">
                  
                  Book Demo <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </main>);

}