import React from "react";
import { Link } from "react-router-dom";

const FooterFeeds = ({ feedData }) => {
  return (
    <>
      <li>
        <Link to={feedData.path}>
          <img src={feedData.feedImg} alt="instagram" />
        </Link>
      </li>
    </>
  );
};

export default FooterFeeds;
