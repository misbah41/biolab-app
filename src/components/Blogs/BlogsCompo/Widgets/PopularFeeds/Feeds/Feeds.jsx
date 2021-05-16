/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Feeds = ({ feedData }) => {
  return (
    <li class="recentcomments d-flex">
      <div class="thumb media-left">
        <img src={feedData.feedImg} alt="img" />
      </div>
      <div class="media-body align-self-center">
        <h5>
          <a href="#">{feedData.feedPost}</a>
        </h5>
        <p>
          <i class="fa fa-calendar"></i>
          {feedData.feedDate}
        </p>
      </div>
    </li>
  );
};

export default Feeds;
