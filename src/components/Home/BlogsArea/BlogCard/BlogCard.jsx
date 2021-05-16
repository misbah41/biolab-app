import React from "react";

const BlogCard = ({ blogData }) => {
  return (
    <div class="col-lg-4 col-sm-6">
      <article class="single-blog">
        <div class="blog-thumbnail">
          <a href="blog.html">
            <img src={blogData.blogImg} alt="post" />
          </a>
          <a class="catagory-name" href="blog.html">
            {blogData.blogLink}
          </a>
          <div class="blog-date">
            <h3>{blogData.blogdate}</h3>
            <span>{blogData.blogMonth}</span>
          </div>
        </div>
        <div class="blog-info">
          <h4 class="author-name">
            By <a href="blog.html">{blogData.authorName}</a>
          </h4>
          <h3 class="post-title">
            <a href="blog.html">{blogData.blogTitle}</a>
          </h3>
        </div>
      </article>
    </div>
  );
};

export default BlogCard;
