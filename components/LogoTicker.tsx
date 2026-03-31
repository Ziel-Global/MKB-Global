import Image from "next/image";

const logos = [
    "/slider-images/innowise-logo.png",
    "/slider-images/29e3441716eeb4aef5a80b7ca6949718e11d2ef9.png",
    "/slider-images/39bdd707115fdf82d1d94abcc32f13bfaf0b9231.png",
    "/slider-images/SP3D-logo1-3-300x157-removebg-preview.png",
    "/slider-images/Frame 10.png",
    "/slider-images/applied-computing-new.png"
];

export default function LogoTicker() {
    // Duplicate the logos multiple times to ensure the list is wider than even ultra-wide monitors (e.g. 4K)
    const multipliedLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <div className="w-full overflow-hidden bg-white py-4 md:py-4 mt-2 md:mt-4 relative">
            {/* Increase duration proportionally to the multiplier (4 sets = 4x length = 100s instead of 25s) to preserve speed */}
            <div className="flex w-max items-center animate-marquee" style={{ animationDuration: "100s" }}>
                {/* First set of logos */}
                <div className="flex shrink-0 items-center gap-8 md:gap-10 pr-8 md:pr-10">
                    {multipliedLogos.map((logo, index) => (
                        <div key={`logo-1-${index}`} className="flex shrink-0 items-center justify-center min-w-[150px] md:min-w-[150px]">
                            <Image
                                src={logo}
                                alt={`Partner logo ${index + 1}`}
                                width={120}
                                height={40}
                                className={`object-contain w-auto shrink-0 ${logo.includes('applied-computing') ? 'max-h-[28px] md:max-h-[32px]' : 'max-h-[36px] md:max-h-[40px]'}`}
                            />
                        </div>
                    ))}
                </div>
                {/* Second set of logos for seamless loop */}
                <div className="flex shrink-0 items-center gap-8 md:gap-10 pr-8 md:pr-10" aria-hidden="true">
                    {multipliedLogos.map((logo, index) => (
                        <div key={`logo-2-${index}`} className="flex shrink-0 items-center justify-center min-w-[150px] md:min-w-[150px]">
                            <Image
                                src={logo}
                                alt={`Partner logo ${index + 1}`}
                                width={120}
                                height={40}
                                className={`object-contain w-auto shrink-0 ${logo.includes('applied-computing') ? 'max-h-[28px] md:max-h-[32px]' : 'max-h-[36px] md:max-h-[40px]'}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Optional Gradient fades on edges */}
            <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
    );
}
