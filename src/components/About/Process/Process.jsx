import React from "react";
import ProcessCards from "./ProcessCards/ProcessCards";
import { processesData } from "./ProcessCardsData";
import LineImg from "../../Share/img/line.png";
const Process = () => {
  return (
    <section class="works-area padding-top-120 padding-bottom-90">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center margin-bottom-40">
              <div class="line-arrow">
                <img src={LineImg} alt="line" />
              </div>
              <h3 class="sub-title">Process</h3>
              <h2 class="title">How We Works</h2>
            </div>
          </div>
        </div>
        <div class="row">
          {processesData.map((processData) => (
            <ProcessCards processData={processData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
