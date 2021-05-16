import React from "react";
import { experiencesData } from "./AboutBrandsData";
import ExperiencesCard from "./ExperiencesCard/ExperiencesCard";

const Experiences = () => {
  return (
    <div class="experienced-area padding-top-120 padding-bottom-90">
      <div class="container">
        <div class="row justify-content-center">
          {experiencesData.map((experienceData) => (
            <ExperiencesCard experienceData={experienceData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
