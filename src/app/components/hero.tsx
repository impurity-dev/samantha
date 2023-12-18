'use client';
import whiteFlowers from '../../../public/images/white-flowers.jpg';
import mountains from '../../../public/images/mountains.jpg';
import hair1 from '../../../public/images/hair-1.jpg';
import hair2 from '../../../public/images/hair-2.jpg';
import { useState } from 'react';
import Image from 'next/image';
import styles from './hero.module.scss';
import { Button } from '../library/button';

type BundleImage = { src: string; alt: string };
type Bundle = { background: BundleImage; carousel: BundleImage; title: string; caption: string };
const images: Bundle[] = [
    {
        title: 'Hair 1',
        caption:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at dolor a elit vestibulum vestibulum. Nunc nec fringilla libero. Maecenas tincidunt purus eu odio fringilla cursus non non metus. Pellentesque tempor vestibulum nibh nec sagittis. Duis vel tellus vitae dui tincidunt tempus. Nunc pharetra condimentum lectus, quis condimentum eros rhoncus nec. Quisque ut mattis erat. Curabitur non rutrum leo, a ornare orci. Praesent odio velit, laoreet nec turpis sed, eleifend semper dui. Suspendisse non felis lacinia, vestibulum libero et, fermentum nibh. Phasellus nibh felis, egestas non ante sit amet, pellentesque vehicula velit. Donec quis ligula condimentum, volutpat massa sed, semper ligula. Aenean gravida nibh nec enim molestie rutrum. Ut nec purus libero. Etiam feugiat felis vel massa eleifend suscipit.',
        background: { src: whiteFlowers.src, alt: 'White flowers' },
        carousel: { src: hair1.src, alt: 'Hair 1' },
    },
    {
        title: 'Hair 1',
        caption:
            'Vestibulum vitae mi a odio viverra ornare. Nunc consequat pharetra risus nec convallis. Ut dictum eu tortor nec aliquam. Proin suscipit enim eu lorem rhoncus, eget rutrum odio semper. Nulla volutpat egestas dolor, in mattis eros maximus vel. Nullam venenatis ac nisi nec ullamcorper. Donec lorem nunc, eleifend sed sollicitudin vel, porta a lectus. Vestibulum commodo ullamcorper nisi, eget tristique tellus ultricies id. Fusce arcu libero, blandit tincidunt ligula interdum, ullamcorper tincidunt quam. Nulla pulvinar tellus eget mauris scelerisque, in iaculis quam pellentesque. Nulla efficitur elit ante, et dignissim nunc malesuada ac. Etiam eu leo pulvinar, condimentum tortor at, bibendum purus. Nam scelerisque leo risus, sit amet imperdiet nisl euismod at. Duis risus turpis, tincidunt at augue at, tristique dignissim tellus. Integer cursus ornare eros, in vehicula nunc sodales et.',
        background: { src: mountains.src, alt: 'Mountains' },
        carousel: { src: hair2.src, alt: 'Hair 2' },
    },
];

export default function Hero() {
    const { zoom } = styles;
    const [index, setIndex] = useState(0);
    const [animation, setAnimation] = useState(zoom);
    const { title, caption, background, carousel } = images[index];
    const nextIndex = () => {
        setIndex((index + 1) % images.length);
        setAnimation(zoom);
    };
    return (
        <>
            <div
                className={'text-white bg-center bg-[length:100%_100%] min-h-screen ' + animation}
                onAnimationEnd={() => setAnimation('')}
                style={{ backgroundImage: `url(${background.src})` }}
            >
                <div className="flex pt-20">
                    <div className="flex flex-col">
                        <span className="text-[14rem]">{title}</span>
                        <span>{caption}</span>
                    </div>
                    <div className="flex flex-col">
                        <CarouselItem {...carousel} />
                        <div className="d-flex flex-row">
                            <Button onClick={nextIndex}>Left</Button>
                            <Button onClick={nextIndex}>Right</Button>
                        </div>
                    </div>
                </div>
                {/* <div className="grid grid-rows-3 grid-cols-[200px_minmax(900px,_1fr)_100px] gap-4 h-max w-max">
                    <div className="row-span-3 bg-red-800">01</div>
                    <div className="col-span-2 bg-green-800">02</div>
                    <div className="row-span-2 col-span-2 bg-blue-800">03</div>
                </div> */}
            </div>
        </>
    );
}

function CarouselItem({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="relative" style={{ width: '15rem', height: '22.5rem' }}>
            <Image rel="preload" className="rounded object-cover" src={src} alt={alt} fill={true} />
        </div>
    );
}
