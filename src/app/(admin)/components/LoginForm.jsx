import Link from 'next/link';

export const LoginForm = () => {
  return (
    <form className="flex flex-col gap-8">
        <input className=" text-xl py-6 px-3 border-b border-[#B4B4B4] outline-none" type="email" placeholder="Email" />
        <input className=" text-xl py-6 px-3 border-b border-[#B4B4B4] outline-none" type="password" placeholder="Contraseña" />

        <button className="bg-primary capitalize py-6 px-10 w-full text-2xl text-white rounded-[45px] font-bold" >iniciar sesión</button>

        <p className="text-2xl font-medium" >¿Aún no tienes una cuenta? <Link className="text-primary" href="/auth/register">crear una cuenta</Link></p>
    </form>
  );
};
