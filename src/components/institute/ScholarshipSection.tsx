'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  GraduationCap,
  Globe,
  MapPin,
  Award,
  ChevronDown,
  CheckCircle2,
  TrendingUp,
  Users,
  BookOpen,
  ExternalLink,
  Star,
  Target,
  Percent,
} from 'lucide-react'

// ─── Types ─────────────────────────────────────────────────────────────────────

type ScholarshipTab = 'entrance' | 'gpa' | 'quota'

interface EntranceScholarship {
  name: string
  type: 'mahanagar' | 'foreign' | 'national'
  discount: string
  seats: number
  eligibility: string
  programs: string[]
  badge: string
  icon: any
}

interface GPATier {
  gpa: string
  label: string
  discount: number
  colorClass: string
  bgClass: string
  borderClass: string
  badgeBg: string
  description: string
}

interface QuotaCategory {
  category: string
  icon: string
  discount: string
  seats: number
  eligibility: string
  documents: string[]
  colorClass: string
  bgClass: string
  borderClass: string
  badgeClass: string
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const entranceScholarships: EntranceScholarship[] = [
  {
    name: 'Mahanagar Entrance Excellence',
    type: 'mahanagar',
    discount: '75%',
    seats: 20,
    eligibility: 'Top 20 ranks in Mahanagar Entrance Exam',
    programs: ['BBA', 'BCA', 'BBS', 'B.Sc. CSIT'],
    badge: 'Mahanagar',
    icon: MapPin,
  },
  {
    name: 'Mahanagar Merit Award',
    type: 'mahanagar',
    discount: '50%',
    seats: 30,
    eligibility: 'Ranks 21–50 in Mahanagar Entrance Exam',
    programs: ['BBA', 'BCA', 'BBS', 'B.Sc. CSIT'],
    badge: 'Mahanagar',
    icon: MapPin,
  },
  {
    name: 'Foreign Affiliated – Full Scholarship',
    type: 'foreign',
    discount: '100%',
    seats: 5,
    eligibility: 'Top 5 rank in affiliated foreign university entrance',
    programs: ['MBA', 'BBA', 'BCA'],
    badge: 'Foreign Affiliated',
    icon: Globe,
  },
  {
    name: 'Foreign Affiliated – Partial Grant',
    type: 'foreign',
    discount: '60%',
    seats: 10,
    eligibility: 'Ranks 6–15 in affiliated foreign university entrance',
    programs: ['MBA', 'BBA', 'BCA'],
    badge: 'Foreign Affiliated',
    icon: Globe,
  },
  {
    name: 'National Entrance Topper',
    type: 'national',
    discount: '80%',
    seats: 10,
    eligibility: 'Top 10 ranks in national-level entrance examinations',
    programs: ['B.Sc. CSIT', 'BCA'],
    badge: 'National',
    icon: Star,
  },
  {
    name: 'National Merit Scholarship',
    type: 'national',
    discount: '40%',
    seats: 25,
    eligibility: 'Ranks 11–35 in national-level entrance examinations',
    programs: ['B.Sc. CSIT', 'BCA', 'BBA'],
    badge: 'National',
    icon: Star,
  },
]

const gpaTiers: GPATier[] = [
  {
    gpa: '3.8 – 4.0',
    label: "Chancellor's Distinction",
    discount: 90,
    colorClass: 'text-amber-600',
    bgClass: 'bg-amber-50',
    borderClass: 'border-amber-200',
    badgeBg: 'bg-amber-100 text-amber-700',
    description: 'Highest academic honour. Covers 90% of tuition fees for the entire program duration.',
  },
  {
    gpa: '3.6 – 3.79',
    label: "Dean's Excellence",
    discount: 75,
    colorClass: 'text-[#252872]',
    bgClass: 'bg-indigo-50',
    borderClass: 'border-indigo-200',
    badgeBg: 'bg-indigo-100 text-[#252872]',
    description: 'Outstanding academic performance with 75% tuition waiver each semester.',
  },
  {
    gpa: '3.4 – 3.59',
    label: 'Merit Scholar',
    discount: 60,
    colorClass: 'text-emerald-600',
    bgClass: 'bg-emerald-50',
    borderClass: 'border-emerald-200',
    badgeBg: 'bg-emerald-100 text-emerald-700',
    description: 'Consistent high achievers rewarded with 60% fee concession.',
  },
  {
    gpa: '3.2 – 3.39',
    label: 'Academic Award',
    discount: 40,
    colorClass: 'text-purple-600',
    bgClass: 'bg-purple-50',
    borderClass: 'border-purple-200',
    badgeBg: 'bg-purple-100 text-purple-700',
    description: 'Recognises strong academic standing with 40% scholarship per semester.',
  },
  {
    gpa: '3.0 – 3.19',
    label: 'Encouragement Grant',
    discount: 25,
    colorClass: 'text-cyan-600',
    bgClass: 'bg-cyan-50',
    borderClass: 'border-cyan-200',
    badgeBg: 'bg-cyan-100 text-cyan-700',
    description: 'Supports students demonstrating consistent effort and academic improvement.',
  },
]

const quotaCategories: QuotaCategory[] = [
  {
    category: 'Dalit Community',
    icon: '✊',
    discount: '100%',
    seats: 5,
    eligibility: 'Students belonging to Dalit communities as per Government of Nepal classification',
    documents: ['Caste certificate', 'Citizenship / birth certificate', 'Income certificate'],
    colorClass: 'text-red-600',
    bgClass: 'bg-red-50',
    borderClass: 'border-red-200',
    badgeClass: 'bg-red-100 text-red-700',
  },
  {
    category: 'Janajati / Indigenous',
    icon: '🌿',
    discount: '75%',
    seats: 8,
    eligibility: 'Adibasi Janajati students listed under NFDIN Act 2002',
    documents: ['Ethnic identity certificate', 'Recommendation from ward office', 'Citizenship'],
    colorClass: 'text-emerald-600',
    bgClass: 'bg-emerald-50',
    borderClass: 'border-emerald-200',
    badgeClass: 'bg-emerald-100 text-emerald-700',
  },
  {
    category: 'Madhesi / Tharu',
    icon: '🌾',
    discount: '60%',
    seats: 6,
    eligibility: 'Students from Madhesi and Tharu communities from Terai districts',
    documents: ['Caste certificate', 'District residency proof', 'Citizenship'],
    colorClass: 'text-amber-600',
    bgClass: 'bg-amber-50',
    borderClass: 'border-amber-200',
    badgeClass: 'bg-amber-100 text-amber-700',
  },
  {
    category: 'Persons with Disability',
    icon: '♿',
    discount: '100%',
    seats: 4,
    eligibility: 'Students holding Government-issued disability ID card (any category)',
    documents: ['Disability ID card', 'Medical certificate', 'Citizenship'],
    colorClass: 'text-purple-600',
    bgClass: 'bg-purple-50',
    borderClass: 'border-purple-200',
    badgeClass: 'bg-purple-100 text-purple-700',
  },
  {
    category: "Martyr's / War Hero Family",
    icon: '🎖️',
    discount: '100%',
    seats: 3,
    eligibility: "Children/dependents of martyrs or conflict-affected families (GoN verified)",
    documents: ['Martyr certificate from MoPIT', 'Relationship proof', 'Citizenship'],
    colorClass: 'text-cyan-600',
    bgClass: 'bg-cyan-50',
    borderClass: 'border-cyan-200',
    badgeClass: 'bg-cyan-100 text-cyan-700',
  },
  {
    category: 'Remote Area / Karnali',
    icon: '⛰️',
    discount: '80%',
    seats: 5,
    eligibility: 'Students from remote hill/mountain districts (Karnali, Sudurpashchim priority)',
    documents: ['District certificate', 'School leaving certificate', 'Recommendation from DDC'],
    colorClass: 'text-[#252872]',
    bgClass: 'bg-indigo-50',
    borderClass: 'border-indigo-200',
    badgeClass: 'bg-indigo-100 text-[#252872]',
  },
  {
    category: 'Single Women / Widows',
    icon: '👩',
    discount: '70%',
    seats: 5,
    eligibility: 'Single mothers, widows, or women heads of household (income < NPR 3L/yr)',
    documents: ['Marriage / divorce certificate', 'Income certificate', 'Ward recommendation'],
    colorClass: 'text-pink-600',
    bgClass: 'bg-pink-50',
    borderClass: 'border-pink-200',
    badgeClass: 'bg-pink-100 text-pink-700',
  },
  {
    category: 'Staff / Faculty Children',
    icon: '🏫',
    discount: '50%',
    seats: 10,
    eligibility: 'Children of full-time college employees (minimum 2 years of service)',
    documents: ['Employment letter from HR', 'Relationship proof', 'Citizenship'],
    colorClass: 'text-slate-600',
    bgClass: 'bg-slate-50',
    borderClass: 'border-slate-200',
    badgeClass: 'bg-slate-100 text-slate-700',
  },
]

// ─── Badge map for entrance type ─────────────────────────────────────────────

const typeStyle: Record<EntranceScholarship['type'], { badge: string; accent: string; pill: string }> = {
  mahanagar: {
    badge: 'bg-indigo-100 text-[#252872]',
    accent: 'border-l-[#252872]',
    pill: 'bg-[#252872]/5 text-[#252872] border border-[#252872]/10',
  },
  foreign: {
    badge: 'bg-emerald-100 text-emerald-700',
    accent: 'border-l-emerald-500',
    pill: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  },
  national: {
    badge: 'bg-amber-100 text-amber-700',
    accent: 'border-l-amber-500',
    pill: 'bg-amber-50 text-amber-700 border border-amber-200',
  },
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function EntranceTab() {
  const [filter, setFilter] = useState<'all' | EntranceScholarship['type']>('all')
  const filtered =
    filter === 'all' ? entranceScholarships : entranceScholarships.filter((s) => s.type === filter)

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {(['all', 'mahanagar', 'foreign', 'national'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
              filter === f
                ? 'bg-[#252872] text-white border-[#252872] shadow-sm'
                : 'bg-white text-gray-500 border-gray-200 hover:border-[#252872]/30 hover:text-[#252872]'
            }`}
          >
            {f === 'all'
              ? 'All'
              : f === 'mahanagar'
              ? '🏙️ Mahanagar'
              : f === 'foreign'
              ? '🌐 Foreign Affiliated'
              : '🇳🇵 National'}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((s, i) => {
          const st = typeStyle[s.type]
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`bg-white rounded-2xl border border-gray-100 shadow-sm border-l-4 ${st.accent} p-6 hover:shadow-md transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${st.badge}`}>
                  {s.type === 'mahanagar' ? '🏙️' : s.type === 'foreign' ? '🌐' : '🇳🇵'} {s.badge}
                </span>
                <span className="text-3xl font-extrabold text-[#d91f22]">{s.discount}</span>
              </div>

              <h3 className="text-base font-bold text-[#252872] mb-2">{s.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.eligibility}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {s.programs.map((p) => (
                  <span key={p} className={`text-[10px] font-semibold px-2 py-0.5 rounded ${st.pill}`}>
                    {p}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-gray-50">
                <Users className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-xs text-gray-400">Available seats:</span>
                <span className="text-xs font-bold text-[#252872]">{s.seats}</span>
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 text-sm text-gray-600">
        <span className="font-semibold text-[#252872]">ℹ️ Note:</span> Entrance-based scholarships are
        awarded on first-come-first-served basis within rank cutoff. Students must enroll within 7 days of
        offer letter. Scholarship is non-transferable.
      </div>
    </motion.div>
  )
}

function GPATab() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
      {/* Visual chart */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h3 className="text-sm font-bold text-[#252872] uppercase tracking-wider mb-5">
          GPA → Scholarship Overview
        </h3>
        <div className="space-y-3">
          {gpaTiers.map((tier, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="flex items-center gap-4 cursor-default"
            >
              <span className={`text-xs font-bold w-24 flex-shrink-0 ${tier.colorClass}`}>{tier.gpa}</span>
              <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(tier.discount / 90) * 100}%` }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
                  className={`h-full rounded-full ${tier.bgClass.replace('bg-', 'bg-')} transition-opacity`}
                  style={{
                    opacity: hovered === i ? 1 : 0.7,
                    background:
                      tier.colorClass === 'text-[#252872]'
                        ? '#252872'
                        : tier.colorClass === 'text-amber-600'
                        ? '#d97706'
                        : tier.colorClass === 'text-emerald-600'
                        ? '#059669'
                        : tier.colorClass === 'text-purple-600'
                        ? '#9333ea'
                        : '#0891b2',
                  }}
                />
              </div>
              <span className={`text-sm font-extrabold w-12 text-right ${tier.colorClass}`}>
                {tier.discount}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tier cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {gpaTiers.map((tier, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className={`${tier.bgClass} border ${tier.borderClass} rounded-2xl p-5 hover:shadow-md transition-all duration-300`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${tier.colorClass}`}>
                  {tier.label}
                </span>
                <div className={`text-xl font-extrabold mt-0.5 ${tier.colorClass}`}>GPA {tier.gpa}</div>
              </div>
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-extrabold ${tier.badgeBg}`}
              >
                {tier.discount}%
              </div>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">{tier.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Rules */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <h3 className="text-sm font-bold text-[#252872] uppercase tracking-wider mb-4">
          📋 GPA Scholarship Rules
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            'GPA is evaluated every semester; scholarship renews automatically if maintained',
            'Minimum 75% attendance required to be eligible for GPA scholarship',
            'GPA-based scholarship can be combined with quota scholarships (max 100%)',
            'If GPA drops below threshold mid-year, scholarship adjusts in next semester',
          ].map((rule, i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-gray-600">
              <CheckCircle2 className="w-4 h-4 text-[#d91f22] mt-0.5 flex-shrink-0" />
              {rule}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function QuotaTab() {
  const [expanded, setExpanded] = useState<number | null>(null)
  const totalSeats = quotaCategories.reduce((a, c) => a + c.seats, 0)

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
      {/* Summary stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Categories', value: quotaCategories.length, icon: Target },
          { label: 'Reserved Seats', value: totalSeats, icon: Users },
          { label: 'Max Scholarship', value: '100%', icon: Percent },
        ].map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-[#252872]/5 rounded-xl flex items-center justify-center flex-shrink-0">
              <s.icon className="w-5 h-5 text-[#252872]" />
            </div>
            <div>
              <div className="text-lg font-extrabold text-[#252872]">{s.value}</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Accordion */}
      <div className="space-y-3">
        {quotaCategories.map((q, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
              expanded === i ? `${q.bgClass} ${q.borderClass}` : 'bg-white border-gray-100'
            } shadow-sm`}
          >
            {/* Header */}
            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="w-full flex items-center gap-4 px-5 py-4 text-left"
            >
              <span className="text-2xl">{q.icon}</span>
              <div className="flex-1">
                <div className="text-sm font-bold text-[#252872]">{q.category}</div>
                <div className="text-xs text-gray-400 mt-0.5">{q.seats} reserved seats</div>
              </div>
              <span className={`text-sm font-extrabold px-3 py-1 rounded-full ${q.badgeClass}`}>
                {q.discount}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${
                  expanded === i ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Expanded */}
            <AnimatePresence>
              {expanded === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`border-t ${q.borderClass}`}
                >
                  <div className="px-5 py-4 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                        Eligibility
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{q.eligibility}</p>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                        Required Documents
                      </div>
                      <div className="space-y-1.5">
                        {q.documents.map((doc, di) => (
                          <div key={di} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${q.colorClass}`} />
                            {doc}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Policy note */}
      <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-800">
        <span className="font-semibold">⚖️ Policy Note:</span> Quota scholarships follow Government of Nepal
        reservation guidelines. All documents must be verified by the Scholarship Committee before enrollment.
        Misrepresentation leads to immediate cancellation.
      </div>
    </motion.div>
  )
}

// ─── Main Export ───────────────────────────────────────────────────────────────

export default function ScholarshipSection() {
  const [activeTab, setActiveTab] = useState<ScholarshipTab>('entrance')

  const tabs: { key: ScholarshipTab; label: string; icon: any; sub: string }[] = [
    { key: 'entrance', label: 'Entrance-Based', icon: BookOpen, sub: 'Mahanagar, Foreign & National' },
    { key: 'gpa', label: 'GPA / Merit', icon: TrendingUp, sub: 'GPA 3.0 – 4.0 tiers' },
    { key: 'quota', label: 'Caste & Quota', icon: Award, sub: 'Reserved categories' },
  ]

  return (
    <div>
      {/* Section header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#252872]">Scholarship Programs</h2>
        <span className="text-xs text-gray-400 font-medium">Academic Year 2025–26</span>
      </div>

      {/* Tab switcher */}
      <div className="grid grid-cols-3 gap-3 mb-8 bg-gray-50 p-2 rounded-2xl border border-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex flex-col items-center gap-1 py-3 px-2 rounded-xl transition-all duration-200 ${
              activeTab === tab.key
                ? 'bg-white shadow-sm border border-gray-100'
                : 'hover:bg-white/60'
            }`}
          >
            <tab.icon
              className={`w-5 h-5 ${activeTab === tab.key ? 'text-[#d91f22]' : 'text-gray-400'}`}
            />
            <span
              className={`text-xs font-bold ${
                activeTab === tab.key ? 'text-[#252872]' : 'text-gray-400'
              }`}
            >
              {tab.label}
            </span>
            <span
              className={`text-[9px] font-medium hidden sm:block ${
                activeTab === tab.key ? 'text-[#d91f22]' : 'text-gray-400'
              }`}
            >
              {tab.sub}
            </span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div key={activeTab}>
          {activeTab === 'entrance' && <EntranceTab />}
          {activeTab === 'gpa' && <GPATab />}
          {activeTab === 'quota' && <QuotaTab />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}