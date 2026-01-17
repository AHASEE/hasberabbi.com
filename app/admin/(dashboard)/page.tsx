import { prisma } from '@/lib/db';
import Link from 'next/link';

export default async function AdminDashboard() {
  const [totalBlogs, publishedBlogs, draftBlogs] = await Promise.all([
    prisma.blog.count(),
    prisma.blog.count({ where: { published: true } }),
    prisma.blog.count({ where: { published: false } }),
  ]);

  const recentBlogs = await prisma.blog.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      title: true,
      published: true,
      createdAt: true,
    }
  });

  const stats = [
    { label: 'Total Blogs', value: totalBlogs, icon: '📝', color: 'bg-blue-500' },
    { label: 'Published', value: publishedBlogs, icon: '✅', color: 'bg-green-500' },
    { label: 'Drafts', value: draftBlogs, icon: '📄', color: 'bg-yellow-500' },
    { label: 'Views', value: '12.5k', icon: '👁️', color: 'bg-purple-500' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-primary-dark mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to Dar Al Salam Admin Panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-2xl`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-extrabold text-gray-800">{stat.value}</div>
            </div>
            <p className="text-gray-600 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Blogs */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-primary-dark">Recent Blogs</h2>
          <Link
            href="/admin/blogs/new"
            className="bg-primary hover:bg-primary-light text-white px-6 py-2.5 rounded-lg font-semibold transition"
          >
            + New Blog
          </Link>
        </div>

        {recentBlogs.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-gray-500 mb-6">No blogs yet. Create your first blog post!</p>
            <Link
              href="/admin/blogs/new"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-light transition"
            >
              Create First Blog
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-bold text-gray-700">Title</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-700">Status</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-700">Date</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentBlogs.map((blog) => (
                  <tr key={blog.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium">{blog.title}</td>
                    <td className="py-4 px-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        blog.published 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {blog.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center text-gray-600 text-sm">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Link
                        href={`/admin/blogs/${blog.id}/edit`}
                        className="text-primary hover:text-primary-light font-semibold"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {recentBlogs.length > 0 && (
          <div className="mt-6 text-center">
            <Link
              href="/admin/blogs"
              className="text-primary hover:text-primary-light font-semibold"
            >
              View All Blogs →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}