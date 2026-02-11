'use client'

import { motion } from 'framer-motion'
import {
  Clock,
  HelpCircle,
  Users,
  Trophy,
  PlayCircle,
  ChevronRight,
  Shield,
} from 'lucide-react'
import { PersonalDetailsSidebar } from '@/src/components/PersonalDetailsSidebar'
import { useRouter } from 'next/navigation'

export function QuestionSetInfoPage() {
  const { push: navigate } = useRouter();
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
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-bold rounded-full border border-yellow-200">
                        Premium
                      </span>
                      <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-200">
                        Nepal Police/Inspector
                      </span>
                    </div>
                  </div>
                  <span className="px-4 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-bold rounded-lg border border-indigo-200 whitespace-nowrap self-start">
                    Set 1
                  </span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-100">
                {[
                  {
                    label: 'No of Questions',
                    value: '37',
                    icon: HelpCircle,
                    color: 'text-blue-500 bg-blue-50',
                  },
                  {
                    label: 'Total Time',
                    value: '1 hour',
                    icon: Clock,
                    color: 'text-amber-500 bg-amber-50',
                  },
                  {
                    label: 'Appeared',
                    value: '0',
                    icon: Users,
                    color: 'text-green-500 bg-green-50',
                  },
                  {
                    label: 'Highest Marks',
                    value: '0',
                    icon: Trophy,
                    color: 'text-purple-500 bg-purple-50',
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-6 text-center border-r border-b border-gray-50 last:border-r-0"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mx-auto mb-3`}
                    >
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <p className="text-[10px] uppercase text-gray-400 font-bold tracking-wider mb-1">
                      {stat.label}
                    </p>
                    <p className="text-xl font-bold text-[#252872]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Details */}
              <div className="p-6 md:p-8">
                <h2 className="text-lg font-bold text-[#252872] mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#d91f22]" />
                  Details
                </h2>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 mb-8">
                  <p className="text-gray-600 leading-relaxed">
                    नेपाल प्रहरी, प्रहरी निरीक्षक (जनपद) पदको खुला
                    प्रतियोगितात्मक लिखित परीक्षा
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => navigate('/paper/symbol-number')}
                    className="flex-1 bg-[#d91f22] hover:bg-[#b91c1c] text-white py-3.5 px-8 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <PlayCircle className="w-5 h-5" />
                    Start Now
                  </button>
                  <button
                    onClick={() => navigate('/loksewa/1')}
                    className="px-6 py-3.5 border border-gray-200 text-gray-600 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                  >
                    Back to Sets
                    <ChevronRight className="w-4 h-4" />
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
