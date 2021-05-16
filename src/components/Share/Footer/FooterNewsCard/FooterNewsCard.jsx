import React from "react";

const FooterNewsCard = ({ newsData }) => {
  return (
    <>
      <li class="single-recent-post-item">
        <div class="thumb">
          <a href="blog-details.html">
            <img src={newsData.newsImg} alt="news" />
          </a>
        </div>
        <div class="content">
          <h5 class="author-name mt-0">
            By <a href="blog-details.html">{newsData.newsAuthor}</a>
          </h5>
          <h3 class="title">
            <a href="blog-details.html">{newsData.newsTitle}</a>
          </h3>
        </div>
      </li>
    </>
  );
};

export default FooterNewsCard;
