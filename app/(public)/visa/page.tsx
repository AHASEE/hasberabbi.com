import { prisma } from '@/lib/db';
import Link from 'next/link';

export const metadata = {
  title: 'Visa Services | Country Visa Information & Requirements | Dar Al Salam',
  description: 'Complete visa information for multiple countries. Tourist, business, and work visa services.',
};

export default async function VisaPage() {
  // Get visa category
  const visaCategory = await prisma.category.findUnique({
    where: { slug: 'visa' },
  });

  // Get all countries with their visa blogs
  const countries = await prisma.country.findMany({
    include: {
      blogs: {
        where: {
          categoryId: visaCategory?.id,
          published: true,
        },
        orderBy: { createdAt: 'desc' },
      },
    },
    orderBy: { name: 'asc' },
  });

  // Filter countries that have blogs
  const countriesWithBlogs = countries.filter(c => c.blogs.length > 0);

  // Get featured/latest blogs
  const featuredBlogs = await prisma.blog.findMany({
    where: {
      categoryId: visaCategory?.id,
      published: true,
    },
    take: 3,
    orderBy: { createdAt: 'desc' },
    include: {
      country: true,
    },
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80')] bg-cover bg-center bg-blend-multiply">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            🛂 Visa Services & Information
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Complete visa guides for multiple countries. Tourist, Business & Work visas.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="https://wa.me/923313954965?text=I%20need%20visa%20information"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-all"
            >
              💬 Get Visa Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Featured/Latest Guides */}
      {featuredBlogs.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">📋 Latest Visa Guides</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {featuredBlogs.map((blog) => (
                  <Link
                    key={blog.id}
                    href={`/blog/${blog.slug}`}
                    className="bg-white/10 rounded-lg p-5 backdrop-blur-sm hover:bg-white/20 transition"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold bg-accent text-primary-dark px-3 py-1 rounded-full">
                        {blog.country?.name || 'General'}
                      </span>
                      <span className="text-xs">
                        {blog.language === 'urdu' ? '🇵🇰 اردو' : 
                         blog.language === 'hinglish' ? '🇮🇳 Hinglish' : 
                         '🇬🇧 English'}
                      </span>
                    </div>
                    <p className="font-bold text-lg mb-2">{blog.title}</p>
                    {blog.excerpt && (
                      <p className="text-sm opacity-90 line-clamp-2">{blog.excerpt}</p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Countries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary-dark mb-4">
              Visa Information by Country
            </h2>
            <p className="text-xl text-gray-600">
              Select a country to view detailed visa requirements and guides
            </p>
          </div>

          {countriesWithBlogs.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-16 text-center">
              <div className="text-6xl mb-4">📄</div>
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                No visa guides available yet
              </h2>
              <p className="text-gray-500 mb-8">
                Check back soon for country-specific visa information
              </p>
              <a 
                href="https://wa.me/923313954965?text=Need%20visa%20information"
                target="_blank"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-all"
              >
                💬 Contact Us for Visa Help
              </a>
            </div>
          ) : (
            <div className="space-y-12">
              {countriesWithBlogs.map((country) => (
                <div key={country.id} className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-gray-100">
                    <span className="text-4xl">🌍</span>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800">
                        {country.name} Visa
                      </h2>
                      <p className="text-gray-500 text-sm">
                        {country.blogs.length} {country.blogs.length === 1 ? 'guide' : 'guides'} available
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {country.blogs.map((blog) => (
                      <Link
                        key={blog.id}
                        href={`/blog/${blog.slug}`}
                        className="group border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-primary transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {blog.language === 'urdu' ? '🇵🇰 اردو' : 
                             blog.language === 'hinglish' ? '🇮🇳 Hinglish' : 
                             '🇬🇧 English'}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition">
                          {blog.title}
                        </h3>

                        {blog.excerpt && (
                          <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                            {blog.excerpt}
                          </p>
                        )}

                        <div className="flex items-center text-sm text-gray-500 pt-3 border-t border-gray-100">
                          <span>📅 {new Date(blog.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-10 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Need Help with Your Visa Application?
            </h3>
            <p className="text-lg mb-8">
              Our visa experts are available 24/7 to assist you
            </p>
            <a 
              href="https://wa.me/923313954965?text=Help%20with%20visa%20application"
              target="_blank"
              className="inline-block bg-accent hover:bg-accent-hover text-primary-dark px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all"
            >
              💬 Chat with Visa Expert
            </a>
          </div>
        </div>
      </section>

      {/* Language Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Available in Multiple Languages
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gray-50 px-6 py-3 rounded-full shadow-md border-2 border-gray-200">
                <span className="font-semibold text-gray-700">🇬🇧 English</span>
              </div>
              <div className="bg-gray-50 px-6 py-3 rounded-full shadow-md border-2 border-gray-200">
                <span className="font-semibold text-gray-700">🇵🇰 اردو (Urdu)</span>
              </div>
              <div className="bg-gray-50 px-6 py-3 rounded-full shadow-md border-2 border-gray-200">
                <span className="font-semibold text-gray-700">🇮🇳 Hinglish</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}