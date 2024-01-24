'use client';
import { useRef } from 'react';
import CarouselCardList from './CarouselCardList';
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
            title="Top ubicaciones para explorar"
            description="Estos son algunos de los lugares más visitados en 2024"
            actionComponent={<MotionControlButtons actionFunction={moveSliderContent} />}
            content={<CarouselCardList sliderContentRef={sliderContentRef} />}
        />

  );
};
