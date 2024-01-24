import { SliderTopPlaces } from './SliderTopPlaces';
import { TopPlaceCard } from './TopPlaceCard';

export const TopPlaces = () => {
  return (
    <div className="w-full">
      <div className="wrapper">
        <section className="w-full  h-full flex gap-4 py-12">
          <div className=" w-[40%] flex items-center ">
            <p className="text-6xl w-full font-bold">
              Experiencias inolvidables organizadas por gente local
            </p>
          </div>
          <div className="w-[60%] h-full overflow-hidden">
            <SliderTopPlaces>
              <TopPlaceCard video="amazonas" text="Amazonas" />
              <TopPlaceCard video="bogota" text="Bogotá" />
              <TopPlaceCard video="medellin" text="Medellín" />
            </SliderTopPlaces>
          </div>
        </section>
      </div>
    </div>

  );
};
