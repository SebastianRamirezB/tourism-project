import Image from 'next/image';

export const Footer = () => {
  return (
    <div className="bg-primary flex flex-col gap-8 justify-center items-center h-[400px] mt-40">
        <Image src="/images/logo.png" width={147} height={120} alt="" />
        <p className="text-2xl font-semibold text-white">© 2024 Travel Pulse. All rights reserved</p>
    </div>
  );
};
