import { ExperienceGallery } from '@/components/ExperienceGallery';
import { ExperienceReservation } from '@/components/ExperienceReservation';
import { ExperienceServices } from '@/components/ExperienceServices';
import { ExperienceSummary } from '@/components/ExperienceSummary';
import { Hero } from '@/components/Hero';

export default function Experiencia ({ params }) {
  return (
    <main>
      <Hero heightSize={400} title="Senderismo y camiantas Ecologicas en naturaleza"/>
      <section className="py-28">
        <div className="wrapper">
          <ExperienceGallery />
          <section className="grid grid-cols-[60%_40%] mt-24" >
            <div className="flex flex-col gap-6">
              <ExperienceSummary />
              <ExperienceServices />
            </div>
            <div className="place-self-end">
              <ExperienceReservation />
            </div>
          </section>
        </div>
      </section>
    </main>

  );
}
