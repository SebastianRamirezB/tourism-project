import { ExperienceServicesCard } from './ExperienceServicesCard';

export const ExperienceServices = () => {
  return (
    <section>
        <h2 className="text-2xl font-bold capitalize">incluye</h2>
        <div className="flex gap-4 py-9">
            <ExperienceServicesCard />
            <ExperienceServicesCard />
            <ExperienceServicesCard />

        </div>
    </section>
  );
};
