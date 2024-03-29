import { Urbanist } from 'next/font/google';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/Footer';

import '../globals.css';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata = {
  title: 'Travel Pulse - El mundo es tu destino',
  description: 'El mundo es tu destino'
};

export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      <body className={urbanist.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
