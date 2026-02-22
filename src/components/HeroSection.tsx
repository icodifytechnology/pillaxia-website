'use client'

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, PlayCircle, Play, ChevronLeft, ChevronRight, X, Volume2, VolumeX } from 'lucide-react';

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
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<any>(false);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLIFrameElement>(null);

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
    setIsVideoModalOpen(null);
    setActiveVideoId(null);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all z-30 shadow-xl hover:shadow-2xl group border border-white/20"
      >
        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all z-30 shadow-xl hover:shadow-2xl group border border-white/20"
      >
        <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform" />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Media */}
          <div className="absolute inset-0 w-full h-full">
            {slide.mediaType === 'image' ? (
              // Full Background Image
              <div className="relative w-full h-full">
                <img
                  src={slide.mediaSrc}
                  alt={slide.mediaAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              // Full Background Video - Properly scaled to fill entire screen
              <div className="relative w-full h-full overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  style={{
                    width: "100vw",
                    height: "56.25vw",
                    minHeight: "100vh",
                    minWidth: "177.78vh",
                  }}
                >
                  <source src="/video.mp4" type="video/mp4" />
                </video>
              </div>
            )}
        </div>

        {/* Left-side Gradient Overlay - Only on the left where content is */}
        <div className="absolute inset-y-0 left-0 w-full md:w-3/5 lg:w-1/2 bg-gradient-to-r from-black/70 via-black/40 to-transparent pointer-events-none"></div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
            <div className="relative max-w-2xl">
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight drop-shadow-2xl"
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

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-100 mb-10 leading-relaxed max-w-xl drop-shadow-lg"
              >
                {slide.description}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <button className="group bg-gradient-to-r from-[#d91f22] to-[#b91c1c] hover:from-[#b91c1c] hover:to-[#991b1b] text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-[#d91f22]/50 transition-all transform hover:-translate-y-1 flex items-center justify-center">
                  {slide.primaryButton}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center">
                  <PlayCircle className="mr-2 w-5 h-5" />
                  {slide.secondaryButton}
                </button>
              </motion.div>

              {/* Slide Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex space-x-3 mt-12"
              >
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${index === currentSlide
                        ? 'w-12 bg-[#d91f22]'
                        : 'w-8 bg-white/40 hover:bg-white/60'
                      }`}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>

      {/* Video Modal */ }
  <AnimatePresence>
    {isVideoModalOpen && activeVideoId && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={closeVideo}
      >
        <button
          onClick={closeVideo}
          className="absolute top-4 right-4 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all z-10 group border border-white/20"
        >
          <X className="w-7 h-7 text-white group-hover:rotate-90 transition-transform duration-300" />
        </button>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="w-full max-w-6xl aspect-video"
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
            className="rounded-3xl shadow-2xl border-4 border-white/10"
          ></iframe>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
    </section >
  );
}