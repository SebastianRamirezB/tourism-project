import { ComponentSelect } from '@/components/ComponentSelect';
import { Hero } from '@/components/Hero';
import { SearchBar } from '@/components/SearchBar';
import { GridCards } from '@/components/ui/GridCards';
import { initialData } from '@/data/seed-data';

export default function Experiencias () {
  const data = initialData;
  return (
        <>
            <Hero heightSize={400} title="busca tu nueva experiencia" backgroundImage="/images/background-experiences.webp" />
            <main className="flex flex-col gap-36 py-28">
                <section>
                    <div className="wrapper">
                        <div className="flex flex-col gap-10">
                            <div className=" flex flex-col gap-10 ">
                                <SearchBar />
                                <div className="flex w-full gap-[30px]">
                                    <ComponentSelect />
                                    <ComponentSelect />
                                </div>
                                <GridCards data={data.experiences}/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
  );
}
