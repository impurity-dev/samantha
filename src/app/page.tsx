import Footer from './components/footer';
import Hero from './components/hero';
import NavigationBar from './components/navigation-bar';

export default function Home() {
    return (
        <div>
            <NavigationBar />
            <div className="flex min-h-screen flex-col items-center justify-between p-24">
                <Hero />
                <main>
                    <div className="flex flex-col">TODO Main</div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
