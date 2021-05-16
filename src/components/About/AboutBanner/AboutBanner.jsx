import React from "react";
import { Link } from "react-router-dom";
import './AboutBanner.css'
const AboutBanner = () => {
  return (
    <section
      class="breadcrumb-area">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-8">
            <div class="breadcrumb-inner text-center text-lg-left">
              <h1 class="title">Website Design</h1>
            </div>
          </div>
          <div class="col-xl-6 col-lg-4 text-lg-right text-center">
            <nav aria-label="breadcrumb">
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <Link to="/home">Home</Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  About{" "}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
