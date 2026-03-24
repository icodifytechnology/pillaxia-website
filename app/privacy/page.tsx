import type { Metadata } from 'next'
import { PrivacyPage } from '@/src/content/LegalPages'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Privacy Policy — Pillaxia',
  description: 'How Pillaxia collects, uses, and protects your personal data. GDPR compliant.',
  alternates: { canonical: 'https://pillaxia.com/privacy' },
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
                "name": "What personal information does Pillaxia collect?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pillaxia collects information you provide directly, including your name, email address, and professional credentials when registering. For patients, health-related data may be collected as inputted by you or your healthcare provider."
                }
              },
              {
                "@type": "Question",
                "name": "Does Pillaxia sell personal data?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Pillaxia does not sell personal information to third parties. Patient data is only shared with authorised healthcare providers and family members as explicitly permitted by the patient."
                }
              },
              {
                "@type": "Question",
                "name": "How does Pillaxia protect my data?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pillaxia implements appropriate technical and organisational security measures to protect personal information, though it acknowledges that no system can be made completely secure."
                }
              },
              {
                "@type": "Question",
                "name": "How is my data used by Pillaxia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Your data is used to provide, maintain, and improve services, process transactions, send service-related communications, and monitor usage trends and activities on the platform."
                }
              }
            ]
          })
        }}
      />
      <PrivacyPage />
    </>
  )
}