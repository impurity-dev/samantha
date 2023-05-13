import Footer from './components/footer';
import Header from './components/header';
import NavigationBar from './components/navigation-bar';

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <Header />
            <NavigationBar />
            <main>
                <div className="flex flex-col"></div>
            </main>
            <Footer />
        </div>
    );
}
