import React from "react";
import FactImg from "../../../Share/img/fun-facts-video-thumbnail.jpg";

const FeatureVideo = () => {
  return (
    <div class="video-area">
      <img src={FactImg} alt="fun-facts-video-thumbnail" />
      <a
        href="http://www.youtube.com/watch?v=0O2aH4XLbto"
        class="video-play-btn"
      >
        <i class="fa fa-play"></i>
      </a>
    </div>
  );
};

export default FeatureVideo;
