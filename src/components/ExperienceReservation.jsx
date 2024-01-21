import Image from 'next/image';
import { ReservationForm } from './ReservationForm';
import { SocialLinkButton } from './SocialLinkButton';

export const ExperienceReservation = ({ email, tel, instagramTag, whatsappNumber, facebookTag }) => {
  return (
        <aside className="w-[400px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl p-4 flex flex-col gap-4">
            <ReservationForm />
            <div className="w-full border-b border-primary"></div>
            <SocialLinkButton socialNetwork="instagram" userTag={instagramTag} />
            <SocialLinkButton socialNetwork="facebook" userTag={facebookTag} />
            <SocialLinkButton socialNetwork="whatsapp" whatsappNumber={whatsappNumber} />
            <div className="w-full border-b border-primary"></div>
            <footer className="flex justify-between">
                <div className="flex items-center gap-2">
                    <Image width={21} height={21} src="/icons/email.svg" alt="" />
                    <p className=" max-w-[250px] break-words">{email}</p>
                </div>
                <div className="flex items-center gap-2">
                    <Image width={21} height={21} src="/icons/phone.svg" alt="" />
                    <p>{tel}</p>
                </div>
            </footer>
        </aside>
  );
};
