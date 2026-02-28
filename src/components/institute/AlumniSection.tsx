'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, BadgeCheck } from 'lucide-react'

const alumni = [
  {
    name: 'Aarav Shrestha',
    image: 'https://i.pravatar.cc/150?img=15',
    batch: '2021',
    program: 'BBA',
    role: 'Marketing Officer',
    company: 'Ncell Pvt. Ltd.',
    quote: 'Milton gave me the foundation to dream big.',
  },
  {
    name: 'Priya Adhikari',
    image: 'https://i.pravatar.cc/150?img=48',
    batch: '2020',
    program: 'BCA',
    role: 'Data Scientist',
    company: 'Google',
    quote: 'The faculty mentorship was truly life-changing.',
  },
  {
    name: 'Bikash Thapa',
    image: 'https://i.pravatar.cc/150?img=36',
    batch: '2019',
    program: 'MBA',
    role: 'Founder & CEO',
    company: 'EduTech Nepal',
    quote: 'I learned leadership and teamwork here.',
  },
  {
    name: 'Srijana KC',
    image: 'https://i.pravatar.cc/150?img=29',
    batch: '2021',
    program: 'MBS',
    role: 'Vice President',
    company: 'Nabil Bank',
    quote: 'The practical exposure prepared me for the real world.',
  },
  {
    name: 'Rohan Poudel',
    image: 'https://i.pravatar.cc/150?img=52',
    batch: '2022',
    program: 'B.Sc. CSIT',
    role: 'Software Engineer',
    company: 'Microsoft',
    quote: 'Best 4 years of my academic life.',
  },
  {
    name: 'Anita Gurung',
    image: 'https://i.pravatar.cc/150?img=44',
    batch: '2020',
    program: 'BBS',
    role: 'Public Health Director',
    company: 'WHO Nepal',
    quote: 'Milton instilled values that guide me every day.',
  },
]

export default function AlumniSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#252872] mb-6">Notable Alumni</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {alumni.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            {/* Top accent */}
            <div className="h-1 w-full bg-gradient-to-r from-[#252872] to-[#d91f22]" />

            <div className="p-5">
              {/* Avatar + Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative shrink-0">
                  <img
                    src={a.image}
                    alt={a.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#d91f22] rounded-full border-2 border-white flex items-center justify-center">
                    <BadgeCheck className="w-2.5 h-2.5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#252872] text-sm leading-tight">{a.name}</h3>
                  <span className="text-[10px] text-gray-400 font-medium">Alumni</span>
                </div>
              </div>

              {/* Program & Graduation */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1.5 bg-[#252872]/6 rounded-md px-2.5 py-1">
                  <GraduationCap className="w-3 h-3 text-[#252872]" />
                  <span className="text-[11px] font-bold text-[#252872]">Program: {a.program}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-gray-50 rounded-md px-2.5 py-1">
                  <span className="text-[11px] font-semibold text-gray-500">Class of {a.batch}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 my-3" />

              {/* Current Position */}
              <div className="mb-3">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-[#d91f22] shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-[#252872] leading-tight">{a.role}</p>
                    <p className="text-xs text-gray-500">{a.company}</p>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <p className="text-xs text-gray-400 italic leading-relaxed border-l-2 border-[#d91f22]/30 pl-3">
                "{a.quote}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}