'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FileText, Download, Eye, Search, X, BookOpen,
  ClipboardList, FlaskConical, PenLine, StickyNote,
  Calendar, HardDrive, GraduationCap, ChevronRight,
  SlidersHorizontal, RotateCcw,
} from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────

type Level = 'BBA' | 'BBS' | 'BCA' | 'B.Sc. CSIT' | 'MBA' | 'MBS'
type Year  = 'Year 1' | 'Year 2' | 'Year 3' | 'Year 4'
type Tag   = 'Notes' | 'Assignment' | 'Test' | 'Lab Report' | 'Past Paper' | 'Syllabus'

interface Note {
  id:      number
  title:   string
  level:   Level
  year:    Year
  tag:     Tag
  subject: string
  size:    string
  date:    string
  content: string
}

interface TagCfg {
  bg:     string
  text:   string
  border: string
  dot:    string
  icon:   React.ElementType
}

interface FilterProps {
  search:     string
  setSearch:  (v: string) => void
  level:      string
  setLevel:   (v: string) => void
  year:       string
  setYear:    (v: string) => void
  tag:        string
  setTag:     (v: string) => void
  clearAll:   () => void
  hasFilters: boolean
  total:      number
  filtered:   number
}

// ─── Constants ────────────────────────────────────────────────────────────────

const LEVELS: string[] = ['All', 'BBA', 'BBS', 'BCA', 'B.Sc. CSIT', 'MBA', 'MBS']
const YEARS: string[]  = ['All', 'Year 1', 'Year 2', 'Year 3', 'Year 4']
const TAGS: string[]   = ['All', 'Notes', 'Assignment', 'Test', 'Lab Report', 'Past Paper', 'Syllabus']

const tagConfig: Record<Tag, TagCfg> = {
  Notes:        { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', dot: 'bg-indigo-500', icon: StickyNote },
  Assignment:   { bg: 'bg-rose-50',   text: 'text-rose-700',   border: 'border-rose-200',   dot: 'bg-rose-500',   icon: PenLine },
  Test:         { bg: 'bg-amber-50',  text: 'text-amber-700',  border: 'border-amber-200',  dot: 'bg-amber-500',  icon: ClipboardList },
  'Lab Report': { bg: 'bg-teal-50',   text: 'text-teal-700',   border: 'border-teal-200',   dot: 'bg-teal-500',   icon: FlaskConical },
  'Past Paper': { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', dot: 'bg-purple-500', icon: FileText },
  Syllabus:     { bg: 'bg-sky-50',    text: 'text-sky-700',    border: 'border-sky-200',    dot: 'bg-sky-500',    icon: BookOpen },
}

const levelColors: Record<string, string> = {
  BBA: 'bg-[#252872] text-white',
  BBS: 'bg-[#3a3da0] text-white',
  BCA: 'bg-[#d91f22] text-white',
  'B.Sc. CSIT': 'bg-[#b01719] text-white',
  MBA: 'bg-slate-700 text-white',
  MBS: 'bg-slate-600 text-white',
}

// ─── Data ────────────────────────────────────────────────────────────────────

const notes: Note[] = [
  {
    id: 1, title: 'Principles of Management — Chapter 1-5', level: 'BBA', year: 'Year 1',
    tag: 'Notes', subject: 'Management', size: '2.4 MB', date: '2025-01-10',
    content: `# Principles of Management — Chapters 1–5\n\n## Chapter 1: Introduction to Management\nManagement is the process of **planning, organizing, leading, and controlling** the efforts of organization members to achieve stated goals.\n\n### Four Key Functions\n- **Planning** — Setting objectives and the course of action to achieve them\n- **Organizing** — Arranging resources and tasks to accomplish goals\n- **Leading** — Directing and influencing people toward organizational goals\n- **Controlling** — Monitoring performance and correcting deviations\n\n## Chapter 2: Evolution of Management Thought\n- Classical Approach (Scientific and Administrative Management)\n- Behavioral Approach (Human Relations Movement)\n- Quantitative Approach\n- Modern Approach (Systems and Contingency Theory)\n\n## Chapter 3: Planning\nPlanning is the foundation of management. Steps:\n1. Setting objectives\n2. Analyzing the environment\n3. Identifying alternatives\n4. Selecting the best alternative\n5. Implementing and evaluating\n\n## Chapter 4: Organizing\n**Types of Organizational Structures:**\n- Line Organization\n- Line and Staff Organization\n- Functional Organization\n- Committee Organization\n\n## Chapter 5: Staffing\nStaffing involves filling positions in the organizational structure.\n- Human Resource Planning\n- Recruitment and Selection\n- Training and Development\n- Performance Appraisal\n- Compensation Management`,
  },
  {
    id: 2, title: 'Mid-Term Assignment — Marketing Strategy', level: 'BBA', year: 'Year 2',
    tag: 'Assignment', subject: 'Marketing', size: '0.9 MB', date: '2025-02-14',
    content: `# Mid-Term Assignment: Marketing Strategy\n\n## Q1: Define Marketing Strategy\nA marketing strategy is a long-term plan for achieving company goals through understanding customer needs and creating a **distinct, sustainable competitive advantage**.\n\n## Q2: The 7Ps of Marketing Mix\n1. **Product** — What you sell\n2. **Price** — How much you charge\n3. **Place** — Where you sell\n4. **Promotion** — How you communicate\n5. **People** — Who delivers the service\n6. **Process** — How the service is delivered\n7. **Physical Evidence** — Tangible proof of the service\n\n## Q3: STP Analysis\n- **Segmentation** — Dividing the market into distinct groups\n- **Targeting** — Selecting the most attractive segments\n- **Positioning** — Creating a distinct image in the consumer's mind`,
  },
  {
    id: 3, title: 'Unit Test — Financial Accounting', level: 'BBS', year: 'Year 1',
    tag: 'Test', subject: 'Accounting', size: '0.4 MB', date: '2025-01-20',
    content: `# Unit Test: Financial Accounting\n**Total Marks: 40 | Time: 1.5 hours**\n\n---\n\n## Section A: Short Questions (2x5=10)\n1. Define Accounting and list its objectives.\n2. What is the Double Entry System?\n3. Distinguish between Capital and Revenue Expenditure.\n4. What is a Trial Balance? State its limitations.\n5. Define Depreciation and name two methods.\n\n## Section B: Long Questions (10x3=30)\n\n**Q1.** From the following transactions, prepare a Journal, Ledger, and Trial Balance.\n\n**Q2.** Prepare the Trading and P&L Account and Balance Sheet.\n\n**Q3.** Explain Depreciation. Calculate using Straight Line Method and Written Down Value Method.`,
  },
  {
    id: 4, title: 'Data Structures Lab Report — Trees', level: 'BCA', year: 'Year 2',
    tag: 'Lab Report', subject: 'Data Structures', size: '1.2 MB', date: '2025-02-05',
    content: `# Lab Report: Tree Data Structures\n**Lab No:** 5 | **Date:** February 5, 2025\n\n## Objective\nImplement Binary Tree and BST in C and perform traversal operations.\n\n## Theory\nA **tree** is a hierarchical data structure with nodes connected by edges.\n\n### Binary Search Tree (BST)\n- Left subtree contains keys less than the parent node\n- Right subtree contains keys greater than the parent node\n\n## Result\nSuccessfully implemented BST with Insert, Delete, Search and all three traversals.\n\n## Conclusion\nBinary Search Trees provide **O(log n)** average case for search, insert, and delete operations.`,
  },
  {
    id: 5, title: 'BCA Entrance Past Paper 2023', level: 'BCA', year: 'Year 1',
    tag: 'Past Paper', subject: 'Entrance Prep', size: '3.1 MB', date: '2024-12-01',
    content: `# BCA Entrance Examination 2023\n**Tribhuvan University | Full Marks: 100 | Pass Marks: 40 | Time: 3 Hours**\n\n---\n\n## Section A: Mathematics (40 Marks)\n1. If f(x) = x squared + 2x + 1, find f(3) and f(-1).\n2. Solve: 2x squared - 5x + 3 = 0\n3. Sum of first 20 terms of AP: 3, 7, 11 ...\n\n## Section B: Computer Science (40 Marks)\n5. What is an Algorithm? List its characteristics.\n6. Differentiate between RAM and ROM.\n7. Convert decimal 255 to binary.\n8. Write a C program to check if a number is prime.\n\n## Section C: General Knowledge (20 Marks)\n9. Full form of HTTP, HTML, CSS, SQL.\n10. Name the first computer programmer and her contribution.`,
  },
  {
    id: 6, title: 'Operating Systems Full Syllabus', level: 'B.Sc. CSIT', year: 'Year 3',
    tag: 'Syllabus', subject: 'OS', size: '0.3 MB', date: '2025-01-02',
    content: `# Operating Systems — Full Syllabus\n**B.Sc. CSIT | Year 3 | Tribhuvan University**\n\n## Unit 1: Introduction to OS (4 hrs)\n- Definition, objectives and functions of OS\n- Types: Batch, Time-sharing, Real-time, Distributed\n\n## Unit 2: Process Management (8 hrs)\n- Process concept, PCB, process states and transitions\n- CPU Scheduling: FCFS, SJF, Priority, Round Robin\n- Deadlock: conditions, prevention, avoidance, detection\n\n## Unit 3: Memory Management (8 hrs)\n- Logical vs. physical address space\n- Paging, Segmentation, Virtual Memory\n- Page replacement algorithms: LRU, FIFO, Optimal\n\n## Reference Books\n1. Operating System Concepts — Silberschatz, Galvin and Gagne\n2. Modern Operating Systems — Andrew S. Tanenbaum`,
  },
  {
    id: 7, title: 'Business Communication Notes — Unit 3', level: 'MBA', year: 'Year 1',
    tag: 'Notes', subject: 'Communication', size: '1.8 MB', date: '2025-02-18',
    content: `# Business Communication — Unit 3: Written Communication\n\n## 3.1 Importance of Written Communication\nWritten communication creates a permanent record. Key advantages:\n- Provides written evidence\n- Reaches wider audiences\n- Can be carefully edited and reviewed\n\n## 3.2 Business Letter Writing\n**Parts of a Business Letter:**\n1. Heading (Sender's Address)\n2. Date\n3. Inside Address\n4. Salutation\n5. Subject Line\n6. Body of the Letter\n7. Complimentary Close\n8. Signature\n\n## 3.4 Email Etiquette\n- Use a professional subject line\n- Keep messages concise and focused\n- Reply within 24 hours\n- Proofread before sending`,
  },
  {
    id: 8, title: 'Strategic Management Assignment Q3', level: 'MBA', year: 'Year 2',
    tag: 'Assignment', subject: 'Strategy', size: '1.1 MB', date: '2025-03-01',
    content: `# Strategic Management — SWOT Analysis: Nabil Bank Ltd.\n\n## Strengths\n- Largest private commercial bank in Nepal\n- Strong brand recognition and customer trust\n- Wide network of branches and ATMs\n- Advanced digital banking platform\n\n## Weaknesses\n- High operating costs compared to fintech players\n- Limited rural penetration despite expansion efforts\n\n## Opportunities\n- Growing mobile banking adoption in Nepal\n- Government financial inclusion initiatives\n\n## Threats\n- Competition from new banks and fintech startups\n- Regulatory changes by Nepal Rastra Bank\n\n## Strategic Recommendations\n1. Accelerate digital transformation\n2. Expand rural microfinance services\n3. Diversify revenue through fee-based services`,
  },
  {
    id: 9, title: 'Advanced Accounting — Chapter 6-8', level: 'MBS', year: 'Year 1',
    tag: 'Notes', subject: 'Accounting', size: '2.0 MB', date: '2025-01-25',
    content: `# Advanced Accounting — Chapters 6–8\n\n## Chapter 6: Partnership Accounts\nA partnership is an association of two or more persons carrying on a business with a view to profit.\n\n**Key Topics:**\n- Profit and Loss Appropriation Account\n- Fixed and Fluctuating Capital Accounts\n\n## Chapter 7: Company Accounts\n**Types of Share Capital:**\n- Authorized Capital, Issued Capital, Subscribed Capital, Paid-up Capital\n\n## Chapter 8: Amalgamation (AS-14)\n**Types:**\n- **Merger Method** — Pooling of Interests\n- **Purchase Method** — Purchase of Assets and Liabilities`,
  },
  {
    id: 10, title: 'CSIT Model Question Paper 2024', level: 'B.Sc. CSIT', year: 'Year 4',
    tag: 'Past Paper', subject: 'Exam Prep', size: '2.8 MB', date: '2024-11-15',
    content: `# B.Sc. CSIT Model Question Paper 2024\n**TU | Year 4 | Full Marks: 60 | Time: 3 Hours**\n\n## Group A: Very Short Questions (10x1=10)\n1. Define Artificial Intelligence.\n2. What is a Neural Network?\n3. Expand REST and SOAP.\n4. What is Docker? Name its key component.\n5. Define Big Data and its 3 Vs.\n\n## Group B: Short Questions (5x4=20)\n1. Explain the OSI model with its 7 layers.\n2. Describe the Software Development Life Cycle.\n3. Compare SQL vs NoSQL databases with examples.\n\n## Group C: Long Questions (2x15=30)\n1. Explain Database Normalization up to 3NF with examples.\n2. Design a React.js student management system.`,
  },
  {
    id: 11, title: 'Microeconomics Unit Test — Demand & Supply', level: 'BBA', year: 'Year 1',
    tag: 'Test', subject: 'Economics', size: '0.5 MB', date: '2025-02-22',
    content: `# Unit Test: Demand and Supply\n**Full Marks: 25 | Time: 45 minutes**\n\n## Q1. Law of Demand with diagram (5 marks)\nThe Law of Demand states: as price rises, quantity demanded falls, other things remaining constant.\n\n**Exceptions:** Giffen goods, Veblen goods, expected future price increases\n\n## Q2. Determinants of Supply (5 marks)\n1. Price of the commodity\n2. Cost of production\n3. Technology\n4. Government policies (taxes and subsidies)\n\n## Q4. Equilibrium Calculation (10 marks)\nGiven: Qd = 100 - 2P and Qs = 20 + 3P\n\n**Equilibrium Price P = 16, Quantity Q = 68**`,
  },
  {
    id: 12, title: 'Network Lab Report — Subnetting', level: 'B.Sc. CSIT', year: 'Year 3',
    tag: 'Lab Report', subject: 'Computer Networks', size: '1.6 MB', date: '2025-03-03',
    content: `# Lab Report: Subnetting and IP Addressing\n**Lab No:** 8 | **Date:** March 3, 2025\n\n## Objective\nUnderstand and practice subnetting of IP addresses using CIDR notation.\n\n## Theory\n**Subnetting** is the process of dividing a network into smaller subnetworks for efficient IP utilization.\n\n## Problems Solved\n\n### Problem 1 — IP: 192.168.1.0/26\n- Subnet Mask: 255.255.255.192\n- Number of Subnets: 4\n- Hosts per Subnet: 62\n\n### Problem 2 — IP: 172.16.0.0/20\n- Subnet Mask: 255.255.240.0\n- Hosts per Subnet: 4094\n\n## Conclusion\nSubnetting enables efficient IP address usage and improves network performance through traffic segmentation.`,
  },
]

// ─── Markdown Renderer ────────────────────────────────────────────────────────

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
        if (line.startsWith('# '))
          return <h1 key={i} className="text-lg font-black text-[#252872] pt-4 pb-1 first:pt-0">{line.slice(2)}</h1>
        if (line.startsWith('## '))
          return <h2 key={i} className="text-sm font-bold text-[#252872] pt-3 pb-1 border-b border-[#252872]/10">{line.slice(3)}</h2>
        if (line.startsWith('### '))
          return <h3 key={i} className="text-sm font-bold text-[#d91f22] pt-2">{line.slice(4)}</h3>
        if (line.startsWith('- '))
          return <li key={i} className="text-sm text-gray-600 ml-5 list-disc leading-relaxed py-0.5">{parseBold(line.slice(2))}</li>
        if (/^\d+\./.test(line))
          return <li key={i} className="text-sm text-gray-600 ml-5 list-decimal leading-relaxed py-0.5">{parseBold(line.replace(/^\d+\.\s/, ''))}</li>
        if (line.startsWith('---'))
          return <hr key={i} className="border-gray-100 my-3" />
        if (line.trim() === '')
          return <div key={i} className="h-1.5" />
        return <p key={i} className="text-sm text-gray-600 leading-relaxed">{parseBold(line)}</p>
      })}
    </div>
  )
}

// ─── Filter Chip ──────────────────────────────────────────────────────────────

function FilterChip({
  label, active, onClick, accent = 'blue',
}: {
  label: string
  active: boolean
  onClick: () => void
  accent?: 'blue' | 'red'
}) {
  const accentStyles: Record<'blue' | 'red', string> = {
    blue: active
      ? 'bg-[#252872] text-white border-[#252872] shadow-sm shadow-[#252872]/20'
      : 'border-gray-200 text-gray-600 hover:border-[#252872]/40 hover:text-[#252872] hover:bg-[#252872]/5',
    red: active
      ? 'bg-[#d91f22] text-white border-[#d91f22] shadow-sm shadow-[#d91f22]/20'
      : 'border-gray-200 text-gray-600 hover:border-[#d91f22]/40 hover:text-[#d91f22] hover:bg-[#d91f22]/5',
  }
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-150 whitespace-nowrap ${accentStyles[accent]}`}
    >
      {label}
    </button>
  )
}

// ─── Filter Sidebar ───────────────────────────────────────────────────────────

function FilterSidebar({
  search, setSearch, level, setLevel, year, setYear,
  tag, setTag, clearAll, hasFilters, total, filtered,
}: FilterProps) {
  return (
    <aside className="w-full lg:w-64 xl:w-72 shrink-0 space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#252872] flex items-center justify-center">
            <SlidersHorizontal className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-sm font-bold text-[#252872]">Filters</span>
        </div>
        {hasFilters && (
          <button
            onClick={clearAll}
            className="flex items-center gap-1 text-xs text-[#d91f22] font-semibold hover:opacity-75 transition-opacity"
          >
            <RotateCcw className="w-3 h-3" /> Reset
          </button>
        )}
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-8 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#252872]/20 focus:border-[#252872] transition-all placeholder:text-gray-400"
        />
        {search && (
          <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2">
            <X className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {/* Result counter */}
      <div className="bg-gradient-to-r from-[#252872]/8 to-[#d91f22]/8 rounded-xl px-4 py-3 mb-5 border border-[#252872]/10">
        <p className="text-xs text-gray-500 mb-0.5">Showing results</p>
        <p className="text-lg font-black text-[#252872]">
          {filtered} <span className="text-sm font-medium text-gray-400">of {total}</span>
        </p>
      </div>

      {/* Program */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-1.5">
          <GraduationCap className="w-3 h-3 text-[#252872]" /> Program
        </p>
        <div className="flex flex-wrap gap-1.5">
          {LEVELS.map((l) => (
            <FilterChip key={l} label={l} active={level === l} onClick={() => setLevel(l)} accent="blue" />
          ))}
        </div>
      </div>

      {/* Year */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-1.5">
          <Calendar className="w-3 h-3 text-[#252872]" /> Academic Year
        </p>
        <div className="flex flex-wrap gap-1.5">
          {YEARS.map((y) => (
            <FilterChip key={y} label={y} active={year === y} onClick={() => setYear(y)} accent="blue" />
          ))}
        </div>
      </div>

      {/* Type */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-1.5">
          <FileText className="w-3 h-3 text-[#d91f22]" /> Document Type
        </p>
        <div className="flex flex-col gap-1.5">
          {TAGS.map((t) => {
            const cfg = tagConfig[t as Tag]
            const isActive = tag === t
            const Icon = cfg?.icon ?? FileText
            return (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-left transition-all duration-150 border ${
                  isActive
                    ? 'bg-[#d91f22] text-white border-[#d91f22] shadow-sm'
                    : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                {t}
                {t !== 'All' && (
                  <span className={`ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                    isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {notes.filter((n) => n.tag === t).length}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

// ─── Note Card ────────────────────────────────────────────────────────────────

function NoteCard({
  note, onView, index,
}: {
  note: Note
  onView: (n: Note) => void
  index: number
}) {
  const cfg      = tagConfig[note.tag]
  const TagIcon  = cfg.icon
  const lvlColor = levelColors[note.level] ?? 'bg-slate-700 text-white'

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ delay: index * 0.04, duration: 0.25 }}
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden flex flex-col"
    >
      {/* Tag-coloured top bar */}
      <div className={`h-1 w-full ${cfg.dot}`} />

      <div className="p-5 flex flex-col flex-1">
        {/* Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1.5 rounded-lg border ${cfg.bg} ${cfg.text} ${cfg.border}`}>
            <TagIcon className="w-3 h-3" />
            {note.tag}
          </span>
          <span className={`text-[10px] font-bold px-2.5 py-1.5 rounded-lg ${lvlColor}`}>
            {note.level}
          </span>
        </div>

        {/* Title */}
        <h4 className="text-sm font-bold text-gray-900 leading-snug mb-1 group-hover:text-[#252872] transition-colors line-clamp-2 flex-1">
          {note.title}
        </h4>
        <p className="text-xs text-gray-400 font-medium mb-4">{note.subject}</p>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
            <Calendar className="w-3 h-3" />
            {new Date(note.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
            <HardDrive className="w-3 h-3" />
            {note.size}
          </span>
          <span className="ml-auto text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md font-semibold">
            {note.year}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-3 border-t border-gray-100 mt-auto">
          <button
            onClick={() => onView(note)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold border border-[#252872]/20 text-[#252872] bg-[#252872]/4 hover:bg-[#252872] hover:text-white hover:border-[#252872] transition-all duration-150"
          >
            <Eye className="w-3.5 h-3.5" /> Preview
          </button>
          <button className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#252872] to-[#d91f22] hover:opacity-90 shadow-sm transition-opacity">
            <Download className="w-3.5 h-3.5" /> Download
          </button>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Viewer Modal ─────────────────────────────────────────────────────────────

function NoteViewer({ note, onClose }: { note: Note; onClose: () => void }) {
  const cfg     = tagConfig[note.tag]
  const TagIcon = cfg.icon

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
        {/* Header */}
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
              <span className="text-white/50 text-[11px] flex items-center gap-1">
                <HardDrive className="w-3 h-3" /> {note.size}
              </span>
              <span className="text-white/50 text-[11px] flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(note.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center shrink-0 transition-colors ring-1 ring-white/20"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          <MarkdownContent text={note.content} />
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 px-6 py-4 flex items-center justify-between gap-3 shrink-0 bg-gray-50/60">
          <p className="text-xs text-gray-400">{note.subject} · {note.level} · {note.year}</p>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-gray-500 hover:border-[#252872] hover:text-[#252872] transition-colors"
            >
              Close
            </button>
            <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#252872] to-[#d91f22] text-white text-sm font-bold flex items-center gap-2 hover:opacity-90 shadow-md transition-opacity">
              <Download className="w-4 h-4" /> Download
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── Mobile Filter Drawer ─────────────────────────────────────────────────────

function MobileFilterDrawer({
  open, onClose, children,
}: {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed left-0 top-0 bottom-0 z-50 w-80 bg-gray-50 overflow-y-auto p-4 shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-[#252872]">Filters</span>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function NotesSection() {
  const [search,     setSearch]     = useState<string>('')
  const [level,      setLevel]      = useState<string>('All')
  const [year,       setYear]       = useState<string>('All')
  const [tag,        setTag]        = useState<string>('All')
  const [viewing,    setViewing]    = useState<Note | null>(null)
  const [mobileOpen, setMobileOpen] = useState<boolean>(false)

  const filtered = useMemo<Note[]>(() =>
    notes.filter((n) => {
      const q = search.toLowerCase()
      return (
        (level === 'All' || n.level === level) &&
        (year  === 'All' || n.year  === year)  &&
        (tag   === 'All' || n.tag   === tag)   &&
        (n.title.toLowerCase().includes(q) || n.subject.toLowerCase().includes(q))
      )
    }),
    [search, level, year, tag]
  )

  const clearAll   = () => { setSearch(''); setLevel('All'); setYear('All'); setTag('All') }
  const hasFilters = !!(search || level !== 'All' || year !== 'All' || tag !== 'All')

  const filterProps: FilterProps = {
    search, setSearch, level, setLevel, year, setYear,
    tag, setTag, clearAll, hasFilters,
    total: notes.length, filtered: filtered.length,
  }

  return (
    <div className="min-h-screen bg-gray-50/70">
      {/* Page header */}
      <div className="bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-black text-[#252872] tracking-tight">Study Notes</h1>
            <p className="text-sm text-gray-400 mt-0.5">Browse, preview and download academic resources</p>
          </div>
          {/* Mobile filter toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#252872] text-white text-sm font-bold self-start sm:self-auto"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasFilters && (
              <span className="w-5 h-5 rounded-full bg-[#d91f22] text-white text-[10px] font-black flex items-center justify-center">!</span>
            )}
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6 items-start">

          {/* Desktop sidebar */}
          <div className="hidden lg:block sticky top-6">
            <FilterSidebar {...filterProps} />
          </div>

          {/* Mobile drawer */}
          <MobileFilterDrawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
            <FilterSidebar {...filterProps} />
          </MobileFilterDrawer>

          {/* Cards area */}
          <div className="flex-1 min-w-0">
            {/* Active filter chips */}
            {hasFilters && (
              <div className="flex flex-wrap gap-2 mb-4">
                {search && (
                  <span className="flex items-center gap-1.5 text-xs font-semibold bg-[#252872]/10 text-[#252872] px-3 py-1.5 rounded-full">
                    "{search}"
                    <button onClick={() => setSearch('')}><X className="w-3 h-3" /></button>
                  </span>
                )}
                {level !== 'All' && (
                  <span className="flex items-center gap-1.5 text-xs font-semibold bg-[#252872]/10 text-[#252872] px-3 py-1.5 rounded-full">
                    {level}
                    <button onClick={() => setLevel('All')}><X className="w-3 h-3" /></button>
                  </span>
                )}
                {year !== 'All' && (
                  <span className="flex items-center gap-1.5 text-xs font-semibold bg-[#252872]/10 text-[#252872] px-3 py-1.5 rounded-full">
                    {year}
                    <button onClick={() => setYear('All')}><X className="w-3 h-3" /></button>
                  </span>
                )}
                {tag !== 'All' && (
                  <span className="flex items-center gap-1.5 text-xs font-semibold bg-[#d91f22]/10 text-[#d91f22] px-3 py-1.5 rounded-full">
                    {tag}
                    <button onClick={() => setTag('All')}><X className="w-3 h-3" /></button>
                  </span>
                )}
                <button onClick={clearAll} className="text-xs font-semibold text-gray-400 hover:text-[#d91f22] transition-colors">
                  Clear all
                </button>
              </div>
            )}

            {/* Grid or empty state */}
            {filtered.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-2xl border border-dashed border-gray-200 py-20 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-7 h-7 text-gray-300" />
                </div>
                <p className="text-gray-500 font-bold mb-1">No notes found</p>
                <p className="text-sm text-gray-400 mb-4">Try adjusting your filters or search term</p>
                <button onClick={clearAll} className="text-sm text-[#d91f22] font-bold hover:underline">
                  Clear all filters
                </button>
              </motion.div>
            ) : (
              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                <AnimatePresence mode="popLayout">
                  {filtered.map((note, i) => (
                    <NoteCard key={note.id} note={note} onView={setViewing} index={i} />
                  ))}
                </AnimatePresence>
              </motion.div>
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