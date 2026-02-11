'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
export function VideoGrid1() {
  return (
    <section className="py-20 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            In the Spotlight
          </h2>
          <p className="text-navy-200">
            Watch our latest success stories, tutorials, and event highlights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Large Featured Video */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 relative aspect-video md:aspect-auto rounded-xl overflow-hidden bg-gray-800 group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-navy-800 group-hover:scale-105 transition-transform duration-700"></div>

            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-white fill-current ml-1" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 p-6 z-20">
              <span className="px-3 py-1 bg-brand-red text-white text-xs font-bold rounded-full mb-3 inline-block">
                Featured
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                How to Crack Loksewa in First Attempt?
              </h3>
              <p className="text-gray-300 text-sm">
                Expert tips from topper Ram Bahadur Thapa
              </p>
            </div>
          </motion.div>

          {/* Side Stacked Videos */}
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={`side-${i}`}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2 + i * 0.1,
              }}
              className="col-span-1 lg:col-span-1 relative aspect-video rounded-xl overflow-hidden bg-gray-800 group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-navy-700 group-hover:scale-105 transition-transform duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-brand-red transition-colors">
                  <Play className="w-5 h-5 text-white fill-current ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 p-4 z-20">
                <h4 className="font-bold text-white text-sm">
                  Success Story: Batch 2023
                </h4>
              </div>
            </motion.div>
          ))}

          {/* Bottom Row Small Videos */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`bottom-${i}`}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.4 + i * 0.1,
              }}
              className="col-span-1 relative aspect-video rounded-xl overflow-hidden bg-gray-800 group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-navy-600 group-hover:scale-105 transition-transform duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-brand-red transition-colors">
                  <Play className="w-4 h-4 text-white fill-current ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
