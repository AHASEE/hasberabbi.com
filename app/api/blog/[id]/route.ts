import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { auth } from '@/lib/auth';

// PATCH - Update blog
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    const body = await request.json();
    const { 
      title, slug, content, excerpt, published, 
      categoryId, countryId, language,
      featuredImage, metaTitle, metaDesc
    } = body;

    console.log('Updating blog:', id);

    const existingBlog = await prisma.blog.findUnique({
      where: { id }
    });

    if (!existingBlog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    if (slug !== existingBlog.slug) {
      const slugTaken = await prisma.blog.findUnique({
        where: { slug }
      });
      if (slugTaken && slugTaken.id !== id) {
        return NextResponse.json({ error: 'Slug already exists' }, { status: 400 });
      }
    }

    const updatedBlog = await prisma.blog.update({
      where: { id },
      data: {
        title,
        slug,
        content,
        excerpt: excerpt || null,
        published: published || false,
        language: language || 'english',
        categoryId: categoryId && categoryId.trim() !== '' ? categoryId : null,
        countryId: countryId && countryId.trim() !== '' ? countryId : null,
        featuredImage: featuredImage || null,
        metaTitle: metaTitle || null,
        metaDesc: metaDesc || null,
      }
    });

    console.log('Blog updated successfully:', updatedBlog.id);
    return NextResponse.json(updatedBlog);
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json({ 
      error: 'Failed to update blog',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// DELETE - Delete blog
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    console.log('Deleting blog:', id);

    await prisma.blog.delete({
      where: { id }
    });

    console.log('Blog deleted successfully');
    return NextResponse.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json({ 
      error: 'Failed to delete blog',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}