import type { Metadata } from 'next';
import { JsonLd } from '@/src/components/json-ld';
import { TermsPage } from '@/src/content/LegalPages';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms and conditions governing the use of the Pillaxia platform, PillaxiaRx, CareHub, and Angela AI. Pillaxia is a technology provider, not a healthcare provider.',
  alternates: { canonical: 'https://pillaxia.com/terms' },
  robots: { index: true, follow: true },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Pillaxia a healthcare provider?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Pillaxia is a technology provider, not a healthcare provider. Its services — including the Pillaxia app, PillaxiaRx, CareHub, and Angela AI — do not replace professional medical advice, diagnosis, or treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What am I agreeing to when I use Pillaxia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'By accessing or using the Pillaxia platform, you agree to be bound by the Terms of Service, the Privacy Policy at pillaxia.com/privacy, and all applicable laws and regulations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Am I responsible for my Pillaxia account security?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You are responsible for safeguarding your password and for all activities or actions carried out under your account credentials. Pillaxia recommends using a strong, unique password.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is prohibited on the Pillaxia platform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Users must not use Pillaxia\'s services for anything unlawful, misleading, or fraudulent. This includes misrepresenting medical data, sharing credentials, or helping anyone misuse the platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Pillaxia update its Terms of Service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Pillaxia reserves the right to modify these terms at any time. Users will be notified of material changes, and continued use of the platform after changes constitutes acceptance of the updated terms.',
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
      name: 'Terms of Service',
      item: 'https://pillaxia.com/terms',
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <TermsPage />
    </>
  );
}