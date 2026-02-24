import { notFound } from 'next/navigation';
import { prisma } from '@/lib/db';

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPageProps) {
  const blog = await prisma.blog.findFirst({
    where: { slug: params.slug },
  });

  if (!blog) return {};

  return {
    title: `${blog.title} | HasbeRabbi`,
    description: blog.excerpt || blog.title,
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const blog = await prisma.blog.findFirst({
    where: { slug: params.slug },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  if (!blog || !blog.published) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4">
        {blog.title}
      </h1>

      {/* Meta */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <span>👤 {blog.author?.name ?? 'Admin'}</span>
        <span>•</span>
        <span>📅 {new Date(blog.createdAt).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        })}</span>
      </div>

      {/* Content */}
      <article
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </main>
  );
}