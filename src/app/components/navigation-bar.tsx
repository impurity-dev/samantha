import Link from 'next/link';

const navLinks = [
    ['Home', '/'],
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Contact', '#contact'],
];

export default function NavigationBar() {
    return (
        <header className="flex justify-between items-center p-6">
            <Link className="text-yellow-500 hover:text-pink-500 py-1 px-2 text-5xl" href="/">
                <span>Samantha</span>
            </Link>
            <nav>
                <ul className="flex space-x-6">
                    {navLinks.map(([title, url], index) => (
                        <Link href={url} key={index}>
                            <li className="rounded-sm py-1 px-2 font-medium text-slate-500 hover:text-pink-500">{title}</li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
