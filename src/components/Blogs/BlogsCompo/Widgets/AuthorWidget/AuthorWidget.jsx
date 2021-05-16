/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import AuthorImg from '../../../../Share/img/blog/profile-1.png'
const AuthorWidget = () => {
  return (
    <div class="widget widget_author_profile_widget mb-40">
      <h4 class="title">About Me</h4>
      <div class="about-me text-center">
        <img src={AuthorImg} alt="About Me" />
        <h6>Rosalina D. Willaimson</h6>
        <p>
          Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <div class="widget-social-icon">
          <ul class="social-area">
            <li>
              <a href="#">
                <i class="fa fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-behance"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-pinterest"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AuthorWidget;
