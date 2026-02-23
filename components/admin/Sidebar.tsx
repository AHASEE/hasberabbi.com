'use client';

import { logoutAction } from './actions';

export default function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button
        type="submit"
        className="w-full px-4 py-3 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition font-medium text-left cursor-pointer"
      >
        🚪 Logout
      </button>
    </form>
  );
}