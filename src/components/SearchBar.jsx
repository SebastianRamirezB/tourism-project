'use client';

export const SearchBar = ({ actionFunction, state }) => {
  return (
        <label className=" flex items-center justify-between border h-[78px] py-5 px-11 border-disabled rounded-[80px]">
            <input className="text-2xl h-full w-full outline-none" type="text" placeholder="Busca tu experiencia..." onChange={actionFunction} value={state} />
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M27.9998 28L22.0185 22.008M25.3332 14C25.3332 17.0058 24.1391 19.8885 22.0137 22.0139C19.8883 24.1393 17.0056 25.3333 13.9998 25.3333C10.9941 25.3333 8.11137 24.1393 5.98596 22.0139C3.86055 19.8885 2.6665 17.0058 2.6665 14C2.6665 10.9942 3.86055 8.11153 5.98596 5.98611C8.11137 3.8607 10.9941 2.66666 13.9998 2.66666C17.0056 2.66666 19.8883 3.8607 22.0137 5.98611C24.1391 8.11153 25.3332 10.9942 25.3332 14Z" stroke="#4169E1" strokeWidth="2" strokeLinecap="round" />
            </svg>
        </label>
  );
};
