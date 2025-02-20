import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    author: "Emily R.",
    text: "Ananda Tours provided an unforgettable adventure. The perfect blend of sports and culture!",
  },
  {
    author: "Michael T.",
    text: "As a photography enthusiast, their tours offered amazing opportunities to capture stunning moments.",
  },
  {
    author: "Sarah L.",
    text: "The customized tour exceeded all our expectations. Truly a once-in-a-lifetime experience.",
  },
  {
    author: "David K.",
    text: "Impeccable organization and friendly guides made our group tour absolutely fantastic.",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-ananda-orange">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          What Our Clients Say
        </h2>
        <div className="relative h-64">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl md:text-2xl text-white mb-4 max-w-2xl">
                "{testimonials[currentIndex].text}"
              </p>
              <p className="text-lg font-semibold text-white">
                - {testimonials[currentIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
