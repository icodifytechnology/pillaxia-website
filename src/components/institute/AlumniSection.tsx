'use client'

import { motion } from 'framer-motion'

const alumni = [
  { name: 'Aarav Sharma', image: 'https://i.pravatar.cc/150?img=15', batch: '2015', role: 'CEO, TechStart Nepal', quote: 'Milton gave me the foundation to dream big.' },
  { name: 'Priya Adhikari', image: 'https://i.pravatar.cc/150?img=48', batch: '2016', role: 'Data Scientist, Google', quote: 'The faculty mentorship was truly life-changing.' },
  { name: 'Bikash Thapa', image: 'https://i.pravatar.cc/150?img=36', batch: '2014', role: 'Founder, EduTech Nepal', quote: 'I learned leadership and teamwork here.' },
  { name: 'Srijana KC', image: 'https://i.pravatar.cc/150?img=29', batch: '2017', role: 'VP, Nabil Bank', quote: 'The practical exposure prepared me for the real world.' },
  { name: 'Rohan Poudel', image: 'https://i.pravatar.cc/150?img=52', batch: '2018', role: 'Software Engineer, Microsoft', quote: 'Best 4 years of my academic life.' },
  { name: 'Anita Gurung', image: 'https://i.pravatar.cc/150?img=44', batch: '2016', role: 'Public Health Director, WHO Nepal', quote: 'Milton instilled values that guide me every day.' },
]

export default function AlumniSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#252872] mb-6">Notable Alumni</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {alumni.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm">
                <img src={a.image} alt={a.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-[#252872]">{a.name}</h3>
                <p className="text-xs text-gray-500">Batch of {a.batch}</p>
              </div>
            </div>
            <p className="text-sm text-[#d91f22] font-medium mb-2">{a.role}</p>
            <p className="text-sm text-gray-500 italic">"{a.quote}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}