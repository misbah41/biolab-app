import React from "react";

const ThisSectionContent = ({ data }) => {
  return (
    <li>
      <i class="fa fa-check"></i>
      {data.listText}
    </li>
  );
};

export default ThisSectionContent;
