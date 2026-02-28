'use client'

import { motion } from 'framer-motion'
import { GraduationCap, TrendingUp, Megaphone, Share2 } from 'lucide-react'

const platforms = [
    {
        id: 1,
        title: 'Learning Platform',
        icon: GraduationCap,
        gradient: 'from-red-500 to-pink-500',
    },
    {
        id: 2,
        title: 'Earning Platform',
        icon: TrendingUp,
        gradient: 'from-indigo-600 to-blue-500',
    },
    {
        id: 3,
        title: 'Branding Platform',
        icon: Megaphone,
        gradient: 'from-rose-500 to-red-500',
    },
    {
        id: 4,
        title: 'Knowledge Sharing',
        icon: Share2,
        gradient: 'from-blue-600 to-indigo-600',
    },
]

export function PlatformsSection() {
    return (
        <section className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
            {/* subtle background glow */}
            {/* <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-500/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full" /> */}

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {platforms.map((platform, index) => {
                        const Icon = platform.icon

                        return (
                            <motion.div
                                key={platform.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-100 hover:from-transparent hover:to-transparent"
                            >
                                {/* animated border glow */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-red-500/30 to-indigo-500/30 blur-xl" />

                                <div className="relative h-full bg-white/70 backdrop-blur-xl rounded-2xl p-6 flex items-center gap-4 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                                    
                                    {/* Icon */}
                                    <div
                                        className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${platform.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </div>

                                    {/* Title */}
                                    <div>
                                        <p className="text-base font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-indigo-600 transition-all duration-300">
                                            {platform.title}
                                        </p>
                                        <div className="mt-1 h-[2px] w-0 bg-gradient-to-r from-red-500 to-indigo-600 group-hover:w-10 transition-all duration-300 rounded-full" />
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}