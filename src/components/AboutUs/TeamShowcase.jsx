import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: "/images/team/john-doe.jpg",
  },
  {
    name: "Jane Smith",
    role: "Head of Operations",
    image: "/images/team/jane-smith.jpg",
  },
  {
    name: "Mike Johnson",
    role: "Lead Tour Guide",
    image: "/images/team/mike-johnson.jpg",
  },
  {
    name: "Sarah Brown",
    role: "Customer Experience Manager",
    image: "/images/team/sarah-brown.jpg",
  },
];

const TeamShowcase = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
              <motion.div
                className="absolute inset-0 bg-ananda-orange bg-opacity-90 flex items-center justify-center opacity-0"
                whileHover={{ opacity: 1 }}
              >
                <div className="text-white text-center">
                  <p className="font-bold mb-2">{member.name}</p>
                  <p>{member.role}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;
