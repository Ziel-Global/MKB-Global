import Image from "next/image";

const logos = [
    "/slider-images/29e3441716eeb4aef5a80b7ca6949718e11d2ef9.png",
    "/slider-images/39bdd707115fdf82d1d94abcc32f13bfaf0b9231.png",
    "/slider-images/8817ba20c7d2317cceefdb6164db9a9550a5dcce.png",
    "/slider-images/b5f0af026953b945a92a3bb0a8a23fc641e85d52.png",
    "/slider-images/fbf484095b4d10ed6abf6c611faf3f91a01f1ddb.png",
];

export default function LogoTicker() {
    return (
        <div className="w-full overflow-hidden bg-white py-4 mt-4 relative">
            <div className="flex w-[200%] animate-marquee">
                {/* First set of logos */}
                <div className="flex w-1/2 items-center justify-around px-8">
                    {logos.map((logo, index) => (
                        <div key={`logo-1-${index}`} className="flex items-center justify-center min-w-[150px]">
                            <Image
                                src={logo}
                                alt={`Partner logo ${index + 1}`}
                                width={120}
                                height={40}
                                className="object-contain max-h-[40px]"
                            />
                        </div>
                    ))}
                </div>
                {/* Second set of logos for seamless loop */}
                <div className="flex w-1/2 items-center justify-around px-8">
                    {logos.map((logo, index) => (
                        <div key={`logo-2-${index}`} className="flex items-center justify-center min-w-[150px]">
                            <Image
                                src={logo}
                                alt={`Partner logo ${index + 1}`}
                                width={120}
                                height={40}
                                className="object-contain max-h-[40px]"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Optional Gradient fades on edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
    );
}
