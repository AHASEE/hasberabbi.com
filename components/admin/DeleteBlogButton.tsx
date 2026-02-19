'use client';

interface DeleteBlogButtonProps {
  blogId: string;
}

export default function DeleteBlogButton({ blogId }: DeleteBlogButtonProps) {
  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    try {
      const response = await fetch(`/api/blog/${blogId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        window.location.reload();
      } else {
        const data = await response.json();
        alert(data.error || 'Failed to delete blog');
      }
    } catch (error) {
      alert('Failed to delete blog');
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="text-red-600 hover:text-red-700 font-semibold text-sm"
    >
      Delete
    </button>
  );
}