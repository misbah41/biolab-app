/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Category = ({categoryData}) => {
  return (
    <>
      <li class="cat-item cat-item-18">
        <a href="#">{categoryData.categoryName}</a>
        <span>{categoryData.categoryDate}</span>
      </li>
    </>
  );
};

export default Category;
