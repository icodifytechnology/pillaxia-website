'use client'

import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Tag, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation';
import { Newsletter } from '../components/Newsletter'
import Link from 'next/link';

/* ------------------ DATA ------------------ */

const featuredPost = {
  id: 0,
  title: 'Mastering the Loksewa Interview: A Comprehensive Guide',
  excerpt:
    'The interview phase is the final hurdle in your Loksewa journey. Learn how to present yourself confidently, answer tricky questions, and leave a lasting impression.',
  category: 'Featured',
  author: 'Ramesh Thapa',
  date: 'Jan 20, 2024',
  image:
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80',
}

const blogPosts = [
  {
    id: 1,
    title: 'How to Prepare for Loksewa Exams',
    excerpt:
      'Master the strategies and study plans needed to crack the toughest government exams in Nepal.',
    category: 'Loksewa',
    author: 'Ramesh Thapa',
    date: 'Jan 15, 2024',
    image:
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
  },
  {
    id: 2,
    title: 'Top 10 Tips for Entrance Exam Success',
    excerpt:
      'Expert advice on managing time, stress, and syllabus coverage for engineering and medical entrance.',
    category: 'Entrance',
    author: 'Sita Sharma',
    date: 'Jan 12, 2024',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
  },
  {
    id: 3,
    title: 'Understanding CMAT Exam Pattern',
    excerpt:
      'A comprehensive breakdown of the CMAT syllabus, marking scheme, and question types.',
    category: 'Management',
    author: 'Hari Krishna',
    date: 'Jan 10, 2024',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  },
  {
    id: 4,
    title: "Nepal's Education System: A Complete Guide",
    excerpt:
      'An in-depth look at the current state, challenges, and future of education in Nepal.',
    category: 'Education',
    author: 'Dr. B.K. Rai',
    date: 'Jan 08, 2024',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
  },
  {
    id: 5,
    title: 'Best Study Techniques for Competitive Exams',
    excerpt:
      'Scientific methods like Pomodoro, Active Recall, and Spaced Repetition explained.',
    category: 'Tips',
    author: 'Anjali Gurung',
    date: 'Jan 05, 2024',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
  },
  {
    id: 6,
    title: 'Career Opportunities After Loksewa',
    excerpt:
      'Explore the various career paths and benefits available after passing the Loksewa exam.',
    category: 'Career',
    author: 'Ramesh Thapa',
    date: 'Jan 02, 2024',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
  },
]

/* ------------------ PAGE ------------------ */

export function BlogPage() {
  const { push: navigate } = useRouter();

  const goToPost = (id: number) => {
    navigate(`/blog/${id}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ---------- HERO ---------- */}
      <div className="bg-[#252872] text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-blue-100 text-lg max-w-2xl mb-6">
            Latest insights, tips, and news from education & competitive exams in
            Nepal.
          </p>

          <div className="flex items-center text-sm text-blue-200 font-medium">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Blog</span>
          </div>
        </div>
      </div>

      {/* ---------- CONTENT ---------- */}
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* ===== MAIN ===== */}
          <div className="lg:w-2/3">
            {/* Featured */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => goToPost(featuredPost.id)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition cursor-pointer mb-12 group"
            >
              <div className="relative h-64 md:h-80">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="bg-[#d91f22] text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-2">
                    {featuredPost.title}
                  </h2>
                  <div className="flex gap-4 text-sm text-gray-200">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" /> {featuredPost.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" /> {featuredPost.date}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <span className="text-[#d91f22] font-bold flex items-center">
                  Read Full Article <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </div>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => goToPost(post.id)}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl group cursor-pointer flex flex-col"
                >
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-white/90 text-[#252872] text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-[#252872] group-hover:text-[#d91f22] transition mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex justify-between text-xs text-gray-500 border-t pt-4">
                      <span className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ===== SIDEBAR ===== */}
          <aside className="lg:w-1/3 space-y-8">
            {/* Categories */}
            <SidebarCard title="Categories">
              {['Loksewa', 'Entrance', 'Management', 'Education', 'Tips', 'Career'].map(
                (cat) => (
                  <div key={cat} className="flex justify-between group cursor-pointer">
                    <span className="text-gray-600 group-hover:text-[#d91f22]">
                      {cat}
                    </span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                      {Math.floor(Math.random() * 20) + 5}
                    </span>
                  </div>
                )
              )}
            </SidebarCard>

            {/* Tags */}
            <SidebarCard title="Popular Tags">
              <div className="flex flex-wrap gap-2">
                {['Exam', 'Study', 'Nepal', 'Interview', 'Tips', 'Guide'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 px-3 py-1.5 rounded-full hover:bg-[#d91f22] hover:text-white cursor-pointer flex items-center"
                    >
                      <Tag className="w-3 h-3 mr-1" /> {tag}
                    </span>
                  )
                )}
              </div>
            </SidebarCard>
          </aside>
        </div>
      </div>

      <Newsletter />
    </div>
  )
}

/* ------------------ SMALL COMPONENT ------------------ */

function SidebarCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h3 className="text-lg font-bold text-[#252872] mb-4 border-b pb-2">
        {title}
      </h3>
      <div className="space-y-3">{children}</div>
    </div>
  )
}
