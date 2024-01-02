import Image from "next/image"
import Link from "next/link"

export const Card = ({ image, experienceTitle, place }) => {
    return (
        <article className="min-w-[386px] max-w-[386px] h-[523px]">
            <Link href="#" className=" flex flex-col gap-6">
                <header  className="overflow-hidden h-[400px] rounded-3xl">
                    <Image className="object-cover" src={image} width={386} height={400} alt="d" />
                </header>
                <main>
                    {
                        experienceTitle ? (<>
                            <span className="text-[#5B5B5B] text-2xl font-medium">{place}</span>
                            <h2 className="text-4xl font-bold">{experienceTitle}</h2>
                        </>) :
                            (<h2 className="text-4xl font-bold">{place}</h2>)
                    }

                </main>
            </Link>
        </article>
    )
}
