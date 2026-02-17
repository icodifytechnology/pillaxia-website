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
    setIsVideoModalOpen(false);
    setActiveVideoId(null);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full bg-gradient-to-br from-[#F8FAFC] via-white to-blue-50/30 py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Enhanced Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-gradient-to-tr from-red-100/30 to-orange-100/30 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-blue-100/20 to-red-100/20 rounded-full blur-3xl opacity-40" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center transition-all z-30 shadow-xl hover:shadow-2xl group border border-gray-200/50"
      >
        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-[#252872] group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center transition-all z-30 shadow-xl hover:shadow-2xl group border border-gray-200/50"
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
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-1.5 shadow-lg mb-8"
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
                <button className="w-full sm:w-auto group bg-gradient-to-r from-[#d91f22] to-[#b91c1c] hover:from-[#b91c1c] hover:to-[#991b1b] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center">
                  {slide.primaryButton}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto group bg-white/80 backdrop-blur-sm border-2 border-[#d91f22] text-[#d91f22] hover:bg-[#d91f22] hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center">
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

            {/* RIGHT COLUMN: Modern Media Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="relative w-full"
            >
              {/* Main Media Container */}
              <div className="relative">
                {/* Floating Card Design */}
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50 backdrop-blur-sm">
                  {/* Inner Content */}
                  <div className="relative aspect-video overflow-hidden">
                    {slide.mediaType === 'image' ? (
                      // Modern Image Display
                      <div className="relative w-full h-full group">
                        <img
                          src={slide.mediaSrc}
                          alt={slide.mediaAlt}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#252872]/80 via-transparent to-[#d91f22]/40 opacity-60"></div>
                        
                        {/* Floating Info Card */}
                        {/* <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-gray-200/50 transform transition-transform group-hover:translate-y-[-4px]">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-[#252872] font-bold text-xl mb-1">
                                  {slide.mediaCaption}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                  {slide.mediaDescription}
                                </p>
                              </div>
                              <div className="bg-[#d91f22]/10 p-2 rounded-full">
                                <PlayCircle className="w-6 h-6 text-[#d91f22]" />
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* Decorative Corner Elements */}
                        <div className="absolute top-4 right-4 w-20 h-20 border-t-4 border-r-4 border-white/30 rounded-tr-3xl"></div>
                        <div className="absolute bottom-4 left-4 w-20 h-20 border-b-4 border-l-4 border-white/30 rounded-bl-3xl"></div>
                      </div>
                    ) : (
                      // Modern Video Display with Autoplay
                      <div className="relative w-full h-full group">
                        {/* Embedded YouTube Video with Autoplay */}
                        <iframe
                          ref={videoRef}
                          src={`https://www.youtube.com/embed/${slide.videoId}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${slide.videoId}&controls=0&modestbranding=1&rel=0&showinfo=0`}
                          title="Video player"
                          className="w-full h-full object-cover"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>

                        {/* Video Controls Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                        {/* Mute/Unmute Button */}
                        <button
                          onClick={toggleMute}
                          className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl z-10 group/btn"
                        >
                          {isMuted ? (
                            <VolumeX className="w-5 h-5 text-[#252872] group-hover/btn:scale-110 transition-transform" />
                          ) : (
                            <Volume2 className="w-5 h-5 text-[#252872] group-hover/btn:scale-110 transition-transform" />
                          )}
                        </button>

                        {/* Full Screen Button */}
                        <button
                          onClick={() => openVideo(slide.videoId!)}
                          className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm hover:bg-white px-6 py-3 rounded-full flex items-center space-x-2 transition-all shadow-lg hover:shadow-xl z-10 group/expand"
                        >
                          <Play className="w-4 h-4 text-[#d91f22]" />
                          <span className="text-sm font-semibold text-[#252872]">Expand</span>
                        </button>

                        {/* Floating Info Card */}
                        {/* <div className="absolute bottom-6 left-6 max-w-[60%]">
                          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-gray-200/50">
                            <div className="flex items-start space-x-3">
                              <div className="bg-[#d91f22]/10 p-2 rounded-full flex-shrink-0">
                                <Play className="w-5 h-5 text-[#d91f22]" />
                              </div>
                              <div>
                                <h3 className="text-[#252872] font-bold text-lg mb-1">
                                  {slide.mediaCaption}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                  {slide.mediaDescription}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* Live Indicator */}
                        <div className="absolute top-6 left-6 flex items-center space-x-2 bg-red-500/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                          <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                          </span>
                          <span className="text-white text-xs font-bold uppercase tracking-wide">Playing</span>
                        </div>
                      </div>
                    )}

                    {/* Slide Indicators - Desktop (Floating) */}
                    <div className="hidden lg:flex absolute top-6 left-1/2 -translate-x-1/2 space-x-2 z-20 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                      {slides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentSlide
                              ? 'w-8 bg-[#d91f22]'
                              : 'w-2 bg-gray-400 hover:bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="h-1 bg-gradient-to-r from-[#252872] via-[#d91f22] to-[#252872]"></div>
                </div>

                {/* Floating Decorative Elements */}
                <div className="absolute -z-10 top-[-12px] right-[-12px] w-full h-full border-2 border-[#d91f22]/20 rounded-3xl"></div>
                <div className="absolute -z-20 bottom-[-24px] left-[-24px] w-full h-full bg-gradient-to-br from-[#252872]/10 to-[#d91f22]/10 rounded-3xl blur-xl"></div>
                
                {/* Corner Accents */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#d91f22]/20 to-transparent rounded-full blur-2xl -z-10"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-[#252872]/20 to-transparent rounded-full blur-2xl -z-10"></div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enhanced Video Modal */}
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
    </section>
  );
}