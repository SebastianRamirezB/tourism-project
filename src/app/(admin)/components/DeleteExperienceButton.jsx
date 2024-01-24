'use client';
import { getCookie } from 'cookies-next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const DeleteExperienceButton = ({ id }) => {
  const router = useRouter();

  const deleteExperience = async () => {
    const token = getCookie('tourism-token');

    await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/experiences/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    router.refresh();
  };

  return (
    <button className="rounded-full text-white bg-white p-2" onClick={deleteExperience}>
        <Image src="/icons/delete.svg" width={32} height={32} alt="" />
    </button>
  );
};
