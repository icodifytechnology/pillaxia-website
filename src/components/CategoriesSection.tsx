'use client'

import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Clock,
  HelpCircle,
  Calendar,
  ArrowRight,
  FileText,
  BarChart } from
'lucide-react';
const categories = [
'Loksewa',
'Entrance Preparation',
'IELTS',
'CMAT',
'Bridge Course',
'IT Training',
'GRE/SAT',
'Banking',
'Teaching License'];

// Mock data generator for papers
const generatePapers = (category: string) => {
  return Array(9).
  fill(null).
  map((_, i) => ({
    id: i,
    title: `${category} Model Set - ${i + 1}`,
    subject: [
    'General Knowledge',
    'IQ Test',
    'English',
    'Mathematics',
    'Science'][
    i % 5],
    questions: [50, 60, 100, 40, 25][i % 5],
    duration: ['45 min', '60 min', '90 min', '30 min', '20 min'][i % 5],
    difficulty: ['Easy', 'Medium', 'Hard'][i % 3],
    year: '2024',
  }));
};
export function CategoriesSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const papers = generatePapers(activeCategory);
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#252872] mb-4">
              Browse Categories
            </h2>
            <p className="text-gray-600 max-w-xl">
              Select a category to view available practice papers, model sets,
              and exam materials.
            </p>
          </div>
          <button className="hidden md:flex items-center text-[#d91f22] font-semibold hover:text-[#b91c1c] transition-colors mt-4 md:mt-0">
            View All Categories <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) =>
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category ? 'bg-[#d91f22] text-white shadow-md transform scale-105' : 'bg-white border border-gray-200 text-[#252872] hover:border-[#d91f22] hover:text-[#d91f22]'}`}>

              {category}
            </button>
          )}
        </div>

        {/* Paper Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -20
            }}
            transition={{
              duration: 0.3
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {papers.map((paper, index) =>
            <motion.div
              key={paper.id}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: index * 0.05
              }}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-100 p-6 transition-all duration-300 group relative overflow-hidden">

                <div className="flex items-start justify-between mb-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <FileText className="w-6 h-6 text-[#252872]" />
                  </div>
                  <span
                  className={`text-xs font-semibold px-2 py-1 rounded ${paper.difficulty === 'Easy' ? 'bg-green-100 text-green-700' : paper.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>

                    {paper.difficulty}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#252872] mb-1 group-hover:text-[#d91f22] transition-colors">
                  {paper.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{paper.subject}</p>

                <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center">
                    <HelpCircle className="w-4 h-4 mr-2 text-gray-400" />
                    {paper.questions} Qns
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-gray-400" />
                    {paper.duration}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                    {paper.year}
                  </div>
                  <div className="flex items-center">
                    <BarChart className="w-4 h-4 mr-2 text-gray-400" />
                    Model Set
                  </div>
                </div>

                <button className="w-full bg-white border border-[#d91f22] text-[#d91f22] hover:bg-[#d91f22] hover:text-white py-2.5 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group/btn">
                  Start Paper
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>);

}