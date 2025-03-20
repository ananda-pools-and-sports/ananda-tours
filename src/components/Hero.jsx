import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SmallHero from "../components/SmallHero";
import H1 from "../utils/almaty1.jpg";
import H2 from "../utils/head2.jpg";
import H3 from "../utils/yogafort1.jpg";
import H4 from "../utils/turkey3.jpg";
import H5 from "../utils/Adventure-Tourism.avif";
import H6 from "../utils/om.jpg";
// import SH1 from "../utils/shead1.jpg";
// import SH2 from "../utils/shead2.jpg";
// import SH3 from "../utils/shead3.jpg";
// import SH4 from "../utils/shead4.jpg";
import FLAG1 from "../utils/spain.png";
import FLAG2 from "../utils/kazakhstan.png";
import FLAG3 from "../utils/turkey.png";
import FLAG4 from "../utils/dubai.png";
import FLAG5 from "../utils/india.png";
import FLAG6 from "../utils/russia.png";
import FLAG7 from "../utils/belgium.png";
import "../styles/Hero.css";

const mainSlides = [
  {
    image: H6,
    title: "UPCOMING TOUR... ",
    subtitle: "ADI KAILASH-OM PARVAT YATRA",
  },
  {
    image: H1,
    title: "WHERE WILL YOUR NEXT JOURNEY TAKE YOU?",
    subtitle: "Experience the thrill of international competitions",
  },
  {
    image: H2,
    title: "TAILORED SPORTS TOURS FOR EVERY TEAM",
    subtitle: "From school groups to professional athletes",
  },
  {
    image: H3,
    title: "CULTURAL TOURS: DISCOVER HERITAGE & TRADITIONS",
    subtitle: "Immerse yourself in the history, art, and local culture",
  },
  {
    image: H4,
    title: "EDUCATIONAL TOURS: LEARN BEYOND CLASSROOMS",
    subtitle: "Explore global learning experiences in top institutions",
  },
  {
    image: H5,
    title: "ADVENTURE TOURS: EMBRACE THE THRILL",
    subtitle: "From mountains to oceans, embark on an unforgettable journey",
  },
];

const smallSlides = [FLAG1, FLAG2, FLAG3, FLAG4, FLAG5, FLAG6, FLAG7];

const destinations = [
  {
    country: "SPAIN",
    flag: FLAG1,
    type: "Football",
    date: "04.21.25",
  },
  {
    country: "ALMATY",
    flag: FLAG2,
    type: "Skiing",
    date: "10.19.25",
  },
  {
    country: "TURKEY",
    flag: FLAG3,
    type: "Basketball",
    date: "09.21.25",
  },
  {
    country: "DUBAI",
    flag: FLAG4,
    type: "Edu Exchange Program",
    date: "10.26.25",
  },
];

const Hero = () => {
  const [activeMainSlide, setActiveMainSlide] = useState(0);
  const [activeSmallSlide, setActiveSmallSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const mainSliderRef = useRef(null);
  const smallSliderRef = useRef(null);

  useEffect(() => {
    const mainInterval = setInterval(() => {
      setActiveMainSlide((prev) => (prev + 1) % mainSlides.length);
    }, 4000);

    const smallInterval = setInterval(() => {
      setActiveSmallSlide((prev) => (prev + 1) % smallSlides.length);
    }, 3000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll(".parallax");
      parallaxElements.forEach((el) => {
        const speed = el.dataset.speed;
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleParallax);
    handleResize();

    return () => {
      clearInterval(mainInterval);
      clearInterval(smallInterval);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleParallax);
    };
  }, []);

  const handleMainSlideChange = (index) => {
    setActiveMainSlide(index);
  };

  if (isSmallScreen) {
    return (
      <SmallHero
        mainSlides={mainSlides}
        smallSlides={smallSlides}
        destinations={destinations}
      />
    );
  }

  return (
    <section
      className="relative h-screen overflow-hidden bg-black"
      aria-label="Hero Section"
    >
      {/* Main Image Slider */}
      <div ref={mainSliderRef} className="relative h-full w-full">
        {mainSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeMainSlide
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.image}
              alt={`Sports tour destination ${index + 1}`}
              className="h-full w-full object-cover parallax"
              data-speed="-0.5"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30" />
            <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:w-2/3">
              <h1
                className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight parallax "
                data-speed="0.2"
              >
                {slide.title}
              </h1>
              <p
                className="font-serif text-xl sm:text-2xl md:text-3xl text-white mb-8 font-medium parallax text-shadow-glow"
                data-speed="0.1"
              >
                {slide.subtitle}
              </p>
              {/* <button
                className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full w-max hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 text-lg flex items-center group parallax"
                data-speed="0.05"
              >
                Explore Tours
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button> */}
            </div>
          </div>
        ))}
      </div>

      {/* Main Slider Navigation */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {mainSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleMainSlideChange(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === activeMainSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Side Content Panel */}
      <div
        className={`absolute top-0 right-0 h-full w-full sm:w-1/2 md:w-2/5 lg:w-1/3 bg-gradient-to-b from-orange-600 to-orange-500 p-8 text-white overflow-y-auto transform transition-all duration-500 ease-in-out ${
          isScrolled ? "translate-y-0" : "translate-y-16"
        }`}
      >
        <div className="mt-16 sm:mt-24">
          <h2 className="text-3xl font-bold mb-6">Ananda Tours</h2>
          <p className="mb-8 text-lg leading-relaxed">
            Crafting unforgettable sports experiences for over a decade. We
            specialize in domestic and international tours that combine athletic
            excellence with cultural immersion.
          </p>
          <div className="space-y-4">
            <button className="w-full bg-white text-orange-500 font-bold py-3 px-6 rounded-full hover:bg-orange-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-base">
              Explore Tours Below
            </button>
          </div>
        </div>
      </div>

      {/* Smaller Slider and Country Info */}
      <div className="absolute bottom-0 right-0 w-full sm:w-1/2 md:w-2/5 lg:w-1/3 bg-black/80 p-6 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {/* Smaller Image Slider */}
          <div
            ref={smallSliderRef}
            className="relative w-full md:w-1/2 h-40 rounded-lg overflow-hidden shadow-lg"
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
          <div className="w-full md:w-1/2 text-white">
            <div className="grid grid-cols-2 gap-4">
              {destinations.map((dest, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 cursor-pointer transition-all duration-300 hover:bg-white/10 p-2 rounded-lg"
                  onMouseEnter={() => setHoveredCountry(dest)}
                  onMouseLeave={() => setHoveredCountry(null)}
                >
                  <img
                    src={dest.flag}
                    alt={`${dest.country} Flag`}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-sm">{dest.country}</h3>
                    <p className="text-xs text-gray-300">{dest.type}</p>
                    <p className="text-xs font-semibold">{dest.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {hoveredCountry && (
        <div className="absolute bottom-48 right-4 bg-white text-black p-4 rounded-lg shadow-lg max-w-xs">
          <h4 className="font-bold mb-2">{hoveredCountry.country}</h4>
          <p className="text-sm">
            Join us for the exciting {hoveredCountry.type} event in{" "}
            {hoveredCountry.country}. Experience the thrill of competition in
            this beautiful destination!
          </p>
        </div>
      )}

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          handleMainSlideChange(
            (activeMainSlide - 1 + mainSlides.length) % mainSlides.length
          )
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full text-white hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() =>
          handleMainSlideChange((activeMainSlide + 1) % mainSlides.length)
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full text-white hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
};

export default Hero;
