import React from "react";
import { motion } from "framer-motion";
import { Bike, Mountain, Landmark, Users, Compass, Camera } from "lucide-react";

const tourTypes = [
  { icon: Bike, label: "Sports Tours" },
  { icon: Mountain, label: "Adventure Tours" },
  { icon: Landmark, label: "Cultural Tours" },
  { icon: Users, label: "Group Tours" },
  { icon: Compass, label: "Customized Tours" },
  { icon: Camera, label: "Photography Tours" },
];

const TourTypeIcons = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {tourTypes.map((tour, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <motion.div
            className="w-20 h-20 bg-ananda-orange bg-opacity-20 rounded-full flex items-center justify-center mb-4"
            whileHover={{ scale: 1.1, backgroundColor: "#FF6B00" }}
          >
            <tour.icon size={40} className="text-ananda-orange" />
          </motion.div>
          <p className="text-center font-semibold">{tour.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default TourTypeIcons;
