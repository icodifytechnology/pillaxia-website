'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Filter,
  ChevronRight,
  BookOpen,
  Search,
  X,
  BarChart3,
  Layers,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Bell,
  Calendar,
  ExternalLink,
  Shield,
  Building2,
  Cpu,
  Users,
  Scale,
  BookMarked,
} from 'lucide-react'
import { AdBanner } from '@/src/components/AdBanner'
import { Newsletter } from '@/src/components/Newsletter'
import Link from 'next/link'

// ─── Category icon + colour config (same pattern as EntrancePage) ─────────────

const categoryConfig: Record<string, { icon: React.ElementType; accent: string; badge: string }> = {
  'Nepal Police': { icon: Shield, accent: 'bg-blue-100 text-blue-600', badge: 'bg-blue-50 text-blue-700 border-blue-200' },
  'Administration': { icon: Building2, accent: 'bg-indigo-100 text-indigo-600', badge: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  'Nepal Rastra Bank': { icon: BarChart3, accent: 'bg-emerald-100 text-emerald-600', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  'Technical': { icon: Cpu, accent: 'bg-orange-100 text-orange-600', badge: 'bg-orange-50 text-orange-700 border-orange-200' },
  'Teacher Service': { icon: BookMarked, accent: 'bg-purple-100 text-purple-600', badge: 'bg-purple-50 text-purple-700 border-purple-200' },
  'Nijamati': { icon: Users, accent: 'bg-rose-100 text-rose-600', badge: 'bg-rose-50 text-rose-700 border-rose-200' },
}

const CATEGORY_ORDER = ['Nepal Police', 'Administration', 'Nepal Rastra Bank', 'Technical', 'Teacher Service', 'Nijamati']

// ─── Notices data ─────────────────────────────────────────────────────────────

const loksewaNotices = [
  {
    id: 1,
    title: 'Section Officer (Open) Exam Schedule Published',
    org: 'Lok Sewa Aayog',
    date: '2025-03-10',
    tag: 'Exam Date',
    tagColor: 'bg-red-50 text-red-600 border-red-200',
    urgent: true,
  },
  {
    id: 2,
    title: 'Kharidar Level 4 Result Notice',
    org: 'Lok Sewa Aayog',
    date: '2025-03-08',
    tag: 'Result',
    tagColor: 'bg-green-50 text-green-600 border-green-200',
    urgent: false,
  },
  {
    id: 3,
    title: 'NRB Assistant Vacancy — 150 Posts',
    org: 'Nepal Rastra Bank',
    date: '2025-03-05',
    tag: 'Vacancy',
    tagColor: 'bg-blue-50 text-blue-600 border-blue-200',
    urgent: false,
  },
  {
    id: 4,
    title: 'Computer Operator Written Exam Postponed',
    org: 'Lok Sewa Aayog',
    date: '2025-03-03',
    tag: 'Notice',
    tagColor: 'bg-amber-50 text-amber-600 border-amber-200',
    urgent: true,
  },
  {
    id: 5,
    title: 'Nepal Police Inspector Admit Card Available',
    org: 'Nepal Police',
    date: '2025-02-28',
    tag: 'Admit Card',
    tagColor: 'bg-purple-50 text-purple-600 border-purple-200',
    urgent: false,
  },
]

// ─── Mock Data ────────────────────────────────────────────────────────────────

const loksewaCourses = [
  { id: 1, title: 'Inspector', sets: 2, category: 'Nepal Police', level: 'Officer' },
  { id: 2, title: 'Subba (Level 5)', sets: 5, category: 'Administration', level: 'Assistant' },
  { id: 3, title: 'Assistant', sets: 25, category: 'Nepal Rastra Bank', level: 'Assistant' },
  { id: 4, title: 'Technician/Pra. Sa.', sets: 1, category: 'Technical', level: 'Assistant' },
  { id: 5, title: 'Pra. Vi. (Level 4)', sets: 2, category: 'Teacher Service', level: 'Assistant' },
  { id: 6, title: 'Section Officer', sets: 12, category: 'Nijamati', level: 'Officer' },
  { id: 7, title: 'Kharidar (Level 4)', sets: 8, category: 'Administration', level: 'Assistant' },
  { id: 8, title: 'Computer Operator', sets: 15, category: 'Technical', level: 'Assistant' },
]

export function LoksewaPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLevel, setSelectedLevel] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('Default')

  const categories = [
    { name: 'Nepal Police', count: 12 },
    { name: 'Administration', count: 8 },
    { name: 'Nepal Rastra Bank', count: 5 },
    { name: 'Technical', count: 15 },
    { name: 'Teacher Service', count: 6 },
    { name: 'Nijamati', count: 20 },
  ]

  const toggleCategory = (cat: string) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== cat))
    } else {
      setSelectedCategories([...selectedCategories, cat])
    }
  }

  const filteredCourses = loksewaCourses.filter((course) => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(course.category)
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesLevel && matchesSearch
  })

  // Group filtered courses by category in canonical order
  const groupedCourses = CATEGORY_ORDER
    .map((cat) => ({ category: cat, courses: filteredCourses.filter((c) => c.category === cat) }))
    .filter(({ courses }) => courses.length > 0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Header — original unchanged */}
      <div className="bg-gradient-to-r from-[#252872] to-[#d91f22] text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Loksewa Preparation</h1>
          <div className="flex items-center text-sm text-gray-300">
            <span className="hover:text-white cursor-pointer">Home</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white font-medium">Loksewa</span>
          </div>
        </div>
      </div>

      {/* Stats Bar — original unchanged */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Positions', value: '8', icon: Briefcase },
              { label: 'Question Sets', value: '70+', icon: BookOpen },
              { label: 'Organizations', value: '6', icon: Layers },
              { label: 'Difficulty Levels', value: '2', icon: BarChart3 },
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="p-3 bg-white rounded-lg shadow-sm text-[#d91f22]">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#252872]">{stat.value}</div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* ── Sidebar ── */}
          <aside className="lg:w-1/4 space-y-5 sticky top-24">

            {/* Filters — original unchanged */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-[#252872] flex items-center">
                  <Filter className="w-5 h-5 mr-2 text-[#d91f22]" />
                  Filters
                  {(selectedCategories.length > 0 || selectedLevel !== 'All') && (
                    <span className="ml-2 bg-[#d91f22] text-white text-xs px-2 py-0.5 rounded-full">
                      {selectedCategories.length + (selectedLevel !== 'All' ? 1 : 0)}
                    </span>
                  )}
                </h3>
                {(selectedCategories.length > 0 || selectedLevel !== 'All' || searchQuery) && (
                  <button
                    onClick={() => { setSelectedCategories([]); setSelectedLevel('All'); setSearchQuery('') }}
                    className="text-xs text-[#d91f22] hover:underline font-medium"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Search */}
              <div className="mb-6 relative">
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d91f22] focus:border-transparent text-sm bg-gray-50"
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
              </div>

              {/* Level Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-[#252872] mb-3 text-sm uppercase tracking-wider">Level</h4>
                <div className="space-y-2">
                  {['All', 'Officer', 'Assistant'].map((level) => (
                    <label key={level} className="flex items-center space-x-3 cursor-pointer group">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${selectedLevel === level ? 'border-[#d91f22]' : 'border-gray-300 group-hover:border-[#d91f22]'}`}>
                        {selectedLevel === level && <div className="w-2 h-2 bg-[#d91f22] rounded-full" />}
                      </div>
                      <input type="radio" name="level" className="hidden" checked={selectedLevel === level} onChange={() => setSelectedLevel(level)} />
                      <span className={`text-sm ${selectedLevel === level ? 'text-[#252872] font-medium' : 'text-gray-600 group-hover:text-[#252872]'}`}>{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <h4 className="font-semibold text-[#252872] mb-3 text-sm uppercase tracking-wider">Organization</h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat.name} className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedCategories.includes(cat.name) ? 'bg-[#d91f22] border-[#d91f22]' : 'border-gray-300 group-hover:border-[#d91f22]'}`}>
                          {selectedCategories.includes(cat.name) && <CheckCircle2 className="w-3 h-3 text-white" />}
                        </div>
                        <input type="checkbox" className="hidden" checked={selectedCategories.includes(cat.name)} onChange={() => toggleCategory(cat.name)} />
                        <span className={`text-sm ${selectedCategories.includes(cat.name) ? 'text-[#252872] font-medium' : 'text-gray-600 group-hover:text-[#252872]'}`}>{cat.name}</span>
                      </div>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{cat.count}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Loksewa Notices */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <h3 className="text-sm font-bold text-[#252872] flex items-center gap-2">
                  <Bell className="w-4 h-4 text-[#d91f22]" /> Latest Notices
                </h3>
                <button className="text-[10px] font-bold text-[#d91f22] hover:underline flex items-center gap-0.5">
                  View All <ExternalLink className="w-3 h-3" />
                </button>
              </div>

              <div className="divide-y divide-gray-50">
                {loksewaNotices.map((notice) => (
                  <div key={notice.id} className="px-5 py-3.5 hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${notice.tagColor}`}>
                        {notice.tag}
                      </span>
                      {notice.urgent && (
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-red-500 text-white animate-pulse">
                          New
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-gray-800 leading-snug group-hover:text-[#252872] transition-colors line-clamp-2">
                      {notice.title}
                    </p>
                    <div className="flex items-center justify-between mt-1.5">
                      <span className="text-[10px] text-gray-400">{notice.org}</span>
                      <span className="text-[10px] text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(notice.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* ── Main Content ── */}
          <div className="lg:w-3/4">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                Showing <span className="font-bold text-[#252872]">{filteredCourses.length}</span> positions across{' '}
                <span className="font-bold text-[#252872]">{groupedCourses.length}</span> categories
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border-none bg-transparent font-semibold text-[#252872] focus:ring-0 cursor-pointer">
                  <option>Default</option>
                  <option>Most Sets</option>
                  <option>A-Z</option>
                </select>
              </div>
            </div>

            {/* Active filter pills — original unchanged */}
            {selectedCategories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategories.map((cat) => (
                  <button key={cat} onClick={() => toggleCategory(cat)}
                    className="flex items-center space-x-1 bg-red-50 text-[#d91f22] px-3 py-1 rounded-full text-xs font-medium hover:bg-red-100 transition-colors">
                    <span>{cat}</span><X className="w-3 h-3" />
                  </button>
                ))}
              </div>
            )}

            {/* ── Grouped cards with previous redesign's section headers ── */}
            <div className="space-y-10">
              <AnimatePresence>
                {groupedCourses.map(({ category, courses }) => {
                  const cfg = categoryConfig[category] ?? { icon: BookOpen, accent: 'bg-gray-100 text-gray-600', badge: 'bg-gray-50 text-gray-700 border-gray-200' }
                  const Icon = cfg.icon
                  return (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      {/* ── Category header from previous redesign ── */}
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${cfg.accent}`}>
                          <Icon className="w-[18px] h-[18px]" />
                        </div>
                        <div>
                          <h2 className="text-lg font-black text-[#252872] leading-none">{category}</h2>
                          <p className="text-xs text-gray-400 mt-0.5">{courses.length} position{courses.length !== 1 ? 's' : ''} available</p>
                        </div>
                        <div className="flex-1 h-px bg-gray-100 ml-2" />
                        <span className={`px-3 py-1 text-[10px] font-bold rounded-full border ${cfg.badge}`}>
                          {courses.length}
                        </span>
                      </div>

                      {/* Original card grid & card markup — untouched */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {courses.map((course, index) => (
                          <motion.div
                            key={course.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group relative"
                          >
                            {/* Left Accent Border */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#d91f22] group-hover:w-2 transition-all duration-300" />

                            <div className="p-6 pl-8">
                              <div className="flex justify-between items-start mb-4">
                                <span className={`inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md ${course.level === 'Officer' ? 'bg-indigo-50 text-indigo-600' : 'bg-orange-50 text-orange-600'}`}>
                                  {course.level}
                                </span>
                              </div>

                              <h3 className="text-xl font-bold text-[#252872] mb-2 group-hover:text-[#d91f22] transition-colors">
                                {course.title}
                              </h3>

                              <div className="flex items-center text-gray-500 mb-6 text-sm">
                                <BarChart3 className="w-4 h-4 mr-2 text-gray-400" />
                                <span className="font-semibold text-[#252872] mr-1">{course.sets}</span> Question Sets Available
                              </div>

                              <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                                <span className="text-xs text-gray-400 font-medium">Updated 2 days ago</span>
                                <Link href={`/loksewa/${course.id}`}>
                                  <button className="bg-[#d91f22] hover:bg-[#b91c1c] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center shadow-sm group-hover:shadow-md transform group-hover:-translate-y-0.5">
                                    Browse Set <ChevronRight className="ml-1 w-4 h-4" />
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-bold text-[#252872] mb-2">No positions found</h3>
                <p className="text-gray-500">Try adjusting your search or filters.</p>
                <button
                  onClick={() => { setSelectedCategories([]); setSelectedLevel('All'); setSearchQuery('') }}
                  className="mt-4 text-[#d91f22] font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <AdBanner />
      <Newsletter />
    </div>
  )
}