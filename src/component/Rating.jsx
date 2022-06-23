import ReactStars from "react-rating-stars-component";
import React from "react";

const Rating = ({ rating, setRatingSearch }) => {
  const ratingChanged = (newRating) => {
    setRatingSearch(newRating);
  };
  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      value={rating}
      size={24}
      isHalf={true}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      activeColor="#ffd700"
    />
  );
};

export default Rating;
