import Image from 'next/image';
import Link from 'next/link';

import './styles.css';
import { AuthenticationStatusButtons } from '../ui/AuthenticationStatusButtons';

export const Navbar = ({ isThemeLight = false }) => {
  return (
    <nav className={`nav-animation fixed top-0 w-full h-20 z-10 ${isThemeLight ? 'text-black' : 'text-white'}`}>
      <div className="wrapper">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src={isThemeLight ? '/images/logo-purple.png' : '/images/logo.png'} width={97} height={80} alt="logo travel pulse" />
          </Link>
          <ul className="text-2xl font-extrabold flex justify-end gap-16">
            <Link href="/experiencias" >
              Experiencias
            </Link>
          </ul>
          <div>
            <AuthenticationStatusButtons />
          </div>
        </div>
      </div>
    </nav>
  );
};
