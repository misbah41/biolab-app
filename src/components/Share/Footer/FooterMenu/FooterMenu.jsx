import React from "react";
import { footerMenuData } from "./FooterMenuData";

const FooterMenu = () => {
  return (
    <>
      <ul>
        {footerMenuData.map((menu) => (
          <li>
            <a href={menu.path}>{menu.menuItem}</a>{" "}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterMenu;
