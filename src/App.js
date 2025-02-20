import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PackagesSection from "./pages/PackagesSection";
import Itinerary from "./pages/Itinerary";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CustomizedPackages from "./pages/CustomizedPackages";
import ContactSection from "./pages/ContactSection";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<PackagesSection />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/customize" element={<CustomizedPackages />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
