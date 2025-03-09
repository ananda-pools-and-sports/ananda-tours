import React, { useState, useEffect, useRef } from "react";
import {
  Globe,
  Calendar,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import S1 from "../utils/S1.jpg";
import S2 from "../utils/S2.jpg";
import S3 from "../utils/S3.jpg";
import S4 from "../utils/S4.jpg";
import S5 from "../utils/S5.jpg";

const sliderImages = [S1, S2, S3, S4, S5];

const destinations = [
  { country: "India", code: "in" },
  { country: "Kazakhstan", code: "kz" },
  { country: "Uzbekistan", code: "uz" },
  { country: "Russia", code: "ru" },
  { country: "UAE", code: "ae" },
  { country: "Sri Lanka", code: "lk" },
  { country: "Germany", code: "de" },
  { country: "Spain", code: "es" },
  { country: "Portugal", code: "pt" },
  { country: "Belgium", code: "be" },
  { country: "Netherlands", code: "nl" },
  { country: "Hungary", code: "hu" },
  { country: "Czech Republic", code: "cz" },
  { country: "UK", code: "gb" },
];

const features = [
  {
    icon: <Globe className="w-12 h-12 text-orange-500" />,
    title: "Domestic & International Tours",
    description:
      "Experience the best of both worlds with our wide range of domestic and international sports tours.",
  },
  {
    icon: <Calendar className="w-12 h-12 text-orange-500" />,
    title: "Pre-planned & Tailorised Programs",
    description:
      "Choose from our expertly crafted itineraries or let us create a custom program just for you.",
  },
  {
    icon: <Award className="w-12 h-12 text-orange-500" />,
    title: "Established Expertise",
    description:
      "Benefit from our years of experience in organizing successful sports tours worldwide.",
  },
];

const testimonials = [
  {
    name: "John Doe",
    role: "Football Coach",
    text: "Ananda Sports Tours provided an unforgettable experience for our team. Their expertise in both domestic and international tours is unmatched!",
  },
  {
    name: "Jane Smith",
    role: "Student Athlete",
    text: "The tailored program Ananda created for us was perfect. It's clear they have a wealth of experience in sports tourism.",
  },
  {
    name: "Mike Johnson",
    role: "Cricket Team Captain",
    text: "We've been on multiple tours with Ananda, both within India and abroad. Their pre-planned itineraries are always top-notch!",
  },
];

const WhyBookWithUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeDestination, setActiveDestination] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const parallaxRef = useRef(null);
  const sliderRef = useRef(null);
  const slideIntervalRef = useRef(null);

  const startAutoSlide = () => {
    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }
  };

  const handlePrevSlide = () => {
    stopAutoSlide();
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + sliderImages.length) % sliderImages.length
    );
    startAutoSlide();
  };

  const handleNextSlide = () => {
    stopAutoSlide();
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    startAutoSlide();
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    startAutoSlide();

    return () => {
      clearTimeout(timer);
      stopAutoSlide();
    };
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    const destinationInterval = setInterval(() => {
      setActiveDestination((prev) => (prev + 1) % destinations.length);
    }, 3000);

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(destinationInterval);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-yellow-400 to-blue-500 py-20">
      {/* Dynamic background with flag shapes */}
      <div ref={parallaxRef} className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-7 gap-4 h-full">
          {destinations.map((dest, index) => (
            <div key={index} className="relative">
              <div
                className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-50 transition-all duration-500"
                style={{
                  backgroundImage: `url(https://flagcdn.com/w160/${dest.code}.png)`,
                  transform:
                    index === activeDestination ? "scale(1.1)" : "scale(1)",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } font-sans`}
        >
          Why Book With Us?
        </h2>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white bg-opacity-90 rounded-lg shadow-lg p-6 mb-6 transition-all duration-500 hover:shadow-xl transform hover:scale-105 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4 group">
                  <div className="mr-4 transition-transform duration-300 transform group-hover:rotate-12">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-orange-600 font-sans">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-700 font-sans">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/2 px-4">
            <div
              className={`relative transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              {/* New Interactive Shaped Slider */}
              <div
                ref={sliderRef}
                className="relative overflow-hidden"
                style={{
                  clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
                  height: "400px",
                }}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onMouseMove={handleMouseMove}
              >
                <div
                  className="flex transition-transform duration-300 ease-out h-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {sliderImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Ananda Sports Tours Experience ${index + 1}`}
                      className="object-cover w-full h-full flex-shrink-0"
                    />
                  ))}
                </div>
                <button
                  onClick={handlePrevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 text-white hover:bg-white/75 transition-all duration-300"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 text-white hover:bg-white/75 transition-all duration-300"
                  aria-label="Next slide"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              <div className="flex justify-center mt-4">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      stopAutoSlide();
                      setCurrentSlide(index);
                      startAutoSlide();
                    }}
                    className={`w-3 h-3 rounded-full mx-1 ${
                      index === currentSlide ? "bg-white" : "bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        ></div>
        <div className="text-center text-white mt-10">
          <p className="text-lg italic">
            "{testimonials[activeTestimonial].text}"
          </p>
          <p className="font-bold">{testimonials[activeTestimonial].name}</p>
          <p className="text-sm">{testimonials[activeTestimonial].role}</p>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-6 font-sans">
            Our International Destinations
          </h3>
          <div className="flex flex-wrap justify-center items-center">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="m-2 transition-all duration-300 transform hover:scale-110"
              >
                <img
                  src={`https://flagcdn.com/w80/${dest.code}.png`}
                  alt={`${dest.country} flag`}
                  className="w-12 h-8 object-cover rounded shadow-md"
                  title={dest.country}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBookWithUs;
