import BlogEditor from '@/components/admin/BlogEditor';
import { prisma } from '@/lib/db';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function EditBlogPage({ params }: { params: { id: string } }) {
  const blog = await prisma.blog.findUnique({
    where: { id: params.id },
  });

  if (!blog) return notFound();

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/admin/blogs"
          className="text-primary hover:text-primary-light font-semibold mb-4 inline-block"
        >
          ← Back to Blogs
        </Link>
        <h1 className="text-4xl font-extrabold text-primary-dark mb-2">Edit Blog Post</h1>
        <p className="text-gray-600">Update your article</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <BlogEditor mode="edit" blog={blog} />
      </div>
    </div>
  );
}