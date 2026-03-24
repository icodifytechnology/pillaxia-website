import type { Metadata } from 'next'
import { CookiePolicyPage } from '@/src/content/LegalPages'

export const metadata: Metadata = {
  title: 'Cookie Policy — Pillaxia',
  description: 'Information about how Pillaxia uses cookies and similar technologies.',
  alternates: { canonical: 'https://pillaxia.com/cookies' },
  robots: { index: false },
}

export default function Page() {
  return <CookiePolicyPage />
}