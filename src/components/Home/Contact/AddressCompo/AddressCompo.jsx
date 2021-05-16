import React from "react";
import { addressData } from "./AddressData";
import LocatCard from "./LocatCard/LocatCard";

const AddressCompo = () => {
  return (
    <div class="contact-details">
      <ul>
        {addressData.map((data) => (
          <LocatCard data={data} />
        ))}
      </ul>
    </div>
  );
};

export default AddressCompo;
