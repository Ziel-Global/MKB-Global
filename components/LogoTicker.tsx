import Image from "next/image";

const logos = [
    "/logo 2/Untitled-1.png",
    "/logo 2/Untitled-2.png",
    "/logo 2/Untitled-3.png",
    "/logo 2/Untitled-4.png",
    "/logo 2/Untitled-5.png",
    "/logo 2/Untitled-6.png",
    "/logo 2/Untitled-7.png",
    "/logo 2/Untitled-8.png",
    "/logo 2/Untitled-9.png",
    // "/logo 2/Untitled-10.png",
    "/logo 2/Untitled-11.png",
    "/logo 2/Untitled-12.png",
    // "/logo 2/Untitled-13.png",
    "/logo 2/Untitled-14.png",
    "/logo 2/Untitled-15.png",
    "/logo 2/Untitled-16.png",
    "/logo 2/Untitled-17.png",
    "/logo 2/Untitled-18.png",
    "/logo 2/Untitled-19.png",
    "/slider-images/image003.png",
    "/logo 2/Untitled-21.png"
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
                        <div key={`logo-1-${index}`} className={`flex shrink-0 items-center justify-center ${logo.match(/image003\.png|Untitled-21\.png/) ? 'mx-[-0.625rem] md:mx-[-0.9375rem]' : logo.match(/Untitled-19\.png/) ? 'mx-[-1.5625rem] md:mx-[-2.8125rem]' : logo.match(/Untitled-20\.png/) ? 'mx-[-2.8125rem] md:mx-[-4.375rem]' : logo.match(/Untitled-(9|10|11)\.png/) ? 'mx-[-0.75rem] md:mx-[-1.25rem]' : logo.match(/Untitled-18\.png/) ? 'mx-[-1.375rem] md:mx-[-2.1875rem]' : ''} ${logo.match(/image003\.png/) ? 'min-w-[9.375rem] md:min-w-[11.25rem]' : logo.match(/Untitled-(18|19)\.png/) ? 'min-w-[11.25rem] md:min-w-[13.75rem]' : logo.match(/Untitled-(1|6|10|11)\.png/) ? 'min-w-[10.625rem] md:min-w-[12.5rem]' : 'min-w-[9.375rem] md:min-w-[9.375rem]'}`}>
                            <Image
                                src={logo}
                                alt={`Partner logo ${index + 1}`}
                                width={600}
                                height={200}
                                className={`object-contain w-auto shrink-0 ${logo.match(/image003\.png/) ? 'max-h-[3.75rem] md:max-h-[5rem] 3xl:max-h-[6.5rem]' : logo.match(/Untitled-(18|19)\.png/) ? 'max-h-[4.5rem] md:max-h-[5.625rem] 3xl:max-h-[7rem]' : logo.includes('Untitled-10.png') ? 'max-h-[5rem] md:max-h-[6.25rem] 3xl:max-h-[8rem]' : logo.match(/Untitled-(1|5|6|11)\.png/) ? 'max-h-[4rem] md:max-h-[5rem] 3xl:max-h-[6.5rem]' : 'max-h-[3rem] md:max-h-[3.5rem] 3xl:max-h-[4.5rem]'}`}
                            />
                        </div>
                    ))}
                </div>
                {/* Second set of logos for seamless loop */}
                <div className="flex shrink-0 items-center gap-8 md:gap-10 pr-8 md:pr-10" aria-hidden="true">
                    {multipliedLogos.map((logo, index) => (
                        <div key={`logo-2-${index}`} className={`flex shrink-0 items-center justify-center ${logo.match(/image003\.png|Untitled-21\.png/) ? 'mx-[-0.625rem] md:mx-[-0.9375rem]' : logo.match(/Untitled-19\.png/) ? 'mx-[-1.5625rem] md:mx-[-2.8125rem]' : logo.match(/Untitled-20\.png/) ? 'mx-[-2.8125rem] md:mx-[-4.375rem]' : logo.match(/Untitled-(9|10|11)\.png/) ? 'mx-[-0.75rem] md:mx-[-1.25rem]' : logo.match(/Untitled-18\.png/) ? 'mx-[-1.375rem] md:mx-[-2.1875rem]' : ''} ${logo.match(/image003\.png/) ? 'min-w-[9.375rem] md:min-w-[11.25rem]' : logo.match(/Untitled-(18|19)\.png/) ? 'min-w-[11.25rem] md:min-w-[13.75rem]' : logo.match(/Untitled-(1|6|10|11)\.png/) ? 'min-w-[10.625rem] md:min-w-[12.5rem]' : 'min-w-[9.375rem] md:min-w-[9.375rem]'}`}>
                            <Image
                                src={logo}
                                alt={`Partner logo ${index + 1}`}
                                width={600}
                                height={200}
                                className={`object-contain w-auto shrink-0 ${logo.match(/image003\.png/) ? 'max-h-[3.75rem] md:max-h-[5rem] 3xl:max-h-[6.5rem]' : logo.match(/Untitled-(18|19)\.png/) ? 'max-h-[4.5rem] md:max-h-[5.625rem] 3xl:max-h-[7rem]' : logo.includes('Untitled-10.png') ? 'max-h-[5rem] md:max-h-[6.25rem] 3xl:max-h-[8rem]' : logo.match(/Untitled-(1|5|6|11)\.png/) ? 'max-h-[4rem] md:max-h-[5rem] 3xl:max-h-[6.5rem]' : 'max-h-[3rem] md:max-h-[3.5rem] 3xl:max-h-[4.5rem]'}`}
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
