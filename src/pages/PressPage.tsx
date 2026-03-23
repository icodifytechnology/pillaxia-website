import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedItem } from '../components/ui/AnimatedSection';
import { ExternalLinkIcon, HomeIcon, NewspaperIcon } from 'lucide-react';
import { usePressReleases } from '../lib/api';

/* ── shared helpers (same as About/Blog) ── */
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
  children, delay = 0, className = ''
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

function Blob({ className, color = '#3b9eff', size = 400, opacity = 0.1

}: {className?: string;color?: string;size?: number;opacity?: number;}) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{ width: size, height: size, background: color, filter: `blur(${size * 0.3}px)`, opacity }} />);


}

function Pill({ children }: {children: React.ReactNode;}) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase"
      style={{ background: 'rgba(59,158,255,0.1)', color: '#3b9eff', border: '1px solid rgba(59,158,255,0.3)' }}>
      
      {children}
    </span>);

}

/* ── Breadcrumb ── */
function Breadcrumb({ active }: {active: string;}) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center justify-center">
      <ol
        className="inline-flex items-center gap-1 rounded-full px-5 py-2.5 backdrop-blur-md"
        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
        
        <li>
          <Link to="/" className="flex items-center gap-1.5 text-slate-400 hover:text-[#3b9eff] transition-colors text-xs font-medium">
            <HomeIcon size={13} />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <svg className="w-4 h-4 text-slate-600" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </li>
        <li>
          <span
            className="text-xs font-bold px-3 py-1 rounded-full"
            style={{ background: 'rgba(59,158,255,0.15)', color: '#3b9eff', border: '1px solid rgba(59,158,255,0.3)' }}>
            
            {active}
          </span>
        </li>
      </ol>
    </nav>);

}

/* ── images ── */
const UNSPLASH_IMAGES = [
'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80',
'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80',
'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=600&q=80',
'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80',
'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=600&q=80',
'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80'];

const getCardImage = (id: any) =>
UNSPLASH_IMAGES[Math.abs(parseInt(String(id), 10) || 0) % UNSPLASH_IMAGES.length];

const TABS = ['Press Releases', 'News & Coverage', 'Events'];

export function PressPage() {
  const [activeTab, setActiveTab] = useState('Press Releases');
  const { data: pressReleases, isLoading } = usePressReleases();
  const filtered = pressReleases?.filter((pr) => pr.tab === activeTab) ?? [];

  return (
    <main className="overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[65vh] flex items-center pt-32 pb-24 overflow-hidden mesh-dark">
        <Blob className="-top-40 -left-40" color="#3b9eff" size={600} opacity={0.15} />
        <Blob className="top-1/3 right-0" color="#ec4899" size={500} opacity={0.10} />
        <Blob className="bottom-0 left-1/3" color="#2dd4bf" size={400} opacity={0.10} />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle, #3b9eff 1px, transparent 1px)',
            backgroundSize: '36px 36px'
          }} />
        

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Reveal className="flex flex-col items-center text-center space-y-7 max-w-3xl mx-auto">

            <Pill>
              <NewspaperIcon size={11} />
              Newsroom
            </Pill>

            <h1
              className="text-5xl md:text-7xl font-extrabold text-white"
              style={{ lineHeight: 1.08 }}>
              
              Press &amp;{' '}
              <span className="neon-text">Media</span>
            </h1>

            <p className="text-lg leading-relaxed text-slate-300 max-w-xl">
              Stay up to date with the latest announcements, news coverage, and
              events from Pillaxia.
            </p>

            {/* tab switcher inside hero */}
            <div
              className="inline-flex p-1 rounded-full mt-2"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)'
              }}>
              
              {TABS.map((tab) =>
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap"
                style={
                activeTab === tab ?
                {
                  background: 'linear-gradient(90deg, #3b9eff, #ec4899)',
                  color: '#fff'
                } :
                { color: '#94a3b8' }
                }>
                
                  {tab}
                </button>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="relative py-28 overflow-hidden mesh-dark">
        <div className="absolute top-0 left-0 right-0 neon-line" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
          {isLoading ? (
          /* skeleton */
          <div className="space-y-6">
              {[...Array(3)].map((_, i) =>
            <div
              key={i}
              className="rounded-3xl overflow-hidden animate-pulse"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              
                  <div className="h-48 bg-white/5" />
                  <div className="p-8 space-y-3">
                    <div className="h-3 w-24 rounded-full bg-white/10" />
                    <div className="h-5 w-2/3 rounded-full bg-white/10" />
                    <div className="h-3 w-full rounded-full bg-white/10" />
                    <div className="h-3 w-1/2 rounded-full bg-white/10" />
                  </div>
                </div>
            )}
            </div>) :
          filtered.length > 0 ?
          <div className="space-y-6">
              {filtered.map((item: any, i: number) =>
            <Reveal key={item.id} delay={i * 80}>
                  <article
                className="group relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.09)'
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.border = '1px solid rgba(59,158,255,0.3)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px rgba(59,158,255,0.08)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.border = '1px solid rgba(255,255,255,0.09)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}>
                
                    {/* image */}
                    <div className="relative h-52 w-full overflow-hidden">
                      <img
                    src={item.image ?? getCardImage(item.id)}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {e.currentTarget.src = getCardImage(item.id);}} />
                  
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                      {item.category &&
                  <span
                    className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(59,158,255,0.85)',
                      color: '#fff',
                      backdropFilter: 'blur(8px)'
                    }}>
                    
                          {item.category}
                        </span>
                  }
                    </div>

                    {/* body */}
                    <div className="p-8">
                      {item.date &&
                  <p className="text-xs text-slate-500 mb-3 font-medium">{item.date}</p>
                  }
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#3b9eff] transition-colors">
                        {item.title}
                      </h3>
                      {item.excerpt &&
                  <p className="text-slate-400 mb-6 leading-relaxed text-sm">{item.excerpt}</p>
                  }
                      <a
                    href={item.url ?? '#'}
                    className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors"
                    style={{ color: '#3b9eff' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={(e) => {(e.currentTarget as HTMLElement).style.color = '#5cb3ff';}}
                    onMouseLeave={(e) => {(e.currentTarget as HTMLElement).style.color = '#3b9eff';}}>
                    
                        Read full release
                        <ExternalLinkIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </article>
                </Reveal>
            )}
            </div> :

          <Reveal>
              <div
              className="text-center py-20 rounded-3xl"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
              
                <p className="text-slate-400">No items found for this category.</p>
              </div>
            </Reveal>
          }
        </div>
      </section>

      {/* ── MEDIA CONTACT CTA ── */}
      <section className="relative py-28 overflow-hidden mesh-dark">
        <div className="absolute top-0 left-0 right-0 neon-line" />
        <Blob className="bottom-0 right-0" color="#ec4899" size={400} opacity={0.08} />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-3xl">
          <Reveal>
            <Pill>Media Enquiries</Pill>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-6 mb-6">
              Working on a story?
              <br />
              <span className="neon-text">Let's connect</span>
            </h2>
            <p className="text-slate-300 text-lg mb-10">
              For press enquiries, interview requests, or media assets, reach
              out to our communications team.
            </p>
            <a
              href="mailto:press@pillaxia.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:gap-4 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
              style={{ background: 'linear-gradient(90deg, #3b9eff, #ec4899)', color: '#fff' }}>
              
              Contact Press Team
              <ExternalLinkIcon size={15} />
            </a>
          </Reveal>
        </div>
      </section>

    </main>);

}