import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAuthors } from '@/src/lib/schemas/author';

export const metadata: Metadata = {
  title: 'Our Authors & Clinical Contributors',
  description:
    'Meet the clinicians, product leaders, and healthcare experts behind Pillaxia\'s content and clinical strategy.',
  alternates: { canonical: 'https://pillaxia.com/authors' },
};

export default function AuthorsPage() {
  const authors = getAuthors();

  return (
    <main>
      <h1>Our Authors</h1>
      <p>
        Meet the clinicians and experts behind Pillaxia. Every piece of
        content is reviewed by qualified healthcare professionals.
      </p>

      <section>
        {authors.map((author) => (
          <article key={author.slug}>
            <Link href={`/authors/${author.slug}`}>
              <Image
                src={author.avatar}
                alt={author.name}
                width={120}
                height={120}
                style={{ borderRadius: '50%' }}
              />
              <h2>{author.name}</h2>
              <p>{author.title}</p>
              {author?.credentials && author.credentials?.length > 0 && (
                <p>{author.credentials.join(' · ')}</p>
              )}
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
