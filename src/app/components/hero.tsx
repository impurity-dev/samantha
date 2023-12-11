export default function Hero() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(/images/white-flowers.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content backdrop-blur bg-white/15 rounded p-10">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hey there!</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque
                        aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Book an Appointment</button>
                </div>
            </div>
        </div>
    );
}
