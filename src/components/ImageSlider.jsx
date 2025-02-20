// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const ImageSlider = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const nextSlide = () => {
//     setDirection(1);
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 1 === images.length ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setDirection(-1);
//     setCurrentIndex((prevIndex) =>
//       prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const setSlide = (index) => {
//     setDirection(index > currentIndex ? 1 : -1);
//     setCurrentIndex(index);
//   };

//   const slideVariants = {
//     hidden: (direction) => ({
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//     }),
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         x: { type: "spring", stiffness: 300, damping: 30 },
//         opacity: { duration: 0.5 },
//       },
//     },
//     exit: (direction) => ({
//       x: direction > 0 ? -1000 : 1000,
//       opacity: 0,
//       transition: {
//         x: { type: "spring", stiffness: 300, damping: 30 },
//         opacity: { duration: 0.5 },
//       },
//     }),
//   };

//   return (
//     <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
//       <AnimatePresence initial={false} custom={direction}>
//         <motion.img
//           key={currentIndex}
//           src={images[currentIndex]}
//           alt={`Tour image ${currentIndex + 1}`}
//           className="absolute w-full h-full object-cover"
//           custom={direction}
//           variants={slideVariants}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//         />
//       </AnimatePresence>
//       <button
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ananda-orange"
//         onClick={prevSlide}
//         aria-label="Previous image"
//       >
//         <ChevronLeft size={24} />
//       </button>
//       <button
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ananda-orange"
//         onClick={nextSlide}
//         aria-label="Next image"
//       >
//         <ChevronRight size={24} />
//       </button>
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ananda-orange ${
//               index === currentIndex
//                 ? "bg-ananda-orange"
//                 : "bg-white bg-opacity-50"
//             }`}
//             onClick={() => setSlide(index)}
//             aria-label={`Go to image ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = ({ images, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const setSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      className={`relative w-full h-96 overflow-hidden rounded-lg shadow-lg ${className}`}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Tour image ${currentIndex + 1}`}
          className="absolute w-full h-full object-contain bg-gray-100"
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        />
      </AnimatePresence>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ananda-orange"
        onClick={prevSlide}
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ananda-orange"
        onClick={nextSlide}
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ananda-orange ${
              index === currentIndex
                ? "bg-ananda-orange"
                : "bg-white bg-opacity-50"
            }`}
            onClick={() => setSlide(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
