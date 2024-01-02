import { ComponentSelect } from "@/components/ComponentSelect";
import { SearchBar } from "@/components/SearchBar";
import { GridCards } from "@/components/ui/GridCards";

export default function Experiences() {
    return (
        <main className="flex flex-col gap-36">
            <section>
                <div className="wrapper">
                    <div className="flex flex-col gap-10">
                        <div className=" flex flex-col gap-10 w-[900px]">
                            <SearchBar />
                            <div className="flex w-full gap-[30px]">
                                <ComponentSelect />
                                <ComponentSelect />
                            </div>
                        </div>
                        <GridCards />
                    </div>
                </div>
            </section>
        </main>
    )
}