import { notFound, permanentRedirect } from 'next/navigation';
import { prisma } from '@/lib/db';

interface LegacyBlogPageProps {
  params: Promise<{ id: string }>;
}

// Do not expose a duplicate indexed article at /blogs/[id].
// Point old ID-based links to the canonical published /blog/[slug] URL.
export default async function LegacyBlogPage({ params }: LegacyBlogPageProps) {
  const { id } = await params;
  const blog = await prisma.blog.findUnique({
    where: { id },
    select: { slug: true, published: true },
  });

  if (!blog || !blog.published) notFound();

  permanentRedirect(`/blog/${encodeURIComponent(blog.slug)}`);
}
