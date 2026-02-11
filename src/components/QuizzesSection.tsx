'use client'

import { motion } from 'framer-motion';
import { Clock, HelpCircle, Trophy, ArrowRight } from 'lucide-react';
const quizzes = [
{
  title: 'General Knowledge',
  questions: 20,
  time: '15 min',
  color: 'bg-blue-500'
},
{
  title: 'Science Challenge',
  questions: 15,
  time: '10 min',
  color: 'bg-green-500'
},
{
  title: 'Math Speed Test',
  questions: 10,
  time: '5 min',
  color: 'bg-red-500'
},
{
  title: 'English Grammar',
  questions: 25,
  time: '20 min',
  color: 'bg-purple-500'
},
{
  title: 'Nepali History',
  questions: 20,
  time: '15 min',
  color: 'bg-orange-500'
}];

export function QuizzesSection() {
  return (
    <section id="quizzes" className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#252872]">
            Test Your Knowledge
          </h2>
          <a
            href="#"
            className="text-[#d91f22] font-semibold flex items-center hover:underline">

            View All Quizzes <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x">
          {quizzes.map((quiz, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1
            }}
            className="min-w-[260px] bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 snap-start border border-gray-100 flex flex-col">

              <div
              className={`w-12 h-12 ${quiz.color} rounded-xl flex items-center justify-center text-white mb-6 shadow-md`}>

                <HelpCircle className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-[#252872] mb-4">
                {quiz.title}
              </h3>

              <div className="space-y-3 mb-6 flex-1">
                <div className="flex items-center text-gray-500 text-sm">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  {quiz.questions} Questions
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  {quiz.time} Duration
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Trophy className="w-4 h-4 mr-2" />
                  Win Badges
                </div>
              </div>

              <button className="w-full border border-[#d91f22] text-[#d91f22] hover:bg-[#d91f22] hover:text-white py-2.5 rounded-lg font-semibold transition-all duration-300">
                Start Quiz
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}