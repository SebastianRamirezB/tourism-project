import { CarouselCard } from './CarouselCard';

export const TopExperienceCardsList = ({ cards }) => {
  return (
    <div className=" carousel flex justify-between items-center w-full gap-6 overflow-x-auto scroll-smooth">
            {
                cards.map(card =>
                    <CarouselCard
                        key={card.id}
                        place={card.place}
                        experienceTitle={card.experienceTitle}
                        image={card.image}
                    />
                )
            }
        </div>
  );
};
