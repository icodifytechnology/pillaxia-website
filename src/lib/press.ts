/**
 * press-content.ts
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for all Press, News & Events content.
 *
 * HOW TO ADD NEW CONTENT:
 *  1. Add a new object to PRESS_RELEASES, NEWS_ITEMS, or EVENTS below.
 *  2. It will automatically appear on the Press & Media page under the
 *     matching tab — no other changes needed.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PressRelease {
  id: string
  category: string
  title: string
  excerpt: string
  fullContent: string
  date: string
  image?: string
  url: string          // external article / PDF link
}

export interface NewsItem {
  id: string
  category: string
  title: string
  excerpt: string
  fullContent: string
  date: string
  image?: string
  url: string
}

export type EventStatus = 'open' | 'closed'
export type EventType   = 'webinar' | 'workshop' | 'conference'

export interface Event {
  id: string
  type: EventType
  status: EventStatus
  title: string
  excerpt: string
  fullDescription: string
  date: string           // display date e.g. "February 17, 2025"
  datetime?: string      // e.g. "Tuesday, February 17 · 13:00 – 14:00"
  timezone?: string      // e.g. "West African Time (GMT +01:00)"
  location: string       // "Virtual Event" or physical address
  platform?: string      // e.g. "Google Meet"
  platformLink?: string  // direct join link
  url?: string           // registration / info page
  image?: string
  highlights?: string[]
}

// ─── Press Releases ───────────────────────────────────────────────────────────
// Add new press releases at the TOP of this array (newest first).

export const PRESS_RELEASES: PressRelease[] = [
  {
    id: 'pr-1',
    category: 'Press Release',
    title: 'AI-Driven Health-Tech Breakthrough',
    excerpt:
      'Pillaxia has been recognised by the All-Ireland Business Foundation with a Business All-Star accreditation for innovation in AI-powered medication management.',
    fullContent: `Pillaxia has been recognised by the All-Ireland Business Foundation with a Business All-Star accreditation for innovation in AI-powered medication management.

This prestigious recognition highlights Pillaxia's commitment to transforming healthcare through cutting-edge technology. The AI-driven platform streamlines medication management, reduces errors, and improves patient outcomes across healthcare facilities.

The All-Ireland Business Foundation's Business All-Star accreditation is awarded to companies demonstrating exceptional innovation, leadership, and impact in their respective industries.`,
    date: 'January 2025',
    url: 'https://aibf.ie/times/pillaxia-delivers-ai-driven-health-tech-breakthrough/',
    image: '/events/award.jpg',
  },
]

// ─── News & Coverage ──────────────────────────────────────────────────────────
// Add new news items at the TOP of this array (newest first).

export const NEWS_ITEMS: NewsItem[] = [
  // No news items yet — add here when coverage is published.
  // Example shape:
  // {
  //   id: 'news-1',
  //   category: 'Media Coverage',
  //   title: 'Pillaxia Featured in TechCrunch',
  //   excerpt: 'Short description shown on the card.',
  //   fullContent: 'Full article text shown in the detail panel.',
  //   date: 'March 2025',
  //   url: 'https://techcrunch.com/...',
  // },
]

// ─── Events ───────────────────────────────────────────────────────────────────
// Add new events at the TOP of this array (newest first).

export const EVENTS: Event[] = [
  {
    id: 'ev-2',
    type: 'workshop',
    status: 'closed',
    title: 'Reimagining Community-Based Support',
    excerpt:
      'A collaborative in-person workshop bringing together healthcare professionals, caregivers, patients, and innovators.',
    fullDescription: `A collaborative in-person workshop bringing together healthcare professionals, caregivers, patients, and innovators to reimagine community-based healthcare support.

This full-day workshop featured:
• Keynote presentations from leading healthcare innovators
• Interactive breakout sessions on community care models
• Panel discussions with patients and caregivers
• Networking opportunities with healthcare professionals
• Hands-on workshops on implementing community-based solutions

The event aimed to foster collaboration and share best practices in delivering patient-centered care within community settings. Participants gained practical insights and actionable strategies to improve care delivery.`,
    date: 'October 24, 2025',
    location: 'Terenure Enterprise Centre',
    image: '/events/workshop.png',
  },
  {
    id: 'ev-1',
    type: 'webinar',
    status: 'open',
    title: 'PillaxiaRx Pilot Webinar: A New Clinician Platform for Smarter, Connected Care',
    excerpt:
      'Join an exclusive pilot webinar with Enugu State hospitals to explore PillaxiaRx — a clinician web platform for medication oversight, follow-ups, and patient adherence.',
    fullDescription: `Join an exclusive pilot webinar with Enugu State hospitals to explore PillaxiaRx — a clinician web platform for medication oversight, follow-ups, and patient adherence. This session includes a live walkthrough of early wireframes and the opportunity to shape the product before it's built.`,
    date: 'February 17, 2025',
    datetime: 'Tuesday, February 17 · 13:00 – 14:00',
    timezone: 'West African Time (GMT +01:00)',
    location: 'Virtual Event',
    platform: 'Google Meet',
    platformLink: 'https://meet.google.com/mro-yadr-phf',
    url: 'https://meet.google.com/mro-yadr-phf',
    image: '/events/webinar.png',
    highlights: [
      '🩺 Built for clinicians',
      '🤝 Designed with clinicians',
      '📊 Focused on safer, connected care',
    ],
  },
]