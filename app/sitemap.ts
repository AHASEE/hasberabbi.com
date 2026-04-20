import { prisma } from '@/lib/db';
import { MetadataRoute } from 'next';

const visaCountrySlugs = [
  'saudi-arabia',
  'uae-dubai',
  'united-kingdom',
  'schengen-europe',
  'malaysia',
  'turkey',
  'canada',
  'australia',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Database se blogs fetch karna
  const blogs = await prisma.blog.findMany({
    where: { published: true },
    select: { slug: true, updatedAt: true },
  });

  const blogUrls = blogs.map((blog) => ({
    url: `https://hasberabbi.com/blog/${blog.slug}`,
    lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 2. Visa country pages
  const visaCountryUrls = visaCountrySlugs.map((slug) => ({
    url: `https://hasberabbi.com/visa-services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: 'https://hasberabbi.com',
      lastModified: new Date(),
      changeFrequency: 'always' as const,
      priority: 1,
    },
    {
      url: 'https://hasberabbi.com/blog',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: 'https://hasberabbi.com/umrah-packages',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://hasberabbi.com/hajj-packages',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://hasberabbi.com/visa-services',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    ...visaCountryUrls,
    ...blogUrls,
  ];
}