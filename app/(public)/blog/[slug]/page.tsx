import { notFound } from 'next/navigation';
import { prisma } from '@/lib/db';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = await prisma.blog.findFirst({ where: { slug } });
  if (!blog) return {};
  return {
    title: blog.metaTitle || `${blog.title} | Hasb-e-Rabbi`,
    description: blog.metaDesc || blog.excerpt || blog.title,
    alternates: { canonical: `https://hasberabbi.com/blog/${slug}` },
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDesc || blog.excerpt || '',
      images: blog.featuredImage ? [blog.featuredImage] : [],
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = await prisma.blog.findFirst({
    where: { slug },
    include: { author: { select: { name: true } } },
  });

  if (!blog || !blog.published) notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      {/* Featured Image */}
      {blog.featuredImage && (
        <img
          src={blog.featuredImage}
          alt={blog.title}
          className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
        />
      )}

      <h1 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4">
        {blog.title}
      </h1>

      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <span>👤 {blog.author?.name ?? 'Admin'}</span>
        <span>•</span>
        <span>📅 {new Date(blog.createdAt).toLocaleDateString('en-US', {
          month: 'short', day: 'numeric', year: 'numeric'
        })}</span>
      </div>

      <article
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </main>
  );
}