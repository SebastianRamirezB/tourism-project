import Image from 'next/image';

export default function AuthLayout ({ children }) {
  return (
    <main className="grid grid-cols-2 w-screen h-screen">
      <div className="bg-background-auth bg-cover pt-12 pl-28">
        <Image src="/images/logo.png" width={97} height={80} alt="logo travel pulse" />
      </div>
      <div>
        {children}
      </div>
    </main>
  );
}
