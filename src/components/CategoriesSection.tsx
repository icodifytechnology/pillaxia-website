'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  FileText,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Users,
  Trophy,
  Building2,
  Shield,
  GraduationCap,
  Briefcase,
  School,
  BookOpen
} from 'lucide-react';

const categories = [
  'Loksewa',
  'Entrance Preparation',
  'IELTS',
  'CMAT',
  'Bridge Course',
  'IT Training',
  'GRE/SAT',
  'Banking',
  'Teaching License'
];

// Organization icons mapping
const organizationIcons: { [key: string]: any } = {
  'Army': Shield,
  'Officers': Building2,
  'Police': Shield,
  'Teachers': GraduationCap,
  'Medical': BookOpen,
  'Engineering': Briefcase,
  'Management': TrendingUp,
  'IELTS Academy': School,
  'IT Institute': Trophy,
};

// Static student counts — no Math.random() to avoid SSR hydration mismatch
const generateOrganizations = (category: string) => {
  const orgsByCategory: { [key: string]: any[] } = {
    'Loksewa': [
      { name: 'Nepal Army', totalPapers: 45, completedPapers: 12, newPapers: 5, avgTime: '45 min', icon: 'Army', students: '4,200+' },
      { name: 'Shakha Adhikrit', totalPapers: 68, completedPapers: 23, newPapers: 8, avgTime: '60 min', icon: 'Officers', students: '3,800+' },
      { name: 'Nepal Police', totalPapers: 52, completedPapers: 18, newPapers: 6, avgTime: '50 min', icon: 'Police', students: '5,100+' },
      { name: 'Nayab Subba', totalPapers: 38, completedPapers: 15, newPapers: 4, avgTime: '40 min', icon: 'Teachers', students: '2,900+' },
      { name: 'Officers', totalPapers: 41, completedPapers: 10, newPapers: 7, avgTime: '55 min', icon: 'Medical', students: '1,600+' },
      { name: 'Civil Engineering', totalPapers: 35, completedPapers: 8, newPapers: 3, avgTime: '50 min', icon: 'Engineering', students: '2,300+' },
    ],
    'Entrance Preparation': [
      { name: 'Medical Entrance', totalPapers: 72, completedPapers: 28, newPapers: 10, avgTime: '90 min', icon: 'Medical', students: '8,400+' },
      { name: 'Engineering Entrance', totalPapers: 65, completedPapers: 22, newPapers: 9, avgTime: '85 min', icon: 'Engineering', students: '6,200+' },
      { name: 'Management Entrance', totalPapers: 48, completedPapers: 19, newPapers: 6, avgTime: '75 min', icon: 'Management', students: '3,500+' },
      { name: 'Law Entrance', totalPapers: 42, completedPapers: 16, newPapers: 5, avgTime: '70 min', icon: 'Officers', students: '1,800+' },
      { name: 'Nursing Entrance', totalPapers: 38, completedPapers: 14, newPapers: 4, avgTime: '60 min', icon: 'Medical', students: '2,700+' },
      { name: 'Agriculture Entrance', totalPapers: 35, completedPapers: 11, newPapers: 3, avgTime: '65 min', icon: 'Engineering', students: '1,200+' },
    ],
    'IELTS': [
      { name: 'IELTS Academic', totalPapers: 58, completedPapers: 25, newPapers: 12, avgTime: '120 min', icon: 'IELTS Academy', students: '5,900+' },
      { name: 'IELTS General', totalPapers: 45, completedPapers: 20, newPapers: 8, avgTime: '110 min', icon: 'IELTS Academy', students: '4,100+' },
      { name: 'IELTS Speaking', totalPapers: 32, completedPapers: 15, newPapers: 6, avgTime: '15 min', icon: 'IELTS Academy', students: '3,300+' },
      { name: 'IELTS Writing', totalPapers: 40, completedPapers: 18, newPapers: 7, avgTime: '60 min', icon: 'IELTS Academy', students: '2,800+' },
    ],
    'CMAT': [
      { name: 'CMAT Full Mock', totalPapers: 55, completedPapers: 21, newPapers: 9, avgTime: '180 min', icon: 'Management', students: '4,600+' },
      { name: 'Quantitative Ability', totalPapers: 42, completedPapers: 17, newPapers: 6, avgTime: '45 min', icon: 'Management', students: '3,900+' },
      { name: 'Logical Reasoning', totalPapers: 38, completedPapers: 14, newPapers: 5, avgTime: '40 min', icon: 'Management', students: '3,400+' },
      { name: 'General Awareness', totalPapers: 35, completedPapers: 12, newPapers: 4, avgTime: '35 min', icon: 'Management', students: '2,100+' },
    ],
    'Bridge Course': [
      { name: 'Bridge Course Program 1', totalPapers: 45, completedPapers: 12, newPapers: 5, avgTime: '45 min', icon: 'Officers', students: '2,500+' },
      { name: 'Bridge Course Program 2', totalPapers: 38, completedPapers: 15, newPapers: 4, avgTime: '40 min', icon: 'Teachers', students: '1,800+' },
      { name: 'Bridge Course Program 3', totalPapers: 52, completedPapers: 18, newPapers: 6, avgTime: '50 min', icon: 'Medical', students: '3,200+' },
      { name: 'Bridge Course Program 4', totalPapers: 41, completedPapers: 10, newPapers: 7, avgTime: '55 min', icon: 'Engineering', students: '1,400+' },
    ],
    'IT Training': [
      { name: 'IT Training Program 1', totalPapers: 45, completedPapers: 12, newPapers: 5, avgTime: '45 min', icon: 'IT Institute', students: '3,100+' },
      { name: 'IT Training Program 2', totalPapers: 38, completedPapers: 15, newPapers: 4, avgTime: '40 min', icon: 'IT Institute', students: '2,600+' },
      { name: 'IT Training Program 3', totalPapers: 52, completedPapers: 18, newPapers: 6, avgTime: '50 min', icon: 'IT Institute', students: '1,900+' },
      { name: 'IT Training Program 4', totalPapers: 41, completedPapers: 10, newPapers: 7, avgTime: '55 min', icon: 'IT Institute', students: '1,400+' },
    ],
    'GRE/SAT': [
      { name: 'GRE/SAT Program 1', totalPapers: 45, completedPapers: 12, newPapers: 5, avgTime: '45 min', icon: 'IELTS Academy', students: '2,200+' },
      { name: 'GRE/SAT Program 2', totalPapers: 38, completedPapers: 15, newPapers: 4, avgTime: '40 min', icon: 'IELTS Academy', students: '1,700+' },
      { name: 'GRE/SAT Program 3', totalPapers: 52, completedPapers: 18, newPapers: 6, avgTime: '50 min', icon: 'IELTS Academy', students: '2,900+' },
      { name: 'GRE/SAT Program 4', totalPapers: 41, completedPapers: 10, newPapers: 7, avgTime: '55 min', icon: 'IELTS Academy', students: '1,300+' },
    ],
    'Banking': [
      { name: 'Banking Program 1', totalPapers: 45, completedPapers: 12, newPapers: 5, avgTime: '45 min', icon: 'Management', students: '3,600+' },
      { name: 'Banking Program 2', totalPapers: 38, completedPapers: 15, newPapers: 4, avgTime: '40 min', icon: 'Management', students: '2,400+' },
      { name: 'Banking Program 3', totalPapers: 52, completedPapers: 18, newPapers: 6, avgTime: '50 min', icon: 'Management', students: '1,900+' },
      { name: 'Banking Program 4', totalPapers: 41, completedPapers: 10, newPapers: 7, avgTime: '55 min', icon: 'Management', students: '1,500+' },
    ],
    'Teaching License': [
      { name: 'Teaching License Program 1', totalPapers: 45, completedPapers: 12, newPapers: 5, avgTime: '45 min', icon: 'Teachers', students: '4,800+' },
      { name: 'Teaching License Program 2', totalPapers: 38, completedPapers: 15, newPapers: 4, avgTime: '40 min', icon: 'Teachers', students: '3,200+' },
      { name: 'Teaching License Program 3', totalPapers: 52, completedPapers: 18, newPapers: 6, avgTime: '50 min', icon: 'Teachers', students: '2,700+' },
      { name: 'Teaching License Program 4', totalPapers: 41, completedPapers: 10, newPapers: 7, avgTime: '55 min', icon: 'Teachers', students: '1,600+' },
    ],
  };

  return orgsByCategory[category] ?? [];
};

export function CategoriesSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const organizations = generateOrganizations(activeCategory);

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 bg-[#d91f22]/5 rounded-full px-4 py-1.5 mb-4">
              <Sparkles className="w-4 h-4 text-[#252872]" />
              <span className="text-sm font-semibold text-[#d91f22]">
                Comprehensive Study Materials
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#d91f22] mb-3">
              Browse Organizations
            </h2>
            <p className="text-gray-600 max-w-xl">
              Select a category to explore available organizations and their practice papers
            </p>
          </div>
          <button className="hidden md:flex items-center text-[#252872] font-semibold hover:text-[#d91f22] transition-colors mt-4 md:mt-0 group">
            View All Categories
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#d91f22] text-white shadow-lg shadow-[#d91f22]/20'
                  : 'bg-white border border-gray-200 text-gray-700 hover:border-[#d91f22] hover:text-[#d91f22]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Organization Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {organizations.map((org, index) => {
              const IconComponent = organizationIcons[org.icon] || Building2;
              const completionRate = Math.round((org.completedPapers / org.totalPapers) * 100);

              return (
                <motion.div
                  key={org.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white rounded-2xl border border-gray-200 hover:border-[#d91f22]/30 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#d91f22]/5 relative overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#d91f22]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Header */}
                  <div className="flex items-start justify-between mb-5 relative">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-br from-[#252872]/10 to-[#252872]/5 p-3 rounded-xl group-hover:from-[#d91f22] group-hover:to-[#d91f22]/80 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-[#252872] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#252872] group-hover:text-[#d91f22] transition-colors">
                          {org.name}
                        </h3>
                      </div>
                    </div>

                    {/* New Badge */}
                    {org.newPapers > 0 && (
                      <div className="flex items-center space-x-1 bg-[#252872]/10 px-2.5 py-1 rounded-full">
                        <Sparkles className="w-3 h-3 text-[#252872]" />
                        <span className="text-xs font-semibold text-[#252872]">
                          {org.newPapers} New
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                      <div className="flex items-center space-x-2 mb-1">
                        <FileText className="w-4 h-4 text-gray-400" />
                        <span className="text-xs font-medium text-gray-500">Total Papers</span>
                      </div>
                      <p className="text-2xl font-bold text-[#d91f22]">{org.totalPapers}</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                      <div className="flex items-center space-x-2 mb-1">
                        <CheckCircle2 className="w-4 h-4 text-gray-400" />
                        <span className="text-xs font-medium text-gray-500">New</span>
                      </div>
                      <p className="text-2xl font-bold text-[#d91f22]">{org.newPapers}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-gray-500">Progress</span>
                      <span className="text-xs font-bold text-[#d91f22]">{completionRate}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${completionRate}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-[#d91f22] to-[#252872] rounded-full"
                      />
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="flex items-center justify-between mb-5 pb-5 border-b border-gray-100">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{org.students} Students</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Trophy className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Avg {org.avgTime}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-white border border-[#d91f22] text-[#d91f22] hover:bg-[#d91f22] hover:text-white py-2.5 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group/btn">
                    Explore Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#d91f22] to-[#252872] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* View All Button - Mobile */}
        <div className="flex md:hidden justify-center mt-8">
          <button className="flex items-center text-[#252872] font-semibold hover:text-[#d91f22] transition-colors group">
            View All Categories
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}