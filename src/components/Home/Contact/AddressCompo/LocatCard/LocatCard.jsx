import React from "react";

const LocatCard = ({ data }) => {
  return (
    <li>
      <div class="media align-items-center">
        <div class="icon">
          <img src={data.addressImg} alt="icon-map-markar" />
        </div>
        <div class="media-body">
          <h4>{data.addressTitle}</h4>
          <p>{data.address}</p>
        </div>
      </div>
    </li>
  );
};

export default LocatCard;
