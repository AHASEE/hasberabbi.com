import { prisma } from '@/lib/db';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | HasbeRabbi',
  description: 'Read our latest articles about Umrah, Hajj, and travel tips.',
};

export const revalidate = 60;

export default async function BlogListPage() {
  const blogs = await prisma.blog.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    include: {
      author: {
        select: { name: true }
      }
    }
  });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-white/90">
            Latest articles about Umrah, Hajj, Visa & Travel Tips
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {blogs.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h2 className="text-2xl font-bold text-gray-700 mb-4">No blogs yet</h2>
              <p className="text-gray-500">Check back soon for new articles!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.slug}`}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span>👤 {blog.author.name}</span>
                      <span>•</span>
                      <span>📅 {new Date(blog.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}</span>
                    </div>

                    <h2 className="text-xl font-bold text-primary-dark mb-3 line-clamp-2">
                      {blog.title}
                    </h2>

                    {blog.excerpt && (
                      <p className="text-gray-600 line-clamp-3 mb-4">
                        {blog.excerpt}
                      </p>
                    )}

                    <span className="text-primary font-semibold hover:text-primary-light transition">
                      Read More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}