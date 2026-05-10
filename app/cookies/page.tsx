import type { Metadata } from 'next';
import { JsonLd } from '@/src/components/json-ld';
import { CookiePolicyPage } from '@/src/content/LegalPages';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'How Pillaxia uses cookies and similar technologies to improve your experience. Learn about the types of cookies used and how to manage your preferences.',
  alternates: { canonical: 'https://pillaxia.com/cookies' },
  robots: { index: true, follow: true },
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
      name: 'Cookie Policy',
      item: 'https://pillaxia.com/cookies',
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <CookiePolicyPage />
    </>
  );
}