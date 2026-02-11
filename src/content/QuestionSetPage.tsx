'use client'

import React, { useState } from 'react'
import {
  ArrowLeft,
  Search,
  Filter,
  ChevronDown,
  Clock,
  HelpCircle,
  Trophy,
  User,
  CheckCircle2,
  BarChart3,
  PlayCircle,
  Lock,
  RotateCcw,
  MoreVertical,
  Star,
  Zap,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
// Mock Data
const questionSets = [
  {
    id: 1,
    title: 'Nepal Rastra Bank Officer Level – Set 1',
    category: 'Banking',
    level: 'Officer',
    questions: 50,
    time: '45 min',
    marks: 100,
    attempts: 1240,
    status: 'unattempted',
    isNew: true,
    isPopular: true,
  },
  {
    id: 2,
    title: 'Nepal Rastra Bank Assistant Level – Set 1',
    category: 'Banking',
    level: 'Assistant',
    questions: 50,
    time: '45 min',
    marks: 100,
    attempts: 850,
    status: 'attempted',
    score: 85,
    isNew: false,
    isPopular: true,
  },
  {
    id: 3,
    title: 'Nepal Police Inspector – Set 5',
    category: 'Security',
    level: 'Officer',
    questions: 100,
    time: '90 min',
    marks: 200,
    attempts: 560,
    status: 'unattempted',
    isNew: true,
    isPopular: false,
  },
  {
    id: 4,
    title: 'Kharidar (Level 4) – Set 12',
    category: 'Administration',
    level: 'Assistant',
    questions: 50,
    time: '45 min',
    marks: 100,
    attempts: 2100,
    status: 'locked',
    isNew: false,
    isPopular: true,
  },
  {
    id: 5,
    title: 'Section Officer – Set 3',
    category: 'Administration',
    level: 'Officer',
    questions: 100,
    time: '90 min',
    marks: 200,
    attempts: 340,
    status: 'unattempted',
    isNew: false,
    isPopular: false,
  },
  {
    id: 6,
    title: 'Computer Operator – Set 8',
    category: 'Technical',
    level: 'Assistant',
    questions: 50,
    time: '45 min',
    marks: 100,
    attempts: 980,
    status: 'attempted',
    score: 92,
    isNew: false,
    isPopular: false,
  },
]
const categories = ['All', 'Banking', 'Security', 'Administration', 'Technical']
const levels = ['All', 'Officer', 'Assistant'];

export function QuestionSetPage({ id } : any) {
  const { push: navigate } = useRouter();
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedLevel, setSelectedLevel] = useState('All')
  const [showFiltersMobile, setShowFiltersMobile] = useState(false)
  // Filter Logic
  const filteredSets = questionSets.filter((set) => {
    const matchesSearch = set.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === 'All' || set.category === selectedCategory
    const matchesLevel = selectedLevel === 'All' || set.level === selectedLevel
    return matchesSearch && matchesCategory && matchesLevel
  })
  return (
    <div className="min-h-screen bg-gray-50 pb-12 font-sans text-gray-800">
      {/* Header / Breadcrumb */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/loksewa')}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-[#252872]">
                  Question Sets
                </h1>
                <p className="text-xs text-gray-500 hidden sm:block">
                  Home &gt; Loksewa &gt; Question Sets
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                onClick={() => setShowFiltersMobile(!showFiltersMobile)}
              >
                <Filter className="w-5 h-5" />
              </button>
              <div className="hidden sm:flex items-center bg-gray-100 rounded-lg px-3 py-2">
                <Search className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search sets..."
                  className="bg-transparent border-none focus:ring-0 text-sm w-48 p-0 text-gray-700 placeholder-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <aside
            className={`lg:w-1/4 space-y-6 ${showFiltersMobile ? 'block' : 'hidden lg:block'}`}
          >
            {/* User Profile Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-[#252872] to-[#1a1c52] p-6 text-white relative">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <User className="w-24 h-24" />
                </div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                    <span className="text-xl font-bold">RS</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Ram Sharma</h3>
                    <p className="text-xs text-gray-300">
                      ram.sharma@email.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 grid grid-cols-2 gap-4 divide-x divide-gray-100">
                <div className="text-center">
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-1">
                    Sets Taken
                  </p>
                  <p className="text-xl font-bold text-[#252872]">12</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-1">
                    Avg. Score
                  </p>
                  <p className="text-xl font-bold text-[#d91f22]">85%</p>
                </div>
              </div>
              <div className="px-4 pb-4">
                <button className="w-full py-2 text-xs font-semibold text-[#252872] bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors">
                  View Full Profile
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-[#252872] flex items-center gap-2">
                  <Filter className="w-4 h-4" /> Filters
                </h3>
                <button
                  onClick={() => {
                    setSelectedCategory('All')
                    setSelectedLevel('All')
                    setSearchQuery('')
                  }}
                  className="text-xs text-[#d91f22] font-medium hover:underline"
                >
                  Reset
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Category
                </h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedCategory === cat ? 'bg-[#d91f22] border-[#d91f22]' : 'border-gray-300 group-hover:border-[#d91f22]'}`}
                      >
                        {selectedCategory === cat && (
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <input
                        type="radio"
                        name="category"
                        className="hidden"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                      />
                      <span
                        className={`text-sm ${selectedCategory === cat ? 'text-[#252872] font-medium' : 'text-gray-600 group-hover:text-[#252872]'}`}
                      >
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Level Filter */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Level
                </h4>
                <div className="flex flex-wrap gap-2">
                  {levels.map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border ${selectedLevel === level ? 'bg-[#252872] text-white border-[#252872]' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'}`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-3/4 space-y-6">
            {/* Stats / Info Banner */}
            <div className="bg-gradient-to-r from-indigo-50 to-white border border-indigo-100 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-100 text-[#252872] rounded-lg">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#252872] text-sm">
                    Boost your preparation
                  </h3>
                  <p className="text-xs text-gray-500">
                    Complete sets to unlock advanced analytics.
                  </p>
                </div>
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-xs text-gray-500">Total Sets Available</p>
                <p className="text-xl font-bold text-[#252872]">
                  {questionSets.length}
                </p>
              </div>
            </div>

            {/* Sort & Count */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Showing{' '}
                <span className="font-bold text-[#252872]">
                  {filteredSets.length}
                </span>{' '}
                results
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Sort by:</span>
                <button className="flex items-center gap-1 text-sm font-medium text-[#252872] hover:text-[#d91f22]">
                  Newest First <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence>
                {filteredSets.map((set, index) => (
                  <motion.div
                    key={set.id}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className={`bg-white rounded-2xl border transition-all duration-300 group relative overflow-hidden ${set.status === 'locked' ? 'border-gray-100 opacity-75' : 'border-gray-100 hover:border-indigo-100 hover:shadow-xl'}`}
                  >
                    {/* Status Badge / Lock Overlay */}
                    {set.status === 'locked' && (
                      <div className="absolute inset-0 bg-gray-50/50 backdrop-blur-[1px] z-10 flex items-center justify-center">
                        <div className="bg-white p-3 rounded-full shadow-lg">
                          <Lock className="w-6 h-6 text-gray-400" />
                        </div>
                      </div>
                    )}

                    <div className="p-6">
                      {/* Header */}
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex gap-2 mb-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-gray-100 text-gray-600">
                            {set.category}
                          </span>
                          {set.isNew && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-green-50 text-green-600">
                              New
                            </span>
                          )}
                          {set.isPopular && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-orange-50 text-orange-600 flex items-center gap-1">
                              <Star className="w-3 h-3 fill-current" /> Popular
                            </span>
                          )}
                        </div>
                        <button className="text-gray-300 hover:text-[#252872]">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>

                      <h3 className="text-lg font-bold text-[#252872] mb-4 leading-tight group-hover:text-[#d91f22] transition-colors">
                        {set.title}
                      </h3>

                      {/* Meta Info */}
                      <div className="grid grid-cols-3 gap-2 mb-6">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-gray-400 uppercase font-bold">
                            Questions
                          </span>
                          <div className="flex items-center gap-1.5 text-sm font-medium text-gray-700">
                            <HelpCircle className="w-3.5 h-3.5 text-indigo-500" />
                            {set.questions}
                          </div>
                        </div>
                        <div className="flex flex-col border-l border-gray-100 pl-3">
                          <span className="text-[10px] text-gray-400 uppercase font-bold">
                            Time
                          </span>
                          <div className="flex items-center gap-1.5 text-sm font-medium text-gray-700">
                            <Clock className="w-3.5 h-3.5 text-indigo-500" />
                            {set.time}
                          </div>
                        </div>
                        <div className="flex flex-col border-l border-gray-100 pl-3">
                          <span className="text-[10px] text-gray-400 uppercase font-bold">
                            Marks
                          </span>
                          <div className="flex items-center gap-1.5 text-sm font-medium text-gray-700">
                            <Trophy className="w-3.5 h-3.5 text-indigo-500" />
                            {set.marks}
                          </div>
                        </div>
                      </div>

                      {/* Footer / Action */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                        {set.status === 'attempted' ? (
                          <div className="flex items-center gap-2">
                            <div className="flex flex-col">
                              <span className="text-[10px] text-gray-400 uppercase font-bold">
                                Your Score
                              </span>
                              <span className="text-lg font-bold text-green-600">
                                {set.score}%
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <BarChart3 className="w-4 h-4" />
                            <span>{set.attempts} attempts</span>
                          </div>
                        )}

                        {set.status === 'attempted' ? (
                          <div className="flex gap-2">
                            <button className="px-4 py-2 rounded-lg text-sm font-bold text-[#252872] bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200">
                              Result
                            </button>
                            <button
                              className="p-2 rounded-lg text-[#252872] hover:bg-gray-100 border border-gray-200 transition-colors"
                              title="Retake"
                            >
                              <RotateCcw className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <button
                          onClick={() => navigate(`/paper/${set.id}`)}
                            disabled={set.status === 'locked'}
                            className={`px-6 py-2.5 rounded-xl text-sm font-bold text-white shadow-md transition-all flex items-center gap-2 ${set.status === 'locked' ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#d91f22] hover:bg-[#b91c1c] hover:shadow-lg hover:-translate-y-0.5'}`}
                          >
                            Start Test <PlayCircle className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Empty State */}
            {filteredSets.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-bold text-[#252872] mb-2">
                  No sets found
                </h3>
                <p className="text-gray-500 mb-6">
                  Try adjusting your search or filters to find what you're
                  looking for.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All')
                    setSelectedLevel('All')
                    setSearchQuery('')
                  }}
                  className="px-6 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
