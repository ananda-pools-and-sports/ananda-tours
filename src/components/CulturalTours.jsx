import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import { MapPin, Clock, Users, Camera } from "lucide-react";
import "../styles/CulturalTours.css";

import II1 from "../utils/travel5.jpg";
import II2 from "../utils/turkey2.jpg";
import II3 from "../utils/S2.jpg";
import II4 from "../utils/culture1.jpg";
import II5 from "../utils/yogafort1.jpg";

const images = [II1, II2, II3, II4, II5];

const tourFeatures = [
  { icon: MapPin, text: "Explore ancient forts and temples" },
  { icon: Clock, text: "Immersive historical experiences" },
  { icon: Users, text: "Expert local guides" },
  { icon: Camera, text: "Unforgettable photo opportunities" },
];

const culturalSites = [
  {
    name: "Taj Mahal",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India.",
  },
  {
    name: "Veer Singh Palace",
    description:
      "Datia Palace, also known as Bir Singh Palace or Bir Singh Dev Palace, is situated nearly 75 km from Gwalior city in Madhya Pradesh.",
  },
  {
    name: "Gwalior Fort",
    description: "Majestic hilltop fort with rich history",
  },
  {
    name: "Mitavali",
    description:
      "Mitawali is a 64 yogini shiv temple located on a hillock about 15 km from Morena.",
  },
  { name: "Padhavali", description: "Ancient ruins with intricate carvings" },
  {
    name: "Orchha",
    description:
      "The Orchha Fort complex, which houses a large number of ancient monuments consisting of the fort, palaces, temple, and other edifices, is located in the Orchha",
  },
  {
    name: "Khajuraho",
    description:
      "The Khajuraho Group of Monuments are a group of Hindu and Jain temples in Chhatarpur district, Madhya Pradesh, India.",
  },
  {
    name: "MORE VISITS SOON!!",
    description: "",
  },
];

const CulturalTours = () => {
  const navigate = useNavigate();
  return (
    <section className="cultural-tours py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Discover India's Rich Heritage
        </motion.h2>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ImageSlider images={images} className="h-[600px] rounded-xl" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold mb-6">
              Immerse Yourself in Culture
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              At Ananda Sports Tours, we believe that exploring diverse cultures
              and heritage is a journey of discovery. Our carefully curated
              cultural tours offer a perfect blend of historical exploration and
              spiritual enrichment, allowing you to experience the richness of
              India's traditions and history firsthand.
            </p>
            <p className="text-lg text-gray-700">
              With years of experience organizing tours to some of India's most
              significant historical and cultural sites, we provide an
              unparalleled journey through time, art, and tradition.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-6">
            {tourFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className="w-12 h-12 text-ananda-orange mb-4" />
                <p className="text-gray-800 font-medium">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold mb-8 text-center">
            Featured Cultural Sites
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {culturalSites.map((site, index) => (
              <motion.div
                key={index}
                className="site-card p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="text-xl font-semibold mb-2 text-ananda-orange">
                  {site.name}
                </h4>
                <p className="text-gray-600">{site.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-700 mb-8">
            Our cultural tours include visits to historical monuments, heritage
            walks, and temple visits, providing a comprehensive experience of
            India's diverse cultural landscape.
          </p>
          <motion.button
            className="book-button text-white py-3 px-8 rounded-full text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
          >
            Book Your Cultural Adventure
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CulturalTours;
