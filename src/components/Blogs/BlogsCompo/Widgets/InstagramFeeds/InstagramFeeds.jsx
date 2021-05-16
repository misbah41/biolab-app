/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const instagramFeeds = [
  "Popular",
  "Design",
  "UI/UX",
  "Usability",
  "Develope",
  "Icon",
  "Business",
  "Consult",
  "Kit",
  "Keyboard",
  "Mouse",
  "Tech",
];

const InstagramFeeds = () => {
  return (
    <div class="widget widget_tag_cloud mb-35">
      <h4 class="title"> Instagram Feeds</h4>
      <div class="tagcloud">
        {instagramFeeds.map((data) => (
          <a href="#" class="tag-cloud-link tag-link-49 tag-link-position-1">
            {data}
          </a>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeeds;
