import { ComponentSelect } from '@/components/ComponentSelect';
import { Hero } from '@/components/Hero';
import { SearchBar } from '@/components/SearchBar';
import { GridCards } from '@/components/ui/GridCards';

async function getData () {
  const res = await fetch('http://localhost:3001/api/experiences?limit=20', { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Experiencias () {
  const data = await getData();

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
                                <GridCards data={data} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
  );
}
