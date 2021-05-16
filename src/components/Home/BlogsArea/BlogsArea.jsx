import React from "react";
import BlogCard from "./BlogCard/BlogCard";
import { blogsData } from "./BlogCard/BlogCardContent";
import LineImg from "../../Share/img/line.png";
const BlogsArea = () => {
  return (
    <section class="blog-area padding-top-120 padding-bottom-90 light-yellow-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center margin-bottom-40">
              <div class="line-arrow">
                <img src={LineImg} alt="line" />
              </div>
              <h3 class="sub-title">News Feeds</h3>
              <h2 class="title">News Insights</h2>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          {blogsData.map((blogData) => (
            <BlogCard blogData={blogData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsArea;
