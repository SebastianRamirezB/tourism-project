import Image from 'next/image';
import Link from 'next/link';

export const TopPlaceCard = ({ video, text }) => {
  return (
    <Link href="/experiencias">
      <article className="w-[320px] h-[540px] rounded-2xl overflow-hidden relative">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          src={`/media/${video}.mp4`}
        />
        <div className="absolute top-0 w-full h-full">
          <footer className="absolute bottom-0 w-full h-14 px-4 py-1 flex items-center justify-start gap-2 bg-black/40">
            <Image src="/icons/location.svg" width={32} height={32} alt="" />
            <p className="text-white text-2xl">
              {text}
            </p>
          </footer>
        </div>
      </article>
    </Link>
  );
};
