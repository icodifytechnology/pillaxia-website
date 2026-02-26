'use client'

import { motion } from 'framer-motion'
import {
    GraduationCap,
    TrendingUp,
    Megaphone,
    Share2,
    Sparkles,
    ArrowUpRight,
} from 'lucide-react'

const platforms = [
    {
        id: 1,
        tag: '01',
        title: 'Learning Platform',
        headline: 'Learn Smarter',
        icon: GraduationCap,
        accent: '#d91f22',
        accentLight: 'rgba(217,31,34,0.06)',
        accentBorder: 'rgba(217,31,34,0.15)',
    },
    {
        id: 2,
        tag: '02',
        title: 'Earning Platform',
        headline: 'Turn Knowledge\nInto Income',
        icon: TrendingUp,
        accent: '#252872',
        accentLight: 'rgba(37,40,114,0.06)',
        accentBorder: 'rgba(37,40,114,0.15)',
    },
    {
        id: 3,
        tag: '03',
        title: 'Branding Platform',
        headline: 'Amplify Your\nInstitution',
        icon: Megaphone,
        accent: '#d91f22',
        accentLight: 'rgba(217,31,34,0.06)',
        accentBorder: 'rgba(217,31,34,0.15)',
    },
    {
        id: 4,
        tag: '04',
        title: 'Knowledge Sharing',
        headline: 'Share What\nYou Know',
        icon: Share2,
        accent: '#252872',
        accentLight: 'rgba(37,40,114,0.06)',
        accentBorder: 'rgba(37,40,114,0.15)',
    },
]

export function PlatformsSection() {
    return (
        <section className="relative py-20 md:py-28 bg-white overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-gray-50 to-transparent" />
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center space-x-2 bg-[#d91f22]/5 rounded-full px-4 py-1.5 mb-4">
                        <Sparkles className="w-4 h-4 text-[#252872]" />
                        <span className="text-sm font-semibold text-[#d91f22]">
                            Your Complete Digital Ecosystem
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#d91f22] mb-3">
                        Our Platform
                    </h2>
                    <p className="text-gray-600 max-w-xl">
                        GyanSewa is more than an ed-tech app — it's a full ecosystem built for students, educators, and institutions.
                    </p>
                </div>

                {/* 4-column cards grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {platforms.map((platform, index) => {
                        const Icon = platform.icon
                        return (
                            <motion.div
                                key={platform.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.45, delay: index * 0.08 }}
                                className="group relative rounded-2xl overflow-hidden border cursor-pointer flex flex-col"
                                style={{
                                    borderColor: platform.accentBorder,
                                    backgroundColor: platform.accentLight,
                                    minHeight: '200px',
                                }}
                            >
                                {/* Glow blob */}
                                <div
                                    className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-15 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none"
                                    style={{ backgroundColor: platform.accent }}
                                />

                                <div className="relative p-6 flex flex-col h-full">
                                    {/* Tag number top-right */}
                                    <span
                                        className="absolute top-5 right-5 text-3xl font-black tabular-nums leading-none select-none"
                                        style={{ color: platform.accent, opacity: 0.12 }}
                                    >
                                        {platform.tag}
                                    </span>

                                    {/* Icon */}
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 mb-auto"
                                        style={{ backgroundColor: platform.accent }}
                                    >
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Bottom content */}
                                    <div className="mt-6">
                                        {/* Label */}
                                        <p
                                            className="text-[10px] font-bold uppercase tracking-widest mb-1.5"
                                            style={{ color: platform.accent, opacity: 0.7 }}
                                        >
                                            {platform.title}
                                        </p>

                                        {/* Headline */}
                                        <h3
                                            className="text-base font-extrabold leading-snug text-[#252872] group-hover:text-[#d91f22] transition-colors duration-300 whitespace-pre-line"
                                        >
                                            {platform.headline}
                                        </h3>
                                    </div>

                                    {/* Arrow icon */}
                                    <div
                                        className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
                                    >
                                        <ArrowUpRight
                                            className="w-4 h-4"
                                            style={{ color: platform.accent }}
                                        />
                                    </div>
                                </div>

                                {/* Bottom accent line */}
                                <div
                                    className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out"
                                    style={{ backgroundColor: platform.accent }}
                                />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}