'use client'

import { motion } from 'framer-motion';
export function AdBanner() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#252872] to-[#d91f22] p-8 md:p-16 text-center md:text-left shadow-2xl">

          {/* Abstract Shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-400 opacity-10 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Prepare for Loksewa & Entrance Exams
              </h2>
              <p className="text-red-50 text-lg mb-0">
                Get access to past papers, model questions, and expert-curated
                revision materials to boost your grades.
              </p>
            </div>
            <button className="bg-white text-[#252872] hover:bg-gray-50 px-8 py-4 rounded-full font-bold shadow-lg transition-transform hover:scale-105 whitespace-nowrap">
              Start Practicing
            </button>
          </div>
        </motion.div>
      </div>
    </section>);

}