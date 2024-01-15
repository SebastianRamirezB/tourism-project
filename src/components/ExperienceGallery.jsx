export const ExperienceGallery = () => {
  return (
        <section className="h-[500px] overflow-hidden grid grid-cols-4 grid-rows-2 gap-2">
            <div className="row-span-2">
                <img
                    className=" w-full h-full object-cover  rounded-2xl"
                    src="/images/exp1.jpg"
                    alt=""
                />
            </div>
            <div className="row-span-2">
                <img
                    className=" w-full h-full object-cover  rounded-2xl"
                    src="/images/exp2.jpg"
                    alt=""
                />
            </div>
            <div>
                <img
                    className=" w-full h-full object-cover  rounded-2xl"
                    src="/images/exp3.jpg"
                    alt=""
                />
            </div>
            <div className="col-start-3 row-start-2">
                <img
                    className=" w-full h-full object-cover  rounded-2xl"
                    src="/images/exp4.jpg"
                    alt=""
                />
            </div>
            <div className="row-span-2 col-start-4 row-start-1">
                <img
                    className=" w-full h-full object-cover  rounded-2xl"
                    src="/images/exp5.jpg"
                    alt=""
                />
            </div>
        </section>
  );
};
