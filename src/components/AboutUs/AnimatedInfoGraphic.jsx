import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedInfoGraphic = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { label: "Happy Travelers", value: 50000, suffix: "+" },
    { label: "Countries Visited", value: 30, suffix: "" },
    { label: "Tour Types", value: 15, suffix: "" },
    { label: "Years of Experience", value: 13, suffix: "" },
  ];

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <motion.div
            className="text-4xl md:text-5xl font-bold text-ananda-orange mb-2"
            initial={{ value: 0 }}
            animate={inView ? { value: stat.value } : { value: 0 }}
            transition={{ duration: 2, delay: index * 0.1 }}
          >
            {({ value }) => `${Math.floor(value)}${stat.suffix}`}
          </motion.div>
          <div className="text-lg text-gray-600">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedInfoGraphic;
