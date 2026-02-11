'use client'

import { motion } from 'framer-motion'
import { Play, Star, Clock } from 'lucide-react'
const quizzes = [
  {
    id: 1,
    title: 'General Knowledge 2024',
    category: 'Loksewa',
    color: 'bg-blue-100 text-blue-700',
    questions: 20,
  },
  {
    id: 2,
    title: 'English Grammar Basics',
    category: 'Entrance',
    color: 'bg-green-100 text-green-700',
    questions: 15,
  },
  {
    id: 3,
    title: 'Science & Technology',
    category: 'Bridge Course',
    color: 'bg-purple-100 text-purple-700',
    questions: 25,
  },
  {
    id: 4,
    title: 'IQ & Logic Test',
    category: 'CMAT',
    color: 'bg-orange-100 text-orange-700',
    questions: 30,
  },
  {
    id: 5,
    title: 'Computer Fundamentals',
    category: 'IT Training',
    color: 'bg-red-100 text-red-700',
    questions: 20,
  },
  {
    id: 6,
    title: 'Current Affairs Nepal',
    category: 'General',
    color: 'bg-teal-100 text-teal-700',
    questions: 10,
  },
]
export function QuizzesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-2">
              Popular Quizzes
            </h2>
            <p className="text-gray-600">
              Test your knowledge with our trending quizzes
            </p>
          </div>
          <a
            href="#"
            className="hidden md:block text-brand-red font-bold hover:underline"
          >
            View All Quizzes
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quizzes.map((quiz, index) => (
            <motion.div
              key={quiz.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              className="bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${quiz.color}`}
                  >
                    {quiz.category}
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-bold text-gray-700">
                      4.8
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {quiz.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Challenge yourself with {quiz.questions} questions selected by
                  experts to boost your preparation.
                </p>

                <div className="flex items-center text-gray-400 text-sm mb-6">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>15 Mins</span>
                  <span className="mx-3">•</span>
                  <span>{quiz.questions} Questions</span>
                </div>
              </div>

              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <button className="w-full bg-[#d91f22] border border-[#d91f22] text-white hover:bg-white hover:text-[#d91f22] py-2.5 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group/btn">
                  Start Quiz
                  <Play className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a href="#" className="text-brand-red font-bold hover:underline">
            View All Quizzes
          </a>
        </div>
      </div>
    </section>
  )
}
