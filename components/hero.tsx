export default function Hero() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(/images/white-flowers.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content backdrop-blur bg-white/20 rounded p-10">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello, gorgeous!</h1>
                    <p className="mb-5">
                        I&apos;m Samantha, your dedicated hair artisan, and I&apos;m here to elevate your style to new heights. Step into a
                        world where passion meets precision, and every strand is a canvas for artistic expression.
                    </p>
                    <button className="btn btn-primary mr-2">Book a Appointment</button>
                    <button className="btn btn-outline btn-secondary">Book an Consultation</button>
                </div>
            </div>
        </div>
    );
}
