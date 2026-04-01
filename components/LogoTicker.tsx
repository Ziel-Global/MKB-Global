import Image from "next/image";

const logos = [
    "/slider-images/innowise-logo.png",
    "/slider-images/39bdd707115fdf82d1d94abcc32f13bfaf0b9231.png",
    "/slider-images/SP3D-logo1-3-300x157-removebg-preview.png",
    "/slider-images/Frame 10.png",
    "/slider-images/applied-computing-new.png",
    "/slider-images/image001.png",
    "/slider-images/image002.jpg",
    "/slider-images/image003.png",
    "/slider-images/image010.png",
    "/slider-images/image011.png",
    "/slider-images/image013.png",
    "/slider-images/image014.jpg",
    "/slider-images/image015.jpg",
    "/slider-images/image016.png",
    "/slider-images/image017.jpg",
    "/slider-images/image020.jpg",
    "/slider-images/image021.png",
    "/slider-images/image023.png",
    "/slider-images/image025.png",
    "/slider-images/image000005.png"
];

export default function LogoTicker() {
    // Duplicate the logos to ensure the list is wider than ultra-wide monitors
    const multipliedLogos = [...logos, ...logos];

    return (
        <div className="w-full overflow-hidden bg-white py-4 md:py-4 mt-2 md:mt-4 relative">
            {/* Speed matches the original pace: 42 logos * 4.16s/logo ~= 175s */}
            <div className="flex w-max items-center animate-marquee" style={{ animationDuration: "175s" }}>
                {/* First set of logos */}
                <div className="flex shrink-0 items-center gap-8 md:gap-10 pr-8 md:pr-10">
                    {multipliedLogos.map((logo, index) => (
                        <div key={`logo-1-${index}`} className={`flex shrink-0 items-center justify-center ${
                            logo.match(/image002|image003|image010/) 
                                ? 'min-w-[110px] md:min-w-[130px] mx-[-4px] md:mx-[-6px]' 
                                : 'min-w-[150px] md:min-w-[150px]'
                        }`}>
                            <Image
                                src={logo}
                                alt={`Partner logo ${index + 1}`}
                                width={120}
                                height={40}
                                className={`object-contain w-auto shrink-0 ${
                                    logo.includes('applied-computing') 
                                        ? 'max-h-[28px] md:max-h-[32px]' 
                                        : logo.match(/image003|image010|image013|image014|image015|image017|image020/) 
                                            ? 'max-h-[56px] md:max-h-[72px]' 
                                            : logo.includes('image000005')
                                                ? 'max-h-[46px] md:max-h-[52px]'
                                                : 'max-h-[36px] md:max-h-[40px]'
                                }`}
                            />
                        </div>
                    ))}
                </div>
                {/* Second set of logos for seamless loop */}
                <div className="flex shrink-0 items-center gap-8 md:gap-10 pr-8 md:pr-10" aria-hidden="true">
                    {multipliedLogos.map((logo, index) => (
                        <div key={`logo-2-${index}`} className={`flex shrink-0 items-center justify-center ${
                            logo.match(/image002|image003|image010/) 
                                ? 'min-w-[110px] md:min-w-[130px] mx-[-4px] md:mx-[-6px]' 
                                : 'min-w-[150px] md:min-w-[150px]'
                        }`}>
                            <Image
                                src={logo}
                                alt={`Partner logo ${index + 1}`}
                                width={120}
                                height={40}
                                className={`object-contain w-auto shrink-0 ${
                                    logo.includes('applied-computing') 
                                        ? 'max-h-[28px] md:max-h-[32px]' 
                                        : logo.match(/image003|image010|image013|image014|image015|image017|image020/) 
                                            ? 'max-h-[56px] md:max-h-[72px]' 
                                            : logo.includes('image000005')
                                                ? 'max-h-[46px] md:max-h-[52px]'
                                                : 'max-h-[36px] md:max-h-[40px]'
                                }`}
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
