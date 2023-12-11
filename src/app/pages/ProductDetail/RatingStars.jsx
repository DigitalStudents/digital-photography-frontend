import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const RatingStars = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index}>{index + 1 <= rating ? <FaStar /> : <FaRegStar />}</span>
  ));

  return <div>{stars}</div>;
};

export default RatingStars;