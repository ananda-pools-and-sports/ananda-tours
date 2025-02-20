import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/TourSection.css";

const TourSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.style.opacity = 1;
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll(".animate-hidden");
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const tours = [
    {
      title: "Indian Sports and Adventure Tours",
      packages: "5, 7, and 10-day packages",
      sports: [
        "Football",
        "Basketball",
        "Swimming",
        "Cricket",
        "Field Hockey",
        "Kabaddi",
        "Badminton",
        "Kayaking",
        "Rowing",
        "Trekking",
        "River rafting",
      ],
      images: [
        {
          src: "https://plus.unsplash.com/premium_photo-1697729441569-f706fdd1f71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Taj Mahal",
        },
        {
          src: "https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Cricket match",
        },
        {
          src: "https://images.unsplash.com/photo-1616884950055-861aeb5eb380?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Holi festival",
        },
      ],
    },
    {
      title: "International Sports and Adventure Tours",
      packages: "5, 7, and 10-day packages",
      sports: [
        "Football",
        "Skiing",
        "Basketball",
        "Badminton",
        "Boxing",
        "Kayaking",
        "Rowing",
        "Ice Hockey",
        "Tennis",
      ],
      images: [
        {
          src: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Eiffel Tower",
        },
        {
          src: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Soccer stadium",
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1671211755030-a90e6a3193cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Great Wall of China",
        },
      ],
    },
  ];

  const handleButtonClick = (e) => {
    const ripple = document.createElement("span");
    ripple.classList.add(
      "absolute",
      "inset-0",
      "bg-white",
      "opacity-30",
      "rounded-full",
      "animate-ripple"
    );
    e.currentTarget.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-gray-100"
    >
      <div className="absolute inset-0 bg-world-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-ananda-blue text-center mb-12 animate-hidden">
          Explore Our Tours
        </h2>
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="w-full lg:w-1/2 bg-white rounded-lg shadow-xl overflow-hidden animate-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 flex">
                  {tour.images.map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={image.src}
                      alt={image.alt}
                      className="w-1/3 h-full object-cover transform hover:scale-110 transition-transform duration-300"
                    />
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <h3 className="absolute bottom-4 left-4 text-3xl font-bold text-white">
                  {tour.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-xl text-gray-700 mb-4">{tour.packages}</p>
                <ul className="mb-8 grid grid-cols-2 gap-2">
                  {tour.sports.map((sport, sportIndex) => (
                    <li
                      key={sportIndex}
                      className="text-gray-600 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-ananda-orange rounded-full mr-2 group-hover:animate-ping"></span>
                      <span className="group-hover:transform group-hover:translate-x-1 transition-transform duration-200">
                        {sport}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/packages"
                  className="relative inline-block bg-ananda-orange text-white font-bold py-3 px-6 rounded-full hover:bg-ananda-blue transition-all duration-300 transform hover:scale-105 overflow-hidden"
                  onClick={handleButtonClick}
                >
                  View Packages
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-ananda-yellow to-transparent opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-radial from-ananda-blue to-transparent opacity-20 rounded-full animate-float"></div>
      </div>
    </section>
  );
};

export default TourSection;
