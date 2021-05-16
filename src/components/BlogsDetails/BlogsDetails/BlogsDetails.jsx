import React from "react";
import Footer from "../../Share/Footer/Footer";
import BlogDetailsBanner from "../BlogDetailsBanner/BlogDetailsBanner";
import BlogsPost from "../BlogsPost/BlogsPost";
import "./BlogsDetails.css";
const BlogsDetails = () => {
  return (
    <>
      <BlogDetailsBanner />
      <BlogsPost />
      <Footer />
    </>
  );
};

export default BlogsDetails;
