"use client";
import { motion } from "framer-motion";

const AnimatedGalleryHeading = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-bold text-center mb-8 text-white relative"
    >
      <span className="relative z-10">Our Gallery</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-ananda-orange to-ananda-yellow opacity-75 blur-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.75 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      <motion.div
        className="absolute inset-0 bg-white opacity-20"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </motion.h1>
  );
};

export default AnimatedGalleryHeading;
