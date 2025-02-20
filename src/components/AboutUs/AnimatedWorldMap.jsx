import React from "react";
import { motion } from "framer-motion";

const destinations = [
  { name: "New Delhi", x: "70%", y: "40%" },
  { name: "Tokyo", x: "85%", y: "35%" },
  { name: "Paris", x: "48%", y: "30%" },
  { name: "New York", x: "25%", y: "35%" },
  { name: "Sydney", x: "90%", y: "75%" },
  { name: "Cape Town", x: "52%", y: "75%" },
  { name: "Rio de Janeiro", x: "35%", y: "65%" },
];

const AnimatedWorldMap = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our Global Reach
        </h2>
        <div className="relative">
          <img src="/images/world-map.svg" alt="World Map" className="w-full" />
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              className="absolute w-4 h-4 bg-ananda-orange rounded-full"
              style={{ top: dest.y, left: dest.x }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="absolute w-full h-full bg-ananda-orange rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-sm font-semibold">
                {dest.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedWorldMap;
