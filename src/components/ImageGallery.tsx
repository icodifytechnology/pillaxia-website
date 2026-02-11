'use client'

import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
    title: 'Science Lab',
    category: 'Academics'
  },
  {
    src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
    title: 'Library Session',
    category: 'Study'
  },
  {
    src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
    title: 'Graduation Day',
    category: 'Events'
  },
  {
    src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
    title: 'Sports Meet',
    category: 'Sports'
  },
  {
    src: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80',
    title: 'Art Exhibition',
    category: 'Culture'
  },
  {
    src: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=800&q=80',
    title: 'Field Trip',
    category: 'Activities'
  },
  {
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    title: 'Annual Function',
    category: 'Events'
  },
  {
    src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
    title: 'Workshop',
    category: 'Learning'
  },
  {
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    title: 'Team Building',
    category: 'Activities'
  },
  {
    src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    title: 'Lecture Hall',
    category: 'Academics'
  },
  {
    src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80',
    title: 'Cultural Fest',
    category: 'Culture'
  },
  {
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
    title: 'Basketball Match',
    category: 'Sports'
  }
];

export function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-12 md:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="text-[#d91f22] font-semibold text-sm md:text-base uppercase tracking-wider mb-2 block">
              Our Gallery
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#252872] mb-4">
              Gyansewa Life Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#252872] to-[#d91f22] mx-auto rounded-full"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base"
          >
            Glimpses of activities, events, and learning moments that make our gyansewa vibrant.
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: "-50px"
              }}
              transition={{
                delay: index * 0.05,
                duration: 0.4
              }}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-5">
                {/* Category Badge - Top */}
                <div className="flex justify-end">
                  <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#252872] text-xs font-bold rounded-full shadow-md transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {img.category}
                  </span>
                </div>

                {/* Title & Icon - Bottom */}
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-base md:text-lg font-bold mb-2 line-clamp-2 drop-shadow-lg">
                    {img.title}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-[#d91f22] transition-all duration-300 shadow-lg">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                    
                    <span className="text-white/80 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Full
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-300 pointer-events-none"></div>
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
            className="fixed inset-0 bg-black/97 z-50 flex items-center justify-center p-3 md:p-6"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={closeLightbox}
              className="absolute top-3 right-3 md:top-6 md:right-6 w-11 h-11 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 z-10 group border border-white/20"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
            </motion.button>

            {/* Previous Button */}
            <motion.button
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 z-10 border border-white/20 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 md:w-7 md:h-7 text-white" />
            </motion.button>

            {/* Next Button */}
            <motion.button
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 z-10 border border-white/20 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 md:w-7 md:h-7 text-white" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-6xl w-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].title}
                  className="w-full max-h-[85vh] object-contain rounded-xl md:rounded-2xl shadow-2xl"
                />
                
                {/* Image Info Overlay */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4 md:p-8 rounded-b-xl md:rounded-b-2xl"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 md:px-4 py-1.5 md:py-2 bg-[#d91f22] text-white text-xs md:text-sm font-bold rounded-full shadow-lg">
                      {images[selectedImage].category}
                    </span>
                  </div>
                  <h3 className="text-white text-xl md:text-3xl font-bold">
                    {images[selectedImage].title}
                  </h3>
                </motion.div>
              </div>
            </motion.div>

            {/* Image Counter */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/20"
            >
              <span className="text-white font-semibold text-sm md:text-base">
                {selectedImage + 1} / {images.length}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}