import React from "react";
import Feature from "./Feature/Feature";
import { featureData } from "./Feature/featureData";
import FeatureContent from "./FeatureContent/FeatureContent";
import FeatureVideo from "./FeatureVideo/FeatureVideo";
const Experience = () => {
  return (
    <section class="fun-facts-area text-lg-left text-center">
      <div class="contaienr-fluid px-0">
        <div class="row align-items-center no-gutters">
          <div class="col-xl-6">
            <FeatureVideo />
          </div>
          <div class="col-xl-5">
            <div class="fun-fact-info">
              <FeatureContent />
              <div class="feature-area">
                <div class="row justify-content-center justify-content-lg-start">
                  {featureData.map((data) => (
                    <Feature data={data} />
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

export default Experience;
