'use client';
import { useRef } from 'react';
import { CardList } from './CardList';
import { BaseCardsContainer } from './ui/BaseCardsContainer';
import { MotionControlButtons } from './MotionControlButtons';

export const TopExperiencies = () => {
  const sliderContentRef = useRef(null);

  const moveSliderContent = (direction) => {
    if (direction === 'right') {
      sliderContentRef.current.scrollLeft += 350;
    } else if (direction === 'left') {
      sliderContentRef.current.scrollLeft -= 350;
    }
  };

  return (
        <BaseCardsContainer
            title="Top Locations to Explore"
            description="Here are some of the most visited places in 2023"
            actionComponent={<MotionControlButtons actionFunction={moveSliderContent} />}
            content={<CardList sliderContentRef={sliderContentRef} cards={[{ id: 1, place: 'croatia', experienceTitle: 'motocros', image: '/images/card-image.jpeg' }, { id: 2, place: 'croatia', experienceTitle: 'motocros', image: '/images/card-image.jpeg' }, { id: 3, place: 'croatia', experienceTitle: 'motocros', image: '/images/card-image.jpeg' }, { id: 4, place: 'croatia', experienceTitle: 'motocros', image: '/images/card-image.jpeg' }, { id: 5, place: 'croatia', experienceTitle: 'motocros', image: '/images/card-image.jpeg' }, { id: 6, place: 'croatia', experienceTitle: 'motocros', image: '/images/card-image.jpeg' }]} />}
        />

  );
};
