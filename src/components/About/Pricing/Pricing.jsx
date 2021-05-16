/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import MonthlyCard from "./MonthlyCard/MonthlyCard";
import { monthlyCardsData } from "./MonthlyData";
import PricingTitleBar from "./PricingTitleBar/PricingTitleBar";
import YearlyCard from "./YearlyCard/YearlyCard";
import { yearlyCardsData } from "./YearlyData";
import './Pricing.css'
const Pricing = () => {
  return (
    <section class="pricing-area padding-top-120 padding-bottom-90">
      <div class="container">
        <div class="row">
          <PricingTitleBar />
          <div class="col-md-6 align-self-center text-md-right">
            <nav class="pricing-tabs mb-md-0 mb-5">
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  class="nav-item nav-link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Monthly
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Yearly
                </a>
              </div>
            </nav>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div class="row justify-content-center">
                  {monthlyCardsData.map((monthlyData) => (
                    <MonthlyCard monthlyData={monthlyData} />
                  ))}
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <div class="row justify-content-center">
                  {yearlyCardsData.map((yearlyData) => (
                    <YearlyCard yearlyData={yearlyData} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
