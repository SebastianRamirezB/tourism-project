'use client';

import { CreateAndUpdateExperienceButton } from '@/app/(admin)/components/CreateAndUpdateExperienceButton';
import Image from 'next/image';

import { useEffect, useState } from 'react';

export const Modal = ({ children, textButton, updateVersion = false }) => {
  const [isActiveModal, setIsActiveModal] = useState();

  const changeActive = () => {
    localStorage.setItem('isModalActive', `${!isActiveModal}`);
    setIsActiveModal(JSON.parse(localStorage.getItem('isModalActive')));
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    setIsActiveModal(JSON.parse(localStorage.getItem('isModalActive')));
  }, [JSON.parse(localStorage.getItem('isModalActive'))]);

  return (
        <>
            <CreateAndUpdateExperienceButton actionFunction={changeActive} text={textButton} updateVersion={updateVersion} />
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
