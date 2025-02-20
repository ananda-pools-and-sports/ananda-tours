import React, { useState } from "react";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: 2010,
    title: "Ananda Tours Founded",
    description: "Started with local sports tours in India.",
  },
  {
    year: 2013,
    title: "Expanded to Adventure Tours",
    description: "Introduced trekking and rafting experiences.",
  },
  {
    year: 2015,
    title: "International Partnerships",
    description: "Collaborated with global sports organizations.",
  },
  {
    year: 2018,
    title: "Cultural Tour Division",
    description: "Launched immersive cultural experiences.",
  },
  {
    year: 2020,
    title: "Virtual Experiences",
    description: "Adapted to global changes with online tours.",
  },
  {
    year: 2023,
    title: "Sustainability Initiative",
    description: "Committed to eco-friendly tour practices.",
  },
];

const InteractiveTimeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our Timeline
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-ananda-orange"></div>
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`flex items-center mb-8 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className={`w-1/2 p-4 bg-white rounded-lg shadow-md cursor-pointer ${
                  selectedEvent === index ? "border-2 border-ananda-orange" : ""
                }`}
                onClick={() => setSelectedEvent(index)}
              >
                <h3 className="text-xl font-bold mb-2">{event.year}</h3>
                <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
                {selectedEvent === index && (
                  <p className="text-gray-600">{event.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;
