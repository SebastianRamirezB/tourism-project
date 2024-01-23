import { CarouselCard } from './CarouselCard';

async function getData () {
  const res = await fetch('http://localhost:3001/api/experiences?limit=20');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function CarouselCardList ({ sliderContentRef }) {
  const data = await getData();
  const topExperiences = data.filter(experience => experience.review > 3);
  return (
        <div ref={sliderContentRef} className=" carousel flex justify-between py- items-center h-[600px] w-full gap-6 overflow-x-auto scroll-smooth">
            {
                topExperiences.map(card =>
                    <CarouselCard
                        key={card.id}
                        place={card.town}
                        experienceTitle={card.title}
                        image={card.images[0]}
                        slug={card.slug}
                    />
                )
            }
        </div>
  );
};
