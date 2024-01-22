'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useForm } from '@/hooks/useForm';

import { useState } from 'react';
import { loginFormValidator } from '@/helpers/login-form-validation';

export const LoginForm = () => {
  const [errorMessages, setErrorMessages] = useState([]);
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

    const isValidForm = loginFormValidator(email, password);
    setErrorMessages(isValidForm.errorMessages);

    if (!isValidForm.isValid) return;

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

    if (user.statusCode === 401) {
      setErrorMessages(['Credenciales no válidas']);
      return;
    }

    router.push('/dashboard');
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={login} noValidate>
      {
        errorMessages.length !== 0 && errorMessages.map(error => {
          return (
            <ul key={error}>
              <li>{error}</li>
            </ul>
          );
        })
      }
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
