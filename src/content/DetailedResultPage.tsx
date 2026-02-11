'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown,
  CheckCircle,
  XCircle,
  MinusCircle,
  Award,
  Target,
  TrendingDown,
  FileText,
  HelpCircle,
  Clock,
  List,
  BarChart3,
} from 'lucide-react'
import { PersonalDetailsSidebar } from '../components/PersonalDetailsSidebar'
import { useRouter } from 'next/navigation'

const questions = [
  {
    id: 1,
    text: 'वीरेन्द्र प्रहरी अस्पतालको निर्माण कहिले देखि भएको हो ?',
    options: [
      '(A) वि.स. २०३९',
      '(B) वि.स. २०३६',
      '(C) वि.स. २०४०',
      '(D) वि.स. २०४४',
    ],
    correctIndex: 2,
    selectedIndex: null,
    status: 'skipped',
  },
  {
    id: 2,
    text: 'भारतको लागी पहिलो नेपाली राजदूत को हुन् ?',
    options: [
      '(A) बब्बर शमशेर',
      '(B) सिंह शमशेर जबरा',
      '(C) ऋषिकेश शाह',
      '(D) केशर शमशेर',
    ],
    correctIndex: 1,
    selectedIndex: null,
    status: 'skipped',
  },
  {
    id: 3,
    text: 'Forensic प्रमाण बारे विचार गर्नुहोस्?',
    options: [
      '(A) Blood',
      '(B) DNA',
      '(C) Fingerprints',
      '(D) All of the above',
    ],
    correctIndex: 3,
    selectedIndex: null,
    status: 'skipped',
  },
]
const summaryData = [
  {
    label: 'Your Rank',
    value: '1 out of 1',
    icon: Award,
    color: 'text-indigo-600 bg-indigo-50',
  },
  {
    label: 'Total Marks Obtained',
    value: '0',
    icon: Target,
    color: 'text-blue-600 bg-blue-50',
  },
  {
    label: 'Negative Marks Deducted',
    value: '0',
    icon: TrendingDown,
    color: 'text-red-500 bg-red-50',
    isRed: true,
  },
  {
    label: 'Attempted',
    value: '0',
    icon: FileText,
    color: 'text-gray-600 bg-gray-50',
  },
  {
    label: 'Skipped',
    value: '37',
    icon: HelpCircle,
    color: 'text-amber-600 bg-amber-50',
  },
  {
    label: 'Correct',
    value: '0',
    icon: CheckCircle,
    color: 'text-green-600 bg-green-50',
  },
  {
    label: 'Incorrect',
    value: '0',
    icon: XCircle,
    color: 'text-red-500 bg-red-50',
    isRed: true,
  },
  {
    label: 'Full Marks',
    value: '100 marks',
    icon: BarChart3,
    color: 'text-indigo-600 bg-indigo-50',
  },
  {
    label: 'Pass Marks',
    value: '40.00 marks',
    icon: Target,
    color: 'text-green-600 bg-green-50',
    isGreen: true,
  },
  {
    label: 'Negative Marking',
    value: '20%',
    icon: TrendingDown,
    color: 'text-red-500 bg-red-50',
    isRed: true,
  },
  {
    label: 'Total Time',
    value: '1 hour',
    icon: Clock,
    color: 'text-blue-600 bg-blue-50',
  },
  {
    label: 'Number of Questions',
    value: '37 questions',
    icon: List,
    color: 'text-purple-600 bg-purple-50',
  },
]
export function DetailedResultPage() {
  const { push: navigate } = useRouter();
  const [expandedQ, setExpandedQ] = useState<number | null>(1)
  const toggleQuestion = (id: number) => {
    setExpandedQ(expandedQ === id ? null : id)
  }
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="container mx-auto px-4 max-w-7xl py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/5">
            <div className="sticky top-24">
              <PersonalDetailsSidebar />
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-4/5">
            {/* Header */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
              <div className="p-6 border-b border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold text-[#252872] mb-3">
                      Government / Inspector
                    </h1>
                    <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-200">
                      Nepal Police/Inspector
                    </span>
                  </div>
                  <span className="px-4 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-bold rounded-lg border border-indigo-200 whitespace-nowrap self-start">
                    Set 1
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Quiz Summary */}
              <div className="lg:w-2/5">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
                  <div className="p-5 border-b border-gray-100 bg-gray-50">
                    <h2 className="font-bold text-[#252872] text-lg">
                      Quiz Summary
                    </h2>
                  </div>
                  <div className="p-5 space-y-3">
                    {summaryData.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-2 border-b border-gray-50 last:border-b-0"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-7 h-7 rounded-md flex items-center justify-center ${item.color}`}
                          >
                            <item.icon className="w-3.5 h-3.5" />
                          </div>
                          <span
                            className={`text-xs font-medium ${item.isRed ? 'text-[#d91f22]' : item.isGreen ? 'text-green-600' : 'text-gray-600'}`}
                          >
                            {item.label}
                          </span>
                        </div>
                        <span
                          className={`text-xs font-bold px-2.5 py-1 rounded-md ${item.isRed ? 'bg-red-50 text-[#d91f22]' : item.isGreen ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-[#252872]'}`}
                        >
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="p-5 border-t border-gray-100">
                    <button
                      onClick={() => navigate('/loksewa/1')}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <List className="w-4 h-4" />
                      See Full List
                    </button>
                  </div>
                </div>
              </div>

              {/* Questions Review */}
              <div className="lg:w-3/5 space-y-4">
                {questions.map((q, idx) => (
                  <motion.div
                    key={q.id}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: idx * 0.05,
                    }}
                    className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
                  >
                    {/* Question Header */}
                    <button
                      onClick={() => toggleQuestion(q.id)}
                      className="w-full p-5 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <span className="text-sm font-bold text-[#d91f22] mt-0.5">
                          {q.id}.
                        </span>
                        <p className="font-bold text-[#252872] text-sm leading-relaxed">
                          {q.text}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 ml-4 flex-shrink-0">
                        {q.status === 'skipped' && (
                          <span className="px-2 py-0.5 bg-amber-50 text-amber-600 text-[10px] font-bold rounded uppercase">
                            Skipped
                          </span>
                        )}
                        {q.status === 'correct' && (
                          <span className="px-2 py-0.5 bg-green-50 text-green-600 text-[10px] font-bold rounded uppercase">
                            Correct
                          </span>
                        )}
                        {q.status === 'incorrect' && (
                          <span className="px-2 py-0.5 bg-red-50 text-red-600 text-[10px] font-bold rounded uppercase">
                            Wrong
                          </span>
                        )}
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 transition-transform ${expandedQ === q.id ? 'rotate-180' : ''}`}
                        />
                      </div>
                    </button>

                    {/* Expanded Options */}
                    <AnimatePresence>
                      {expandedQ === q.id && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: 'auto',
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 space-y-2 border-t border-gray-50 pt-4">
                            {q.options.map((opt, optIdx) => {
                              const isCorrect = optIdx === q.correctIndex
                              const isSelected = optIdx === q.selectedIndex
                              return (
                                <div
                                  key={optIdx}
                                  className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${isCorrect ? 'bg-green-50 border-green-200' : isSelected ? 'bg-red-50 border-red-200' : 'border-gray-100'}`}
                                >
                                  {isCorrect ? (
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                  ) : isSelected ? (
                                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                  ) : (
                                    <MinusCircle className="w-5 h-5 text-gray-300 flex-shrink-0" />
                                  )}
                                  <span
                                    className={`text-sm ${isCorrect ? 'text-green-700 font-medium' : isSelected ? 'text-red-700 font-medium' : 'text-gray-600'}`}
                                  >
                                    {String.fromCharCode(65 + optIdx)}.{' '}
                                    {opt.replace(/^\([A-D]\)\s*/, '')}
                                  </span>
                                </div>
                              )
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
