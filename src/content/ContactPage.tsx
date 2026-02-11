'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'
import { Newsletter } from '../components/Newsletter'

export function ContactPage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0)
  
  const faqs = [
    {
      q: 'How do I enroll in a course?',
      a: 'You can enroll by creating an account, browsing our course catalog, and clicking the "Enroll Now" button on any course page.',
    },
    {
      q: 'Are the courses free?',
      a: 'We offer both free and premium courses. Free courses can be accessed immediately after signup, while premium courses require a one-time payment.',
    },
    {
      q: 'Can I access the content on mobile?',
      a: 'Yes! Our platform is fully responsive and works seamlessly on all mobile devices and tablets.',
    },
    {
      q: 'Do you offer refunds?',
      a: 'We have a 7-day refund policy for all premium courses if you are not satisfied with the content.',
    },
  ]
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#252872] to-[#d91f22] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-[#252872] mb-6">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d91f22] focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d91f22] focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d91f22] focus:border-transparent transition-all bg-white">
                  <option>General Inquiry</option>
                  <option>Course Support</option>
                  <option>Technical Issue</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d91f22] focus:border-transparent transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-[#d91f22] hover:bg-[#b91c1c] text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Send Message <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:border-[#d91f22] transition-colors group">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#252872] mb-4 group-hover:bg-[#d91f22] group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#252872] mb-2">Our Location</h3>
                <p className="text-gray-600 text-sm">
                  Baneswor Chowk, Kathmandu
                  <br />
                  Bagmati Province, Nepal
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:border-[#d91f22] transition-colors group">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#252872] mb-4 group-hover:bg-[#d91f22] group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#252872] mb-2">Phone Number</h3>
                <p className="text-gray-600 text-sm">
                  +977-01-1234567
                  <br />
                  +977-9800000000
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:border-[#d91f22] transition-colors group">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#252872] mb-4 group-hover:bg-[#d91f22] group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#252872] mb-2">Email Address</h3>
                <p className="text-gray-600 text-sm">
                  info@gyansewa.edu.np
                  <br />
                  support@gyansewa.edu.np
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:border-[#d91f22] transition-colors group">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#252872] mb-4 group-hover:bg-[#d91f22] group-hover:text-white transition-colors">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#252872] mb-2">Office Hours</h3>
                <p className="text-gray-600 text-sm">
                  Sun - Fri: 9AM - 5PM
                  <br />
                  Sat: Closed
                </p>
              </div>
            </div>

            {/* Google Map Embed - Baneswor Chowk */}
            <div className="w-full h-64 bg-gray-200 rounded-3xl overflow-hidden border border-gray-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4911803842496!2d85.33447907549395!3d27.70279997619267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bad0b5c51d%3A0x5e8c8dfbd5f93f30!2sBaneswor%20Chowk!5e0!3m2!1sen!2snp!4v1234567890123!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Baneswor Chowk Location"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#252872] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center font-bold text-[#252872] hover:bg-gray-50 transition-colors"
                  onClick={() =>
                    setActiveAccordion(activeAccordion === i ? null : i)
                  }
                >
                  {faq.q}
                  {activeAccordion === i ? (
                    <ChevronUp className="w-5 h-5 text-[#d91f22]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                <AnimatePresence>
                  {activeAccordion === i && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      className="px-6 pb-4 text-gray-600"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  )
}