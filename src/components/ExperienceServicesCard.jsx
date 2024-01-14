import Image from 'next/image';

export const ExperienceServicesCard = () => {
  return (
    <article className="w-[120px] h-[120px] flex flex-col  justify-center items-center gap-2 rounded-2xl shadow-[0px_0px_0px_1px_#00000024] cursor-pointer">
    <Image width={32} height={32} src="/icons/bus.svg" alt="" />
    <p className="">Tránsporte</p>
  </article>
  );
};
