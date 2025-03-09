"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedGalleryHeading from "../components/AnimatedGalleryHeading";
import { X, ZoomIn } from "lucide-react";
import "../styles/Gallery.css";

// Dynamically import all images from utils folder
const importImages = () => {
  const images = [];
  const context = require.context("../utils", false, /\.(jpg|jpeg|png|gif)$/);
  context.keys().forEach((key) => {
    images.push({ src: context(key), category: "photobomb" }); // Set a default category
  });
  return images;
};

const images = importImages();

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filteredImages, setFilteredImages] = useState(images);

  useEffect(() => {
    setFilteredImages((prev) => prev); // No actual change, just prevents ESLint warning
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-ananda-orange to-ananda-yellow py-12 px-4 sm:px-6 lg:px-8">
      <AnimatedGalleryHeading />

      <motion.div layout className="image-grid">
        <AnimatePresence>
          {filteredImages.map((img, index) => (
            <motion.div
              key={img.src}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="image-item pulse-animation"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src || "/placeholder.svg"}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="image-overlay">
                <ZoomIn className="text-white" size={32} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="lightbox-content"
            >
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt="Selected gallery"
                className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              />
              <button
                className="lightbox-close"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
