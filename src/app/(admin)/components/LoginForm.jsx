'use client';
import { useForm } from '@/hooks/useForm';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const LoginForm = () => {
  const router = useRouter();
  const {
    formState,
    onInputChange
  } = useForm({
    email: '',
    password: ''
  });

  const { email, password } = formState;

  const login = async (e) => {
    e.preventDefault();

    const data = await fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const user = await data.json();

    if (!user.token) return;

    router.push('/dashboard');
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={login}>
        <input
          name="email"
          className=" text-xl py-6 px-3 border-b border-[#B4B4B4] outline-none"
          type="email"
          placeholder="Email"
          onChange={onInputChange}
          value={email}
        />
        <input
          name="password"
          className=" text-xl py-6 px-3 border-b border-[#B4B4B4] outline-none"
          type="password"
          placeholder="Contraseña"
          onChange={onInputChange}
          value={password}

        />

        <button className="bg-primary capitalize py-6 px-10 w-full text-2xl text-white rounded-[45px] font-bold" >iniciar sesión</button>

        <p className="text-2xl font-medium" >¿Aún no tienes una cuenta? <Link className="text-primary" href="/auth/register">crear una cuenta</Link></p>
    </form>
  );
};
