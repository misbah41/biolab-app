/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import AboutImg from "../../Share/img/about/1.png";
import LineImg from '../../Share/img/line.png'
import { listData } from "./ThisContentData";
import ThisSectionContent from "./ThisSectionContent/ThisSectionContent";
const AboutSection = () => {
  return (
    <section class="about-area padding-120">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="thumb">
              <img class="w-100" src={AboutImg} alt="img" />
            </div>
          </div>
          <div class="col-lg-6 align-self-center">
            <div class="about-inner pl-30 mt-lg-0 mt-5">
              <div class="section-title mb-40">
                <div class="line-arrow">
                  <img src={LineImg} alt="line" />
                </div>
                <h3 class="sub-title">Why Choose Us</h3>
                <h2 class="title">Scale It Business Using Our Process</h2>
              </div>
              <ul class="bl-list-inner mb-50">
                {listData.map((data) => (
                  <ThisSectionContent data={data} />
                ))}
              </ul>
              <a class="more-work-btn" href="#">
                Contact Us +
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
