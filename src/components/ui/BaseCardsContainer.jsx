export const BaseCardsContainer = ({ title, description, actionComponent, content }) => {
  return (
        <section className="w-full" >
            <div className="wrapper">
                <div className="flex flex-col gap-20">

                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-5xl font-bold mb-5">
                            { title }</h2>
                            <p className="text-secondary text-2xl">
                            { description }</p>
                        </div>
                        <div>
                            { actionComponent }
                        </div>
                    </div>
                    <div>
                        { content }
                    </div>
                </div>
            </div>
        </section>
  );
};
