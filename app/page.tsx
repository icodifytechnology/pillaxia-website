import type { Metadata } from 'next';
import { JsonLd } from '@/src/components/json-ld';
import { LandingPage } from '@/src/content/LandingPage';

export const metadata: Metadata = {
  title: 'What Is Pillaxia? | AI Medication Management for Clinics & Patients',
  description:
    'Pillaxia is an AI-powered connected care platform that helps hospitals, clinics, and pharmacies manage patient medication through Angela AI, PillaxiaRx, and CareHub. Free on iOS & Android.',
  alternates: { canonical: 'https://pillaxia.com/' },
  openGraph: { url: 'https://pillaxia.com/' },
  keywords: [
    'medication management',
    'chronic care management',
    'medication adherence',
    'AI healthcare',
    'clinical dashboard',
    'patient app',
    'caregiver coordination',
    'PillaxiaRx',
    'Angela AI',
    'CareHub',
  ],
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
        text: 'Pillaxia is a connected care infrastructure platform that bridges patients, clinicians, families, and pharmacies through one trusted digital platform focused on chronic and long-term health management.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is Pillaxia designed for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pillaxia is built for hospitals, clinics, pharmacies, care homes, and government health agencies. End users — patients, caregivers, and families — benefit directly through the apps licensed by those organisations.',
      },
    },
    {
      '@type': 'Question',
      name: 'What products does Pillaxia offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pillaxia offers three purpose-built experiences: PillaxiaRx for clinicians and hospitals, the Pillaxia App for patients and families, and CareHub for shared care coordination across all stakeholders.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Pillaxia app free to download?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Pillaxia patient app is free to download on both iOS (App Store) and Android (Google Play) and is rated 4.8 by users.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Pillaxia GDPR and HIPAA compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Pillaxia is built with compliance by design, including GDPR-aligned, consent-driven architecture with role-based access controls and HIPAA-compliant data handling.',
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
      name: 'How does the CareHub feature work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CareHub enables shared care coordination between patients, clinicians, and trusted supporters (such as family members), with clear permission boundaries and full auditability built into every interaction.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Pillaxia integrate with existing hospital systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pillaxia uses an API-first, interoperable architecture designed to complement and integrate with existing Electronic Health Records (EHR) and clinical workflows without disrupting them.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Pillaxia cost for healthcare providers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pillaxia offers custom pricing for healthcare organisations based on scale and use case. The patient-facing app is free. Contact connect@pillaxia.com or book a demo to learn more.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Angela AI in Pillaxia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Angela AI is Pillaxia\'s intelligent medication assistant that provides personalised reminders, drug interaction checks, and adherence insights to patients and clinicians in real time.',
      },
    },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Pillaxia — AI Medication Management for Clinics & Patients',
  url: 'https://pillaxia.com',
  description:
    'Pillaxia is an AI-powered connected care platform that helps hospitals, clinics, and pharmacies manage patient medication adherence.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Pillaxia',
    url: 'https://pillaxia.com',
  },
  about: {
    '@type': 'Thing',
    name: 'Medication Management',
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Healthcare Providers, Patients, Caregivers',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={webPageSchema} />
      <LandingPage />
    </>
  );
}