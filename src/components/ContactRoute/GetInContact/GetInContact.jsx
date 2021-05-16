import React from "react";
import ContactForm from "../../Home/Contact/ContactCompo/ContactForm/ContactForm";
import LineImg from '../../Share/img/line.png'
const GetInContact = () => {
  return (
    <section
      class="contact-area padding-120 text-center"
      style={{backgroundColor:'#f7f7f7'}}
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title margin-bottom-40">
              <div class="line-arrow">
                <img src={LineImg} alt="line" />
              </div>
              <h3 class="sub-title">Contact Me</h3>
              <h2 class="title">Get A Free Quote</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInContact;
