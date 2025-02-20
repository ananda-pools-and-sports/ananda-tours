import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const ItineraryAccordion = ({ itinerary }) => {
  const [openDay, setOpenDay] = useState(null);

  const toggleDay = (day) => {
    setOpenDay(openDay === day ? null : day);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <h2 className="text-xl font-semibold text-ananda-orange p-4 border-b border-gray-200">
        {itinerary.title}
      </h2>
      <p className="text-gray-600 p-4 border-b border-gray-200">
        {itinerary.summary}
      </p>
      {itinerary.days.map((day) => (
        <div key={day.day} className="border-b border-gray-200 last:border-b-0">
          <motion.button
            className="w-full px-4 py-3 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => toggleDay(day.day)}
            initial={false}
            animate={{
              backgroundColor: openDay === day.day ? "#F3F4F6" : "#F9FAFB",
            }}
            whileHover={{ backgroundColor: "#F3F4F6" }}
            transition={{ duration: 0.2 }}
          >
            <span className="font-semibold text-ananda-blue flex items-center">
              <day.icon className="mr-2" size={20} />
              Day {day.day}: {day.title}
            </span>
            <motion.div
              initial={false}
              animate={{ rotate: openDay === day.day ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {openDay === day.day ? (
                <ChevronUp size={24} />
              ) : (
                <ChevronDown size={24} />
              )}
            </motion.div>
          </motion.button>
          <AnimatePresence initial={false}>
            {openDay === day.day && (
              <motion.div
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <motion.ul
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
                    },
                    collapsed: {
                      transition: {
                        staggerChildren: 0.05,
                        staggerDirection: -1,
                      },
                    },
                  }}
                  className="list-disc list-inside text-gray-700 p-4"
                >
                  {day.activities.map((activity, index) => (
                    <motion.li
                      key={index}
                      variants={{
                        open: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            y: { stiffness: 1000, velocity: -100 },
                          },
                        },
                        collapsed: {
                          opacity: 0,
                          y: 50,
                          transition: {
                            y: { stiffness: 1000 },
                          },
                        },
                      }}
                      className="mb-2 last:mb-0"
                    >
                      {activity}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default ItineraryAccordion;
