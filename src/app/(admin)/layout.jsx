import { Urbanist } from 'next/font/google';

import '../globals.css';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata = {
  title: 'Travel Pulse - El mundo es tu destino',
  description: 'El mundo es tu destino'
};

export default function RootLayout ({ children }) {
  return (
    <div className={urbanist.className}>
      {children}
    </div>
  );
}
