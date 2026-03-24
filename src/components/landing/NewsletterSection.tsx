import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Button } from '../ui/Button';
export function NewsletterSection() {
  return (
    <section className="py-24 relative overflow-hidden mesh-dark">
      <div className="absolute top-0 left-0 right-0 neon-line" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection className="max-w-3xl mx-auto text-center bg-white/5 backdrop-blur-md p-10 md:p-16 neon-card">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Connected
          </h2>
          <p className="text-lg text-slate-300 mb-10">
            Subscribe to our newsletter for the latest in chronic care
            innovation.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
            onSubmit={(e) => e.preventDefault()}>
            
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-6 py-4 rounded-full border border-[#3b9eff]/30 bg-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#3b9eff] focus:shadow-[0_0_15px_rgba(59,158,255,0.4)] transition-all"
              required />
            

            <Button type="submit" size="lg" className="whitespace-nowrap">
              Subscribe
            </Button>
          </form>
          <p className="text-sm text-slate-500 mt-6">
            By subscribing, you agree to our Privacy Policy. We never spam.
          </p>
        </AnimatedSection>
      </div>
    </section>);

}