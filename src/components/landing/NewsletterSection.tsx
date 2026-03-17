import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Button } from '../ui/Button';
export function NewsletterSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-700 to-brand-500"></div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
          'radial-gradient(circle at 20% 50%, rgba(37,175,252,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(37,175,252,0.3) 0%, transparent 50%)'
        }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection className="max-w-3xl mx-auto text-center bg-white/10 backdrop-blur-md p-10 md:p-16 rounded-[3rem] border border-white/20 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Connected
          </h2>
          <p className="text-lg text-white/80 mb-10">
            Subscribe to our newsletter for the latest in chronic care
            innovation.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
            onSubmit={(e) => e.preventDefault()}>
            
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-6 py-4 rounded-full border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/20 transition-colors"
              required />
            

            <Button
              type="submit"
              size="lg"
              className="text-brand-700 hover:bg-brand-50 rounded-full whitespace-nowrap">
              
              Subscribe
            </Button>
          </form>
          <p className="text-sm text-white/60 mt-6">
            By subscribing, you agree to our Privacy Policy. We never spam.
          </p>
        </AnimatedSection>
      </div>
    </section>);

}