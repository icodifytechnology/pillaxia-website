import type { Metadata } from 'next'
import Script from 'next/script'
import { TermsPage } from '@/src/content/LegalPages'

export const metadata: Metadata = {
  title: 'Terms of Service — Pillaxia',
  description: 'Terms and conditions governing the use of Pillaxia platform and services.',
  alternates: { canonical: 'https://pillaxia.com/terms' },
  robots: { index: false },
}

export default function Page() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is Pillaxia a healthcare provider?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Pillaxia is a technology provider, not a healthcare provider. Its services do not replace professional medical advice, diagnosis, or treatment."
                }
              },
              {
                "@type": "Question",
                "name": "What am I agreeing to when I use Pillaxia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "By accessing or using the Pillaxia platform, you agree to be bound by the Terms of Service and all applicable laws and regulations."
                }
              },
              {
                "@type": "Question",
                "name": "Am I responsible for my Pillaxia account security?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. You are responsible for safeguarding your password and for all activities or actions carried out under your account credentials."
                }
              },
              {
                "@type": "Question",
                "name": "What is prohibited on the Pillaxia platform?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Users must not use Pillaxia's services for anything unlawful, misleading, or fraudulent, nor help anyone else misuse the platform in any such way."
                }
              }
            ]
          })
        }}
      />
      <TermsPage />
    </>
  )
}