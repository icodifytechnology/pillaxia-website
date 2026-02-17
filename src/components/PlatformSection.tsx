'use client'

import { motion } from 'framer-motion'
import {
    GraduationCap,
    TrendingUp,
    Megaphone,
    Share2,
    ArrowRight,
    Sparkles,
} from 'lucide-react'

const platforms = [
    {
        id: 1,
        tag: '01',
        title: 'Learning Platform',
        headline: 'Learn Smarter, Grow Faster',
        description:
            "Access thousands of interactive courses, quizzes, and model sets crafted for Nepal's curriculum. From SEE to Loksewa — we've got you covered.",
        icon: GraduationCap,
        features: ['Mock Tests & Quizzes', 'Live Classes', 'Expert Faculty'],
        cta: 'Start Learning',
        accent: '#d91f22',
        accentLight: 'rgba(217,31,34,0.08)',
        accentBorder: 'rgba(217,31,34,0.18)',
        pattern: 'learning',
    },
    {
        id: 2,
        tag: '02',
        title: 'Earning Platform',
        headline: 'Turn Knowledge Into Income',
        description:
            'Become a content creator or tutor. Publish your courses, sell study materials, and earn real income by sharing your expertise with thousands of students.',
        icon: TrendingUp,
        features: ['Sell Your Courses', 'Referral Rewards', 'Tutor Dashboard'],
        cta: 'Start Earning',
        accent: '#252872',
        accentLight: 'rgba(37,40,114,0.07)',
        accentBorder: 'rgba(37,40,114,0.16)',
        pattern: 'earning',
    },
    {
        id: 4,
        tag: '04',
        title: 'Knowledge Sharing',
        headline: 'Share What You Know',
        description:
            'Post notes, articles, past papers, and study tips. Collaborate with peers, get recognized in the community, and help others succeed.',
        icon: Share2,
        features: ['Upload Notes & Papers', 'Community Q&A', 'Leaderboards'],
        cta: 'Start Sharing',
        accent: '#252872',
        accentLight: 'rgba(37,40,114,0.07)',
        accentBorder: 'rgba(37,40,114,0.16)',
        pattern: 'sharing',
    },
    {
        id: 3,
        tag: '03',
        title: 'Branding Platform',
        headline: 'Amplify Your Institution',
        description:
            'Schools, colleges, and institutes — build your digital presence. Reach thousands of students actively looking for the right institution.',
        icon: Megaphone,
        features: ['Institute Profiles', 'Verified Listings', 'Ad Campaigns'],
        cta: 'Get Listed',
        accent: '#d91f22',
        accentLight: 'rgba(217,31,34,0.08)',
        accentBorder: 'rgba(217,31,34,0.18)',
        pattern: 'branding',
    }
]

const PatternSVG = ({ type, color }: { type: string; color: string }) => {
    if (type === 'learning') {
        return (
            <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="dots-l" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.5" fill={color} />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dots-l)" />
            </svg>
        )
    }
    if (type === 'earning') {
        return (
            <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid-e" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                        <path d="M24 0H0V24" fill="none" stroke={color} strokeWidth="0.8" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-e)" />
            </svg>
        )
    }
    if (type === 'branding') {
        return (
            <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="diag-b" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                        <path d="M0 16L16 0" stroke={color} strokeWidth="0.8" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#diag-b)" />
            </svg>
        )
    }
    return (
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="hex-s" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                    <circle cx="14" cy="14" r="10" fill="none" stroke={color} strokeWidth="0.8" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex-s)" />
        </svg>
    )
}

export function PlatformsSection() {
    return (
        <section className="relative py-20 md:py-28 bg-white overflow-hidden">
            {/* Subtle background texture */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-gray-50 to-transparent" />
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <div className="inline-flex items-center space-x-2 bg-[#d91f22]/5 rounded-full px-4 py-1.5 mb-4">
                            <Sparkles className="w-4 h-4 text-[#252872]" />
                            <span className="text-sm font-semibold text-[#d91f22]">
                                Your Complete Digital Ecosystem
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#d91f22] mb-3">
                            Our Platform
                        </h2>
                        <p className="text-gray-600 max-w-4xl">
                            GyanSewa is more than an ed-tech app — it's a full ecosystem built for students, educators, and institutions.
                        </p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {platforms.map((platform, index) => {
                        const Icon = platform.icon
                        return (
                            <motion.div
                                key={platform.id}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative rounded-3xl overflow-hidden border cursor-pointer"
                                style={{ borderColor: platform.accentBorder, backgroundColor: platform.accentLight }}
                            >
                                {/* Background pattern */}
                                <PatternSVG type={platform.pattern} color={platform.accent} />

                                {/* Glow blob */}
                                <div
                                    className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                                    style={{ backgroundColor: platform.accent }}
                                />

                                <div className="relative p-8">
                                    {/* Top row */}
                                    <div className="flex items-start justify-between mb-6">
                                        {/* Icon */}
                                        <div
                                            className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300"
                                            style={{ backgroundColor: platform.accent }}
                                        >
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>

                                        {/* Tag number */}
                                        <span
                                            className="text-5xl font-black tabular-nums leading-none select-none"
                                            style={{ color: platform.accent, opacity: 0.12 }}
                                        >
                                            {platform.tag}
                                        </span>
                                    </div>

                                    {/* Label pill */}
                                    <div
                                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-3 text-xs font-bold uppercase tracking-widest"
                                        style={{ backgroundColor: platform.accent + '18', color: platform.accent }}
                                    >
                                        {platform.title}
                                    </div>

                                    {/* Headline */}
                                    <h3 className="text-xl md:text-2xl font-extrabold text-[#252872] mb-3 leading-snug group-hover:text-[#d91f22] transition-colors duration-300">
                                        {platform.headline}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                        {platform.description}
                                    </p>

                                    {/* Feature pills */}
                                    {/* <div className="flex flex-wrap gap-2 mb-7">
                                        {platform.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/80 border shadow-sm"
                                                style={{ color: platform.accent, borderColor: platform.accentBorder }}
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div> */}

                                    {/* CTA */}
                                    {/* <button
                                        className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                        style={{ backgroundColor: platform.accent }}
                                    >
                                        {platform.cta}
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button> */}
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