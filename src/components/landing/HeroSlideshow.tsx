import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HeartPulseIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  SparklesIcon,
  ChevronDownIcon,
} from 'lucide-react'

const BRAND  = '#010d3e'
const BRAND2 = '#0a1a6b'
const ACCENT  = '#3b9eff'
const MAGENTA = '#ec4899'
const TEAL    = '#2dd4bf'

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

/* ─────────────────────────────────────────────────────
   SLIDE 1 ILLUSTRATION: CareHub Connected People Network
───────────────────────────────────────────────────── */
function CareHubIllustration() {
  return (
    <svg viewBox="0 0 520 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <linearGradient id="ch_g1" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor={ACCENT} /><stop offset="1" stopColor={MAGENTA} />
        </linearGradient>
        <linearGradient id="ch_g2" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor={TEAL} /><stop offset="1" stopColor={ACCENT} />
        </linearGradient>
        <linearGradient id="ch_g3" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor={MAGENTA} /><stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
        <radialGradient id="ch_center_glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={ACCENT} stopOpacity="0.3" />
          <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
        </radialGradient>
        <filter id="ch_glow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="ch_soft">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="clip_patient"><circle cx="260" cy="220" r="54" /></clipPath>
        <clipPath id="clip_clinician"><circle cx="100" cy="110" r="42" /></clipPath>
        <clipPath id="clip_carer"><circle cx="420" cy="110" r="42" /></clipPath>
        <clipPath id="clip_family"><circle cx="80" cy="340" r="38" /></clipPath>
        <clipPath id="clip_pharmacy"><circle cx="440" cy="340" r="38" /></clipPath>
      </defs>

      {/* ── Ambient glow backdrop ── */}
      <ellipse cx="260" cy="230" rx="200" ry="180" fill="url(#ch_center_glow)" opacity="0.6" />

      {/* ── Outer orbital rings ── */}
      <circle cx="260" cy="220" r="170" stroke={`${ACCENT}18`} strokeWidth="1.5" strokeDasharray="6 9" fill="none" />
      <circle cx="260" cy="220" r="130" stroke={`${TEAL}18`} strokeWidth="1" strokeDasharray="4 7" fill="none" />

      {/* ── Connection lines (dashed, gradient-tinted) ── */}
      {/* Center → Clinician */}
      <line x1="260" y1="168" x2="136" y2="122" stroke={`${TEAL}55`} strokeWidth="2" strokeDasharray="7 5" />
      {/* Center → Carer */}
      <line x1="260" y1="168" x2="384" y2="122" stroke={`${MAGENTA}55`} strokeWidth="2" strokeDasharray="7 5" />
      {/* Center → Family */}
      <line x1="222" y1="256" x2="112" y2="318" stroke={`${ACCENT}55`} strokeWidth="2" strokeDasharray="7 5" />
      {/* Center → Pharmacy */}
      <line x1="298" y1="256" x2="408" y2="318" stroke={`${TEAL}55`} strokeWidth="2" strokeDasharray="7 5" />
      {/* Cross connections */}
      <line x1="136" y1="148" x2="112" y2="308" stroke={`${ACCENT}20`} strokeWidth="1" strokeDasharray="4 7" />
      <line x1="384" y1="148" x2="408" y2="308" stroke={`${ACCENT}20`} strokeWidth="1" strokeDasharray="4 7" />
      <line x1="136" y1="110" x2="384" y2="110" stroke={`${TEAL}15`} strokeWidth="1" strokeDasharray="3 6" />
      <line x1="112" y1="340" x2="408" y2="340" stroke={`${TEAL}15`} strokeWidth="1" strokeDasharray="3 6" />

      {/* ── Travelling data pulses on lines ── */}
      <circle r="4" fill={TEAL} opacity="0.8">
        <animateMotion dur="3s" repeatCount="indefinite" path="M260,168 L136,122" />
      </circle>
      <circle r="4" fill={MAGENTA} opacity="0.8">
        <animateMotion dur="3.5s" repeatCount="indefinite" path="M260,168 L384,122" />
      </circle>
      <circle r="3.5" fill={ACCENT} opacity="0.8">
        <animateMotion dur="4s" repeatCount="indefinite" path="M222,256 L112,318" />
      </circle>
      <circle r="3.5" fill={TEAL} opacity="0.8">
        <animateMotion dur="3.8s" repeatCount="indefinite" path="M298,256 L408,318" />
      </circle>

      {/* ══════════════════════════════════
          CENTER — PATIENT
      ══════════════════════════════════ */}
      {/* Outer pulse ring */}
      <circle cx="260" cy="220" r="66" stroke={`${ACCENT}40`} strokeWidth="1.5" fill="none">
        <animate attributeName="r" values="62;78;62" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0;0.5" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="260" cy="220" r="54" fill={BRAND} stroke="url(#ch_g1)" strokeWidth="3" filter="url(#ch_glow)" />
      <circle cx="260" cy="220" r="48" fill={`${ACCENT}14`} />

      {/* Patient person illustration */}
      {/* Head */}
      <circle cx="260" cy="204" r="14" fill="white" opacity="0.92" />
      {/* Body */}
      <path d="M240 242 C240 228 280 228 280 242" fill="white" opacity="0.85" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      {/* Heart icon on chest */}
      <path d="M260 234 C256 229 249 231 249 237 C249 241 254 245 260 250 C266 245 271 241 271 237 C271 231 264 229 260 234Z" fill={MAGENTA} opacity="0.9" />
      <text x="260" y="278" textAnchor="middle" fontSize="11" fontWeight="700" fill="white" fontFamily="system-ui">Patient</text>
      <text x="260" y="291" textAnchor="middle" fontSize="9" fill={`${ACCENT}cc`} fontFamily="system-ui">Central Hub</text>

      {/* ══════════════════════════════════
          TOP-LEFT — CLINICIAN
      ══════════════════════════════════ */}
      <circle cx="100" cy="110" r="50" fill={`${TEAL}12`} />
      <circle cx="100" cy="110" r="42" fill={BRAND} stroke={TEAL} strokeWidth="2.5" />
      <circle cx="100" cy="110" r="36" fill={`${TEAL}18`} />

      {/* Clinician: stethoscope + doctor */}
      <circle cx="100" cy="98" r="11" fill="white" opacity="0.88" />
      {/* Stethoscope */}
      <path d="M88 122 Q88 114 96 114 Q104 114 104 122 Q104 130 96 130" stroke={TEAL} strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <circle cx="96" cy="130" r="4" fill={TEAL} opacity="0.9" />
      {/* Badge */}
      <rect x="82" y="136" width="36" height="12" rx="6" fill={`${TEAL}25`} stroke={`${TEAL}50`} strokeWidth="1" />
      <text x="100" y="145" textAnchor="middle" fontSize="7" fill={TEAL} fontWeight="700" fontFamily="system-ui">MD</text>

      <text x="100" y="164" textAnchor="middle" fontSize="10" fontWeight="700" fill="white" fontFamily="system-ui">Clinician</text>
      <text x="100" y="176" textAnchor="middle" fontSize="8" fill={`${TEAL}bb`} fontFamily="system-ui">Care Team</text>

      {/* ══════════════════════════════════
          TOP-RIGHT — CARER / FAMILY MEMBER
      ══════════════════════════════════ */}
      <circle cx="420" cy="110" r="50" fill={`${MAGENTA}12`} />
      <circle cx="420" cy="110" r="42" fill={BRAND} stroke={MAGENTA} strokeWidth="2.5" />
      <circle cx="420" cy="110" r="36" fill={`${MAGENTA}18`} />

      {/* Two people (family) */}
      <circle cx="412" cy="97" r="9" fill="white" opacity="0.9" />
      <circle cx="428" cy="100" r="7.5" fill="white" opacity="0.75" />
      <path d="M400 124 C400 114 424 114 424 124" fill="white" opacity="0.8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M420 126 C420 119 436 119 436 126" fill="white" opacity="0.6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />

      <text x="420" y="164" textAnchor="middle" fontSize="10" fontWeight="700" fill="white" fontFamily="system-ui">Carer</text>
      <text x="420" y="176" textAnchor="middle" fontSize="8" fill={`${MAGENTA}bb`} fontFamily="system-ui">& Family</text>

      {/* ══════════════════════════════════
          BOTTOM-LEFT — FAMILY / CAREGIVER
      ══════════════════════════════════ */}
      <circle cx="80" cy="340" r="46" fill={`${ACCENT}12`} />
      <circle cx="80" cy="340" r="38" fill={BRAND} stroke={ACCENT} strokeWidth="2.5" />
      <circle cx="80" cy="340" r="32" fill={`${ACCENT}18`} />

      {/* Person with heart (caregiver) */}
      <circle cx="80" cy="328" r="10" fill="white" opacity="0.88" />
      <path d="M66 352 C66 342 94 342 94 352" fill="white" opacity="0.8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M80 344 C77 340 72 342 72 346 C72 349 76 352 80 355 C84 352 88 349 88 346 C88 342 83 340 80 344Z" fill={MAGENTA} opacity="0.85" />

      <text x="80" y="388" textAnchor="middle" fontSize="10" fontWeight="700" fill="white" fontFamily="system-ui">Family</text>
      <text x="80" y="400" textAnchor="middle" fontSize="8" fill={`${ACCENT}bb`} fontFamily="system-ui">Support</text>

      {/* ══════════════════════════════════
          BOTTOM-RIGHT — PHARMACY / HOSPITAL
      ══════════════════════════════════ */}
      <circle cx="440" cy="340" r="46" fill={`${TEAL}12`} />
      <circle cx="440" cy="340" r="38" fill={BRAND} stroke={TEAL} strokeWidth="2.5" />
      <circle cx="440" cy="340" r="32" fill={`${TEAL}18`} />

      {/* Hospital cross */}
      <rect x="432" y="322" width="16" height="36" rx="4" fill={TEAL} opacity="0.8" />
      <rect x="422" y="332" width="36" height="16" rx="4" fill={TEAL} opacity="0.8" />
      <rect x="436" y="326" width="8" height="28" rx="2" fill="white" opacity="0.5" />
      <rect x="426" y="336" width="28" height="8" rx="2" fill="white" opacity="0.5" />

      <text x="440" y="388" textAnchor="middle" fontSize="10" fontWeight="700" fill="white" fontFamily="system-ui">Pharmacy</text>
      <text x="440" y="400" textAnchor="middle" fontSize="8" fill={`${TEAL}bb`} fontFamily="system-ui">& Hospital</text>

      {/* ══════════════════════════════════
          CareHub badge (centre top)
      ══════════════════════════════════ */}
      <rect x="185" y="32" width="150" height="36" rx="18" fill={`${ACCENT}18`} stroke={`${ACCENT}40`} strokeWidth="1.5" />
      <circle cx="206" cy="50" r="10" fill="url(#ch_g1)" />
      <text x="215" y="44" fontSize="8" fill={`${ACCENT}bb`} fontFamily="system-ui" fontWeight="700">CAREHUB</text>
      <text x="215" y="57" fontSize="9" fill="white" fontFamily="system-ui" fontWeight="600">Connected Care</text>

      {/* Status dots floating */}
      <circle cx="160" cy="220" r="5" fill={TEAL} opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="360" cy="220" r="5" fill={MAGENTA} opacity="0.9">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="260" cy="130" r="4" fill={ACCENT} opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.2;0.9" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

/* ─────────────────────────────────────────────────────
   SLIDE 2 ILLUSTRATION: AI Medication Management
   Inspired by the connected medical bubbles reference
───────────────────────────────────────────────────── */
function AIMedicationIllustration() {
  const bubbles = [
    { cx: 260, cy: 220, r: 62, label: 'Angela', sublabel: 'Assistant', gradient: 'ai_main', isPrimary: true },
    { cx: 120, cy: 110, r: 44, label: 'Senior Care', sublabel: 'Adherence', gradient: 'ai_b1', isPrimary: false },
    { cx: 400, cy: 100, r: 40, label: 'Clinician', sublabel: 'Dashboard', gradient: 'ai_b2', isPrimary: false },
    { cx: 80,  cy: 290, r: 38, label: 'Caregiver', sublabel: 'Alerts', gradient: 'ai_b3', isPrimary: false },
    { cx: 440, cy: 290, r: 38, label: 'Pharmacy', sublabel: 'Dispensing', gradient: 'ai_b4', isPrimary: false },
    { cx: 260, cy: 390, r: 34, label: 'Hospital', sublabel: 'Integration', gradient: 'ai_b5', isPrimary: false },
    { cx: 155, cy: 360, r: 28, label: 'Symptom', sublabel: 'Tracking', gradient: 'ai_b6', isPrimary: false },
    { cx: 365, cy: 370, r: 28, label: 'Analytics', sublabel: 'Insights', gradient: 'ai_b7', isPrimary: false },
  ]

  const lines = [
    [260,168, 120,150], [260,168, 400,138], [260,262, 80,256],
    [260,262, 440,256], [260,282, 260,358], [260,262, 155,334],
    [260,262, 365,344],
  ]

  return (
    <svg viewBox="0 0 520 460" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <radialGradient id="ai_bg_glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={ACCENT} stopOpacity="0.15" />
          <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ai_main" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor={ACCENT} /><stop offset="1" stopColor={MAGENTA} />
        </linearGradient>
        <linearGradient id="ai_b1" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#f59e0b" /><stop offset="1" stopColor={MAGENTA} />
        </linearGradient>
        <linearGradient id="ai_b2" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor={TEAL} /><stop offset="1" stopColor={ACCENT} />
        </linearGradient>
        <linearGradient id="ai_b3" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor={MAGENTA} /><stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="ai_b4" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor={ACCENT} /><stop offset="1" stopColor={TEAL} />
        </linearGradient>
        <linearGradient id="ai_b5" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#7c3aed" /><stop offset="1" stopColor={ACCENT} />
        </linearGradient>
        <linearGradient id="ai_b6" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor={TEAL} /><stop offset="1" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="ai_b7" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor={MAGENTA} /><stop offset="1" stopColor="#f59e0b" />
        </linearGradient>
        <filter id="ai_glow">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="ai_soft_glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Ambient glow */}
      <ellipse cx="260" cy="230" rx="210" ry="190" fill="url(#ai_bg_glow)" />

      {/* Light hospital/clinical bg grid */}
      <rect width="520" height="460" fill={`${BRAND}00`} />
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={`hg${i}`} x1={i * 58} y1="0" x2={i * 58} y2="460" stroke={`${ACCENT}06`} strokeWidth="1" />
      ))}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={`vg${i}`} x1="0" y1={i * 58} x2="520" y2={i * 58} stroke={`${ACCENT}06`} strokeWidth="1" />
      ))}

      {/* Connection lines with animated pulses */}
      {lines.map(([x1, y1, x2, y2], i) => (
        <g key={i}>
          <line x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={`${ACCENT}30`} strokeWidth="1.5" strokeDasharray="6 5" />
          <circle r="3.5" fill={i % 2 === 0 ? ACCENT : TEAL} opacity="0.85">
            <animateMotion dur={`${3 + i * 0.4}s`} repeatCount="indefinite"
              path={`M${x1},${y1} L${x2},${y2}`} />
          </circle>
        </g>
      ))}

      {/* ── Non-primary bubbles ── */}
      {bubbles.filter(b => !b.isPrimary).map((b, i) => (
        <g key={b.label}>
          {/* Outer glow ring */}
          <circle cx={b.cx} cy={b.cy} r={b.r + 10}
            fill={`url(#${b.gradient})`} opacity="0.08" />
          <circle cx={b.cx} cy={b.cy} r={b.r + 5}
            fill={`url(#${b.gradient})`} opacity="0.1" />
          {/* Main bubble */}
          <circle cx={b.cx} cy={b.cy} r={b.r}
            fill={BRAND} stroke={`url(#${b.gradient})`} strokeWidth="2.5"
            filter="url(#ai_soft_glow)" />
          {/* Inner tint */}
          <circle cx={b.cx} cy={b.cy} r={b.r - 6}
            fill={`url(#${b.gradient})`} opacity="0.15" />
          {/* White highlight arc */}
          <path
            d={`M${b.cx - b.r * 0.5} ${b.cy - b.r * 0.55} Q${b.cx} ${b.cy - b.r * 0.85} ${b.cx + b.r * 0.5} ${b.cy - b.r * 0.55}`}
            stroke="white" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.2" />
          {/* Labels */}
          <text x={b.cx} y={b.cy + 4} textAnchor="middle"
            fontSize={b.r > 36 ? "10" : "9"} fontWeight="700" fill="white"
            fontFamily="system-ui">{b.label}</text>
          <text x={b.cx} y={b.cy + 16} textAnchor="middle"
            fontSize="8" fill="rgba(255,255,255,0.6)"
            fontFamily="system-ui">{b.sublabel}</text>
        </g>
      ))}

      {/* ── PRIMARY CENTER BUBBLE — AI Engine ── */}
      {/* Animated pulse rings */}
      <circle cx="260" cy="220" r="72" stroke={`${ACCENT}50`} strokeWidth="1.5" fill="none">
        <animate attributeName="r" values="68;88;68" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="260" cy="220" r="90" stroke={`${MAGENTA}30`} strokeWidth="1" fill="none">
        <animate attributeName="r" values="85;108;85" dur="5.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0;0.4" dur="5.5s" repeatCount="indefinite" />
      </circle>

      {/* Main bubble */}
      <circle cx="260" cy="220" r="62" fill={BRAND}
        stroke="url(#ai_main)" strokeWidth="3" filter="url(#ai_glow)" />
      <circle cx="260" cy="220" r="54" fill="url(#ai_main)" opacity="0.18" />

      {/* Human figure (senior + AI) */}
      {/* Person silhouette */}
      <circle cx="260" cy="202" r="13" fill="white" opacity="0.9" />
      <path d="M242 240 C242 226 278 226 278 240" fill="white" opacity="0.85" stroke="white" strokeWidth="1.5" strokeLinecap="round" />

      {/* AI sparkle ring around person */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        const x = 260 + 22 * Math.cos(rad)
        const y = 210 + 22 * Math.sin(rad)
        return (
          <circle key={i} cx={x} cy={y} r="2.5" fill={i % 2 === 0 ? ACCENT : MAGENTA} opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur={`${1.5 + i * 0.2}s`} repeatCount="indefinite" />
          </circle>
        )
      })}

      {/* Pill icon */}
      <rect x="249" y="244" width="22" height="10" rx="5"
        fill="url(#ai_main)" opacity="0.9" />
      <line x1="260" y1="244" x2="260" y2="254" stroke="white" strokeWidth="1.5" opacity="0.7" />

      <text x="260" y="274" textAnchor="middle" fontSize="11" fontWeight="700" fill="white" fontFamily="system-ui">Angela</text>
      <text x="260" y="287" textAnchor="middle" fontSize="9" fill={`${ACCENT}cc`} fontFamily="system-ui">Assistant</text>

      {/* ── Corner data readouts ── */}
      {/* Top-left mini card */}
      <rect x="16" y="16" width="100" height="52" rx="10"
        fill={`${BRAND}ee`} stroke={`${TEAL}40`} strokeWidth="1" />
      <text x="26" y="32" fontSize="8" fill={`${TEAL}bb`} fontFamily="system-ui" fontWeight="700">ADHERENCE</text>
      <text x="26" y="48" fontSize="18" fill={TEAL} fontFamily="system-ui" fontWeight="800">94%</text>
      <text x="26" y="60" fontSize="7" fill="rgba(255,255,255,0.4)" fontFamily="system-ui">↑ 12% this month</text>

      {/* Top-right mini card */}
      <rect x="404" y="16" width="100" height="52" rx="10"
        fill={`${BRAND}ee`} stroke={`${MAGENTA}40`} strokeWidth="1" />
      <text x="414" y="32" fontSize="8" fill={`${MAGENTA}bb`} fontFamily="system-ui" fontWeight="700">ALERTS</text>
      <text x="414" y="48" fontSize="18" fill={MAGENTA} fontFamily="system-ui" fontWeight="800">3</text>
      <text x="414" y="60" fontSize="7" fill="rgba(255,255,255,0.4)" fontFamily="system-ui">Active right now</text>

      {/* Bottom pill badge */}
      <rect x="170" y="428" width="180" height="28" rx="14"
        fill={`${ACCENT}18`} stroke={`${ACCENT}35`} strokeWidth="1.5" />
      <text x="260" y="447" textAnchor="middle" fontSize="10" fontWeight="700"
        fill="white" opacity="0.9" fontFamily="system-ui">AI-Powered Medication App</text>
    </svg>
  )
}

/* ─────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────── */
export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden mesh-dark" style={{ minHeight: '100dvh' }}>

      {/* ── Background layers ── */}
      <div
        className="absolute top-0 right-0 bottom-0 pointer-events-none"
        style={{
          width: '42%',
          background: `linear-gradient(160deg, rgba(59,158,255,0.1) 0%, rgba(10,26,107,0.5) 30%, ${BRAND} 80%, ${BRAND2} 100%)`,
          clipPath: 'polygon(14% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }}
      />
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.08 }}>
        <defs>
          <pattern id="heroDotsU" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill={ACCENT} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroDotsU)" />
      </svg>
      <div className="absolute top-0 left-0 right-0 neon-line pointer-events-none" />

      {/* ── Main content ── */}
      <div
        className="container mx-auto px-4 md:px-6 relative z-10 flex items-center"
        style={{ minHeight: '100dvh', paddingTop: '7rem', paddingBottom: '5rem' }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

          {/* LEFT: Slideshow text */}
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

                <h1 className="text-[2.4rem] lg:text-[2.9rem] font-extrabold leading-[1.1] tracking-tight mb-5 text-white">
                  {slides[currentSlide].title}
                </h1>

                <p className="text-[1.05rem] leading-relaxed mb-8 text-slate-300">
                  {slides[currentSlide].subtitle}
                </p>

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

          {/* RIGHT: Illustration — swaps per slide */}
          <div className="relative hidden lg:block">
            <div className="relative w-full max-w-[520px] mx-auto">
              {/* Glow behind */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 80% 70% at 50% 50%, ${ACCENT}30, transparent 70%)`,
                  transform: 'scale(1.2)',
                }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={`illustration-${currentSlide}`}
                  initial={{ opacity: 0, scale: 0.92, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: -20 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  {currentSlide === 0 ? <CareHubIllustration /> : <AIMedicationIllustration />}
                </motion.div>
              </AnimatePresence>

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

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-400">Scroll</span>
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