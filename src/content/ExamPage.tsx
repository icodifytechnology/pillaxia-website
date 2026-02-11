'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Clock,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Send,
  BookOpen,
} from 'lucide-react'
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
  },
  {
    id: 4,
    text: 'पशुपतिनाथमा कहिले बुद्ध मुकुट पहिर्याइन्छ ?',
    options: [
      '(A) कार्तिक शुक्ल नवमी',
      '(B) कार्तिक शुक्ल चतुर्दशी',
      '(C) कार्तिक शुक्ल अष्टमी',
      '(D) कार्तिक शुक्ल एकादशी',
    ],
  },
  {
    id: 5,
    text: 'INTERPOL को स्थापना कहिले भएको हो ?',
    options: [
      '(A) १९२३ सेप्टेम्बर ७',
      '(B) १९२३ सेप्टेम्बर',
      '(C) १९२३ अक्टोबर ७',
      '(D) १९२३ अक्टोबर ८',
    ],
  },
  {
    id: 6,
    text: 'उराउ भाषा कुन भाषा परिवार अन्तर्गत पर्दछ ?',
    options: ['(A) भारोपेली', '(B) आग्नेय', '(C) द्रविड', '(D) भोटबर्मेली'],
  },
  {
    id: 7,
    text: 'जनसङ्ख्या वृद्धिदर कम रहेको जिल्ला कुन हो ?',
    options: ['(A) रामेछाप', '(B) मनाङ', '(C) तेह्रथुम', '(D) भोजपुर'],
  },
]
export function ExamPage() {
  const { push: navigate } = useRouter();
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [timeLeft, setTimeLeft] = useState(3600) // 1 hour in seconds
  const [currentPage, setCurrentPage] = useState(0)
  const questionsPerPage = 5
  const totalPages = Math.ceil(questions.length / questionsPerPage)
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }
  const handleSelect = (questionId: number, optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }))
  }
  const startIdx = currentPage * questionsPerPage
  const pageQuestions = questions.slice(startIdx, startIdx + questionsPerPage)
  const answeredCount = Object.keys(answers).length
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Sticky Exam Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Exam Info Bar */}
          <div className="py-3 border-b border-gray-100">
            <div className="text-center">
              <p className="text-sm font-bold text-[#252872]">लोक सेवा आयोग</p>
              <p className="text-xs text-gray-500">
                नेपाल प्रहरी, प्रहरी निरीक्षक (जनपद) पदको खुला प्रतियोगितात्मक
                लिखित परीक्षा
              </p>
              <p className="text-xs text-gray-400 mt-1">2082/10/28</p>
            </div>
          </div>

          {/* Timer & Stats Bar */}
          <div className="py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <BookOpen className="w-4 h-4 text-gray-400" />
                <span className="text-gray-500">KEY[A]</span>
              </div>
              <div className="text-xs text-gray-400">
                विषय: सामान्य ज्ञान र बौद्धिक परीक्षण
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div
                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg font-mono text-lg font-bold ${timeLeft < 300 ? 'bg-red-50 text-[#d91f22] animate-pulse' : 'bg-indigo-50 text-[#252872]'}`}
              >
                <Clock className="w-4 h-4" />
                {formatTime(timeLeft)}
              </div>
              <span className="text-xs text-gray-400">पूर्णाङ्क: 100.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="container mx-auto px-4 max-w-5xl py-4">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-700 leading-relaxed">
            उत्तरपुस्तिकामा प्रश्नपत्रको अनिवार्य रूपले उल्लेख गर्नुपर्छ छ।
            उल्लेख नगरेमा उत्तरपुस्तिका रद्द हुनेछ। परीक्षामा प्रयोग गर्न पाइने
            छैन। प्रत्येक खण्डको उत्तर छुट्टाछुट्टै उत्तरपुस्तिकामा
            लेख्नुपर्नेछ। अन्यथा उत्तरपुस्तिका रद्द हुनेछ।
          </p>
        </div>
      </div>

      {/* Section Header */}
      <div className="container mx-auto px-4 max-w-5xl mb-2">
        <div className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <div>
            <p className="text-sm font-bold text-[#252872]">
              खण्ड 'क' : वस्तुगत
            </p>
            <p className="text-xs text-gray-400">बहुउत्तर</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-[#252872]">37 x 1 = 37 अंक</p>
            <p className="text-xs text-gray-400">
              {answeredCount}/{questions.length} answered
            </p>
          </div>
        </div>
      </div>

      {/* Questions */}
      <div className="container mx-auto px-4 max-w-5xl space-y-4 pb-8">
        {pageQuestions.map((q, idx) => (
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
            <div className="p-5 border-b border-gray-50 bg-gray-50/50">
              <p className="font-bold text-[#252872]">
                <span className="text-[#d91f22] mr-2">
                  {startIdx + idx + 1}.
                </span>
                {q.text}
              </p>
            </div>
            <div className="p-5 space-y-2">
              {q.options.map((opt, optIdx) => {
                const isSelected = answers[q.id] === optIdx
                return (
                  <label
                    key={optIdx}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all border ${isSelected ? 'bg-indigo-50 border-indigo-200 shadow-sm' : 'border-transparent hover:bg-gray-50'}`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${isSelected ? 'border-[#252872]' : 'border-gray-300'}`}
                    >
                      {isSelected && (
                        <div className="w-2.5 h-2.5 bg-[#252872] rounded-full" />
                      )}
                    </div>
                    <input
                      type="radio"
                      name={`q-${q.id}`}
                      className="hidden"
                      checked={isSelected}
                      onChange={() => handleSelect(q.id, optIdx)}
                    />
                    <span
                      className={`text-sm ${isSelected ? 'text-[#252872] font-medium' : 'text-gray-600'}`}
                    >
                      {opt}
                    </span>
                  </label>
                )
              })}
            </div>
          </motion.div>
        ))}

        {/* Pagination & Submit */}
        <div className="flex items-center justify-between pt-6">
          <button
            onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
            disabled={currentPage === 0}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-colors ${currentPage === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-[#252872] bg-white border border-gray-200 hover:bg-gray-50'}`}
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>

          <div className="flex items-center gap-2">
            {Array.from(
              {
                length: totalPages,
              },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${currentPage === i ? 'bg-[#252872] text-white' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50'}`}
                >
                  {i + 1}
                </button>
              ),
            )}
          </div>

          {currentPage < totalPages - 1 ? (
            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(totalPages - 1, p + 1))
              }
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-[#252872] bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => navigate('/paper/result')}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm bg-[#d91f22] hover:bg-[#b91c1c] text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" /> Submit
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
