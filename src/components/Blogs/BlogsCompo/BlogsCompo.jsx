/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SingleBlog from "./SingleBlog/SingleBlog";
import { blogsContent } from "./BlogsData";
import AuthorWidget from "./Widgets/AuthorWidget/AuthorWidget";
import SerchWidget from "./Widgets/SerchWidget/SerchWidget";
import PopularFeeds from "./Widgets/PopularFeeds/PopularFeeds";
import Categories from "./Widgets/Categories/Categories";
import InstagramFeeds from "./Widgets/InstagramFeeds/InstagramFeeds";
import SponsorAdds from "./Widgets/SponsorAdds/SponsorAdds";
const BlogsCompo = () => {
  return (
    <div class="blog-area list-view padding-top-120 padding-bottom-90">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            {blogsContent.map((blogContent) => (
              <SingleBlog blogContent={blogContent} />
            ))}
          </div>
          <div class="col-lg-4">
            <aside class="widgets-area">
              <AuthorWidget />
              <SerchWidget />
              <PopularFeeds />
              <Categories />
              <InstagramFeeds />
              <SponsorAdds />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsCompo;
