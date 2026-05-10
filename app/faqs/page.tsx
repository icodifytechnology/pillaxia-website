import type { Metadata } from 'next';
import { JsonLd } from '@/src/components/json-ld';
import { FaqPage } from '@/src/content/FaqPage';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions About Pillaxia',
  description:
    'Find answers to common questions about Pillaxia — what it is, how it works, GDPR and HIPAA compliance, pricing, AI features, caregiver support, and data privacy.',
  alternates: { canonical: 'https://pillaxia.com/faqs' },
  keywords:
    'Pillaxia FAQ, medication management questions, AI health companion, medication reminders, symptom tracking, caregivers, GDPR, HIPAA, Angela AI, CareHub, PillaxiaRx',
  openGraph: {
    title: 'Frequently Asked Questions | Pillaxia',
    description:
      'Answers to common questions about Pillaxia — AI medication management, reminders, caregiver coordination, data privacy, and compliance.',
    type: 'website',
    url: 'https://pillaxia.com/faqs',
    images: [{ url: 'https://pillaxia.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | Pillaxia',
    description:
      'Answers to common questions about Pillaxia — AI medication management, reminders, caregiver coordination, and data privacy.',
    images: ['/og-image.png'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Pillaxia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pillaxia is an AI-powered medication management platform that helps patients, caregivers, and healthcare providers track medications, set reminders, and manage health regimens through three products: the Pillaxia patient app, PillaxiaRx for clinicians, and CareHub for shared care coordination.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Pillaxia a replacement for medical advice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Pillaxia is a technology platform designed to support medication management. It is not a healthcare provider and does not replace professional medical advice, diagnosis, or treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Pillaxia protect my data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pillaxia stores all personal and health-related data on secure, encrypted servers located in Ireland, in full compliance with GDPR. The platform uses role-based access controls and HIPAA-compliant data handling. Data is never sold or shared without explicit consent.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who can use Pillaxia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pillaxia is designed for patients of all ages, family caregivers, and healthcare institutions including hospitals, clinics, pharmacies, care homes, and government health agencies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Pillaxia app free to download?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Pillaxia patient app is free to download on both iOS (App Store) and Android (Google Play). Healthcare organisations can contact Pillaxia for custom pricing on PillaxiaRx and CareHub.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Angela AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Angela is Pillaxia\'s AI-powered intelligent health assistant. She provides voice-enabled medication reminders, symptom logging, drug interaction checks, and personalised adherence insights to patients and clinicians in real time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the CareHub feature work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CareHub enables shared care coordination between patients, clinicians, and trusted supporters such as family members. It includes role-based permissions (view, edit, approve), smart alerts for missed doses and refills, and a full audit trail for every interaction.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Pillaxia integrate with existing hospital systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Pillaxia uses an API-first, interoperable architecture designed to complement and integrate with existing Electronic Health Records (EHR) and clinical workflows without disrupting them.',
      },
    },
    {
      '@type': 'Question',
      name: 'In which countries does Pillaxia operate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pillaxia currently has early healthcare partners across Ireland and Nigeria, and its platform is designed to scale across public and private healthcare systems globally, including the Middle East.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Pillaxia track symptoms alongside medication?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Pillaxia includes a symptom and side-effect tracker that lets patients correlate how they feel with the medications they take. This data can be shared with healthcare professionals to optimise treatment plans.',
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
      name: 'FAQ',
      item: 'https://pillaxia.com/faqs',
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <FaqPage />
    </>
  );
}