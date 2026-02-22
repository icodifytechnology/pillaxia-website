'use client'

import { motion } from 'framer-motion'
import { Clock, Users, ChevronRight } from 'lucide-react'

const programs = [
  { name: 'BBA (Bachelor of Business Administration)', duration: '4 Years', seats: 120, level: 'Undergraduate', color: 'from-blue-500 to-indigo-500' },
  { name: 'BBS (Bachelor of Business Studies)', duration: '4 Years', seats: 100, level: 'Undergraduate', color: 'from-green-500 to-emerald-500' },
  { name: 'BCA (Bachelor of Computer Application)', duration: '4 Years', seats: 80, level: 'Undergraduate', color: 'from-purple-500 to-violet-500' },
  { name: 'MBA (Master of Business Administration)', duration: '2 Years', seats: 60, level: 'Postgraduate', color: 'from-amber-500 to-orange-500' },
  { name: 'MBS (Master of Business Studies)', duration: '2 Years', seats: 50, level: 'Postgraduate', color: 'from-rose-500 to-pink-500' },
  { name: 'B.Sc. CSIT', duration: '4 Years', seats: 60, level: 'Undergraduate', color: 'from-cyan-500 to-teal-500' },
]

export default function ProgramsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#252872] mb-6">Programs & Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {programs.map((program, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group"
          >
            <div className={`h-1.5 bg-gradient-to-r ${program.color}`} />
            <div className="p-6">
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${program.level === 'Postgraduate' ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'}`}>
                {program.level}
              </span>
              <h3 className="text-lg font-bold text-[#252872] mt-3 mb-3 group-hover:text-[#d91f22] transition-colors">
                {program.name}
              </h3>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {program.duration}</span>
                <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {program.seats} seats</span>
              </div>
              <button className="mt-4 text-[#d91f22] text-sm font-semibold hover:underline flex items-center gap-1">
                View Details <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}