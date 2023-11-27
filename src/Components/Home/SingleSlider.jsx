import React from "react";

const SingleSlider = ({ img, id, next, prev }) => {
  const idx = id + 1;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <img src={img} className=" h-[250px] w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default SingleSlider;
