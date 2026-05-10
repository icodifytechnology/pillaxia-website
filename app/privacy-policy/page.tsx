import type { Metadata } from 'next';
import { JsonLd } from '@/src/components/json-ld';
import { PrivacyPage } from '@/src/content/LegalPages';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Pillaxia collects, uses, and protects your personal and health data. GDPR-compliant, HIPAA-aligned, with encrypted servers in Ireland. Data is never sold.',
  alternates: { canonical: 'https://pillaxia.com/privacy' },
  robots: { index: true, follow: true },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What personal information does Pillaxia collect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pillaxia collects information you provide directly, including your name, email address, and professional credentials when registering. For patients, health-related data such as medication schedules and symptom logs may be collected as inputted by you or your healthcare provider.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Pillaxia sell personal data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Pillaxia does not sell personal information to third parties. Patient data is only shared with authorised healthcare providers and family members as explicitly permitted by the patient through role-based access controls.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Pillaxia protect my data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pillaxia stores all personal and health-related data on secure, encrypted servers located in Ireland. The platform uses GDPR-compliant, consent-driven architecture with role-based access controls and HIPAA-aligned data handling practices.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is my data used by Pillaxia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your data is used to provide medication reminders, symptom tracking, and care coordination services. It is also used to maintain and improve the platform, send service-related communications, and generate anonymised usage insights.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Pillaxia data stored?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All Pillaxia data is stored on encrypted servers located in Ireland, within the European Union, in full compliance with GDPR requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I request deletion of my Pillaxia data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Under GDPR, you have the right to request access, correction, or deletion of your personal data at any time by contacting connect@pillaxia.com.',
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
      name: 'Privacy Policy',
      item: 'https://pillaxia.com/privacy',
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <PrivacyPage />
    </>
  );
}