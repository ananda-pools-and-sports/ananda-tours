"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import ImageSlider from "../components/ImageSlider";
import AlertModal from "../components/AlertModal";
import "../styles/CustomizedPackages.css";

import S1 from "../utils/S1.jpg";
import S2 from "../utils/S2.jpg";
import S3 from "../utils/S3.jpg";
import S4 from "../utils/S4.jpg";
import S5 from "../utils/S5.jpg";

import H1 from "../utils/culture1.jpg";
import H2 from "../utils/yogafort3.jpg";
import H3 from "../utils/almaty2.jpg";
import H4 from "../utils/almaty3.jpg";
import H5 from "../utils/Adventure-Tourism.avif";
import H6 from "../utils/basket3.jpg";

const images = [S1, S2, S3, S4, S5];
const imagesBelow = [H1, H2, H3, H4, H5, H6];

const tourTypes = [
  "Sports Tours",
  "Adventure Tours",
  "Cultural Tours",
  "Education Tours",
];

const CustomizedPackages = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    duration: "",
    participants: "",
    tourType: "",
    activities: "",
    message: "",
    contactMethod: "email",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted:", formData);

    const subject = encodeURIComponent("Customized Itinerary Request");
    const body = encodeURIComponent(`
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Duration: ${formData.duration} days
      Participants: ${formData.participants}
      Tour Type: ${formData.tourType}
      Preferred Activities: ${formData.activities}
      Additional Message: ${formData.message}
    `);

    if (formData.contactMethod === "whatsapp") {
      const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ADuration: ${formData.duration} days%0AParticipants: ${formData.participants}%0ATour Type: ${formData.tourType}%0APreferred Activities: ${formData.activities}%0AMessage: ${formData.message}`;
      window.open(`https://wa.me/919131959638?text=${message}`, "_blank");
    } else {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=anandasportstours@gmail.com&su=${subject}&body=${body}`,
        "_blank"
      );
    }

    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      duration: "",
      participants: "",
      tourType: "",
      activities: "",
      message: "",
      contactMethod: "email",
    });
    setIsAlertOpen(true);
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  return (
    <div className="customize-itinerary min-h-screen bg-gray-100">
      {/* <SEO
        title="Customize Your Itinerary | Ananda Sports Tours"
        description="Create your perfect sports tour with Ananda Sports Tours. Customize your itinerary, choose your activities, and embark on an unforgettable adventure."
        keywords="customize itinerary, sports tours, adventure tours, personalized travel"
      /> */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-ananda-orange mb-8">
          Customize Your Perfect Itinerary
        </h1>

        <div className="mb-12">
          <ImageSlider
            images={images}
            className="h-[500px] rounded-lg shadow-lg"
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div
              className="form-group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ananda-orange"
              />
            </motion.div>

            <motion.div
              className="form-group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ananda-orange"
              />
            </motion.div>

            <motion.div
              className="form-group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <label
                htmlFor="phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ananda-orange"
              />
            </motion.div>

            <motion.div
              className="form-group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <label
                htmlFor="duration"
                className="block text-gray-700 font-bold mb-2"
              >
                Duration (days)
              </label>
              <input
                type="number"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ananda-orange"
              />
            </motion.div>

            <motion.div
              className="form-group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <label
                htmlFor="participants"
                className="block text-gray-700 font-bold mb-2"
              >
                Number of Participants
              </label>
              <input
                type="number"
                id="participants"
                name="participants"
                value={formData.participants}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ananda-orange"
              />
            </motion.div>

            <motion.div
              className="form-group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <label
                htmlFor="tourType"
                className="block text-gray-700 font-bold mb-2"
              >
                Type of Tour
              </label>
              <select
                id="tourType"
                name="tourType"
                value={formData.tourType}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ananda-orange"
              >
                <option value="">Select a tour type</option>
                {tourTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </motion.div>

            <motion.div
              className="form-group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <label
                htmlFor="activities"
                className="block text-gray-700 font-bold mb-2"
              >
                Preferred Activities
              </label>
              <input
                type="text"
                id="activities"
                name="activities"
                value={formData.activities}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ananda-orange"
                placeholder="e.g., hiking, sightseeing, local cuisine"
              />
            </motion.div>

            <motion.div
              className="form-group md:col-span-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Additional Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ananda-orange resize-none"
                placeholder="Tell us more about your dream tour..."
              ></textarea>
            </motion.div>

            <div className="md:col-span-2">
              <label className="block text-gray-700 font-bold mb-2">
                Preferred Contact Method
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    checked={formData.contactMethod === "email"}
                    onChange={handleChange}
                    className="form-radio text-ananda-orange focus:ring-ananda-orange"
                  />
                  <span className="ml-2 text-gray-700">Email</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="whatsapp"
                    checked={formData.contactMethod === "whatsapp"}
                    onChange={handleChange}
                    className="form-radio text-ananda-blue focus:ring-ananda-blue"
                  />
                  <span className="ml-2 text-gray-700">WhatsApp</span>
                </label>
              </div>
            </div>

            <div className="md:col-span-2 text-center">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="bg-ananda-orange text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition duration-300 flex items-center justify-center mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin mr-2" size={20} />
                ) : (
                  <Send className="mr-2" size={20} />
                )}
                {isSubmitting ? "Sending..." : "Send Itinerary Request"}
              </motion.button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imagesBelow.map((image, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Tour ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
      <AlertModal
        isOpen={isAlertOpen}
        onClose={closeAlert}
        message="Thank you for your itinerary request! We will get back to you soon with a customized plan."
      />
    </div>
  );
};

export default CustomizedPackages;
