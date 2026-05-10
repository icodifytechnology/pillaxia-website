import { FALLBACK_BLOG_POSTS } from '@/src/lib/blog'
import { getAuthorSlugs } from '@/src/lib/schemas/author'
import { MetadataRoute } from 'next'

const BASE_URL = 'https://pillaxia.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const basePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/press`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/book-demo`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    // New pages from audit
    {
      url: `${BASE_URL}/faqs`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/chronic-care-management`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/authors`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  const blogPages: MetadataRoute.Sitemap = FALLBACK_BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const authorPages: MetadataRoute.Sitemap = getAuthorSlugs().map((slug) => ({
    url: `${BASE_URL}/authors/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.4,
  }))

  return [...basePages, ...blogPages, ...authorPages]
}