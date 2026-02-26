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

/* ─────────────────────────────────────────────
   SCHOLARSHIP MODAL
───────────────────────────────────────────── */
interface ScholarshipModalProps {
  open: boolean
  onClose: () => void
}

export function ScholarshipModal({ open, onClose }: ScholarshipModalProps) {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    percentage: '',
    program: '',
    message: '',
  })

  const handleSubmit = async () => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setStep(1)
      setSubmitted(false)
      setForm({ name: '', email: '', phone: '', grade: '', percentage: '', program: '', message: '' })
    }, 300)
  }

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-[#252872] to-[#1a1c5a] px-8 pt-8 pb-10">
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="sch-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1.5" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#sch-dots)" />
                </svg>
              </div>
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
              <div className="relative">
                <div className="w-12 h-12 bg-[#d91f22] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-extrabold text-white mb-1">Apply for Scholarship</h2>
                <p className="text-white/60 text-sm">Fill in your details to check eligibility</p>
              </div>
              {/* Step indicator */}
              {!submitted && (
                <div className="relative flex items-center gap-2 mt-6">
                  {[1, 2].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          step >= s ? 'bg-[#d91f22] text-white' : 'bg-white/20 text-white/50'
                        }`}
                      >
                        {s}
                      </div>
                      {s < 2 && (
                        <div className={`w-16 h-0.5 transition-all duration-300 ${step > s ? 'bg-[#d91f22]' : 'bg-white/20'}`} />
                      )}
                    </div>
                  ))}
                  <span className="ml-2 text-white/50 text-xs">Step {step} of 2</span>
                </div>
              )}
            </div>

            {/* Body */}
            <div className="px-8 py-7">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-4"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-9 h-9 text-green-500" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#252872] mb-2">Application Submitted!</h3>
                  <p className="text-gray-500 text-sm mb-6 max-w-xs">
                    We'll review your application and get back to you within 2–3 business days.
                  </p>
                  <button
                    onClick={handleClose}
                    className="px-8 py-3 bg-[#252872] text-white rounded-xl font-bold text-sm hover:bg-[#1a1c5a] transition-colors"
                  >
                    Done
                  </button>
                </motion.div>
              ) : step === 1 ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Full Name</label>
                      <input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#252872] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Email</label>
                      <input
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="email@example.com"
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#252872] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Phone</label>
                      <input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="98XXXXXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#252872] transition-colors"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    disabled={!form.name || !form.email || !form.phone}
                    className="w-full py-3.5 bg-[#252872] disabled:opacity-40 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#1a1c5a] transition-colors"
                  >
                    Continue <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Last Grade</label>
                      <select
                        value={form.grade}
                        onChange={(e) => setForm({ ...form, grade: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#252872] transition-colors bg-white"
                      >
                        <option value="">Select</option>
                        <option>SEE</option>
                        <option>+2 / A-Level</option>
                        <option>Bachelor's</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Percentage / GPA</label>
                      <input
                        value={form.percentage}
                        onChange={(e) => setForm({ ...form, percentage: e.target.value })}
                        placeholder="e.g. 85% or 3.8"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#252872] transition-colors"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Program of Interest</label>
                      <input
                        value={form.program}
                        onChange={(e) => setForm({ ...form, program: e.target.value })}
                        placeholder="e.g. BCA, BBA, Engineering..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#252872] transition-colors"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Why do you deserve this? <span className="normal-case font-normal text-gray-400">(optional)</span></label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Brief note about your achievements..."
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#252872] transition-colors resize-none"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(1)}
                      className="px-5 py-3.5 border border-gray-200 text-gray-500 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!form.grade || !form.percentage || !form.program || loading}
                      className="flex-1 py-3.5 bg-[#d91f22] disabled:opacity-40 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#b91920] transition-colors"
                    >
                      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Submit Application <CheckCircle2 className="w-4 h-4" /></>}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

/* ─────────────────────────────────────────────
   SCHOLARSHIP SECTION  (reusable)
───────────────────────────────────────────── */
const scholarships = [
  {
    icon: Trophy,
    label: 'Merit Scholarship',
    desc: 'Up to 100% for top scorers',
    color: '#d91f22',
  },
  {
    icon: GraduationCap,
    label: 'Need-Based Aid',
    desc: 'Financial support for deserving students',
    color: '#252872',
  },
  {
    icon: BookOpen,
    label: 'Academic Excellence',
    desc: 'For consistent high performers',
    color: '#d91f22',
  },
  {
    icon: Dumbbell,
    label: 'Sports Quota',
    desc: 'Special provision for athletes',
    color: '#252872',
  },
]

interface ScholarshipSectionProps {
  className?: string
}

export function ScholarshipCard({ className = '' }: ScholarshipSectionProps) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <ScholarshipModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className={`relative mt-8 rounded-3xl overflow-hidden ${className}`}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#252872] via-[#1e2060] to-[#d91f22]/80" />
        <div className="absolute inset-0 opacity-[0.07]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="sch-bg" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="16" cy="16" r="12" fill="none" stroke="white" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sch-bg)" />
          </svg>
        </div>
        {/* Glow orbs */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#d91f22]/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#252872]/40 blur-3xl pointer-events-none" />

        <div className="relative px-8 py-10 md:px-12 md:py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Left */}
            <div className="md:max-w-sm">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 mb-4">
                <Award className="w-4 h-4 text-yellow-300" />
                <span className="text-yellow-300 text-xs font-bold uppercase tracking-widest">Scholarship Program</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">
                Invest in Your<br />Future Today
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                We believe financial constraints should never stop a bright mind. Explore our range of scholarships and apply now.
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#d91f22] hover:bg-[#b91920] text-white rounded-xl font-bold text-sm shadow-lg shadow-[#d91f22]/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Apply for Scholarship
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right – scholarship cards */}
            <div className="grid grid-cols-2 gap-3 md:w-auto w-full">
              {scholarships.map((s, i) => {
                const Icon = s.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 rounded-2xl p-4 cursor-pointer transition-all duration-300 group"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: s.color }}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-white text-sm font-bold leading-tight mb-0.5">{s.label}</p>
                    <p className="text-white/50 text-xs">{s.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}
