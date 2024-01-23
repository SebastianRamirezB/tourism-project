'use client';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export const LogoutButton = ({ isThemeLight }) => {
  const router = useRouter();

  const logout = () => {
    deleteCookie('tourism-token');
    deleteCookie('tourism-user');

    router.refresh();
  };

  return (
    <button onClick={logout} href="/auth/login" className={`flex items-center justify-center  p-2 w-40 rounded-3xl text-2xl font-bold ${isThemeLight ? 'bg-primary text-white' : 'bg-white text-black'}`}>
        Logout
    </button>
  );
};
