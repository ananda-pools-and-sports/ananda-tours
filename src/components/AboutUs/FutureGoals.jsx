import React from "react";
import { motion } from "framer-motion";

const goals = [
  { label: "Expand to 50 Countries", progress: 60 },
  { label: "100% Carbon Neutral Tours", progress: 40 },
  { label: "Launch Virtual Reality Experiences", progress: 20 },
  { label: "Establish Ananda Tours Academy", progress: 80 },
];

const FutureGoals = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our Future Goals
        </h2>
        <div className="max-w-3xl mx-auto">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              className="mb-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-lg font-semibold">{goal.label}</span>
                <span className="text-lg font-semibold">{goal.progress}%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
                <motion.div
                  className="bg-ananda-orange h-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${goal.progress}%` }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureGoals;
