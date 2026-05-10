import type { Metadata } from 'next';
import { JsonLd } from '@/src/components/json-ld';
import { ContactPage } from '@/src/content/ContactPage';

export const metadata: Metadata = {
  title: 'How Can I Contact Pillaxia?',
  description:
    'Contact the Pillaxia team for demos, partnerships, press enquiries, or support. Headquartered in Louth, Ireland with operations in Nigeria.',
  alternates: { canonical: 'https://pillaxia.com/contact' },
  openGraph: {
    title: 'Contact Pillaxia',
    description:
      'Get in touch with the Pillaxia team — demos, partnerships, press, and support. Based in Louth, Ireland.',
    type: 'website',
    url: 'https://pillaxia.com/contact',
    images: [{ url: 'https://pillaxia.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Pillaxia',
    description:
      'Get in touch for demos, partnerships, press enquiries, or support.',
    images: ['/og-image.png'],
  },
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Pillaxia',
  url: 'https://pillaxia.com/contact',
  description:
    'Contact Pillaxia for product demos, partnerships, press enquiries, or support.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Pillaxia',
    url: 'https://pillaxia.com',
    logo: 'https://pillaxia.com/logo.png',
    email: 'connect@pillaxia.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Louth',
      addressRegion: 'Leinster',
      addressCountry: 'IE',
    },
    areaServed: [
      { '@type': 'Country', name: 'Ireland' },
      { '@type': 'Country', name: 'Nigeria' },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'connect@pillaxia.com',
        description: 'Product demos and partnership enquiries',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'press',
        email: 'connect@pillaxia.com',
        description: 'Press and media enquiries',
      },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How can I contact Pillaxia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can reach Pillaxia at connect@pillaxia.com or by filling in the contact form at pillaxia.com/contact. The team is headquartered in Louth, Ireland with operations in Nigeria.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I book a product demo of Pillaxia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can schedule a free 30-minute walkthrough of PillaxiaRx and CareHub tailored to your organisation by visiting pillaxia.com/book-demo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who can reach out through the Pillaxia contact form?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The contact form is open to hospitals, clinics, pharmacies, care homes, investors, press and media representatives, and anyone interested in connecting with the Pillaxia team.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Pillaxia headquartered?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pillaxia is headquartered in Louth, Ireland, with operational presence in Nigeria. The platform is designed to scale across healthcare systems globally.',
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
      name: 'Contact',
      item: 'https://pillaxia.com/contact',
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <ContactPage />
    </>
  );
}