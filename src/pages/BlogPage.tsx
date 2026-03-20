import React, { useState, useRef, useEffect } from 'react';
import { ArrowRightIcon, HomeIcon, SearchIcon, SparklesIcon } from 'lucide-react';
import { useBlogPosts } from '../lib/api';

/* ── reuse same helpers as AboutPage ── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
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
}: { children: React.ReactNode; delay?: number; className?: string; }) {
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
  color = '#3b9eff',
  size = 400,
  opacity = 0.1
}: { className?: string; color?: string; size?: number; opacity?: number; }) {
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

function Pill({ children }: { children: React.ReactNode; }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase"
      style={{
        background: 'rgba(59,158,255,0.1)',
        color: '#3b9eff',
        border: '1px solid rgba(59,158,255,0.3)'
      }}>

      {children}
    </span>);
}

/* ── Category pill toggle ── */
const CATEGORIES = ['All', 'Chronic Care', 'Digital Health', 'Innovation', 'Patient Stories'];

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { data: posts, isLoading } = useBlogPosts();

  const filteredPosts =
    posts?.filter((post) => {
      if (post.featured && activeCategory === 'All' && !searchQuery) return false;
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }) || [];

  return (
    <main className="overflow-x-hidden">

      {/* ── HERO (mirrors About hero) ── */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-24 overflow-hidden mesh-dark">
        <Blob className="-top-40 -left-40" color="#3b9eff" size={600} opacity={0.15} />
        <Blob className="top-1/3 right-0" color="#ec4899" size={500} opacity={0.10} />
        <Blob className="bottom-0 left-1/3" color="#2dd4bf" size={400} opacity={0.10} />

        {/* dot grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle, #3b9eff 1px, transparent 1px)',
            backgroundSize: '36px 36px'
          }} />


        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Reveal className="flex flex-col items-center text-center space-y-7 max-w-3xl mx-auto">

            <Pill>
              <SparklesIcon size={11} />
              Pillaxia Blog
            </Pill>

            <h1
              className="text-5xl md:text-7xl font-extrabold text-white"
              style={{ lineHeight: 1.08 }}>

              Insights &amp;{' '}
              <span className="neon-text">Perspectives</span>
            </h1>

            <p className="text-lg leading-relaxed text-slate-300 max-w-xl">
              Insights on chronic care, digital health, and innovation — from
              the Pillaxia team and collaborators.
            </p>

            {/* search bar */}
            <div className="w-full max-w-lg relative mt-2">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <SearchIcon className="w-5 h-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 rounded-2xl outline-none text-white placeholder-slate-500 transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: 'none'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(59,158,255,0.5)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59,158,255,0.12)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(255,255,255,0.12)';
                  e.currentTarget.style.boxShadow = 'none';
                }} />

            </div>

            {/* category filter pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              {CATEGORIES.map((cat) =>
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                  style={
                    activeCategory === cat ?
                      {
                        background: 'linear-gradient(90deg, #3b9eff, #ec4899)',
                        color: '#fff',
                        border: '1px solid transparent'
                      } :
                      {
                        background: 'rgba(255,255,255,0.05)',
                        color: '#94a3b8',
                        border: '1px solid rgba(255,255,255,0.12)'
                      }
                  }>

                  {cat}
                </button>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ARTICLE GRID ── */}
      <section className="relative py-28 overflow-hidden mesh-dark">
        <div className="absolute top-0 left-0 right-0 neon-line" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
          {isLoading ? (
            /* skeleton */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) =>
                <div
                  key={i}
                  className="rounded-3xl overflow-hidden animate-pulse"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>

                  <div className="aspect-[16/10] bg-white/5" />
                  <div className="p-8 space-y-3">
                    <div className="h-3 w-20 rounded-full bg-white/10" />
                    <div className="h-5 w-3/4 rounded-full bg-white/10" />
                    <div className="h-3 w-full rounded-full bg-white/10" />
                    <div className="h-3 w-2/3 rounded-full bg-white/10" />
                  </div>
                </div>
              )}
            </div>) :
            filteredPosts.length > 0 ?
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, i) =>
                  <Reveal key={post.id} delay={i * 70}>
                    <article
                      className="group relative rounded-3xl overflow-hidden cursor-pointer flex flex-col h-full transition-all duration-300 hover:-translate-y-1"
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
                      <div className="aspect-[16/10] overflow-hidden"
                        style={{ background: 'rgba(59,158,255,0.06)' }}>
                        {post.imageUrl &&
                          <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                        }
                      </div>

                      {/* content */}
                      <div className="p-8 flex-1 flex flex-col">
                        <div className="mb-4">
                          <span
                            className="text-xs font-bold px-3 py-1 rounded-full"
                            style={{
                              background: 'rgba(59,158,255,0.12)',
                              color: '#3b9eff',
                              border: '1px solid rgba(59,158,255,0.25)'
                            }}>

                            {post.category}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#3b9eff] transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-slate-400 mb-6 flex-1 line-clamp-3 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div
                          className="pt-6 flex items-center justify-between"
                          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>

                          <div className="text-xs text-slate-500 flex flex-col gap-1">
                            <span className="font-semibold text-slate-300">{post.author}</span>
                            <span>{post.date} · {post.readTime}</span>
                          </div>
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                            style={{
                              background: 'rgba(59,158,255,0.1)',
                              border: '1px solid rgba(59,158,255,0.2)',
                              color: '#3b9eff'
                            }}>

                            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
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

                  <p className="text-slate-400 text-base">
                    No articles found matching your criteria.
                  </p>
                </div>
              </Reveal>
          }
        </div>
      </section>

      {/* ── CLOSING CTA (mirrors About CTA) ── */}
      <section className="relative py-28 overflow-hidden mesh-dark">
        <div className="absolute top-0 left-0 right-0 neon-line" />
        <Blob className="bottom-0 right-0" color="#ec4899" size={400} opacity={0.08} />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-3xl">
          <Reveal>
            <Pill>Stay in the Loop</Pill>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-6 mb-6">
              Never miss a story
              <br />
              <span className="neon-text">from Pillaxia</span>
            </h2>
            <p className="text-slate-300 text-lg mb-10">
              Subscribe to our newsletter for the latest in chronic care,
              digital health, and patient empowerment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-4 rounded-full outline-none text-white placeholder-slate-500"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)'
                }} />

              <button
                className="shrink-0 inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:gap-4 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
                style={{
                  background: 'linear-gradient(90deg, #3b9eff, #ec4899)',
                  color: '#fff'
                }}>

                Subscribe <ArrowRightIcon size={15} />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

    </main>);

}