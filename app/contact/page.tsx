import type { Metadata } from 'next'
import Script from 'next/script'
import { ContactPage } from '@/src/content/ContactPage'

export const metadata: Metadata = {
  title: 'Contact Us — Get in Touch with Pillaxia',
  description: 'Contact the Pillaxia team. Based in Louth, Ireland with operations in Nigeria. For hospitals, clinics, pharmacies, investors, and press enquiries.',
  alternates: { canonical: 'https://pillaxia.com/contact' },
}

export default function Page() {
  return (
    <>
      {/* Organization Schema for Local Business */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Pillaxia',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Louth',
              addressCountry: 'IE'
            },
            email: 'connect@pillaxia.com',
            url: 'https://pillaxia.com/contact'
          })
        }}
      />
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
                "name": "How can I contact Pillaxia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can reach Pillaxia at connect@pillaxia.com or by filling in the contact form on the website. The team is based in Louth, Ireland with a presence in Nigeria."
                }
              },
              {
                "@type": "Question",
                "name": "Can I book a product demo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. You can schedule a free 30-minute walkthrough of Pillaxia tailored to your organisation's needs by visiting the Book a Demo page."
                }
              },
              {
                "@type": "Question",
                "name": "Who can reach out through the contact form?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The contact form is open to hospitals, clinics, pharmacies, investors, press and media representatives, and anyone else interested in connecting with the Pillaxia team."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Pillaxia headquartered?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pillaxia is headquartered in Louth, Ireland, with operational presence in Nigeria as well."
                }
              }
            ]
          })
        }}
      />
      <ContactPage />
    </>
  )
}