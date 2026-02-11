
'use client'

import { motion } from 'framer-motion'

const partners = [
  { name: 'Tribhuvan University', logo: '/images/client/1.png' },
  { name: 'Kathmandu University', logo: '/images/client/2.png' },
  { name: 'Pokhara University', logo: '/images/client/3.png' },
  { name: 'Purbanchal University', logo: '/images/client/4.png' },
  { name: 'Nepal Open University', logo: '/images/client/5.png' },
  { name: 'Lumbini Buddhist University', logo: '/images/client/6.png' },
]

export function PartnersSection() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Trusted By Leading Institutions
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

        <div className="flex overflow-hidden">
          <motion.div
            className="flex space-x-12 whitespace-nowrap py-4"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: 'linear',
            }}
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-8 py-6 bg-white rounded-xl shadow-sm border border-gray-100 min-w-[200px] h-24 hover:shadow-md hover:scale-105 transition-all duration-300 group"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 max-w-full object-contain transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}