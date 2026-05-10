import type { Metadata } from 'next';
import { JsonLd } from '@/src/components/json-ld';
import { BookDemoPage } from '@/src/content/BookDemoPage';

export const metadata: Metadata = {
  title: 'Book a Demo — See PillaxiaRx and CareHub in Action',
  description:
    'Schedule a free 30-minute demo of PillaxiaRx and CareHub tailored to your organisation. Built for hospitals, clinics, pharmacies, and care homes in Ireland, Nigeria, and beyond.',
  alternates: { canonical: 'https://pillaxia.com/book-demo' },
  openGraph: {
    title: 'Book a Demo | Pillaxia',
    description:
      'See how PillaxiaRx and CareHub streamline medication management for healthcare organisations. Schedule a free 30-minute walkthrough.',
    type: 'website',
    url: 'https://pillaxia.com/book-demo',
    images: [{ url: 'https://pillaxia.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Demo | Pillaxia',
    description:
      'Schedule a free demo of PillaxiaRx and CareHub for your healthcare organisation.',
    images: ['/og-image.png'],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Pillaxia Product Demo',
  description:
    'A free 30-minute walkthrough of PillaxiaRx (clinical dashboard) and CareHub (shared care coordination) tailored to hospitals, clinics, pharmacies, and care homes.',
  provider: {
    '@type': 'Organization',
    name: 'Pillaxia',
    url: 'https://pillaxia.com',
  },
  serviceType: 'Product Demonstration',
  areaServed: [
    { '@type': 'Country', name: 'Ireland' },
    { '@type': 'Country', name: 'Nigeria' },
  ],
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    description: 'Free 30-minute product demo',
  },
  url: 'https://pillaxia.com/book-demo',
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
      name: 'Book a Demo',
      item: 'https://pillaxia.com/book-demo',
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <BookDemoPage />
    </>
  );
}