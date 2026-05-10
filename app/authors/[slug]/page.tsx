import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/src/components/json-ld';
import {
  getAuthor,
  getAuthorSlugs,
  buildPersonSchema,
} from '@/src/lib/schemas/author';

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAuthorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) return {};

  return {
    title: `${author.name} — ${author.title}`,
    description: author.bio.slice(0, 160),
    alternates: { canonical: `https://pillaxia.com/authors/${slug}` },
  };
}

export default async function AuthorPage({ params }: Params) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) notFound();

  return (
    <>
      <JsonLd data={buildPersonSchema(author)} />

      <main>
        <article>
          <Image
            src={author.avatar}
            alt={author.name}
            width={200}
            height={200}
            priority
            style={{ borderRadius: '50%' }}
          />

          <h1>{author.name}</h1>
          <p>{author.title}</p>

          {author?.credentials && author.credentials?.length > 0 && (
            <p>
              <strong>Credentials:</strong> {author.credentials.join(', ')}
            </p>
          )}

          <p>{author.bio}</p>

          <nav>
            {author.linkedin && (
              <a href={author.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            )}
            {author.twitter && (
              <a href={author.twitter} target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            )}
          </nav>

          <Link href="/authors">← All Authors</Link>
        </article>
      </main>
    </>
  );
}
