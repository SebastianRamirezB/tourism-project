'use client';
import { useForm } from '@/hooks/useForm';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const RegisterForm = () => {
  const router = useRouter();
  const {
    formState,
    onInputChange
  } = useForm({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { fullName, email, password, confirmPassword } = formState;

  const register = async (e) => {
    e.preventDefault();

    const data = await fetch('http://localhost:3001/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        fullName
      })
    });
    const user = await data.json();
    console.log(user);
    if (!user.token) return;

    router.push('/dashboard');
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={register}>
      <input
        name="fullName"
        className=" text-xl py-6 px-3 border-b border-[#B4B4B4] outline-none"
        type="text"
        placeholder="Nombre"
        onChange={onInputChange}
        value={fullName}
      />
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
      <input
        name="confirmPassword"
        className=" text-xl py-6 px-3 border-b border-[#B4B4B4] outline-none"
        type="password"
        placeholder="Confirmar Contraseña"
        onChange={onInputChange}
        value={confirmPassword}

      />

      <button className="bg-primary capitalize py-6 px-10 w-full text-2xl text-white rounded-[45px] font-bold" >Crear Cuenta</button>

      <p className="text-2xl font-medium" >¿Aún no tienes una cuenta? <Link className="text-primary" href="/auth/login">iniciar sesión</Link></p>
    </form>
  );
};
