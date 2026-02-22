'use client'

import { motion } from 'framer-motion'
import { Heart, TrendingUp, ExternalLink } from 'lucide-react'

export default function AboutSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-[#252872] mb-4">About Us</h2>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              Milton International College, established in 2005, is one of the leading educational
              institutions in Nepal. Located in the heart of Kathmandu, we are committed to providing
              world-class education that prepares students for global challenges.
            </p>
            <p>
              Our institution combines rigorous academic programs with practical learning experiences,
              ensuring students develop both theoretical knowledge and real-world skills. With
              state-of-the-art facilities and experienced faculty, we create an environment that fosters
              innovation, critical thinking, and personal growth.
            </p>
            <p>
              We believe in holistic education that goes beyond textbooks. Our diverse range of
              extra-curricular activities, community service programs, and industry partnerships ensure
              that every student graduates as a well-rounded individual ready to make a positive impact
              in society.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-[#252872]" />
            </div>
            <h3 className="text-lg font-bold text-[#252872] mb-2">Our Mission</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To provide accessible, high-quality education that empowers students with knowledge,
              skills, and values to become responsible global citizens and leaders.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-[#d91f22]" />
            </div>
            <h3 className="text-lg font-bold text-[#252872] mb-2">Our Vision</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To be recognized as a center of academic excellence in South Asia, producing graduates
              who drive innovation and positive change in their communities.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-[#252872] mb-4">Quick Information</h3>
          <div className="space-y-4">
            {[
              { label: 'Established', value: '2005' },
              { label: 'Type', value: 'Private' },
              { label: 'Affiliation', value: 'Tribhuvan University' },
              { label: 'Campus Size', value: '5 Acres' },
              { label: 'Faculty Members', value: '120+' },
              { label: 'Library Books', value: '25,000+' },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-b-0">
                <span className="text-sm text-gray-500">{item.label}</span>
                <span className="text-sm font-bold text-[#252872]">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#252872] to-[#1a1d54] rounded-2xl p-6 text-white">
          <h3 className="font-bold mb-3">Interested in Admission?</h3>
          <p className="text-sm text-blue-200 mb-4">
            Applications are open for the 2026 academic session. Apply now to secure your seat.
          </p>
          <button className="w-full bg-[#d91f22] hover:bg-[#b91c1c] text-white py-3 rounded-xl font-bold text-sm transition-colors shadow-lg flex items-center justify-center gap-2">
            Apply Now <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}