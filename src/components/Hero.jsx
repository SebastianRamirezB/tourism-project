import Image from 'next/image';

export const Hero = ({ title, heightSize, backgroundImage }) => {
  const height = heightSize ? `h-[${heightSize}px]` : 'h-screen';

  return (
    <section className={`${height} w-full relative`} >
      <Image className="w-full h-full object-cover absolute -z-10" src={backgroundImage} width={900} height={900} alt="" />
      <div className="bg-black/30 w-full h-full flex items-center justify-center">
        <div className="wrapper">
          <h1 className="text-white capitalize text-7xl text-center font-extrabold">{title}</h1>
        </div>
      </div>
    </section>
  );
};
