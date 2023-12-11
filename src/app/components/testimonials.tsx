import Image from 'next/image';

function Testimonial({ children, name, orientation }: { children: React.ReactNode; name: string; orientation: 'start' | 'end' }) {
    return (
        <div className={'chat chat-' + orientation}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <Image
                        alt="Tailwind CSS chat bubble component"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        width="50"
                        height="50"
                    />
                </div>
            </div>
            <div className="chat-header">
                {name}
                {/* <time className="text-xs opacity-50">12:45</time> */}
            </div>
            <div className="chat-bubble">{children}</div>
            {/* <div className="chat-footer opacity-50">Delivered</div> */}
        </div>
    );
}

export default function Testimonials() {
    return (
        <>
            <Testimonial name="Jody" orientation="start">
                You were the Chosen One!
            </Testimonial>
        </>
    );
}
