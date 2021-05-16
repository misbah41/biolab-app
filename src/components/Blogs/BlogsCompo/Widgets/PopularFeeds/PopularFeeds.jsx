/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Feeds from "./Feeds/Feeds";
import { feedsData } from "./PopularFeedsData";

const PopularFeeds = () => {
  return (
    <div class="widget widget_recent_comments mb-40">
      <h4 class="title">Popular Feeds</h4>
      <ul id="recentcomments">
        {feedsData.map((feedData) => (
          <Feeds feedData={feedData} />
        ))}
      </ul>
    </div>
  );
};

export default PopularFeeds;
