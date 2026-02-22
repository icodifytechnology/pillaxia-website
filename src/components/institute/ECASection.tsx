'use client'

import { motion } from 'framer-motion'
import { Dumbbell, Music, Palette, Users, Heart, Globe, Camera, Briefcase } from 'lucide-react'

const activities = [
  { name: 'Sports Club', desc: 'Football, basketball, cricket, and athletics', icon: Dumbbell, color: 'bg-orange-50 text-orange-600' },
  { name: 'Music & Dance', desc: 'Classical, modern dance, and band performances', icon: Music, color: 'bg-pink-50 text-pink-600' },
  { name: 'Art & Design', desc: 'Painting, sketching, and digital art workshops', icon: Palette, color: 'bg-indigo-50 text-indigo-600' },
  { name: 'Debate Club', desc: 'Public speaking, MUN, and debate competitions', icon: Users, color: 'bg-blue-50 text-blue-600' },
  { name: 'Community Service', desc: 'Social outreach and volunteer programs', icon: Heart, color: 'bg-red-50 text-red-600' },
  { name: 'Tech Club', desc: 'Coding workshops, hackathons, and tech talks', icon: Globe, color: 'bg-purple-50 text-purple-600' },
  { name: 'Photography', desc: 'Photo walks, exhibitions, and editing workshops', icon: Camera, color: 'bg-cyan-50 text-cyan-600' },
  { name: 'Entrepreneurship', desc: 'Business plan competitions and startup mentoring', icon: Briefcase, color: 'bg-amber-50 text-amber-600' },
]

export default function ECASection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#252872] mb-6">Extra-Curricular Activities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {activities.map((activity, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center"
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 ${activity.color}`}>
              <activity.icon className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-[#252872] text-sm mb-1">{activity.name}</h3>
            <p className="text-xs text-gray-500">{activity.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}