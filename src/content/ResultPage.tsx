'use client'

import { motion } from 'framer-motion'
import {
    XCircle,
    MessageSquare,
    FileText,
    List,
    Award,
    Clock,
    HelpCircle,
    Target,
    TrendingDown,
    CheckCircle,
    X as XIcon,
    BarChart3,
} from 'lucide-react'
import { PersonalDetailsSidebar } from '@/src/components/PersonalDetailsSidebar'
import { useRouter } from 'next/navigation'

export function ResultPage() {
      const { push: navigate } = useRouter();
    const resultData = {
        passed: false,
        rank: '1 out of 1',
        totalMarks: 0,
        negativeMarks: 0,
        attempted: 0,
        skipped: 37,
        correct: 0,
        incorrect: 0,
        fullMarks: 100,
        passMarks: 40,
        negativeMarking: '20%',
        totalTime: '1 hour',
        totalQuestions: 37,
    }
    const stats = [
        {
            label: 'Your Rank',
            value: resultData.rank,
            icon: Award,
            color: 'text-indigo-600 bg-indigo-50',
        },
        {
            label: 'Total Marks Obtained',
            value: resultData.totalMarks,
            icon: Target,
            color: 'text-blue-600 bg-blue-50',
        },
        {
            label: 'Negative Marks Deducted',
            value: resultData.negativeMarks,
            icon: TrendingDown,
            color: 'text-red-500 bg-red-50',
            isRed: true,
        },
        {
            label: 'Attempted',
            value: resultData.attempted,
            icon: FileText,
            color: 'text-gray-600 bg-gray-50',
        },
        {
            label: 'Skipped',
            value: resultData.skipped,
            icon: HelpCircle,
            color: 'text-amber-600 bg-amber-50',
        },
        {
            label: 'Correct',
            value: resultData.correct,
            icon: CheckCircle,
            color: 'text-green-600 bg-green-50',
        },
        {
            label: 'Incorrect',
            value: resultData.incorrect,
            icon: XCircle,
            color: 'text-red-500 bg-red-50',
            isRed: true,
        },
        {
            label: 'Full Marks',
            value: `${resultData.fullMarks} marks`,
            icon: BarChart3,
            color: 'text-indigo-600 bg-indigo-50',
        },
        {
            label: 'Pass Marks',
            value: `${resultData.passMarks} marks`,
            icon: Target,
            color: 'text-green-600 bg-green-50',
            isGreen: true,
        },
        {
            label: 'Negative Marking',
            value: resultData.negativeMarking,
            icon: TrendingDown,
            color: 'text-red-500 bg-red-50',
            isRed: true,
        },
        {
            label: 'Total Time',
            value: resultData.totalTime,
            icon: Clock,
            color: 'text-blue-600 bg-blue-50',
        },
        {
            label: 'Number of Questions',
            value: `${resultData.totalQuestions} questions`,
            icon: List,
            color: 'text-purple-600 bg-purple-50',
        },
    ]
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
                    <div className="lg:w-3/4 space-y-6">
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

                            {/* Result Banner */}
                            <div className="mx-6 md:mx-8 mt-6 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl p-6 text-center">
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <XCircle className="w-8 h-8 text-[#d91f22]" />
                                </div>
                                <h2 className="text-xl font-bold text-[#252872] mb-2">
                                    You didn't pass this time, but every challenge is a step
                                    toward success.
                                </h2>
                                <p className="text-sm text-gray-500">
                                    Review your performance, keep improving, and try again —
                                    you've got this! 🚀
                                </p>
                            </div>

                            {/* Feedback */}
                            <div className="mx-6 md:mx-8 mt-6 bg-gray-50 border border-gray-100 rounded-xl p-5 text-center">
                                <p className="text-sm text-gray-600 mb-3">
                                    Help us improve. Share your feedback!
                                </p>
                                <button className="px-6 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-[#252872] hover:bg-gray-50 transition-colors flex items-center gap-2 mx-auto">
                                    <MessageSquare className="w-4 h-4" />
                                    Give Feedback
                                </button>
                            </div>

                            {/* Stats Grid */}
                            <div className="p-6 md:p-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {stats.map((stat, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{
                                                opacity: 0,
                                                y: 10,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            transition={{
                                                delay: i * 0.03,
                                            }}
                                            className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${stat.color}`}
                                                >
                                                    <stat.icon className="w-4 h-4" />
                                                </div>
                                                <span
                                                    className={`text-sm font-medium ${stat.isRed ? 'text-[#d91f22]' : stat.isGreen ? 'text-green-600' : 'text-gray-700'}`}
                                                >
                                                    {stat.label}
                                                </span>
                                            </div>
                                            <span
                                                className={`text-sm font-bold px-3 py-1 rounded-lg ${stat.isRed ? 'bg-red-50 text-[#d91f22]' : stat.isGreen ? 'bg-green-50 text-green-700' : 'bg-white text-[#252872] border border-gray-200'}`}
                                            >
                                                {stat.value}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                    <button
                                        onClick={() => navigate('paper/result')}
                                        className="flex-1 bg-[#d91f22] hover:bg-[#b91c1c] text-white py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                    >
                                        <FileText className="w-4 h-4" />
                                        See Detailed Result
                                    </button>
                                    <button
                                        onClick={() => navigate('/loksewa/1')}
                                        className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                    >
                                        <List className="w-4 h-4" />
                                        See Full List
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
