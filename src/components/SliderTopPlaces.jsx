'use client';
import { useRef } from 'react';

export const SliderTopPlaces = ({
  children
}) => {
  const sliderContentRef = useRef(null);

  const moveSliderContent = (direction) => {
    if (direction === 'right') {
      sliderContentRef.current.scrollLeft += 350;
    }

    if (direction === 'left') {
      sliderContentRef.current.scrollLeft -= 350;
    }
  };

  return (
    <section className=" flex flex-col items-end">
      <div className="flex justify-end gap-4 items-center mb-3">
        <button
          onClick={() => moveSliderContent('left')}
          className="flex items-center justify-center bg-disabled w-[72px] h-[72px] rounded-full cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
            <path d="M15.4062 27.3415L6.05623 17.9915C5.91456 17.8499 5.81398 17.6964 5.75448 17.5311C5.69498 17.3659 5.6657 17.1888 5.66665 16.9999C5.66665 16.811 5.6964 16.6339 5.7559 16.4686C5.8154 16.3034 5.91551 16.1499 6.05623 16.0082L15.4062 6.65822C15.666 6.39849 15.9908 6.26297 16.3809 6.25163C16.771 6.2403 17.1072 6.37583 17.3896 6.65822C17.6729 6.91794 17.8207 7.24283 17.833 7.63288C17.8453 8.02294 17.7093 8.35916 17.425 8.64155L10.4833 15.5832H26.3146C26.716 15.5832 27.0526 15.7192 27.3246 15.9912C27.5966 16.2632 27.7322 16.5994 27.7312 16.9999C27.7312 17.4013 27.5957 17.738 27.3246 18.01C27.0536 18.282 26.7169 18.4175 26.3146 18.4165H10.4833L17.425 25.3582C17.6847 25.6179 17.8207 25.9485 17.833 26.3499C17.8453 26.7513 17.7093 27.0818 17.425 27.3415C17.1653 27.6249 16.8347 27.7666 16.4333 27.7666C16.0319 27.7666 15.6896 27.6249 15.4062 27.3415Z" fill="white" />
          </svg>

        </button>
        <button
          onClick={() => moveSliderContent('right')}
          className=" flex items-center justify-center bg-primary w-[72px] h-[72px] rounded-full cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
            <path d="M18.5938 27.3415L27.9438 17.9915C28.0854 17.8499 28.186 17.6964 28.2455 17.5311C28.305 17.3659 28.3343 17.1888 28.3334 16.9999C28.3334 16.811 28.3036 16.6339 28.2441 16.4686C28.1846 16.3034 28.0845 16.1499 27.9438 16.0082L18.5938 6.65822C18.334 6.39849 18.0092 6.26297 17.6191 6.25163C17.229 6.2403 16.8928 6.37583 16.6104 6.65822C16.3271 6.91794 16.1793 7.24283 16.167 7.63288C16.1547 8.02294 16.2907 8.35916 16.575 8.64155L23.5167 15.5832H7.68543C7.28405 15.5832 6.94735 15.7192 6.67535 15.9912C6.40335 16.2632 6.26782 16.5994 6.26877 16.9999C6.26877 17.4013 6.4043 17.738 6.67535 18.01C6.94641 18.282 7.2831 18.4175 7.68543 18.4165H23.5167L16.575 25.3582C16.3153 25.6179 16.1793 25.9485 16.167 26.3499C16.1547 26.7513 16.2907 27.0818 16.575 27.3415C16.8347 27.6249 17.1653 27.7666 17.5667 27.7666C17.9681 27.7666 18.3104 27.6249 18.5938 27.3415Z" fill="white" />
          </svg>

        </button>
      </div>
      <div
        ref={sliderContentRef}
        className=" carousel flex items-center w-full h-full overflow-x-scroll gap-4 scroll-smooth no-scrollbar"
      >
        {children}
      </div>
    </section>
  );
};
