import React from "react";
import { useState } from "react";

export default function StarRating({ numberOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleMouseEnter(index) {
    setHover(index);
  }
  function handleMouseLeave() {
    setHover(rating);
  }

  function handleMouseClick(index) {
    setRating(index);
  }
  return (
    <>
      <div className="container flex justify-center my-5 ">
        {[...Array(numberOfStars)].map((_, index) => {
          index++;
          return (
            <i
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => handleMouseClick(index)}
              className={`fas fa-star ${
                index <= (hover || rating)
                  ? "text-yellow-400"
                  : "text-slate-400 "
              } fa-lg`}
            ></i>
          );
        })}
      </div>
      <p className="text-center font-bold">
        {rating}.0 <i className="fas fa-star text-yellow-400"></i>
      </p>
    </>
  );
}
