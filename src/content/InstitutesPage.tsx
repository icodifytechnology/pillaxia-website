'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  MapPin,
  Phone,
  ChevronRight,
  Filter,
  Star,
  CheckCircle2,
  X,
  Building2,
  Users,
  Award,
  BookOpen,
  Shield,
  TrendingUp,
} from 'lucide-react'
import { Newsletter } from '@/src/components/Newsletter'
import { useRouter } from 'next/navigation'

const institutes = [
  {
    id: 1,
    name: 'Milton International College',
    logo: '/images/client/1.png', // University building
    phone: '+977-01-4567890',
    address: 'Baneshwor, Kathmandu',
    city: 'Kathmandu',
    type: 'Private',
    rating: 4.8,
    students: '2,500+',
    badges: ['Top Rated', 'Placement Focused'],
    programs: 12,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 2,
    name: 'Nepal Engineering College',
    logo: '/images/client/2.png', // University building
    phone: '+977-01-5123456',
    address: 'Changunarayan, Bhaktapur',
    city: 'Bhaktapur',
    type: 'Private',
    rating: 4.6,
    students: '3,200+',
    badges: ['Govt Approved', 'Top Rated'],
    programs: 18,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 3,
    name: 'Tribhuvan University',
    logo: '/images/client/3.png', // University building
    phone: '+977-01-4330433',
    address: 'Kirtipur, Kathmandu',
    city: 'Kathmandu',
    type: 'Government',
    rating: 4.5,
    students: '50,000+',
    badges: ['Govt Approved', 'Research Hub'],
    programs: 45,
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 4,
    name: 'Kathmandu University',
    logo: '/images/client/4.png', // University building
    phone: '+977-011-661399',
    address: 'Dhulikhel, Kavre',
    city: 'Kavre',
    type: 'Private',
    rating: 4.9,
    students: '8,000+',
    badges: ['Top Rated', 'Placement Focused', 'Research Hub'],
    programs: 32,
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 5,
    name: 'Pokhara University',
    logo: '/images/client/5.png', // University building
    phone: '+977-061-504072',
    address: 'Lekhnath, Kaski',
    city: 'Pokhara',
    type: 'Government',
    rating: 4.4,
    students: '15,000+',
    badges: ['Govt Approved'],
    programs: 28,
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 6,
    name: 'ISMT College',
    logo: '/images/client/6.png', // University building
    phone: '+977-01-4101414',
    address: 'Chitwan, Bharatpur',
    city: 'Chitwan',
    type: 'Private',
    rating: 4.3,
    students: '1,800+',
    badges: ['Placement Focused'],
    programs: 8,
    color: 'from-rose-500 to-pink-600',
  },
]

const cities = ['All', 'Kathmandu', 'Bhaktapur', 'Kavre', 'Pokhara', 'Chitwan']
const types = ['All', 'Government', 'Private']

const badgeColors: Record<string, string> = {
  'Top Rated': 'bg-amber-50 text-amber-700 border-amber-200',
  'Govt Approved': 'bg-green-50 text-green-700 border-green-200',
  'Placement Focused': 'bg-blue-50 text-blue-700 border-blue-200',
  'Research Hub': 'bg-purple-50 text-purple-700 border-purple-200',
}

export function InstitutesPage() {
  const { push: navigate } = useRouter();
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState('All')
  const [selectedType, setSelectedType] = useState('All')

  const filtered = institutes.filter((inst) => {
    const matchesSearch = inst.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    const matchesCity = selectedCity === 'All' || inst.city === selectedCity
    const matchesType = selectedType === 'All' || inst.type === selectedType
    return matchesSearch && matchesCity && matchesType
  })

  const handleViewDetails = (id: number) => {
    navigate(`/institutes/${id}`)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-[#252872] text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-[0.03] rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#d91f22] opacity-[0.08] rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Institutes</h1>
            <p className="text-blue-100 text-lg max-w-2xl mb-8">
              Discover top educational institutions across Nepal. Compare
              programs, facilities, and find the perfect fit for your academic
              journey.
            </p>
            <div className="flex items-center text-sm text-blue-200 font-medium">
              <span
                className="hover:text-white cursor-pointer"
                onClick={() => navigate('/')}
              >
                Home
              </span>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-white">Institutes</span>
            </div>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
            }}
            className="mt-8 max-w-2xl"
          >
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search institutes by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-[#d91f22] focus:bg-white/15 transition-all text-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                label: 'Total Institutes',
                value: `${institutes.length}`,
                icon: Building2,
              },
              {
                label: 'Total Students',
                value: '80k+',
                icon: Users,
              },
              {
                label: 'Programs Offered',
                value: '140+',
                icon: BookOpen,
              },
              {
                label: 'Accredited',
                value: '100%',
                icon: Shield,
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 border border-gray-100"
              >
                <div className="p-2.5 bg-white rounded-lg shadow-sm text-[#d91f22]">
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold text-[#252872]">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-1/4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-[#252872] flex items-center gap-2">
                  <Filter className="w-5 h-5 text-[#d91f22]" />
                  Filters
                </h3>
                {(selectedCity !== 'All' || selectedType !== 'All') && (
                  <button
                    onClick={() => {
                      setSelectedCity('All')
                      setSelectedType('All')
                      setSearchQuery('')
                    }}
                    className="text-xs text-[#d91f22] hover:underline font-medium"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Type Filter */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Institute Type
                </h4>
                <div className="space-y-2">
                  {types.map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${selectedType === type ? 'border-[#d91f22]' : 'border-gray-300 group-hover:border-[#d91f22]'}`}
                      >
                        {selectedType === type && (
                          <div className="w-2 h-2 bg-[#d91f22] rounded-full" />
                        )}
                      </div>
                      <input
                        type="radio"
                        name="type"
                        className="hidden"
                        checked={selectedType === type}
                        onChange={() => setSelectedType(type)}
                      />
                      <span
                        className={`text-sm ${selectedType === type ? 'text-[#252872] font-medium' : 'text-gray-600'}`}
                      >
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* City Filter */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Location
                </h4>
                <div className="space-y-2">
                  {cities.map((city) => (
                    <label
                      key={city}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedCity === city ? 'bg-[#d91f22] border-[#d91f22]' : 'border-gray-300 group-hover:border-[#d91f22]'}`}
                      >
                        {selectedCity === city && (
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <input
                        type="radio"
                        name="city"
                        className="hidden"
                        checked={selectedCity === city}
                        onChange={() => setSelectedCity(city)}
                      />
                      <span
                        className={`text-sm ${selectedCity === city ? 'text-[#252872] font-medium' : 'text-gray-600'}`}
                      >
                        {city}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Grid */}
          <div className="lg:w-3/4">
            {/* Active filters */}
            {(selectedCity !== 'All' || selectedType !== 'All') && (
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedCity !== 'All' && (
                  <button
                    onClick={() => setSelectedCity('All')}
                    className="flex items-center gap-1 bg-red-50 text-[#d91f22] px-3 py-1 rounded-full text-xs font-medium hover:bg-red-100 transition-colors"
                  >
                    {selectedCity} <X className="w-3 h-3" />
                  </button>
                )}
                {selectedType !== 'All' && (
                  <button
                    onClick={() => setSelectedType('All')}
                    className="flex items-center gap-1 bg-red-50 text-[#d91f22] px-3 py-1 rounded-full text-xs font-medium hover:bg-red-100 transition-colors"
                  >
                    {selectedType} <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            )}

            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-500">
                Showing{' '}
                <span className="font-bold text-[#252872]">
                  {filtered.length}
                </span>{' '}
                institutes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence>
                {filtered.map((inst, index) => (
                  <motion.div
                    key={inst.id}
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
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    {/* Gradient top bar */}
                    <div className={`h-1.5 bg-gradient-to-r ${inst.color}`} />

                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center border border-gray-100 flex-shrink-0">
                          <img
                            src={inst.logo}
                            alt={inst.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-[#252872] group-hover:text-[#d91f22] transition-colors leading-tight mb-1 truncate">
                            {inst.name}
                          </h3>
                          <div className="flex items-center gap-1.5 text-xs text-gray-500">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${inst.type === 'Government' ? 'bg-green-50 text-green-600' : 'bg-indigo-50 text-indigo-600'}`}
                            >
                              {inst.type}
                            </span>
                            <span className="flex items-center gap-0.5">
                              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                              {inst.rating}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {inst.badges.map((badge) => (
                          <span
                            key={badge}
                            className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${badgeColors[badge] || 'bg-gray-50 text-gray-600 border-gray-200'}`}
                          >
                            {badge}
                          </span>
                        ))}
                      </div>

                      {/* Info */}
                      <div className="space-y-2 mb-5">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Phone className="w-3.5 h-3.5 text-gray-400" />
                          <span>{inst.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <MapPin className="w-3.5 h-3.5 text-gray-400" />
                          <span>{inst.address}</span>
                        </div>
                      </div>

                      {/* Stats row */}
                      <div className="flex items-center gap-4 text-xs text-gray-400 mb-5 pt-4 border-t border-gray-50">
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5" /> {inst.students}{' '}
                          students
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5" /> {inst.programs}{' '}
                          programs
                        </span>
                      </div>

                      {/* CTA */}
                      <button
                        onClick={() => handleViewDetails(inst.id)}
                        className="w-full bg-[#d91f22] hover:bg-[#b91c1c] text-white py-2.5 rounded-xl font-semibold text-sm transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                      >
                        View Details <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                <Building2 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#252872] mb-2">
                  No institutes found
                </h3>
                <p className="text-gray-500 mb-4">
                  Try adjusting your search or filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedCity('All')
                    setSelectedType('All')
                    setSearchQuery('')
                  }}
                  className="text-[#d91f22] font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  )
}