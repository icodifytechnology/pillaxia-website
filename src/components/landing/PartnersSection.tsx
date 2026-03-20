import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Building2Icon,
  StethoscopeIcon,
  PillIcon,
  HomeIcon,
  LandmarkIcon,
  ArrowRightIcon,
  UserIcon,
  HeartIcon,
  LinkIcon,
  ChevronRightIcon } from
'lucide-react';
const BRAND = '#010d3e';
const ACCENT = '#3b9eff';
const MAGENTA = '#ec4899';
const partners = [
{
  name: 'Public and private hospitals',
  icon: Building2Icon
},
{
  name: 'Clinics and specialist practices',
  icon: StethoscopeIcon
},
{
  name: 'Pharmacies',
  icon: PillIcon
},
{
  name: 'Care homes and community providers',
  icon: HomeIcon
},
{
  name: 'Government and health agencies',
  icon: LandmarkIcon
}];

const b2bEntities = [
{
  icon: Building2Icon,
  label: 'Hospitals'
},
{
  icon: StethoscopeIcon,
  label: 'Clinics'
},
{
  icon: LandmarkIcon,
  label: 'Agencies'
}];

const b2cEntities = [
{
  icon: UserIcon,
  label: 'Patients'
},
{
  icon: HeartIcon,
  label: 'Families'
},
{
  icon: HomeIcon,
  label: 'Caregivers'
}];

function useInView(threshold = 0.1) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      {
        threshold
      }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible] as const;
}
export function PartnersSection() {
  const [ref, visible] = useInView();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        backgroundImage: 'url(https://pillaxia.com/images/bg-3.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      
      <style>{`
        @keyframes pPulseLight {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.2); }
        }
        @keyframes pFlowDotLight {
          0%   { left: 0%;   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>

      <div className="absolute top-0 left-0 right-0 neon-line" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* ── Heading ── */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-center mb-12">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 bg-[#3b9eff]/10 border border-[#3b9eff]/30">
            <LinkIcon className="w-3.5 h-3.5 text-[#3b9eff]" />
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#3b9eff]">
              Who We Work With
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-[#010d3e] mb-3">
            Partners Across the{' '}
            <span className="bg-gradient-to-r from-[#010d3e] to-[#3b9eff] bg-clip-text text-transparent">
              Care Ecosystem
            </span>
          </h2>
          <p className="text-sm text-slate-500">
            We collaborate with organisations at every level of the healthcare
            system
          </p>
        </motion.div>

        {/* ── Partner chips ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto">
          {partners.map(({ name, icon: Icon }, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              scale: 0.88
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: i * 0.08,
              type: 'spring',
              stiffness: 260,
              damping: 22
            }}
            className="flex items-center gap-3 px-5 py-3 rounded-2xl cursor-default bg-white neon-card transition-all duration-300">
            
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 bg-[#3b9eff]/10 text-[#3b9eff]">
                <Icon className="w-4.5 h-4.5" />
              </div>
              <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">
                {name}
              </span>
            </motion.div>
          )}
        </div>

        {/* B2B2C SECTION */}
        <motion.div
          initial={{
            opacity: 0,
            y: 32
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="relative max-w-5xl mx-auto">
          
          <div className="relative rounded-3xl overflow-hidden bg-white border border-[#3b9eff]/20 shadow-xl neon-border">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#3b9eff] to-transparent" />

            <div className="p-8 md:p-12">
              <div className="flex justify-center mb-10">
                <div className="relative inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <span
                    className="w-2 h-2 rounded-full shrink-0 bg-[#ec4899]"
                    style={{
                      animation: 'pPulseLight 2s ease-in-out infinite'
                    }} />
                  
                  <span className="text-base md:text-lg font-bold tracking-[0.1em] uppercase text-slate-600">
                    Our Model is
                  </span>
                  <span className="px-4 py-1.5 rounded-xl text-base md:text-lg font-black tracking-wider bg-[#3b9eff]/10 text-[#3b9eff] border border-[#3b9eff]/20">
                    B2B2C
                  </span>
                  <span
                    className="w-2 h-2 rounded-full shrink-0 bg-[#2dd4bf]"
                    style={{
                      animation: 'pPulseLight 2s ease-in-out infinite 1s'
                    }} />
                  
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
                {/* LEFT: B2B */}
                <div className="flex flex-col items-center gap-3 flex-1 w-full">
                  <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-1 text-slate-500">
                    B2B · Organisations
                  </p>
                  {b2bEntities.map(({ icon: Icon, label }, i) =>
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      x: -20
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0
                    }}
                    viewport={{
                      once: true
                    }}
                    transition={{
                      delay: 0.2 + i * 0.1
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                    
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 bg-[#010d3e]/5 text-[#010d3e]">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">
                        {label}
                      </span>
                      <span className="ml-auto text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-500">
                        license
                      </span>
                    </motion.div>
                  )}
                </div>

                {/* CENTER: Pillaxia hub */}
                <div className="flex flex-col items-center gap-4 px-4 shrink-0">
                  <div className="hidden md:flex flex-col items-center gap-1.5 relative">
                    <div className="relative w-24 h-[2px] overflow-hidden bg-slate-200">
                      <div
                        className="absolute top-0 h-full w-6 rounded-full bg-gradient-to-r from-transparent via-[#3b9eff] to-transparent"
                        style={{
                          animation: 'pFlowDotLight 1.8s ease-in-out infinite'
                        }} />
                      
                    </div>
                    <ChevronRightIcon className="w-4 h-4 text-[#3b9eff]" />
                  </div>

                  <motion.div
                    animate={{
                      scale: [1, 1.04, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="flex flex-col items-center justify-center rounded-3xl px-6 py-5 shadow-[0_0_20px_rgba(59,158,255,0.3)] neon-border"
                    style={{
                      background: `linear-gradient(160deg, #010d3e, #0a1a6b)`,
                      minWidth: 120
                    }}>
                    
                    <div
                      className="w-2 h-2 rounded-full mb-2 bg-[#3b9eff]"
                      style={{
                        animation: 'pPulseLight 2s ease-in-out infinite'
                      }} />
                    
                    <span className="text-lg font-black text-white tracking-wider">
                      PILLAXIA
                    </span>
                    <span className="text-[9px] font-bold tracking-widest uppercase mt-0.5 text-[#3b9eff]">
                      CARE LAYER
                    </span>
                  </motion.div>

                  <div className="hidden md:flex flex-col items-center gap-1.5">
                    <ChevronRightIcon className="w-4 h-4 text-[#ec4899]" />
                    <div className="relative w-24 h-[2px] overflow-hidden bg-slate-200">
                      <div
                        className="absolute top-0 h-full w-6 rounded-full bg-gradient-to-r from-transparent via-[#ec4899] to-transparent"
                        style={{
                          animation:
                          'pFlowDotLight 1.8s ease-in-out infinite 0.9s'
                        }} />
                      
                    </div>
                  </div>
                </div>

                {/* RIGHT: B2C */}
                <div className="flex flex-col items-center gap-3 flex-1 w-full">
                  <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-1 text-slate-500">
                    B2C · End Users
                  </p>
                  {b2cEntities.map(({ icon: Icon, label }, i) =>
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      x: 20
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0
                    }}
                    viewport={{
                      once: true
                    }}
                    transition={{
                      delay: 0.2 + i * 0.1
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                    
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 bg-[#ec4899]/10 text-[#ec4899]">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">
                        {label}
                      </span>
                      <span className="ml-auto text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-500">
                        benefit
                      </span>
                    </motion.div>
                  )}
                </div>
              </div>

              <div className="relative rounded-2xl px-6 py-6 text-center bg-white border border-slate-200 shadow-sm overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#3b9eff] to-[#ec4899]" />
                <p className="text-base md:text-lg font-bold leading-relaxed text-slate-700">
                  Healthcare organisations license Pillaxia to support their
                  patients while patients and families experience{' '}
                  <span className="text-[#ec4899]">
                    tangible day-to-day benefit.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}