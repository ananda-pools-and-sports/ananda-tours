import React from "react";
import { motion } from "framer-motion";
import "../styles/ExpertiseSection.css";
import {
  Hotel,
  Bus,
  Utensils,
  UserCheck,
  Landmark,
  Heart,
  Plane,
  ClipboardList,
} from "lucide-react";

const services = [
  {
    icon: Hotel,
    title: "ACCOMMODATION",
    description: "4-Star Hotel Stay",
    color: "text-sky-400",
  },
  {
    icon: Utensils,
    title: "ALL MEALS",
    description: "Breakfast, Lunch & Dinner",
    color: "text-sky-400",
  },
  {
    icon: Bus,
    title: "TRANSPORTATION",
    description: "All Ground Transport",
    color: "text-sky-400",
  },
  {
    icon: UserCheck,
    title: "TEAM COORDINATOR",
    description: "24/7 Support",
    color: "text-sky-400",
  },
  {
    icon: Landmark,
    title: "SIGHTSEEING",
    description: "Cultural Activities",
    color: "text-sky-400",
  },
  {
    icon: Heart,
    title: "MEDICAL CARE",
    description: "First Aid & Facilities",
    color: "text-sky-400",
  },
  {
    icon: Plane,
    title: "INTERNATIONAL",
    description: "Flight & Visa Support",
    color: "text-sky-400",
  },
  {
    icon: ClipboardList,
    title: "ACTIVITIES",
    description: "Pre-arranged Programs",
    color: "text-sky-400",
  },
];

const ExpertiseSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ananda-orange mb-4">
            Program Inclusions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience comprehensive sports training with our all-inclusive
            program packages
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-ananda-orange to-ananda-blue opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300"></div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-ananda-orange rounded-full opacity-0 group-hover:opacity-10 transform scale-150 transition-all duration-300"></div>
                  <service.icon
                    className={`w-12 h-12 ${service.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-ananda-orange transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-ananda-orange to-ananda-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-lg"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
