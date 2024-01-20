import Link from 'next/link';
import { RegisterForm } from '../../components/RegisterForm';

export default function RegisterPage () {
  return (
    <section className="flex flex-col gap-8 items-center">
      <h1 className="capitalize text-5xl font-bold">Hola, empieza ahora 👋</h1>
      <div>
        <RegisterForm />
      </div>

      <Link className="text-primary text-2xl font-bold" href="/">Volver</Link>

    </section>
  );
}
