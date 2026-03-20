import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HeartPulseIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  SparklesIcon,
  ChevronDownIcon,
} from 'lucide-react'
const BRAND = '#010d3e'
const BRAND2 = '#0a1a6b'
const ACCENT = '#3b9eff'
const MAGENTA = '#ec4899'
const TEAL = '#2dd4bf'
const slides = [
  {
    id: 0,
    eyebrow: 'REIMAGINING CHRONIC CARE TOGETHER',
    title: 'Connected Care Infrastructure for Chronic and Long-Term Health',
    subtitle:
      'Bridging patients, clinicians, families, and pharmacies through one trusted care platform.',
    quote:
      "Healthcare doesn't fail because people don't care. It fails because patient care is fragmented.",
    footer:
      'Built for healthcare systems. Designed with clinicians. Grounded in real patient lives.',
    showActions: false,
  },
  {
    id: 1,
    eyebrow: 'WHAT PILLAXIA DOES',
    title: 'AI Medication Management for Seniors, Caregivers and Clinics',
    subtitle:
      'Pillaxia is a connected care platform that helps hospitals, clinics, pharmacies, and care organisations support patients beyond the consultation through intelligent medication oversight, shared care coordination, and human-centred digital support.',
    showActions: true,
  },
]
export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])
  return (
    <section
      className="relative overflow-hidden mesh-dark"
      style={{ minHeight: '100dvh' }}
    >
      {/* ── Background layers ── */}

      {/* Right blue panel */}
      <div
        className="absolute top-0 right-0 bottom-0 pointer-events-none"
        style={{
          width: '42%',
          background: `linear-gradient(160deg, rgba(59,158,255,0.1) 0%, rgba(10,26,107,0.5) 30%, ${BRAND} 80%, ${BRAND2} 100%)`,
          clipPath: 'polygon(14% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }}
      />

      {/* Dot grid */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.08 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="heroDotsU"
            x="0"
            y="0"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill={ACCENT} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroDotsU)" />
      </svg>



      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 neon-line pointer-events-none" />

      {/* ── Main content — vertically centred in full viewport ── */}
      <div
        className="container mx-auto px-4 md:px-6 relative z-10 flex items-center"
        style={{ minHeight: '100dvh', paddingTop: '7rem', paddingBottom: '5rem' }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

          {/* ── LEFT: Slideshow ── */}
          <div className="relative min-h-[460px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-xl"
              >
                {/* Eyebrow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-[#3b9eff]/15 border border-[#3b9eff]/30 text-[#3b9eff]"
                >
                  <SparklesIcon className="w-3.5 h-3.5" />
                  <span className="uppercase tracking-widest text-[11px] font-bold">
                    {slides[currentSlide].eyebrow}
                  </span>
                </motion.div>

                {/* Title */}
                <h1 className="text-[2.4rem] lg:text-[2.9rem] font-extrabold leading-[1.1] tracking-tight mb-5 text-white">
                  {slides[currentSlide].title}
                </h1>

                {/* Subtitle */}
                <p className="text-[1.05rem] leading-relaxed mb-8 text-slate-300">
                  {slides[currentSlide].subtitle}
                </p>

                {/* Quote */}
                {slides[currentSlide].quote && (
                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                    className="relative pl-5 pr-4 py-3 rounded-xl mb-8 bg-white/5 border border-white/10"
                  >
                    <div
                      className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full"
                      style={{ background: `linear-gradient(to bottom, ${ACCENT}, ${MAGENTA})` }}
                    />
                    <p className="text-[0.97rem] italic font-medium leading-relaxed text-slate-300">
                      "{slides[currentSlide].quote}"
                    </p>
                  </motion.div>
                )}

                {/* CTAs */}
                {slides[currentSlide].showActions && (
                  <div className="flex flex-col sm:flex-row gap-3 mb-8">
                    <button
                      className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all duration-200"
                      style={{
                        background: `linear-gradient(135deg, ${ACCENT}, ${MAGENTA})`,
                        boxShadow: `0 0 20px rgba(236,72,153,0.4)`,
                      }}
                    >
                      Request a Demo
                      <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-[#3b9eff]/50">
                      Partner With Us
                    </button>
                  </div>
                )}

                {/* Footer note */}
                {slides[currentSlide].footer && (
                  <p className="text-sm font-medium tracking-wide text-slate-400">
                    {slides[currentSlide].footer}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Slide dots */}
            <div className="flex items-center gap-2.5 mt-10">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: currentSlide === idx ? '2.5rem' : '0.6rem',
                    background: currentSlide === idx ? ACCENT : 'rgba(255,255,255,0.2)',
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ── RIGHT: Connected Care Illustration ── */}
          <div className="relative hidden lg:block">
            <div className="relative w-full max-w-[520px] mx-auto">
              {/* Soft glow behind */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 80% 70% at 50% 50%, ${ACCENT}30, transparent 70%)`,
                  transform: 'scale(1.2)',
                }}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <svg
                  viewBox="0 0 480 440"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                >
                  <defs>
                    <linearGradient id="heroConnG" x1="0" y1="0" x2="1" y2="1">
                      <stop stopColor={ACCENT} />
                      <stop offset="1" stopColor={MAGENTA} />
                    </linearGradient>
                    <linearGradient id="heroAccG" x1="0" y1="0" x2="1" y2="1">
                      <stop stopColor={ACCENT} />
                      <stop offset="1" stopColor={TEAL} />
                    </linearGradient>
                    <filter id="heroGlow">
                      <feGaussianBlur stdDeviation="8" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Outer ring */}
                  <circle cx="240" cy="210" r="175" stroke={`${ACCENT}30`} strokeWidth="1.5" strokeDasharray="6 8" fill="none" />
                  <circle cx="240" cy="210" r="140" stroke={`${MAGENTA}30`} strokeWidth="1" strokeDasharray="4 6" fill="none" />

                  {/* Connection lines */}
                  <line x1="240" y1="210" x2="110" y2="120" stroke={`${ACCENT}60`} strokeWidth="2" strokeDasharray="6 4" />
                  <line x1="240" y1="210" x2="370" y2="120" stroke={`${ACCENT}60`} strokeWidth="2" strokeDasharray="6 4" />
                  <line x1="240" y1="210" x2="110" y2="310" stroke={`${ACCENT}60`} strokeWidth="2" strokeDasharray="6 4" />
                  <line x1="240" y1="210" x2="370" y2="310" stroke={`${ACCENT}60`} strokeWidth="2" strokeDasharray="6 4" />
                  <line x1="110" y1="120" x2="110" y2="310" stroke={`${TEAL}20`} strokeWidth="1.5" strokeDasharray="4 6" />
                  <line x1="370" y1="120" x2="370" y2="310" stroke={`${TEAL}20`} strokeWidth="1.5" strokeDasharray="4 6" />
                  <line x1="110" y1="120" x2="370" y2="120" stroke={`${TEAL}20`} strokeWidth="1" strokeDasharray="3 5" />
                  <line x1="110" y1="310" x2="370" y2="310" stroke={`${TEAL}20`} strokeWidth="1" strokeDasharray="3 5" />

                  {/* Central Patient Node */}
                  <circle cx="240" cy="210" r="52" fill="#010d3e" stroke={ACCENT} strokeWidth="2.5" filter="url(#heroGlow)" />
                  <circle cx="240" cy="210" r="42" fill={`${ACCENT}20`} />
                  <circle cx="240" cy="196" r="12" fill="white" opacity="0.9" />
                  <path d="M222 228 C222 214 258 214 258 228" fill="white" opacity="0.8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M240 238 C233 232 228 226 228 222 C228 218 232 216 240 222 C248 216 252 218 252 222 C252 226 247 232 240 238Z" fill={MAGENTA} opacity="0.9" />
                  <text x="240" y="268" textAnchor="middle" fontSize="11" fontWeight="700" fill="white" fontFamily="Inter, system-ui">Patient</text>

                  {/* Clinician Node */}
                  <circle cx="110" cy="120" r="38" fill="#010d3e" stroke={TEAL} strokeWidth="2" opacity="0.9" />
                  <circle cx="110" cy="120" r="30" fill={`${TEAL}15`} />
                  <rect x="100" y="106" width="20" height="20" rx="5" fill={TEAL} opacity="0.8" />
                  <path d="M110 106 V113 M106 109.5 H114" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                  <circle cx="110" cy="120" r="4" fill="white" />
                  <text x="110" y="170" textAnchor="middle" fontSize="10" fontWeight="600" fill="white" opacity="0.9" fontFamily="Inter, system-ui">Clinician</text>

                  {/* Family Node */}
                  <circle cx="370" cy="120" r="38" fill="#010d3e" stroke={MAGENTA} strokeWidth="2" opacity="0.9" />
                  <circle cx="370" cy="120" r="30" fill={`${MAGENTA}15`} />
                  <circle cx="362" cy="112" r="8" fill={MAGENTA} opacity="0.8" />
                  <circle cx="378" cy="112" r="8" fill={MAGENTA} opacity="0.6" />
                  <path d="M352 134 C352 126 388 126 388 134" stroke={MAGENTA} strokeWidth="2" strokeLinecap="round" fill={MAGENTA} opacity="0.5" />
                  <text x="370" y="170" textAnchor="middle" fontSize="10" fontWeight="600" fill="white" opacity="0.9" fontFamily="Inter, system-ui">Family</text>

                  {/* Pharmacy Node */}
                  <circle cx="110" cy="310" r="38" fill="#010d3e" stroke={ACCENT} strokeWidth="2" opacity="0.9" />
                  <circle cx="110" cy="310" r="30" fill={`${ACCENT}15`} />
                  <rect x="98" y="300" width="24" height="16" rx="4" fill={ACCENT} opacity="0.8" />
                  <circle cx="110" cy="308" r="5" fill="white" />
                  <text x="110" y="360" textAnchor="middle" fontSize="10" fontWeight="600" fill="white" opacity="0.9" fontFamily="Inter, system-ui">Pharmacy</text>

                  {/* Caregiver Node */}
                  <circle cx="370" cy="310" r="38" fill="#010d3e" stroke={TEAL} strokeWidth="2" opacity="0.9" />
                  <circle cx="370" cy="310" r="30" fill={`${TEAL}15`} />
                  <path d="M370 318 C358 310 356 300 370 306 C384 300 382 310 370 318Z" fill={TEAL} opacity="0.8" />
                  <circle cx="370" cy="300" r="8" fill="white" opacity="0.8" />
                  <text x="370" y="360" textAnchor="middle" fontSize="10" fontWeight="600" fill="white" opacity="0.9" fontFamily="Inter, system-ui">Caregiver</text>

                  {/* Pulse rings */}
                  <circle cx="240" cy="210" r="58" stroke={`${ACCENT}40`} strokeWidth="1" fill="none" strokeDasharray="3 5" />
                  <circle cx="240" cy="210" r="80" stroke={`${ACCENT}30`} strokeWidth="1" fill="none">
                    <animate attributeName="r" values="75;95;75" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0;0.5" dur="4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="240" cy="210" r="100" stroke={`${MAGENTA}20`} strokeWidth="1" fill="none">
                    <animate attributeName="r" values="95;120;95" dur="5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0;0.3" dur="5s" repeatCount="indefinite" />
                  </circle>

                  {/* Bottom tagline */}
                  <rect x="155" y="395" width="170" height="32" rx="16" fill={`${ACCENT}15`} stroke={`${ACCENT}30`} strokeWidth="1" />
                  <text x="240" y="415" textAnchor="middle" fontSize="10" fontWeight="700" fill="white" opacity="0.9" fontFamily="Inter, system-ui">
                    Connected Care Network
                  </text>
                </svg>
              </motion.div>

              {/* Floating stat — Vitals Sync */}
              <motion.div
                className="absolute -bottom-2 -left-4 rounded-2xl p-4 bg-[#010d3e]/90 border border-[#3b9eff]/30 shadow-[0_0_20px_rgba(59,158,255,0.2)] backdrop-blur-md"
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#3b9eff]/20 border border-[#3b9eff]/40">
                    <HeartPulseIcon className="w-5 h-5 text-[#3b9eff]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Vitals Sync</p>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] animate-pulse" />
                      <p className="text-[11px] font-semibold text-[#2dd4bf]">Connected</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating stat — HIPAA */}
              <motion.div
                className="absolute -top-3 -right-4 rounded-2xl p-4 bg-[#010d3e]/90 border border-[#ec4899]/30 shadow-[0_0_20px_rgba(236,72,153,0.2)] backdrop-blur-md"
                animate={{ y: [0, 14, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#ec4899]/20 border border-[#ec4899]/40">
                    <ShieldCheckIcon className="w-5 h-5 text-[#ec4899]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">HIPAA</p>
                    <p className="text-[11px] font-semibold text-[#ec4899]">Compliant</p>
                  </div>
                </div>
              </motion.div>

              {/* Care coordination badge */}
              <motion.div
                className="absolute rounded-xl px-3.5 py-2 bg-gradient-to-r from-[#3b9eff] to-[#ec4899] shadow-[0_0_20px_rgba(236,72,153,0.4)] border border-white/20"
                style={{ bottom: '38%', right: '-10px' }}
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 2 }}
              >
                <p className="text-white text-xs font-bold tracking-wide">Care Coordination</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span className="text-white/90 text-[10px]">Active Now</span>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-400">
          Scroll
        </span>
        <motion.div
          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDownIcon className="w-4 h-4 text-slate-400" />
        </motion.div>
      </motion.div>

    </section>
  )
}