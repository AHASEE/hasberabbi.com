import { prisma } from '../../../../lib/db';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export const revalidate = 60;

async function getBlog(slug: string) {
  const blog = await prisma.blog.findUnique({
    where: { slug, published: true },
    include: {
      author: {
        select: { name: true }
      }
    }
  });
  return blog;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = await getBlog(params.slug);
  
  if (!blog) {
    return {
      title: 'Blog Not Found'
    };
  }

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDesc || blog.excerpt,
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 text-sm text-white/80 mb-6">
              <span className="flex items-center gap-1">
                👤 {blog.author.name}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                📅 {new Date(blog.createdAt).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {blog.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {blog.image && (
        <section className="relative -mt-8 z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article 
              className="prose prose-lg max-w-none prose-headings:text-primary-dark prose-a:text-primary prose-strong:text-primary-dark"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Share Section */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-primary-dark mb-4">Share this article:</h3>
              <div className="flex gap-4">
                <a
                  href={`https://wa.me/?text=Check out this article: ${encodeURIComponent(blog.title)} https://daralsalam.pk/blog/${blog.slug}`}
                  target="_blank"
                  className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
                >
                  Share on WhatsApp
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://daralsalam.pk/blog/${blog.slug}`}
                  target="_blank"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
                >
                  Share on Facebook
                </a>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-10 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Book Your Umrah?</h3>
              <p className="text-xl mb-6 text-white/90">
                Get personalized package recommendations and instant quotes
              </p>
              <a
                href="https://wa.me/923313954965?text=I want to book Umrah package"
                target="_blank"
                className="inline-block bg-accent hover:bg-accent-hover text-primary-dark px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all"
              >
                💬 Chat with Expert
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}