import type { Metadata } from 'next';
import { JsonLd } from '@/src/components/json-ld';
import BlogPage from '@/src/content/BlogPage';

export const metadata: Metadata = {
  title: 'What Are the Latest Insights on Chronic Care & Digital Health?',
  description:
    'Read expert insights on chronic care management, medication adherence, digital health innovation, and patient empowerment from clinicians and the Pillaxia team.',
  alternates: { canonical: 'https://pillaxia.com/blogs' },
  openGraph: {
    url: 'https://pillaxia.com/blogs',
    title: 'Pillaxia Blog — Chronic Care & Digital Health Insights',
    description:
      'Expert articles on medication adherence, chronic care management, and digital health innovation.',
  },
};

const blogListSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Pillaxia Blog',
  url: 'https://pillaxia.com/blogs',
  description:
    'Expert insights on chronic care, medication adherence, digital health, and patient empowerment.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Pillaxia',
    url: 'https://pillaxia.com',
  },
  about: [
    { '@type': 'Thing', name: 'Chronic Care Management' },
    { '@type': 'Thing', name: 'Digital Health' },
    { '@type': 'Thing', name: 'Medication Adherence' },
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Pillaxia',
    url: 'https://pillaxia.com',
    logo: 'https://pillaxia.com/logo.png',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What topics does the Pillaxia blog cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Pillaxia blog covers insights on chronic care, digital health, innovation, and patient stories — contributed by the Pillaxia team and collaborators.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I stay updated with Pillaxia\'s latest articles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can subscribe to Pillaxia\'s newsletter directly from the blog page to receive the latest content on chronic care, digital health, and patient empowerment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I filter Pillaxia blog posts by topic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The blog offers category filters including Chronic Care, Digital Health, Innovation, and Patient Stories so you can browse content relevant to your interests.',
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={blogListSchema} />
      <JsonLd data={faqSchema} />
      <BlogPage />
    </>
  );
}