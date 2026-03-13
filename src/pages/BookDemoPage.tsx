import React from 'react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { CheckCircle2Icon, ShieldCheckIcon } from 'lucide-react';
export function BookDemoPage() {
  return (
    <main className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Book a Demo"
          subtitle="See how Pillaxia can transform your healthcare delivery" />
        

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto items-start">
          <AnimatedSection direction="right" className="lg:col-span-3">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none" />
                    
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none" />
                    
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none" />
                  
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none" />
                    
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Role
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none bg-white">
                      <option>Clinician</option>
                      <option>Administrator</option>
                      <option>Pharmacist</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Number of Patients
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none bg-white">
                      <option>Under 500</option>
                      <option>500 - 2,000</option>
                      <option>2,000 - 10,000</option>
                      <option>10,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none" />
                    
                  </div>
                </div>
                <Button type="submit" size="lg" className="w-full text-lg mt-4">
                  Schedule Demo
                </Button>
                <p className="text-xs text-center text-slate-500 mt-4">
                  By submitting this form, you agree to our Privacy Policy and
                  Terms of Service.
                </p>
              </form>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                What to expect
              </h3>
              <ul className="space-y-4">
                {[
                'Personalized walkthrough tailored to your organization',
                'See real patient workflows and clinician dashboards',
                'Q&A with our healthcare technology experts',
                'No commitment required'].
                map((text, i) =>
                <li key={i} className="flex items-start gap-3">
                    <CheckCircle2Icon className="w-6 h-6 text-accent-500 flex-shrink-0" />
                    <span className="text-slate-700">{text}</span>
                  </li>
                )}
              </ul>
            </div>

            <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheckIcon className="w-6 h-6 text-brand-700" />
                <h4 className="font-bold text-brand-700">
                  Enterprise Grade Security
                </h4>
              </div>
              <p className="text-sm text-slate-600">
                Pillaxia is fully compliant with healthcare data regulations
                across our operating regions, ensuring patient data is always
                protected.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80"
                alt="Healthcare professional using digital platform"
                className="w-full h-48 object-cover" />
              
            </div>
          </AnimatedSection>
        </div>
      </div>
    </main>);

}