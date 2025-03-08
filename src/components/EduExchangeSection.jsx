import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";

import S1 from "../utils/basket4.jpg";
import S2 from "../utils/travel2.jpg";
import S3 from "../utils/turkey3.jpg";
import S4 from "../utils/CP2.jpg";
import S5 from "../utils/basket5.jpg";

const eduExchangeImages = [S1, S2, S3, S4, S5];

const eduExchangePrograms = [
  {
    title: "Language Immersion",
    description: "Immerse yourself in a new language and culture.",
    icon: "🗣️",
  },
  {
    title: "STEM Exploration",
    description: "Engage in cutting-edge science and technology programs.",
    icon: "🔬",
  },
  {
    title: "Arts & Humanities",
    description: "Explore global art, literature, and history.",
    icon: "🎨",
  },
  {
    title: "Global Leadership",
    description: "Develop leadership skills in an international context.",
    icon: "🌍",
  },
];

const EduExchangeSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-ananda-orange mb-8 font-heading">
          Education Exchange Programmes
        </h2>
        <div className="mb-12 max-w-4xl mx-auto">
          <p className="text-center text-gray-600 mb-6 font-sans">
            With over two decades of experience in organizing educational
            exchange programs, Ananda Tours has established itself as a leader
            in fostering global learning experiences. Our programs have touched
            the lives of thousands of students, providing them with unique
            opportunities to broaden their horizons and develop cross-cultural
            understanding.
          </p>
          <p className="text-center text-gray-600 mb-6 font-sans">
            We take pride in our meticulous attention to safety protocols and
            comprehensive support systems. Our team of experienced professionals
            ensures that every aspect of your educational journey is carefully
            planned and executed, allowing you to focus on learning and personal
            growth.
          </p>
          <p className="text-center text-gray-600 font-sans">
            Explore our diverse range of programs through the image slider
            below, showcasing the enriching experiences that await you.
          </p>
        </div>

        <div className="mb-12">
          <ImageSlider images={eduExchangeImages} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {eduExchangePrograms.map((program, index) => (
            <motion.div
              key={program.title}
              className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-2 font-heading">
                {program.title}
              </h3>
              <p className="text-gray-600 font-sans">{program.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6 font-sans">
            Ready to embark on a life-changing educational journey? Our team is
            here to assist you with any questions you may have about our
            Education Exchange Programmes.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-ananda-orange text-white py-3 px-8 rounded-full font-semibold hover:bg-ananda-yellow hover:text-gray-800 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg animate-breathe"
          >
            Enquire Here
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EduExchangeSection;
