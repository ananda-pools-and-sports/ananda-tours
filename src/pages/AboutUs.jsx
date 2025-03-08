import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ParallaxSection from "../components/AboutUs/ParallaxSection";
import TourTypeIcons from "../components/AboutUs/TourTypeIcons";
import AnimatedWorldMap from "../components/AboutUs/AnimatedWorldMap";
import ProgramInclusions from "../components/AboutUs/ProgramInclusions";
import CallToAction from "../components/AboutUs/CallToAction";

const AboutUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="about-us">
      <ParallaxSection
        bgImage="/images/about-us-hero.jpg"
        height="100vh"
        overlayContent={
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              About Ananda Tours
            </h1>
            <p className="text-xl md:text-2xl">
              Crafting Unforgettable Experiences
            </p>
          </div>
        }
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Our Journey
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16">
              Ananda Tours began with a vision to create extraordinary travel
              experiences that combine sports, adventure, and cultural
              immersion. Over the years, we've grown from a small local operator
              to a renowned name in experiential tourism, touching the lives of
              thousands of travelers from around the globe.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Our Diverse Offerings
          </h2>
          <TourTypeIcons />
        </div>
      </section>

      <AnimatedWorldMap />

      <ProgramInclusions />

      <CallToAction />
    </div>
  );
};

export default AboutUs;
