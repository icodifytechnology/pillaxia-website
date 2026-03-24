'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ClockIcon,
  CalendarIcon,
  BookmarkIcon,
  SparklesIcon,
  ChevronUpIcon,
  LinkIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'lucide-react';
import { useBlogPost, useBlogPosts } from '../lib/api';

const ACCENT  = '#3b9eff';
const MAGENTA = '#ec4899';
const TEAL    = '#2dd4bf';

/* ─────────────────────────────────────────
   Helpers
───────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Reveal({ children, delay = 0, className = '' }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

function Blob({ className, color = '#3b9eff', size = 400, opacity = 0.1 }: {
  className?: string; color?: string; size?: number; opacity?: number;
}) {
  return (
    <div className={`pointer-events-none absolute rounded-full ${className}`} style={{
      width: size, height: size, background: color,
      filter: `blur(${size * 0.3}px)`, opacity,
    }} />
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase" style={{
      background: 'rgba(59,158,255,0.1)', color: ACCENT,
      border: '1px solid rgba(59,158,255,0.3)',
    }}>
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────
   Reading Progress Bar
───────────────────────────────────────── */
function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handler = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (el.scrollTop / total) * 100 : 0);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px]" style={{ background: 'rgba(255,255,255,0.06)' }}>
      <div
        className="h-full"
        style={{
          width: `${progress}%`,
          background: `linear-gradient(90deg, ${ACCENT}, ${MAGENTA})`,
          boxShadow: `0 0 8px ${MAGENTA}80`,
          transition: 'width 80ms linear',
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   Share Button
───────────────────────────────────────── */
function ShareButton({ icon, label, onClick }: {
  icon: React.ReactNode; label: string; onClick: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const handle = () => {
    onClick();
    if (label === 'Copy link') { setCopied(true); setTimeout(() => setCopied(false), 2000); }
  };
  return (
    <button
      onClick={handle}
      title={label}
      className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200"
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        color: copied ? TEAL : '#94a3b8',
      }}
    >
      {icon}
      <span className="hidden sm:inline">{copied ? 'Copied!' : label}</span>
    </button>
  );
}

/* ─────────────────────────────────────────
   Table of Contents
───────────────────────────────────────── */
function TableOfContents({ headings }: { headings: { id: string; text: string; level: number }[] }) {
  const [active, setActive] = useState('');
  useEffect(() => {
    const handler = () => {
      for (let i = headings.length - 1; i >= 0; i--) {
        const el = document.getElementById(headings[i].id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(headings[i].id);
          return;
        }
      }
      setActive('');
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [headings]);

  if (!headings.length) return null;
  return (
    <div className="rounded-2xl p-6" style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.09)',
    }}>
      <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4" style={{ color: ACCENT }}>
        Contents
      </p>
      <nav className="space-y-1">
        {headings.map(h => (
          <a
            key={h.id}
            href={`#${h.id}`}
            className="block py-1.5 text-xs leading-snug transition-all duration-200"
            style={{
              paddingLeft: `${(h.level - 2) * 12 + (active === h.id ? 8 : 10)}px`,
              color: active === h.id ? ACCENT : 'rgba(148,163,184,0.8)',
              fontWeight: active === h.id ? 700 : 500,
              borderLeft: active === h.id ? `2px solid ${ACCENT}` : '2px solid transparent',
            }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            {h.text}
          </a>
        ))}
      </nav>
    </div>
  );
}

/* ─────────────────────────────────────────
   Related Post Card
───────────────────────────────────────── */
function RelatedCard({ post }: { post: any }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article
        className="relative rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1"
        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.border = '1px solid rgba(59,158,255,0.3)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 28px rgba(59,158,255,0.08)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.border = '1px solid rgba(255,255,255,0.09)';
          (e.currentTarget as HTMLElement).style.boxShadow = 'none';
        }}
      >
        {post.imageUrl && (
          <div className="aspect-[16/9] overflow-hidden" style={{ background: 'rgba(59,158,255,0.06)' }}>
            <img src={post.imageUrl} alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        )}
        <div className="p-6 flex flex-col flex-1">
          <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-3 self-start" style={{
            background: 'rgba(59,158,255,0.12)', color: ACCENT, border: '1px solid rgba(59,158,255,0.25)',
          }}>
            {post.category}
          </span>
          <h4 className="text-base font-bold text-white mb-2 line-clamp-2 group-hover:text-[#3b9eff] transition-colors">
            {post.title}
          </h4>
          <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 flex-1">{post.excerpt}</p>
          <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <span className="text-xs text-slate-500">{post.readTime}</span>
            <ArrowRightIcon className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#3b9eff] group-hover:translate-x-0.5 transition-all" />
          </div>
        </div>
      </article>
    </Link>
  );
}

/* ─────────────────────────────────────────
   Article Body Renderer (markdown-ish)
───────────────────────────────────────── */
function ArticleBody({ body, headings }: { body: string; headings: { id: string; text: string; level: number }[] }) {
  if (!body) return null;
  const lines = body.split('\n');
  let headingIdx = 0;
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      const id = headings[headingIdx]?.id || `h-${i}`;
      headingIdx++;
      elements.push(
        <h2 key={i} id={id} className="text-3xl font-extrabold text-white mt-12 mb-5 leading-tight scroll-mt-24"
          style={{ borderLeft: `4px solid ${ACCENT}`, paddingLeft: '1rem' }}>
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      const id = headings[headingIdx]?.id || `h-${i}`;
      headingIdx++;
      elements.push(
        <h3 key={i} id={id} className="text-xl font-bold mt-8 mb-3 leading-tight scroll-mt-24" style={{ color: TEAL }}>
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={i} className="relative pl-5 pr-4 py-4 rounded-xl my-6" style={{
          background: 'rgba(59,158,255,0.06)', border: '1px solid rgba(59,158,255,0.15)',
        }}>
          <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full"
            style={{ background: `linear-gradient(to bottom, ${ACCENT}, ${MAGENTA})` }} />
          <p className="text-base italic text-slate-300 leading-relaxed">{line.slice(2)}</p>
        </blockquote>
      );
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      const items: string[] = [];
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-3 my-5">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-slate-300">
              <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{
                background: `${ACCENT}18`, border: `1.5px solid ${ACCENT}45`,
              }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              </div>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ''));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="space-y-3 my-5">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-slate-300">
              <span className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold"
                style={{ background: `linear-gradient(135deg, ${ACCENT}, ${MAGENTA})`, color: 'white' }}>
                {j + 1}
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      );
      continue;
    } else if (line === '---') {
      elements.push(
        <div key={i} className="my-10 h-px" style={{
          background: `linear-gradient(90deg, transparent, ${ACCENT}30, ${MAGENTA}30, transparent)`,
        }} />
      );
    } else if (line.trim() !== '') {
      elements.push(
        <p key={i} className="text-slate-300 leading-[1.85] mb-5 text-[1.05rem]">{line}</p>
      );
    }
    i++;
  }
  return <>{elements}</>;
}

/* ─────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────── */
export default function BlogDetailPage({ slug }: string | any) {
  const params = useParams();
  const router = useRouter();

  const { data: post, isLoading } = useBlogPost(slug);
  const { data: allPosts } = useBlogPosts();

  const [bookmarked, setBookmarked] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const relatedPosts = allPosts
    ?.filter(p => p.slug !== slug && p.category === post?.category)
    .slice(0, 3) ?? [];

  const headings = React.useMemo(() => {
    if (!post?.body) return [];
    const matches = [...post.body.matchAll(/^(#{2,3})\s+(.+)$/gm)];
    return matches.map((m, i) => ({
      id: `heading-${i}`,
      text: m[2],
      level: m[1].length,
    }));
  }, [post?.body]);

  useEffect(() => {
    const handler = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  /* ── Loading skeleton ── */
  if (isLoading) return (
    <main className="overflow-x-hidden mesh-dark min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="animate-pulse space-y-6">
          <div className="h-3 w-24 bg-white/10 rounded-full" />
          <div className="h-12 w-3/4 bg-white/10 rounded-2xl" />
          <div className="h-3 w-1/2 bg-white/10 rounded-full" />
          <div className="aspect-[16/8] bg-white/5 rounded-3xl mt-8" />
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-4 bg-white/10 rounded-full" style={{ width: `${65 + Math.random() * 35}%` }} />
          ))}
        </div>
      </div>
    </main>
  );

  /* ── Not found ── */
  if (!post) return (
    <main className="overflow-x-hidden mesh-dark min-h-screen flex items-center justify-center pt-32">
      <div className="text-center space-y-4">
        <p className="text-slate-400 text-lg">Article not found.</p>
        <Link href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
          style={{ color: ACCENT }}>
          <ArrowLeftIcon className="w-4 h-4" /> Back to Blog
        </Link>
      </div>
    </main>
  );

  const authorInitials = post.author?.split(' ').map((n: string) => n[0]).join('').slice(0, 2) ?? 'P';

  return (
    <main className="overflow-x-hidden">
      <ReadingProgressBar />

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-0 overflow-hidden mesh-dark">
        <Blob className="-top-40 -left-40" color="#3b9eff" size={600} opacity={0.12} />
        <Blob className="top-1/3 right-0"  color="#ec4899" size={500} opacity={0.08} />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, #3b9eff 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }} />

        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">

          {/* Breadcrumb */}
          <Reveal>
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-slate-400 line-clamp-1 max-w-[260px]">{post.title}</span>
            </nav>
          </Reveal>

          {/* Meta row */}
          <Reveal delay={60}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs font-bold px-3 py-1 rounded-full" style={{
                background: 'rgba(59,158,255,0.12)', color: ACCENT,
                border: '1px solid rgba(59,158,255,0.3)',
              }}>
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <CalendarIcon className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <ClockIcon className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </Reveal>

          {/* Title */}
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6 max-w-4xl">
              {post.title}
            </h1>
          </Reveal>

          {/* Excerpt */}
          <Reveal delay={140}>
            <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl">{post.excerpt}</p>
          </Reveal>

          {/* Author + actions */}
          <Reveal delay={180}>
            <div className="flex flex-wrap items-center justify-between gap-4 pb-10 pt-2"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${ACCENT}, ${MAGENTA})` }}>
                  {authorInitials}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{post.author}</p>
                  <p className="text-xs text-slate-500">Pillaxia Team</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <ShareButton
                  icon={<TwitterIcon className="w-3.5 h-3.5" />}
                  label="Twitter"
                  onClick={() => window.open(
                    `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`,
                    '_blank'
                  )}
                />
                <ShareButton
                  icon={<LinkedinIcon className="w-3.5 h-3.5" />}
                  label="LinkedIn"
                  onClick={() => window.open(
                    `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
                    '_blank'
                  )}
                />
                <ShareButton
                  icon={<LinkIcon className="w-3.5 h-3.5" />}
                  label="Copy link"
                  onClick={() => navigator.clipboard?.writeText(shareUrl)}
                />
                <button
                  onClick={() => setBookmarked(b => !b)}
                  title="Bookmark"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200"
                  style={{
                    background: bookmarked ? `${MAGENTA}18` : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${bookmarked ? MAGENTA + '40' : 'rgba(255,255,255,0.1)'}`,
                    color: bookmarked ? MAGENTA : '#94a3b8',
                  }}
                >
                  <BookmarkIcon className="w-3.5 h-3.5" fill={bookmarked ? MAGENTA : 'none'} />
                  <span className="hidden sm:inline">{bookmarked ? 'Saved' : 'Save'}</span>
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      {post.imageUrl && (
        <section className="relative overflow-hidden mesh-dark">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            <Reveal>
              <div className="relative rounded-3xl overflow-hidden aspect-[21/9]"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(to bottom, transparent 50%, rgba(1,13,62,0.8) 100%)',
                }} />
                <div className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: `linear-gradient(90deg, ${ACCENT}, ${MAGENTA}, ${TEAL})` }} />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── BODY + SIDEBAR ── */}
      <section className="relative py-16 overflow-hidden mesh-dark">
        <div className="absolute top-0 left-0 right-0 neon-line" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">

            {/* Article body */}
            <Reveal className="min-w-0">
              <ArticleBody body={post.body ?? ''} headings={headings} />

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4" style={{ color: ACCENT }}>
                    Tags
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                      <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-semibold" style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        color: '#94a3b8',
                      }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Author bio */}
              <div className="mt-10 p-6 rounded-2xl" style={{
                background: 'rgba(59,158,255,0.05)',
                border: '1px solid rgba(59,158,255,0.15)',
              }}>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-base font-bold text-white shrink-0"
                    style={{ background: `linear-gradient(135deg, ${ACCENT}, ${MAGENTA})` }}>
                    {authorInitials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-0.5">{post.author}</p>
                    <p className="text-[10px] font-bold tracking-[0.15em] uppercase mb-2" style={{ color: ACCENT }}>
                      Pillaxia Team
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Writing about chronic care, digital health, and the future of patient empowerment at Pillaxia.
                    </p>
                  </div>
                </div>
              </div>

              {/* Share bottom row */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <p className="text-sm font-semibold text-slate-400 mr-1">Share this article:</p>
                <ShareButton
                  icon={<TwitterIcon className="w-3.5 h-3.5" />}
                  label="Twitter"
                  onClick={() => window.open(
                    `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`,
                    '_blank'
                  )}
                />
                <ShareButton
                  icon={<LinkedinIcon className="w-3.5 h-3.5" />}
                  label="LinkedIn"
                  onClick={() => window.open(
                    `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
                    '_blank'
                  )}
                />
                <ShareButton
                  icon={<LinkIcon className="w-3.5 h-3.5" />}
                  label="Copy link"
                  onClick={() => navigator.clipboard?.writeText(shareUrl)}
                />
              </div>
            </Reveal>

            {/* Sticky sidebar */}
            <aside className="hidden lg:flex flex-col gap-6 sticky top-24">
              <TableOfContents headings={headings} />

              <div className="rounded-2xl p-6 overflow-hidden relative" style={{
                background: `linear-gradient(135deg, ${ACCENT}12, ${MAGENTA}0a)`,
                border: `1px solid ${ACCENT}25`,
              }}>
                <div className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, ${ACCENT}, ${MAGENTA})` }} />
                <div className="flex items-center gap-2 mb-3">
                  <SparklesIcon className="w-4 h-4" style={{ color: ACCENT }} />
                  <p className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: ACCENT }}>
                    About Pillaxia
                  </p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Pillaxia is a connected care platform bridging patients, clinicians, and caregivers through AI-powered medication management.
                </p>
                <Link href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold transition-all hover:gap-2.5"
                  style={{ color: ACCENT }}>
                  Learn more <ArrowRightIcon className="w-3 h-3" />
                </Link>
              </div>

              <div className="rounded-2xl p-6" style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.09)',
              }}>
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase mb-2" style={{ color: MAGENTA }}>
                  Newsletter
                </p>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Get the latest chronic care insights delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded-xl text-xs outline-none text-white placeholder-slate-600 mb-3"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                />
                <button
                  className="w-full py-2 rounded-xl text-xs font-bold text-white transition-all hover:opacity-90"
                  style={{ background: `linear-gradient(90deg, ${ACCENT}, ${MAGENTA})` }}>
                  Subscribe
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── RELATED POSTS ── */}
      {relatedPosts.length > 0 && (
        <section className="relative py-24 overflow-hidden mesh-dark">
          <div className="absolute top-0 left-0 right-0 neon-line" />
          <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
            <Reveal className="mb-12">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <Pill>More Reading</Pill>
                  <h2 className="text-3xl font-extrabold text-white mt-3">Related Articles</h2>
                </div>
                <Link href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                  style={{ color: ACCENT }}>
                  View all posts <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((p, i) => (
                <Reveal key={p.id} delay={i * 80}>
                  <RelatedCard post={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="relative py-24 overflow-hidden mesh-dark">
        <div className="absolute top-0 left-0 right-0 neon-line" />
        <Blob className="bottom-0 right-0" color="#ec4899" size={400} opacity={0.08} />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-3xl">
          <Reveal>
            <Pill>Stay in the Loop</Pill>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-6 mb-6">
              Never miss a story<br />
              <span className="neon-text">from Pillaxia</span>
            </h2>
            <p className="text-slate-300 text-lg mb-10">
              Subscribe to our newsletter for the latest in chronic care, digital health, and patient empowerment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-4 rounded-full outline-none text-white placeholder-slate-500"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
              />
              <button
                className="shrink-0 inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm transition-all hover:gap-4 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
                style={{ background: 'linear-gradient(90deg, #3b9eff, #ec4899)', color: '#fff' }}>
                Subscribe <ArrowRightIcon size={15} />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Back to top */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${ACCENT}, ${MAGENTA})`,
            boxShadow: `0 4px 20px ${MAGENTA}50`,
          }}
        >
          <ChevronUpIcon className="w-5 h-5 text-white" />
        </button>
      )}
    </main>
  );
}