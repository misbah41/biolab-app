import React from "react";

const ServiceCards = ({ serviceData }) => {
  return (
    <div class="col-lg-3 col-sm-6">
      <div class="single-work-progress">
        <h2 class="porgress-count">{serviceData.serviceCount}</h2>
        <h3>{serviceData.serviceTitle}</h3>
        <p>{serviceData.servicePost}</p>
        <a class="read-btn" href="about.html">
          <i class="btn-icon flaticon-plus">
            {" "}
            <span style={{ fontSize: "20px", fontWeight: "900" }}>+</span>{" "}
          </i>{" "}
          <span class="btn-text">{serviceData.serviceBtn}</span>
        </a>
      </div>
    </div>
  );
};

export default ServiceCards;
