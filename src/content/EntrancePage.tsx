'use client'

import React, { useState } from 'react'
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
} from 'lucide-react'
import { AdBanner } from '../components/AdBanner'
import { Newsletter } from '../components/Newsletter'
// Mock Data for Entrance
const entranceCourses = [
  {
    id: 1,
    title: 'CMAT Preparation',
    university: 'Tribhuvan University',
    category: 'Management',
    duration: '10 Weeks',
    students: '2.5k+',
    color: 'bg-green-500',
  },
  {
    id: 2,
    title: 'IOE Entrance',
    university: 'Tribhuvan University',
    category: 'Engineering',
    duration: '12 Weeks',
    students: '5k+',
    color: 'bg-blue-500',
  },
  {
    id: 3,
    title: 'KUUMAT',
    university: 'Kathmandu University',
    category: 'Management',
    duration: '8 Weeks',
    students: '1.2k+',
    color: 'bg-green-500',
  },
  {
    id: 4,
    title: 'MBBS Entrance (CEE)',
    university: 'Medical Education Commission',
    category: 'Medical',
    duration: '16 Weeks',
    students: '8k+',
    color: 'bg-red-500',
  },
  {
    id: 5,
    title: "St. Xavier's Entrance",
    university: "St. Xavier's College",
    category: 'Science',
    duration: '6 Weeks',
    students: '3k+',
    color: 'bg-purple-500',
  },
  {
    id: 6,
    title: 'BCA Entrance',
    university: 'Tribhuvan University',
    category: 'IT',
    duration: '8 Weeks',
    students: '4k+',
    color: 'bg-orange-500',
  },
  {
    id: 7,
    title: 'CSIT Entrance',
    university: 'Tribhuvan University',
    category: 'IT',
    duration: '10 Weeks',
    students: '6k+',
    color: 'bg-orange-500',
  },
  {
    id: 8,
    title: 'Nursing Entrance',
    university: 'CTEVT',
    category: 'Medical',
    duration: '8 Weeks',
    students: '2k+',
    color: 'bg-red-500',
  },
]
export function EntrancePage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('Popularity')
  const categories = [
    {
      name: 'Medical',
      count: 12,
    },
    {
      name: 'Engineering',
      count: 8,
    },
    {
      name: 'Management',
      count: 15,
    },
    {
      name: 'Science',
      count: 6,
    },
    {
      name: 'IT',
      count: 10,
    },
  ]
  const toggleCategory = (cat: string) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== cat))
    } else {
      setSelectedCategories([...selectedCategories, cat])
    }
  }
  const filteredCourses = entranceCourses.filter((course) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(course.category)
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Header */}
      <div className="bg-gradient-to-r from-[#252872] to-[#d91f22] text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-400 opacity-10 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Entrance Preparation
          </h1>
          <p className="text-red-50 text-lg max-w-2xl mb-6">
            Comprehensive preparation courses for top universities and colleges
            in Nepal. Secure your seat with our expert-led classes.
          </p>
          <div className="flex items-center text-sm text-red-100 font-medium">
            <span className="hover:text-white cursor-pointer">Home</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Entrance</span>
          </div>
        </div>
      </div>

      {/* User Summary Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                label: 'Total Courses',
                value: '8',
                icon: BookOpen,
              },
              {
                label: 'Students Enrolled',
                value: '30k+',
                icon: Users,
              },
              {
                label: 'Universities',
                value: '5',
                icon: School,
              },
              {
                label: 'Streams',
                value: '5',
                icon: GraduationCap,
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 border border-gray-100"
              >
                <div className="p-3 bg-white rounded-lg shadow-sm text-[#d91f22]">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#252872]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-1/4 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-[#252872] flex items-center">
                  <Filter className="w-5 h-5 mr-2 text-[#d91f22]" />
                  Filters
                  {selectedCategories.length > 0 && (
                    <span className="ml-2 bg-[#d91f22] text-white text-xs px-2 py-0.5 rounded-full">
                      {selectedCategories.length}
                    </span>
                  )}
                </h3>
                {(selectedCategories.length > 0 || searchQuery) && (
                  <button
                    onClick={() => {
                      setSelectedCategories([])
                      setSearchQuery('')
                    }}
                    className="text-xs text-[#d91f22] hover:underline font-medium"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* Search */}
              <div className="mb-6 relative">
                <input
                  type="text"
                  placeholder="Find entrance course..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d91f22] focus:border-transparent text-sm bg-gray-50"
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
              </div>

              {/* Categories */}
              <div>
                <h4 className="font-semibold text-[#252872] mb-3 text-sm uppercase tracking-wider">
                  Stream
                </h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label
                      key={cat.name}
                      className="flex items-center justify-between cursor-pointer group"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedCategories.includes(cat.name) ? 'bg-[#d91f22] border-[#d91f22]' : 'border-gray-300 group-hover:border-[#d91f22]'}`}
                        >
                          {selectedCategories.includes(cat.name) && (
                            <CheckCircle2 className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={selectedCategories.includes(cat.name)}
                          onChange={() => toggleCategory(cat.name)}
                        />
                        <span
                          className={`text-sm ${selectedCategories.includes(cat.name) ? 'text-[#252872] font-medium' : 'text-gray-600 group-hover:text-[#252872]'}`}
                        >
                          {cat.name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                        {cat.count}
                      </span>
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
                Showing{' '}
                <span className="font-bold text-[#252872]">
                  {filteredCourses.length}
                </span>{' '}
                courses
              </p>

              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border-none bg-transparent font-semibold text-[#252872] focus:ring-0 cursor-pointer"
                >
                  <option>Popularity</option>
                  <option>Duration</option>
                  <option>A-Z</option>
                </select>
              </div>
            </div>

            {/* Active Filters Pills */}
            {selectedCategories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className="flex items-center space-x-1 bg-red-50 text-[#d91f22] px-3 py-1 rounded-full text-xs font-medium hover:bg-red-100 transition-colors"
                  >
                    <span>{cat}</span>
                    <X className="w-3 h-3" />
                  </button>
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence>
                {filteredCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    layout
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
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col relative"
                  >
                    {/* Top Color Stripe */}
                    <div className={`h-1.5 w-full ${course.color}`}></div>

                    <div className="p-6 flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <span className="inline-block px-3 py-1 bg-gray-50 text-gray-600 text-xs font-bold uppercase tracking-wider rounded-full">
                          {course.category}
                        </span>
                        <div className="bg-red-50 p-2 rounded-full">
                          <GraduationCap className="w-5 h-5 text-[#d91f22]" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-[#252872] mb-2 group-hover:text-[#d91f22] transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-gray-500 text-sm mb-6 font-medium">
                        {course.university}
                      </p>

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
                        Enroll Now
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">
                  No entrance courses found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  )
}
