import React from "react";
import FooterContact from "./FooterContact/FooterContact";
import FooterFeeds from "./FooterFeeds/FooterFeeds";
import { footerFeedsData } from "./FooterFeedsData";
import FooterMenu from "./FooterMenu/FooterMenu";
import FooterMenu2 from "./FooterMenu2/FooterMenu2";
import FooterNewsCard from "./FooterNewsCard/FooterNewsCard";
import { footerNewsCardData } from "./FooterNewsCardData";

const Footer = () => {
  return (
    <footer class="footer-area style-1">
      <div class="footer-top padding-top-100 padding-bottom-65">
        <div class="container">
          <div class="row">
            <div class="col-lg-2 col-sm-6">
              <FooterContact />
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="footer-widget widget widget_nav_menu">
                <h4 class="widget-title">More Pages</h4>
                <div class="row">
                  <div class="col-6">
                    <FooterMenu />
                  </div>
                  <div class="col-6">
                    <FooterMenu2 />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="footer-widget widget widget_recent_post">
                <h4 class="widget-title">News Insights</h4>
                <ul class="recent_post_item">
                  {footerNewsCardData.map((newsData) => (
                    <FooterNewsCard newsData={newsData} />
                  ))}
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="footer-widget widget widget_instagram_feeds">
                <h4 class="widget-title">Instagram Feeds</h4>
                <ul>
                  {footerFeedsData.map((feedData) => (
                    <FooterFeeds feedData={feedData} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 text-md-left text-center">
              <div class="copyright-area">
                <p>
                  &copy; Copyright 2021 <a href="#">Biolab</a> All rights
                  reserved.{" "}
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <ul class="footer-social-media text-md-right text-center mt-md-0 mt-2">
                <li>
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-behance"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-youtube-play"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
