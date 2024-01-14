import { ReservationForm } from './ReservationForm';
import { SocialLinkButton } from './SocialLinkButton';

export const ExperienceReservation = () => {
  return (
        <aside className="w-96 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl p-4 flex flex-col gap-4">
            <ReservationForm />
            <div className="w-full border-b border-primary"></div>
            <SocialLinkButton socialNetwork="instagram"/>
            <SocialLinkButton socialNetwork="facebook" />
            <SocialLinkButton socialNetwork="whatsapp"/>
            <div className="w-full border-b border-primary"></div>
            <footer className="flex justify-between">
                <div className="flex items-center gap-2">
                    <p>email@gmail.com</p>
                </div>
                <div className="flex items-center gap-2">
                    <p>3116578912</p>
                </div>
            </footer>
        </aside>
  );
};
