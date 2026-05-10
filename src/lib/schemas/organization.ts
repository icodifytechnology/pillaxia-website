export const organizationSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'Organization' as const,
  name: 'Pillaxia',
  url: 'https://pillaxia.com',
  logo: 'https://pillaxia.com/logo.png',
  description:
    'Connected care infrastructure platform that bridges patients, clinicians, families, and pharmacies for chronic and long-term health management.',
  foundingDate: '2023',
  areaServed: ['IE', 'NG'],
  sameAs: [
    'https://linkedin.com/company/pillaxia',
    'https://twitter.com/pillaxia',
    // Add other social profiles here
  ],
  contactPoint: {
    '@type': 'ContactPoint' as const,
    contactType: 'customer service',
    email: 'support@pillaxia.com',
  },
};
