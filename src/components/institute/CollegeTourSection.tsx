'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Play,
  X,
  Award,
  ChevronRight,
  CheckCircle2,
  GraduationCap,
  BookOpen,
  Trophy,
  Loader2,
  Dumbbell,
} from 'lucide-react'
import { ScholarshipCard } from './ScholarshipCard'

/* ─────────────────────────────────────────────
   COLLEGE TOUR SECTION
───────────────────────────────────────────── */
const tourItems = [
  { label: 'Main Building Tour', icon: BookOpen },
  { label: 'Library & Labs', icon: GraduationCap },
  { label: 'Sports Facilities', icon: Dumbbell },
]

export function CollegeTourSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-[#252872]">College Tour</h2>

      {/* Main video player */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="aspect-video bg-[#0f1120] relative flex items-center justify-center overflow-hidden">
          {/* Subtle animated background */}
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#d91f22]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#252872]/30 rounded-full blur-3xl animate-pulse delay-700" />
          </div>

          {!playing ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center relative z-10"
            >
              <button
                onClick={() => setPlaying(true)}
                className="group relative mx-auto mb-5 block"
              >
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center pl-1 shadow-2xl">
                    <Play className="w-7 h-7 text-[#d91f22] fill-current" />
                  </div>
                </div>
                {/* Ripple rings */}
                <span className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping" />
              </button>
              <h3 className="text-white text-xl font-bold mb-1.5">Virtual Campus Tour</h3>
              <p className="text-gray-400 text-sm">Experience our campus from the comfort of your home</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <p className="text-white/50 text-sm">Video player goes here</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Tour clips */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tourItems.map((tour, i) => {
          const Icon = tour.icon
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer hover:shadow-md hover:border-[#252872]/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#252872]/06 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#252872]/10 transition-colors">
                <div className="w-9 h-9 bg-[#d91f22]/10 rounded-lg flex items-center justify-center">
                  <Play className="w-4 h-4 text-[#d91f22] fill-current" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-[#252872] text-sm truncate">{tour.label}</h4>
                <p className="text-xs text-gray-400 mt-0.5">3–5 min video</p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#d91f22] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
            </motion.div>
          )
        })}
      </div>
     
    </div>
  )
}