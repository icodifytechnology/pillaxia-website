'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  ExternalLinkIcon,
  NewspaperIcon,
  CalendarIcon,
  MapPinIcon,
  MonitorIcon,
  GlobeIcon,
} from 'lucide-react';
import {
  PRESS_RELEASES,
  NEWS_ITEMS,
  EVENTS,
  type PressRelease,
  type NewsItem,
  type Event,
} from '@/src/lib/press';

const ACCENT  = '#3b9eff';
const MAGENTA = '#ec4899';
const TEAL    = '#2dd4bf';

// ─── Tab definitions ──────────────────────────────────────────────────────────
// Reorder or rename tabs here if needed.
const TABS = [
  { label: 'Events',          count: EVENTS.length },
  { label: 'Press Releases',  count: PRESS_RELEASES.length },
  { label: 'News & Coverage', count: NEWS_ITEMS.length },
] as const;

type TabLabel = typeof TABS[number]['label'];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function useInView(threshold = 0.12) {
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

function Blob({ className, color = ACCENT, size = 400, opacity = 0.1 }: {
  className?: string; color?: string; size?: number; opacity?: number;
}) {
  return (
    <div className={`pointer-events-none absolute rounded-full ${className}`}
      style={{ width: size, height: size, background: color, filter: `blur(${size * 0.3}px)`, opacity }} />
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase"
      style={{ background: 'rgba(59,158,255,0.1)', color: ACCENT, border: '1px solid rgba(59,158,255,0.3)' }}>
      {children}
    </span>
  );
}

// ─── Category badge ───────────────────────────────────────────────────────────
function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="text-[10px] font-bold px-3 py-1 rounded-full"
      style={{ background: 'rgba(59,158,255,0.85)', color: '#fff', backdropFilter: 'blur(8px)' }}>
      {label}
    </span>
  );
}

// ─── Status badge (events only) ───────────────────────────────────────────────
function StatusBadge({ status }: { status: 'open' | 'closed' }) {
  const isOpen = status === 'open';
  return (
    <span className="text-[10px] font-bold px-3 py-1 rounded-full"
      style={{
        background: isOpen ? 'rgba(16,185,129,0.85)' : 'rgba(100,116,139,0.75)',
        color: '#fff',
        backdropFilter: 'blur(8px)',
      }}>
      {isOpen ? 'Open' : 'Closed'}
    </span>
  );
}

// ─── Press / News card ────────────────────────────────────────────────────────
function PressCard({
  category, title, excerpt, date, image, onClick,
}: {
  category: string; title: string; excerpt: string;
  date: string; image?: string; onClick: () => void;
}) {
  const fallback = '/events/fallback.png';
  return (
    <article
      className="group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}
      onClick={onClick}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.border = `1px solid rgba(59,158,255,0.35)`;
        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px rgba(59,158,255,0.09)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.border = '1px solid rgba(255,255,255,0.09)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      {/* Accent top bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: `linear-gradient(90deg, ${ACCENT}, ${MAGENTA})` }} />

      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img src={image ?? fallback} alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => { e.currentTarget.src = fallback; }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        <span className="absolute top-4 left-4">
          <CategoryBadge label={category} />
        </span>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-[11px] text-slate-500 font-medium mb-3">{date}</p>
        <h3 className="text-base font-bold text-white mb-3 leading-snug group-hover:text-[#3b9eff] transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 flex-1">{excerpt}</p>
        <span className="inline-flex items-center gap-1 mt-5 text-sm font-bold" style={{ color: ACCENT }}>
          Read more
          <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </span>
      </div>
    </article>
  );
}

// ─── Event card ───────────────────────────────────────────────────────────────
function EventCard({ event, onClick }: { event: Event; onClick: () => void }) {
  const fallback = '/events/fallback.png';
  const typeLabel = event.type.charAt(0).toUpperCase() + event.type.slice(1);

  return (
    <article
      className="group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}
      onClick={onClick}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.border = `1px solid rgba(59,158,255,0.35)`;
        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px rgba(59,158,255,0.09)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.border = '1px solid rgba(255,255,255,0.09)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{ background: `linear-gradient(to bottom, ${ACCENT}, ${MAGENTA})` }} />

      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img src={event.image ?? fallback} alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => { e.currentTarget.src = fallback; }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        <span className="absolute top-4 left-4"><CategoryBadge label={typeLabel} /></span>
        <span className="absolute top-4 right-4"><StatusBadge status={event.status} /></span>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="flex items-center gap-1 text-[11px] text-slate-400">
            <CalendarIcon className="w-3 h-3" style={{ color: ACCENT }} />
            {event.date}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-slate-400">
            <MapPinIcon className="w-3 h-3" style={{ color: ACCENT }} />
            {event.location}
          </span>
        </div>

        <h3 className="text-base font-bold text-white mb-3 leading-snug group-hover:text-[#3b9eff] transition-colors line-clamp-2">
          {event.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 flex-1">{event.excerpt}</p>
        <span className="inline-flex items-center gap-1 mt-5 text-sm font-bold" style={{ color: ACCENT }}>
          View details
          <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </span>
      </div>
    </article>
  );
}

// ─── Detail panel (slide-in drawer) ──────────────────────────────────────────
type DetailItem =
  | { kind: 'press'; data: PressRelease }
  | { kind: 'news';  data: NewsItem }
  | { kind: 'event'; data: Event };

function DetailPanel({ item, onClose }: { item: DetailItem; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const isEvent = item.kind === 'event';
  const ev = isEvent ? (item.data as Event) : null;
  const pr = !isEvent ? (item.data as PressRelease | NewsItem) : null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-black/65 backdrop-blur-sm" onClick={onClose} />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-lg overflow-y-auto"
        style={{ background: '#07101f', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>

        {/* Drawer header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 p-6"
          style={{ background: '#07101f', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="flex flex-wrap gap-2">
            {isEvent && ev ? (
              <>
                <CategoryBadge label={ev.type.charAt(0).toUpperCase() + ev.type.slice(1)} />
                <StatusBadge status={ev.status} />
              </>
            ) : pr ? (
              <CategoryBadge label={pr.category} />
            ) : null}
          </div>
          <button onClick={onClose} aria-label="Close panel"
            className="text-slate-400 hover:text-white transition-colors shrink-0 text-xl leading-none mt-0.5">
            ✕
          </button>
        </div>

        {/* Drawer body */}
        <div className="p-6 space-y-6">

          {/* Hero image */}
          {(isEvent ? ev?.image : pr?.image) && (
            <div className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <img src={isEvent ? ev!.image : pr!.image} alt="cover"
                className="w-full object-cover" style={{ maxHeight: '240px' }} />
            </div>
          )}

          {/* Title */}
          <h2 className="text-2xl font-extrabold text-white leading-snug">
            {isEvent ? ev!.title : pr!.title}
          </h2>

          {/* Event-specific meta block */}
          {isEvent && ev && (
            <div className="rounded-2xl p-5 space-y-3"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              {ev.datetime && (
                <div className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CalendarIcon className="w-4 h-4 mt-0.5 shrink-0" style={{ color: ACCENT }} />
                  <span>{ev.datetime}</span>
                </div>
              )}
              {ev.timezone && (
                <div className="flex items-start gap-2.5 text-sm text-slate-400">
                  <GlobeIcon className="w-4 h-4 mt-0.5 shrink-0" style={{ color: ACCENT }} />
                  <span>{ev.timezone}</span>
                </div>
              )}
              {ev.location && (
                <div className="flex items-start gap-2.5 text-sm text-slate-300">
                  <MapPinIcon className="w-4 h-4 mt-0.5 shrink-0" style={{ color: ACCENT }} />
                  <span>{ev.location}</span>
                </div>
              )}
              {ev.platform && (
                <div className="flex items-start gap-2.5 text-sm text-slate-300">
                  <MonitorIcon className="w-4 h-4 mt-0.5 shrink-0" style={{ color: ACCENT }} />
                  {ev.platformLink ? (
                    <a href={ev.platformLink} target="_blank" rel="noopener noreferrer"
                      className="hover:underline" style={{ color: ACCENT }}>
                      {ev.platform}
                    </a>
                  ) : <span>{ev.platform}</span>}
                </div>
              )}
            </div>
          )}

          {/* Date for press/news */}
          {!isEvent && pr?.date && (
            <p className="text-xs text-slate-500 font-medium -mt-2">{pr.date}</p>
          )}

          {/* Full description / content */}
          <p className="text-slate-300 leading-relaxed text-sm whitespace-pre-line">
            {isEvent
              ? ev!.fullDescription
              : (pr as PressRelease).fullContent}
          </p>

          {/* Highlights (events) */}
          {isEvent && ev?.highlights && ev.highlights.length > 0 && (
            <div className="rounded-2xl p-5"
              style={{ background: 'rgba(59,158,255,0.05)', border: '1px solid rgba(59,158,255,0.15)' }}>
              <p className="text-[10px] font-bold tracking-[0.18em] uppercase mb-3" style={{ color: ACCENT }}>
                Key Highlights
              </p>
              <ul className="space-y-2">
                {ev.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-slate-300">{h}</li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA button */}
          {isEvent
            ? ev?.url && ev.status === 'open' && (
                <a href={ev.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all hover:gap-4"
                  style={{ background: `linear-gradient(90deg, ${ACCENT}, ${MAGENTA})`, color: '#fff' }}>
                  Join Event <ExternalLinkIcon className="w-4 h-4" />
                </a>
              )
            : (
                <a href={(pr as PressRelease | NewsItem).url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all hover:gap-4"
                  style={{ background: `linear-gradient(90deg, ${ACCENT}, ${MAGENTA})`, color: '#fff' }}>
                  Read Full Article <ExternalLinkIcon className="w-4 h-4" />
                </a>
              )
          }
        </div>
      </div>
    </>
  );
}

// ─── Empty state ─────────────────────────────────────────────────────────────
function EmptyState({ label }: { label: string }) {
  return (
    <div className="col-span-2 text-center py-20 rounded-3xl"
      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
      <p className="text-slate-400 text-sm">No {label} yet — check back soon.</p>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export function PressPage() {
  const [activeTab, setActiveTab] = useState<TabLabel>('Events');
  const [selected, setSelected] = useState<DetailItem | null>(null);

  return (
    <main className="overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden mesh-dark">
        <Blob className="-top-40 -left-40" color={ACCENT}   size={600} opacity={0.14} />
        <Blob className="top-1/3 right-0"  color={MAGENTA}  size={500} opacity={0.09} />
        <Blob className="bottom-0 left-1/3" color={TEAL}    size={400} opacity={0.09} />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, #3b9eff 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }} />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Reveal className="flex flex-col items-center text-center space-y-7 max-w-3xl mx-auto">
            <Pill><NewspaperIcon size={11} /> Newsroom</Pill>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white" style={{ lineHeight: 1.08 }}>
              Press &amp; <span className="neon-text">Media</span>
            </h1>

            <p className="text-lg leading-relaxed text-slate-300 max-w-xl">
              The latest announcements, news coverage, and events from Pillaxia.
            </p>

            {/* Tab switcher */}
            <div className="inline-flex p-1 rounded-full"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
              {TABS.map(({ label, count }) => (
                <button key={label} onClick={() => setActiveTab(label)}
                  className="relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap"
                  style={activeTab === label
                    ? { background: `linear-gradient(90deg, ${ACCENT}, ${MAGENTA})`, color: '#fff' }
                    : { color: '#94a3b8' }
                  }>
                  {label}
                  {count > 0 && (
                    <span className="ml-1.5 text-[10px] font-bold opacity-70">
                      {count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="relative py-24 overflow-hidden mesh-dark">
        <div className="absolute top-0 left-0 right-0 neon-line" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">

            {/* Events tab */}
            {activeTab === 'Events' && (
              EVENTS.length > 0
                ? EVENTS.map((ev, i) => (
                    <Reveal key={ev.id} delay={i * 80}>
                      <EventCard event={ev} onClick={() => setSelected({ kind: 'event', data: ev })} />
                    </Reveal>
                  ))
                : <EmptyState label="events" />
            )}

            {/* Press Releases tab */}
            {activeTab === 'Press Releases' && (
              PRESS_RELEASES.length > 0
                ? PRESS_RELEASES.map((pr, i) => (
                    <Reveal key={pr.id} delay={i * 80}>
                      <PressCard
                        category={pr.category}
                        title={pr.title}
                        excerpt={pr.excerpt}
                        date={pr.date}
                        image={pr.image}
                        onClick={() => setSelected({ kind: 'press', data: pr })}
                      />
                    </Reveal>
                  ))
                : <EmptyState label="press releases" />
            )}

            {/* News & Coverage tab */}
            {activeTab === 'News & Coverage' && (
              NEWS_ITEMS.length > 0
                ? NEWS_ITEMS.map((n, i) => (
                    <Reveal key={n.id} delay={i * 80}>
                      <PressCard
                        category={n.category}
                        title={n.title}
                        excerpt={n.excerpt}
                        date={n.date}
                        image={n.image}
                        onClick={() => setSelected({ kind: 'news', data: n })}
                      />
                    </Reveal>
                  ))
                : <EmptyState label="news coverage" />
            )}

          </div>
        </div>
      </section>

      {/* ── MEDIA CONTACT CTA ── */}
      <section className="relative py-24 overflow-hidden mesh-dark">
        <div className="absolute top-0 left-0 right-0 neon-line" />
        <Blob className="bottom-0 right-0" color={MAGENTA} size={400} opacity={0.08} />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-3xl">
          <Reveal>
            <Pill>Media Enquiries</Pill>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-6 mb-5">
              Working on a story?<br />
              <span className="neon-text">Let's connect</span>
            </h2>
            <p className="text-slate-300 text-lg mb-10">
              For press enquiries, interview requests, or media assets, reach out
              to our communications team.
            </p>
            <a href="mailto:connect@pillaxia.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:gap-4 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
              style={{ background: `linear-gradient(90deg, ${ACCENT}, ${MAGENTA})`, color: '#fff' }}>
              Contact Press Team <ExternalLinkIcon size={15} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Detail panel */}
      {selected && <DetailPanel item={selected} onClose={() => setSelected(null)} />}

    </main>
  );
}