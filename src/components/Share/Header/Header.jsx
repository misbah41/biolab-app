import React from "react";
// import { Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import Logo from "../../Share/img/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header class="header-area style-1">
      <nav class="navbar navbar-area navbar-expand-lg nav-style-01">
        <div class="container-fluid nav-container px-0">
          <div class="responsive-mobile-menu">
            <div class="logo-wrapper mobile-logo">
              <Link to="/" class="logo">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#bizcoxx_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse active" id="bizcoxx_main_menu">
            <ul class="navbar-nav">
              <li class="menu-item-has-children current-menu-item">
                <Link to="/">Home</Link>
                <ul class="sub-menu">
                  <li>
                    <Link to="/home">Home 01</Link>
                  </li>
                  <li>
                    <Link to="/home2">Home 02</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li class="menu-item-has-children">
                <Link to="/pages">Pages</Link>
                <ul class="sub-menu">
                  <li>
                    <Link to="/">home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/blog-details">Blog details</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/blog">News</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div class="nav-right-content">
            <ul>
              <li class="search" id="search">
                <i class="flaticon-search"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
