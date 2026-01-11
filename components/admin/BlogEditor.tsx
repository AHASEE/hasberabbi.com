'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

interface BlogEditorProps {
  blog?: {
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt?: string | null;
    image?: string | null;
    published: boolean;
    metaTitle?: string | null;
    metaDesc?: string | null;
  };
  mode: 'create' | 'edit';
}

export default function BlogEditor({ blog, mode }: BlogEditorProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: blog?.title || '',
    slug: blog?.slug || '',
    content: blog?.content || '',
    excerpt: blog?.excerpt || '',
    image: blog?.image || '',
    published: blog?.published || false,
    metaTitle: blog?.metaTitle || '',
    metaDesc: blog?.metaDesc || '',
  });

  // Auto-generate slug
  useEffect(() => {
    if (mode === 'create' && formData.title) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      setFormData(prev => ({ ...prev, slug }));
    }
  }, [formData.title, mode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = mode === 'create' ? '/api/blogs' : `/api/blogs/${blog?.id}`;
      const method = mode === 'create' ? 'POST' : 'PUT';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to save');

      router.push('/admin/blogs');
      router.refresh();
    } catch (error) {
      alert('Error saving blog');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Title *</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
          placeholder="Enter title..."
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Slug *</label>
        <input
          type="text"
          value={formData.slug}
          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Excerpt</label>
        <textarea
          value={formData.excerpt || ''}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Image URL</label>
        <input
          type="url"
          value={formData.image || ''}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Content *</label>
        <ReactQuill
          theme="snow"
          value={formData.content}
          onChange={(content) => setFormData({ ...formData, content })}
        />
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="published"
          checked={formData.published}
          onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
          className="w-5 h-5"
        />
        <label htmlFor="published" className="font-bold">Publish</label>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-light disabled:opacity-50"
        >
          {loading ? 'Saving...' : mode === 'create' ? 'Create' : 'Update'}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="bg-gray-200 px-8 py-3 rounded-lg font-bold"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}