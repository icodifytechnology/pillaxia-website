'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';

const videos = {
  featured: {
    id: 'dQw4w9WgXcQ', // Replace with your YouTube video ID
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    title: 'The Future of Digital Education in Nepal',
    badge: 'Featured',
  },
  side: [
    {
      id: 'dQw4w9WgXcQ', // Replace with your YouTube video ID
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      title: 'Student Success Story: Batch 2023',
    },
    {
      id: 'dQw4w9WgXcQ', // Replace with your YouTube video ID
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      title: 'Student Success Story: Batch 2023',
    },
  ],
  bottom: [
    {
      id: 'dQw4w9WgXcQ', // Replace with your YouTube video ID
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    },
    {
      id: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    },
    {
      id: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    },
    {
      id: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    },
    {
      id: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    },
    {
      id: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    },
  ],
};

export function VideoGrid() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const openVideo = (videoId: string) => {
    setActiveVideo(videoId);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#252872] mb-12 text-center">
          In the Spotlight
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Large Main Video */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            onClick={() => openVideo(videos.featured.id)}
            className="md:col-span-2 relative aspect-video bg-gray-900 rounded-2xl overflow-hidden group cursor-pointer shadow-lg">

            <img
              src={videos.featured.thumbnail}
              alt={videos.featured.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center pl-1 shadow-xl">
                  <Play className="w-6 h-6 text-[#d91f22] fill-current" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
              <span className="text-[#d91f22] font-bold text-sm mb-2 block">
                {videos.featured.badge}
              </span>
              <h3 className="text-white text-2xl font-bold">
                {videos.featured.title}
              </h3>
            </div>
          </motion.div>

          {/* 2 Side Videos */}
          <div className="space-y-6 flex flex-col">
            {videos.side.map((video, i) =>
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: 20
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: i * 0.1
                }}
                onClick={() => openVideo(video.id)}
                className="relative flex-1 bg-gray-800 rounded-2xl overflow-hidden group cursor-pointer shadow-md">

                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-white fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-bold text-sm">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Bottom Row Small Videos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {videos.bottom.map((video, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.2 + i * 0.05
              }}
              onClick={() => openVideo(video.id)}
              className="aspect-video bg-gray-100 rounded-xl overflow-hidden relative group cursor-pointer hover:shadow-md transition-all">

              <img
                src={video.thumbnail}
                alt="Video thumbnail"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/10 transition-colors">
                <Play className="w-8 h-8 text-white drop-shadow-lg opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeVideo}
        >
          <button
            onClick={closeVideo}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10 group"
            aria-label="Close video"
          >
            <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          <div
            className="w-full max-w-6xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-2xl shadow-2xl"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}