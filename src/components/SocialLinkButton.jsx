import Image from 'next/image';
import Link from 'next/link';

export const SocialLinkButton = ({ socialNetwork, userTag, whatsappNumber }) => {
  switch (socialNetwork) {
    case 'instagram':
      return (
                <Link
                    className={'flex justify-center items-center h-12 w-full  rounded-2xl text-4xl border-2 border-solid border-black duration-300 ease-out  group hover:bg-primary/70'}
                    href={`https://www.instagram.com/${userTag}`}
                    target="_blank"
                >
                    <Image src="/icons/instagram.svg" width={42} height={42} alt="" />
                </Link>
      );
    case 'facebook':
      return (
                <Link
                    className={'flex justify-center items-center h-12 w-full  rounded-2xl text-4xl border-2 border-solid border-black duration-300 ease-out  group hover:bg-primary/70'}
                    href={`https://www.facebook.com/${userTag}`}
                    target="_blank"
                >
                    <Image src="/icons/facebook.svg" width={42} height={42} alt="" />
                </Link>
      );
    case 'whatsapp':
      return (
                <Link
                    className={'flex justify-center items-center h-12 w-full  rounded-2xl text-4xl border-2 border-solid border-black duration-300 ease-out  group hover:bg-primary/70'}
                    href={`https://wa.me/+57${whatsappNumber}`}
                >
                    <Image src="/icons/whatsapp.svg" width={42} height={42} alt="" />
                </Link>
      );
  }
};
