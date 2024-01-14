import { CardList } from './CardList';
import { RedirectButton } from './RedirectButton';
import { BaseCardsContainer } from './ui/BaseCardsContainer';

export const TopPlaces = () => {
  return (

    <BaseCardsContainer
      title="Plan your best trip ever"
      description="Here are some of the most visited places in 2023"
      actionComponent={<RedirectButton link="#" text="view all destination" />}
      content={<CardList cards={[{ id: 1, place: 'croatia', image: '/images/card-image.jpeg' }, { id: 2, place: 'croatia', image: '/images/card-image.jpeg' }, { id: 3, place: 'croatia', image: '/images/card-image.jpeg' }]} />}
    />

  );
};
