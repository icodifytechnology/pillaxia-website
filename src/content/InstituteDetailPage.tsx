'use client'

import  { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Globe,
  Star,
  Users,
  BookOpen,
  Award,
  ChevronRight,
  CheckCircle,
  Play,
  Calendar,
  Trophy,
  Newspaper,
  BarChart3,
  Camera,
  Video,
  Building2,
  Dumbbell,
  Music,
  Palette,
  Briefcase,
  GraduationCap,
  Clock,
  Heart,
  TrendingUp,
  ExternalLink,
  ChevronLeft,
  X,
} from 'lucide-react'
import { useRouter } from 'next/navigation';

const tabs = [
  {
    id: 'about',
    label: 'About',
    icon: Building2,
  },
  {
    id: 'facilities',
    label: 'Facilities',
    icon: CheckCircle,
  },
  {
    id: 'programs',
    label: 'Programs',
    icon: BookOpen,
  },
  {
    id: 'eca',
    label: 'ECA',
    icon: Music,
  },
  {
    id: 'placements',
    label: 'Placements',
    icon: Briefcase,
  },
  {
    id: 'alumni',
    label: 'Alumni',
    icon: Users,
  },
  {
    id: 'awards',
    label: 'Awards',
    icon: Trophy,
  },
  {
    id: 'news',
    label: 'News',
    icon: Newspaper,
  },
  {
    id: 'results',
    label: 'Results',
    icon: BarChart3,
  },
  {
    id: 'gallery',
    label: 'Gallery',
    icon: Camera,
  },
  {
    id: 'tour',
    label: '360° Tour',
    icon: Video,
  },
]

const galleryImages = [
  {
    label: 'Campus Front View',
    src: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
  },
  {
    label: 'Library',
    src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
  },
  {
    label: 'Computer Lab',
    src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
  },
  {
    label: 'Sports Ground',
    src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
  },
  {
    label: 'Auditorium',
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  },
  {
    label: 'Classroom',
    src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
  },
  {
    label: 'Cafeteria',
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
  },
  {
    label: 'Annual Day',
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
  },
  {
    label: 'Science Lab',
    src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
  },
  {
    label: 'Graduation Ceremony',
    src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
  },
  {
    label: 'Cultural Event',
    src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80',
  },
  {
    label: 'Workshop',
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  },
]



export function InstituteDetailPage({ id }: any) {
  const { push: navigate } = useRouter();
  const [activeTab, setActiveTab] = useState('about');
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative bg-[#252872] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#252872] via-[#1a1d54] to-[#252872]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d91f22] opacity-[0.06] rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 opacity-[0.05] rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10 py-12">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-blue-200 font-medium mb-8">
            <button
              onClick={() => navigate('/')}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-4 h-4 mx-2" />
            <button
              onClick={() => navigate('/institutes')}
              className="hover:text-white transition-colors"
            >
              Institutes
            </button>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Milton International College</span>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Logo */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-2xl flex items-center justify-center text-5xl shadow-xl border-4 border-white/20 flex-shrink-0"
            >
              <img
                src={'/images/client/1.png'}
                alt={'college'}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="flex-1"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-green-500/20 text-green-200 text-xs font-bold rounded-full border border-green-400/30">
                  Govt Approved
                </span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-200 text-xs font-bold rounded-full border border-amber-400/30">
                  Top Rated
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-200 text-xs font-bold rounded-full border border-blue-400/30">
                  Placement Focused
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                Milton International College
              </h1>
              <p className="text-blue-100 text-lg mb-4 max-w-2xl">
                A premier educational institution committed to academic
                excellence, innovation, and holistic student development since
                2005.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-blue-200">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Baneshwor, Kathmandu
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +977-01-4567890
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> info@milton.edu.np
                </span>
                <span className="flex items-center gap-2">
                  <Globe className="w-4 h-4" /> www.milton.edu.np
                </span>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="hidden lg:grid grid-cols-2 gap-3 flex-shrink-0"
            >
              {[
                {
                  label: 'Rating',
                  value: '4.8',
                  icon: Star,
                },
                {
                  label: 'Students',
                  value: '2,500+',
                  icon: Users,
                },
                {
                  label: 'Programs',
                  value: '12',
                  icon: BookOpen,
                },
                {
                  label: 'Awards',
                  value: '15+',
                  icon: Award,
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10 text-center min-w-[100px]"
                >
                  <s.icon className="w-4 h-4 mx-auto mb-1 text-blue-200" />
                  <div className="text-lg font-bold">{s.value}</div>
                  <div className="text-[10px] text-blue-300 uppercase tracking-wider font-bold">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-[68px] z-30 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex overflow-x-auto scrollbar-hide -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${activeTab === tab.id ? 'border-[#d91f22] text-[#d91f22]' : 'border-transparent text-gray-500 hover:text-[#252872] hover:border-gray-300'}`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-4 max-w-7xl py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -12,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            {/* ABOUT */}
            {activeTab === 'about' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-[#252872] mb-4">
                      About Us
                    </h2>
                    <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
                      <p>
                        Milton International College, established in 2005, is
                        one of the leading educational institutions in Nepal.
                        Located in the heart of Kathmandu, we are committed to
                        providing world-class education that prepares students
                        for global challenges.
                      </p>
                      <p>
                        Our institution combines rigorous academic programs with
                        practical learning experiences, ensuring students
                        develop both theoretical knowledge and real-world
                        skills. With state-of-the-art facilities and experienced
                        faculty, we create an environment that fosters
                        innovation, critical thinking, and personal growth.
                      </p>
                      <p>
                        We believe in holistic education that goes beyond
                        textbooks. Our diverse range of extra-curricular
                        activities, community service programs, and industry
                        partnerships ensure that every student graduates as a
                        well-rounded individual ready to make a positive impact
                        in society.
                      </p>
                    </div>
                  </div>

                  {/* Mission & Vision */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
                        <Heart className="w-6 h-6 text-[#252872]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#252872] mb-2">
                        Our Mission
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        To provide accessible, high-quality education that
                        empowers students with knowledge, skills, and values to
                        become responsible global citizens and leaders.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                        <TrendingUp className="w-6 h-6 text-[#d91f22]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#252872] mb-2">
                        Our Vision
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        To be recognized as a center of academic excellence in
                        South Asia, producing graduates who drive innovation and
                        positive change in their communities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sidebar Quick Info */}
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="font-bold text-[#252872] mb-4">
                      Quick Information
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          label: 'Established',
                          value: '2005',
                        },
                        {
                          label: 'Type',
                          value: 'Private',
                        },
                        {
                          label: 'Affiliation',
                          value: 'Tribhuvan University',
                        },
                        {
                          label: 'Campus Size',
                          value: '5 Acres',
                        },
                        {
                          label: 'Faculty Members',
                          value: '120+',
                        },
                        {
                          label: 'Library Books',
                          value: '25,000+',
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center py-2 border-b border-gray-50 last:border-b-0"
                        >
                          <span className="text-sm text-gray-500">
                            {item.label}
                          </span>
                          <span className="text-sm font-bold text-[#252872]">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#252872] to-[#1a1d54] rounded-2xl p-6 text-white">
                    <h3 className="font-bold mb-3">Interested in Admission?</h3>
                    <p className="text-sm text-blue-200 mb-4">
                      Applications are open for the 2026 academic session. Apply
                      now to secure your seat.
                    </p>
                    <button className="w-full bg-[#d91f22] hover:bg-[#b91c1c] text-white py-3 rounded-xl font-bold text-sm transition-colors shadow-lg flex items-center justify-center gap-2">
                      Apply Now <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* FACILITIES */}
            {activeTab === 'facilities' && (
              <div>
                <h2 className="text-2xl font-bold text-[#252872] mb-6">
                  Our Facilities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: 'Modern Library',
                      desc: 'Digital and physical collection of 25,000+ books and journals',
                      icon: BookOpen,
                      color: 'bg-blue-50 text-blue-600',
                    },
                    {
                      name: 'Computer Labs',
                      desc: '200+ workstations with high-speed internet and latest software',
                      icon: Globe,
                      color: 'bg-purple-50 text-purple-600',
                    },
                    {
                      name: 'Science Labs',
                      desc: 'Fully equipped physics, chemistry, and biology laboratories',
                      icon: BarChart3,
                      color: 'bg-green-50 text-green-600',
                    },
                    {
                      name: 'Sports Complex',
                      desc: 'Indoor and outdoor facilities for basketball, football, and more',
                      icon: Dumbbell,
                      color: 'bg-orange-50 text-orange-600',
                    },
                    {
                      name: 'Auditorium',
                      desc: '500-seat auditorium for events, seminars, and cultural programs',
                      icon: Music,
                      color: 'bg-pink-50 text-pink-600',
                    },
                    {
                      name: 'Cafeteria',
                      desc: 'Hygienic dining facility serving nutritious meals daily',
                      icon: Heart,
                      color: 'bg-amber-50 text-amber-600',
                    },
                    {
                      name: 'Medical Center',
                      desc: '24/7 health services with qualified medical professionals',
                      icon: CheckCircle,
                      color: 'bg-red-50 text-red-600',
                    },
                    {
                      name: 'Transportation',
                      desc: 'Bus service covering major routes across Kathmandu valley',
                      icon: MapPin,
                      color: 'bg-cyan-50 text-cyan-600',
                    },
                    {
                      name: 'Art Studio',
                      desc: 'Creative space for visual arts, design, and multimedia projects',
                      icon: Palette,
                      color: 'bg-indigo-50 text-indigo-600',
                    },
                  ].map((facility, i) => (
                    <motion.div
                      key={i}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: i * 0.05,
                      }}
                      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${facility.color}`}
                      >
                        <facility.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-[#252872] mb-2">
                        {facility.name}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {facility.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* PROGRAMS */}
            {activeTab === 'programs' && (
              <div>
                <h2 className="text-2xl font-bold text-[#252872] mb-6">
                  Programs & Courses
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      name: 'BBA (Bachelor of Business Administration)',
                      duration: '4 Years',
                      seats: 120,
                      level: 'Undergraduate',
                      color: 'from-blue-500 to-indigo-500',
                    },
                    {
                      name: 'BBS (Bachelor of Business Studies)',
                      duration: '4 Years',
                      seats: 100,
                      level: 'Undergraduate',
                      color: 'from-green-500 to-emerald-500',
                    },
                    {
                      name: 'BCA (Bachelor of Computer Application)',
                      duration: '4 Years',
                      seats: 80,
                      level: 'Undergraduate',
                      color: 'from-purple-500 to-violet-500',
                    },
                    {
                      name: 'MBA (Master of Business Administration)',
                      duration: '2 Years',
                      seats: 60,
                      level: 'Postgraduate',
                      color: 'from-amber-500 to-orange-500',
                    },
                    {
                      name: 'MBS (Master of Business Studies)',
                      duration: '2 Years',
                      seats: 50,
                      level: 'Postgraduate',
                      color: 'from-rose-500 to-pink-500',
                    },
                    {
                      name: 'B.Sc. CSIT',
                      duration: '4 Years',
                      seats: 60,
                      level: 'Undergraduate',
                      color: 'from-cyan-500 to-teal-500',
                    },
                  ].map((program, i) => (
                    <motion.div
                      key={i}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: i * 0.05,
                      }}
                      className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group"
                    >
                      <div
                        className={`h-1.5 bg-gradient-to-r ${program.color}`}
                      />
                      <div className="p-6">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${program.level === 'Postgraduate' ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'}`}
                        >
                          {program.level}
                        </span>
                        <h3 className="text-lg font-bold text-[#252872] mt-3 mb-3 group-hover:text-[#d91f22] transition-colors">
                          {program.name}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" /> {program.duration}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Users className="w-3.5 h-3.5" /> {program.seats}{' '}
                            seats
                          </span>
                        </div>
                        <button className="mt-4 text-[#d91f22] text-sm font-semibold hover:underline flex items-center gap-1">
                          View Details <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* ECA */}
            {activeTab === 'eca' && (
              <div>
                <h2 className="text-2xl font-bold text-[#252872] mb-6">
                  Extra-Curricular Activities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      name: 'Sports Club',
                      desc: 'Football, basketball, cricket, and athletics',
                      icon: Dumbbell,
                      color: 'bg-orange-50 text-orange-600',
                    },
                    {
                      name: 'Music & Dance',
                      desc: 'Classical, modern dance, and band performances',
                      icon: Music,
                      color: 'bg-pink-50 text-pink-600',
                    },
                    {
                      name: 'Art & Design',
                      desc: 'Painting, sketching, and digital art workshops',
                      icon: Palette,
                      color: 'bg-indigo-50 text-indigo-600',
                    },
                    {
                      name: 'Debate Club',
                      desc: 'Public speaking, MUN, and debate competitions',
                      icon: Users,
                      color: 'bg-blue-50 text-blue-600',
                    },
                    {
                      name: 'Community Service',
                      desc: 'Social outreach and volunteer programs',
                      icon: Heart,
                      color: 'bg-red-50 text-red-600',
                    },
                    {
                      name: 'Tech Club',
                      desc: 'Coding workshops, hackathons, and tech talks',
                      icon: Globe,
                      color: 'bg-purple-50 text-purple-600',
                    },
                    {
                      name: 'Photography',
                      desc: 'Photo walks, exhibitions, and editing workshops',
                      icon: Camera,
                      color: 'bg-cyan-50 text-cyan-600',
                    },
                    {
                      name: 'Entrepreneurship',
                      desc: 'Business plan competitions and startup mentoring',
                      icon: Briefcase,
                      color: 'bg-amber-50 text-amber-600',
                    },
                  ].map((activity, i) => (
                    <motion.div
                      key={i}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: i * 0.04,
                      }}
                      className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center"
                    >
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 ${activity.color}`}
                      >
                        <activity.icon className="w-7 h-7" />
                      </div>
                      <h3 className="font-bold text-[#252872] text-sm mb-1">
                        {activity.name}
                      </h3>
                      <p className="text-xs text-gray-500">{activity.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* PLACEMENTS */}
            {activeTab === 'placements' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-[#252872] mb-2">
                  Placement Overview
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    {
                      label: 'Placement Rate',
                      value: '92%',
                      color: 'text-green-600 bg-green-50',
                    },
                    {
                      label: 'Avg. Package',
                      value: 'NPR 6L',
                      color: 'text-blue-600 bg-blue-50',
                    },
                    {
                      label: 'Highest Package',
                      value: 'NPR 18L',
                      color: 'text-purple-600 bg-purple-50',
                    },
                    {
                      label: 'Recruiting Companies',
                      value: '50+',
                      color: 'text-amber-600 bg-amber-50',
                    },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{
                        opacity: 0,
                        scale: 0.95,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        delay: i * 0.08,
                      }}
                      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
                    >
                      <div className="text-3xl font-bold text-[#252872] mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-[#252872] mb-4">
                    Top Recruiters
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                    {[
                      'Nabil Bank',
                      'NIC Asia',
                      'Deloitte Nepal',
                      'Unilever',
                      'Ncell',
                      'WorldLink',
                    ].map((company, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100"
                      >
                        <div className="w-10 h-10 bg-white rounded-lg mx-auto mb-2 flex items-center justify-center text-lg shadow-sm">
                          🏢
                        </div>
                        <p className="text-xs font-medium text-gray-600">
                          {company}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ALUMNI */}
            {activeTab === 'alumni' && (
              <div>
                <h2 className="text-2xl font-bold text-[#252872] mb-6">
                  Notable Alumni
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: 'Aarav Sharma',
                      batch: '2015',
                      role: 'CEO, TechStart Nepal',
                      quote: 'Milton gave me the foundation to dream big.',
                    },
                    {
                      name: 'Priya Adhikari',
                      batch: '2016',
                      role: 'Data Scientist, Google',
                      quote: 'The faculty mentorship was truly life-changing.',
                    },
                    {
                      name: 'Bikash Thapa',
                      batch: '2014',
                      role: 'Founder, EduTech Nepal',
                      quote: 'I learned leadership and teamwork here.',
                    },
                    {
                      name: 'Srijana KC',
                      batch: '2017',
                      role: 'VP, Nabil Bank',
                      quote:
                        'The practical exposure prepared me for the real world.',
                    },
                    {
                      name: 'Rohan Poudel',
                      batch: '2018',
                      role: 'Software Engineer, Microsoft',
                      quote: 'Best 4 years of my academic life.',
                    },
                    {
                      name: 'Anita Gurung',
                      batch: '2016',
                      role: 'Public Health Director, WHO Nepal',
                      quote: 'Milton instilled values that guide me every day.',
                    },
                  ].map((alumni, i) => (
                    <motion.div
                      key={i}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: i * 0.05,
                      }}
                      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#252872] to-[#3a3d9e] rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {alumni.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-bold text-[#252872]">
                            {alumni.name}
                          </h3>
                          <p className="text-xs text-gray-500">
                            Batch of {alumni.batch}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-[#d91f22] font-medium mb-2">
                        {alumni.role}
                      </p>
                      <p className="text-sm text-gray-500 italic">
                        "{alumni.quote}"
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* AWARDS */}
            {activeTab === 'awards' && (
              <div>
                <h2 className="text-2xl font-bold text-[#252872] mb-6">
                  Awards & Achievements
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      year: '2025',
                      title: 'Best Private College in Nepal',
                      org: 'Nepal Education Board',
                      icon: '🏆',
                    },
                    {
                      year: '2024',
                      title: 'Excellence in IT Education',
                      org: 'CAN Federation',
                      icon: '🥇',
                    },
                    {
                      year: '2024',
                      title: 'Top Placement Record',
                      org: 'FNCCI',
                      icon: '📈',
                    },
                    {
                      year: '2023',
                      title: 'Green Campus Award',
                      org: 'Ministry of Environment',
                      icon: '🌿',
                    },
                    {
                      year: '2023',
                      title: 'Innovation in Teaching',
                      org: 'UGC Nepal',
                      icon: '💡',
                    },
                  ].map((award, i) => (
                    <motion.div
                      key={i}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: i * 0.08,
                      }}
                      className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-5"
                    >
                      <div className="text-3xl flex-shrink-0">{award.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[#252872]">
                          {award.title}
                        </h3>
                        <p className="text-sm text-gray-500">{award.org}</p>
                      </div>
                      <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-lg">
                        {award.year}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* NEWS */}
            {activeTab === 'news' && (
              <div>
                <h2 className="text-2xl font-bold text-[#252872] mb-6">
                  News & Announcements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Admission Open for 2026 Session',
                      date: 'Feb 5, 2026',
                      category: 'Admission',
                      excerpt:
                        'Applications are now being accepted for all undergraduate and postgraduate programs.',
                    },
                    {
                      title: 'Annual Sports Week Starting March 15',
                      date: 'Feb 1, 2026',
                      category: 'Events',
                      excerpt:
                        'Inter-department sports competitions including football, basketball, and athletics.',
                    },
                    {
                      title: 'New MOU Signed with Australian University',
                      date: 'Jan 28, 2026',
                      category: 'Partnership',
                      excerpt:
                        'Student exchange program and joint research initiatives with University of Melbourne.',
                    },
                    {
                      title: 'Scholarship Results Published',
                      date: 'Jan 20, 2026',
                      category: 'Scholarship',
                      excerpt:
                        'Merit-based scholarship recipients for the spring semester have been announced.',
                    },
                  ].map((news, i) => (
                    <motion.div
                      key={i}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: i * 0.05,
                      }}
                      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 group cursor-pointer"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-0.5 bg-red-50 text-[#d91f22] text-[10px] font-bold rounded uppercase">
                          {news.category}
                        </span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {news.date}
                        </span>
                      </div>
                      <h3 className="font-bold text-[#252872] mb-2 group-hover:text-[#d91f22] transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {news.excerpt}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* RESULTS */}
            {activeTab === 'results' && (
              <div>
                <h2 className="text-2xl font-bold text-[#252872] mb-6">
                  Academic Results
                </h2>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-100">
                          <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Program
                          </th>
                          <th className="text-center px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Year
                          </th>
                          <th className="text-center px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Pass Rate
                          </th>
                          <th className="text-center px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Distinction
                          </th>
                          <th className="text-center px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                            First Division
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {[
                          {
                            program: 'BBA',
                            year: '2025',
                            pass: '96%',
                            distinction: '12%',
                            first: '45%',
                          },
                          {
                            program: 'BCA',
                            year: '2025',
                            pass: '94%',
                            distinction: '15%',
                            first: '42%',
                          },
                          {
                            program: 'BBS',
                            year: '2025',
                            pass: '91%',
                            distinction: '8%',
                            first: '38%',
                          },
                          {
                            program: 'MBA',
                            year: '2025',
                            pass: '98%',
                            distinction: '20%',
                            first: '55%',
                          },
                          {
                            program: 'B.Sc. CSIT',
                            year: '2025',
                            pass: '93%',
                            distinction: '18%',
                            first: '40%',
                          },
                        ].map((row, i) => (
                          <tr
                            key={i}
                            className="hover:bg-gray-50/50 transition-colors"
                          >
                            <td className="px-6 py-4 font-medium text-[#252872]">
                              {row.program}
                            </td>
                            <td className="px-6 py-4 text-center text-sm text-gray-500">
                              {row.year}
                            </td>
                            <td className="px-6 py-4 text-center">
                              <span className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-lg">
                                {row.pass}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <span className="px-2.5 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-lg">
                                {row.distinction}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg">
                                {row.first}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* GALLERY */}
            {activeTab === 'gallery' && (
              <>
                <div>
                  <h2 className="text-2xl font-bold text-[#252872] mb-6">
                    Image Gallery
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map((img, i) => (
                      <motion.div
                        key={i}
                        initial={{
                          opacity: 0,
                          scale: 0.95,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          delay: i * 0.04,
                        }}
                        onClick={() => openLightbox(i)}
                        className="aspect-square rounded-2xl overflow-hidden relative group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                      >
                        <img
                          src={img.src}
                          alt={img.label}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                          <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <p className="text-white text-xs font-medium">
                            {img.label}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                  {selectedImage !== null && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                      onClick={closeLightbox}
                    >
                      {/* Close Button */}
                      <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10 group"
                      >
                        <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                      </button>

                      {/* Previous Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          prevImage()
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
                      >
                        <ChevronLeft className="w-6 h-6 text-white" />
                      </button>

                      {/* Next Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          nextImage()
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </button>

                      {/* Image */}
                      <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        className="max-w-5xl max-h-[90vh] relative"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <img
                          src={galleryImages[selectedImage].src}
                          alt={galleryImages[selectedImage].label}
                          className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
                          <h3 className="text-white text-xl font-bold text-center">
                            {galleryImages[selectedImage].label}
                          </h3>
                        </div>
                      </motion.div>

                      {/* Image Counter */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-white font-medium text-sm">
                          {selectedImage + 1} / {galleryImages.length}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}

            {/* 360 TOUR */}
            {activeTab === 'tour' && (
              <div>
                <h2 className="text-2xl font-bold text-[#252872] mb-6">
                  360° College Tour
                </h2>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="aspect-video bg-gray-900 relative flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center pl-1 shadow-xl">
                          <Play className="w-7 h-7 text-[#d91f22] fill-current" />
                        </div>
                      </div>
                      <h3 className="text-white text-xl font-bold mb-2">
                        Virtual Campus Tour
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Experience our campus from the comfort of your home
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  {[
                    'Main Building Tour',
                    'Library & Labs',
                    'Sports Facilities',
                  ].map((tour, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow"
                    >
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Play className="w-6 h-6 text-[#d91f22]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#252872] text-sm">
                          {tour}
                        </h4>
                        <p className="text-xs text-gray-400">3-5 min video</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
