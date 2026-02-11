'use client'

import { motion } from 'framer-motion'
import {
  Target,
  Lightbulb,
  Users,
  Award,
  BookOpen,
  Globe,
  Heart,
  TrendingUp,
  Shield,
  Zap,
} from 'lucide-react'
import { AdBanner } from '../components/AdBanner'
import { Newsletter } from '../components/Newsletter'

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner with Background Image */}
      <div className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80"
            alt="Students learning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#252872]/95 to-[#252872]/85"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="text-white font-semibold text-sm">
                🎓 Transforming Education Since 2019
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              About GyanSewa
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 leading-relaxed mb-8"
            >
              We are on a mission to democratize education in Nepal by providing
              accessible, high-quality learning resources for everyone,
              everywhere.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <div className="text-2xl font-bold text-white">10k+</div>
                <div className="text-blue-200 text-sm">Students</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-blue-200 text-sm">Courses</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-blue-200 text-sm">Years</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission & Vision - New Design */}
      <div className="container mx-auto px-4 max-w-7xl py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
                alt="Mission"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#252872]/95 via-[#252872]/80 to-[#252872]/60"></div>
            </div>
            <div className="relative p-10 text-white">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#d91f22] transition-colors">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-blue-100 leading-relaxed">
                To empower every Nepali student with the tools, knowledge, and
                confidence needed to succeed in competitive exams and academic
                pursuits through technology-driven learning solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Vision"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#d91f22]/95 via-[#d91f22]/80 to-[#d91f22]/60"></div>
            </div>
            <div className="relative p-10 text-white">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#252872] transition-colors">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-red-100 leading-relaxed">
                To become Nepal's most trusted digital education ecosystem,
                bridging the gap between traditional learning and modern
                educational needs for a brighter future.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Our Story - Redesigned */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="inline-block bg-blue-100 text-[#252872] px-4 py-2 rounded-full text-sm font-bold mb-6">
                Our Journey
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#252872] mb-6">
                The Story Behind GyanSewa
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2019, GyanSewa started as a small YouTube channel
                  dedicated to helping students prepare for Loksewa exams. We
                  noticed a significant gap in quality, organized study
                  materials available online for Nepali students.
                </p>
                <p>
                  What began with a few video tutorials has now grown into a
                  comprehensive platform serving thousands of students across
                  the country. We've expanded from just Loksewa to Entrance
                  preparation, skill development, and more.
                </p>
                <p className="font-semibold text-[#252872]">
                  Today, our team of expert educators and technologists works
                  tirelessly to create content that is not just informative, but
                  engaging and effective.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full border-2 border-white bg-gray-300 overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/150?img=${i}`}
                        alt={`Team member ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    <span className="font-bold text-[#252872]">200+</span> Expert Instructors
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1000&q=80"
                    alt="Our story"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#252872] to-[#d91f22] rounded-xl flex items-center justify-center text-white">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[#252872] font-bold text-lg">5+ Years</p>
                      <p className="text-gray-600 text-sm">of Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Team Section - Modern Cards */}
      <div className="container mx-auto px-4 max-w-7xl py-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-red-100 text-[#d91f22] px-4 py-2 rounded-full text-sm font-bold mb-4">
              Our Team
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#252872] mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              The passionate individuals behind GyanSewa dedicated to transforming
              education.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: 'Ramesh Kumar',
              role: 'CEO & Founder',
              image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
            },
            {
              name: 'Sita Sharma',
              role: 'Head of Academics',
              image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
            },
            {
              name: 'Hari Prasad',
              role: 'CTO',
              image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
            },
            {
              name: 'Anjali Rai',
              role: 'Content Director',
              image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
            },
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#252872] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#d91f22] text-sm font-semibold">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Values - Icon Grid */}
      <div className="bg-[#252872] text-white py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Our Core Values
              </h2>
              <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                The principles that guide everything we do at GyanSewa
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality Education',
                desc: 'We never compromise on the quality of our content and resources.',
                icon: Award,
                color: 'from-blue-500 to-indigo-600',
              },
              {
                title: 'Accessibility',
                desc: 'Education should be accessible to everyone, regardless of location.',
                icon: Globe,
                color: 'from-emerald-500 to-teal-600',
              },
              {
                title: 'Community',
                desc: 'We believe in growing together and supporting one another.',
                icon: Heart,
                color: 'from-rose-500 to-pink-600',
              },
              {
                title: 'Innovation',
                desc: 'Continuously improving our platform with cutting-edge technology.',
                icon: Zap,
                color: 'from-amber-500 to-orange-600',
              },
              {
                title: 'Excellence',
                desc: 'Striving for the highest standards in everything we create.',
                icon: TrendingUp,
                color: 'from-purple-500 to-violet-600',
              },
              {
                title: 'Trust & Safety',
                desc: 'Building a secure and reliable learning environment for all.',
                icon: Shield,
                color: 'from-cyan-500 to-blue-600',
              },
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <div className={`w-14 h-14 bg-gradient-to-br ${val.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <val.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                  <p className="text-blue-200 leading-relaxed">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80"
            alt="Join us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#d91f22]/90 to-[#252872]/90"></div>
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join Us in Transforming Education
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Be part of Nepal's fastest-growing learning community
          </p>
          <button className="bg-white text-[#252872] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl">
            Get Started Today
          </button>
        </div>
      </div>

      <AdBanner />
      <Newsletter />
    </div>
  )
}