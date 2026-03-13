import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  QuoteIcon } from
'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
const testimonials = [
{
  id: 0,
  title: 'A brilliant support for complex medication routines.',
  quote:
  'I can really see how this app would suit someone who struggles with medication compliance. If you’re on multiple medications or managing a complex routine, having everything in one place makes a big difference.',
  stars: 4
},
{
  id: 1,
  title: 'Perfect for people on multiple medications.',
  quote:
  'My medication regime is relatively simple, so phone reminders worked for me. But I can absolutely see how Pillaxia would be especially helpful for people on more complex medication plans who need structured support.',
  stars: 5
},
{
  id: 2,
  title: 'A great one-stop aid for medication adherence.',
  quote:
  'It’s a nice app and clearly designed with medication and adherence in mind. Having a dedicated space focused purely on staying on track with treatment is really helpful.',
  stars: 4
},
{
  id: 3,
  title: 'Supportive and focused on what matters.',
  quote:
  'The app is very much oriented toward medication adherence, which is exactly what many people need. It’s reassuring to have something that keeps you accountable and organised.',
  stars: 4
},
{
  id: 4,
  title: 'Strong foundation with real potential.',
  quote:
  'It’s a really solid concept. Making login even smoother would improve ease of use, but overall it’s a valuable tool for supporting adherence and keeping everything organised.',
  stars: 4
}];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);
  const nextSlide = () =>
  setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
  setCurrentIndex(
    (prev) => (prev - 1 + testimonials.length) % testimonials.length
  );
  return (
    <section className="py-24 bg-brand-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="WHAT PEOPLE SAY"
          title="Real Feedback from Real Users" />
        

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-lg border border-brand-100 min-h-[350px] flex flex-col justify-center relative overflow-hidden">
            <QuoteIcon className="absolute top-8 left-8 w-24 h-24 text-brand-50 opacity-50" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{
                  opacity: 0,
                  x: 20
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                exit={{
                  opacity: 0,
                  x: -20
                }}
                transition={{
                  duration: 0.4
                }}
                className="relative z-10 text-center">
                
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) =>
                  <StarIcon
                    key={i}
                    className={`w-6 h-6 ${i < testimonials[currentIndex].stars ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200 fill-slate-200'}`} />

                  )}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-900 mb-6">
                  "{testimonials[currentIndex].title}"
                </h3>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed italic">
                  "{testimonials[currentIndex].quote}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-brand-700 hover:border-brand-200 hover:shadow-md transition-all"
              aria-label="Previous testimonial">
              
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) =>
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-8 bg-brand-700' : 'w-2.5 bg-brand-200 hover:bg-brand-300'}`}
                aria-label={`Go to testimonial ${idx + 1}`} />

              )}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-brand-700 hover:border-brand-200 hover:shadow-md transition-all"
              aria-label="Next testimonial">
              
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>);

}