import { ExperienceGallery } from "@/components/ExperienceGallery";
import { ExperienceReservation } from "@/components/ExperienceReservation";
import { ExperienceSummary } from "@/components/ExperienceSummary";

export default function Experiencia({ params }) {
  return (
    <main className="mt-32">
      <section>
        <div className="wrapper">
          <h1 className="text-4xl font-bold mb-16">
            Senderismo y camiantas Ecologicas en naturaleza
          </h1>
          <ExperienceGallery />
          <section className="grid grid-cols-[60%_40%] mt-24" >
            <div>
              <ExperienceSummary />
            </div> 
            <div className="place-self-end">
              <ExperienceReservation />
            </div>
          </section>
        </div>
      </section>
    </main>

  )
}