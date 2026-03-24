import type { Metadata } from 'next'
import Script from 'next/script'
import BlogDetailPage from "@/src/content/BlogDetailPage"
import { FALLBACK_BLOG_POSTS } from '@/src/lib/api'

// Helper function to get blog post by slug (server-safe)
function getBlogPostBySlug(slug: string) {
  return FALLBACK_BLOG_POSTS.find((post) => post.slug === slug) || null
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    }
  }
  
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://pillaxia.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      url: `https://pillaxia.com/blog/${slug}`,
      images: post.imageUrl ? [{ 
        url: post.imageUrl, 
        width: 1200, 
        height: 630 
      }] : [],
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.imageUrl ? [post.imageUrl] : [],
    },
  }
}

export default async function Page({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  
  return (
    <>
      {/* BlogPosting Schema */}
      {post && (
        <Script
          id="blog-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.excerpt,
              author: {
                '@type': 'Organization',
                name: 'Pillaxia',
                url: 'https://pillaxia.com'
              },
              publisher: {
                '@type': 'Organization',
                name: 'Pillaxia',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://pillaxia.com/logo.png'
                }
              },
              datePublished: post.date,
              url: `https://pillaxia.com/blog/${slug}`,
              image: post.imageUrl
            })
          }}
        />
      )}
      <BlogDetailPage slug={slug} />
    </>
  )
}