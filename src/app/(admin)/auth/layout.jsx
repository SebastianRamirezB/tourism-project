import { cookies } from 'next/headers';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default function AuthLayout ({ children }) {
  const cookieStore = cookies();

  const token = cookieStore.get('tourism-token');

  if (token) {
    redirect('/dashboard');
  }

  return (

      <main className="grid grid-cols-2 w-screen h-screen">
        <div className="bg-background-auth bg-cover pt-12 pl-28">
          <Image src="/images/logo.png" width={97} height={80} alt="logo travel pulse" />
        </div>
        <div className="flex flex-col justify-center items-center">
          {children}
        </div>
      </main>

  );
}
