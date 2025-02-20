import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Users, Trophy } from "lucide-react";
import "../styles/PackagesSection.css";
import S1 from "../utils/S1.jpg";
import S2 from "../utils/S2.jpg";
import S3 from "../utils/S3.jpg";

const packages = [
  {
    title: "5-Day Sports Experience",
    description:
      "Skill-building, friendly matches, team bonding and explore culture!",
    image: S1,
    gradient: "from-ananda-orange to-ananda-yellow",
    icon: Calendar,
  },
  {
    title: "7-Day Sports Adventure",
    description:
      "Intensive training, local tournaments, and cultural excursions",
    image: S2,
    gradient: "from-ananda-blue to-purple-500",
    icon: Users,
  },
  {
    title: "10-Day Ultimate Sports Tour",
    description:
      "Professional coaching, international competitions, and sports tourism",
    image: S3,
    gradient: "from-green-400 to-ananda-blue",
    icon: Trophy,
  },
];

const PackageCard = ({ title, description, image, gradient, icon: Icon }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className={`package-card relative overflow-hidden rounded-lg shadow-lg`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-75`}
      ></div>
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="relative p-6">
        <Icon className="w-12 h-12 text-white mb-4" />
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-white mb-4">{description}</p>
        <Link
          to="/itinerary"
          className="btn bg-white text-ananda-orange hover:bg-ananda-orange hover:text-white inline-block px-4 py-2 rounded-full transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

const PackagesSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="packages-section relative py-20 overflow-hidden bg-gray-100">
      <div
        className="absolute inset-0 parallax opacity-10"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 },
          }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-ananda-orange mb-12 relative inline-block"
        >
          Our Pre-Planned Packages
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/customize"
            className="customize-btn bg-ananda-orange text-white hover:bg-white hover:text-ananda-orange transition-colors duration-300 font-bold py-3 px-8 rounded-full inline-block"
          >
            Customize Your Package
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-ananda-yellow to-transparent opacity-20 rounded-full animate-breathe"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-radial from-ananda-blue to-transparent opacity-20 clip-path-blob animate-float"></div>
      </div>
    </section>
  );
};

export default PackagesSection;
