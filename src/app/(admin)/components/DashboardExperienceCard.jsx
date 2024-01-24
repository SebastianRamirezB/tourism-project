import { Modal } from '@/components/ui/Modal';
import Link from 'next/link';
import { ExperienceUpdateForm } from './ExperienceUpdateForm';
import { DeleteExperienceButton } from './DeleteExperienceButton';

export const DashboardExperienceCard = ({ id, title, town, slug, image }) => {
  return (

    <div className="relative">
      <div className="absolute top-2 right-2 flex gap-2 justify-center items-center" >
        <Modal updateVersion><ExperienceUpdateForm id={id} /></Modal>
        <DeleteExperienceButton id={id} />
      </div>
      <Link href={`/experiencia/${slug}`}>
        <article>
          <div className=" min-h-[400px] w-full overflow-hidden rounded-3xl sm:h-64">
            <img
              src={image}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="mt-6">
            <span className="text-[#5B5B5B] text-xl font-medium">{town}</span>
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
        </article>
      </Link>
    </div>
  );
};
