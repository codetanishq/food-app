import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";

const HeroBanner = () => {
  return (
    <div className="reltive text-white text-[20px] w-full max-w-[1360px] mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            className="absolute left-0 md:left-0 top-[100px] md:top-[250px] w-[30px]
            md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            onClick={clickHandler}
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasnext) => (
          <div
            className="absolute right-0 md:right-0 top-[100px] md:top-[250px] w-[30px]
            md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            onClick={clickHandler}
          >
            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          </div>
        )}
      >
        <div>
          <img
            src="/slide-1.png"
            className="object-cover aspect-[16/10] md:aspect-auto"
          />
          <div
            className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald  absolute left-0 bottom-[25px]
            md:bottom-[75px] text-[15px] md:text-[30px] font-medium cursor-pointer text-white bg-yellow-700 shadow-transparent shadow-sm transition-all duration-500 hover:shadow-yellow-300 hover:bg-yellow-900
            
            "
          >
            Shop now
          </div>
        </div>
        <div>
          <img
            src="/slide-2.png"
            className="object-cover aspect-[16/10] md:aspect-auto"
          />
          <div
            className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald  absolute left-0 bottom-[25px]
            md:bottom-[75px]  text-[15px] md:text-[30px] font-medium cursor-pointer text-white bg-yellow-700 shadow-transparent shadow-sm transition-all duration-500 hover:shadow-yellow-300 hover:bg-yellow-900
            
            "
          >
            Shop now
          </div>
        </div>

        <div>
          <img
            src="/slide-3.png"
            className="object-cover aspect-[16/10] md:aspect-auto"
          />
          <div
            className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald  absolute left-0 bottom-[25px]
            md:bottom-[75px] text-[15px] md:text-[30px] font-medium cursor-pointer text-white bg-yellow-700 shadow-transparent shadow-sm transition-all duration-500 hover:shadow-yellow-300 hover:bg-yellow-900
            
            "
          >
            Shop now
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
