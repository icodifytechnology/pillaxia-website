'use client'

import { motion } from 'framer-motion'
import {
  BookOpen, Globe, BarChart3, Dumbbell, Music, Heart,
  CheckCircle, MapPin, Palette,
} from 'lucide-react'

const facilities = [
  { name: 'Modern Library', desc: 'Digital and physical collection of 25,000+ books and journals', icon: BookOpen, color: 'bg-blue-50 text-blue-600' },
  { name: 'Computer Labs', desc: '200+ workstations with high-speed internet and latest software', icon: Globe, color: 'bg-purple-50 text-purple-600' },
  { name: 'Science Labs', desc: 'Fully equipped physics, chemistry, and biology laboratories', icon: BarChart3, color: 'bg-green-50 text-green-600' },
  { name: 'Sports Complex', desc: 'Indoor and outdoor facilities for basketball, football, and more', icon: Dumbbell, color: 'bg-orange-50 text-orange-600' },
  { name: 'Auditorium', desc: '500-seat auditorium for events, seminars, and cultural programs', icon: Music, color: 'bg-pink-50 text-pink-600' },
  { name: 'Cafeteria', desc: 'Hygienic dining facility serving nutritious meals daily', icon: Heart, color: 'bg-amber-50 text-amber-600' },
  { name: 'Medical Center', desc: '24/7 health services with qualified medical professionals', icon: CheckCircle, color: 'bg-red-50 text-red-600' },
  { name: 'Transportation', desc: 'Bus service covering major routes across Kathmandu valley', icon: MapPin, color: 'bg-cyan-50 text-cyan-600' },
  { name: 'Art Studio', desc: 'Creative space for visual arts, design, and multimedia projects', icon: Palette, color: 'bg-indigo-50 text-indigo-600' },
]

export default function FacilitiesSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#252872] mb-6">Our Facilities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((facility, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${facility.color}`}>
              <facility.icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#252872] mb-2">{facility.name}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{facility.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}