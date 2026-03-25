import type { Metadata } from 'next'
import Script from 'next/script'
import { AboutPage } from '@/src/content/AboutPage'

export const metadata: Metadata = {
  title: 'About Us — Why Pillaxia Exists',
  description: 'Founded from firsthand chronic illness experience. Learn about our mission to close the gap in chronic care and partnerships in Ireland & Nigeria.',
  alternates: { canonical: 'https://pillaxia.com/about' },
}

export default function Page() {
  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            'name': '[Stephanie Esambe]', 
            'jobTitle': 'Founder & CEO',
            'worksFor': {
              '@type': 'Organization',
              'name': 'Pillaxia'
            },
            'url': 'https://www.linkedin.com/in/stephanie-esambe/' 
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
                "name": "Why was Pillaxia founded?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pillaxia was founded after firsthand experience of how isolating, fragmented, and overwhelming chronic illness can be — both as a patient and as a caregiver. It was built to close the gap between clinical visits and continuous care."
                }
              },
              {
                "@type": "Question",
                "name": "What is Pillaxia's mission?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pillaxia's mission is to revolutionise chronic illness management by building a connected healthcare ecosystem that empowers patients, supports clinicians, and enables more proactive and preventative models of care through AI and digital technology."
                }
              },
              {
                "@type": "Question",
                "name": "What is Pillaxia's long-term vision?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pillaxia's vision is to generate longitudinal health insights by combining medication data, symptom tracking, and behavioural analytics — helping healthcare systems transition from reactive treatment to proactive, preventative, data-driven care."
                }
              },
              {
                "@type": "Question",
                "name": "What is PillaxiaCare?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PillaxiaCare is Pillaxia's community initiative dedicated to supporting patients, caregivers, and healthcare professionals through education, workshops, and outreach programmes in both Nigeria and Ireland."
                }
              },
              {
                "@type": "Question",
                "name": "Who are Pillaxia's key partners?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pillaxia is supported by InterTrade Ireland, HIHI, and the New Frontiers Enterprise Ireland programme. It also partners with Apex-Pitch Medical for hospital network integration across Nigeria."
                }
              },
              {
                "@type": "Question",
                "name": "What are Pillaxia's core values?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pillaxia's five core values are Empathy, Empowerment, Collaboration, Inclusivity, and Innovation — each guiding how the platform is designed and how it serves patients and healthcare providers."
                }
              }
            ]
          })
        }}
      />
      <AboutPage />
    </>
  )
}