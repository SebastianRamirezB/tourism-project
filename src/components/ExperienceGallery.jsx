import Image from 'next/image';

export const ExperienceGallery = ({ images }) => {
  return (
        <section className="h-[500px] overflow-hidden grid grid-cols-4 grid-rows-2 gap-2">
            <div className="row-span-2">
                <Image
                    className=" w-full h-full object-cover  rounded-2xl"
                    src={images[0]}
                    alt=""
                    width={400}
                    height={500}
                />
            </div>
            <div className="row-span-2">
                <Image
                    className=" w-full h-full object-cover  rounded-2xl"
                    src={images[1]}
                    alt=""
                    width={400}
                    height={500}
                />
            </div>
            <div>
                <Image
                    className=" w-full h-full object-cover  rounded-2xl"
                    src={images[2]}
                    alt=""
                    width={400}
                    height={500}
                />
            </div>
            <div className="col-start-3 row-start-2">
                <Image
                    className=" w-full h-full object-cover  rounded-2xl"
                    src={images[3]}
                    alt=""
                    width={400}
                    height={500}
                />
            </div>
            <div className="row-span-2 col-start-4 row-start-1">
                <Image
                    className=" w-full h-full object-cover  rounded-2xl"
                    src={images[4]}
                    alt=""
                    width={400}
                    height={500}
                />
            </div>
        </section>
  );
};
