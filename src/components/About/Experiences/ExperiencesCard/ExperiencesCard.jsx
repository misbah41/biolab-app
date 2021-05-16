import React from "react";

const ExperiencesCard = ({ experienceData }) => {
  return (
    <div class="col-lg-2 col-md-3 col-6">
      <article class="single-experienced-wrap">
        <div class="thumb">
          <img src={experienceData.experienceImg} alt="post" />
        </div>
        <h6>{experienceData.experienceName}</h6>
      </article>
    </div>
  );
};

export default ExperiencesCard;
