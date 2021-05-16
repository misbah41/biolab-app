import React from "react";
import LineImg from "../../Share/img/line.png";
import ServiceCards from "./ServiceCards/ServiceCards";
import { servicesData } from "./ServicesData";
import { serviceImg } from "./ServicesList";
import ServicesListCard from "./ServicesListCard/ServicesListCard";

const Services = () => {
  return (
    <section class="service-area padding-top-120 padding-bottom-90">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center margin-bottom-40">
              <div class="line-arrow">
                <img src={LineImg} alt="line" />
              </div>
              <h3 class="sub-title">Services</h3>
              <h2 class="title">What I Do</h2>
            </div>
          </div>
        </div>
        <div class="work-progress-area padding-bottom-90">
          <div class="row">
            {servicesData.map((serviceData) => (
              <ServiceCards serviceData={serviceData} />
            ))}
          </div>
        </div>
        <div class="service-list">
          <div class="row align-items-center">
            {serviceImg.map((img) => (
              <ServicesListCard img={img} />
            ))}
            <div class="col-lg-4 col-md-6 col-sm-6 text-center">
              <a class="more-work-btn" href="blog.html">
                More Works +
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
