import React from "react";

const Feature = ({ data }) => {
  return (
    <div class="col-sm-5">
      <div class="single-feature">
        <div class="feature-left">
          <h2>
            {data.featureCount}
            <sub>{data.featureIcon}</sub>
          </h2>
        </div>
        <h4 class="feature-title">{data.featurePost}</h4>
      </div>
    </div>
  );
};

export default Feature;
