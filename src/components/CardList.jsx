import { Card } from './Card';

export const CardList = ({ cards, sliderContentRef }) => {
  return (
        <div ref={sliderContentRef} className="flex justify-between items-center w-full gap-6 overflow-x-auto scroll-smooth">
            {
                cards.map(card =>
                    <Card
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
