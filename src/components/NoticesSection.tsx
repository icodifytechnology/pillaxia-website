'use client'

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
const notices = [
{
  date: '25',
  month: 'FEB',
  title: 'Scholarship Applications Open for 2024',
  category: 'Admission'
},
{
  date: '02',
  month: 'MAR',
  title: 'Inter-College Science Exhibition',
  category: 'Events'
},
{
  date: '15',
  month: 'MAR',
  title: 'Final Examination Schedule Published',
  category: 'Exam'
},
{
  date: '20',
  month: 'MAR',
  title: 'Guest Lecture: AI in Education',
  category: 'Workshop'
}];

export function NoticesSection() {
  return (
    <section id="notices" className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left: Heading & Info */}
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-[#252872] mb-6">
              Important Notices & Announcements
            </h2>
            <p className="text-gray-600 mb-8">
              Stay updated with the latest news, exam schedules, and upcoming
              events at GyanSewa.
            </p>
            <button className="bg-[#252872] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d91f22] transition-colors flex items-center">
              View All Notices <ChevronRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          {/* Right: Timeline */}
          <div className="md:w-2/3 space-y-6">
            {notices.map((notice, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: 20
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
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-6 group border-l-4 border-[#d91f22]">

                <div className="flex-shrink-0 text-center px-4 border-r border-gray-100">
                  <span className="block text-3xl font-bold text-[#d91f22]">
                    {notice.date}
                  </span>
                  <span className="block text-sm font-bold text-gray-400 uppercase">
                    {notice.month}
                  </span>
                </div>
                <div className="flex-grow">
                  <span className="inline-block px-2 py-1 bg-gray-100 text-xs font-semibold text-gray-500 rounded mb-2">
                    {notice.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#252872] group-hover:text-[#d91f22] transition-colors">
                    {notice.title}
                  </h3>
                </div>
                <div className="flex-shrink-0 hidden sm:block">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#d91f22] group-hover:text-white transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}