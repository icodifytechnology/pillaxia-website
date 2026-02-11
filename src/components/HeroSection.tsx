'use client'

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, PlayCircle, Play, ChevronLeft, ChevronRight, X } from 'lucide-react';

const slides = [
  {
    badge: "Interactive Learning Experience",
    headline: "Master Your Skills with",
    rotatingWords: ['Practice', 'Quizzes', 'Tests'],
    description: "Engage with interactive content, track your progress, and achieve your academic goals with our comprehensive learning tools designed for Nepali curriculum.",
    primaryButton: "Start Learning",
    secondaryButton: "View Courses",
    mediaType: 'video',
    videoId: 'dQw4w9WgXcQ', // Replace with your YouTube video ID
    mediaSrc: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    mediaCaption: 'Watch How GyanSewa Works',
    mediaDescription: 'Discover the features that make us unique'
  },
  {
    badge: "Join 50,000+ Students",
    headline: "Transform Your Future Through",
    rotatingWords: ['Knowledge', 'Excellence', 'Achievement'],
    description: "Be part of Nepal's largest educational community. Connect with expert teachers, collaborate with peers, and unlock your full potential with personalized learning paths.",
    primaryButton: "Join Now",
    secondaryButton: "Success Stories",
    mediaType: 'image',
    mediaSrc: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80',
    mediaAlt: 'Modern classroom',
    mediaCaption: 'Interactive Learning',
    mediaDescription: 'Experience education reimagined'
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Rotating words animation
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % slides[currentSlide].rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Reset word index when slide changes
  useEffect(() => {
    setWordIndex(0);
  }, [currentSlide]);

  // Auto-slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const openVideo = (videoId: string) => {
    setActiveVideoId(videoId);
    setIsVideoModalOpen(true);
  };

  const closeVideo = () => {
    setIsVideoModalOpen(false);
    setActiveVideoId(null);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full bg-[#F8FAFC] py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-red-100/40 rounded-full blur-3xl opacity-60" />
      </div>

      {/* Navigation Arrows - Outside Container */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center transition-all z-30 shadow-lg hover:shadow-xl group border border-gray-200"
      >
        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-[#252872] group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center transition-all z-30 shadow-lg hover:shadow-xl group border border-gray-200"
      >
        <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-[#252872] group-hover:scale-110 transition-transform" />
      </button>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* LEFT COLUMN: Text Content */}
            <div className="flex flex-col items-start text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm mb-8"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d91f22]"></span>
                </span>
                <span className="text-sm font-semibold text-[#252872]">
                  {slide.badge}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#252872] leading-tight mb-6 tracking-tight"
              >
                {slide.headline}{' '}
                <span className="inline-block min-w-[200px] text-left text-[#d91f22]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`${currentSlide}-${wordIndex}`}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="block"
                    >
                      {slide.rotatingWords[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed"
              >
                {slide.description}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto group bg-[#d91f22] hover:bg-[#b91c1c] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center">
                  {slide.primaryButton}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto group bg-transparent border-2 border-[#d91f22] text-[#d91f22] hover:bg-[#d91f22]/5 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center">
                  <PlayCircle className="mr-2 w-5 h-5" />
                  {slide.secondaryButton}
                </button>
              </motion.div>

              {/* Slide Indicators - Mobile */}
              <div className="flex lg:hidden space-x-2 mt-8">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'w-8 bg-[#d91f22]'
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: Media */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="relative w-full"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                {slide.mediaType === 'image' ? (
                  // Image Slide
                  <div className="relative w-full h-full group cursor-pointer">
                    <img
                      src={slide.mediaSrc}
                      alt={slide.mediaAlt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-6">
                      <p className="text-white font-bold text-lg md:text-xl mb-1">
                        {slide.mediaCaption}
                      </p>
                      <p className="text-gray-300 text-sm">
                        {slide.mediaDescription}
                      </p>
                    </div>
                  </div>
                ) : (
                  // Video Slide
                  <div
                    className="relative w-full h-full group cursor-pointer"
                    onClick={() => openVideo(slide.videoId!)}
                  >
                    <img
                      src={slide.mediaSrc}
                      alt="Video thumbnail"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-16 h-16 bg-[#d91f22] rounded-full flex items-center justify-center pl-1 shadow-xl">
                          <Play className="w-8 h-8 text-white fill-current" />
                        </div>
                      </div>
                    </div>

                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white font-bold text-lg md:text-xl">
                        {slide.mediaCaption}
                      </p>
                      <p className="text-gray-300 text-sm">
                        {slide.mediaDescription}
                      </p>
                    </div>
                  </div>
                )}

                {/* Slide Indicators - Desktop (on image) */}
                <div className="hidden lg:flex absolute bottom-4 left-1/2 -translate-x-1/2 space-x-2 z-20">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? 'w-8 bg-white'
                          : 'w-2 bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-[-20px] right-[-20px] w-full h-full border-2 border-[#d91f22]/20 rounded-2xl"></div>
              <div className="absolute -z-10 bottom-[-20px] left-[-20px] w-full h-full bg-[#252872]/5 rounded-2xl"></div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && activeVideoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeVideo}
          >
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10 group"
            >
              <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            <div
              className="w-full max-w-5xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-2xl shadow-2xl"
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}