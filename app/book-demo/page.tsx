import type { Metadata } from 'next'
import { BookDemoPage } from '@/src/content/BookDemoPage'

export const metadata: Metadata = {
  title: 'Book a Demo — See Pillaxia in Action',
  description: 'Schedule a 30-minute demo of PillaxiaRx and CareHub tailored to your organisation. For hospitals, clinics, pharmacies, and care organisations.',
  alternates: { canonical: 'https://pillaxia.com/book-demo' },
}

export default function Page() {
  return <BookDemoPage />
}