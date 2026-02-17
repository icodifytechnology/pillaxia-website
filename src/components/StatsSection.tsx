
'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, GraduationCap, Trophy } from 'lucide-react'
const stats = [
  {
    id: 1,
    label: 'Courses',
    value: '500+',
    icon: BookOpen,
  },
  {
    id: 2,
    label: 'Students',
    value: '10,000+',
    icon: Users,
  },
  {
    id: 3,
    label: 'Expert Teachers',
    value: '50+',
    icon: GraduationCap,
  },
  {
    id: 4,
    label: 'Success Rate',
    value: '95%',
    icon: Trophy,
  },
]
export function StatsSection() {
  return (
    <section className="py-10 bg-white relative z-20 -mt-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        // Define color variations
        const colors = [
          {
            glow: 'from-blue-500/20 to-indigo-500/20',
            gradient: 'from-blue-500/5 to-indigo-500/5',
            iconBg: 'from-blue-500/10 to-indigo-500/10',
            iconBgHover: 'group-hover:from-blue-500/20 group-hover:to-indigo-500/20',
            border: 'border-blue-500/10',
            icon: 'text-blue-600',
            iconHover: 'group-hover:text-indigo-600',
            text: 'from-blue-600 to-indigo-600',
          },
          {
            glow: 'from-red-500/20 to-pink-500/20',
            gradient: 'from-red-500/5 to-pink-500/5',
            iconBg: 'from-red-500/10 to-pink-500/10',
            iconBgHover: 'group-hover:from-red-500/20 group-hover:to-pink-500/20',
            border: 'border-red-500/10',
            icon: 'text-red-600',
            iconHover: 'group-hover:text-pink-600',
            text: 'from-red-600 to-pink-600',
          },
          {
            glow: 'from-emerald-500/20 to-teal-500/20',
            gradient: 'from-emerald-500/5 to-teal-500/5',
            iconBg: 'from-emerald-500/10 to-teal-500/10',
            iconBgHover: 'group-hover:from-emerald-500/20 group-hover:to-teal-500/20',
            border: 'border-emerald-500/10',
            icon: 'text-emerald-600',
            iconHover: 'group-hover:text-teal-600',
            text: 'from-emerald-600 to-teal-600',
          },
          {
            glow: 'from-yellow-500/20 to-red-500/20',
            gradient: 'from-yellow-500/5 to-red-500/5',
            iconBg: 'from-yellow-500/10 to-red-500/10',
            iconBgHover: 'group-hover:from-yellow-500/20 group-hover:to-red-500/20',
            border: 'border-yellow-500/10',
            icon: 'text-yellow-600',
            iconHover: 'group-hover:text-red-600',
            text: 'from-yellow-600 to-red-600',
          },
        ];

        const color = colors[index % colors.length];

        return (
          <motion.div
            key={stat.id}
            initial={{
              opacity: 0,
              y: 30,
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
              duration: 0.5,
            }}
            className="group relative"
          >
            {/* Glow effect on hover */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${color.glow} rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500`} />
            
            {/* Card */}
            <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center overflow-hidden transform group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-300">
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${color.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon container */}
                <div className={`bg-gradient-to-br ${color.iconBg} ${color.iconBgHover} w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 border ${color.border}`}>
                  <stat.icon className={`w-7 h-7 ${color.icon} ${color.iconHover} group-hover:scale-110 transition-all duration-300`} />
                </div>
                
                {/* Value */}
                <h3 className={`text-4xl font-bold mb-2 bg-gradient-to-r ${color.text} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                  {stat.value}
                </h3>
                
                {/* Label */}
                <p className="text-gray-600 text-sm font-medium uppercase tracking-wider group-hover:text-gray-800 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000" />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>
  )
}
