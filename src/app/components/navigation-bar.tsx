export default function NavigationBar() {
    return (
        <nav className="flex">
            <ul className="flex justify-items-end space-x-4">
                {[
                    ['Home', '#home'],
                    ['About', '#about'],
                    ['Skills', '#skills'],
                    ['Contact', '#contact'],
                ].map(([title, url]) => (
                    <li key={title} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
                        <a href={url} key={title}>
                            {title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
