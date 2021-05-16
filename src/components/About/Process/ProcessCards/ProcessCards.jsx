import React from "react";

const ProcessCards = ({processData}) => {
  return (
    <div class="col-lg-3 col-sm-6">
      <article class="single-works-wrap">
        <div class="thumb">
          <div class="number">{processData.processNum} </div>
          <img src={processData.processImg} alt="post" />
        </div>
        <h6>{processData.processTitle}</h6>
      </article>
    </div>
  );
};

export default ProcessCards;
