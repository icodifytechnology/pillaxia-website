import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HeartPulseIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  SparklesIcon,
  BellIcon,
  CheckCircle2Icon,
  ClockIcon,
  CircleDotIcon } from
'lucide-react';
const BRAND = '#01104c';
const BRAND2 = '#0a1f78';
const ACCENT = '#3b9eff';
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
  showActions: false
},
{
  id: 1,
  eyebrow: 'WHAT PILLAXIA DOES',
  title: 'AI Medication Management for Seniors, Caregivers and Clinics',
  subtitle:
  'Pillaxia is a connected care platform that helps hospitals, clinics, pharmacies, and care organisations support patients beyond the consultation through intelligent medication oversight, shared care coordination, and human-centred digital support.',
  showActions: true
}];

const meds = [
{
  time: '08:00 AM',
  name: 'Lisinopril',
  dose: '10mg',
  status: 'taken'
},
{
  time: '01:00 PM',
  name: 'Metformin',
  dose: '500mg',
  status: 'pending'
},
{
  time: '08:00 PM',
  name: 'Atorvastatin',
  dose: '20mg',
  status: 'upcoming'
}];

const statusConfig:any = {
  taken: {
    color: '#10b981',
    label: 'Taken',
    bg: '#f0fdf4',
    border: '#bbf7d0'
  },
  pending: {
    color: ACCENT,
    label: 'Pending',
    bg: '#eff8ff',
    border: '#bfdbfe'
  },
  upcoming: {
    color: '#94a3b8',
    label: 'Upcoming',
    bg: '#f8fafc',
    border: '#e2e8f0'
  }
};
export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section
      className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden"
      style={{
        background: '#ffffff'
      }}>
      
      {/* ── Background layers ── */}

      {/* Right blue panel */}
      <div
        className="absolute top-0 right-0 bottom-0 pointer-events-none"
        style={{
          width: '42%',
          background: `linear-gradient(160deg, #dbe8ff 0%, #b8ccff 30%, ${BRAND} 80%, ${BRAND2} 100%)`,
          clipPath: 'polygon(14% 0%, 100% 0%, 100% 100%, 0% 100%)'
        }} />
      
      {/* White fade over seam */}
      <div
        className="absolute top-0 right-0 bottom-0 pointer-events-none"
        style={{
          width: '55%',
          background:
          'linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.85) 35%, rgba(255,255,255,0) 65%)'
        }} />
      
      {/* Top-left blue cloud */}
      <div
        className="absolute -top-28 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${ACCENT}12 0%, rgba(255,255,255,0) 68%)`
        }} />
      
      {/* Dot grid — white area only */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          opacity: 0.04
        }}
        xmlns="http://www.w3.org/2000/svg">
        
        <defs>
          <pattern
            id="heroDotsU"
            x="0"
            y="0"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse">
            
            <circle cx="2" cy="2" r="1.5" fill={BRAND} />
          </pattern>
        </defs>
        <rect width="58%" height="100%" fill="url(#heroDotsU)" />
      </svg>
      {/* Animated glow on blue panel */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: '-8%',
          right: '4%',
          width: 340,
          height: 340,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${ACCENT}35 0%, transparent 70%)`
        }}
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />
      
      {/* Dashed curve seam decoration */}
      <svg
        className="absolute top-0 h-full pointer-events-none"
        style={{
          right: '38%',
          width: 100
        }}
        viewBox="0 0 80 900"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg">
        
        <path
          d="M70 0 Q10 450 70 900"
          stroke={`${BRAND}14`}
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="6 9" />
        
      </svg>
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] pointer-events-none"
        style={{
          background: `linear-gradient(to right, transparent 10%, ${BRAND} 45%, ${ACCENT} 70%, transparent 90%)`
        }} />
      

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ── LEFT: Slideshow ── */}
          <div className="relative min-h-[460px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{
                  opacity: 0,
                  y: 28
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
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="max-w-xl">
                
                {/* Eyebrow */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.9
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1
                  }}
                  transition={{
                    delay: 0.1
                  }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
                  style={{
                    background: 'rgba(14,165,233,0.1)',
                    color: 'rgb(14,165,233)',
                    border: '1px solid rgba(14,165,233,0.25)'
                  }}>
                  
                  <SparklesIcon
                    className="w-3.5 h-3.5" />

                  
                  <span
                    className="uppercase tracking-widest text-[11px] font-bold">

                    
                    {slides[currentSlide].eyebrow}
                  </span>
                </motion.div>

                {/* Title */}
                <h1
                  className="text-[2.4rem] lg:text-[2.9rem] font-extrabold leading-[1.1] tracking-tight mb-5"
                  style={{
                    color: BRAND
                  }}>
                  
                  {slides[currentSlide].title}
                </h1>

                {/* Subtitle */}
                <p
                  className="text-[1.05rem] leading-relaxed mb-8"
                  style={{
                    color: `${BRAND}88`
                  }}>
                  
                  {slides[currentSlide].subtitle}
                </p>

                {/* Quote */}
                {slides[currentSlide].quote &&
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -8
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    delay: 0.25
                  }}
                  className="relative pl-5 pr-4 py-3 rounded-xl mb-8"
                  style={{
                    background: `${BRAND}06`,
                    border: `1px solid ${BRAND}14`
                  }}>
                  
                    <div
                    className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full"
                    style={{
                      background: `linear-gradient(to bottom, ${BRAND}, ${ACCENT})`
                    }} />
                  
                    <p
                    className="text-[0.97rem] italic font-medium leading-relaxed"
                    style={{
                      color: `${BRAND}cc`
                    }}>
                    
                      "{slides[currentSlide].quote}"
                    </p>
                  </motion.div>
                }

                {/* CTAs */}
                {slides[currentSlide].showActions &&
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                    <button
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all duration-200"
                    style={{
                      background: `linear-gradient(135deg, ${BRAND}, ${BRAND2})`,
                      boxShadow: `0 6px 24px ${BRAND}30`
                    }}>
                    
                      Request a Demo
                      <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <button
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200"
                    style={{
                      background: '#ffffff',
                      border: `1.5px solid ${BRAND}22`,
                      color: BRAND,
                      boxShadow: `0 2px 12px ${BRAND}07`
                    }}>
                    
                      Partner With Us
                    </button>
                  </div>
                }

                {/* Footer note */}
                {slides[currentSlide].footer &&
                <p
                  className="text-sm font-medium tracking-wide"
                  style={{
                    color: `${BRAND}60`
                  }}>
                  
                    {slides[currentSlide].footer}
                  </p>
                }
              </motion.div>
            </AnimatePresence>

            {/* Slide dots */}
            <div className="flex items-center gap-2.5 mt-10">
              {slides.map((_, idx) =>
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: currentSlide === idx ? '2.5rem' : '0.6rem',
                  background: currentSlide === idx ? BRAND : `${BRAND}25`
                }}
                aria-label={`Go to slide ${idx + 1}`} />

              )}
            </div>
          </div>

          {/* ── RIGHT: Dashboard mockup card ── */}
          <div className="relative hidden lg:block">
            <div className="relative w-full max-w-[480px] mx-auto">
              {/* Soft glow behind card */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 80% 70% at 50% 50%, ${ACCENT}18, transparent 70%)`,
                  transform: 'scale(1.15)'
                }} />
              

              {/* Main dashboard card */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 24,
                  scale: 0.96
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="relative rounded-3xl overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.75)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: `1px solid rgba(255,255,255,0.9)`,
                  boxShadow: `0 24px 80px ${BRAND}14, 0 4px 16px ${BRAND}08`
                }}>
                
                {/* Top accent shimmer */}
                <div
                  className="absolute top-0 left-8 right-8 h-px"
                  style={{
                    background:
                    'linear-gradient(to right, transparent, rgba(255,255,255,0.95), transparent)'
                  }} />
                
                {/* Top gradient bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2.5px]"
                  style={{
                    background: `linear-gradient(to right, ${BRAND}, ${ACCENT})`
                  }} />
                

                <div className="p-6">
                  {/* Card header */}
                  <div
                    className="flex items-center justify-between mb-5 pb-4"
                    style={{
                      borderBottom: `1px solid ${BRAND}0a`
                    }}>
                    
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${BRAND}, ${BRAND2})`
                        }}>
                        
                        <HeartPulseIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p
                          className="text-sm font-bold"
                          style={{
                            color: BRAND
                          }}>
                          
                          Patient Overview
                        </p>
                        <p
                          className="text-xs font-medium"
                          style={{
                            color: `${BRAND}60`
                          }}>
                          
                          Real-time monitoring
                        </p>
                      </div>
                    </div>
                    <div className="relative">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center"
                        style={{
                          background: `${BRAND}08`,
                          border: `1px solid ${BRAND}12`
                        }}>
                        
                        <BellIcon
                          className="w-4 h-4"
                          style={{
                            color: BRAND
                          }} />
                        
                      </div>
                      {/* Notification dot */}
                      <span
                        className="absolute -top-1 -right-1 w-3 h-3 rounded-full flex items-center justify-center text-[7px] font-black text-white"
                        style={{
                          background: ACCENT
                        }}>
                        
                        2
                      </span>
                    </div>
                  </div>

                  {/* Stat cards row */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                    {
                      label: 'Adherence Rate',
                      value: '98%',
                      sub: '↑ 2% this week',
                      color: '#10b981'
                    },
                    {
                      label: 'Active Patients',
                      value: '1,248',
                      sub: '12 new today',
                      color: ACCENT
                    }].
                    map((stat, i) =>
                    <div
                      key={i}
                      className="rounded-2xl p-4"
                      style={{
                        background: `${BRAND}05`,
                        border: `1px solid ${BRAND}0c`
                      }}>
                      
                        <p
                        className="text-[11px] font-semibold mb-1.5"
                        style={{
                          color: `${BRAND}70`
                        }}>
                        
                          {stat.label}
                        </p>
                        <p
                        className="text-2xl font-extrabold leading-none mb-1"
                        style={{
                          color: BRAND
                        }}>
                        
                          {stat.value}
                        </p>
                        <p
                        className="text-[10px] font-semibold"
                        style={{
                          color: stat.color
                        }}>
                        
                          {stat.sub}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Medication schedule */}
                  <div
                    className="rounded-2xl p-4"
                    style={{
                      background: `${BRAND}04`,
                      border: `1px solid ${BRAND}0a`
                    }}>
                    
                    <p
                      className="text-xs font-bold mb-3"
                      style={{
                        color: BRAND
                      }}>
                      
                      Upcoming Schedule
                    </p>
                    <div className="space-y-2.5">
                      {meds.map((med, i) => {
                        const s = statusConfig?.[med.status];
                        const StatusIcon =
                        med.status === 'taken' ?
                        CheckCircle2Icon :
                        med.status === 'pending' ?
                        ClockIcon :
                        CircleDotIcon;
                        return (
                          <motion.div
                            key={i}
                            initial={{
                              opacity: 0,
                              x: -8
                            }}
                            animate={{
                              opacity: 1,
                              x: 0
                            }}
                            transition={{
                              delay: 0.5 + i * 0.1
                            }}
                            className="flex items-center justify-between px-3 py-2.5 rounded-xl"
                            style={{
                              background: s.bg,
                              border: `1px solid ${s.border}`
                            }}>
                            
                            <div className="flex items-center gap-2.5">
                              <StatusIcon
                                className="w-4 h-4 shrink-0"
                                style={{
                                  color: s.color
                                }} />
                              
                              <div>
                                <p
                                  className="text-sm font-semibold leading-none mb-0.5"
                                  style={{
                                    color: BRAND
                                  }}>
                                  
                                  {med.name}
                                </p>
                                <p
                                  className="text-[11px]"
                                  style={{
                                    color: `${BRAND}60`
                                  }}>
                                  
                                  {med.dose}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <p
                                className="text-[11px] font-semibold"
                                style={{
                                  color: `${BRAND}80`
                                }}>
                                
                                {med.time}
                              </p>
                              <span
                                className="px-2 py-0.5 rounded-full text-[9px] font-bold"
                                style={{
                                  background: s.color + '15',
                                  color: s.color
                                }}>
                                
                                {s.label}
                              </span>
                            </div>
                          </motion.div>);

                      })}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating stat — Vitals Sync */}
              <motion.div
                className="absolute -bottom-5 -left-8 rounded-2xl p-4"
                style={{
                  background: '#ffffff',
                  border: `1px solid ${BRAND}14`,
                  boxShadow: `0 8px 32px ${BRAND}12`
                }}
                animate={{
                  y: [0, -12, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5.5,
                  ease: 'easeInOut'
                }}>
                
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${ACCENT}12`,
                      border: `1px solid ${ACCENT}22`
                    }}>
                    
                    <HeartPulseIcon
                      className="w-5 h-5"
                      style={{
                        color: ACCENT
                      }} />
                    
                  </div>
                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{
                        color: BRAND
                      }}>
                      
                      Vitals Sync
                    </p>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <p
                        className="text-[11px] font-semibold"
                        style={{
                          color: '#10b981'
                        }}>
                        
                        Connected
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating stat — HIPAA */}
              <motion.div
                className="absolute -top-5 -right-6 rounded-2xl p-4"
                style={{
                  background: '#ffffff',
                  border: `1px solid ${BRAND}14`,
                  boxShadow: `0 8px 32px ${BRAND}12`
                }}
                animate={{
                  y: [0, 14, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 7,
                  ease: 'easeInOut',
                  delay: 1
                }}>
                
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #f0fff8, #dcfaed)',
                      border: '1px solid #b8f0d8'
                    }}>
                    
                    <ShieldCheckIcon
                      className="w-5 h-5"
                      style={{
                        color: '#0d9e5e'
                      }} />
                    
                  </div>
                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{
                        color: BRAND
                      }}>
                      
                      HIPAA
                    </p>
                    <p
                      className="text-[11px] font-semibold"
                      style={{
                        color: '#0d9e5e'
                      }}>
                      
                      Compliant
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Live monitoring badge */}
              <motion.div
                className="absolute rounded-xl px-3.5 py-2"
                style={{
                  bottom: '36%',
                  right: '-14px',
                  background: `linear-gradient(135deg, ${BRAND}, ${BRAND2})`,
                  boxShadow: `0 6px 20px ${BRAND}32`,
                  border: `1px solid ${ACCENT}30`
                }}
                animate={{
                  y: [0, -8, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 7,
                  ease: 'easeInOut',
                  delay: 2
                }}>
                
                <p className="text-white text-xs font-bold tracking-wide">
                  Live Monitoring
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white/70 text-[10px]">Active Now</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}