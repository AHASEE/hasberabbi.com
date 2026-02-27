import { prisma } from '@/lib/db';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await prisma.blog.findMany({
    where: { published: true },
    select: { slug: true, updatedAt: true },
  });

  const blogUrls = blogs.map((blog) => ({
    url: `https://hasberabbi.com/blog/${blog.slug}`,
    lastModified: blog.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://hasberabbi.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://hasberabbi.com/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://hasberabbi.com/umrah-packages',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://hasberabbi.com/hajj-packages',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://hasberabbi.com/visa-services',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...blogUrls,
  ];
}