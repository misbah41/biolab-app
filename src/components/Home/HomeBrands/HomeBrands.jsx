import React from "react";
import { brandsImg } from "./HomeBrandsData";

const HomeBrands = () => {
  return (
    <div class="brand-logo-area padding-top-120">
      <ul class="brand-list">
        {brandsImg.map((brandImg) => (
          <li class="single-brand">
            <img src={brandImg} alt="brand logo" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeBrands;
