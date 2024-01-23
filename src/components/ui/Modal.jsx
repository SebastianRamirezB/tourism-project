'use client';

import Image from 'next/image';
import { CreateExperienceButton } from '@/app/(admin)/components/CreateExperienceButton';
import { useState } from 'react';

export const Modal = ({ children }) => {
  const [isActiveModal, setIsActiveModal] = useState(false);

  const changeActive = () => {
    setIsActiveModal(!isActiveModal);
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
        <>
            <CreateExperienceButton actionFunction={changeActive} />
            {isActiveModal && (
            <div className="fixed top-0 left-0 h-screen w-full z-40">
                <div onClick={changeActive} className="w-full h-full bg-black/40 flex justify-center items-center cursor-pointer">
                    <div className="wrapper">
                        <div onClick={stopPropagation} className="bg-white rounded-[40px] py-16 px-14 h-[700px] relative">
                            <button onClick={changeActive} className="absolute top-5 right-10">
                                <Image src="/icons/close.svg" width={60} height={60} alt="icono de cerrar" />
                            </button>
                            {children}
                        </div>
                    </div>
                </div>
            </div>)}
        </>

  );
};
