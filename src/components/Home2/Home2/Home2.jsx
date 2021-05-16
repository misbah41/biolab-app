import React from "react";
import BlogsArea from "../../Home/BlogsArea/BlogsArea";
import ContactCompo from "../../Home/Contact/ContactCompo/ContactCompo";
import Experience from "../../Home/Experience/Experience";
import HomeAbout from "../../Home/HomeAbout/HomeAbout";
import PostArea from "../../Home/PostArea/PostArea";
import Services from "../../Home/Services/Services";
import Testimonials from "../../Home/Testimonial/Testimonial";
import Footer from "../../Share/Footer/Footer";
import Home2Banner from "../Home2Banner/Home2Banner";

const Home2 = () => {
  return (
    <>
      <Home2Banner />
      <HomeAbout />
      <Services />
      <PostArea />
      <Testimonials />
      <Experience />
      <ContactCompo />
      <BlogsArea />
      <Footer />
    </>
  );
};

export default Home2;
