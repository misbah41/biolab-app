/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import AddressCompo from "../../Home/Contact/AddressCompo/AddressCompo";
import Map from "./Map/Map";
import LineImg from '../../Share/img/line.png'
const ContactInfoIframe = () => {
  return (
    <section class="contact-area padding-120">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <Map />
          </div>
          <div class="col-lg-6 align-self-center">
            <div class="contact-left ml-30 mt-lg-0 mt-5">
              <div class="section-title margin-bottom-40">
                <div class="line-arrow">
                  <img src={LineImg} alt="line" />
                </div>
                <h3 class="sub-title">Contact Me</h3>
                <h2 class="title">Catch Us Here</h2>
              </div>
              <div class="contact-details">
                <a class="more-work-btn mr-3 mb-3" href="#">
                  Main Office
                </a>
                <a class="primary-btn" href="#">
                  New Castle
                </a>
                <ul>
                  <AddressCompo />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoIframe;
