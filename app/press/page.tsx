import type { Metadata } from 'next'
import { PressPage } from '@/src/content/PressPage'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Press & Media — Pillaxia Newsroom',
  description: 'Press releases, news coverage, and media assets from Pillaxia. For press enquiries contact press@pillaxia.com.',
  alternates: { canonical: 'https://pillaxia.com/press' },
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
                "name": "How can journalists or media contact Pillaxia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Press and media enquiries, interview requests, and requests for media assets can be directed to press@pillaxia.com."
                }
              },
              {
                "@type": "Question",
                "name": "Where can I find Pillaxia's latest press releases and news coverage?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pillaxia's Press & Media page hosts the latest press releases, news coverage, and event announcements, organised into tabs for easy browsing."
                }
              },
              {
                "@type": "Question",
                "name": "Does Pillaxia provide media assets for journalists?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Media assets are available upon request. Please contact the communications team at press@pillaxia.com to obtain logos, images, or brand materials."
                }
              }
            ]
          })
        }}
      />
      <PressPage />
    </>
  )
}