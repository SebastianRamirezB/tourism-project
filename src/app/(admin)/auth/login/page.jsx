import Link from 'next/link';
import { LoginForm } from '../../components/LoginForm';

export default function LoginPage () {
  return (
    <section className="flex flex-col gap-8 items-center">
      <h1 className="capitalize text-5xl font-bold">bienvenido 👋</h1>
      <div>
        <LoginForm />
      </div>
      <Link className="text-primary text-2xl font-bold" href="/">Volver</Link>
    </section>
  );
}
