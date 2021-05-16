import React from "react";
import { Link } from "react-router-dom";
import './BlogsBanner.css'
const BlogsBanner = () => {
  return (
    <section
      class="breadcrumb-area blogBanner">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-8">
            <div class="breadcrumb-inner text-center text-lg-left">
              <h1 class="title">News Insights</h1>
            </div>
          </div>
          <div class="col-xl-6 col-lg-4 text-lg-right text-center">
            <nav aria-label="breadcrumb">
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <Link to="/home">Home</Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Blog Feeds{" "}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsBanner;
