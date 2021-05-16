import React from "react";
import LineImg from '../../../Share/img/line.png';
const PricingTitleBar = () => {
  return (
    <div class="col-md-6">
      <div class="section-title margin-bottom-40">
        <div class="line-arrow">
          <img src={LineImg} alt="line" />
        </div>
        <h3 class="sub-title">Our Plans</h3>
        <h2 class="card-title">Working Pricing</h2>
      </div>
    </div>
  );
};

export default PricingTitleBar;
