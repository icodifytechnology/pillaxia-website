import { FaqPage } from '@/src/content/FaqPage'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'FAQ — Support & Frequently Asked Questions | Pillaxia',
  description:
    'Find answers to common questions about Pillaxia — AI-powered medication management, reminders, caregiver support, data privacy, and more.',
  alternates: { canonical: 'https://pillaxia.com/faqs' },
  keywords:
    'Pillaxia, FAQ, AI health companion, medication reminders, symptom tracking, caregivers, health management',
  openGraph: {
    title: 'FAQ | Pillaxia',
    description:
      "Frequently Asked Questions about Pillaxia's AI health companion features and support.",
    type: 'website',
    url: 'https://pillaxia.com/faqs',
    images: [{ url: '/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Pillaxia',
    description:
      "Frequently Asked Questions about Pillaxia's AI health companion features and support.",
    images: ['/logo.png'],
  },
}

export default function Page() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is Pillaxia?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Pillaxia is an AI-powered medication management platform that helps patients, caregivers, and healthcare providers track medications, set reminders, and manage health regimens.',
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
                  text: 'Pillaxia stores all personal and health-related data on secure, encrypted servers located in Ireland, in full compliance with GDPR. Data is never sold or shared without consent.',
                },
              },
              {
                '@type': 'Question',
                name: 'Who can use Pillaxia?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Pillaxia is designed for patients of all ages, family caregivers, and healthcare institutions including hospitals, clinics, and pharmacies.',
                },
              },
            ],
          }),
        }}
      />
      <FaqPage />
    </>
  )
}