import { notFound } from 'next/navigation';
import { prisma } from '@/lib/db';
import type { Metadata } from 'next';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;

  const blog = await prisma.blog.findFirst({
    where: { slug, published: true },
  });

  if (!blog) return { robots: { index: false, follow: false } };

  return {
    title: blog.metaTitle || `${blog.title} | Hasb-e-Rabbi`,
    description: blog.metaDesc || blog.excerpt || blog.title,
    alternates: {
      canonical: `https://hasberabbi.com/blog/${slug}`,
    },
    openGraph: {
      type: 'article',
      url: `https://hasberabbi.com/blog/${slug}`,
      title: blog.metaTitle || blog.title,
      description: blog.metaDesc || blog.excerpt || '',
      images: blog.featuredImage ? [blog.featuredImage] : [],
      publishedTime: blog.createdAt.toISOString(),
      modifiedTime: blog.updatedAt.toISOString(),
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;

  const blog = await prisma.blog.findFirst({
    where: { slug, published: true },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  if (!blog || !blog.published) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-8 sm:px-10 md:px-12 py-10">
      {/* Structured data mirrors the published article's visible title and dates. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: blog.title,
            description: blog.metaDesc || blog.excerpt || blog.title,
            mainEntityOfPage: `https://hasberabbi.com/blog/${blog.slug}`,
            datePublished: blog.createdAt.toISOString(),
            dateModified: blog.updatedAt.toISOString(),
            author: { '@type': 'Person', name: blog.author?.name || 'Hasb-e-Rabbi Editorial Team' },
            publisher: {
              '@type': 'Organization',
              name: 'Hasb-e-Rabbi Travels & Tours',
              url: 'https://hasberabbi.com',
            },
            ...(blog.featuredImage ? { image: blog.featuredImage } : {}),
          }).replace(/</g, '\\u003c'),
        }}
      />
      {/* Featured Image */}
      {blog.featuredImage && (
        <img
          src={blog.featuredImage}
          alt={blog.title}
          className="w-full h-auto md:h-96 object-cover rounded-2xl mb-8"
        />
      )}

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4">
        {blog.title}
      </h1>

      {/* Author & Date */}
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-8">
        <span>👤 {blog.author?.name ?? 'Admin'}</span>
        <span>•</span>
        <span>
          📅{' '}
          {new Date(blog.createdAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </span>
      </div>

      {/* Blog Content */}
      <div className="w-full min-w-0 overflow-x-auto">
        <article
          className="
            prose
            prose-lg
            max-w-none
            w-full
            min-w-0

            prose-img:rounded-xl
            prose-img:max-w-full

            prose-table:w-full
            prose-th:border
            prose-td:border
            prose-th:p-3
            prose-td:p-3

            prose-headings:text-primary-dark
            prose-a:text-primary
            prose-a:no-underline
            hover:prose-a:underline

            prose-ul:list-disc
            prose-ul:pl-8
            prose-ol:list-decimal
            prose-ol:pl-8
            prose-li:my-1
          "
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </main>
  );
}