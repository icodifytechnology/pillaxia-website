import type { Metadata } from 'next';
import { JsonLd } from '@/src/components/json-ld';
import { AboutPage } from '@/src/content/AboutPage';

export const metadata: Metadata = {
  title: 'Who Founded Pillaxia and Why Does It Exist?',
  description:
    'Pillaxia was founded by Stephanie Esambe from firsthand chronic illness experience. Learn about the mission to close the gap in chronic care, with partnerships in Ireland and Nigeria.',
  alternates: { canonical: 'https://pillaxia.com/about' },
  openGraph: {
    title: 'About Pillaxia — Our Mission & Story',
    description:
      'Founded from firsthand chronic illness experience. Pillaxia bridges the gap between clinical visits and continuous care for patients, clinicians, and caregivers.',
    type: 'website',
    url: 'https://pillaxia.com/about',
    images: [{ url: 'https://pillaxia.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Pillaxia — Our Mission & Story',
    description:
      'Founded from firsthand chronic illness experience to close the gap in chronic care.',
    images: ['/og-image.png'],
  },
};

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Pillaxia',
  url: 'https://pillaxia.com/about',
  description:
    'The story behind Pillaxia — founded from firsthand chronic illness experience to close the gap between clinical visits and continuous care.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Pillaxia',
    url: 'https://pillaxia.com',
    logo: 'https://pillaxia.com/logo.png',
    foundingDate: '2023',
    foundingLocation: {
      '@type': 'Place',
      name: 'Louth, Ireland',
    },
    founder: {
      '@type': 'Person',
      name: 'Stephanie Esambe',
      jobTitle: 'Founder & CEO',
      url: 'https://www.linkedin.com/in/stephanie-esambe/',
      worksFor: {
        '@type': 'Organization',
        name: 'Pillaxia',
      },
    },
    areaServed: [
      { '@type': 'Country', name: 'Ireland' },
      { '@type': 'Country', name: 'Nigeria' },
    ],
    funder: [
      { '@type': 'Organization', name: 'InterTrade Ireland' },
      { '@type': 'Organization', name: 'HIHI' },
      { '@type': 'Organization', name: 'New Frontiers Enterprise Ireland' },
    ],
    partner: [
      {
        '@type': 'Organization',
        name: 'Apex-Pitch Medical',
        description: 'Hospital network integration across Nigeria',
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
      name: 'Who founded Pillaxia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pillaxia was founded by Stephanie Esambe after firsthand experience of how isolating, fragmented, and overwhelming chronic illness can be — both as a patient and as a caregiver.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why was Pillaxia founded?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pillaxia was founded to close the gap between clinical visits and continuous care. It was built from the experience that chronic illness management is fragmented, isolating, and overwhelming for both patients and caregivers.',
      },
    },
    {
      '@type': 'Question',
      name: "What is Pillaxia's mission?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pillaxia's mission is to revolutionise chronic illness management by building a connected healthcare ecosystem that empowers patients, supports clinicians, and enables more proactive and preventative models of care through AI and digital technology.",
      },
    },
    {
      '@type': 'Question',
      name: "What is Pillaxia's long-term vision?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pillaxia's vision is to generate longitudinal health insights by combining medication data, symptom tracking, and behavioural analytics — helping healthcare systems transition from reactive treatment to proactive, preventative, data-driven care.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is PillaxiaCare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "PillaxiaCare is Pillaxia's community initiative dedicated to supporting patients, caregivers, and healthcare professionals through education, workshops, and outreach programmes in Nigeria and Ireland.",
      },
    },
    {
      '@type': 'Question',
      name: "Who are Pillaxia's key partners and supporters?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pillaxia is supported by InterTrade Ireland, HIHI, and the New Frontiers Enterprise Ireland programme. It also partners with Apex-Pitch Medical for hospital network integration across Nigeria.',
      },
    },
    {
      '@type': 'Question',
      name: "What are Pillaxia's core values?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pillaxia's five core values are Empathy, Empowerment, Collaboration, Inclusivity, and Innovation — each guiding how the platform is designed and how it serves patients and healthcare providers.",
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
      name: 'About',
      item: 'https://pillaxia.com/about',
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={aboutPageSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <AboutPage />
    </>
  );
}