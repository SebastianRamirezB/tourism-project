import Link from 'next/link';

export const ExperienceCard = ({ title, town, slug, image }) => {
  return (

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
  );
};
