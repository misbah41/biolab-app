import React from "react";

const SerchWidget = () => {
  return (
    <div class="widget widget-search mb-40">
      <h4 class="title">Search Here</h4>
      <div class="single-search-inner">
        <input type="text" placeholder="Search here..." />
        <button>
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default SerchWidget;
