import React from "react";

const CarouselCard = () => {
  return (
    <div className="w-full border m-8 max-w-2xl min-h-[60vh] rounded-3xl bg-blue-300 relative">
      <h1 className="font-mont w-full absolute top-1/2 left-1/2 -translate-x-1/2 text-[5em] font-bold text-white uppercase bg-blue-700">
        wan 2.2
      </h1>
      <span className="absolute top-1/12 left-1/24  text-[.5em] text-white uppercase ">
        new image model
      </span>
    </div>
  );
};

export default CarouselCard;
