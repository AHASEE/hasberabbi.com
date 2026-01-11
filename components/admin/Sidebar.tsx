import Link from 'next/link';
import { auth, signOut } from '@/lib/auth';

export default async function Sidebar() {
  const session = await auth();

  return (
    <aside className="w-64 bg-primary-dark text-white min-h-screen p-6 flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl">
          ☪
        </div>
        <div>
          <h2 className="font-bold text-lg">Dar Al Salam</h2>
          <p className="text-xs text-white/60">Admin Panel</p>
        </div>
      </div>

      {/* User Info */}
      <div className="bg-white/10 rounded-lg p-4 mb-8">
        <p className="text-sm text-white/60">Logged in as:</p>
        <p className="font-semibold">{session?.user?.name}</p>
        <p className="text-xs text-white/60">{session?.user?.email}</p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2 flex-1">
        <Link
          href="/admin"
          className="block px-4 py-3 rounded-lg hover:bg-white/10 transition font-medium"
        >
          📊 Dashboard
        </Link>
        <Link
          href="/admin/blogs"
          className="block px-4 py-3 rounded-lg hover:bg-white/10 transition font-medium"
        >
          📝 Blogs
        </Link>
        <Link
          href="/"
          target="_blank"
          className="block px-4 py-3 rounded-lg hover:bg-white/10 transition font-medium"
        >
          🌐 View Website
        </Link>
      </nav>

      {/* Logout */}
      <form
        action={async () => {
          'use server';
          await signOut({ redirectTo: '/admin/login' });
        }}
      >
        <button
          type="submit"
          className="w-full px-4 py-3 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition font-medium text-left"
        >
          🚪 Logout
        </button>
      </form>
    </aside>
  );
}