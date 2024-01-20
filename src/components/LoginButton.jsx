import Link from 'next/link';

export const LoginButton = () => {
  return (
    <Link href="/auth/login" className="flex items-center justify-center bg-white p-2 w-40 rounded-3xl text-2xl font-bold">
        Login
    </Link>
  );
};
