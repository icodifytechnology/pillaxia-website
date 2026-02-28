'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    GraduationCap,
    MessageCircle,
    X,
    User,
    Phone,
    Mail,
    BookOpen,
    ChevronDown,
    Send,
    CheckCircle2,
    Calendar,
} from 'lucide-react'

type ModalType = 'scholarship' | 'counselling' | null

export function StickyActions() {
    const [open, setOpen] = useState<ModalType>(null)
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => {
            setSubmitted(false)
            setOpen(null)
        }, 2200)
    }

    const isScholarship = open === 'scholarship'

    return (
        <>
            {/* Sticky Buttons */}
            <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-3">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setOpen('counselling')}
                    className="flex items-center gap-2 bg-[#252872] text-white px-4 py-3 rounded-2xl shadow-xl shadow-[#252872]/30 text-sm font-bold hover:bg-[#1a1d5a] transition-colors"
                >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span className="hidden sm:inline">Free Counselling</span>
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setOpen('scholarship')}
                    className="flex items-center gap-2 bg-[#d91f22] text-white px-4 py-3 rounded-2xl shadow-xl shadow-[#d91f22]/30 text-sm font-bold hover:bg-[#b91c1c] transition-colors"
                >
                    <GraduationCap className="w-4 h-4 shrink-0" />
                    <span className="hidden sm:inline">Apply Scholarship</span>
                </motion.button>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                        onClick={() => setOpen(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.22, ease: 'easeOut' }}
                            className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className={`p-6 ${isScholarship ? 'bg-gradient-to-r from-[#d91f22] to-[#9b1a1d]' : 'bg-gradient-to-r from-[#252872] to-[#1a1b52]'}`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                                            {isScholarship
                                                ? <GraduationCap className="w-5 h-5 text-white" />
                                                : <MessageCircle className="w-5 h-5 text-white" />
                                            }
                                        </div>
                                        <div>
                                            <h2 className="text-white font-black text-lg leading-tight">
                                                {isScholarship ? 'Apply for Scholarship' : 'Book Free Counselling'}
                                            </h2>
                                            <p className="text-white/70 text-xs mt-0.5">
                                                {isScholarship ? 'Milton International College' : 'Talk to our expert advisors'}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setOpen(null)}
                                        className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
                                    >
                                        <X className="w-4 h-4 text-white" />
                                    </button>
                                </div>
                            </div>

                            {/* Form */}
                            <div className="p-6">
                                <AnimatePresence mode="wait">
                                    {submitted ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex flex-col items-center justify-center py-8 text-center"
                                        >
                                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${isScholarship ? 'bg-[#d91f22]/10' : 'bg-[#252872]/10'}`}>
                                                <CheckCircle2 className={`w-8 h-8 ${isScholarship ? 'text-[#d91f22]' : 'text-[#252872]'}`} />
                                            </div>
                                            <h3 className="text-lg font-black text-[#252872] mb-1">
                                                {isScholarship ? 'Application Submitted!' : 'Session Booked!'}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {isScholarship
                                                    ? "We'll review your application and contact you shortly."
                                                    : "Our counsellor will reach out within 24 hours."}
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            onSubmit={handleSubmit}
                                            className="space-y-4"
                                        >
                                            {/* Full Name */}
                                            <div>
                                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 block">Full Name</label>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                    <input
                                                        required
                                                        type="text"
                                                        placeholder="Your full name"
                                                        className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#252872]/20 focus:border-[#252872] bg-gray-50"
                                                    />
                                                </div>
                                            </div>

                                            {/* Phone + Email */}
                                            <div className="grid grid-cols-2 gap-3">
                                                <div>
                                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 block">Phone</label>
                                                    <div className="relative">
                                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                        <input
                                                            required
                                                            type="tel"
                                                            placeholder="+977 ..."
                                                            className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#252872]/20 focus:border-[#252872] bg-gray-50"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 block">Email</label>
                                                    <div className="relative">
                                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                        <input
                                                            required
                                                            type="email"
                                                            placeholder="email@..."
                                                            className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#252872]/20 focus:border-[#252872] bg-gray-50"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Program */}
                                            <div>
                                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 block">
                                                    {isScholarship ? 'Applying For Program' : 'Interested Program'}
                                                </label>
                                                <div className="relative">
                                                    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                    <select
                                                        required
                                                        className="w-full pl-9 pr-8 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#252872]/20 focus:border-[#252872] bg-gray-50 appearance-none"
                                                    >
                                                        <option value="">Select program</option>
                                                        <option>BBA</option>
                                                        <option>BBS</option>
                                                        <option>BCA</option>
                                                        <option>B.Sc. CSIT</option>
                                                        <option>MBA</option>
                                                        <option>MBS</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                                </div>
                                            </div>

                                            {/* Scholarship-specific fields */}
                                            {isScholarship && (
                                                <>
                                                    <div>
                                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 block">Scholarship Type</label>
                                                        <div className="relative">
                                                            <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                            <select
                                                                required
                                                                className="w-full pl-9 pr-8 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#252872]/20 focus:border-[#252872] bg-gray-50 appearance-none"
                                                            >
                                                                <option value="">Select type</option>
                                                                <option>Merit-Based Scholarship</option>
                                                                <option>Need-Based Scholarship</option>
                                                                <option>Sports Scholarship</option>
                                                                <option>Dalit/Janajati Scholarship</option>
                                                                <option>Single Women Scholarship</option>
                                                            </select>
                                                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 block">Previous GPA / %</label>
                                                        <input
                                                            required
                                                            type="text"
                                                            placeholder="e.g. 3.8 GPA or 85%"
                                                            className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#252872]/20 focus:border-[#252872] bg-gray-50"
                                                        />
                                                    </div>
                                                </>
                                            )}

                                            {/* Counselling-specific: preferred date */}
                                            {!isScholarship && (
                                                <div>
                                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 block">Preferred Date</label>
                                                    <div className="relative">
                                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                        <input
                                                            required
                                                            type="date"
                                                            className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#252872]/20 focus:border-[#252872] bg-gray-50"
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {/* Message */}
                                            <div>
                                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 block">
                                                    {isScholarship ? 'Why do you deserve this scholarship?' : 'Your message (optional)'}
                                                </label>
                                                <textarea
                                                    rows={3}
                                                    placeholder={isScholarship ? 'Tell us about your background...' : 'Any specific questions or topics...'}
                                                    className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#252872]/20 focus:border-[#252872] bg-gray-50 resize-none"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className={`w-full py-3 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all hover:opacity-90 hover:shadow-lg ${isScholarship ? 'bg-gradient-to-r from-[#d91f22] to-[#9b1a1d] shadow-[#d91f22]/20' : 'bg-gradient-to-r from-[#252872] to-[#1a1b52] shadow-[#252872]/20'} shadow-lg`}
                                            >
                                                <Send className="w-4 h-4" />
                                                {isScholarship ? 'Submit Application' : 'Book My Session'}
                                            </button>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}