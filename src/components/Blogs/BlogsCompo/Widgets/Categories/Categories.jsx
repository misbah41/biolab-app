/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { categoriesData } from "./CategoriesData";
import Category from "./Category/Category";

const Categories = () => {
  return (
    <div class="widget widget_categories mb-40">
      <h4 class="title"> Categories</h4>
      <ul>
        {categoriesData.map((categoryData) => (
          <Category categoryData={categoryData} />
        ))}
      </ul>
    </div>
  );
};

export default Categories;
