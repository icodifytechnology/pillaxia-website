export interface Author {
  slug: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  linkedin?: string;
  twitter?: string;
  credentials?: string[];
}

/**
 * Replace with your actual data source (DB, CMS, etc.)
 * This is a static placeholder for the initial setup.
 */
const authors: Author[] = [
  {
    slug: 'dr-jane-doe',
    name: 'Dr. Jane Doe',
    title: 'Chief Medical Officer',
    bio: 'Dr. Jane Doe is a board-certified internist with over 15 years of experience in chronic care management. She leads clinical strategy at Pillaxia, ensuring the platform meets the highest standards of patient safety and clinical efficacy.',
    avatar: '/images/authors/dr-jane-doe.jpg',
    linkedin: 'https://linkedin.com/in/dr-jane-doe',
    credentials: ['MD', 'Board Certified Internal Medicine'],
  },
  {
    slug: 'john-smith',
    name: 'John Smith',
    title: 'Head of Product',
    bio: 'John Smith oversees product development at Pillaxia, focusing on building intuitive tools that make chronic care management accessible to patients and clinicians alike.',
    avatar: '/images/authors/john-smith.jpg',
    linkedin: 'https://linkedin.com/in/john-smith',
    credentials: [],
  },
];

export function getAuthors(): Author[] {
  return authors;
}

export function getAuthor(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

export function getAuthorSlugs(): string[] {
  return authors.map((a) => a.slug);
}

export function buildPersonSchema(author: Author) {
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'Person' as const,
    name: author.name,
    jobTitle: author.title,
    description: author.bio,
    image: `https://pillaxia.com${author.avatar}`,
    url: `https://pillaxia.com/authors/${author.slug}`,
    sameAs: [author.linkedin, author.twitter].filter(Boolean),
    worksFor: {
      '@type': 'Organization' as const,
      name: 'Pillaxia',
      url: 'https://pillaxia.com',
    },
    ...(author.credentials?.length && {
      hasCredential: author.credentials.map((c) => ({
        '@type': 'EducationalOccupationalCredential' as const,
        credentialCategory: c,
      })),
    }),
  };
}

export function buildArticleSchema(post: {
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: Author;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'Article' as const,
    headline: post.title,
    description: post.description,
    url: `https://pillaxia.com/blog/${post.slug}`,
    datePublished: post.publishedAt,
    ...(post.updatedAt && { dateModified: post.updatedAt }),
    ...(post.image && { image: `https://pillaxia.com${post.image}` }),
    author: {
      '@type': 'Person' as const,
      name: post.author.name,
      url: `https://pillaxia.com/authors/${post.author.slug}`,
    },
    publisher: {
      '@type': 'Organization' as const,
      name: 'Pillaxia',
      logo: {
        '@type': 'ImageObject' as const,
        url: 'https://pillaxia.com/logo.png',
      },
    },
  };
}
