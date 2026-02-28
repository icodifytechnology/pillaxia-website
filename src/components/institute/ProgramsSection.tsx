'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Users, ChevronRight, X, BookOpen, FileText, Info, CheckCircle2, Calendar, Award } from 'lucide-react'
import { useState } from 'react'

const programs = [
  {
    name: 'BBA (Bachelor of Business Administration)',
    duration: '4 Years',
    seats: 120,
    level: 'Undergraduate',
    color: 'from-blue-500 to-indigo-500',
    accentColor: '#4f46e5',
    lightColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
    affiliation: 'Tribhuvan University',
    fee: 'NPR 1,20,000/year',
    eligibility: '10+2 or equivalent with minimum 45% in any stream',
    overview: 'The BBA program is designed to provide students with a strong foundation in business management, entrepreneurship, and leadership. It equips graduates with the skills needed to excel in modern business environments.',
    highlights: [
      'Industry-oriented curriculum',
      'Guest lectures from business leaders',
      'Internship opportunities with top companies',
      'Case study-based learning',
      'Entrepreneurship development cell',
    ],
    syllabus: [
      { semester: 'Semester I', subjects: ['Principles of Management', 'Business Mathematics', 'Business Communication', 'Microeconomics', 'Financial Accounting'] },
      { semester: 'Semester II', subjects: ['Organizational Behavior', 'Business Statistics', 'Macroeconomics', 'Cost & Management Accounting', 'Business Law'] },
      { semester: 'Semester III', subjects: ['Marketing Management', 'Human Resource Management', 'Financial Management', 'Research Methodology', 'Business Environment'] },
      { semester: 'Semester IV', subjects: ['Operations Management', 'Strategic Management', 'Entrepreneurship', 'Project Work', 'Elective I'] },
    ],
    courses: [
      { code: 'BBA 101', name: 'Principles of Management', credits: 3 },
      { code: 'BBA 102', name: 'Business Mathematics', credits: 3 },
      { code: 'BBA 201', name: 'Marketing Management', credits: 3 },
      { code: 'BBA 202', name: 'Financial Management', credits: 3 },
      { code: 'BBA 301', name: 'Strategic Management', credits: 3 },
      { code: 'BBA 302', name: 'Entrepreneurship Development', credits: 3 },
    ],
  },
  {
    name: 'BBS (Bachelor of Business Studies)',
    duration: '4 Years',
    seats: 100,
    level: 'Undergraduate',
    color: 'from-green-500 to-emerald-500',
    accentColor: '#059669',
    lightColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    affiliation: 'Tribhuvan University',
    fee: 'NPR 80,000/year',
    eligibility: '10+2 or equivalent with minimum 40% in any stream',
    overview: 'BBS is a four-year undergraduate program focusing on commerce and business studies. It provides a comprehensive understanding of business, commerce, and management principles.',
    highlights: [
      'Comprehensive business studies',
      'Commerce-focused curriculum',
      'Practical training modules',
      'Project-based assessment',
      'Career counseling services',
    ],
    syllabus: [
      { semester: 'Year I', subjects: ['Business English', 'Mathematics I', 'Accounting I', 'Economics I', 'Business Law'] },
      { semester: 'Year II', subjects: ['Accounting II', 'Economics II', 'Management', 'Statistics', 'Computer Application'] },
      { semester: 'Year III', subjects: ['Cost Accounting', 'Marketing', 'Finance', 'Auditing', 'Taxation'] },
      { semester: 'Year IV', subjects: ['Advanced Accounting', 'Business Policy', 'Research Project', 'Elective I', 'Elective II'] },
    ],
    courses: [
      { code: 'BBS 101', name: 'Business English', credits: 3 },
      { code: 'BBS 102', name: 'Accounting I', credits: 3 },
      { code: 'BBS 201', name: 'Cost Accounting', credits: 3 },
      { code: 'BBS 202', name: 'Marketing', credits: 3 },
      { code: 'BBS 301', name: 'Advanced Accounting', credits: 3 },
      { code: 'BBS 302', name: 'Business Policy', credits: 3 },
    ],
  },
  {
    name: 'BCA (Bachelor of Computer Application)',
    duration: '4 Years',
    seats: 80,
    level: 'Undergraduate',
    color: 'from-purple-500 to-violet-500',
    accentColor: '#7c3aed',
    lightColor: 'bg-violet-50',
    textColor: 'text-violet-600',
    affiliation: 'Pokhara University',
    fee: 'NPR 1,00,000/year',
    eligibility: '10+2 with Mathematics/Computer Science with minimum 45%',
    overview: 'BCA is a specialized undergraduate program in computer applications, software development, and IT. Students gain hands-on experience in programming, databases, and modern software technologies.',
    highlights: [
      'Modern programming languages',
      'Industry-level projects',
      'Software development labs',
      'Placement assistance',
      'Hackathons and coding contests',
    ],
    syllabus: [
      { semester: 'Semester I', subjects: ['Programming in C', 'Mathematics I', 'Digital Logic', 'English for IT', 'PC Hardware'] },
      { semester: 'Semester II', subjects: ['Object Oriented Programming', 'Data Structures', 'Web Technology', 'Database Systems', 'Mathematics II'] },
      { semester: 'Semester III', subjects: ['Java Programming', 'Operating Systems', 'Computer Networks', 'Software Engineering', 'Statistics'] },
      { semester: 'Semester IV', subjects: ['Advanced Java', 'Cloud Computing', 'Mobile Application Development', 'Project Work', 'Elective'] },
    ],
    courses: [
      { code: 'BCA 101', name: 'Programming in C', credits: 4 },
      { code: 'BCA 102', name: 'Digital Logic', credits: 3 },
      { code: 'BCA 201', name: 'Data Structures', credits: 4 },
      { code: 'BCA 202', name: 'Database Systems', credits: 3 },
      { code: 'BCA 301', name: 'Software Engineering', credits: 3 },
      { code: 'BCA 302', name: 'Mobile App Development', credits: 4 },
    ],
  },
  {
    name: 'MBA (Master of Business Administration)',
    duration: '2 Years',
    seats: 60,
    level: 'Postgraduate',
    color: 'from-amber-500 to-orange-500',
    accentColor: '#d97706',
    lightColor: 'bg-amber-50',
    textColor: 'text-amber-600',
    affiliation: 'Kathmandu University',
    fee: 'NPR 2,50,000/year',
    eligibility: "Bachelor's degree with minimum 50% marks in any discipline",
    overview: 'The MBA program is a prestigious postgraduate qualification that develops advanced management and leadership competencies. It is designed for professionals looking to accelerate their careers.',
    highlights: [
      'Leadership and executive training',
      'Global business perspectives',
      'Live industry projects',
      'Executive mentorship program',
      'Alumni network access',
    ],
    syllabus: [
      { semester: 'Semester I', subjects: ['Managerial Economics', 'Organizational Theory', 'Financial Reporting', 'Quantitative Methods', 'Business Communication'] },
      { semester: 'Semester II', subjects: ['Corporate Finance', 'Marketing Strategy', 'Operations Management', 'Business Ethics', 'Research Methods'] },
      { semester: 'Semester III', subjects: ['Strategic Management', 'International Business', 'Leadership', 'Elective I', 'Elective II'] },
      { semester: 'Semester IV', subjects: ['Business Policy', 'Elective III', 'Elective IV', 'Thesis/Dissertation'] },
    ],
    courses: [
      { code: 'MBA 101', name: 'Managerial Economics', credits: 3 },
      { code: 'MBA 102', name: 'Financial Reporting', credits: 3 },
      { code: 'MBA 201', name: 'Corporate Finance', credits: 3 },
      { code: 'MBA 202', name: 'Marketing Strategy', credits: 3 },
      { code: 'MBA 301', name: 'Strategic Management', credits: 3 },
      { code: 'MBA 302', name: 'International Business', credits: 3 },
    ],
  },
  {
    name: 'MBS (Master of Business Studies)',
    duration: '2 Years',
    seats: 50,
    level: 'Postgraduate',
    color: 'from-rose-500 to-pink-500',
    accentColor: '#e11d48',
    lightColor: 'bg-rose-50',
    textColor: 'text-rose-600',
    affiliation: 'Tribhuvan University',
    fee: 'NPR 1,50,000/year',
    eligibility: "Bachelor's degree with minimum 45% marks in Commerce or Management",
    overview: 'MBS is a postgraduate program focused on advanced business and commerce studies. It enhances analytical, managerial, and research capabilities of graduates from commerce backgrounds.',
    highlights: [
      'Advanced commerce studies',
      'Research methodology training',
      'Case-based instruction',
      'Thesis and project options',
      'Industry collaboration',
    ],
    syllabus: [
      { semester: 'Year I (Part I)', subjects: ['Advanced Management', 'Advanced Accounting', 'Managerial Economics', 'Research Methodology', 'Business Environment'] },
      { semester: 'Year I (Part II)', subjects: ['Financial Management', 'Marketing Management', 'HRM', 'Statistics for Management', 'Business Law'] },
      { semester: 'Year II (Part I)', subjects: ['Advanced Finance', 'International Business', 'Elective I', 'Elective II'] },
      { semester: 'Year II (Part II)', subjects: ['Thesis/Research Project', 'Viva Voce'] },
    ],
    courses: [
      { code: 'MBS 101', name: 'Advanced Management', credits: 3 },
      { code: 'MBS 102', name: 'Advanced Accounting', credits: 3 },
      { code: 'MBS 201', name: 'Financial Management', credits: 3 },
      { code: 'MBS 202', name: 'Marketing Management', credits: 3 },
      { code: 'MBS 301', name: 'International Business', credits: 3 },
      { code: 'MBS 302', name: 'Research Project', credits: 6 },
    ],
  },
  {
    name: 'B.Sc. CSIT',
    duration: '4 Years',
    seats: 60,
    level: 'Undergraduate',
    color: 'from-cyan-500 to-teal-500',
    accentColor: '#0891b2',
    lightColor: 'bg-cyan-50',
    textColor: 'text-cyan-600',
    affiliation: 'Tribhuvan University',
    fee: 'NPR 1,10,000/year',
    eligibility: '10+2 with Physics, Chemistry, and Mathematics with minimum 45%',
    overview: 'B.Sc. CSIT is a rigorous four-year science and IT program that combines computer science theory with practical software engineering skills. Graduates are highly sought in the IT industry.',
    highlights: [
      'Strong CS fundamentals',
      'Advanced programming labs',
      'AI and machine learning modules',
      'Software development projects',
      'IT industry internships',
    ],
    syllabus: [
      { semester: 'Semester I', subjects: ['C Programming', 'Discrete Structures', 'Physics', 'Mathematics I', 'Digital Logic'] },
      { semester: 'Semester II', subjects: ['Data Structures', 'OOP in Java', 'Mathematics II', 'Electronics', 'Statistics'] },
      { semester: 'Semester III', subjects: ['Algorithms', 'Computer Architecture', 'Operating Systems', 'Database', 'Numerical Methods'] },
      { semester: 'Semester IV', subjects: ['Compiler Design', 'Computer Networks', 'Software Engineering', 'AI', 'Project I'] },
    ],
    courses: [
      { code: 'CSIT 101', name: 'C Programming', credits: 4 },
      { code: 'CSIT 102', name: 'Discrete Structures', credits: 3 },
      { code: 'CSIT 201', name: 'Data Structures & Algorithms', credits: 4 },
      { code: 'CSIT 202', name: 'Database Management', credits: 3 },
      { code: 'CSIT 301', name: 'Artificial Intelligence', credits: 3 },
      { code: 'CSIT 302', name: 'Computer Networks', credits: 3 },
    ],
  },
]

const tabs = [
  { id: 'details', label: 'Details', icon: Info },
  { id: 'syllabus', label: 'Syllabus', icon: Calendar },
  { id: 'courses', label: 'Courses', icon: BookOpen },
]

function ProgramModal({ program, onClose }: { program: typeof programs[0]; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState('details')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`bg-gradient-to-r ${program.color} p-6 relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/20 text-white mb-3 inline-block`}>
            {program.level}
          </span>
          <h2 className="text-xl font-black text-white leading-tight pr-8 mb-4">{program.name}</h2>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-1.5 bg-white/15 rounded-lg px-3 py-1.5">
              <Clock className="w-3.5 h-3.5 text-white/80" />
              <span className="text-xs font-semibold text-white">{program.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/15 rounded-lg px-3 py-1.5">
              <Users className="w-3.5 h-3.5 text-white/80" />
              <span className="text-xs font-semibold text-white">{program.seats} Seats</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/15 rounded-lg px-3 py-1.5">
              <Award className="w-3.5 h-3.5 text-white/80" />
              <span className="text-xs font-semibold text-white">{program.affiliation}</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-100 px-6 bg-white">
          <div className="flex gap-0">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3.5 text-sm font-semibold border-b-2 transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'border-[#d91f22] text-[#d91f22]'
                      : 'border-transparent text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {/* Details Tab */}
              {activeTab === 'details' && (
                <div className="space-y-5">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Overview</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{program.overview}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className={`${program.lightColor} rounded-xl p-4`}>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Annual Fee</p>
                      <p className="text-sm font-bold" style={{ color: program.accentColor }}>{program.fee}</p>
                    </div>
                    <div className={`${program.lightColor} rounded-xl p-4`}>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Affiliation</p>
                      <p className="text-sm font-bold" style={{ color: program.accentColor }}>{program.affiliation}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Eligibility</h4>
                    <div className={`${program.lightColor} rounded-xl p-4`}>
                      <p className="text-sm text-gray-700">{program.eligibility}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Program Highlights</h4>
                    <div className="space-y-2">
                      {program.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: program.accentColor }} />
                          <span className="text-sm text-gray-600">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Syllabus Tab */}
              {activeTab === 'syllabus' && (
                <div className="space-y-4">
                  {program.syllabus.map((sem, i) => (
                    <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                      <div className={`px-4 py-2.5 ${program.lightColor} flex items-center gap-2`}>
                        <Calendar className="w-3.5 h-3.5" style={{ color: program.accentColor }} />
                        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: program.accentColor }}>
                          {sem.semester}
                        </span>
                      </div>
                      <div className="p-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {sem.subjects.map((sub, j) => (
                            <div key={j} className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: program.accentColor }} />
                              {sub}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Courses Tab */}
              {activeTab === 'courses' && (
                <div className="space-y-2.5">
                  <div className="grid grid-cols-3 text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4 pb-2">
                    <span>Code</span>
                    <span className="col-span-1">Course Name</span>
                    <span className="text-right">Credits</span>
                  </div>
                  {program.courses.map((course, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="grid grid-cols-3 items-center px-4 py-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-xs font-bold" style={{ color: program.accentColor }}>{course.code}</span>
                      <span className="text-sm text-gray-700 font-medium">{course.name}</span>
                      <div className="flex justify-end">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${program.lightColor}`} style={{ color: program.accentColor }}>
                          {course.credits} cr
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ProgramsSection() {
  const [selectedProgram, setSelectedProgram] = useState<typeof programs[0] | null>(null)

  return (
    <>
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
                <button
                  onClick={() => setSelectedProgram(program)}
                  className="mt-4 text-[#d91f22] text-sm font-semibold hover:underline flex items-center gap-1"
                >
                  View Details <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProgram && (
          <ProgramModal program={selectedProgram} onClose={() => setSelectedProgram(null)} />
        )}
      </AnimatePresence>
    </>
  )
}