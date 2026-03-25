import { FALLBACK_BLOG_POSTS } from '@/src/lib/blog'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Base pages
  const basePages = [
    {
      url: 'https://pillaxia.com',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: 'https://pillaxia.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://pillaxia.com/blogs',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: 'https://pillaxia.com/press',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: 'https://pillaxia.com/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: 'https://pillaxia.com/book-demo',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]

  // Blog posts
  const blogPages = FALLBACK_BLOG_POSTS.map((post) => ({
    url: `https://pillaxia.com/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...basePages, ...blogPages]
}