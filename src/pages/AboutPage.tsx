import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HeartIcon,
  ZapIcon,
  UsersIcon,
  GlobeIcon,
  SparklesIcon,
  PlayIcon,
  ArrowRightIcon,
  ShieldCheckIcon } from
'lucide-react';

// Add to your index.html:
// <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet" />

// Palette
// Navy:      #040F4B  |  Sky:    rgb(14,165,233)  |  Royal: #1A3BAE
// Muted:     #5B6FA8  |  Soft:   #E8EDF8          |  Light: #F2F5FC

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {setVisible(true);obs.disconnect();}
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Reveal({
  children,
  delay = 0,
  className = ''




}: {children: React.ReactNode;delay?: number;className?: string;}) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`
      }}>
      
      {children}
    </div>);

}

function Blob({
  className,
  color = 'rgb(14,165,233)',
  size = 400,
  opacity = 0.1





}: {className?: string;color?: string;size?: number;opacity?: number;}) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        filter: `blur(${size * 0.3}px)`,
        opacity
      }} />);


}

function Pill({ children }: {children: React.ReactNode;}) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase"
      style={{
        background: 'rgba(14,165,233,0.1)',
        color: 'rgb(14,165,233)',
        border: '1px solid rgba(14,165,233,0.25)'
      }}>
      
      {children}
    </span>);

}

export function AboutPage() {
  return (
    <main
      style={{ background: '#FFFFFF', color: '#040F4B' }}
      className="overflow-x-hidden">
      

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
        
        <Blob className="-top-40 -left-40" color="rgb(14,165,233)" size={600} opacity={0.08} />
        <Blob className="top-1/3 right-0" color="#1A3BAE" size={500} opacity={0.07} />
        <Blob className="bottom-0 left-1/3" color="rgb(14,165,233)" size={400} opacity={0.06} />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: 'radial-gradient(circle, #B8C5E0 1px, transparent 1px)',
            backgroundSize: '36px 36px'
          }} />
        

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

            <Reveal className="space-y-8">
              <Pill>Our Story</Pill>
              <h1
                style={{
                  lineHeight: 1.08,
                  color: '#040F4B'
                }}
                className="text-5xl md:text-7xl font-extrabold">
                
                Why<br />
                <span
                  style={{
                    background: 'linear-gradient(90deg, rgb(14,165,233), #1A3BAE)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                  
                  Pillaxia
                </span><br />
                Exists
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: '#5B6FA8', maxWidth: 480 }}>
                Founded after firsthand experience of how isolating, fragmented, and overwhelming
                chronic illness can be as a patient and as a caregiver. Pillaxia closes that gap
                by combining clinical rigour, human empathy, and responsible technology.
              </p>
              <Link
                to="#vision"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:gap-4 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(90deg, rgb(14,165,233), #1A3BAE)',
                  color: '#fff',
                  boxShadow: '0 4px 20px rgba(14,165,233,0.3)'
                }}>
                
                Learn more <ArrowRightIcon size={15} />
              </Link>
            </Reveal>

            <Reveal delay={150}>
              <div
                className="relative rounded-3xl p-10 overflow-hidden"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(14,165,233,0.15)',
                  boxShadow: '0 8px 48px rgba(14,165,233,0.1), 0 2px 12px rgba(0,0,0,0.05)'
                }}>
                
                <Blob className="-top-20 -right-20" color="rgb(14,165,233)" size={260} opacity={0.1} />
                <svg viewBox="0 0 400 340" fill="none" className="w-full relative z-10">
                  <defs>
                    <linearGradient id="heroG1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgb(14,165,233)" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#1A3BAE" stopOpacity="0.15" />
                    </linearGradient>
                    <linearGradient id="heroG2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#B8C5E0" stopOpacity="0.5" />
                      <stop offset="60%" stopColor="rgb(14,165,233)" />
                      <stop offset="100%" stopColor="#1A3BAE" />
                    </linearGradient>
                  </defs>
                  {[[55, 90], [90, 200], [45, 295], [125, 70], [155, 315]].map(([cx, cy], i) =>
                  <circle key={i} cx={cx} cy={cy} r={6 + i * 2} fill="rgba(14,165,233,0.12)" stroke="rgba(14,165,233,0.2)" strokeWidth="1" />
                  )}
                  <path d="M90 200 C160 200 210 100 310 148" stroke="url(#heroG2)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="8 8" />
                  <path d="M125 70 C200 70 255 180 310 148" stroke="url(#heroG2)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="8 8" />
                  <path d="M155 315 C220 315 260 200 310 148" stroke="url(#heroG2)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="8 8" />
                  <circle cx="310" cy="148" r="52" fill="url(#heroG1)" stroke="rgba(14,165,233,0.3)" strokeWidth="1.5" />
                  <circle cx="310" cy="148" r="28" fill="rgb(14,165,233)" />
                  <circle cx="370" cy="96" r="18" fill="rgba(14,165,233,0.3)" stroke="rgba(14,165,233,0.4)" strokeWidth="1.5" />
                  <circle cx="360" cy="218" r="26" fill="rgba(26,59,174,0.3)" stroke="rgba(26,59,174,0.4)" strokeWidth="1.5" />
                  <path d="M310 148 L370 96" stroke="rgb(14,165,233)" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M310 148 L360 218" stroke="#1A3BAE" strokeWidth="2.5" strokeLinecap="round" />
                  <text x="50" y="88" fill="#94A3B8" fontSize="11" fontFamily="DM Sans">Fragmented</text>
                  <text x="278" y="262" fill="rgb(14,165,233)" fontSize="11" fontFamily="DM Sans" fontWeight="600">Connected</text>
                </svg>
                <div className="grid grid-cols-3 gap-4 mt-8 relative z-10 border-t border-slate-100 pt-8">
                  {[['10K+', 'Patients'], ['98%', 'Adherence'], ['24/7', 'Support']].map(([val, lbl]) =>
                  <div key={lbl} className="text-center">
                      <p
                      style={{
                        fontFamily: "'Bricolage Grotesque',sans-serif",
                        background: 'linear-gradient(90deg,rgb(14,165,233),#1A3BAE)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: 24,
                        fontWeight: 800,
                        lineHeight: 1
                      }}>
                      
                        {val}
                      </p>
                      <p style={{ color: '#94A3B8', fontSize: 11, marginTop: 4 }}>{lbl}</p>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>

          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: 'linear-gradient(to bottom, transparent, #fff)' }} />
        
      </section>

      {/* INSIGHT QUOTE BAND */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #040F4B 0%, #0A1F6B 60%, #0E2880 100%)' }}>
        
        <Blob className="-top-32 left-1/4" color="rgb(14,165,233)" size={500} opacity={0.1} />
        <Blob className="bottom-0 right-0" color="#1A3BAE" size={400} opacity={0.12} />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <Reveal>
            <Pill>The Insight</Pill>
            <div className="max-w-4xl mx-auto mt-10 relative">
              <span
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 120,
                  lineHeight: 1,
                  color: 'rgba(14,165,233,0.15)',
                  position: 'absolute',
                  top: -40,
                  left: -20,
                  userSelect: 'none'
                }}>
                
                "
              </span>
              <p
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  color: '#fff',
                  lineHeight: 1.2
                }}
                className="text-3xl md:text-5xl font-bold relative z-10">
                
                Healthcare doesn't end at the clinic door,{' '}
                <span
                  style={{
                    background: 'linear-gradient(90deg,rgb(14,165,233),#6B9FE8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                  
                  but support often does.
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section id="vision" className="relative py-28 overflow-hidden" style={{ background: '#F2F5FC' }}>
        <Blob className="-top-20 -right-20" color="rgb(14,165,233)" size={400} opacity={0.07} />
        <Blob className="bottom-0 left-0" color="#1A3BAE" size={350} opacity={0.06} />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Reveal className="text-center mb-20">
            <Pill>What Drives Us</Pill>
            <h2
              style={{
                fontFamily: "'Bricolage Grotesque',sans-serif",
                fontSize: 'clamp(2rem,4vw,2.75rem)',
                fontWeight: 800,
                marginTop: 16,
                color: '#040F4B',
                lineHeight: 1.15
              }}>
              
              Vision &amp; Mission
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

            <Reveal delay={0}>
              <div
                className="relative rounded-3xl p-10 h-full overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(14,165,233,0.15)',
                  boxShadow: '0 4px 24px rgba(14,165,233,0.08)'
                }}>
                
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                  style={{ background: 'linear-gradient(90deg,rgb(14,165,233),#1A3BAE)' }} />
                
                <Blob className="-top-16 -right-16" color="rgb(14,165,233)" size={220} opacity={0.07} />
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8"
                  style={{
                    background: 'rgba(14,165,233,0.1)',
                    border: '1px solid rgba(14,165,233,0.2)'
                  }}>
                  
                  <GlobeIcon size={24} color="rgb(14,165,233)" />
                </div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: 'rgb(14,165,233)' }}>
                  Our Vision
                </p>
                <p
                  style={{
                    fontFamily: "'Bricolage Grotesque',sans-serif",
                    color: '#040F4B',
                    fontSize: 19,
                    fontWeight: 600,
                    lineHeight: 1.6
                  }}>
                  
                  To build a global ecosystem of connected care where people with chronic conditions
                  feel empowered, supported and understood turning every medication moment into
                  an opportunity for better health and human connection.
                </p>
                <div
                  className="mt-10 h-px w-full"
                  style={{ background: 'linear-gradient(90deg, rgba(14,165,233,0.4), transparent)' }} />
                
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div
                className="relative rounded-3xl p-10 h-full overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(26,59,174,0.15)',
                  boxShadow: '0 4px 24px rgba(26,59,174,0.08)'
                }}>
                
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                  style={{ background: 'linear-gradient(90deg,#1A3BAE,rgb(14,165,233))' }} />
                
                <Blob className="-bottom-16 -left-16" color="#1A3BAE" size={220} opacity={0.07} />
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8"
                  style={{
                    background: 'rgba(26,59,174,0.08)',
                    border: '1px solid rgba(26,59,174,0.2)'
                  }}>
                  
                  <ZapIcon size={24} color="#1A3BAE" />
                </div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: '#1A3BAE' }}>
                  Our Mission
                </p>
                <p style={{ color: '#5B6FA8', fontSize: 16, lineHeight: 1.85 }}>
                  To enhance global health standards by creating a sustainable ecosystem of care,
                  making advanced medication management accessible to everyone, and transforming
                  chronic illness management into a supportive experience that reduces isolation.
                </p>
                <div
                  className="mt-10 h-px w-full"
                  style={{ background: 'linear-gradient(90deg, rgba(26,59,174,0.4), transparent)' }} />
                
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="relative py-28 overflow-hidden" style={{ background: '#fff' }}>
        <Blob className="top-0 right-0" color="rgb(14,165,233)" size={400} opacity={0.05} />
        <Blob className="bottom-0 left-0" color="#1A3BAE" size={350} opacity={0.05} />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Reveal className="text-center mb-20">
            <Pill>What We Stand For</Pill>
            <h2
              style={{
                fontFamily: "'Bricolage Grotesque',sans-serif",
                fontSize: 'clamp(2rem,4vw,2.75rem)',
                fontWeight: 800,
                marginTop: 16,
                color: '#040F4B'
              }}>
              
              Our Core Values
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
            {[
            { icon: <HeartIcon size={22} />, title: 'Empathy', color: '#E03E6B', bg: 'rgba(224,62,107,0.08)', border: 'rgba(224,62,107,0.2)', desc: 'Leading with understanding in every interaction' },
            { icon: <ZapIcon size={22} />, title: 'Empowerment', color: '#D97706', bg: 'rgba(217,119,6,0.08)', border: 'rgba(217,119,6,0.2)', desc: 'Giving patients tools to own their health' },
            { icon: <UsersIcon size={22} />, title: 'Collaboration', color: 'rgb(14,165,233)', bg: 'rgba(14,165,233,0.08)', border: 'rgba(14,165,233,0.2)', desc: 'Building together with communities' },
            { icon: <GlobeIcon size={22} />, title: 'Inclusivity', color: '#1A3BAE', bg: 'rgba(26,59,174,0.08)', border: 'rgba(26,59,174,0.2)', desc: 'Healthcare for every person, everywhere' },
            { icon: <SparklesIcon size={22} />, title: 'Innovation', color: '#7C3AED', bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.2)', desc: 'Human-centred tech that truly helps' }].
            map((val, i) =>
            <Reveal key={i} delay={i * 80}>
                <div
                className="group relative rounded-2xl p-7 flex flex-col items-center text-center h-full cursor-default transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: '#fff',
                  border: `1px solid ${val.border}`,
                  boxShadow: `0 2px 16px ${val.bg}`
                }}>
                
                  <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: val.bg, color: val.color }}>
                  
                    {val.icon}
                  </div>
                  <h3
                  style={{
                    fontFamily: "'Bricolage Grotesque',sans-serif",
                    color: '#040F4B',
                    fontSize: 15,
                    fontWeight: 700,
                    marginBottom: 8
                  }}>
                  
                    {val.title}
                  </h3>
                  <p style={{ color: '#5B6FA8', fontSize: 12, lineHeight: 1.6 }}>{val.desc}</p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="relative py-28 overflow-hidden" style={{ background: '#F2F5FC' }}>
        <Blob className="-top-20 right-0" color="rgb(14,165,233)" size={400} opacity={0.07} />
        <div className="container mx-auto px-6 md:px-12">
          <Reveal className="text-center mb-14">
            <Pill>See It In Action</Pill>
            <h2
              style={{
                fontFamily: "'Bricolage Grotesque',sans-serif",
                fontSize: 'clamp(2rem,4vw,2.75rem)',
                fontWeight: 800,
                marginTop: 16,
                color: '#040F4B'
              }}>
              
              Pillaxia in Motion
            </h2>
          </Reveal>

          <Reveal>
            <div
              className="relative rounded-3xl overflow-hidden cursor-pointer group max-w-5xl mx-auto"
              style={{
                aspectRatio: '16/9',
                background: 'linear-gradient(135deg, #040F4B 0%, #0A1F6B 50%, #0E2880 100%)',
                boxShadow: '0 20px 60px rgba(4,15,75,0.25)'
              }}>
              
              <Blob className="-top-20 -right-20" color="rgb(14,165,233)" size={400} opacity={0.2} />
              <Blob className="-bottom-20 -left-20" color="#1A3BAE" size={360} opacity={0.2} />
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                  backgroundSize: '30px 30px'
                }} />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-6">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    border: '1.5px solid rgba(255,255,255,0.3)',
                    backdropFilter: 'blur(12px)'
                  }}>
                  
                  <PlayIcon size={36} fill="#fff" color="#fff" style={{ marginLeft: 4 }} />
                </div>
                <div className="text-center">
                  <h3
                    style={{
                      fontFamily: "'Bricolage Grotesque',sans-serif",
                      color: '#fff',
                      fontSize: 28,
                      fontWeight: 700
                    }}>
                    
                    Pillaxia Promo Video
                  </h3>
                  <span
                    className="inline-block mt-3 px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
                    style={{
                      background: 'rgba(14,165,233,0.2)',
                      color: '#7EC8F0',
                      border: '1px solid rgba(14,165,233,0.35)',
                      backdropFilter: 'blur(8px)'
                    }}>
                    
                    Coming Soon
                  </span>
                </div>
              </div>
              <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" fill="none">
                <circle cx="15%" cy="25%" r="48" stroke="white" strokeWidth="1.5" strokeDasharray="5 5" />
                <circle cx="85%" cy="70%" r="36" stroke="white" strokeWidth="1.5" strokeDasharray="5 5" />
              </svg>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PILLAXIACARE + APEX-PITCH */}
      <section className="relative py-28 overflow-hidden" style={{ background: '#fff' }}>
        <Blob className="top-0 left-1/4" color="rgb(14,165,233)" size={450} opacity={0.05} />
        <Blob className="bottom-0 right-0" color="#1A3BAE" size={400} opacity={0.05} />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Reveal className="text-center mb-20">
            <Pill>PillaxiaCare</Pill>
            <h2
              style={{
                fontFamily: "'Bricolage Grotesque',sans-serif",
                fontSize: 'clamp(2rem,4vw,2.75rem)',
                fontWeight: 800,
                marginTop: 16,
                color: '#040F4B'
              }}>
              
              Our Commitment Beyond Technology
            </h2>
          </Reveal>

          <div className="max-w-6xl mx-auto space-y-24">

            {/* Block 1 */}
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <Reveal delay={0} className="order-2 md:order-1 space-y-6">
                <h3
                  style={{
                    fontFamily: "'Bricolage Grotesque',sans-serif",
                    color: '#040F4B',
                    fontSize: 28,
                    fontWeight: 700,
                    lineHeight: 1.25
                  }}>
                  
                  Community at the{' '}
                  <span
                    style={{
                      background: 'linear-gradient(90deg,rgb(14,165,233),#1A3BAE)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                    
                    heart of care
                  </span>
                </h3>
                <p style={{ color: '#5B6FA8', lineHeight: 1.85, fontSize: 16 }}>
                  PillaxiaCare is our community initiative dedicated to supporting patients,
                  caregivers, and healthcare professionals through education, workshops, and
                  outreach programmes. Rooted in empathy and lived experience, PillaxiaCare
                  extends beyond digital tools to create safe spaces for dialogue, learning,
                  and practical support.
                </p>
                <p style={{ color: '#5B6FA8', lineHeight: 1.85, fontSize: 16 }}>
                  In collaboration with the Apex Foundation in Nigeria, we are expanding our
                  philanthropic efforts to support mothers, children, and underserved communities
                  through health education, digital access, and resource support.
                </p>
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {['Education', 'Workshops', 'Outreach', 'Nigeria & Ireland'].map((tag) =>
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      background: 'rgba(14,165,233,0.08)',
                      color: 'rgb(14,165,233)',
                      border: '1px solid rgba(14,165,233,0.2)'
                    }}>
                    
                      {tag}
                    </span>
                  )}
                </div>
              </Reveal>

              <Reveal delay={120} className="order-1 md:order-2">
                <div
                  className="relative rounded-3xl p-10 aspect-square flex items-center justify-center overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #EDF4FD, #E8EDF8)',
                    border: '1px solid rgba(14,165,233,0.15)',
                    boxShadow: '0 8px 32px rgba(14,165,233,0.08)'
                  }}>
                  
                  <Blob className="-top-16 -right-16" color="rgb(14,165,233)" size={220} opacity={0.12} />
                  <svg viewBox="0 0 360 360" fill="none" className="w-full relative z-10">
                    <circle cx="180" cy="180" r="120" fill="rgba(14,165,233,0.05)" stroke="rgba(14,165,233,0.2)" strokeWidth="2" />
                    <circle cx="180" cy="180" r="80" fill="rgba(14,165,233,0.04)" stroke="rgba(14,165,233,0.12)" strokeWidth="1.5" strokeDasharray="6 6" />
                    <path d="M180 230 C180 230 120 190 120 150 C120 128 142 114 180 144 C218 114 240 128 240 150 C240 190 180 230 180 230 Z" fill="rgba(14,165,233,0.5)" stroke="rgb(14,165,233)" strokeWidth="1.5" />
                    {[0, 72, 144, 216, 288].map((deg, i) => {
                      const r = 130;
                      const x = 180 + r * Math.cos((deg - 90) * Math.PI / 180);
                      const y = 180 + r * Math.sin((deg - 90) * Math.PI / 180);
                      const colors = ['rgb(14,165,233)', '#1A3BAE', '#5B6FA8', '#2850D4', '#0A6FAE'];
                      return (
                        <g key={i}>
                          <circle cx={x} cy={y} r="22" fill={`${colors[i]}18`} stroke={colors[i]} strokeWidth="1.5" />
                          <circle cx={x} cy={y - 7} r="7" fill={colors[i]} opacity="0.7" />
                          <path d={`M${x - 10} ${y + 18} Q${x} ${y + 6} ${x + 10} ${y + 18}`} stroke={colors[i]} strokeWidth="2" fill="none" opacity="0.7" />
                        </g>);

                    })}
                    {[0, 72, 144, 216, 288].map((deg, i) => {
                      const r = 108;
                      const x = 180 + r * Math.cos((deg - 90) * Math.PI / 180);
                      const y = 180 + r * Math.sin((deg - 90) * Math.PI / 180);
                      return <line key={i} x1="180" y1="180" x2={x} y2={y} stroke="rgba(14,165,233,0.2)" strokeWidth="1.5" strokeDasharray="4 4" />;
                    })}
                  </svg>
                </div>
              </Reveal>
            </div>

            {/* Block 2 */}
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <Reveal delay={0}>
                <div
                  className="relative rounded-3xl p-10 aspect-square flex items-center justify-center overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #EDF4FD, #DDE5F6)',
                    border: '1px solid rgba(26,59,174,0.15)',
                    boxShadow: '0 8px 32px rgba(26,59,174,0.08)'
                  }}>
                  
                  <Blob className="-bottom-16 -left-16" color="#1A3BAE" size={220} opacity={0.12} />
                  <svg viewBox="0 0 360 360" fill="none" className="w-full relative z-10">
                    <circle cx="145" cy="180" r="90" fill="rgba(14,165,233,0.08)" stroke="rgba(14,165,233,0.3)" strokeWidth="2" />
                    <circle cx="215" cy="180" r="90" fill="rgba(26,59,174,0.08)" stroke="rgba(26,59,174,0.3)" strokeWidth="2" />
                    <path d="M180 106 Q215 143 215 180 Q215 217 180 254 Q145 217 145 180 Q145 143 180 106Z" fill="rgba(14,165,233,0.12)" />
                    <text x="112" y="178" textAnchor="middle" fill="rgb(14,165,233)" fontSize="11" fontFamily="DM Sans" fontWeight="700">Pillaxia</text>
                    <text x="112" y="194" textAnchor="middle" fill="rgba(14,165,233,0.6)" fontSize="10" fontFamily="DM Sans">Digital</text>
                    <text x="248" y="178" textAnchor="middle" fill="#1A3BAE" fontSize="11" fontFamily="DM Sans" fontWeight="700">Apex-Pitch</text>
                    <text x="248" y="194" textAnchor="middle" fill="rgba(26,59,174,0.6)" fontSize="10" fontFamily="DM Sans">Medical</text>
                    <text x="180" y="176" textAnchor="middle" fill="#040F4B" fontSize="10" fontFamily="DM Sans" fontWeight="700">Shared</text>
                    <text x="180" y="191" textAnchor="middle" fill="#5B6FA8" fontSize="9" fontFamily="DM Sans">Mission</text>
                    <g transform="translate(163,260)">
                      <rect x="10" y="0" width="14" height="34" rx="3" fill="rgba(14,165,233,0.25)" />
                      <rect x="0" y="10" width="34" height="14" rx="3" fill="rgba(14,165,233,0.25)" />
                    </g>
                  </svg>
                </div>
              </Reveal>

              <Reveal delay={120} className="space-y-6">
                <h3
                  style={{
                    fontFamily: "'Bricolage Grotesque',sans-serif",
                    color: '#040F4B',
                    fontSize: 28,
                    fontWeight: 700,
                    lineHeight: 1.25
                  }}>
                  
                  Apex-Pitch{' '}
                  <span
                    style={{
                      background: 'linear-gradient(90deg,#1A3BAE,rgb(14,165,233))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                    
                    Partnership
                  </span>
                </h3>
                <p style={{ color: '#5B6FA8', lineHeight: 1.85, fontSize: 16 }}>
                  Pillaxia is proud to partner with Apex-Pitch Medical, one of Nigeria's leading
                  distributors of medical devices and healthcare solutions. This collaboration brings
                  together Pillaxia's digital innovation with Apex-Pitch's deep-rooted presence
                  across hospitals and healthcare facilities in Nigeria.
                </p>
                <p style={{ color: '#5B6FA8', lineHeight: 1.85, fontSize: 16 }}>
                  Through the integration of PillaxiaRx within Apex's hospital network, we aim to
                  strengthen care coordination, empower clinicians, and improve medication adherence
                  for patients who need it most.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                  { icon: <ShieldCheckIcon size={15} />, label: 'Hospital Network Integration' },
                  { icon: <HeartIcon size={15} />, label: 'Improved Adherence' },
                  { icon: <UsersIcon size={15} />, label: 'Clinician Empowerment' },
                  { icon: <GlobeIcon size={15} />, label: 'Nigeria-wide Reach' }].
                  map(({ icon, label }) =>
                  <div
                    key={label}
                    className="flex items-center gap-2.5 rounded-xl px-4 py-3"
                    style={{
                      background: 'rgba(14,165,233,0.06)',
                      border: '1px solid rgba(14,165,233,0.18)'
                    }}>
                    
                      <span style={{ color: 'rgb(14,165,233)' }}>{icon}</span>
                      <span style={{ color: '#1A3BAE', fontSize: 12, lineHeight: 1.4, fontWeight: 500 }}>{label}</span>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ background: 'linear-gradient(155deg, #F2F5FC 0%, #E8EDF8 50%, #DDE5F6 100%)' }}>
        
        <Blob className="top-0 left-0" color="rgb(14,165,233)" size={500} opacity={0.07} />
        <Blob className="bottom-0 right-0" color="#1A3BAE" size={400} opacity={0.07} />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: 'radial-gradient(circle, #B8C5E0 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }} />
        

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-3xl">
          <Reveal>
            <Pill>Join the Movement</Pill>
            <h2
              style={{
                fontFamily: "'Bricolage Grotesque',sans-serif",
                color: '#040F4B',
                fontSize: 'clamp(2.2rem,5vw,3.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                marginTop: 20,
                marginBottom: 24
              }}>
              
              Better care starts<br />
              <span
                style={{
                  background: 'linear-gradient(90deg,rgb(14,165,233),#1A3BAE)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                
                with connection
              </span>
            </h2>
            <p style={{ color: '#5B6FA8', fontSize: 17, lineHeight: 1.75, marginBottom: 40 }}>
              We're building a future where no one navigates chronic illness alone.
              Be part of the Pillaxia ecosystem.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/early-access"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:gap-4 hover:shadow-xl"
                style={{
                  background: 'linear-gradient(90deg,rgb(14,165,233),#1A3BAE)',
                  color: '#fff',
                  boxShadow: '0 4px 20px rgba(14,165,233,0.3)'
                }}>
                
                Get Early Access <ArrowRightIcon size={15} />
              </Link>
              <Link
                to="/features"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:shadow-md"
                style={{
                  background: '#fff',
                  color: '#040F4B',
                  border: '1px solid rgba(4,15,75,0.12)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                }}>
                
                Learn more
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </main>);

}