'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, GraduationCap, Building2, Banknote, Award, Briefcase, MapPin, X } from 'lucide-react'

const studentPlacements = [
  {
    id: 1,
    name: 'Aarav Sharma',
    image: 'https://i.pravatar.cc/150?img=11',
    batch: '2025',
    company: 'Nabil Bank',
    salary: 'NPR 8 Lakhs/year',
    admissionSecured: null,
    expertise: 'Banking & Finance',
    workExperience: '1 year - Management Trainee, Nabil Bank',
  },
  {
    id: 2,
    name: 'Priya Adhikari',
    image: 'https://i.pravatar.cc/150?img=47',
    batch: '2025',
    company: 'Deloitte Nepal',
    salary: 'NPR 12 Lakhs/year',
    admissionSecured: null,
    expertise: 'Software Engineering',
    workExperience: '6 months - Intern, Deloitte Nepal',
  },
  {
    id: 3,
    name: 'Bikash Thapa',
    image: 'https://i.pravatar.cc/150?img=33',
    batch: '2024',
    company: 'WorldLink Communications',
    salary: 'NPR 6 Lakhs/year',
    admissionSecured: null,
    expertise: 'Network & Telecom',
    workExperience: '2 years - Junior Developer, WorldLink',
  },
  {
    id: 4,
    name: 'Srijana KC',
    image: 'https://i.pravatar.cc/150?img=25',
    batch: '2025',
    company: 'Unilever Nepal',
    salary: 'NPR 10 Lakhs/year',
    admissionSecured: null,
    expertise: 'Marketing & Sales',
    workExperience: '1.5 years - Marketing Executive, Unilever',
  },
  {
    id: 5,
    name: 'Suresh Maharjan',
    image: 'https://i.pravatar.cc/150?img=15',
    batch: '2023',
    company: null,
    salary: null,
    admissionSecured: 'University of Melbourne — MBA',
    expertise: 'Business Management',
    workExperience: '3 years - Business Analyst, Deloitte Nepal',
  },
  {
    id: 6,
    name: 'Kabita Shrestha',
    image: 'https://i.pravatar.cc/150?img=45',
    batch: '2023',
    company: null,
    salary: null,
    admissionSecured: 'University of Toronto — MSc Finance',
    expertise: 'Finance & Accounting',
    workExperience: '2 years - Finance Officer, NIC Asia Bank',
  },
]

export default function PlacementsSection() {
  const [search, setSearch] = useState('')

  const filtered = studentPlacements.filter((s) =>
    [s.name, s.batch, s.company, s.admissionSecured, s.expertise]
      .filter(Boolean)
      .some((f) => f!.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-[#252872]">Placement Overview</h2>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search name, batch, company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-9 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#252872]/30 focus:border-[#252872] bg-white"
          />
          {search && (
            <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2">
              <X className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Placement Rate', value: '92%' },
          { label: 'Avg. Package', value: 'NPR 6L' },
          { label: 'Highest Package', value: 'NPR 18L' },
          { label: 'Recruiters', value: '50+' },
        ].map((s, i) => (
          <div key={i} className="bg-[#252872]/5 rounded-2xl p-4 text-center border border-[#252872]/8">
            <p className="text-2xl font-black text-[#252872]">{s.value}</p>
            <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Cards */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-dashed border-gray-200">
          <p className="text-gray-400 text-sm">No results found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((student, i) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
            >
              {/* Accent top bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#252872] to-[#d91f22]" />

              <div className="p-5">
                {/* Name + Batch + Avatar */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-md shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[#252872] text-sm truncate">{student.name}</h4>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <GraduationCap className="w-3 h-3 text-gray-400" />
                      <span className="text-[11px] text-gray-400 font-medium">Batch of {student.batch}</span>
                    </div>
                  </div>
                  {student.admissionSecured ? (
                    <span className="shrink-0 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-[#252872]/10 text-[#252872]">
                      Higher Studies
                    </span>
                  ) : (
                    <span className="shrink-0 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-[#d91f22]/10 text-[#d91f22]">
                      Placed
                    </span>
                  )}
                </div>

                <div className="space-y-2.5">
                  {/* Company or Secured Admission */}
                  {student.company ? (
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#252872]/8 flex items-center justify-center shrink-0">
                        <Building2 className="w-3.5 h-3.5 text-[#252872]" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Company</p>
                        <p className="text-sm font-bold text-gray-800">{student.company}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#252872]/8 flex items-center justify-center shrink-0">
                        <MapPin className="w-3.5 h-3.5 text-[#252872]" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Secured Admission</p>
                        <p className="text-sm font-bold text-[#252872]">{student.admissionSecured}</p>
                      </div>
                    </div>
                  )}

                  {/* Salary */}
                  {student.salary && (
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#d91f22]/8 flex items-center justify-center shrink-0">
                        <Banknote className="w-3.5 h-3.5 text-[#d91f22]" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Salary</p>
                        <p className="text-sm font-bold text-[#d91f22]">{student.salary}</p>
                      </div>
                    </div>
                  )}

                  {/* Expertise */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#252872]/8 flex items-center justify-center shrink-0">
                      <Award className="w-3.5 h-3.5 text-[#252872]" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Expertise</p>
                      <p className="text-sm font-semibold text-gray-700">{student.expertise}</p>
                    </div>
                  </div>

                  {/* Work Experience */}
                  <div className="flex items-start gap-2.5 pt-2.5 border-t border-gray-100">
                    <div className="w-7 h-7 rounded-lg bg-[#d91f22]/8 flex items-center justify-center shrink-0 mt-0.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#d91f22]" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Work Experience</p>
                      <p className="text-xs text-gray-600 leading-relaxed">{student.workExperience}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}