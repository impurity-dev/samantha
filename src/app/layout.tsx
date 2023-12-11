import { Metadata } from 'next';
import './styles/globals.css';
import { EB_Garamond } from 'next/font/google';
import Header from './components/header';
import Footer from './components/footer';
import { Providers } from './providers';

const font = EB_Garamond({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Samantha',
    description: 'Professional Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning lang="en">
            <body className={font.className}>
                <Providers>
                    <Header />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
