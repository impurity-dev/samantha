import Image from 'next/image';

export default function Hero() {
    return (
        <div className="grid grid-cols-2 gap-3">
            <div className="space-y-6">
                <h1 className="text-6xl text-slate-200 ">Hi, I&apos;m Samantha</h1>
                <h2 className="text-5xl  text-pink-500">Master Stylist</h2>
                <h3 className="text-base text-slate-400 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </h3>
                <div className="grid grid-cols-2 gap-3">
                    <button className="rounded-full bg-pink-500 hover:bg-pink-600">Hire Me</button>
                    <button className="rounded-full bg-yellow-500 hover:bg-yellow-600">About Me</button>
                </div>
            </div>
            <div className="flex justify-center align-center">
                <div>
                    <Image
                        className="rounded-full overflow-hidden"
                        alt="Picture of Samantha for the Hero logo."
                        src="/samantha.jpg"
                        width={250}
                        height={250}
                    />
                </div>
            </div>
        </div>
    );
}
