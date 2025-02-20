import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const SmallHero = ({ mainSlides, smallSlides, destinations }) => {
  const [activeMainSlide, setActiveMainSlide] = useState(0);
  const [activeSmallSlide, setActiveSmallSlide] = useState(0);
  const mainSliderRef = useRef(null);
  const smallSliderRef = useRef(null);

  useEffect(() => {
    const mainInterval = setInterval(() => {
      setActiveMainSlide((prev) => (prev + 1) % mainSlides.length);
    }, 5000);

    const smallInterval = setInterval(() => {
      setActiveSmallSlide((prev) => (prev + 1) % smallSlides.length);
    }, 3000);

    return () => {
      clearInterval(mainInterval);
      clearInterval(smallInterval);
    };
  }, [mainSlides.length, smallSlides.length]);

  const handleMainSlideChange = (index) => {
    setActiveMainSlide(index);
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Main Image Slider */}
      <div ref={mainSliderRef} className="relative h-[50vh] w-full">
        {mainSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeMainSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Sports tour destination ${index + 1}`}
              className="h-full w-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
            <div className="absolute inset-0 flex flex-col justify-center px-4">
              <h1 className="text-2xl font-extrabold text-white mb-2 leading-tight tracking-tight">
                {slide.title}
              </h1>
              <p className="text-sm text-white mb-4 font-light">
                {slide.subtitle}
              </p>
              <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full w-max hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 text-sm flex items-center group">
                Explore Tours
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Main Slider Navigation */}
      <div className="flex justify-center space-x-2 mt-2">
        {mainSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleMainSlideChange(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeMainSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Info Panel */}
      <div className="bg-gradient-to-b from-orange-600 to-orange-500 p-4 text-white">
        <h2 className="text-xl font-bold mb-2">Ananda Sports Tours</h2>
        <p className="mb-4 text-sm leading-relaxed">
          Crafting unforgettable sports experiences for over a decade. We
          specialize in domestic and international tours that combine athletic
          excellence with cultural immersion.
        </p>
        <div className="space-y-2">
          <button className="w-full bg-white text-orange-500 font-bold py-2 px-4 rounded-full hover:bg-orange-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-sm">
            Explore Tours
          </button>
          <button className="w-full border-2 border-white text-white font-bold py-2 px-4 rounded-full hover:bg-white hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-sm">
            Contact Us
          </button>
        </div>
      </div>

      {/* Smaller Slider and Country Info */}
      <div className="bg-black/80 p-4 backdrop-blur-sm">
        <div className="flex flex-col space-y-4">
          {/* Smaller Image Slider */}
          <div
            ref={smallSliderRef}
            className="relative w-full h-32 rounded-lg overflow-hidden shadow-lg"
          >
            {smallSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === activeSmallSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={slide}
                  alt={`Sports tour highlight ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Country Info */}
          <div className="w-full text-white overflow-x-auto">
            <div className="flex space-x-4">
              {destinations.map((dest, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 flex-shrink-0"
                >
                  <img
                    src={dest.flag}
                    alt={`${dest.country} Flag`}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-xs">{dest.country}</h3>
                    <p className="text-xs text-gray-300">{dest.type}</p>
                    <p className="text-xs font-semibold">{dest.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallHero;
