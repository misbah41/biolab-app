import React from "react";
import { thisCompoData } from "./ThisCompoData";
import LineImg from '../../Share/img/line.png';
const HomeAbout = () => {
  return (
    <section class="about-area padding-120 text-lg-left text-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="section-title pr-20">
              <div class="line-arrow">
                <img src={LineImg} alt="line" />
              </div>
              <h3 class="sub-title">{thisCompoData.subTitle}</h3>
              <h2 class="title">{thisCompoData.title}</h2>
            </div>
          </div>
          <div class="col-lg-5 col-md-8">
            <div class="about-info">
              <p>{thisCompoData.aboutInfo}</p>
              <p>{thisCompoData.aboutInfoPost}</p>
              <div class="single-progressbar">
                <h4>{thisCompoData.progressTitle}</h4>
                <div class="progress-item" id="progress-running">
                  <div class="progress-bg">
                    <div id="progress" class="progress-rate" data-value="82">
                      <div class="progress-count-wrap">
                        <span class="progress-count counting" data-count="82">
                          0
                        </span>
                        <span class="counting-icons">%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
