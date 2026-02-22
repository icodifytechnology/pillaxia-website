'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart3, TrendingUp, X } from 'lucide-react'

// ─── Types ─────────────────────────────────────────────────────────────────────

interface ResultRow {
  program: string
  year: string
  pass: string
  distinction: string
  first: string
}

interface ProgramHistory {
  pass: number[]
  distinction: number[]
  first: number[]
}

type MetricKey = 'pass' | 'distinction' | 'first'

// ─── Data ──────────────────────────────────────────────────────────────────────

const currentData: ResultRow[] = [
  { program: 'BBA',         year: '2025', pass: '96%', distinction: '12%', first: '45%' },
  { program: 'BCA',         year: '2025', pass: '94%', distinction: '15%', first: '42%' },
  { program: 'BBS',         year: '2025', pass: '91%', distinction: '8%',  first: '38%' },
  { program: 'MBA',         year: '2025', pass: '98%', distinction: '20%', first: '55%' },
  { program: 'B.Sc. CSIT', year: '2025', pass: '93%', distinction: '18%', first: '40%' },
]

const historicalData: Record<string, ProgramHistory> = {
  BBA:           { pass: [88, 90, 92, 94, 96], distinction: [7, 8, 10, 11, 12],   first: [36, 38, 40, 43, 45] },
  BCA:           { pass: [85, 87, 90, 92, 94], distinction: [9, 10, 12, 13, 15],  first: [33, 35, 37, 39, 42] },
  BBS:           { pass: [83, 85, 87, 89, 91], distinction: [4, 5, 6, 7, 8],      first: [30, 32, 33, 35, 38] },
  MBA:           { pass: [92, 94, 95, 97, 98], distinction: [14, 15, 17, 18, 20], first: [46, 48, 50, 52, 55] },
  'B.Sc. CSIT': { pass: [84, 86, 88, 91, 93], distinction: [10, 12, 14, 16, 18], first: [32, 34, 36, 38, 40] },
}

const years = [2021, 2022, 2023, 2024, 2025]

const METRICS: {
  key: MetricKey
  label: string
  color: string
  lightBg: string
  border: string
}[] = [
  { key: 'pass',        label: 'Pass Rate',      color: '#252872', lightBg: '#eef0fb', border: '#c7cbef' },
  { key: 'distinction', label: 'Distinction',    color: '#d91f22', lightBg: '#fef2f2', border: '#fecaca' },
  { key: 'first',       label: 'First Division', color: '#b45309', lightBg: '#fffbeb', border: '#fde68a' },
]

// ─── Mini Bar Chart ────────────────────────────────────────────────────────────

function MiniBarChart({ values, color }: { values: number[]; color: string }) {
  return (
    <div className="flex items-end gap-0.5 h-12">
      {values.map((v, i) => (
        <div key={i} className="flex flex-col items-center flex-1">
          <span className="text-[7px] text-slate-400 mb-0.5">{v}%</span>
          <div
            className="w-full rounded-t-sm"
            style={{
              height: `${(v / 100) * 32}px`,
              background: color,
              opacity: 0.25 + (i / values.length) * 0.75,
            }}
          />
          <span className="text-[7px] text-slate-400 mt-0.5">'{years[i].toString().slice(2)}</span>
        </div>
      ))}
    </div>
  )
}

// ─── SVG Trend Line ────────────────────────────────────────────────────────────

function TrendLine({ values, color }: { values: number[]; color: string }) {
  const min   = Math.min(...values)
  const max   = Math.max(...values)
  const range = max - min || 1
  const w = 176, h = 48, pad = 6

  const pts: [number, number][] = values.map((v, i) => [
    pad + (i / (values.length - 1)) * (w - pad * 2),
    h - pad - ((v - min) / range) * (h - pad * 2),
  ])

  const d    = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x},${y}`).join(' ')
  const area = `${d} L${pts[pts.length - 1][0]},${h} L${pts[0][0]},${h} Z`
  const gId  = `lg-${color.replace('#', '')}`

  return (
    <svg width={w} height={h} style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id={gId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={color} stopOpacity="0.2"  />
          <stop offset="100%" stopColor={color} stopOpacity="0.01" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${gId})`} />
      <path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill={color} stroke="white" strokeWidth="1.5" />
      ))}
    </svg>
  )
}

// ─── Infographic Modal ─────────────────────────────────────────────────────────

function InfographicModal({ onClose }: { onClose: () => void }) {
  const [activeProgram, setActiveProgram] = useState('BBA')
  const data = historicalData[activeProgram]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        {/* ── Modal header — site navy ── */}
        <div className="relative bg-gradient-to-br from-[#252872] via-[#1a1d5a] to-[#252872] px-8 py-6 rounded-t-3xl">
          <div className="flex items-start justify-between mb-5">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <BarChart3 className="w-5 h-5 text-blue-300" />
                <h2 className="text-xl font-bold text-white">5-Year Academic Performance</h2>
              </div>
              <p className="text-blue-300 text-sm ml-8">2021 – 2025 • All Programs</p>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors group"
            >
              <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
            </button>
          </div>

          {/* Program selector pills */}
          <div className="flex flex-wrap gap-2">
            {Object.keys(historicalData).map((prog) => (
              <button
                key={prog}
                onClick={() => setActiveProgram(prog)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-150 ${
                  activeProgram === prog
                    ? 'bg-[#d91f22] text-white shadow-lg shadow-red-900/30'
                    : 'bg-white/10 text-blue-200 hover:bg-white/20'
                }`}
              >
                {prog}
              </button>
            ))}
          </div>
        </div>

        <div className="p-8">
          {/* ── Metric cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {METRICS.map(({ key, label, color, lightBg, border }, idx) => {
              const vals  = data[key]
              const trend = vals[4] - vals[0]
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.07 }}
                  className="rounded-2xl p-5 border"
                  style={{ background: lightBg, borderColor: border }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {label}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        trend >= 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-600'
                      }`}
                    >
                      {trend >= 0 ? '▲' : '▼'} {Math.abs(trend)}%
                    </span>
                  </div>

                  <div className="text-3xl font-extrabold mb-3" style={{ color }}>
                    {vals[4]}%
                  </div>

                  <TrendLine values={vals} color={color} />

                  <div className="mt-3">
                    <MiniBarChart values={vals} color={color} />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* ── Year-by-year breakdown ── */}
          <div className="rounded-2xl border border-gray-100 overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 bg-gray-50 border-b border-gray-100">
              <div className="w-1 h-4 bg-[#d91f22] rounded-full" />
              <span className="text-sm font-bold text-[#252872]">
                Year-by-Year Breakdown — {activeProgram}
              </span>
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  {['Year', 'Pass Rate', 'Distinction', 'First Division'].map((h) => (
                    <th
                      key={h}
                      className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {years.map((yr, i) => (
                  <tr
                    key={yr}
                    className={`border-t border-gray-50 transition-colors ${
                      i === 4 ? 'bg-[#252872]/[0.04]' : 'hover:bg-gray-50'
                    }`}
                  >
                    <td className="px-5 py-3 text-sm">
                      <span className={`flex items-center gap-2 ${i === 4 ? 'font-bold text-[#252872]' : 'text-slate-600'}`}>
                        {yr}
                        {i === 4 && (
                          <span className="text-[9px] font-bold bg-[#252872] text-white px-2 py-0.5 rounded-full">
                            LATEST
                          </span>
                        )}
                      </span>
                    </td>
                    {METRICS.map(({ key, color }, ki) => (
                      <td key={ki} className="px-5 py-3">
                        <div className="flex items-center gap-2">
                          <div
                            className="h-1.5 rounded-full flex-shrink-0"
                            style={{
                              width: `${Math.round((data[key][i] / 100) * 60)}px`,
                              background: color,
                              opacity: 0.35 + (i / years.length) * 0.65,
                            }}
                          />
                          <span className="text-sm font-semibold text-slate-700">
                            {data[key][i]}%
                          </span>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-slate-300">
            Data sourced from official examination records • Click outside to close
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function AcademicResults() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#252872] mb-6">Academic Results</h2>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b-2 border-gray-100">
              {['Program', 'Year', 'Pass Rate', 'Distinction', 'First Division'].map((h) => (
                <th
                  key={h}
                  className="px-5 py-4 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-gray-50 hover:bg-gray-50/60 transition-colors"
              >
                <td className="px-5 py-4 text-sm font-bold text-[#252872]">{row.program}</td>
                <td className="px-5 py-4 text-sm text-slate-400">{row.year}</td>
                <td className="px-5 py-4">
                  <span className="text-sm font-bold text-[#252872]">{row.pass}</span>
                </td>
                <td className="px-5 py-4">
                  <span className="text-sm font-bold text-[#d91f22]">{row.distinction}</span>
                </td>
                <td className="px-5 py-4">
                  <span className="text-sm font-bold text-amber-600">{row.first}</span>
                </td>
              </motion.tr>
            ))}

            {/* ── View Past 5 Years Row ── */}
            <tr className="border-t-2 border-dashed border-[#252872]/20 bg-gradient-to-r from-[#252872]/[0.03] to-transparent">
              <td colSpan={5} className="px-5 py-4">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-sm text-[#252872] font-medium">
                    <TrendingUp className="w-4 h-4" />
                    Track performance trends across all programs over 5 years
                  </div>
                  <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2 bg-[#252872] hover:bg-[#1a1d54] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-px group"
                  >
                    <BarChart3 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    View Past 5 Years Results
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <AnimatePresence>
        {showModal && <InfographicModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </div>
  )
}