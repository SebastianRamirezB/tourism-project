'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useForm } from '@/hooks/useForm';
import { registerFormValidator } from '@/helpers/register-form-validation';
import { setCookie } from 'cookies-next';

export const RegisterForm = () => {
  const [errorMessages, setErrorMessages] = useState([]);

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

    const isValidForm = registerFormValidator(fullName, email, password, confirmPassword);
    setErrorMessages(isValidForm.errorMessages);

    if (!isValidForm.isValid) return;

    const data = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/auth/register`, {
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

    if (user.statusCode === 400) {
      setErrorMessages(['La contraseña debe tener una letra mayúscula, minúscula y un número.La contraseña debe tener una letra mayúscula, minúscula y un número.']);
      return;
    }
    if (!user.token) return;

    const userCookie = {
      id: user.id,
      name: user.fullName
    };

    setCookie('tourism-token', user.token.toString());
    setCookie('tourism-user', JSON.stringify(userCookie));

    router.push('/dashboard');
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={register}>

        {
          errorMessages.length !== 0 && (
            <div className=" w-[400px] bg-red-100 rounded-3xl p-5">
              {
                errorMessages.map(error => {
                  return (
                    <ul key={error}>
                      <li>{error}</li>
                    </ul>
                  );
                })
              }
            </div>
          )
        }

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
