import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Plane,
  Trophy,
  Hotel,
  BellIcon as Whistle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useSwipeable } from "react-swipeable";
import ItineraryAccordion from "../components/ItineraryAccordion";
import ItineraryTab from "../components/ItineraryTab";
import BreadcrumbNav from "../components/BreadcrumbNav";
import "../styles/Itinerary.css";
import II1 from "../utils/CP4.jpg";
import II2 from "../utils/hockey2.jpg";
import II3 from "../utils/swim3.jpg";
import II4 from "../utils/yogafort2.jpg";
import II5 from "../utils/culture3.jpg";

const itineraries = [
  {
    id: "5-day",
    title: "5-Day Sports Experience",
    summary: "Skill-building, friendly matches, team bonding and culture!",
    images: [II1, II2, II3, II4, II5],
    days: [
      {
        day: 1,
        title: "Arrival and Orientation",
        icon: Plane,
        activities: [
          "Airport pickup",
          "Hotel check-in",
          "Welcome dinner and briefing",
        ],
      },
      {
        day: 2,
        title: "Skill Assessment and Training",
        icon: Whistle,
        activities: [
          "Morning fitness session",
          "Skill assessment with coaches",
          "Afternoon training drills",
        ],
      },
      {
        day: 3,
        title: "Team Building and Local Match",
        icon: Trophy,
        activities: [
          "Team building exercises",
          "Friendly match with local team",
          "Post-match analysis",
        ],
      },
      {
        day: 4,
        title: "Advanced Training and Cultural Tour",
        icon: Hotel,
        activities: [
          "Intensive training session",
          "Cultural city tour",
          "Team dinner",
        ],
      },
      {
        day: 5,
        title: "Final Match and Departure",
        icon: Plane,
        activities: [
          "Morning training",
          "Farewell match",
          "Award ceremony and departure",
        ],
      },
    ],
  },
  {
    id: "7-day",
    title: "7-Day Sports Adventure",
    summary: "Intensive training, local tournaments, and cultural excursions",
    images: [II1, II2, II3, II4, II5],
    days: [
      {
        day: 1,
        title: "Arrival and Welcome",
        icon: Plane,
        activities: [
          "Airport greeting",
          "Hotel check-in",
          "Welcome dinner and itinerary briefing",
        ],
      },
      {
        day: 2,
        title: "Training Camp Day 1",
        icon: Whistle,
        activities: [
          "Fitness assessment",
          "Tactical training",
          "Team strategy session",
        ],
      },
      {
        day: 3,
        title: "Training Camp Day 2",
        icon: Trophy,
        activities: ["Skills development", "Practice match", "Video analysis"],
      },
      {
        day: 4,
        title: "Local Tournament Day",
        icon: Trophy,
        activities: [
          "Tournament matches",
          "Team bonding activities",
          "Recovery session",
        ],
      },
      {
        day: 5,
        title: "Cultural Excursion",
        icon: Hotel,
        activities: [
          "City tour",
          "Visit to local sports museum",
          "Traditional dinner experience",
        ],
      },
      {
        day: 6,
        title: "Final Training and Preparation",
        icon: Whistle,
        activities: [
          "Last training session",
          "Team strategy meeting",
          "Equipment check",
        ],
      },
      {
        day: 7,
        title: "Showcase Match and Departure",
        icon: Plane,
        activities: [
          "Showcase match against top local team",
          "Closing ceremony",
          "Departure",
        ],
      },
    ],
  },
  {
    id: "10-day",
    title: "10-Day Ultimate Sports Tour",
    summary:
      "Professional coaching, international competitions, and sports tourism",
    images: [II1, II2, II3, II4, II5],
    days: [
      {
        day: 1,
        title: "International Arrival",
        icon: Plane,
        activities: [
          "VIP airport reception",
          "Luxury hotel check-in",
          "Welcome gala dinner",
        ],
      },
      {
        day: 2,
        title: "Pro Training Camp Day 1",
        icon: Whistle,
        activities: [
          "Pro coach meet and greet",
          "Advanced skills assessment",
          "Personalized training plans",
        ],
      },
      {
        day: 3,
        title: "Pro Training Camp Day 2",
        icon: Trophy,
        activities: [
          "Position-specific drills",
          "Tactical gameplay session",
          "Sports psychology workshop",
        ],
      },
      {
        day: 4,
        title: "International Tournament Day 1",
        icon: Trophy,
        activities: [
          "Opening ceremony",
          "Group stage matches",
          "Team recovery services",
        ],
      },
      {
        day: 5,
        title: "International Tournament Day 2",
        icon: Trophy,
        activities: [
          "Knockout stage matches",
          "Media interviews",
          "Gala dinner",
        ],
      },
      {
        day: 6,
        title: "Sports Tourism Day",
        icon: Hotel,
        activities: [
          "Visit to Olympic training center",
          "Q&A with sports legends",
          "Local sports event attendance",
        ],
      },
      {
        day: 7,
        title: "Pro Training Camp Day 3",
        icon: Whistle,
        activities: [
          "Advanced tactical training",
          "Sports technology workshop",
          "Team building exercises",
        ],
      },
      {
        day: 8,
        title: "Friendly International Match",
        icon: Trophy,
        activities: [
          "Match against international team",
          "Post-match analysis",
          "Cultural exchange dinner",
        ],
      },
      {
        day: 9,
        title: "Sports Business Insight",
        icon: Hotel,
        activities: [
          "Visit to major sports brand HQ",
          "Sports management seminar",
          "Networking event",
        ],
      },
      {
        day: 10,
        title: "Final Showcase and Departure",
        icon: Plane,
        activities: [
          "Final training session",
          "Showcase match for scouts",
          "Awards ceremony and farewell",
        ],
      },
    ],
  },
];

const Itinerary = () => {
  const [activeTab, setActiveTab] = useState(itineraries[0]?.id || "5-day");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDownload = () => {
    // Implement PDF download logic here
    console.log("Downloading itinerary...");
  };

  const nextImage = () => {
    const activeItinerary = itineraries.find((i) => i.id === activeTab);
    if (activeItinerary) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % activeItinerary.images.length
      );
    }
  };

  const prevImage = () => {
    const activeItinerary = itineraries.find((i) => i.id === activeTab);
    if (activeItinerary) {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex - 1 + activeItinerary.images.length) %
          activeItinerary.images.length
      );
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      nextImage();
      setSwipeDirection("left");
      setTimeout(() => setSwipeDirection(null), 300);
    },
    onSwipedRight: () => {
      prevImage();
      setSwipeDirection("right");
      setTimeout(() => setSwipeDirection(null), 300);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const activeItinerary = itineraries.find((i) => i.id === activeTab);

  return (
    <div className="itinerary-section relative min-h-screen bg-gray-100 overflow-hidden">
      <div className="parallax-bg"></div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        <BreadcrumbNav current="Itinerary" />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-ananda-orange mb-8 relative"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block"
          >
            Explore
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="inline-block"
          >
            Our
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="inline-block"
          >
            Itineraries
          </motion.span>
        </motion.h1>

        {/* Image Carousel */}
        <div
          className="relative mb-8 overflow-hidden rounded-lg shadow-lg"
          {...swipeHandlers}
        >
          <div className="aspect-w-16 aspect-h-9">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={
                  activeItinerary?.images[currentImageIndex] ||
                  "/placeholder.svg?height=400&width=600"
                }
                alt={`Itinerary image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
                initial={{
                  opacity: 0,
                  x:
                    swipeDirection === "left"
                      ? 50
                      : swipeDirection === "right"
                      ? -50
                      : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x:
                    swipeDirection === "left"
                      ? -50
                      : swipeDirection === "right"
                      ? 50
                      : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Rest of the component remains the same */}
        <div className="mb-8">
          <div className="flex flex-wrap mb-4">
            {itineraries.map((itinerary) => (
              <button
                key={itinerary.id}
                className={`flex-1 py-2 px-4 text-sm sm:text-base lg:text-lg font-semibold rounded-t-lg transition-colors duration-300 ${
                  activeTab === itinerary.id
                    ? "bg-ananda-orange text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => {
                  setActiveTab(itinerary.id);
                  setCurrentImageIndex(0);
                }}
              >
                {itinerary.title}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {isMobile ? (
                <ItineraryAccordion itinerary={activeItinerary} />
              ) : (
                <ItineraryTab
                  itinerary={activeItinerary}
                  handleDownload={handleDownload}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/customize"
            className="bg-ananda-blue text-white hover:bg-ananda-orange transition-colors duration-300 py-3 px-8 rounded-full text-lg font-semibold inline-block"
          >
            Customize Your Package
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-ananda-yellow to-transparent opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-radial from-ananda-blue to-transparent opacity-20 rounded-full animate-float"></div>
      </div>
    </div>
  );
};

export default Itinerary;
