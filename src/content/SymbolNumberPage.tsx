'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Hash, ArrowRight, RotateCcw } from 'lucide-react'
import { PersonalDetailsSidebar } from '@/src/components/PersonalDetailsSidebar'
import { useRouter } from 'next/navigation'

const NUM_COLUMNS = 7
export function SymbolNumberPage() {
const { push: navigate } = useRouter();
const DEFAULT_SYMBOL = [1, 2, 3, 4, 5, 6, 7]

const [selected, setSelected] = useState<(number | null)[]>(
  DEFAULT_SYMBOL,
)
  const handleSelect = (col: number, digit: number) => {
    const next = [...selected]
    next[col] = digit
    setSelected(next)
  }
  const symbolNumber = selected.map((d) => (d !== null ? d : '_')).join('')
  const isComplete = selected.every((d) => d !== null)
  const handleReset = () => setSelected(Array(NUM_COLUMNS).fill(null))
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="container mx-auto px-4 max-w-7xl py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="sticky top-24">
              <PersonalDetailsSidebar />
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#252872] mb-3">
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

              {/* Symbol Number Grid */}
              <div className="p-6 md:p-8">
                <div className="bg-[#252872] text-white text-center py-3 rounded-t-xl font-bold text-lg flex items-center justify-center gap-2">
                  <Hash className="w-5 h-5" />
                  Symbol No.
                </div>

                <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden">
                  {/* Selected digits header */}
                  <div
                    className="grid bg-pink-50 border-b border-gray-200"
                    style={{
                      gridTemplateColumns: `repeat(${NUM_COLUMNS}, 1fr)`,
                    }}
                  >
                    {selected.map((digit, col) => (
                      <div
                        key={col}
                        className="py-3 text-center font-bold text-[#252872] text-lg border-r border-gray-200 last:border-r-0"
                      >
                        {digit !== null ? digit : '-'}
                      </div>
                    ))}
                  </div>

                  {/* Digit selection grid */}
                  {Array.from(
                    {
                      length: 10,
                    },
                    (_, digit) => (
                      <div
                        key={digit}
                        className="grid border-b border-gray-100 last:border-b-0"
                        style={{
                          gridTemplateColumns: `repeat(${NUM_COLUMNS}, 1fr)`,
                        }}
                      >
                        {Array.from(
                          {
                            length: NUM_COLUMNS,
                          },
                          (_, col) => {
                            const isSelected = selected[col] === digit
                            return (
                              <button
                                key={col}
                                onClick={() => handleSelect(col, digit)}
                                className={`py-2.5 text-center text-sm font-medium border-r border-gray-100 last:border-r-0 transition-all ${isSelected ? 'bg-[#d91f22] text-white font-bold shadow-inner' : 'text-gray-600 hover:bg-indigo-50 hover:text-[#252872]'}`}
                              >
                                {digit}
                              </button>
                            )
                          },
                        )}
                      </div>
                    ),
                  )}
                </div>

                {/* Symbol Number Display */}
                <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="text-lg text-[#252872]">
                    Your symbol number is{' '}
                    <span className="font-bold text-[#d91f22] text-xl tracking-wider">
                      {symbolNumber}
                    </span>
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <button
                    onClick={() => navigate('/paper/exam')}
                    disabled={!isComplete}
                    className={`flex-1 py-3.5 px-8 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${isComplete ? 'bg-[#d91f22] hover:bg-[#b91c1c] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                  >
                    Next
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3.5 border border-gray-200 text-gray-600 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
