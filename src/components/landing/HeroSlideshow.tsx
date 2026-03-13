import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartPulseIcon, ShieldCheckIcon } from 'lucide-react';
import { Button } from '../ui/Button';
const HERO_IMG =
'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80';
const slides = [
{
  id: 0,
  eyebrow: 'REIMAGINING CHRONIC CARE—TOGETHER',
  title: 'Connected Care Infrastructure for Chronic & Long-Term Health',
  subtitle:
  'Bridging patients, clinicians, families, and pharmacies—through one trusted care platform.',
  quote:
  "Healthcare doesn't fail because people don't care. It fails because patient care is fragmented.",
  footer:
  'Built for healthcare systems. Designed with clinicians. Grounded in real patient lives.',
  showActions: false
},
{
  id: 1,
  eyebrow: 'WHAT PILLAXIA DOES',
  title: 'AI Medication Management for Seniors, Caregivers & Clinics',
  subtitle:
  'Pillaxia is a connected care platform that helps hospitals, clinics, pharmacies, and care organisations support patients beyond the consultation—through intelligent medication oversight, shared care coordination, and human-centred digital support.',
  showActions: true
}];

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-brand-50 blur-3xl opacity-70"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-500/5 blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Slideshow */}
          <div className="relative min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0,
                  y: -20
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeOut'
                }}
                className="max-w-2xl">
                
                <h2 className="text-brand-700 uppercase tracking-widest text-sm font-bold mb-4">
                  {slides[currentSlide].eyebrow}
                </h2>

                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
                  {slides[currentSlide].title}
                </h1>

                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  {slides[currentSlide].subtitle}
                </p>

                {slides[currentSlide].quote &&
                <div className="pl-6 border-l-4 border-accent-500 mb-8">
                    <p className="text-lg text-slate-700 italic font-medium">
                      {slides[currentSlide].quote}
                    </p>
                  </div>
                }

                {slides[currentSlide].showActions &&
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button
                    as={Link}
                    to="/book-demo"
                    size="lg"
                    className="w-full sm:w-auto">
                    
                      Request a Demo
                    </Button>
                    <Button
                    as={Link}
                    to="/contact"
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto">
                    
                      Partner With Us
                    </Button>
                  </div>
                }

                {slides[currentSlide].footer &&
                <p className="text-sm text-slate-500 font-medium">
                    {slides[currentSlide].footer}
                  </p>
                }
              </motion.div>
            </AnimatePresence>

            {/* Slide Controls */}
            <div className="flex items-center gap-3 mt-10">
              {slides.map((_, idx) =>
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-accent-500' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
                aria-label={`Go to slide ${idx + 1}`} />

              )}
            </div>
          </div>

          {/* Right Content - Static Image with Floating Stats */}
          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-700/10 to-accent-500/10 rounded-[2rem] blur-2xl"></div>
              <img
                src={HERO_IMG}
                alt="Doctor using digital healthcare platform on tablet"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]" />
              

              {/* Floating stat cards */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100"
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: 'easeInOut'
                }}>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-500/10 flex items-center justify-center">
                    <HeartPulseIcon className="w-5 h-5 text-accent-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">98%</p>
                    <p className="text-xs text-slate-500">Adherence Rate</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100"
                animate={{
                  y: [0, 10, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: 'easeInOut',
                  delay: 1
                }}>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center">
                    <ShieldCheckIcon className="w-5 h-5 text-brand-700" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">HIPAA</p>
                    <p className="text-xs text-slate-500">Compliant</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}