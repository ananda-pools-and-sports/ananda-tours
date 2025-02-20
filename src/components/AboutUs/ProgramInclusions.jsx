import React from "react";
import { motion } from "framer-motion";
import { Check, Hotel, Utensils, Bus, Ticket, Map, Shield } from "lucide-react";

const inclusions = [
  { icon: Hotel, label: "Premium Accommodations" },
  { icon: Utensils, label: "Meals & Refreshments" },
  { icon: Bus, label: "Transportation" },
  { icon: Ticket, label: "Event Tickets" },
  { icon: Map, label: "Guided Tours" },
  { icon: Shield, label: "Travel Insurance" },
];

const ProgramInclusions = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          What's Included
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start p-6 bg-gray-50 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mr-4">
                <item.icon size={24} className="text-ananda-orange" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramInclusions;
