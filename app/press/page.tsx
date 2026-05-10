import type { Metadata } from 'next';
import { JsonLd } from '@/src/components/json-ld';
import { PressPage } from '@/src/content/PressPage';

export const metadata: Metadata = {
  title: 'Press & Media — Pillaxia Newsroom',
  description:
    'Latest press releases, news coverage, and media assets from Pillaxia. For press enquiries contact connect@pillaxia.com.',
  alternates: { canonical: 'https://pillaxia.com/press' },
  openGraph: {
    title: 'Press & Media | Pillaxia Newsroom',
    description:
      'Press releases, news coverage, and media resources from Pillaxia — the AI-powered medication management platform.',
    type: 'website',
    url: 'https://pillaxia.com/press',
    images: [{ url: 'https://pillaxia.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Press & Media | Pillaxia Newsroom',
    description:
      'Press releases, news coverage, and media resources from Pillaxia.',
    images: ['/og-image.png'],
  },
};

const newsroomSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Pillaxia Press & Media Newsroom',
  url: 'https://pillaxia.com/press',
  description:
    'Press releases, news coverage, and media assets from Pillaxia.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Pillaxia',
    url: 'https://pillaxia.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Pillaxia',
    url: 'https://pillaxia.com',
    logo: 'https://pillaxia.com/logo.png',
    email: 'connect@pillaxia.com',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How can journalists or media contact Pillaxia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Press and media enquiries, interview requests, and requests for media assets can be directed to connect@pillaxia.com.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I find Pillaxia\'s latest press releases and news coverage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pillaxia\'s Press & Media page at pillaxia.com/press hosts the latest press releases, news coverage, and event announcements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Pillaxia provide media assets for journalists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Media assets including logos, product screenshots, and brand materials are available upon request. Contact connect@pillaxia.com.',
      },
    },
  ],
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
      name: 'Press & Media',
      item: 'https://pillaxia.com/press',
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={newsroomSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <PressPage />
    </>
  );
}