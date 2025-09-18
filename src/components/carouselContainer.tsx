import React from "react";
import CarouselCard from "./carouselCard";

const CarouselContainer = () => {
  return (
    <div className="min-w-full border flex bg-amber-200">
      <div className="w-full bg-amber-100 max-w-[900px] mx-auto">
        <CarouselCard />
      </div>
    </div>
  );
};

export default CarouselContainer;
