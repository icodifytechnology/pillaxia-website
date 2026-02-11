'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {
  User,
  Settings,
  LogOut,
  BookOpen,
  Award,
  Clock,
  ChevronRight,
  Bell,
  Moon,
  Shield,
  FileText,
  ShoppingBag,
  Camera,
  Save,
  X,
  Download,
  Eye,
  CheckCircle,
  AlertCircle,
  Target,
  TrendingUp,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Edit2,
} from 'lucide-react'

// Types
type Tab = 'overview' | 'profile' | 'education' | 'tests' | 'purchases' | 'settings'

// Mock Data
const USER_PROFILE = {
  name: 'Suzan Thapa',
  email: 'suzanthapa80@gmail.com',
  phone: '9813629134',
  address: 'Bagmati Pradesh, Kathmandu, Kathmandu',
  institute: 'Milton College',
  image: 'https://i.pravatar.cc/150?img=33',
  memberSince: 'Jan 2024',
  role: 'Student',
}

const USER_STATS = [
  { label: 'Courses Enrolled', value: '12', icon: BookOpen, color: 'blue' },
  { label: 'Quizzes Taken', value: '45', icon: FileText, color: 'green' },
  { label: 'Certificates', value: '3', icon: Award, color: 'yellow' },
  { label: 'Day Streak', value: '7', icon: Target, color: 'red' },
]

const RECENT_ACTIVITIES = [
  {
    id: 1,
    title: 'Completed "Loksewa Inspector Quiz"',
    time: '2 hours ago',
    icon: CheckCircle,
    color: 'text-green-500 bg-green-50',
  },
  {
    id: 2,
    title: 'Enrolled in "CMAT Preparation"',
    time: '1 day ago',
    icon: BookOpen,
    color: 'text-blue-500 bg-blue-50',
  },
  {
    id: 3,
    title: 'Scored 85% in "General Knowledge Quiz"',
    time: '3 days ago',
    icon: Award,
    color: 'text-yellow-500 bg-yellow-50',
  },
  {
    id: 4,
    title: 'Downloaded "Entrance Exam Guide"',
    time: '1 week ago',
    icon: Download,
    color: 'text-purple-500 bg-purple-50',
  },
]

const TEST_HISTORY = [
  {
    id: 1,
    name: 'Government / Inspector',
    date: '2026-02-10',
    score: 0,
    status: 'Completed',
  },
  {
    id: 2,
    name: 'General knowledge for loksewa',
    date: '2025-06-15',
    score: 64.4,
    status: 'Passed',
  },
  {
    id: 3,
    name: 'प्रथम पत्र: प्रशासनिक अभिरुचि परीक्षण',
    date: '2025-03-16',
    score: 5.8,
    status: 'Failed',
  },
]

const PURCHASES = [
  {
    id: 101,
    name: 'Loksewa Full Course Bundle',
    date: '2025-01-15',
    price: 'Rs. 5000',
    status: 'Active',
    expiry: '2026-01-15',
  },
  {
    id: 102,
    name: 'Inspector Test Series',
    date: '2025-02-01',
    price: 'Rs. 1500',
    status: 'Active',
    expiry: '2025-08-01',
  },
]

const EDUCATION = [
  {
    degree: 'Bachelor in Civil Engineering',
    institute: 'Pulchowk Campus',
    year: '2022',
  },
  {
    degree: '+2 Science',
    institute: "St. Xavier's College",
    year: '2018',
  },
]

const ENROLLED_COURSES = [
  {
    id: 1,
    name: 'Loksewa Preparation Bundle',
    progress: 65,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    name: 'CMAT Complete Course',
    progress: 42,
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    name: 'Current Affairs 2024',
    progress: 88,
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop',
  },
]

// Components
function StatCard({ stat }: { stat: typeof USER_STATS[0] }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <div className={`w-12 h-12 rounded-xl bg-${stat.color}-50 text-${stat.color}-600 flex items-center justify-center`}>
          <stat.icon className="w-6 h-6" />
        </div>
        <TrendingUp className="w-4 h-4 text-green-500" />
      </div>
      <div className="text-3xl font-bold text-[#252872] mb-1">{stat.value}</div>
      <div className="text-sm text-gray-500">{stat.label}</div>
    </div>
  )
}

function CourseCard({ course }: { course: typeof ENROLLED_COURSES[0] }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
      <div className="relative h-32 bg-gray-200">
        <Image
          src={course.image}
          alt={course.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h4 className="font-bold text-[#252872] mb-3 line-clamp-2">{course.name}</h4>
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-500">Progress</span>
            <span className="font-bold text-[#252872]">{course.progress}%</span>
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-[#252872] to-[#d91f22] h-full transition-all duration-500"
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Main Component
export function ProfilePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<Tab>('overview')
  const [isEditing, setIsEditing] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [userProfile, setUserProfile] = useState(USER_PROFILE)

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault()
    setIsEditing(false)
  }

  const tabs: { id: Tab; label: string; icon: any }[] = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'education', label: 'Education', icon: BookOpen },
    { id: 'tests', label: 'My Tests', icon: FileText },
    { id: 'purchases', label: 'Purchases', icon: ShoppingBag },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-[#252872] via-[#1e2266] to-[#d91f22] h-64 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl -mt-32 relative z-10">
        {/* Profile Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 mb-8"
        >
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Avatar */}
              <div className="relative group">
                <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src={userProfile.image}
                    alt={userProfile.name}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h1 className="text-3xl font-bold text-[#252872] mb-1">
                      {userProfile.name}
                    </h1>
                    <p className="text-gray-500 font-medium">{userProfile.role}</p>
                  </div>
                  <button 
                    onClick={() => setActiveTab('profile')}
                    className="mt-4 md:mt-0 px-6 py-2.5 bg-gradient-to-r from-[#252872] to-[#d91f22] text-white font-medium rounded-xl hover:shadow-lg transition-all flex items-center gap-2 mx-auto md:mx-0"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit Profile
                  </button>
                </div>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    {userProfile.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    {userProfile.phone}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    {userProfile.address.split(',')[0]}
                  </div>
                </div>

                {/* Member Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                  <Calendar className="w-4 h-4" />
                  Member since {userProfile.memberSince}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 pt-0">
            {USER_STATS.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pb-12">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
              <div className="p-4">
                <nav className="space-y-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-[#252872] to-[#d91f22] text-white shadow-lg'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <tab.icon className="w-5 h-5" />
                      {tab.label}
                    </button>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button
                    onClick={() => router.push('/')}
                    className="w-full flex items-center justify-center gap-2 text-red-600 font-medium py-3 px-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
              >
                {/* OVERVIEW TAB */}
                {activeTab === 'overview' && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-[#252872] mb-6">
                        Recent Activity
                      </h2>
                      <div className="space-y-4">
                        {RECENT_ACTIVITIES.map((activity) => (
                          <div
                            key={activity.id}
                            className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                          >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${activity.color}`}>
                              <activity.icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-gray-800">
                                {activity.title}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                {activity.time}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-[#252872] mb-6">
                        Enrolled Courses
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {ENROLLED_COURSES.map((course) => (
                          <CourseCard key={course.id} course={course} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* PROFILE TAB */}
                {activeTab === 'profile' && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#252872] mb-6">
                      Personal Information
                    </h2>

                    {!isEditing ? (
                      <div className="space-y-4">
                        {[
                          { label: 'Full Name', value: userProfile.name, icon: User },
                          { label: 'Email', value: userProfile.email, icon: Mail },
                          { label: 'Phone', value: userProfile.phone, icon: Phone },
                          { label: 'Address', value: userProfile.address, icon: MapPin },
                          { label: 'Institute', value: userProfile.institute, icon: BookOpen },
                        ].map((field, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                          >
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#252872]">
                              <field.icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-gray-500 mb-1">
                                {field.label}
                              </p>
                              <p className="font-medium text-gray-800">
                                {field.value}
                              </p>
                            </div>
                          </div>
                        ))}

                        <button
                          onClick={() => setIsEditing(true)}
                          className="mt-6 px-6 py-3 bg-gradient-to-r from-[#252872] to-[#d91f22] text-white font-medium rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
                        >
                          <Edit2 className="w-4 h-4" />
                          Edit Information
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSaveProfile} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Full Name
                            </label>
                            <input
                              type="text"
                              value={userProfile.name}
                              onChange={(e) =>
                                setUserProfile({ ...userProfile, name: e.target.value })
                              }
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#252872] focus:border-transparent outline-none transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Phone Number
                            </label>
                            <input
                              type="text"
                              value={userProfile.phone}
                              onChange={(e) =>
                                setUserProfile({ ...userProfile, phone: e.target.value })
                              }
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#252872] focus:border-transparent outline-none transition-all"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Email Address
                            </label>
                            <input
                              type="email"
                              value={userProfile.email}
                              onChange={(e) =>
                                setUserProfile({ ...userProfile, email: e.target.value })
                              }
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#252872] focus:border-transparent outline-none transition-all"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Address
                            </label>
                            <input
                              type="text"
                              value={userProfile.address}
                              onChange={(e) =>
                                setUserProfile({ ...userProfile, address: e.target.value })
                              }
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#252872] focus:border-transparent outline-none transition-all"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Institute
                            </label>
                            <input
                              type="text"
                              value={userProfile.institute}
                              onChange={(e) =>
                                setUserProfile({ ...userProfile, institute: e.target.value })
                              }
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#252872] focus:border-transparent outline-none transition-all"
                            />
                          </div>
                        </div>

                        <div className="flex items-center gap-3 pt-4">
                          <button
                            type="submit"
                            className="px-6 py-3 bg-gradient-to-r from-[#252872] to-[#d91f22] text-white font-medium rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
                          >
                            <Save className="w-4 h-4" />
                            Save Changes
                          </button>
                          <button
                            type="button"
                            onClick={() => setIsEditing(false)}
                            className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-2"
                          >
                            <X className="w-4 h-4" />
                            Cancel
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                )}

                {/* EDUCATION TAB */}
                {activeTab === 'education' && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#252872] mb-6">
                      Educational Background
                    </h2>
                    <div className="space-y-4">
                      {EDUCATION.map((edu, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-5 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100"
                        >
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-[#252872]">
                            <BookOpen className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-[#252872] text-lg mb-1">
                              {edu.degree}
                            </h3>
                            <p className="text-gray-600 font-medium mb-1">
                              {edu.institute}
                            </p>
                            <p className="text-sm text-gray-500">
                              Graduated: {edu.year}
                            </p>
                          </div>
                        </div>
                      ))}
                      <button className="w-full py-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 font-medium hover:border-[#252872] hover:text-[#252872] hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                        <BookOpen className="w-5 h-5" />
                        Add Education
                      </button>
                    </div>
                  </div>
                )}

                {/* MY TESTS TAB */}
                {activeTab === 'tests' && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#252872] mb-6">
                      Test History
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="text-left py-4 px-4 font-semibold text-gray-600 text-sm rounded-tl-xl">
                              Test Name
                            </th>
                            <th className="text-left py-4 px-4 font-semibold text-gray-600 text-sm">
                              Date
                            </th>
                            <th className="text-left py-4 px-4 font-semibold text-gray-600 text-sm">
                              Score
                            </th>
                            <th className="text-left py-4 px-4 font-semibold text-gray-600 text-sm">
                              Status
                            </th>
                            <th className="text-right py-4 px-4 font-semibold text-gray-600 text-sm rounded-tr-xl">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {TEST_HISTORY.map((test) => (
                            <tr
                              key={test.id}
                              className="hover:bg-gray-50 transition-colors"
                            >
                              <td className="py-4 px-4">
                                <p className="font-medium text-[#252872]">
                                  {test.name}
                                </p>
                              </td>
                              <td className="py-4 px-4 text-gray-600 text-sm">
                                {test.date}
                              </td>
                              <td className="py-4 px-4">
                                <span
                                  className={`font-bold text-lg ${
                                    test.score >= 40
                                      ? 'text-green-600'
                                      : 'text-red-500'
                                  }`}
                                >
                                  {test.score.toFixed(2)}%
                                </span>
                              </td>
                              <td className="py-4 px-4">
                                <span
                                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                    test.status === 'Passed'
                                      ? 'bg-green-100 text-green-700'
                                      : test.status === 'Failed'
                                        ? 'bg-red-100 text-red-700'
                                        : 'bg-gray-100 text-gray-700'
                                  }`}
                                >
                                  {test.status}
                                </span>
                              </td>
                              <td className="py-4 px-4 text-right">
                                <button className="text-[#252872] hover:text-[#d91f22] text-sm font-medium hover:underline">
                                  View Details
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* PURCHASES TAB */}
                {activeTab === 'purchases' && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#252872] mb-6">
                      Purchase History
                    </h2>
                    <div className="space-y-4">
                      {PURCHASES.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-gradient-to-br from-green-50 to-blue-50 border border-green-100 rounded-xl hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start gap-4 mb-4 md:mb-0">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-green-600 shadow-sm">
                              <ShoppingBag className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="font-bold text-[#252872] text-lg mb-2">
                                {item.name}
                              </h3>
                              <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                                <span className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  Purchased: {item.date}
                                </span>
                                <span className="flex items-center gap-1">
                                  <AlertCircle className="w-4 h-4" />
                                  Expires: {item.expiry}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="font-bold text-[#252872] text-xl mb-1">
                                {item.price}
                              </p>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                {item.status}
                              </span>
                            </div>
                            <div className="flex gap-2">
                              <button className="p-2.5 text-gray-600 hover:text-[#252872] transition-colors bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                                <Download className="w-5 h-5" />
                              </button>
                              <button className="p-2.5 text-gray-600 hover:text-[#252872] transition-colors bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                                <Eye className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SETTINGS TAB */}
                {activeTab === 'settings' && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#252872] mb-6">
                      Account Settings
                    </h2>
                    <div className="space-y-4">
                      {[
                        {
                          label: 'Notifications',
                          icon: Bell,
                          color: 'blue',
                          state: notifications,
                          setState: setNotifications,
                        },
                        {
                          label: 'Dark Mode',
                          icon: Moon,
                          color: 'purple',
                          state: darkMode,
                          setState: setDarkMode,
                        },
                      ].map((setting, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-5 bg-gray-50 rounded-xl border border-gray-100"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-3 bg-${setting.color}-50 text-${setting.color}-600 rounded-xl`}>
                              <setting.icon className="w-5 h-5" />
                            </div>
                            <span className="font-medium text-gray-800">
                              {setting.label}
                            </span>
                          </div>
                          <button
                            onClick={() => setting.setState(!setting.state)}
                            className={`w-14 h-7 rounded-full transition-colors relative ${
                              setting.state ? 'bg-gradient-to-r from-[#252872] to-[#d91f22]' : 'bg-gray-300'
                            }`}
                          >
                            <div
                              className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-all shadow-md ${
                                setting.state ? 'left-8' : 'left-1'
                              }`}
                            />
                          </button>
                        </div>
                      ))}

                      <button className="flex items-center justify-between w-full p-5 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="p-3 bg-green-50 text-green-600 rounded-xl">
                            <Shield className="w-5 h-5" />
                          </div>
                          <span className="font-medium text-gray-800">
                            Privacy & Security
                          </span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}