import { DashboardExperienceCard } from '@/app/(admin)/components/DashboardExperienceCard';
import { ExperienceCard } from '../experiences/ExperienceCard';

export const GridCards = ({ data, isModifiable = false }) => {
  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-fluid gap-4" >
        {
          data.length !== 0
            ? (data.map(experience => {
                return (

                  isModifiable
                    ? (<DashboardExperienceCard key={experience.id} id={experience.id} title={experience.title} town={experience.town} slug={experience.slug} image={experience.images[0]} />)
                    : (<ExperienceCard key={experience.id} title={experience.title} town={experience.town} slug={experience.slug} image={experience.images[0]} />)

                );
              }))
            : <h1>No hay resultados</h1>
        }
      </div>
    </div>
  );
};
