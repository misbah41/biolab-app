import React from "react";

const ServicesListCard = ({img}) => {
  return (
    <div class="col-lg-4 col-md-6 col-sm-6">
      <div class="single-service">
        <div class="service-thumbnail">
          <img src={img} alt="service" />
          <div class="service-overlay">
            <a class="view-btn image-popup" href="assets/img/services/1.jpg">
              <i class="btn-icon flaticon-plus"> <span style={{fontSize:'42px', fontWeight:'900'}}>+</span> </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesListCard;
