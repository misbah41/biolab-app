import React from "react";

const YearlyCard = ({ yearlyData }) => {
  return (
    <div class="col-lg-4 col-md-6">
      <div class="single-pricing-wrap">
        <span class="card-title">{yearlyData.cardTitle}</span>
        <div class="price">
          <h2><small>$</small>{yearlyData.cardPrice}</h2>
        </div>
        <ul class="pricing-list">
          <li>
            <i class="fa fa-check"></i>
            {yearlyData.pricingList1}
          </li>
          <li>
            <i class="fa fa-check"></i>
            {yearlyData.pricingList2}
          </li>
          <li>
            <i class="fa fa-check"></i>
            {yearlyData.pricingList3}
          </li>
          <li class="unable">
            <i class="fa fa-check"></i>
            {yearlyData.pricingList4}
          </li>
          <li class="unable">
            <i class="fa fa-check"></i>
            {yearlyData.pricingList5}
          </li>
        </ul>
        <div class="btn-area text-center">
          <button class="more-work-btn priceBtn" >
            <i class="fa fa-shopping-cart mr-2"></i> {yearlyData.pricinBtn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default YearlyCard;
