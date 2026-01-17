import { prisma } from '@/lib/db';
import Link from 'next/link';
import { revalidatePath } from 'next/cache';

export default async function AdminBlogsPage() {
  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      author: {
        select: { name: true }
      }
    }
  });

  async function deleteBlog(formData: FormData) {
    'use server';
    const id = formData.get('id') as string;
    await prisma.blog.delete({ where: { id } });
    revalidatePath('/admin/blogs');
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-extrabold text-primary-dark mb-2">Blog Posts</h1>
          <p className="text-gray-600">Manage all your blog posts</p>
        </div>
        <Link
          href="/admin/blogs/new"
          className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:scale-105 transition"
        >
          + New Blog Post
        </Link>
      </div>

      {blogs.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-lg p-16 text-center">
          <div className="text-6xl mb-4">📝</div>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">No blog posts yet</h2>
          <p className="text-gray-500 mb-8">Create your first blog post to get started</p>
          <Link
            href="/admin/blogs/new"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-light transition"
          >
            Create First Blog
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-6 font-bold text-gray-700">Title</th>
                <th className="text-left py-4 px-6 font-bold text-gray-700">Author</th>
                <th className="text-center py-4 px-6 font-bold text-gray-700">Status</th>
                <th className="text-center py-4 px-6 font-bold text-gray-700">Date</th>
                <th className="text-center py-4 px-6 font-bold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                  <td className="py-4 px-6">
                    <div className="font-semibold text-gray-900">{blog.title}</div>
                    <div className="text-sm text-gray-500">/{blog.slug}</div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{blog.author.name}</td>
                  <td className="py-4 px-6 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      blog.published 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {blog.published ? '✅ Published' : '📄 Draft'}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600 text-sm">
                    {new Date(blog.createdAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center gap-3">
                      {blog.published && (
                        <Link
                          href={`/blog/${blog.slug}`}
                          target="_blank"
                          className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                        >
                          View
                        </Link>
                      )}
                      <Link
                        href={`/admin/blogs/${blog.id}/edit`}
                        className="text-primary hover:text-primary-light font-semibold text-sm"
                      >
                        Edit
                      </Link>
                      <form action={deleteBlog}>
                        <input type="hidden" name="id" value={blog.id} />
                        <button
                          type="submit"
                          onClick={(e) => {
                            if (!confirm('Are you sure you want to delete this blog?')) {
                              e.preventDefault();
                            }
                          }}
                          className="text-red-600 hover:text-red-700 font-semibold text-sm"
                        >
                          Delete
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}