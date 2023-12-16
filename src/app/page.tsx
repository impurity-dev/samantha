import { Carousel } from './components/carousel';
import Hero from './components/hero';
import Testimonials from './components/testimonials';

export default function Home() {
    return (
        <>
            <Hero />
            <div className="py-5 px-10">
                <Carousel />
                <div className="divider divider-primary">Primary</div>
                <Testimonials />
            </div>
        </>
    );
}
