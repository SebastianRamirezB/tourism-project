import { ExperienceGallery } from '@/components/ExperienceGallery';
import { ExperienceReservation } from '@/components/ExperienceReservation';
import { ExperienceServices } from '@/components/ExperienceServices';
import { ExperienceSummary } from '@/components/ExperienceSummary';
import { Hero } from '@/components/Hero';

async function getData (slug) {
  const res = await fetch(`http://localhost:3001/api/experiences/${slug}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Experiencia ({ params }) {
  const experience = await getData(params.slug);

  const includes = {
    food: experience.food,
    transport: experience.transport,
    drinks: experience.drinks,
    equipment: experience.equipment,
    tickets: experience.tickets,
    sure: experience.sure

  };

  return (
    <main>
      <Hero heightSize={400} title={experience.title} />
      <section className="py-28">
        <div className="wrapper">
          <ExperienceGallery />
          <section className="grid grid-cols-[60%_40%] mt-24" >
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-xl">{experience.town}, {experience.country}</span>
              </div>
              <ExperienceSummary description={experience.description} />
              <ExperienceServices {...includes}/>
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