import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { auth } from '@/lib/auth';

// GET - Fetch all blogs
export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
      include: {
        author: {
          select: { name: true }
        }
      }
    });
    return NextResponse.json(blogs);
  } catch (error) {
    console.error('GET /api/blogs error:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

// POST - Create new blog
export async function POST(request: Request) {
  try {
    const session = await auth();
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { title, slug, content, excerpt, published, categoryId, countryId, language } = body;

    console.log('Creating blog:', { title, slug, published });

    // Check if slug exists
    const existingBlog = await prisma.blog.findUnique({
      where: { slug }
    });

    if (existingBlog) {
      return NextResponse.json({ error: 'Slug already exists' }, { status: 400 });
    }

    // Get user ID
    const user = await prisma.user.findUnique({
      where: { email: session.user.email! }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const blog = await prisma.blog.create({
      data: {
        title,
        slug,
        content,
        excerpt: excerpt || null,
        published: published || false,
        language: language || 'english',
        categoryId: categoryId && categoryId.trim() !== '' ? categoryId : null,
        countryId: countryId && countryId.trim() !== '' ? countryId : null,
        authorId: user.id
      }
    });

    console.log('Blog created successfully:', blog.id);
    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json({ 
      error: 'Failed to create blog',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}