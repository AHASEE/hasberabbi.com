'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface Country {
  id: string;
  name: string;
  slug: string;
}

interface BlogEditorProps {
  mode: 'create' | 'edit';
  blog?: any;
}

export default function BlogEditor({ mode, blog }: BlogEditorProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    title: blog?.title || '',
    slug: blog?.slug || '',
    excerpt: blog?.excerpt || '',
    content: blog?.content || '',
    categoryId: blog?.categoryId || '',
    countryId: blog?.countryId || '',
    language: blog?.language || 'english',
    published: blog?.published || false,
  });

  // Tiptap Editor
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      Image,
    ],
    content: formData.content,
    onUpdate: ({ editor }) => {
      // FIX: Use callback to avoid stale closure
      setFormData(prev => ({ ...prev, content: editor.getHTML() }));
    },
  });

  useEffect(() => {
    fetchCategoriesAndCountries();
  }, []);

  async function fetchCategoriesAndCountries() {
    try {
      // FIX: Added error handling for missing APIs
      const [catRes, countryRes] = await Promise.all([
        fetch('/api/categories').catch(() => null),
        fetch('/api/countries').catch(() => null),
      ]);
      
      if (catRes && catRes.ok) {
        const cats = await catRes.json();
        setCategories(cats || []);
      }
      
      if (countryRes && countryRes.ok) {
        const ctrs = await countryRes.json();
        setCountries(ctrs || []);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Validation
      if (!formData.title.trim()) {
        setError('Title is required');
        setLoading(false);
        return;
      }

      if (!formData.slug.trim()) {
        setError('Slug is required');
        setLoading(false);
        return;
      }

      if (!formData.content.trim()) {
        setError('Content is required');
        setLoading(false);
        return;
      }

      const url = mode === 'create' ? '/api/blog' : `/api/blog/${blog.id}`;
      // FIX: Changed PUT to PATCH to match API route
      const method = mode === 'create' ? 'POST' : 'PATCH';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to save blog');
      }

      // Success
      setSuccess(true);
      setTimeout(() => {
        router.push('/admin/blogs');
        router.refresh();
      }, 1500);

    } catch (error: any) {
      console.error('Error saving blog:', error);
      setError(error.message || 'Failed to save blog');
    } finally {
      setLoading(false);
    }
  };

  const selectedCategory = categories.find(c => c.id === formData.categoryId);
  const showCountryField = selectedCategory?.slug === 'visa';

  return (
    <div>
      {/* Success Message */}
      {success && (
        <div className="mb-6 bg-green-50 border-l-4 border-green-500 text-green-700 p-4 rounded">
          <p className="font-semibold">✅ Success!</p>
          <p>Blog post saved successfully. Redirecting...</p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-6 bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded">
          <p className="font-semibold">❌ Error</p>
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} action="#" className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Title *
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={handleTitleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Enter blog title"
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Slug *
          </label>
          <input
            type="text"
            value={formData.slug}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="blog-url-slug"
          />
          <p className="text-xs text-gray-500 mt-1">
            URL: /blog/{formData.slug || 'your-slug'}
          </p>
        </div>

        {/* Category, Language, Country - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Category */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Category {categories.length > 0 && '*'}
            </label>
            <select
              value={formData.categoryId}
              onChange={(e) => setFormData({ ...formData, categoryId: e.target.value, countryId: '' })}
              required={categories.length > 0}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            {categories.length === 0 && (
              <p className="text-xs text-yellow-600 mt-1">⚠️ No categories found</p>
            )}
          </div>

          {/* Language */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Language *
            </label>
            <select
              value={formData.language}
              onChange={(e) => setFormData({ ...formData, language: e.target.value })}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="english">English</option>
              <option value="urdu">Urdu (اردو)</option>
              <option value="hinglish">Hinglish</option>
            </select>
          </div>

          {/* Country (Only for Visa) */}
          {showCountryField && (
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Country
              </label>
              <select
                value={formData.countryId}
                onChange={(e) => setFormData({ ...formData, countryId: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select Country (Optional)</option>
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Excerpt (Short Description)
          </label>
          <textarea
            value={formData.excerpt || ''}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Brief description of the blog post"
          />
        </div>

        {/* Tiptap Editor */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Content *
          </label>
          
          {/* Toolbar */}
          <div className="border border-gray-300 rounded-t-lg bg-gray-50 p-2 flex gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleBold().run()}
              className={`px-3 py-1 rounded ${editor?.isActive('bold') ? 'bg-primary text-white' : 'bg-white'}`}
            >
              <strong>B</strong>
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleItalic().run()}
              className={`px-3 py-1 rounded ${editor?.isActive('italic') ? 'bg-primary text-white' : 'bg-white'}`}
            >
              <em>I</em>
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
              className={`px-3 py-1 rounded ${editor?.isActive('heading', { level: 2 }) ? 'bg-primary text-white' : 'bg-white'}`}
            >
              H2
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
              className={`px-3 py-1 rounded ${editor?.isActive('heading', { level: 3 }) ? 'bg-primary text-white' : 'bg-white'}`}
            >
              H3
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleBulletList().run()}
              className={`px-3 py-1 rounded ${editor?.isActive('bulletList') ? 'bg-primary text-white' : 'bg-white'}`}
            >
              • List
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleOrderedList().run()}
              className={`px-3 py-1 rounded ${editor?.isActive('orderedList') ? 'bg-primary text-white' : 'bg-white'}`}
            >
              1. List
            </button>
          </div>

          {/* Editor */}
          <EditorContent 
            editor={editor} 
            className="prose max-w-none border border-t-0 border-gray-300 rounded-b-lg p-4 min-h-[300px] bg-white"
          />
          <p className="text-xs text-gray-500 mt-1">
            {formData.content.length} characters
          </p>
        </div>

        {/* Published Toggle */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="published"
            checked={formData.published}
            onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
            className="w-5 h-5 text-primary focus:ring-2 focus:ring-primary rounded"
          />
          <label htmlFor="published" className="text-sm font-bold text-gray-700">
            Publish immediately
          </label>
        </div>

        {/* Submit Buttons */}
        <div className="flex gap-4 pt-6 border-t">
          <button
            type="submit"
            disabled={loading}
            className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-lg font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {loading ? 'Saving...' : mode === 'create' ? 'Create Blog' : 'Update Blog'}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-lg font-bold transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}