import { Card } from '@/components/Card';
import { Hero } from '@/components/Hero';
import { TopExperiencies } from '@/components/TopExperiencies';
import { TopPlaces } from '@/components/TopPlaces';
import { BaseCardsContainer } from '@/components/ui/BaseCardsContainer';

export default function Home() {
    return (
        <main className="flex flex-col gap-36">
            <Hero />
            <TopPlaces />
            <TopExperiencies />
        </main>
    );
}
