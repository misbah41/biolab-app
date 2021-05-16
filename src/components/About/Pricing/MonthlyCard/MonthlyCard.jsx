import React from "react";

const MonthlyCard = ({ monthlyData }) => {
  return (
    <div class="col-lg-4 col-md-6">
      <div class="single-pricing-wrap">
        <span class="card-title">{monthlyData.cardTitle}</span>
        <div class="price">
          <h2> <small>$</small>{monthlyData.cardPrice}</h2>
        </div>
        <ul class="pricing-list">
          <li>
            <i class="fa fa-check"></i>
            {monthlyData.pricingList1}
          </li>
          <li>
            <i class="fa fa-check"></i>
            {monthlyData.pricingList2}
          </li>
          <li>
            <i class="fa fa-check"></i>
            {monthlyData.pricingList3}
          </li>
          <li class="unable">
            <i class="fa fa-check"></i>
            {monthlyData.pricingList4}
          </li>
          <li class="unable">
            <i class="fa fa-check"></i>
            {monthlyData.pricingList5}
          </li>
        </ul>
        <div class="btn-area text-center">
          <button class="more-work-btn priceBtn" href="#">
            <i class="fa fa-shopping-cart mr-2"></i> {monthlyData.pricinBtn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MonthlyCard;
