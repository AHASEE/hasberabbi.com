import { notFound } from 'next/navigation';
import { prisma } from '@/lib/db';

interface BlogPageProps {
  params: {
    id: string;
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const blog = await prisma.blog.findUnique({
    where: {
      id: params.id,
    },
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
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

      <p className="text-sm text-gray-500 mb-6">
        By {blog.author?.name ?? 'Admin'}
      </p>

      {/* {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-lg mb-6"
        />
      )} */}

      <article className="prose max-w-none">
        {blog.content}
      </article>
    </main>
  );
}
