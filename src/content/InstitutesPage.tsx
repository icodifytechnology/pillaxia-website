'use client'

import React, { useState, useEffect } from 'react'
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
  Navigation,
  Loader2,
  DollarSign,
} from 'lucide-react'
import { Newsletter } from '@/src/components/Newsletter'
import { useRouter } from 'next/navigation'

const institutes = [
  {
    id: 1,
    name: 'Milton International College',
    logo: '/images/client/1.png',
    phone: '+977-01-4567890',
    address: 'Baneshwor, Kathmandu',
    city: 'Kathmandu',
    type: 'Affiliated',
    university: 'TU',
    rating: 4.8,
    students: '2,500+',
    badges: ['Top Rated', 'Placement Focused'],
    programs: 12,
    color: 'from-blue-500 to-indigo-600',
    coordinates: { lat: 27.6915, lng: 85.3240 },
    feeRange: 'NPR 4-6L',
    minFee: 400000,
    maxFee: 600000,
  },
  {
    id: 2,
    name: 'Nepal Engineering College',
    logo: '/images/client/2.png',
    phone: '+977-01-5123456',
    address: 'Changunarayan, Bhaktapur',
    city: 'Bhaktapur',
    type: 'Affiliated',
    university: 'PU',
    rating: 4.6,
    students: '3,200+',
    badges: ['Govt Approved', 'Top Rated'],
    programs: 18,
    color: 'from-emerald-500 to-teal-600',
    coordinates: { lat: 27.7172, lng: 85.4240 },
    feeRange: 'NPR 6-8L',
    minFee: 600000,
    maxFee: 800000,
  },
  {
    id: 3,
    name: 'Tribhuvan University',
    logo: '/images/client/3.png',
    phone: '+977-01-4330433',
    address: 'Kirtipur, Kathmandu',
    city: 'Kathmandu',
    type: 'University',
    university: 'TU',
    rating: 4.5,
    students: '50,000+',
    badges: ['Govt Approved', 'Research Hub'],
    programs: 45,
    color: 'from-violet-500 to-purple-600',
    coordinates: { lat: 27.6780, lng: 85.2820 },
    feeRange: 'NPR 1-3L',
    minFee: 100000,
    maxFee: 300000,
  },
  {
    id: 4,
    name: 'Kathmandu University',
    logo: '/images/client/4.png',
    phone: '+977-011-661399',
    address: 'Dhulikhel, Kavre',
    city: 'Kavre',
    type: 'University',
    university: 'KU',
    rating: 4.9,
    students: '8,000+',
    badges: ['Top Rated', 'Placement Focused', 'Research Hub'],
    programs: 32,
    color: 'from-amber-500 to-orange-600',
    coordinates: { lat: 27.6199, lng: 85.5440 },
    feeRange: 'NPR 8-12L',
    minFee: 800000,
    maxFee: 1200000,
  },
  {
    id: 5,
    name: 'Pokhara University',
    logo: '/images/client/5.png',
    phone: '+977-061-504072',
    address: 'Lekhnath, Kaski',
    city: 'Pokhara',
    type: 'University',
    university: 'PU',
    rating: 4.4,
    students: '15,000+',
    badges: ['Govt Approved'],
    programs: 28,
    color: 'from-cyan-500 to-blue-600',
    coordinates: { lat: 28.2096, lng: 84.0880 },
    feeRange: 'NPR 3-5L',
    minFee: 300000,
    maxFee: 500000,
  },
  {
    id: 6,
    name: 'ISMT College',
    logo: '/images/client/6.png',
    phone: '+977-01-4101414',
    address: 'Tinkune, Kathmandu',
    city: 'Kathmandu',
    type: 'Affiliated',
    university: 'TU',
    rating: 4.3,
    students: '1,800+',
    badges: ['Placement Focused'],
    programs: 8,
    color: 'from-rose-500 to-pink-600',
    coordinates: { lat: 27.6945, lng: 85.3467 },
    feeRange: 'NPR 5-7L',
    minFee: 500000,
    maxFee: 700000,
  },
  {
    id: 7,
    name: 'Ace Institute of Management',
    logo: '/images/client/1.png',
    phone: '+977-01-5525055',
    address: 'New Baneshwor, Kathmandu',
    city: 'Kathmandu',
    type: 'Affiliated',
    university: 'TU',
    rating: 4.7,
    students: '2,200+',
    badges: ['Top Rated', 'Placement Focused'],
    programs: 6,
    color: 'from-indigo-500 to-blue-600',
    coordinates: { lat: 27.6920, lng: 85.3300 },
    feeRange: 'NPR 4-6L',
    minFee: 400000,
    maxFee: 600000,
  },
  {
    id: 8,
    name: 'KU School of Management',
    logo: '/images/client/4.png',
    phone: '+977-011-661399',
    address: 'Balkumari, Lalitpur',
    city: 'Lalitpur',
    type: 'Affiliated',
    university: 'KU',
    rating: 4.8,
    students: '1,500+',
    badges: ['Top Rated', 'Research Hub'],
    programs: 10,
    color: 'from-orange-500 to-amber-600',
    coordinates: { lat: 27.6655, lng: 85.3315 },
    feeRange: 'NPR 7-10L',
    minFee: 700000,
    maxFee: 1000000,
  },
]

const cities = ['All', 'Kathmandu', 'Bhaktapur', 'Kavre', 'Pokhara', 'Lalitpur']
const types = ['All', 'University', 'Affiliated']
const universities = ['All', 'TU', 'KU', 'PU']
const feeRanges = [
  { label: 'All Fees', min: 0, max: Infinity },
  { label: 'Under 3L', min: 0, max: 300000 },
  { label: '3L - 6L', min: 300000, max: 600000 },
  { label: '6L - 9L', min: 600000, max: 900000 },
  { label: 'Above 9L', min: 900000, max: Infinity },
]

const badgeColors: Record<string, string> = {
  'Top Rated': 'bg-amber-50 text-amber-700 border-amber-200',
  'Govt Approved': 'bg-green-50 text-green-700 border-green-200',
  'Placement Focused': 'bg-blue-50 text-blue-700 border-blue-200',
  'Research Hub': 'bg-purple-50 text-purple-700 border-purple-200',
}

// Calculate distance between two coordinates (Haversine formula)
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371 // Radius of the Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLon = (lon2 - lon1) * Math.PI / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c // Distance in km
}

export function InstitutesPage() {
  const { push: navigate } = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [locationSearch, setLocationSearch] = useState('')
  const [selectedCity, setSelectedCity] = useState('All')
  const [selectedType, setSelectedType] = useState('All')
  const [selectedUniversity, setSelectedUniversity] = useState('All')
  const [selectedFeeRange, setSelectedFeeRange] = useState(0) // Index of feeRanges
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [isGettingLocation, setIsGettingLocation] = useState(false)
  const [locationError, setLocationError] = useState('')

  const handleGetLocation = () => {
    setIsGettingLocation(true)
    setLocationError('')

    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser')
      setIsGettingLocation(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
        setLocationSearch('Near Me')
        setSelectedCity('All') // Clear city filter when using Near Me
        setIsGettingLocation(false)
      },
      (error) => {
        setLocationError('Unable to retrieve your location')
        setIsGettingLocation(false)
      }
    )
  }

  const clearLocation = () => {
    setUserLocation(null)
    setLocationSearch('')
  }

  const filtered = institutes
    .map(inst => {
      // Calculate distance if user location is available
      let distance = null
      if (userLocation && locationSearch === 'Near Me') {
        distance = calculateDistance(
          userLocation.lat,
          userLocation.lng,
          inst.coordinates.lat,
          inst.coordinates.lng
        )
      }
      return { ...inst, distance }
    })
    .filter((inst) => {
      const matchesSearch = inst.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
      
      const matchesLocationSearch = 
        !locationSearch || 
        locationSearch === 'Near Me' ||
        inst.city.toLowerCase().includes(locationSearch.toLowerCase()) ||
        inst.address.toLowerCase().includes(locationSearch.toLowerCase())
      
      const matchesCity = selectedCity === 'All' || inst.city === selectedCity
      const matchesType = selectedType === 'All' || inst.type === selectedType
      const matchesUniversity = selectedUniversity === 'All' || inst.university === selectedUniversity
      
      // Fee range filter
      const selectedRange = feeRanges[selectedFeeRange]
      const matchesFeeRange = 
        inst.minFee >= selectedRange.min && inst.maxFee <= selectedRange.max ||
        inst.minFee <= selectedRange.max && inst.maxFee >= selectedRange.min

      return matchesSearch && matchesLocationSearch && matchesCity && matchesType && matchesUniversity && matchesFeeRange
    })
    .sort((a, b) => {
      // Sort by distance if Near Me is active
      if (locationSearch === 'Near Me' && a.distance !== null && b.distance !== null) {
        return a.distance - b.distance
      }
      return 0
    })

  const handleViewDetails = (id: number) => {
    navigate(`/institutes/${id}`)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const totalActiveFilters = 
    (selectedCity !== 'All' ? 1 : 0) + 
    (selectedType !== 'All' ? 1 : 0) + 
    (selectedUniversity !== 'All' ? 1 : 0) +
    (selectedFeeRange !== 0 ? 1 : 0) +
    (locationSearch && locationSearch !== 'Near Me' ? 1 : 0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-[#252872] text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-[0.03] rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-400 opacity-[0.08] rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
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
              { label: 'Total Institutes', value: `${institutes.length}`, icon: Building2 },
              { label: 'Total Students', value: '80k+', icon: Users },
              { label: 'Programs Offered', value: '140+', icon: BookOpen },
              { label: 'Accredited', value: '100%', icon: Shield },
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
                  {totalActiveFilters > 0 && (
                    <span className="ml-1 bg-[#d91f22] text-white text-xs px-2 py-0.5 rounded-full">
                      {totalActiveFilters}
                    </span>
                  )}
                </h3>
                {(selectedCity !== 'All' || selectedType !== 'All' || selectedUniversity !== 'All' || selectedFeeRange !== 0 || locationSearch) && (
                  <button
                    onClick={() => {
                      setSelectedCity('All')
                      setSelectedType('All')
                      setSelectedUniversity('All')
                      setSelectedFeeRange(0)
                      setSearchQuery('')
                      setLocationSearch('')
                      clearLocation()
                    }}
                    className="text-xs text-[#d91f22] hover:underline font-medium"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* Location Search */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Location Search
                </h4>
                <div className="relative mb-2">
                  <input
                    type="text"
                    placeholder="Search by location..."
                    value={locationSearch === 'Near Me' ? '' : locationSearch}
                    onChange={(e) => {
                      setLocationSearch(e.target.value)
                      if (e.target.value) {
                        clearLocation()
                      }
                    }}
                    disabled={locationSearch === 'Near Me'}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d91f22] focus:border-transparent text-sm bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                  <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                </div>
                <button
                  onClick={locationSearch === 'Near Me' ? clearLocation : handleGetLocation}
                  disabled={isGettingLocation}
                  className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                    locationSearch === 'Near Me'
                      ? 'bg-green-50 text-green-700 border-2 border-green-200 hover:bg-green-100'
                      : 'bg-[#d91f22] text-white hover:bg-[#b91c1c]'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isGettingLocation ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Getting Location...
                    </>
                  ) : locationSearch === 'Near Me' ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      Using Your Location
                    </>
                  ) : (
                    <>
                      <Navigation className="w-4 h-4" />
                      Near Me
                    </>
                  )}
                </button>
                {locationError && (
                  <p className="text-xs text-red-600 mt-2">{locationError}</p>
                )}
              </div>

              {/* Fee Range Filter */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Fee Range
                </h4>
                <div className="space-y-2">
                  {feeRanges.map((range, index) => (
                    <label
                      key={index}
                      className="flex items-center justify-between cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                            selectedFeeRange === index
                              ? 'bg-[#d91f22] border-[#d91f22]'
                              : 'border-gray-300 group-hover:border-[#d91f22]'
                          }`}
                        >
                          {selectedFeeRange === index && (
                            <CheckCircle2 className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <input
                          type="radio"
                          name="feeRange"
                          className="hidden"
                          checked={selectedFeeRange === index}
                          onChange={() => setSelectedFeeRange(index)}
                        />
                        <span
                          className={`text-sm ${
                            selectedFeeRange === index
                              ? 'text-[#252872] font-medium'
                              : 'text-gray-600'
                          }`}
                        >
                          {range.label}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                        {institutes.filter(i => 
                          (i.minFee >= range.min && i.maxFee <= range.max) ||
                          (i.minFee <= range.max && i.maxFee >= range.min)
                        ).length}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* University Filter */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  University
                </h4>
                <div className="space-y-2">
                  {universities.map((uni) => (
                    <label
                      key={uni}
                      className="flex items-center justify-between cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                            selectedUniversity === uni
                              ? 'bg-[#d91f22] border-[#d91f22]'
                              : 'border-gray-300 group-hover:border-[#d91f22]'
                          }`}
                        >
                          {selectedUniversity === uni && (
                            <CheckCircle2 className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <input
                          type="radio"
                          name="university"
                          className="hidden"
                          checked={selectedUniversity === uni}
                          onChange={() => setSelectedUniversity(uni)}
                        />
                        <span
                          className={`text-sm ${
                            selectedUniversity === uni
                              ? 'text-[#252872] font-medium'
                              : 'text-gray-600'
                          }`}
                        >
                          {uni === 'All' ? 'All Universities' : uni === 'TU' ? 'Tribhuvan University' : uni === 'KU' ? 'Kathmandu University' : 'Pokhara University'}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                        {institutes.filter(i => uni === 'All' || i.university === uni).length}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Type Filter */}
              <div className="mb-6 pb-6 border-b border-gray-100">
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
                        className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                          selectedType === type
                            ? 'border-[#d91f22]'
                            : 'border-gray-300 group-hover:border-[#d91f22]'
                        }`}
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
                        className={`text-sm ${
                          selectedType === type
                            ? 'text-[#252872] font-medium'
                            : 'text-gray-600'
                        }`}
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
                  City
                </h4>
                <div className="space-y-2">
                  {cities.map((city) => (
                    <label
                      key={city}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                          selectedCity === city
                            ? 'bg-[#d91f22] border-[#d91f22]'
                            : 'border-gray-300 group-hover:border-[#d91f22]'
                        }`}
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
                        className={`text-sm ${
                          selectedCity === city
                            ? 'text-[#252872] font-medium'
                            : 'text-gray-600'
                        }`}
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
            {(selectedCity !== 'All' || selectedType !== 'All' || selectedUniversity !== 'All' || selectedFeeRange !== 0 || (locationSearch && locationSearch !== 'Near Me')) && (
              <div className="flex flex-wrap gap-2 mb-4">
                {locationSearch && locationSearch !== 'Near Me' && (
                  <button
                    onClick={() => setLocationSearch('')}
                    className="flex items-center gap-1 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-purple-100 transition-colors"
                  >
                    📍 {locationSearch} <X className="w-3 h-3" />
                  </button>
                )}
                {selectedFeeRange !== 0 && (
                  <button
                    onClick={() => setSelectedFeeRange(0)}
                    className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-green-100 transition-colors"
                  >
                    💰 {feeRanges[selectedFeeRange].label} <X className="w-3 h-3" />
                  </button>
                )}
                {selectedUniversity !== 'All' && (
                  <button
                    onClick={() => setSelectedUniversity('All')}
                    className="flex items-center gap-1 bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-orange-100 transition-colors"
                  >
                    {selectedUniversity} <X className="w-3 h-3" />
                  </button>
                )}
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
                    className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors"
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
                {locationSearch === 'Near Me' && ' (sorted by distance)'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence>
                {filtered.map((inst, index) => (
                  <motion.div
                    key={inst.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: index * 0.05 }}
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
                          <h3 className="text-lg font-bold text-[#252872] group-hover:text-[#d91f22] transition-colors leading-tight mb-1">
                            {inst.name}
                          </h3>
                          <div className="flex items-center gap-1.5 text-xs text-gray-500 flex-wrap">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${
                                inst.type === 'University'
                                  ? 'bg-green-50 text-green-600'
                                  : 'bg-indigo-50 text-indigo-600'
                              }`}
                            >
                              {inst.type}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-orange-50 text-orange-600">
                              {inst.university}
                            </span>
                            <span className="flex items-center gap-0.5">
                              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                              {inst.rating}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Distance Badge & Fee Range */}
                      <div className="flex items-center gap-2 mb-3">
                        {inst.distance !== null && locationSearch === 'Near Me' && (
                          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                            <Navigation className="w-3 h-3" />
                            {inst.distance.toFixed(1)} km away
                          </div>
                        )}
                        {/* <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                          <DollarSign className="w-3 h-3" />
                          {inst.feeRange}
                        </div> */}
                      </div>

                      {/* Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {inst.badges.map((badge) => (
                          <span
                            key={badge}
                            className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${
                              badgeColors[badge] ||
                              'bg-gray-50 text-gray-600 border-gray-200'
                            }`}
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
                    setSelectedUniversity('All')
                    setSelectedFeeRange(0)
                    setSearchQuery('')
                    setLocationSearch('')
                    clearLocation()
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