'use client'

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
export function Newsletter() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center relative overflow-hidden">

          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#252872] via-[#d91f22] to-[#252872]"></div>

          <h2 className="text-3xl font-bold text-[#252872] mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Get the latest updates, study tips, and course announcements
            delivered directly to your inbox.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}>

            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3.5 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d91f22] focus:border-transparent bg-gray-50"
              required />

            <button
              type="submit"
              className="bg-[#d91f22] hover:bg-[#b91c1c] text-white px-8 py-3.5 rounded-full font-bold shadow-lg transition-transform hover:scale-105 flex items-center justify-center">

              Subscribe <Send className="ml-2 w-4 h-4" />
            </button>
          </form>

          <p className="text-xs text-gray-400 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>);

}