import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  QuoteIcon,
  AlertCircleIcon,
} from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

const testimonials = [
  {
    id: 0,
    title: 'A brilliant support for complex medication routines.',
    quote:
      "I can really see how this app would suit someone who struggles with medication compliance. If you're on multiple medications or managing a complex routine, having everything in one place makes a big difference.",
    stars: 5,
  },
  {
    id: 1,
    title: 'Perfect for people on multiple medications.',
    quote:
      'My medication regime is relatively simple, so phone reminders worked for me. But I can absolutely see how Pillaxia would be especially helpful for people on more complex medication plans who need structured support.',
    stars: 5,
  },
  {
    id: 2,
    title: 'A great one-stop aid for medication adherence.',
    quote:
      "It's a nice app and clearly designed with medication and adherence in mind. Having a dedicated space focused purely on staying on track with treatment is really helpful.",
    stars: 5,
  },
  {
    id: 3,
    title: 'Supportive and focused on what matters.',
    quote:
      "The app is very much oriented toward medication adherence, which is exactly what many people need. It's reassuring to have something that keeps you accountable and organised.",
    stars: 5,
  },
  {
    id: 4,
    title: 'Strong foundation with real potential.',
    quote:
      "It's a really solid concept. Making login even smoother would improve ease of use, but overall it's a valuable tool for supporting adherence and keeping everything organised.",
    stars: 5,
  },
];

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden neon-card h-full">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3b9eff] to-transparent" />
      <QuoteIcon className="absolute top-6 right-6 w-16 h-16 text-slate-100" />

      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.stars
                ? 'text-[#ec4899] fill-[#ec4899]'
                : 'text-slate-200 fill-slate-200'
            }`}
          />
        ))}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-[#010d3e] mb-4 leading-snug relative z-10">
        "{testimonial.title}"
      </h3>

      {/* Quote */}
      <p className="text-base text-slate-600 leading-relaxed italic relative z-10 flex-1">
        "{testimonial.quote}"
      </p>
    </div>
  )
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // show 2 cards at a time; step by 1
  const total = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 8000);
    return () => clearInterval(timer);
  }, [total]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  const second = (currentIndex + 1) % total;

  return (
    <section className="py-24 relative overflow-hidden bg-[#f8fbff]">
      <div className="absolute top-0 left-0 right-0 neon-line" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 bg-[#3b9eff]/10 border border-[#3b9eff]/30">
            <AlertCircleIcon className="w-3.5 h-3.5 text-[#3b9eff]" />
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#3b9eff]">
              WHAT PEOPLE SAY
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-[#010d3e] mb-6">
            Real Feedback from Real Users
          </h2>
        </AnimatedSection>

        {/* 2-card grid */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-2 gap-6 items-stretch"
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} />
              <TestimonialCard testimonial={testimonials[second]} />
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-[#010d3e] border border-[#3b9eff]/20 flex items-center justify-center text-white hover:bg-[#0a1a6b] hover:shadow-[0_0_15px_rgba(59,158,255,0.3)] transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex || idx === second
                      ? 'w-8 bg-[#3b9eff] shadow-[0_0_10px_rgba(59,158,255,0.5)]'
                      : 'w-2.5 bg-[#010d3e]/20 hover:bg-[#010d3e]/40'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-[#010d3e] border border-[#3b9eff]/20 flex items-center justify-center text-white hover:bg-[#0a1a6b] hover:shadow-[0_0_15px_rgba(59,158,255,0.3)] transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}