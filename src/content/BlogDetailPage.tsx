'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Calendar,
  User,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  ChevronRight,
} from 'lucide-react'
import { Newsletter } from '../components/Newsletter'
import { useRouter } from 'next/navigation'

export function BlogDetailPage({ id }: any) {
  const { push: navigate } = useRouter()
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-gray-200 py-4 sticky top-[72px] z-40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center text-sm text-gray-500 font-medium overflow-x-auto whitespace-nowrap">
            <span className="hover:text-[#d91f22] cursor-pointer" onClick={() => navigate('/')}>
              Home
            </span>
            <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
            <span
              className="hover:text-[#d91f22] cursor-pointer"
              onClick={() => navigate('/blog')}
            >
              Blog
            </span>
            <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
            <span className="text-[#252872] truncate">
              How to Prepare for Loksewa Exams
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <article className="lg:w-2/3">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100"
            >
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
                  Loksewa
                </span>
                <span className="bg-green-50 text-green-600 text-xs font-bold px-3 py-1 rounded-full">
                  Guide
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#252872] mb-6 leading-tight">
                How to Prepare for Loksewa Exams: A Comprehensive Strategy
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
                <div className="flex items-center">
                  <div className="relative w-10 h-10 rounded-full mr-3 overflow-hidden">
                    <Image
                      src="https://i.pravatar.cc/150?img=12"
                      alt="Ramesh Thapa"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="block font-bold text-[#252872]">
                      Ramesh Thapa
                    </span>
                    <span className="text-xs">Education Expert</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Jan 15, 2024
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />8 min read
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative w-full aspect-video bg-gray-200 rounded-2xl mb-10 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=675&fit=crop"
                  alt="Student studying for Loksewa exam"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="lead text-xl text-gray-600 mb-6">
                  Preparing for the Public Service Commission (Loksewa Aayog)
                  exams requires dedication, strategic planning, and the right
                  resources. In this guide, we break down the essential steps to
                  ensure your success.
                </p>

                <h2 className="text-2xl font-bold text-[#252872] mt-8 mb-4">
                  1. Understand the Syllabus
                </h2>
                <p className="mb-4">
                  Before diving into books, thoroughly review the syllabus for
                  the specific position you are applying for (Kharidar, Nayab
                  Subba, or Section Officer). The syllabus is your roadmap.
                </p>

                <h2 className="text-2xl font-bold text-[#252872] mt-8 mb-4">
                  2. Create a Study Schedule
                </h2>
                <p className="mb-4">
                  Consistency is key. Allocate specific hours for General
                  Knowledge (GK) and IQ. A balanced routine helps prevent
                  burnout and ensures all topics are covered.
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Morning: Focus on GK and memorization tasks.</li>
                  <li>Afternoon: Practice IQ and numerical problems.</li>
                  <li>Evening: Review current affairs and revise.</li>
                </ul>

                <blockquote className="border-l-4 border-[#d91f22] pl-4 italic bg-red-50 py-2 pr-2 rounded-r-lg my-8">
                  "Success is not final, failure is not fatal: It is the courage
                  to continue that counts."
                </blockquote>

                <h2 className="text-2xl font-bold text-[#252872] mt-8 mb-4">
                  3. Practice with Past Papers
                </h2>
                <p className="mb-4">
                  Solving old question papers gives you insight into the
                  question pattern and difficulty level. It also helps in time
                  management during the actual exam.
                </p>

                <h3 className="text-xl font-bold text-[#252872] mt-6 mb-3">
                  Recommended Resources
                </h3>
                <p className="mb-4">
                  Utilize standard textbooks, daily newspapers (Gorkhapatra),
                  and online platforms like GyanSewa for mock tests and quizzes.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <h3 className="text-lg font-bold text-[#252872] mb-4">
                  Share this article
                </h3>
                <div className="flex gap-4">
                  <button className="p-3 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-sky-50 text-sky-500 rounded-full hover:bg-sky-100 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-gray-50 text-gray-600 rounded-full hover:bg-gray-100 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Related Posts */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-[#252872] mb-6">
                Related Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    id: 1,
                    title: 'Top 10 Tips for Entrance Exam Success',
                    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop',
                    date: 'Jan 12, 2024'
                  },
                  {
                    id: 2,
                    title: 'Best Study Techniques for Government Exams',
                    image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&h=300&fit=crop',
                    date: 'Jan 10, 2024'
                  }
                ].map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => navigate(`/blog/${post.id}`)}
                  >
                    <div className="relative h-40 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="font-bold text-[#252872] mb-2">
                      {post.title}
                    </h4>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-32">
              <h3 className="text-lg font-bold text-[#252872] mb-4">
                Table of Contents
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="hover:text-[#d91f22] cursor-pointer">
                  1. Understand the Syllabus
                </li>
                <li className="hover:text-[#d91f22] cursor-pointer">
                  2. Create a Study Schedule
                </li>
                <li className="hover:text-[#d91f22] cursor-pointer">
                  3. Practice with Past Papers
                </li>
                <li className="hover:text-[#d91f22] cursor-pointer">
                  Recommended Resources
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="text-lg font-bold text-[#252872] mb-4">
                  About the Author
                </h3>
                <div className="flex items-start gap-4">
                  <div className="relative w-12 h-12 rounded-full flex-shrink-0 overflow-hidden">
                    <Image
                      src="https://i.pravatar.cc/150?img=12"
                      alt="Ramesh Thapa"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#252872]">Ramesh Thapa</h4>
                    <p className="text-xs text-gray-500 mb-2">
                      Education Expert & Mentor
                    </p>
                    <p className="text-sm text-gray-600">
                      Helping students achieve their dreams through strategic
                      guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Newsletter />
    </div>
  )
}