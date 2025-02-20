import React from "react";
import { motion } from "framer-motion";

const ItineraryTab = ({ itinerary, handleDownload }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 relative">
      <h2 className="text-2xl font-bold text-ananda-orange mb-2">
        {itinerary.title}
      </h2>
      <p className="text-gray-600 mb-4">{itinerary.summary}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {itinerary.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Day ${index + 1}`}
            className="w-16 h-16 object-cover rounded-md shadow-md hover:scale-110 transition-transform duration-300"
          />
        ))}
      </div>
      <div className="max-h-96 overflow-y-auto pr-4 mb-4">
        {itinerary.days.map((day, index) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-ananda-blue flex items-center">
                <day.icon className="mr-2" size={24} />
                Day {day.day}: {day.title}
              </h3>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                {day.activities.map((activity, actIndex) => (
                  <li key={actIndex} className="mb-1 last:mb-0">
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
      <button
        onClick={handleDownload}
        className="bg-ananda-blue text-white py-2 px-4 rounded-full hover:bg-ananda-orange transition-colors duration-300 text-sm sm:text-base"
      >
        Download Itinerary
      </button>
    </div>
  );
};

export default ItineraryTab;
