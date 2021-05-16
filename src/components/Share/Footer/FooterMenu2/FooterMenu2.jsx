import React from "react";
import { footerMenu2Data } from "./FooterMenu2Data";

const FooterMenu2 = () => {
  return (
    <>
      <ul>
        <li>
          {footerMenu2Data.map((menu) => (
            <li>
              <a href={menu.path}>{menu.menuItem}</a>
            </li>
          ))}
        </li>
      </ul>
    </>
  );
};

export default FooterMenu2;
