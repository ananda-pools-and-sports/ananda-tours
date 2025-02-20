import React from "react";
import { motion } from "framer-motion";

const ImageGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center font-semibold px-2">
              {image.caption}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGrid;
