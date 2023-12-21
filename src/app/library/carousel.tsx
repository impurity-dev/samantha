import Image from 'next/image';

export type CarouselItem = { src: string; alt: string };

export function Carousel({ active, items }: { active: number; items: CarouselItem[] }) {
    return (
        <div className="flex flex-row">
            {items.map((item, i) => {
                if (i != active) return;
                return <Item key={i} {...item} />;
            })}
        </div>
    );
}

function Item({ src, alt }: CarouselItem) {
    return (
        <div className="relative" style={{ width: '15rem', height: '22.5rem' }}>
            <Image rel="preload" className="rounded object-cover" src={src} alt={alt} fill={true} />
        </div>
    );
}
