import type { Metadata } from 'next';
import { JsonLd } from '@/src/components/json-ld';
import BlogDetailPage from '@/src/content/BlogDetailPage';
import { FALLBACK_BLOG_POSTS } from '@/src/lib/blog';

function getBlogPostBySlug(slug: string) {
  return FALLBACK_BLOG_POSTS.find((post) => post.slug === slug) || null;
}

export async function generateStaticParams() {
  return FALLBACK_BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://pillaxia.com/blogs/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      url: `https://pillaxia.com/blogs/${slug}`,
      images: post.imageUrl
        ? [{ url: post.imageUrl, width: 1200, height: 630 }]
        : [],
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.imageUrl ? [post.imageUrl] : [],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <BlogDetailPage />;
  }

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    // If your posts have an updated date, add it:
    // dateModified: post.updatedAt,
    url: `https://pillaxia.com/blogs/${slug}`,
    image: post.imageUrl
      ? {
        '@type': 'ImageObject',
        url: post.imageUrl,
        width: 1200,
        height: 630,
      }
      : undefined,
    // Item 9: Author as Person, not Organization
    author: {
      '@type': 'Person',
      name: post.author,
      // Link to author bio page once you create /authors/[slug]
      // url: `https://pillaxia.com/authors/${post.authorSlug}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Pillaxia',
      url: 'https://pillaxia.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pillaxia.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://pillaxia.com/blogs/${slug}`,
    },
    isPartOf: {
      '@type': 'Blog',
      name: 'Pillaxia Blog',
      url: 'https://pillaxia.com/blogs',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://pillaxia.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://pillaxia.com/blogs',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://pillaxia.com/blogs/${slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={blogPostingSchema} />
      <JsonLd data={breadcrumbSchema} />
      <BlogDetailPage />
    </>
  );
}