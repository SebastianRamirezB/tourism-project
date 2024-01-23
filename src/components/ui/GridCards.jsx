import { ExperienceCard } from '../experiences/ExperienceCard';

export const GridCards = ({ data }) => {
  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-fluid gap-4" >
        {
          data.length !== 0
            ? (data.map(experience => {
                return (
              <ExperienceCard key={experience.id} title={experience.title} town={experience.town} slug={experience.slug} image={experience.images[0]} />
                );
              }))
            : <h1>no hay experiencias</h1>
        }
      </div>
    </div>
  );
};
