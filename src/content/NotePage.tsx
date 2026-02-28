'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  ChevronRight,
  Filter,
  X,
  FileText,
  BookOpen,
  ClipboardList,
  FlaskConical,
  PenLine,
  StickyNote,
  Download,
  Eye,
  GraduationCap,
  Calendar,
  HardDrive,
  Star,
  CheckCircle2,
  TrendingUp,
  Users,
  Award,
} from 'lucide-react'
import { useRouter } from 'next/navigation'

// ─── Types ─────────────────────────────────────────────────────────────────

type Level   = 'BBA' | 'BBS' | 'BCA' | 'B.Sc. CSIT' | 'MBA' | 'MBS'
type NoteYear = 'Year 1' | 'Year 2' | 'Year 3' | 'Year 4'
type Tag     = 'Notes' | 'Assignment' | 'Test' | 'Lab Report' | 'Past Paper' | 'Syllabus'

interface Note {
  id:      number
  title:   string
  level:   Level
  year:    NoteYear
  tag:     Tag
  subject: string
  size:    string
  date:    string
  content: string
  downloads: number
  views:     number
}

interface TagCfg {
  bg:     string
  text:   string
  border: string
  dot:    string
  bar:    string
  icon:   React.ElementType
}

// ─── Constants ──────────────────────────────────────────────────────────────

const ACADEMIC_LEVELS: string[] = ['All', 'BBA', 'BBS', 'BCA', 'B.Sc. CSIT', 'MBA', 'MBS']
const YEARS: string[]           = ['All', 'Year 1', 'Year 2', 'Year 3', 'Year 4']
const TAGS: string[]            = ['All', 'Notes', 'Assignment', 'Test', 'Lab Report', 'Past Paper', 'Syllabus']

const tagConfig: Record<Tag, TagCfg> = {
  Notes:        { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', dot: 'bg-indigo-500', bar: 'from-indigo-400 to-indigo-600', icon: StickyNote },
  Assignment:   { bg: 'bg-rose-50',   text: 'text-rose-700',   border: 'border-rose-200',   dot: 'bg-rose-500',   bar: 'from-rose-400 to-rose-600',     icon: PenLine },
  Test:         { bg: 'bg-amber-50',  text: 'text-amber-700',  border: 'border-amber-200',  dot: 'bg-amber-500',  bar: 'from-amber-400 to-amber-600',   icon: ClipboardList },
  'Lab Report': { bg: 'bg-teal-50',   text: 'text-teal-700',   border: 'border-teal-200',   dot: 'bg-teal-500',   bar: 'from-teal-400 to-teal-600',     icon: FlaskConical },
  'Past Paper': { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', dot: 'bg-purple-500', bar: 'from-purple-400 to-purple-600',  icon: FileText },
  Syllabus:     { bg: 'bg-sky-50',    text: 'text-sky-700',    border: 'border-sky-200',    dot: 'bg-sky-500',    bar: 'from-sky-400 to-sky-600',       icon: BookOpen },
}

const levelColors: Record<string, string> = {
  BBA:          'bg-[#252872] text-white',
  BBS:          'bg-[#3a3da0] text-white',
  BCA:          'bg-[#d91f22] text-white',
  'B.Sc. CSIT': 'bg-[#b01719] text-white',
  MBA:          'bg-slate-700 text-white',
  MBS:          'bg-slate-600 text-white',
}

// ─── Data ───────────────────────────────────────────────────────────────────

const notes: Note[] = [
  {
    id: 1, title: 'Principles of Management — Chapter 1-5', level: 'BBA', year: 'Year 1',
    tag: 'Notes', subject: 'Management', size: '2.4 MB', date: '2025-01-10', downloads: 342, views: 1820,
    content: `# Principles of Management — Chapters 1–5\n\n## Chapter 1: Introduction to Management\nManagement is the process of **planning, organizing, leading, and controlling** the efforts of organization members to achieve stated goals.\n\n### Four Key Functions\n- **Planning** — Setting objectives and the course of action to achieve them\n- **Organizing** — Arranging resources and tasks to accomplish goals\n- **Leading** — Directing and influencing people toward organizational goals\n- **Controlling** — Monitoring performance and correcting deviations\n\n## Chapter 2: Evolution of Management Thought\n- Classical Approach (Scientific and Administrative Management)\n- Behavioral Approach (Human Relations Movement)\n- Quantitative Approach\n- Modern Approach (Systems and Contingency Theory)\n\n## Chapter 5: Staffing\nStaffing involves filling positions in the organizational structure.\n- Human Resource Planning\n- Recruitment and Selection\n- Training and Development`,
  },
  {
    id: 2, title: 'Mid-Term Assignment — Marketing Strategy', level: 'BBA', year: 'Year 2',
    tag: 'Assignment', subject: 'Marketing', size: '0.9 MB', date: '2025-02-14', downloads: 178, views: 940,
    content: `# Mid-Term Assignment: Marketing Strategy\n\n## Q1: Define Marketing Strategy\nA marketing strategy is a long-term plan for achieving company goals through understanding customer needs and creating a **distinct, sustainable competitive advantage**.\n\n## Q2: The 7Ps of Marketing Mix\n1. **Product** — What you sell\n2. **Price** — How much you charge\n3. **Place** — Where you sell\n4. **Promotion** — How you communicate\n5. **People** — Who delivers the service\n6. **Process** — How the service is delivered\n7. **Physical Evidence** — Tangible proof of the service`,
  },
  {
    id: 3, title: 'Unit Test — Financial Accounting', level: 'BBS', year: 'Year 1',
    tag: 'Test', subject: 'Accounting', size: '0.4 MB', date: '2025-01-20', downloads: 290, views: 1340,
    content: `# Unit Test: Financial Accounting\n**Total Marks: 40 | Time: 1.5 hours**\n\n## Section A: Short Questions (2x5=10)\n1. Define Accounting and list its objectives.\n2. What is the Double Entry System?\n3. Distinguish between Capital and Revenue Expenditure.\n4. What is a Trial Balance? State its limitations.\n5. Define Depreciation and name two methods.\n\n## Section B: Long Questions (10x3=30)\n\n**Q1.** From the following transactions, prepare a Journal, Ledger, and Trial Balance.\n\n**Q2.** Prepare the Trading and P&L Account and Balance Sheet.`,
  },
  {
    id: 4, title: 'Data Structures Lab Report — Trees', level: 'BCA', year: 'Year 2',
    tag: 'Lab Report', subject: 'Data Structures', size: '1.2 MB', date: '2025-02-05', downloads: 215, views: 870,
    content: `# Lab Report: Tree Data Structures\n**Lab No:** 5 | **Date:** February 5, 2025\n\n## Objective\nImplement Binary Tree and BST in C and perform traversal operations.\n\n## Theory\nA **tree** is a hierarchical data structure with nodes connected by edges.\n\n### Binary Search Tree (BST)\n- Left subtree contains keys less than the parent node\n- Right subtree contains keys greater than the parent node\n\n## Conclusion\nBinary Search Trees provide **O(log n)** average case for search, insert, and delete operations.`,
  },
  {
    id: 5, title: 'BCA Entrance Past Paper 2023', level: 'BCA', year: 'Year 1',
    tag: 'Past Paper', subject: 'Entrance Prep', size: '3.1 MB', date: '2024-12-01', downloads: 620, views: 3200,
    content: `# BCA Entrance Examination 2023\n**Tribhuvan University | Full Marks: 100 | Pass Marks: 40 | Time: 3 Hours**\n\n## Section A: Mathematics (40 Marks)\n1. If f(x) = x squared + 2x + 1, find f(3) and f(-1).\n2. Solve: 2x squared - 5x + 3 = 0\n\n## Section B: Computer Science (40 Marks)\n5. What is an Algorithm? List its characteristics.\n6. Differentiate between RAM and ROM.\n\n## Section C: General Knowledge (20 Marks)\n9. Full form of HTTP, HTML, CSS, SQL.`,
  },
  {
    id: 6, title: 'Operating Systems Full Syllabus', level: 'B.Sc. CSIT', year: 'Year 3',
    tag: 'Syllabus', subject: 'OS', size: '0.3 MB', date: '2025-01-02', downloads: 430, views: 2100,
    content: `# Operating Systems — Full Syllabus\n**B.Sc. CSIT | Year 3 | Tribhuvan University**\n\n## Unit 1: Introduction to OS (4 hrs)\n- Definition, objectives and functions of OS\n- Types: Batch, Time-sharing, Real-time, Distributed\n\n## Unit 2: Process Management (8 hrs)\n- CPU Scheduling: FCFS, SJF, Priority, Round Robin\n- Deadlock: conditions, prevention, avoidance, detection\n\n## Reference Books\n1. Operating System Concepts — Silberschatz, Galvin and Gagne\n2. Modern Operating Systems — Andrew S. Tanenbaum`,
  },
  {
    id: 7, title: 'Business Communication Notes — Unit 3', level: 'MBA', year: 'Year 1',
    tag: 'Notes', subject: 'Communication', size: '1.8 MB', date: '2025-02-18', downloads: 198, views: 760,
    content: `# Business Communication — Unit 3: Written Communication\n\n## 3.1 Importance of Written Communication\nWritten communication creates a permanent record. Key advantages:\n- Provides written evidence\n- Reaches wider audiences\n\n## 3.2 Business Letter Writing\n**Parts of a Business Letter:**\n1. Heading (Sender's Address)\n2. Date\n3. Inside Address\n4. Salutation\n\n## 3.4 Email Etiquette\n- Use a professional subject line\n- Keep messages concise and focused`,
  },
  {
    id: 8, title: 'Strategic Management Assignment Q3', level: 'MBA', year: 'Year 2',
    tag: 'Assignment', subject: 'Strategy', size: '1.1 MB', date: '2025-03-01', downloads: 145, views: 580,
    content: `# Strategic Management — SWOT Analysis: Nabil Bank Ltd.\n\n## Strengths\n- Largest private commercial bank in Nepal\n- Strong brand recognition and customer trust\n- Advanced digital banking platform\n\n## Weaknesses\n- High operating costs compared to fintech players\n\n## Opportunities\n- Growing mobile banking adoption in Nepal\n\n## Threats\n- Competition from new banks and fintech startups`,
  },
  {
    id: 9, title: 'Advanced Accounting — Chapter 6-8', level: 'MBS', year: 'Year 1',
    tag: 'Notes', subject: 'Accounting', size: '2.0 MB', date: '2025-01-25', downloads: 267, views: 1100,
    content: `# Advanced Accounting — Chapters 6–8\n\n## Chapter 6: Partnership Accounts\nA partnership is an association of two or more persons carrying on a business with a view to profit.\n\n## Chapter 7: Company Accounts\n**Types of Share Capital:**\n- Authorized Capital, Issued Capital, Subscribed Capital, Paid-up Capital\n\n## Chapter 8: Amalgamation (AS-14)\n- **Merger Method** — Pooling of Interests\n- **Purchase Method** — Purchase of Assets and Liabilities`,
  },
  {
    id: 10, title: 'CSIT Model Question Paper 2024', level: 'B.Sc. CSIT', year: 'Year 4',
    tag: 'Past Paper', subject: 'Exam Prep', size: '2.8 MB', date: '2024-11-15', downloads: 810, views: 4100,
    content: `# B.Sc. CSIT Model Question Paper 2024\n**TU | Year 4 | Full Marks: 60 | Time: 3 Hours**\n\n## Group A: Very Short Questions (10x1=10)\n1. Define Artificial Intelligence.\n2. What is a Neural Network?\n\n## Group B: Short Questions (5x4=20)\n1. Explain the OSI model with its 7 layers.\n2. Compare SQL vs NoSQL databases with examples.\n\n## Group C: Long Questions (2x15=30)\n1. Explain Database Normalization up to 3NF with examples.`,
  },
  {
    id: 11, title: 'Microeconomics Unit Test — Demand & Supply', level: 'BBA', year: 'Year 1',
    tag: 'Test', subject: 'Economics', size: '0.5 MB', date: '2025-02-22', downloads: 322, views: 1560,
    content: `# Unit Test: Demand and Supply\n**Full Marks: 25 | Time: 45 minutes**\n\n## Q1. Law of Demand with diagram (5 marks)\nThe Law of Demand states: as price rises, quantity demanded falls, other things remaining constant.\n\n**Exceptions:** Giffen goods, Veblen goods, expected future price increases\n\n## Q4. Equilibrium Calculation (10 marks)\nGiven: Qd = 100 - 2P and Qs = 20 + 3P\n\n**Equilibrium Price P = 16, Quantity Q = 68**`,
  },
  {
    id: 12, title: 'Network Lab Report — Subnetting', level: 'B.Sc. CSIT', year: 'Year 3',
    tag: 'Lab Report', subject: 'Computer Networks', size: '1.6 MB', date: '2025-03-03', downloads: 189, views: 720,
    content: `# Lab Report: Subnetting and IP Addressing\n**Lab No:** 8 | **Date:** March 3, 2025\n\n## Objective\nUnderstand and practice subnetting of IP addresses using CIDR notation.\n\n## Problems Solved\n\n### Problem 1 — IP: 192.168.1.0/26\n- Subnet Mask: 255.255.255.192\n- Number of Subnets: 4\n- Hosts per Subnet: 62\n\n## Conclusion\nSubnetting enables efficient IP address usage and improves network performance through traffic segmentation.`,
  },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

function parseBold(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  if (parts.length === 1) return text
  return parts.map((p, i) =>
    p.startsWith('**') && p.endsWith('**')
      ? <strong key={i} className="font-semibold text-[#252872]">{p.slice(2, -2)}</strong>
      : p
  )
}

function MarkdownContent({ text }: { text: string }) {
  return (
    <div className="space-y-0.5">
      {text.split('\n').map((line, i) => {
        if (line.startsWith('# '))   return <h1 key={i} className="text-lg font-black text-[#252872] pt-4 pb-1 first:pt-0">{line.slice(2)}</h1>
        if (line.startsWith('## '))  return <h2 key={i} className="text-sm font-bold text-[#252872] pt-3 pb-1 border-b border-[#252872]/10">{line.slice(3)}</h2>
        if (line.startsWith('### ')) return <h3 key={i} className="text-sm font-bold text-[#d91f22] pt-2">{line.slice(4)}</h3>
        if (line.startsWith('- '))   return <li key={i} className="text-sm text-gray-600 ml-5 list-disc leading-relaxed py-0.5">{parseBold(line.slice(2))}</li>
        if (/^\d+\./.test(line))     return <li key={i} className="text-sm text-gray-600 ml-5 list-decimal leading-relaxed py-0.5">{parseBold(line.replace(/^\d+\.\s/, ''))}</li>
        if (line.startsWith('---'))  return <hr key={i} className="border-gray-100 my-3" />
        if (line.trim() === '')      return <div key={i} className="h-1.5" />
        return <p key={i} className="text-sm text-gray-600 leading-relaxed">{parseBold(line)}</p>
      })}
    </div>
  )
}

function formatCount(n: number) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : `${n}`
}

// ─── Viewer Modal ─────────────────────────────────────────────────────────────

function NoteViewer({ note, onClose }: { note: Note; onClose: () => void }) {
  const cfg     = tagConfig[note.tag]
  const TagIcon = cfg.icon
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.24, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="bg-white rounded-2xl w-full max-w-2xl max-h-[88vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-br from-[#1a1b52] via-[#252872] to-[#1e2060] px-6 py-5 flex items-start gap-4 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0 mt-0.5 ring-1 ring-white/20">
            <TagIcon className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">{note.level}</span>
              <ChevronRight className="w-3 h-3 text-white/25" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">{note.year}</span>
              <ChevronRight className="w-3 h-3 text-white/25" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">{note.subject}</span>
            </div>
            <h2 className="text-white font-black text-[15px] leading-snug">{note.title}</h2>
            <div className="flex items-center gap-3 mt-2.5 flex-wrap">
              <span className="flex items-center gap-1.5 text-[10px] font-bold bg-white/15 text-white px-2.5 py-1 rounded-full">
                <TagIcon className="w-3 h-3" /> {note.tag}
              </span>
              <span className="text-white/50 text-[11px] flex items-center gap-1"><HardDrive className="w-3 h-3" /> {note.size}</span>
              <span className="text-white/50 text-[11px] flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(note.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center shrink-0 transition-colors ring-1 ring-white/20">
            <X className="w-4 h-4 text-white" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-5"><MarkdownContent text={note.content} /></div>
        <div className="border-t border-gray-100 px-6 py-4 flex items-center justify-between gap-3 shrink-0 bg-gray-50/60">
          <p className="text-xs text-gray-400">{note.subject} · {note.level} · {note.year}</p>
          <div className="flex gap-2">
            <button onClick={onClose} className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-gray-500 hover:border-[#252872] hover:text-[#252872] transition-colors">Close</button>
            <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#252872] to-[#d91f22] text-white text-sm font-bold flex items-center gap-2 hover:opacity-90 shadow-md transition-opacity">
              <Download className="w-4 h-4" /> Download
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export function NotesPage() {
  const { push: navigate } = useRouter()

  const [searchQuery,       setSearchQuery]       = useState<string>('')
  const [selectedLevel,     setSelectedLevel]     = useState<string>('All')
  const [selectedYear,      setSelectedYear]      = useState<string>('All')
  const [selectedTag,       setSelectedTag]       = useState<string>('All')
  const [viewing,           setViewing]           = useState<Note | null>(null)

  const filtered = useMemo<Note[]>(() =>
    notes.filter((n) => {
      const q = searchQuery.toLowerCase()
      return (
        (selectedLevel === 'All' || n.level === selectedLevel) &&
        (selectedYear  === 'All' || n.year  === selectedYear)  &&
        (selectedTag   === 'All' || n.tag   === selectedTag)   &&
        (n.title.toLowerCase().includes(q) || n.subject.toLowerCase().includes(q))
      )
    }),
    [searchQuery, selectedLevel, selectedYear, selectedTag]
  )

  const resetAll = () => {
    setSearchQuery('')
    setSelectedLevel('All')
    setSelectedYear('All')
    setSelectedTag('All')
  }

  const totalActiveFilters =
    (selectedLevel !== 'All' ? 1 : 0) +
    (selectedYear  !== 'All' ? 1 : 0) +
    (selectedTag   !== 'All' ? 1 : 0) +
    (searchQuery ? 1 : 0)

  const totalDownloads = notes.reduce((s, n) => s + n.downloads, 0)
  const totalViews     = notes.reduce((s, n) => s + n.views, 0)

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="bg-[#252872] text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-[0.03] rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-400 opacity-[0.08] rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Study Notes</h1>
            <p className="text-blue-100 text-lg max-w-2xl mb-8">
              Browse, preview and download academic notes, assignments, past papers and more — curated for TU, KU, and PU students across Nepal.
            </p>
            <div className="flex items-center text-sm text-blue-200 font-medium">
              <span className="hover:text-white cursor-pointer" onClick={() => navigate('/')}>Home</span>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-white">Notes</span>
            </div>
          </motion.div>

          {/* Quick Level Filter */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-8">
            <p className="text-blue-200 text-sm font-semibold mb-3 uppercase tracking-widest">Filter by Program</p>
            <div className="flex flex-wrap gap-2">
              {ACADEMIC_LEVELS.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all border ${
                    selectedLevel === lvl
                      ? 'bg-[#d91f22] border-[#d91f22] text-white shadow-lg shadow-[#d91f22]/30'
                      : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Search */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search notes or subjects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-[#d91f22] focus:bg-white/15 transition-all text-lg"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-5 top-1/2 -translate-y-1/2">
                  <X className="w-4 h-4 text-white/60 hover:text-white" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Stats Bar ────────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Total Resources', value: `${notes.length}`,          icon: FileText },
              { label: 'Total Downloads', value: `${formatCount(totalDownloads)}+`, icon: Download },
              { label: 'Total Views',     value: `${formatCount(totalViews)}+`,     icon: Eye },
              { label: 'Programs Covered', value: `${ACADEMIC_LEVELS.length - 1}`,  icon: GraduationCap },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 border border-gray-100">
                <div className="p-2.5 bg-white rounded-lg shadow-sm text-[#d91f22]">
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold text-[#252872]">{stat.value}</div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 max-w-7xl py-10">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* ── Sidebar ──────────────────────────────────────────────────── */}
          <aside className="lg:w-1/4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24 space-y-6">

              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#252872] flex items-center gap-2">
                  <Filter className="w-5 h-5 text-[#d91f22]" />
                  Filters
                  {totalActiveFilters > 0 && (
                    <span className="ml-1 bg-[#d91f22] text-white text-xs px-2 py-0.5 rounded-full">{totalActiveFilters}</span>
                  )}
                </h3>
                {totalActiveFilters > 0 && (
                  <button onClick={resetAll} className="text-xs text-[#d91f22] hover:underline font-medium">Reset</button>
                )}
              </div>

              {/* Program / Level */}
              <div className="pb-6 border-b border-gray-100">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" /> Program
                </h4>
                <div className="space-y-2">
                  {ACADEMIC_LEVELS.map((lvl) => (
                    <label key={lvl} className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${selectedLevel === lvl ? 'border-[#d91f22]' : 'border-gray-300 group-hover:border-[#d91f22]'}`}>
                          {selectedLevel === lvl && <div className="w-2 h-2 bg-[#d91f22] rounded-full" />}
                        </div>
                        <input type="radio" name="level" className="hidden" checked={selectedLevel === lvl} onChange={() => setSelectedLevel(lvl)} />
                        <span className={`text-sm ${selectedLevel === lvl ? 'text-[#252872] font-medium' : 'text-gray-600'}`}>
                          {lvl === 'All' ? 'All Programs' : lvl}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                        {lvl === 'All' ? notes.length : notes.filter(n => n.level === lvl).length}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Academic Year */}
              <div className="pb-6 border-b border-gray-100">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Academic Year
                </h4>
                <div className="space-y-2">
                  {YEARS.map((yr) => (
                    <label key={yr} className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedYear === yr ? 'bg-[#d91f22] border-[#d91f22]' : 'border-gray-300 group-hover:border-[#d91f22]'}`}>
                          {selectedYear === yr && <CheckCircle2 className="w-3 h-3 text-white" />}
                        </div>
                        <input type="radio" name="year" className="hidden" checked={selectedYear === yr} onChange={() => setSelectedYear(yr)} />
                        <span className={`text-sm ${selectedYear === yr ? 'text-[#252872] font-medium' : 'text-gray-600'}`}>
                          {yr === 'All' ? 'All Years' : yr}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                        {yr === 'All' ? notes.length : notes.filter(n => n.year === yr).length}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Document Type */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Document Type
                </h4>
                <div className="space-y-1.5">
                  {TAGS.map((t) => {
                    const cfg     = tagConfig[t as Tag]
                    const isActive = selectedTag === t
                    const Icon    = cfg?.icon ?? FileText
                    return (
                      <button
                        key={t}
                        onClick={() => setSelectedTag(t)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-left transition-all duration-150 border ${
                          isActive
                            ? 'bg-[#d91f22] text-white border-[#d91f22] shadow-sm'
                            : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-200'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5 shrink-0" />
                        {t === 'All' ? 'All Types' : t}
                        <span className={`ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-md ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                          {t === 'All' ? notes.length : notes.filter(n => n.tag === t).length}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </aside>

          {/* ── Main Grid ────────────────────────────────────────────────── */}
          <div className="lg:w-3/4">

            {/* Active filter pills */}
            {totalActiveFilters > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedLevel !== 'All' && (
                  <button onClick={() => setSelectedLevel('All')} className="flex items-center gap-1 bg-[#252872]/10 text-[#252872] px-3 py-1 rounded-full text-xs font-bold hover:bg-[#252872]/15 transition-colors">
                    🎓 {selectedLevel} <X className="w-3 h-3" />
                  </button>
                )}
                {selectedYear !== 'All' && (
                  <button onClick={() => setSelectedYear('All')} className="flex items-center gap-1 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-indigo-100 transition-colors">
                    📅 {selectedYear} <X className="w-3 h-3" />
                  </button>
                )}
                {selectedTag !== 'All' && (
                  <button onClick={() => setSelectedTag('All')} className="flex items-center gap-1 bg-rose-50 text-rose-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-rose-100 transition-colors">
                    📄 {selectedTag} <X className="w-3 h-3" />
                  </button>
                )}
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="flex items-center gap-1 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-purple-100 transition-colors">
                    🔍 "{searchQuery}" <X className="w-3 h-3" />
                  </button>
                )}
                <button onClick={resetAll} className="text-xs text-gray-400 hover:text-[#d91f22] font-semibold transition-colors px-1">
                  Clear all
                </button>
              </div>
            )}

            {/* Count row */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-500">
                Showing <span className="font-bold text-[#252872]">{filtered.length}</span> resources
                {selectedLevel !== 'All' && <span className="ml-1 text-[#252872] font-semibold">for {selectedLevel}</span>}
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((note, index) => {
                  const cfg     = tagConfig[note.tag]
                  const TagIcon = cfg.icon
                  const lvlColor = levelColors[note.level] ?? 'bg-slate-700 text-white'

                  return (
                    <motion.div
                      key={note.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      {/* Top colour bar */}
                      <div className={`h-1.5 bg-gradient-to-r ${cfg.bar}`} />

                      <div className="p-6">
                        {/* Header row */}
                        <div className="flex items-start gap-3 mb-4">
                          {/* Icon avatar */}
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border ${cfg.bg} ${cfg.border}`}>
                            <TagIcon className={`w-5 h-5 ${cfg.text}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base font-bold text-[#252872] group-hover:text-[#d91f22] transition-colors leading-snug mb-1 line-clamp-2">
                              {note.title}
                            </h3>
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${lvlColor}`}>
                                {note.level}
                              </span>
                              <span className="text-xs text-gray-400 font-medium">{note.subject}</span>
                            </div>
                          </div>
                        </div>

                        {/* Tag + Year */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full border flex items-center gap-1 ${cfg.bg} ${cfg.text} ${cfg.border}`}>
                            <TagIcon className="w-3 h-3" /> {note.tag}
                          </span>
                          <span className="px-2.5 py-1 text-[10px] font-bold rounded-full border bg-gray-50 text-gray-600 border-gray-200">
                            {note.year}
                          </span>
                        </div>

                        {/* Meta info row */}
                        <div className="space-y-1.5 mb-5">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="w-3.5 h-3.5 text-gray-400" />
                            <span>{new Date(note.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <HardDrive className="w-3.5 h-3.5 text-gray-400" />
                            <span>{note.size}</span>
                          </div>
                        </div>

                        {/* Stats row */}
                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-5 pt-4 border-t border-gray-50">
                          <span className="flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5" /> {formatCount(note.views)} views
                          </span>
                          <span className="flex items-center gap-1">
                            <Download className="w-3.5 h-3.5" /> {formatCount(note.downloads)} downloads
                          </span>
                          <span className="flex items-center gap-1 ml-auto">
                            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                            <span className="text-amber-600 font-semibold">Popular</span>
                          </span>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                          <button
                            onClick={() => setViewing(note)}
                            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold border border-[#252872]/20 text-[#252872] bg-[#252872]/4 hover:bg-[#252872] hover:text-white hover:border-[#252872] transition-all duration-150"
                          >
                            <Eye className="w-4 h-4" /> Preview
                          </button>
                          <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-sm text-white bg-[#d91f22] hover:bg-[#b91c1c] transition-all shadow-sm hover:shadow-md">
                            <Download className="w-4 h-4" /> Download
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#252872] mb-2">No notes found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search or filters.</p>
                <button onClick={resetAll} className="text-[#d91f22] font-semibold hover:underline">Clear all filters</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Viewer Modal */}
      <AnimatePresence>
        {viewing && <NoteViewer note={viewing} onClose={() => setViewing(null)} />}
      </AnimatePresence>
    </div>
  )
}