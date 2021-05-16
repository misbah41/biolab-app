import React from "react";
import AddressCompo from "../AddressCompo/AddressCompo";
import ContactForm from "./ContactForm/ContactForm";
import LineImg from '../../../Share/img/line.png'
const ContactCompo = () => {
  return (
    <section class="contact-area padding-120">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6">
            <div class="contact-left">
              <div class="section-title margin-bottom-40">
                <div class="line-arrow">
                  <img src={LineImg} alt="line" />
                </div>
                <h3 class="sub-title">Contact Me</h3>
                <h2 class="title">Get In Touch</h2>
              </div>
              <AddressCompo />
            </div>
          </div>
          <div class="col-lg-8 col-md-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCompo;
