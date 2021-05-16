import React from "react";
import "../../Share/css/app.css";
import "../../Share/css/default.css";
import "../../Share/css/responsive.css";
import Banner from "../Banner/Banner";
import HomeAbout from "../HomeAbout/HomeAbout";
import Services from "../Services/Services";
import PostArea from "../PostArea/PostArea";
import Testimonials from "../Testimonial/Testimonial";
import Experience from "../Experience/Experience";
import ContactCompo from "../Contact/ContactCompo/ContactCompo";
import BlogsArea from "../BlogsArea/BlogsArea";
import Footer from "../../Share/Footer/Footer";
const Home = () => {
  return (
    <>
      <Banner />
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

export default Home;
