import { ExperienceCard } from '../experiences/ExperienceCard';

export const GridCards = ({ data }) => {
  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-fluid gap-4" >
        {
          data.map(experience => {
            return (
              <ExperienceCard key={experience.slug} title={experience.title} country={experience.country} slug={experience.slug} />
            );
          })
        }
      </div>
    </div>
  );
};
