'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/signout', { method: 'POST' });
    } catch {}
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full px-4 py-3 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition font-medium text-left cursor-pointer"
    >
      🚪 Logout
    </button>
  );
}