import BlogEditor from '@/components/admin/BlogEditor';
import Link from 'next/link';

export default function NewBlogPage() {
  return (
    <div>
      <div className="mb-8">
        <Link 
          href="/admin/blogs"
          className="text-primary hover:text-primary-light font-semibold mb-4 inline-block"
        >
          ← Back to Blogs
        </Link>
        <h1 className="text-4xl font-extrabold text-primary-dark mb-2">Create New Blog Post</h1>
        <p className="text-gray-600">Write and publish a new article</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <BlogEditor mode="create" />
      </div>
    </div>
  );
}