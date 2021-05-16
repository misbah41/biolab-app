/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Banner.css'
const Banner = () => {
  return (
    <section
      className="hero-banner-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-md-7">
            <div className="banner-text">
              <h3 className="banenr-subtitle">Alex D. Williamson</h3>
              <h1 className="banenr-title">
                Creative <br /> Product <span>Designer</span>
              </h1>
              <p className="banner-content">
                Welcome to my portfolio, if you want, you can have one also, and
                it can look like this.
              </p>
              <a className="primary-btn" href="contact.html">
                Contact Me <i className="flaticon-right-arrow"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-side-area">
        <ul>
          <li>
            <ul className="social-area">
              <li>Follow</li>
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-behance"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-youtube-play"></i>
                </a>
              </li>
            </ul>
          </li>
          <li>info@webmail.com</li>
          <li>789. 987. 854. 51</li>
        </ul>
      </div>
    </section>
  );
};

export default Banner;
