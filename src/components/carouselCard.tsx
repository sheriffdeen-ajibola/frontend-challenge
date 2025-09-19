import React from "react";

const CarouselCard = () => {
  return (
    <div className="border min-w-3xl min-h-[60vh] rounded-3xl bg-blue-700 relative">
      <p
        className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
   text-[5em] font-mont font-black tracking-tighter text-white uppercase text-center">
        wan 2.2
      </p>

      <span className="absolute top-[8%] left-[4%] text-[.5em] text-white uppercase">
        new image model
      </span>
      <div className="absolute bottom-6 left-6 max-w-md text-white">
        <h2 className="text-xl font-medium font-inter">
          WAN 2.2 Image generation
        </h2>
        <p className="text-xs text-white mt-1 w-[70%] font-extralight font-inter">
          Generate complex images with the brand new and powerful WAN 2.2 model.
          Exceptional prompt adherence and ultra-realistic textures.
        </p>
      </div>
      <button className="absolute text-[10px] font-inter cursor-pointer bottom-6 right-6 bg-white text-black px-6 py-3 rounded-full font-medium shadow-md hover:bg-gray-100 transition">
        Try WAN 2.2
      </button>
    </div>
  );
};

export default CarouselCard;
