'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';

import { useForm } from '@/hooks/useForm';
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

    const data = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/auth/login`, {
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

    const userCookie = {
      id: user.id,
      name: user.fullName
    };

    setCookie('tourism-token', user.token.toString());
    setCookie('tourism-user', JSON.stringify(userCookie));

    router.push('/dashboard');
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={login} noValidate>
      <div className=" w-[400px] bg-red-100 rounded-3xl p-5">
        {
          errorMessages.length !== 0 && errorMessages.map(error => {
            return (
              <ul key={error}>
                <li>{error}</li>
              </ul>
            );
          })
        }
      </div>
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
