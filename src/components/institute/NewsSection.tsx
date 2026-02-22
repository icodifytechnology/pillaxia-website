'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

const news = [
  { title: 'Admission Open for 2026 Session', date: 'Feb 5, 2026', category: 'Admission', excerpt: 'Applications are now being accepted for all undergraduate and postgraduate programs.' },
  { title: 'Annual Sports Week Starting March 15', date: 'Feb 1, 2026', category: 'Events', excerpt: 'Inter-department sports competitions including football, basketball, and athletics.' },
  { title: 'New MOU Signed with Australian University', date: 'Jan 28, 2026', category: 'Partnership', excerpt: 'Student exchange program and joint research initiatives with University of Melbourne.' },
  { title: 'Scholarship Results Published', date: 'Jan 20, 2026', category: 'Scholarship', excerpt: 'Merit-based scholarship recipients for the spring semester have been announced.' },
]

export default function NewsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#252872] mb-6">News & Announcements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {news.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 group cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 bg-red-50 text-[#d91f22] text-[10px] font-bold rounded uppercase">
                {item.category}
              </span>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {item.date}
              </span>
            </div>
            <h3 className="font-bold text-[#252872] mb-2 group-hover:text-[#d91f22] transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.excerpt}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}