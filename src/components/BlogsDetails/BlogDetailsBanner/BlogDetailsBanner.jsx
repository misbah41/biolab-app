import React from 'react';
import { Link } from 'react-router-dom';

const BlogDetailsBanner = () => {
  return (
    <section class="breadcrumb-area blogDetails">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-8">
            <div class="breadcrumb-inner text-center text-lg-left">
              <h1 class="title">News Details</h1>
            </div>
          </div>
          <div class="col-xl-6 col-lg-4 text-lg-right text-center">
            <nav aria-label="breadcrumb">
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <Link t="/home">Home</Link>
                </li>
                <li class="breadcrumb-item">
                  <Link to="/blog">Blog</Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Blog Details{" "}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsBanner;