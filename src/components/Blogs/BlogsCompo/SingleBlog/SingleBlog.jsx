/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const SingleBlog = ({ blogContent }) => {
  return (
    <article class="single-blog-list-item mb-30">
      <div class="blog-thumb">
        <a href="#">
          {blogContent.blogImg && <img src={blogContent.blogImg} alt="img" />}
        </a>
        {blogContent.category && (
          <a class="category" href="#">
            {blogContent.category}
          </a>
        )}
        {blogContent.authorImg && (
          <a class="author" href="#">
            <img src={blogContent.authorImg} alt="img" />
            {blogContent.authorName}
          </a>
        )}
      </div>
      <div class="blog-details">
        <div class="blog-title">
          <a href="blog-details.html">
            <h2>{blogContent.blogTitle}</h2>
          </a>
        </div>
        <div class="blog-content">
          <p>{blogContent.blogContent}</p>
        </div>
        <div class="blog-meta">
          <span>
            <a href="#">
              <i class="fa fa-eye"></i>
              {blogContent.views}
            </a>{" "}
          </span>
          <span>
            <a href="#">
              <i class="fa fa-comments-o"></i>
              {blogContent.comments}
            </a>
          </span>
          <span class="mr-0 border-0">
            <i class="fa fa-calendar"></i>
            {blogContent.date}
          </span>
        </div>
      </div>
    </article>
  );
};

export default SingleBlog;
