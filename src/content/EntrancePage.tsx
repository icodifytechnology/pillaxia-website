'use client'

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Filter,
  ChevronRight,
  GraduationCap,
  Search,
  Clock,
  Users,
  CheckCircle2,
  X,
  BookOpen,
  School,
  Award,
  Stethoscope,
  Wrench,
  BarChart3,
  Cpu,
  Scale,
  BookMarked,
  Layers,
} from 'lucide-react'
import { AdBanner } from '../components/AdBanner'
import { Newsletter } from '../components/Newsletter'

// ─── Category icon + colour config (from previous redesign) ──────────────────

const categoryConfig: Record<string, { icon: React.ElementType; accent: string; badge: string; border: string }> = {
  Medical:            { icon: Stethoscope, accent: 'bg-rose-100 text-rose-600',    badge: 'bg-rose-50 text-rose-700 border-rose-200',       border: 'border-rose-200' },
  Engineering:        { icon: Wrench,      accent: 'bg-blue-100 text-blue-600',    badge: 'bg-blue-50 text-blue-700 border-blue-200',         border: 'border-blue-200' },
  Management:         { icon: BarChart3,   accent: 'bg-emerald-100 text-emerald-600', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', border: 'border-emerald-200' },
  IT:                 { icon: Cpu,         accent: 'bg-orange-100 text-orange-600', badge: 'bg-orange-50 text-orange-700 border-orange-200',   border: 'border-orange-200' },
  Law:                { icon: Scale,       accent: 'bg-yellow-100 text-yellow-600', badge: 'bg-yellow-50 text-yellow-700 border-yellow-200',   border: 'border-yellow-200' },
  Secondary:          { icon: BookMarked,  accent: 'bg-purple-100 text-purple-600', badge: 'bg-purple-50 text-purple-700 border-purple-200',   border: 'border-purple-200' },
  'Higher Secondary': { icon: Layers,      accent: 'bg-indigo-100 text-indigo-600', badge: 'bg-indigo-50 text-indigo-700 border-indigo-200',   border: 'border-indigo-200' },
}

const CATEGORY_ORDER = ['Medical', 'Engineering', 'Management', 'IT', 'Law', 'Secondary', 'Higher Secondary']

// ─── Data ─────────────────────────────────────────────────────────────────────

const entranceCourses = [
  { id: 1,  title: 'CMAT Preparation',        university: 'Tribhuvan University',         category: 'Management',       level: 'Bachelors', duration: '10 Weeks', students: '2.5k+', color: 'bg-green-500' },
  { id: 2,  title: 'IOE Entrance',            university: 'Tribhuvan University',         category: 'Engineering',      level: 'Bachelors', duration: '12 Weeks', students: '5k+',   color: 'bg-blue-500' },
  { id: 3,  title: 'SEE (Class 10)',          university: 'Government of Nepal',          category: 'Secondary',        level: 'Class 10',  duration: '8 Weeks',  students: '12k+',  color: 'bg-purple-500' },
  { id: 4,  title: 'MBBS Entrance (CEE)',     university: 'Medical Education Commission', category: 'Medical',          level: 'Bachelors', duration: '16 Weeks', students: '8k+',   color: 'bg-red-500' },
  { id: 5,  title: 'NEB Class 12 (+2)',       university: 'National Examination Board',   category: 'Higher Secondary', level: '+2',        duration: '10 Weeks', students: '15k+',  color: 'bg-indigo-500' },
  { id: 6,  title: 'BCA Entrance',            university: 'Tribhuvan University',         category: 'IT',               level: 'Bachelors', duration: '8 Weeks',  students: '4k+',   color: 'bg-orange-500' },
  { id: 7,  title: 'CSIT Entrance',           university: 'Tribhuvan University',         category: 'IT',               level: 'Bachelors', duration: '10 Weeks', students: '6k+',   color: 'bg-orange-500' },
  { id: 8,  title: 'Nursing Entrance',        university: 'CTEVT',                        category: 'Medical',          level: 'Bachelors', duration: '8 Weeks',  students: '2k+',   color: 'bg-red-500' },
  { id: 9,  title: 'KUUMAT',                  university: 'Kathmandu University',         category: 'Management',       level: 'Bachelors', duration: '9 Weeks',  students: '1.8k+', color: 'bg-green-500' },
  { id: 10, title: 'KUET (KU Engineering)',   university: 'Kathmandu University',         category: 'Engineering',      level: 'Bachelors', duration: '11 Weeks', students: '2.2k+', color: 'bg-blue-500' },
  { id: 11, title: 'PUSET (PU Engineering)',  university: 'Pokhara University',           category: 'Engineering',      level: 'Bachelors', duration: '10 Weeks', students: '1.5k+', color: 'bg-blue-500' },
  { id: 12, title: 'Law Entrance',            university: 'Tribhuvan University',         category: 'Law',              level: 'Bachelors', duration: '8 Weeks',  students: '1.2k+', color: 'bg-yellow-500' },
]

export function EntrancePage() {
  const [selectedCategories,   setSelectedCategories]   = useState<string[]>([])
  const [selectedLevels,       setSelectedLevels]       = useState<string[]>([])
  const [selectedUniversities, setSelectedUniversities] = useState<string[]>([])
  const [searchQuery,          setSearchQuery]          = useState('')
  const [sortBy,               setSortBy]               = useState('Popularity')

  const categories   = [
    { name: 'Medical', count: 2 }, { name: 'Engineering', count: 4 }, { name: 'Management', count: 2 },
    { name: 'IT', count: 2 }, { name: 'Law', count: 1 }, { name: 'Secondary', count: 1 }, { name: 'Higher Secondary', count: 1 },
  ]
  const levels       = [
    { name: 'Class 10', count: 1 }, { name: '+2', count: 1 }, { name: 'Bachelors', count: 10 }, { name: 'Masters', count: 5 },
  ]
  const universities = [
    { name: 'Tribhuvan University', count: 5 }, { name: 'Kathmandu University', count: 2 }, { name: 'Pokhara University', count: 1 },
    { name: 'Government of Nepal', count: 1 }, { name: 'Medical Education Commission', count: 1 }, { name: 'CTEVT', count: 1 }, { name: 'National Examination Board', count: 1 },
  ]

  const toggleCategory   = (v: string) => setSelectedCategories((p)   => p.includes(v) ? p.filter(x => x !== v) : [...p, v])
  const toggleLevel      = (v: string) => setSelectedLevels((p)       => p.includes(v) ? p.filter(x => x !== v) : [...p, v])
  const toggleUniversity = (v: string) => setSelectedUniversities((p) => p.includes(v) ? p.filter(x => x !== v) : [...p, v])

  const filteredCourses = entranceCourses.filter((course) => {
    const matchesCategory   = selectedCategories.length   === 0 || selectedCategories.includes(course.category)
    const matchesLevel      = selectedLevels.length       === 0 || selectedLevels.includes(course.level)
    const matchesUniversity = selectedUniversities.length === 0 || selectedUniversities.includes(course.university)
    const matchesSearch     = course.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesLevel && matchesUniversity && matchesSearch
  })

  const groupedCourses = useMemo(() => {
    const map: Record<string, typeof entranceCourses> = {}
    filteredCourses.forEach((c) => { if (!map[c.category]) map[c.category] = []; map[c.category].push(c) })
    return CATEGORY_ORDER.filter((cat) => map[cat]?.length > 0).map((cat) => ({ category: cat, courses: map[cat] }))
  }, [filteredCourses])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Header */}
      <div className="bg-gradient-to-r from-[#252872] to-[#d91f22] text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-400 opacity-10 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Entrance Preparation</h1>
          <p className="text-red-50 text-lg max-w-2xl mb-6">
            Comprehensive preparation courses for top universities and colleges in Nepal. Secure your seat with our expert-led classes.
          </p>
          <div className="flex items-center text-sm text-red-100 font-medium">
            <span className="hover:text-white cursor-pointer">Home</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Entrance</span>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Courses',     value: '12',  icon: BookOpen },
              { label: 'Students Enrolled', value: '60k+', icon: Users },
              { label: 'Universities',      value: '7',   icon: School },
              { label: 'Streams',           value: '7',   icon: GraduationCap },
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

          {/* Sidebar — original unchanged */}
          <aside className="lg:w-1/4 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-[#252872] flex items-center">
                  <Filter className="w-5 h-5 mr-2 text-[#d91f22]" />
                  Filters
                  {(selectedCategories.length + selectedLevels.length + selectedUniversities.length) > 0 && (
                    <span className="ml-2 bg-[#d91f22] text-white text-xs px-2 py-0.5 rounded-full">
                      {selectedCategories.length + selectedLevels.length + selectedUniversities.length}
                    </span>
                  )}
                </h3>
                {(selectedCategories.length > 0 || selectedLevels.length > 0 || selectedUniversities.length > 0 || searchQuery) && (
                  <button onClick={() => { setSelectedCategories([]); setSelectedLevels([]); setSelectedUniversities([]); setSearchQuery('') }}
                    className="text-xs text-[#d91f22] hover:underline font-medium">Reset</button>
                )}
              </div>

              {/* Search */}
              <div className="mb-6 relative">
                <input type="text" placeholder="Find entrance course..." value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d91f22] focus:border-transparent text-sm bg-gray-50" />
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
              </div>

              {/* Level */}
              <div className="mb-6">
                <h4 className="font-semibold text-[#252872] mb-3 text-sm uppercase tracking-wider">Level</h4>
                <div className="space-y-2">
                  {levels.map((level) => (
                    <label key={level.name} className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedLevels.includes(level.name) ? 'bg-[#d91f22] border-[#d91f22]' : 'border-gray-300 group-hover:border-[#d91f22]'}`}>
                          {selectedLevels.includes(level.name) && <CheckCircle2 className="w-3 h-3 text-white" />}
                        </div>
                        <input type="checkbox" className="hidden" checked={selectedLevels.includes(level.name)} onChange={() => toggleLevel(level.name)} />
                        <span className={`text-sm ${selectedLevels.includes(level.name) ? 'text-[#252872] font-medium' : 'text-gray-600 group-hover:text-[#252872]'}`}>{level.name}</span>
                      </div>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{level.count}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Stream */}
              <div className="mb-6">
                <h4 className="font-semibold text-[#252872] mb-3 text-sm uppercase tracking-wider">Stream</h4>
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

              {/* University */}
              <div>
                <h4 className="font-semibold text-[#252872] mb-3 text-sm uppercase tracking-wider">University</h4>
                <div className="space-y-2">
                  {universities.map((uni) => (
                    <label key={uni.name} className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedUniversities.includes(uni.name) ? 'bg-[#d91f22] border-[#d91f22]' : 'border-gray-300 group-hover:border-[#d91f22]'}`}>
                          {selectedUniversities.includes(uni.name) && <CheckCircle2 className="w-3 h-3 text-white" />}
                        </div>
                        <input type="checkbox" className="hidden" checked={selectedUniversities.includes(uni.name)} onChange={() => toggleUniversity(uni.name)} />
                        <span className={`text-sm ${selectedUniversities.includes(uni.name) ? 'text-[#252872] font-medium' : 'text-gray-600 group-hover:text-[#252872]'}`}>{uni.name}</span>
                      </div>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{uni.count}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                Showing <span className="font-bold text-[#252872]">{filteredCourses.length}</span> courses
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border-none bg-transparent font-semibold text-[#252872] focus:ring-0 cursor-pointer">
                  <option>Popularity</option>
                  <option>Duration</option>
                  <option>A-Z</option>
                </select>
              </div>
            </div>

            {/* Active filter pills — original */}
            {(selectedCategories.length > 0 || selectedLevels.length > 0 || selectedUniversities.length > 0) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedLevels.map((level) => (
                  <button key={level} onClick={() => toggleLevel(level)}
                    className="flex items-center space-x-1 bg-red-50 text-[#d91f22] px-3 py-1 rounded-full text-xs font-medium hover:bg-red-100 transition-colors">
                    <span>{level}</span><X className="w-3 h-3" />
                  </button>
                ))}
                {selectedCategories.map((cat) => (
                  <button key={cat} onClick={() => toggleCategory(cat)}
                    className="flex items-center space-x-1 bg-red-50 text-[#d91f22] px-3 py-1 rounded-full text-xs font-medium hover:bg-red-100 transition-colors">
                    <span>{cat}</span><X className="w-3 h-3" />
                  </button>
                ))}
                {selectedUniversities.map((uni) => (
                  <button key={uni} onClick={() => toggleUniversity(uni)}
                    className="flex items-center space-x-1 bg-red-50 text-[#d91f22] px-3 py-1 rounded-full text-xs font-medium hover:bg-red-100 transition-colors">
                    <span>{uni}</span><X className="w-3 h-3" />
                  </button>
                ))}
              </div>
            )}

            {/* ── Grouped cards with previous redesign's section headers ── */}
            <AnimatePresence>
              {groupedCourses.length > 0 ? (
                groupedCourses.map(({ category, courses }) => {
                  const cfg  = categoryConfig[category] ?? { icon: BookOpen, accent: 'bg-gray-100 text-gray-600', badge: 'bg-gray-50 text-gray-700 border-gray-200', border: 'border-gray-200' }
                  const Icon = cfg.icon
                  return (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mb-10"
                    >
                      {/* ── Category section header from previous redesign ── */}
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${cfg.accent}`}>
                          <Icon className="w-[18px] h-[18px]" />
                        </div>
                        <div>
                          <h2 className="text-lg font-black text-[#252872] leading-none">{category}</h2>
                          <p className="text-xs text-gray-400 mt-0.5">{courses.length} course{courses.length !== 1 ? 's' : ''} available</p>
                        </div>
                        <div className="flex-1 h-px bg-gray-100 ml-2" />
                        <span className={`px-3 py-1 text-[10px] font-bold rounded-full border ${cfg.badge}`}>
                          {courses.length}
                        </span>
                      </div>

                      {/* Original card grid & card markup */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <AnimatePresence>
                          {courses.map((course, index) => (
                            <motion.div
                              key={course.id}
                              layout
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              transition={{ delay: index * 0.05 }}
                              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col relative"
                            >
                              {/* Top Color Stripe */}
                              <div className={`h-1.5 w-full ${course.color}`} />

                              <div className="p-6 flex-1">
                                <div className="flex justify-between items-start mb-4">
                                  <div className="flex flex-col gap-2">
                                    <span className="inline-block px-3 py-1 bg-gray-50 text-gray-600 text-xs font-bold uppercase tracking-wider rounded-full">
                                      {course.category}
                                    </span>
                                    <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full">
                                      <Award className="w-3 h-3 mr-1" />
                                      {course.level}
                                    </span>
                                  </div>
                                  <div className="bg-red-50 p-2 rounded-full">
                                    <GraduationCap className="w-5 h-5 text-[#d91f22]" />
                                  </div>
                                </div>

                                <h3 className="text-xl font-bold text-[#252872] mb-2 group-hover:text-[#d91f22] transition-colors">
                                  {course.title}
                                </h3>
                                <p className="text-gray-500 text-sm mb-6 font-medium">{course.university}</p>

                                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                                  <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-2 text-[#d91f22]" />
                                    {course.duration}
                                  </div>
                                  <div className="flex items-center">
                                    <Users className="w-4 h-4 mr-2 text-[#d91f22]" />
                                    {course.students}
                                  </div>
                                </div>
                              </div>

                              <div className="p-4 bg-gray-50 border-t border-gray-100 flex gap-3">
                                <button className="flex-1 bg-white border border-gray-200 text-[#252872] py-2.5 rounded-xl font-semibold text-sm hover:border-[#d91f22] hover:text-[#d91f22] transition-colors">
                                  View Syllabus
                                </button>
                                <button className="flex-1 bg-[#d91f22] text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-[#b91c1c] transition-colors shadow-md">
                                  Start Paper
                                </button>
                              </div>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )
                })
              ) : (
                <div className="text-center py-20">
                  <p className="text-gray-500 text-lg">No entrance courses found matching your criteria.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  )
}