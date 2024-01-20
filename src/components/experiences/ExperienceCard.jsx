import Link from 'next/link';

export const ExperienceCard = ({ title, country, slug }) => {
  return (

    <Link href={`/experiencia/${slug}`}>
      <article>
        <div className=" min-h-[400px] w-full overflow-hidden rounded-3xl sm:h-64">
          <img
            src="/images/card-image.jpeg"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="mt-6">
          <span className="text-[#5B5B5B] text-2xl font-medium">{country}</span>
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>
      </article>
    </Link>
  );
};