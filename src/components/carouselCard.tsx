import React from "react";

const CarouselCard = () => {
  return (
    <div className="border min-w-3xl min-h-[60vh] rounded-4xl bg-blue-700 relative">
      <h1
        className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
   text-[6.5em] font-inter font-[700] tracking-tighter text-white text-center">
        WAN 2.2
      </h1>

      <span className="absolute top-[8%] left-[4%] text-xs text-white/70  uppercase">
        new image model
      </span>
      <div className="absolute bottom-[8%] left-[4%] max-w-md text-white">
        <h2 className="text-3xl font-medium font-inter">
          WAN 2.2 Image generation
        </h2>
        <p className="text-sm text-white mt-1 w-[90%] font-extralight font-inter">
          Generate complex images with the brand new and powerful WAN 2.2 model.
          Exceptional prompt adherence and ultra-realistic textures.
        </p>
      </div>
      <button className="absolute bottom-[7%] right-[4%] text-[1em] tracking-tighter font-inter cursor-pointer bg-white text-gray-700 [word-spacing:0.01em] px-[2em] py-[.8em] rounded-full font-medium shadow-md hover:bg-gray-100 transition">
        Try WAN 2.2
      </button>
    </div>
  );
};

export default CarouselCard;
