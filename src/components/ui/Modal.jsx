'use client';

import Image from 'next/image';

export const Modal = ({ children, active, actionFunction }) => {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return active && (
        <div className="fixed top-0 h-screen w-full z-40">
            <div onClick={() => actionFunction()} className="w-full h-full bg-black/40 flex justify-center items-center cursor-pointer">
                <div className="wrapper">
                    <div onClick={stopPropagation} className="bg-white rounded-[40px] py-16 px-14 h-[700px] relative">
                        <button onClick={() => actionFunction()} className="absolute top-5 right-10">
                            <Image src="/icons/close.svg" width={60} height={60} alt="icono de cerrar" />
                        </button>
                        {children}
                    </div>
                </div>
            </div>
        </div>
  );
};
