"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const buttonVariants = {
    closed: { scale: 1, rotate: 0 },
    open: { scale: 1.1, rotate: 180 },
  };

  const menuVariants = {
    closed: { opacity: 0, y: 20, pointerEvents: "none" },
    open: { opacity: 1, y: 0, pointerEvents: "auto" },
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.button
        className="w-16 h-16 rounded-full bg-gradient-to-r from-ananda-orange to-ananda-yellow text-white flex items-center justify-center shadow-lg focus:outline-none"
        onClick={toggleOpen}
        variants={buttonVariants}
        animate={isOpen ? "open" : "closed"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      <motion.div
        className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl p-4 w-64"
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <h3 className="text-lg font-semibold mb-2 text-ananda-orange">
          Contact Us
        </h3>
        <p className="text-gray-600 mb-4">
          Get in touch with us for any inquiries or support.
        </p>
        <Link
          to="/contact"
          className="block w-full bg-gradient-to-r from-ananda-orange to-ananda-yellow text-white py-2 px-4 rounded-full text-center font-semibold hover:from-ananda-yellow hover:to-ananda-orange transition-all duration-300"
        >
          Contact Now
        </Link>
      </motion.div>
    </div>
  );
};

export default FloatingContactButton;
