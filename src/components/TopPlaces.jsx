import { SliderTopPlaces } from './SliderTopPlaces';
import { TopPlaceCard } from './TopPlaceCard';

export const TopPlaces = () => {
  return (
    <div className="wrapper">
      <div className=" w-full ">
        <section className="flex justify-between py-12">
          <div className=" w-2/5 flex  items-center">
            <p className="text-6xl font-bold">
              Experiencias inolvidables organizadas por gente local
            </p>
          </div>
          <div className="w-3/5 h-full">
            <SliderTopPlaces>
              <TopPlaceCard video="amazonas" text="Amazonas" />
              <TopPlaceCard video="bogota" text="Bogotá"/>
              <TopPlaceCard video="medellin" text="Medellín"/>
            </SliderTopPlaces>
          </div>
        </section>
      </div>

    </div>

  );
};
