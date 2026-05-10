export const faqs = [
  {
    q: 'What is Pillaxia?',
    a: 'Pillaxia is a connected care infrastructure platform that bridges patients, clinicians, families, and pharmacies through one trusted digital platform focused on chronic and long-term health management.',
  },
  {
    q: 'Who is Pillaxia designed for?',
    a: 'Pillaxia is built for hospitals, clinics, pharmacies, care homes, and government health agencies. End users — patients, caregivers, and families — benefit directly through the apps licensed by those organisations.',
  },
  {
    q: 'What products does Pillaxia offer?',
    a: 'Pillaxia offers three purpose-built experiences: PillaxiaRx for clinicians and hospitals, the Pillaxia App for patients and families, and CareHub for shared care coordination across all stakeholders.',
  },
  {
    q: 'Is the Pillaxia app free to download?',
    a: 'Yes. The Pillaxia patient app is free to download on both iOS (App Store) and Android (Google Play) and is rated 4.8 by users.',
  },
  {
    q: 'Is Pillaxia GDPR and HIPAA compliant?',
    a: 'Yes. Pillaxia is built with compliance by design, including GDPR-aligned, consent-driven architecture with role-based access controls and HIPAA-compliant data handling.',
  },
  {
    q: 'In which countries does Pillaxia operate?',
    a: 'Pillaxia currently has early healthcare partners across Ireland and Nigeria, and its platform is designed to scale across public and private healthcare systems globally, including the Middle East.',
  },
  {
    q: 'How does the CareHub feature work?',
    a: 'CareHub enables shared care coordination between patients, clinicians, and trusted supporters (such as family members), with clear permission boundaries and full auditability built into every interaction.',
  },
  {
    q: 'How does Pillaxia integrate with existing hospital systems?',
    a: 'Pillaxia uses an API-first, interoperable architecture designed to complement and integrate with existing Electronic Health Records (EHR) and clinical workflows without disrupting them.',
  },
] as const;

export const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question' as const,
    name: q,
    acceptedAnswer: {
      '@type': 'Answer' as const,
      text: a,
    },
  })),
};
