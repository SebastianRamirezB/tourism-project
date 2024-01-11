import { Hero } from '@/components/Hero';
import { TopExperiencies } from '@/components/TopExperiencies';
import { TopPlaces } from '@/components/TopPlaces';

export default function Home() {
    return (
        <main className="flex flex-col gap-36">
            <Hero title="Discover New Places and Create Unforgettable Memories"/>
            <TopPlaces />
            <TopExperiencies />
        </main>
    );
}
