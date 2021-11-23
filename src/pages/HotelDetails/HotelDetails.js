import React from "react";
import { useParams } from "react-router";

const HotelDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>{id}</h2>
    </div>
  );
};

export default HotelDetails;
