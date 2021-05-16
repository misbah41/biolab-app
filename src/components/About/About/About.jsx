import React from "react";
import HomeBrands from "../../Home/HomeBrands/HomeBrands";
import AboutBanner from "../AboutBanner/AboutBanner";
import AboutSection from "../AboutSection/AboutSection";
import Experiences from "../Experiences/Experiences";
import Pricing from "../Pricing/Pricing";
import Footer from "../../Share/Footer/Footer";
import Process from "../Process/Process";
const About = () => {
  return (
    <>
      <AboutBanner />
      <Experiences />
      <AboutSection />
      <Pricing />
      <div className="container bg-light">
        <HomeBrands />
      </div>
      <Process />
      <Footer />
    </>
  );
};

export default About;
