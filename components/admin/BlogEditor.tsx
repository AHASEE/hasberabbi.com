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
    immediatelyRender: false, // ← ADDED THIS LINE
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      Image,
    ],
    content: formData.content,
    onUpdate: ({ editor }) => {
      setFormData({ ...formData, content: editor.getHTML() });
    },
  });

  useEffect(() => {
    fetchCategoriesAndCountries();
  }, []);

  async function fetchCategoriesAndCountries() {
    try {
      const [catRes, countryRes] = await Promise.all([
        fetch('/api/categories'),
        fetch('/api/countries'),
      ]);
      
      const cats = await catRes.json();
      const ctrs = await countryRes.json();
      
      setCategories(cats || []);
      setCountries(ctrs || []);
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

    try {
      const url = mode === 'create' ? '/api/blogs' : `/api/blogs/${blog.id}`;
      const method = mode === 'create' ? 'POST' : 'PUT';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to save blog');

      router.push('/admin/blogs');
      router.refresh();
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('Failed to save blog');
    } finally {
      setLoading(false);
    }
  };

  const selectedCategory = categories.find(c => c.id === formData.categoryId);
  const showCountryField = selectedCategory?.slug === 'visa';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
      </div>

      {/* Category, Language, Country - Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Category */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Category *
          </label>
          <select
            value={formData.categoryId}
            onChange={(e) => setFormData({ ...formData, categoryId: e.target.value, countryId: '' })}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
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
  );
}