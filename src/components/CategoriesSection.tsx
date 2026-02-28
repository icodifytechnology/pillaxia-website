'use client'

import { motion } from 'framer-motion';
import { ArrowRight, Clock, Sparkles, ExternalLink, Shield, GraduationCap, Globe, BarChart3, BookOpen, Code2, FlaskConical, Landmark, School, Building2 } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    name: 'Loksewa',
    suffix: 'Sewa',
    tag: 'PSC · Civil Service',
    description:
      'Loksewa (लोक सेवा आयोग) is the Public Service Commission of Nepal — an independent constitutional body responsible for recruiting meritorious candidates for government and civil service positions.',
    href: '/loksewa',
    available: true,
    color: 'from-[#d91f22] to-[#9b1a1d]',
    lightColor: 'bg-[#d91f22]/10',
    iconColor: 'text-[#d91f22]',
    icon: Shield,
  },
  {
    name: 'Entrance',
    suffix: 'Sewa',
    tag: 'Medical · Engineering · Law',
    description:
      'Comprehensive preparation for medical, engineering, management, and other professional entrance examinations in Nepal. Practice with past papers and mock tests.',
    href: '/entrance',
    available: true,
    color: 'from-[#252872] to-[#1a1b52]',
    lightColor: 'bg-[#252872]/10',
    iconColor: 'text-[#252872]',
    icon: GraduationCap,
  },
  {
    name: 'Note',
    suffix: 'Sewa',
    tag: 'Notes · Past Papers · Syllabus',
    description:
      'Access a comprehensive library of academic notes, past papers, assignments, lab reports, and syllabi curated for TU, KU, and PU students across all programs and years.',
    href: '/notes',
    available: true,
    color: 'from-[#0e7490] to-[#0c5c73]',
    lightColor: 'bg-[#0e7490]/10',
    iconColor: 'text-[#0e7490]',
    icon: BookOpen,
  },
  {
    name: 'College',
    suffix: 'Sewa',
    tag: 'BBA · BCA · CSIT · MBA',
    description:
      'Discover and compare top colleges and universities across Nepal. Filter by program, university affiliation, location, and fee range to find the right institution for your academic journey.',
    href: '/institutes',
    available: true,
    color: 'from-[#7c3aed] to-[#5b21b6]',
    lightColor: 'bg-[#7c3aed]/10',
    iconColor: 'text-[#7c3aed]',
    icon: Building2,
  },
  {
    name: 'Bridge Course',
    suffix: 'Sewa',
    tag: 'Science · Math · Foundation',
    description:
      'Bridge programs to help students transition between academic levels, covering foundational concepts in science, mathematics, and general studies.',
    href: '/bridge-course',
    available: false,
    color: 'from-gray-400 to-gray-500',
    lightColor: 'bg-gray-100',
    iconColor: 'text-gray-400',
    icon: BookOpen,
  },
  {
    name: 'Banking',
    suffix: 'Sewa',
    tag: 'NRB · Commercial Banks',
    description:
      'Prepare for banking sector recruitment including Nepal Rastra Bank, commercial banks, and cooperatives with topic-wise practice and full mock tests.',
    href: '/banking',
    available: false,
    color: 'from-gray-400 to-gray-500',
    lightColor: 'bg-gray-100',
    iconColor: 'text-gray-400',
    icon: Landmark,
  },
];
export function CategoriesSection() {
  return (
    <section id="courses" className="py-24 bg-[#f8f8fc] relative overflow-hidden">
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #252872 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-[#d91f22]/10 rounded-full px-4 py-1.5 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#d91f22]" />
              <span className="text-xs font-bold text-[#d91f22] uppercase tracking-widest">
                Study Materials
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#252872] leading-[1.1] mb-4">
              Pick Your{' '}
              <span className="relative inline-block">
                Path
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#d91f22] rounded-full" />
              </span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              9 exam categories. One platform. Start practicing today.
            </p>
          </div>

          {/* <Link
            href="/categories"
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-[#252872] hover:text-[#d91f22] transition-colors group shrink-0"
          >
            View all categories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link> */}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className={`group relative bg-white rounded-2xl border ${
                cat.available
                  ? 'border-gray-200 hover:border-transparent hover:shadow-2xl hover:-translate-y-1.5'
                  : 'border-gray-100 opacity-60'
              } transition-all duration-300 overflow-hidden flex flex-col`}
            >
              {/* Gradient top strip */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${cat.color}`} />

              <div className="p-6 flex flex-col flex-1">
                {/* Icon + Tag row */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-xl ${cat.available ? cat.lightColor : 'bg-gray-50'}`}>
                    <cat.icon className={`w-5 h-5 ${cat.available ? cat.iconColor : 'text-gray-300'}`} />
                  </div>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      cat.available
                        ? cat.lightColor + ' text-gray-600'
                        : 'bg-gray-50 text-gray-400'
                    }`}
                  >
                    {cat.tag}
                  </span>
                </div>

                {/* Title */}
                <div className="mb-3">
                  <h3
                    className={`text-xl font-black leading-tight transition-colors duration-200 ${
                      cat.available
                        ? 'text-[#252872] group-hover:text-[#d91f22]'
                        : 'text-gray-400'
                    }`}
                  >
                    {cat.name}{' '}
                    <span
                      className={`font-black ${
                        cat.available ? 'text-[#d91f22]' : 'text-gray-300'
                      }`}
                    >
                      {cat.suffix}
                    </span>
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">
                  {cat.description}
                </p>

                {/* Divider */}
                <div className="border-t border-gray-100 my-5" />

                {/* CTA */}
                {cat.available ? (
                  <Link href={cat.href}>
                    <button
                      className={`w-full bg-gradient-to-r ${cat.color} text-white py-3 px-5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 hover:shadow-lg transition-all duration-200 group/btn`}
                    >
                      Explore Now
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
                    </button>
                  </Link>
                ) : (
                  <button
                    disabled
                    className="w-full bg-gray-50 border border-dashed border-gray-200 text-gray-400 py-3 px-5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 cursor-not-allowed"
                  >
                    <Clock className="w-3.5 h-3.5" />
                    Coming Soon
                  </button>
                )}
              </div>

              {/* Hover inner glow */}
              {cat.available && (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none rounded-2xl`}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile view all */}
        {/* <div className="flex md:hidden justify-center mt-10">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#252872] hover:text-[#d91f22] transition-colors group"
          >
            View all categories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div> */}
      </div>
    </section>
  );
}