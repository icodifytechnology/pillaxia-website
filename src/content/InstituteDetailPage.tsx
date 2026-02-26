'use client'

import { useRef, useState } from 'react'
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
  Eye,
  Linkedin,
  DollarSign,
  Building,
  Target,
  User,
  Lightbulb,
  CheckCircle2,
  GraduationCapIcon,
} from 'lucide-react'
import { useRouter } from 'next/navigation';
import PlacementsSection from '../components/institute/PlacementsSection';
import AcademicResults from '../components/institute/AcademicResults';
import ScholarshipSection from '../components/institute/ScholarshipSection';
import AboutSection from '../components/institute/AboutSection';
import FacilitiesSection from '../components/institute/FacilitiesSection';
import ProgramsSection from '../components/institute/ProgramsSection';
import ECASection from '../components/institute/ECASection';
import NewsSection from '../components/institute/NewsSection';
import AlumniSection from '../components/institute/AlumniSection';
import { CollegeTourSection } from '../components/institute/CollegeTourSection';
import { ScholarshipCard } from '../components/institute/ScholarshipCard';

const tabs = [
  {
    id: 'about',
    label: 'About',
    icon: Building2,
  },
  {
    id: 'tour',
    label: '360 College Tour',
    icon: Video,
  },
  {
    id: 'faculty',
    label: 'Faculties',
    icon: GraduationCap,
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
    id: 'scholarship',
    label: 'Scholarship',
    icon: GraduationCapIcon,
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

const awardPhotos = [
  {
    label: 'Best College Award Ceremony 2025',
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  },
  {
    label: 'Excellence in IT Education Trophy',
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
  },
  {
    label: 'Top Placement Record Certificate',
    src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
  },
  {
    label: 'Green Campus Award Presentation',
    src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80',
  },
  {
    label: 'Innovation in Teaching Award',
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  },
  {
    label: 'Students Receiving Awards',
    src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80',
  },
]

export function InstituteDetailPage({ id }: any) {
  const { push: navigate } = useRouter();
  const [activeTab, setActiveTab] = useState('about');
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showAwardGallery, setShowAwardGallery] = useState(false)
  const [selectedAwardImage, setSelectedAwardImage] = useState<number | null>(null)

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

  const openAwardLightbox = (index: number) => {
    setSelectedAwardImage(index)
  }

  const closeAwardLightbox = () => {
    setSelectedAwardImage(null)
  }

  const nextAwardImage = () => {
    if (selectedAwardImage !== null) {
      setSelectedAwardImage((selectedAwardImage + 1) % awardPhotos.length)
    }
  }

  const prevAwardImage = () => {
    if (selectedAwardImage !== null) {
      setSelectedAwardImage((selectedAwardImage - 1 + awardPhotos.length) % awardPhotos.length)
    }
  }

  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return

    const scrollAmount = 200

    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  const [selectedFaculty, setSelectedFaculty] = useState<any>(null);

  const facultyData = [
    {
      name: 'Dr. Ramesh Shrestha',
      image: 'https://i.pravatar.cc/300?img=12',
      designation: 'Senior Mathematics Instructor',
      department: 'Mathematics Department',
      experience: '15 Years',
      qualification: 'Ph.D. in Applied Mathematics, Tribhuvan University',
      email: 'ramesh.shrestha@institute.edu.np',
      phone: '+977 9851234567',
      location: 'Kathmandu, Nepal',
      bio: 'Dr. Ramesh is a passionate Mathematics educator with over 15 years of teaching experience in entrance preparation and +2 level education. He specializes in problem-solving techniques and concept clarity, helping students build strong mathematical foundations.',
      expertise: ['Entrance Exam Preparation', 'Advanced Problem Solving', 'Concept-Based Teaching', 'Competitive Exam Strategy', 'Mentorship & Academic Counseling'],
      philosophy: 'I believe in making complex mathematical concepts simple through real-life examples and interactive discussions, ensuring every student grasps the fundamentals.',
      achievements: [
        'Produced 500+ successful entrance qualifiers',
        'Best Faculty Award (2023)',
        '98% student satisfaction rate',
        'Published 5+ research papers in international journals',
        'Developed innovative teaching methodology for entrance exams'
      ],
      hobbies: ['Reading motivational books', 'Playing chess', 'Public speaking', 'Traveling', 'Solving mathematical puzzles'],
      education: [
        { degree: 'Ph.D. in Applied Mathematics', university: 'Tribhuvan University', year: '2010' },
        { degree: 'M.Sc. in Mathematics', university: 'Tribhuvan University', year: '2005' },
        { degree: 'B.Sc. in Mathematics', university: 'Tribhuvan University', year: '2003' }
      ],
      publications: [
        'Advanced Problem-Solving Techniques in Calculus (2022)',
        'Innovative Methods in Teaching Mathematics (2021)',
        'Research on Student Learning Patterns (2020)'
      ],
      courses: ['Advanced Mathematics', 'Calculus & Analysis', 'Statistics', 'Entrance Preparation']
    },
    {
      name: 'Prof. Sita Karki',
      image: 'https://i.pravatar.cc/300?img=5',
      designation: 'Head of Computer Science Department',
      department: 'Computer Science & IT',
      experience: '18 Years',
      qualification: 'Ph.D. in Computer Science, Pokhara University',
      email: 'sita.karki@institute.edu.np',
      phone: '+977 9851234568',
      location: 'Pokhara, Nepal',
      bio: 'Prof. Sita is an innovative educator dedicated to bridging the gap between theoretical knowledge and practical application. With expertise in AI and Machine Learning, she inspires students to embrace technology and innovation.',
      expertise: ['AI & Machine Learning', 'Data Science', 'Programming Fundamentals', 'Project-Based Learning', 'Research & Development'],
      philosophy: 'Technology is best learned by doing. I encourage hands-on projects and real-world problem solving to prepare students for the digital future.',
      achievements: [
        'Trained 1000+ IT professionals',
        'Excellence in Teaching Award (2022)',
        'Led 50+ successful student projects',
        'Speaker at national tech conferences',
        'Published 10+ research papers in AI/ML'
      ],
      hobbies: ['Coding challenges', 'Gardening', 'Tech blogging', 'Mentoring startups', 'Photography'],
      education: [
        { degree: 'Ph.D. in Computer Science', university: 'Pokhara University', year: '2012' },
        { degree: 'M.Tech in AI & ML', university: 'IIT Bombay', year: '2007' },
        { degree: 'B.E. in Computer Engineering', university: 'Pokhara University', year: '2004' }
      ],
      publications: [
        'Machine Learning Applications in Education (2023)',
        'Deep Learning for Beginners (2022)',
        'AI in Nepali Context (2021)'
      ],
      courses: ['Artificial Intelligence', 'Machine Learning', 'Data Structures', 'Python Programming']
    },
    {
      name: 'Dr. Binod Thapa',
      image: 'https://i.pravatar.cc/300?img=22',
      designation: 'Associate Professor, Business Studies',
      department: 'Management Faculty',
      experience: '12 Years',
      qualification: 'Ph.D. in Economics, Kathmandu University',
      email: 'binod.thapa@institute.edu.np',
      phone: '+977 9851234569',
      location: 'Lalitpur, Nepal',
      bio: 'Dr. Binod combines academic excellence with industry experience to deliver practical business education. His teaching style focuses on case studies and real-world business scenarios that prepare students for corporate challenges.',
      expertise: ['Economics & Finance', 'Banking & Insurance', 'Business Strategy', 'Market Analysis', 'Financial Planning'],
      philosophy: 'Business education should not be limited to textbooks. I integrate current market trends and case studies to make learning relevant and engaging.',
      achievements: [
        '300+ BBA/BBS graduates placed in top companies',
        'Authored 2 books on Nepali economy',
        'Outstanding Educator Award (2021)',
        'Consultant for 10+ business firms',
        'Guest lecturer at international universities'
      ],
      hobbies: ['Stock market analysis', 'Writing articles', 'Cricket', 'Social volunteering', 'Reading business magazines'],
      education: [
        { degree: 'Ph.D. in Economics', university: 'Kathmandu University', year: '2014' },
        { degree: 'MBA in Finance', university: 'Kathmandu University', year: '2009' },
        { degree: 'BBS', university: 'Tribhuvan University', year: '2006' }
      ],
      publications: [
        'Nepal Economy: Challenges and Opportunities (2023)',
        'Banking Sector Analysis (2022)',
        'Modern Business Strategies (2020)'
      ],
      courses: ['Business Economics', 'Financial Management', 'Banking & Insurance', 'Strategic Management']
    },
    {
      name: 'Ms. Anjali Rai',
      image: 'https://i.pravatar.cc/300?img=32',
      designation: 'Senior English Language Instructor',
      department: 'English & Communication',
      experience: '10 Years',
      qualification: 'M.A. in English Literature, Tribhuvan University',
      email: 'anjali.rai@institute.edu.np',
      phone: '+977 9851234570',
      location: 'Kathmandu, Nepal',
      bio: 'Ms. Anjali is passionate about developing strong communication skills in students. She believes that mastering English opens doors to global opportunities and focuses on practical communication along with literature appreciation.',
      expertise: ['English Literature', 'Communication Skills', 'IELTS/TOEFL Preparation', 'Creative Writing', 'Public Speaking'],
      philosophy: 'Language is a tool for expression and connection. I help students find their voice and communicate confidently in any situation.',
      achievements: [
        '200+ students scored Band 7+ in IELTS',
        'Published poetry collection "Himalayan Voices"',
        'Best Communication Trainer (2022)',
        '95% entrance success rate in English',
        'Conducted 100+ communication workshops'
      ],
      hobbies: ['Reading novels', 'Poetry writing', 'Debating', 'Yoga & meditation', 'Theater & drama'],
      education: [
        { degree: 'M.A. in English Literature', university: 'Tribhuvan University', year: '2011' },
        { degree: 'B.A. in English', university: 'Tribhuvan University', year: '2009' },
        { degree: 'IELTS Trainer Certification', university: 'British Council', year: '2012' }
      ],
      publications: [
        'Himalayan Voices - Poetry Collection (2023)',
        'Effective Communication Guide (2022)',
        'IELTS Success Strategies (2021)'
      ],
      courses: ['English Literature', 'Communication Skills', 'IELTS/TOEFL', 'Creative Writing']
    },
    {
      name: 'Dr. Krishna Prasad',
      image: 'https://i.pravatar.cc/300?img=45',
      designation: 'Professor, Advanced Mathematics',
      department: 'Science Faculty',
      experience: '20 Years',
      qualification: 'Ph.D. in Applied Mathematics, IIT Delhi',
      email: 'krishna.prasad@institute.edu.np',
      phone: '+977 9851234571',
      location: 'Bhaktapur, Nepal',
      bio: 'Dr. Krishna is a veteran educator known for his innovative teaching methods in advanced mathematics. He has mentored thousands of students preparing for engineering and medical entrance exams with remarkable success rates.',
      expertise: ['Statistics & Probability', 'Calculus & Analysis', 'Research Methodology', 'Entrance Exam Strategy', 'Mathematical Modeling'],
      philosophy: 'Mathematics is not about memorization but understanding patterns and logic. I teach students to think mathematically and apply concepts creatively.',
      achievements: [
        '800+ engineering entrance qualifiers',
        'Lifetime Achievement Award in Education (2023)',
        'Published 15+ research papers',
        'Developed innovative teaching methodology',
        'National Mathematics Olympiad coordinator'
      ],
      hobbies: ['Solving puzzles', 'Astronomy', 'Playing tabla', 'Mountain trekking', 'Chess'],
      education: [
        { degree: 'Ph.D. in Applied Mathematics', university: 'IIT Delhi', year: '2005' },
        { degree: 'M.Sc. in Mathematics', university: 'Tribhuvan University', year: '2000' },
        { degree: 'B.Sc. in Mathematics', university: 'Tribhuvan University', year: '1998' }
      ],
      publications: [
        'Advanced Calculus for Engineering Students (2023)',
        'Statistical Methods in Research (2022)',
        'Mathematical Modeling Techniques (2020)'
      ],
      courses: ['Advanced Calculus', 'Statistics', 'Mathematical Methods', 'Research Methodology']
    },
    {
      name: 'Mr. Suresh Adhikari',
      image: 'https://i.pravatar.cc/300?img=60',
      designation: 'Assistant Professor, Information Technology',
      department: 'Computer Science & IT',
      experience: '8 Years',
      qualification: 'M.Sc. in Information Technology, Kathmandu University',
      email: 'suresh.adhikari@institute.edu.np',
      phone: '+977 9851234572',
      location: 'Kathmandu, Nepal',
      bio: 'Mr. Suresh is a young and dynamic educator who brings industry experience into the classroom. He focuses on practical skills that make students job-ready from day one and encourages innovation in technology.',
      expertise: ['Web Development', 'Cloud Computing', 'Cybersecurity Basics', 'Mobile App Development', 'DevOps'],
      philosophy: 'The best way to learn technology is by building projects. I guide students to create real applications that solve actual problems.',
      achievements: [
        '150+ students placed in IT companies',
        'Developed 30+ open-source projects',
        'Young Educator Award (2023)',
        'Certified AWS & Azure instructor',
        'Mentored 10+ successful startups'
      ],
      hobbies: ['Open source contribution', 'Gaming', 'Photography', 'Hiking', 'Tech podcasts'],
      education: [
        { degree: 'M.Sc. in Information Technology', university: 'Kathmandu University', year: '2015' },
        { degree: 'B.Sc. in Computer Science', university: 'Tribhuvan University', year: '2012' },
        { degree: 'AWS Certified Solutions Architect', university: 'Amazon', year: '2020' }
      ],
      publications: [
        'Modern Web Development Guide (2023)',
        'Cloud Computing for Beginners (2022)',
        'Building Scalable Applications (2021)'
      ],
      courses: ['Web Development', 'Cloud Computing', 'Mobile Development', 'Database Systems']
    },
  ];

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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:grid grid-cols-2 gap-3 flex-shrink-0"
            >
              {[
                { label: 'Rating', value: '4.8', icon: Star },
                { label: 'Students', value: '2,500+', icon: Users },
                { label: 'Programs', value: '12', icon: BookOpen },
                { label: 'Awards', value: '15+', icon: Award },
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
        <div className="container mx-auto px-4 max-w-7xl relative">

          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-[-25px] top-1/2 -translate-y-1/2 z-40 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Scrollable Tabs */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide -mb-px scroll-smooth"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${activeTab === tab.id
                  ? 'border-[#d91f22] text-[#d91f22]'
                  : 'border-transparent text-gray-500 hover:text-[#252872] hover:border-gray-300'
                  }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-[-25px] top-1/2 -translate-y-1/2 z-40 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>
      </div>


      {/* Tab Content */}
      <div className="container mx-auto px-4 max-w-7xl py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {/* ABOUT */}
            {activeTab === 'about' && <AboutSection/>}

            {/* COLLEGE TOUR */}
            {activeTab === 'tour' && <CollegeTourSection/>}

            {/* FACULTY */}
            {activeTab === 'faculty' && (
              <div>
                <h2 className="text-2xl font-bold text-[#252872] mb-6">
                  Our Faculty
                </h2>

                {/* Faculty Grid - All inline without separate component */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: 'Dr. Ramesh Shrestha',
                      image: 'https://i.pravatar.cc/300?img=12',
                      designation: 'Senior Mathematics Instructor',
                      department: 'Mathematics Department',
                      experience: '15 Years',
                      qualification: 'Ph.D. in Applied Mathematics, Tribhuvan University',
                      email: 'ramesh.shrestha@institute.edu.np',
                      phone: '+977 9851234567',
                      location: 'Kathmandu, Nepal',
                      bio: 'Dr. Ramesh is a passionate Mathematics educator with over 15 years of teaching experience in entrance preparation and +2 level education. He specializes in problem-solving techniques and concept clarity, helping students build strong mathematical foundations.',
                      expertise: ['Entrance Exam Preparation', 'Advanced Problem Solving', 'Concept-Based Teaching', 'Competitive Exam Strategy', 'Mentorship & Academic Counseling'],
                      philosophy: 'I believe in making complex mathematical concepts simple through real-life examples and interactive discussions, ensuring every student grasps the fundamentals.',
                      achievements: [
                        'Produced 500+ successful entrance qualifiers',
                        'Best Faculty Award (2023)',
                        '98% student satisfaction rate',
                        'Published 5+ research papers in international journals',
                        'Developed innovative teaching methodology for entrance exams'
                      ],
                      hobbies: ['Reading motivational books', 'Playing chess', 'Public speaking', 'Traveling', 'Solving mathematical puzzles'],
                      education: [
                        { degree: 'Ph.D. in Applied Mathematics', university: 'Tribhuvan University', year: '2010' },
                        { degree: 'M.Sc. in Mathematics', university: 'Tribhuvan University', year: '2005' },
                        { degree: 'B.Sc. in Mathematics', university: 'Tribhuvan University', year: '2003' }
                      ],
                      publications: [
                        'Advanced Problem-Solving Techniques in Calculus (2022)',
                        'Innovative Methods in Teaching Mathematics (2021)',
                        'Research on Student Learning Patterns (2020)'
                      ],
                      courses: ['Advanced Mathematics', 'Calculus & Analysis', 'Statistics', 'Entrance Preparation']
                    },
                    {
                      name: 'Prof. Sita Karki',
                      image: 'https://i.pravatar.cc/300?img=5',
                      designation: 'Head of Computer Science Department',
                      department: 'Computer Science & IT',
                      experience: '18 Years',
                      qualification: 'Ph.D. in Computer Science, Pokhara University',
                      email: 'sita.karki@institute.edu.np',
                      phone: '+977 9851234568',
                      location: 'Pokhara, Nepal',
                      bio: 'Prof. Sita is an innovative educator dedicated to bridging the gap between theoretical knowledge and practical application. With expertise in AI and Machine Learning, she inspires students to embrace technology and innovation.',
                      expertise: ['AI & Machine Learning', 'Data Science', 'Programming Fundamentals', 'Project-Based Learning', 'Research & Development'],
                      philosophy: 'Technology is best learned by doing. I encourage hands-on projects and real-world problem solving to prepare students for the digital future.',
                      achievements: [
                        'Trained 1000+ IT professionals',
                        'Excellence in Teaching Award (2022)',
                        'Led 50+ successful student projects',
                        'Speaker at national tech conferences',
                        'Published 10+ research papers in AI/ML'
                      ],
                      hobbies: ['Coding challenges', 'Gardening', 'Tech blogging', 'Mentoring startups', 'Photography'],
                      education: [
                        { degree: 'Ph.D. in Computer Science', university: 'Pokhara University', year: '2012' },
                        { degree: 'M.Tech in AI & ML', university: 'IIT Bombay', year: '2007' },
                        { degree: 'B.E. in Computer Engineering', university: 'Pokhara University', year: '2004' }
                      ],
                      publications: [
                        'Machine Learning Applications in Education (2023)',
                        'Deep Learning for Beginners (2022)',
                        'AI in Nepali Context (2021)'
                      ],
                      courses: ['Artificial Intelligence', 'Machine Learning', 'Data Structures', 'Python Programming']
                    },
                    {
                      name: 'Dr. Binod Thapa',
                      image: 'https://i.pravatar.cc/300?img=22',
                      designation: 'Associate Professor, Business Studies',
                      department: 'Management Faculty',
                      experience: '12 Years',
                      qualification: 'Ph.D. in Economics, Kathmandu University',
                      email: 'binod.thapa@institute.edu.np',
                      phone: '+977 9851234569',
                      location: 'Lalitpur, Nepal',
                      bio: 'Dr. Binod combines academic excellence with industry experience to deliver practical business education. His teaching style focuses on case studies and real-world business scenarios that prepare students for corporate challenges.',
                      expertise: ['Economics & Finance', 'Banking & Insurance', 'Business Strategy', 'Market Analysis', 'Financial Planning'],
                      philosophy: 'Business education should not be limited to textbooks. I integrate current market trends and case studies to make learning relevant and engaging.',
                      achievements: [
                        '300+ BBA/BBS graduates placed in top companies',
                        'Authored 2 books on Nepali economy',
                        'Outstanding Educator Award (2021)',
                        'Consultant for 10+ business firms',
                        'Guest lecturer at international universities'
                      ],
                      hobbies: ['Stock market analysis', 'Writing articles', 'Cricket', 'Social volunteering', 'Reading business magazines'],
                      education: [
                        { degree: 'Ph.D. in Economics', university: 'Kathmandu University', year: '2014' },
                        { degree: 'MBA in Finance', university: 'Kathmandu University', year: '2009' },
                        { degree: 'BBS', university: 'Tribhuvan University', year: '2006' }
                      ],
                      publications: [
                        'Nepal Economy: Challenges and Opportunities (2023)',
                        'Banking Sector Analysis (2022)',
                        'Modern Business Strategies (2020)'
                      ],
                      courses: ['Business Economics', 'Financial Management', 'Banking & Insurance', 'Strategic Management']
                    },
                    {
                      name: 'Ms. Anjali Rai',
                      image: 'https://i.pravatar.cc/300?img=32',
                      designation: 'Senior English Language Instructor',
                      department: 'English & Communication',
                      experience: '10 Years',
                      qualification: 'M.A. in English Literature, Tribhuvan University',
                      email: 'anjali.rai@institute.edu.np',
                      phone: '+977 9851234570',
                      location: 'Kathmandu, Nepal',
                      bio: 'Ms. Anjali is passionate about developing strong communication skills in students. She believes that mastering English opens doors to global opportunities and focuses on practical communication along with literature appreciation.',
                      expertise: ['English Literature', 'Communication Skills', 'IELTS/TOEFL Preparation', 'Creative Writing', 'Public Speaking'],
                      philosophy: 'Language is a tool for expression and connection. I help students find their voice and communicate confidently in any situation.',
                      achievements: [
                        '200+ students scored Band 7+ in IELTS',
                        'Published poetry collection "Himalayan Voices"',
                        'Best Communication Trainer (2022)',
                        '95% entrance success rate in English',
                        'Conducted 100+ communication workshops'
                      ],
                      hobbies: ['Reading novels', 'Poetry writing', 'Debating', 'Yoga & meditation', 'Theater & drama'],
                      education: [
                        { degree: 'M.A. in English Literature', university: 'Tribhuvan University', year: '2011' },
                        { degree: 'B.A. in English', university: 'Tribhuvan University', year: '2009' },
                        { degree: 'IELTS Trainer Certification', university: 'British Council', year: '2012' }
                      ],
                      publications: [
                        'Himalayan Voices - Poetry Collection (2023)',
                        'Effective Communication Guide (2022)',
                        'IELTS Success Strategies (2021)'
                      ],
                      courses: ['English Literature', 'Communication Skills', 'IELTS/TOEFL', 'Creative Writing']
                    },
                    {
                      name: 'Dr. Krishna Prasad',
                      image: 'https://i.pravatar.cc/300?img=45',
                      designation: 'Professor, Advanced Mathematics',
                      department: 'Science Faculty',
                      experience: '20 Years',
                      qualification: 'Ph.D. in Applied Mathematics, IIT Delhi',
                      email: 'krishna.prasad@institute.edu.np',
                      phone: '+977 9851234571',
                      location: 'Bhaktapur, Nepal',
                      bio: 'Dr. Krishna is a veteran educator known for his innovative teaching methods in advanced mathematics. He has mentored thousands of students preparing for engineering and medical entrance exams with remarkable success rates.',
                      expertise: ['Statistics & Probability', 'Calculus & Analysis', 'Research Methodology', 'Entrance Exam Strategy', 'Mathematical Modeling'],
                      philosophy: 'Mathematics is not about memorization but understanding patterns and logic. I teach students to think mathematically and apply concepts creatively.',
                      achievements: [
                        '800+ engineering entrance qualifiers',
                        'Lifetime Achievement Award in Education (2023)',
                        'Published 15+ research papers',
                        'Developed innovative teaching methodology',
                        'National Mathematics Olympiad coordinator'
                      ],
                      hobbies: ['Solving puzzles', 'Astronomy', 'Playing tabla', 'Mountain trekking', 'Chess'],
                      education: [
                        { degree: 'Ph.D. in Applied Mathematics', university: 'IIT Delhi', year: '2005' },
                        { degree: 'M.Sc. in Mathematics', university: 'Tribhuvan University', year: '2000' },
                        { degree: 'B.Sc. in Mathematics', university: 'Tribhuvan University', year: '1998' }
                      ],
                      publications: [
                        'Advanced Calculus for Engineering Students (2023)',
                        'Statistical Methods in Research (2022)',
                        'Mathematical Modeling Techniques (2020)'
                      ],
                      courses: ['Advanced Calculus', 'Statistics', 'Mathematical Methods', 'Research Methodology']
                    },
                    {
                      name: 'Mr. Suresh Adhikari',
                      image: 'https://i.pravatar.cc/300?img=60',
                      designation: 'Assistant Professor, Information Technology',
                      department: 'Computer Science & IT',
                      experience: '8 Years',
                      qualification: 'M.Sc. in Information Technology, Kathmandu University',
                      email: 'suresh.adhikari@institute.edu.np',
                      phone: '+977 9851234572',
                      location: 'Kathmandu, Nepal',
                      bio: 'Mr. Suresh is a young and dynamic educator who brings industry experience into the classroom. He focuses on practical skills that make students job-ready from day one and encourages innovation in technology.',
                      expertise: ['Web Development', 'Cloud Computing', 'Cybersecurity Basics', 'Mobile App Development', 'DevOps'],
                      philosophy: 'The best way to learn technology is by building projects. I guide students to create real applications that solve actual problems.',
                      achievements: [
                        '150+ students placed in IT companies',
                        'Developed 30+ open-source projects',
                        'Young Educator Award (2023)',
                        'Certified AWS & Azure instructor',
                        'Mentored 10+ successful startups'
                      ],
                      hobbies: ['Open source contribution', 'Gaming', 'Photography', 'Hiking', 'Tech podcasts'],
                      education: [
                        { degree: 'M.Sc. in Information Technology', university: 'Kathmandu University', year: '2015' },
                        { degree: 'B.Sc. in Computer Science', university: 'Tribhuvan University', year: '2012' },
                        { degree: 'AWS Certified Solutions Architect', university: 'Amazon', year: '2020' }
                      ],
                      publications: [
                        'Modern Web Development Guide (2023)',
                        'Cloud Computing for Beginners (2022)',
                        'Building Scalable Applications (2021)'
                      ],
                      courses: ['Web Development', 'Cloud Computing', 'Mobile Development', 'Database Systems']
                    },
                  ].map((faculty, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#d91f22]/20 transition-all duration-300 group cursor-pointer"
                    >
                      {/* Compact Card Header */}
                      <div className="relative bg-gradient-to-br from-[#252872] to-[#1a1d5a] p-6 pb-16">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl">
                            <img
                              src={faculty.image}
                              alt={faculty.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Compact Card Content */}
                      <div className="p-6 pt-12">
                        <div className="text-center mb-4">
                          <h3 className="text-lg font-bold text-[#252872] mb-1">
                            {faculty.name}
                          </h3>
                          <p className="text-sm text-[#d91f22] font-semibold mb-1">
                            {faculty.designation}
                          </p>
                          <p className="text-xs text-gray-500">
                            {faculty.department}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#d91f22]" />
                            <span className="text-xs text-gray-600">{faculty.experience}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <GraduationCap className="w-4 h-4 text-[#d91f22]" />
                            <span className="text-xs text-gray-600">Ph.D.</span>
                          </div>
                        </div>

                        <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-3">
                          {faculty.bio}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {faculty.expertise.slice(0, 3).map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-[#252872]/5 text-[#252872] rounded-full text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                          {faculty.expertise.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                              +{faculty.expertise.length - 3} more
                            </span>
                          )}
                        </div>

                        <button
                          onClick={() => setSelectedFaculty(faculty)}
                          className="w-full py-2.5 bg-gradient-to-r from-[#252872] to-[#1a1d5a] text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 group-hover:from-[#d91f22] group-hover:to-[#b91c1c]"
                        >
                          View Full Profile
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Full Profile Modal */}
                <AnimatePresence>
                  {selectedFaculty && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
                      onClick={() => setSelectedFaculty(null)}
                    >
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-white rounded-3xl max-w-5xl w-full my-8 overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Modal Header */}
                        <div className="relative bg-gradient-to-br from-[#252872] via-[#1a1d5a] to-[#252872] p-8 text-white">
                          <button
                            onClick={() => setSelectedFaculty(null)}
                            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all group"
                          >
                            <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                          </button>

                          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl flex-shrink-0">
                              <img
                                src={selectedFaculty.image}
                                alt={selectedFaculty.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                              <h2 className="text-3xl font-bold mb-2">{selectedFaculty.name}</h2>
                              <p className="text-xl text-[#d91f22] font-semibold mb-2 bg-white px-4 py-1 rounded-full inline-block">
                                {selectedFaculty.designation}
                              </p>
                              <p className="text-white/90 mb-4">{selectedFaculty.department}</p>
                              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                                <div className="flex items-center gap-2">
                                  <Mail className="w-4 h-4" />
                                  <span>{selectedFaculty.email}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Phone className="w-4 h-4" />
                                  <span>{selectedFaculty.phone}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4" />
                                  <span>{selectedFaculty.location}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8 max-h-[70vh] overflow-y-auto">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Left Column */}
                            <div className="space-y-6">
                              {/* Professional Summary */}
                              <div>
                                <h3 className="text-lg font-bold text-[#252872] mb-3 flex items-center gap-2">
                                  <User className="w-5 h-5" />
                                  Professional Summary
                                </h3>
                                <p className="text-gray-700 leading-relaxed">{selectedFaculty.bio}</p>
                              </div>

                              {/* Education */}
                              <div>
                                <h3 className="text-lg font-bold text-[#252872] mb-3 flex items-center gap-2">
                                  <GraduationCap className="w-5 h-5" />
                                  Education
                                </h3>
                                <div className="space-y-3">
                                  {selectedFaculty.education.map((edu: any, idx: number) => (
                                    <div key={idx} className="border-l-4 border-[#d91f22] pl-4">
                                      <h4 className="font-semibold text-[#252872]">{edu.degree}</h4>
                                      <p className="text-sm text-gray-600">{edu.university}</p>
                                      <p className="text-xs text-gray-500">{edu.year}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Teaching Philosophy */}
                              <div>
                                <h3 className="text-lg font-bold text-[#252872] mb-3 flex items-center gap-2">
                                  <Lightbulb className="w-5 h-5" />
                                  Teaching Philosophy
                                </h3>
                                <div className="bg-gradient-to-br from-[#252872]/5 to-[#d91f22]/5 p-4 rounded-xl border-l-4 border-[#d91f22]">
                                  <p className="text-gray-700 italic leading-relaxed">
                                    "{selectedFaculty.philosophy}"
                                  </p>
                                </div>
                              </div>

                              {/* Courses Taught */}
                              <div>
                                <h3 className="text-lg font-bold text-[#252872] mb-3 flex items-center gap-2">
                                  <BookOpen className="w-5 h-5" />
                                  Courses Taught
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                  {selectedFaculty.courses.map((course: any, idx: number) => (
                                    <span
                                      key={idx}
                                      className="px-3 py-2 bg-gradient-to-r from-[#252872] to-[#1a1d5a] text-white rounded-lg text-sm font-medium shadow-sm"
                                    >
                                      {course}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-6">
                              {/* Areas of Expertise */}
                              <div>
                                <h3 className="text-lg font-bold text-[#252872] mb-3 flex items-center gap-2">
                                  <Award className="w-5 h-5" />
                                  Areas of Expertise
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                  {selectedFaculty.expertise.map((skill: any, idx: number) => (
                                    <span
                                      key={idx}
                                      className="px-3 py-2 bg-[#252872]/5 text-[#252872] rounded-full text-sm font-medium border border-[#252872]/10"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Key Achievements */}
                              <div>
                                <h3 className="text-lg font-bold text-[#252872] mb-3 flex items-center gap-2">
                                  <Trophy className="w-5 h-5" />
                                  Key Achievements
                                </h3>
                                <ul className="space-y-2">
                                  {selectedFaculty.achievements.map((achievement: any, idx: number) => (
                                    <li key={idx} className="flex items-start gap-3">
                                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                      <span className="text-gray-700">{achievement}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Publications */}
                              <div>
                                <h3 className="text-lg font-bold text-[#252872] mb-3 flex items-center gap-2">
                                  <BookOpen className="w-5 h-5" />
                                  Publications
                                </h3>
                                <ul className="space-y-2">
                                  {selectedFaculty.publications.map((pub: any, idx: number) => (
                                    <li key={idx} className="flex items-start gap-3">
                                      <div className="w-2 h-2 bg-[#d91f22] rounded-full mt-2 flex-shrink-0"></div>
                                      <span className="text-gray-700">{pub}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Hobbies & Interests */}
                              <div>
                                <h3 className="text-lg font-bold text-[#252872] mb-3 flex items-center gap-2">
                                  <Heart className="w-5 h-5" />
                                  Hobbies & Interests
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                  {selectedFaculty.hobbies.map((hobby: any, idx: number) => (
                                    <span
                                      key={idx}
                                      className="px-3 py-2 bg-gray-50 text-gray-700 rounded-full text-sm border border-gray-200"
                                    >
                                      {hobby}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* FACILITIES */}
            {activeTab === 'facilities' && <FacilitiesSection/>}

            {/* PROGRAMS */}
            {activeTab === 'programs' && <ProgramsSection/>}

            {/* ECA */}
            {activeTab === 'eca' && <ECASection/>}

            {/* PLACEMENTS */}
            {activeTab === 'placements' && <PlacementsSection />}

            {/* ALUMNI */}
            {activeTab === 'alumni' && <AlumniSection/>}

            {/* AWARDS */}
            {activeTab === 'awards' && (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-[#252872]">
                    Awards & Achievements
                  </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {awardPhotos.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={() => openAwardLightbox(i)}
                      className="aspect-video rounded-2xl overflow-hidden relative group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <img
                        src={img.src}
                        alt={img.label}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                        <p className="text-white text-xs font-medium">
                          {img.label}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Award Photos Lightbox */}
                <AnimatePresence>
                  {selectedAwardImage !== null && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                      onClick={closeAwardLightbox}
                    >
                      <button
                        onClick={closeAwardLightbox}
                        className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10 group"
                      >
                        <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          prevAwardImage()
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
                      >
                        <ChevronLeft className="w-6 h-6 text-white" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          nextAwardImage()
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </button>

                      <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        className="max-w-5xl max-h-[90vh] relative"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <img
                          src={awardPhotos[selectedAwardImage].src}
                          alt={awardPhotos[selectedAwardImage].label}
                          className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
                          <h3 className="text-white text-xl font-bold text-center">
                            {awardPhotos[selectedAwardImage].label}
                          </h3>
                        </div>
                      </motion.div>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-white font-medium text-sm">
                          {selectedAwardImage + 1} / {awardPhotos.length}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}

            {/* NEWS */}
            {activeTab === 'news' && <NewsSection/>}

            {/* RESULTS */}
            {activeTab === 'results' && <AcademicResults/>}

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
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.04 }}
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
                      <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10 group"
                      >
                        <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          prevImage()
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
                      >
                        <ChevronLeft className="w-6 h-6 text-white" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          nextImage()
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </button>

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

             {/* SCHOLARSHIP */}
            {activeTab === 'scholarship' && <ScholarshipSection/>}

            <ScholarshipCard />
            
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}