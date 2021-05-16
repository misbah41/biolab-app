import React from "react";

const ContactForm = () => {
  return (
    <>
      <div class="contact-right">
        <div class="contact-form">
          <form action="#">
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="fname"
                    name="fname"
                    placeholder="Full name"
                  />
                  <i class="icon fa fa-user-o"></i>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="lname"
                    name="lname"
                    placeholder="Full name"
                  />
                  <i class="icon fa fa-user-o"></i>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="subject"
                    name="subject"
                    placeholder="Select Subject"
                  />
                  <i class="icon fa fa-book"></i>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <textarea
                    class="form-control text-box"
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Enter Message"
                  ></textarea>
                  <i class="icon fa fa-pencil"></i>
                </div>
              </div>
            </div>
            <div class="form-btn text-right">
              <button type="submit" class="primary-btn border-0">
                Get A Quote <i class="flaticon-right-arrow"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
