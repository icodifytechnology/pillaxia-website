import type { Metadata } from 'next'
import Script from 'next/script'
import BlogPage from '@/src/content/BlogPage'

export const metadata: Metadata = {
  title: 'Blog — Insights on Chronic Care & Digital Health',
  description: 'Insights on chronic care, medication adherence, digital health innovation, and patient empowerment from the Pillaxia team.',
  alternates: { canonical: 'https://pillaxia.com/blog' },
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
                "name": "What topics does the Pillaxia blog cover?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Pillaxia blog covers insights on chronic care, digital health, innovation, and patient stories — contributed by the Pillaxia team and collaborators."
                }
              },
              {
                "@type": "Question",
                "name": "How can I stay updated with Pillaxia's latest articles?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can subscribe to Pillaxia's newsletter directly from the blog page to receive the latest content on chronic care, digital health, and patient empowerment."
                }
              },
              {
                "@type": "Question",
                "name": "Can I filter Pillaxia blog posts by topic?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. The blog offers category filters including Chronic Care, Digital Health, Innovation, and Patient Stories so you can browse content relevant to your interests."
                }
              }
            ]
          })
        }}
      />
      <BlogPage />
    </>
  )
}