import React from "react";
import "./Home2Banner.css";
const Home2Banner = () => {
  return (
    <section
      className="hero-banner-area Home2Banner style-2">
      <div className="container-fluid">
        <div className="row justify-content-end">
          <div className="col-md-6">
            <div className="banner-text px-40">
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
    </section>
  );
};

export default Home2Banner;
