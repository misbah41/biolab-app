import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Testimonial.css";
import { reviews } from "./TestimonialsData";
import HomeBrands from "../HomeBrands/HomeBrands";
const Testimonials = () => {
  return (
    <section class="testimonial-area padding-120">
      <div className="container mt-5 mb-5 pt-5" id="reviews">
        <div className="titleDiv">
          <h4 className="text-center">Testimonials </h4>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <Carousel>
              {reviews.map((review) => (
                <div className=" d-flex justify-content-around ">
                  <div className=" p-3" style={{ marginBottom: "50px" }}>
                    <div className="review-card">
                      <h2 className="title">" {review.saying}. "</h2>
                      <div
                        className="clint-info d-inline-block"
                        style={{ marginTop: "100px" }}
                      >
                        <div className="media align-items-center">
                          <div className="clint-img mr-3">
                            <img src={review.ClientImg} alt="testimonial-IMG" />
                          </div>
                          <div className="media-body">
                            <h4 className="clint-name mt-0">
                              {review.clientName}
                            </h4>
                            <p className="clint-pro">{review.clientPosition}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <HomeBrands />
      </div>
    </section>
  );
};

export default Testimonials;
