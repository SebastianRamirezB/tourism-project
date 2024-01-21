import { ExperienceServicesCard } from './ExperienceServicesCard';

export const ExperienceServices = ({ transport, food, drinks, equipment, tickets, sure }) => {
  return (
    <section>
        <h2 className="text-2xl font-bold capitalize">incluye</h2>
        <div className="flex gap-4 py-9">
        {
          transport && <ExperienceServicesCard text="transporte" icon="bus"/>
        }
        {
          food && <ExperienceServicesCard text="comida" icon="food" />
        }
        {
          drinks && <ExperienceServicesCard text="bebidas" icon="drinks" />
        }
        {
          equipment && <ExperienceServicesCard text="equipamiento" icon="equipment" />
        }
        {

          tickets && <ExperienceServicesCard text="boletos" icon="tickets" />

        }
        {

          sure && <ExperienceServicesCard text="seguro" icon="sure" />
        }
        </div>
    </section>
  );
};
