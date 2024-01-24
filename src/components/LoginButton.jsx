import Link from 'next/link';

export const LoginButton = ({ isThemeLight }) => {
  return (
    <Link href="/auth/login" className={`flex items-center justify-center  p-2 w-40 rounded-3xl text-2xl font-bold ${isThemeLight ? 'bg-primary text-white' : 'bg-white text-black'}`}>
        Iniciar sesión
    </Link>
  );
};
