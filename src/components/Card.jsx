import Image from "next/image"
import Link from "next/link"

export const Card = () => {
    return (
        <article className="w-[490px] h-[523px]">
            <Link href="#" className=" flex flex-col gap-6">
                <header className="overflow-hidden h-[400px] rounded-3xl">
                    <Image className="object-cover" src="/images/card-image.jpeg" width={490} height={400} alt="d" />
                </header>
                <main>
                    <h2 className="text-4xl font-bold">Croatia</h2>
                </main>
            </Link>
        </article>
    )
}
