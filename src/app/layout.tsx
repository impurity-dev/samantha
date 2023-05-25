import './globals.css';
import { EB_Garamond } from 'next/font/google';

const font = EB_Garamond({ subsets: ['latin'] });

export const metadata = {
    title: 'Samantha',
    description: 'Professional Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={font.className}>{children}</body>
        </html>
    );
}
