import React from "react";
import { Outlet } from "react-router-dom";
import Hero from "../components/Hero";
import WhyBookWithUs from "../components/WhyBookWithUs";
import TourSection from "../components/TourSection";
import CulturalTours from "../components/CulturalTours";
import ExpertiseSection from "../components/ExpertiseSection";
import EduExchangeSection from "../components/EduExchangeSection";

const Home = () => {
  return (
    <>
      <Hero />
      <WhyBookWithUs />
      <div id="tours-section">
        <TourSection />
      </div>
      <CulturalTours />
      <EduExchangeSection />
      <ExpertiseSection />
      <Outlet />
    </>
  );
};

export default Home;
