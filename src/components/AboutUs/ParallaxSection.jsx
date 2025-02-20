import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxSection = ({ bgImage, height, overlayContent }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="relative overflow-hidden" style={{ height }}>
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          y,
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        {overlayContent}
      </div>
    </div>
  );
};

export default ParallaxSection;
