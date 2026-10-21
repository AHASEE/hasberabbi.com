import { notFound } from 'next/navigation';
import { prisma } from '@/lib/db';
import type { Metadata } from 'next';
import VerifiedGuideUpdate, {
  GUIDE_REVIEW_DATE,
  isReviewedGuide,
  improveGuideHtml,
} from '@/components/VerifiedGuideUpdate';

const verifiedSeo: Record<string, { title: string; description: string }> = {
  'hajj-2027-registration-dates-cost-guide': {
    title: 'Hajj 2027 Pakistan: Registration and Payment Updates',
    description: 'Hajj 2027 registration began on 22 June 2026. See updated official government and private scheme guidance, payment notices and the Pak Hajj portal.',
  },
  'solo-female-umrah-from-pakistan-2026': {
    title: 'Solo Female Umrah from Pakistan 2026: Visa, Nusuk and Travel Guide',
    description: 'Saudi rules allow women to perform Umrah without a mahram. Check Pakistani passport visa eligibility, Nusuk requirements and solo travel planning tips.',
  },
  'complete-guide-to-haramain-high-speed-railway-hhr-train-fares-2026': {
    title: 'Haramain Train Fares 2026: Routes, Timetables and Official Booking',
    description: 'Plan Haramain high-speed railway travel between Makkah, Madinah and Jeddah with route guidance, official live ticket checks and baggage information.',
  },
  'haramain-train-ticket-prices-2026-rates-table-hinglish-urduhindi': {
    title: 'Haramain Train Tickets 2026: Route Fares and Booking Guide',
    description: 'Haramain train routes explained in Roman Urdu and English. Find official live booking and timetable links; older SAR price estimates can change.',
  },
};

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
    title: verifiedSeo[slug]?.title || blog.metaTitle || `${blog.title} | Hasb-e-Rabbi`,
    description: verifiedSeo[slug]?.description || blog.metaDesc || blog.excerpt || blog.title,
    alternates: {
      canonical: `https://hasberabbi.com/blog/${slug}`,
    },
    openGraph: {
      type: 'article',
      url: `https://hasberabbi.com/blog/${slug}`,
      title: verifiedSeo[slug]?.title || blog.metaTitle || blog.title,
      description: verifiedSeo[slug]?.description || blog.metaDesc || blog.excerpt || '',
      images: blog.featuredImage ? [blog.featuredImage] : [],
      publishedTime: blog.createdAt.toISOString(),
      modifiedTime: isReviewedGuide(slug) ? GUIDE_REVIEW_DATE : blog.updatedAt.toISOString(),
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
            headline: verifiedSeo[slug]?.title || blog.title,
            description: verifiedSeo[slug]?.description || blog.metaDesc || blog.excerpt || blog.title,
            mainEntityOfPage: `https://hasberabbi.com/blog/${blog.slug}`,
            datePublished: blog.createdAt.toISOString(),
            dateModified: isReviewedGuide(slug) ? GUIDE_REVIEW_DATE : blog.updatedAt.toISOString(),
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
        {verifiedSeo[slug]?.title || blog.title}
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

      <VerifiedGuideUpdate slug={slug} />

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
          dangerouslySetInnerHTML={{ __html: improveGuideHtml(slug, blog.content) }}
        />
      </div>
    </main>
  );
}