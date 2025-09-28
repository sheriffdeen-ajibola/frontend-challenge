import React from "react";
import { CardData } from "../components/carouselContainer";

import Image from "next/image";

const CarouselCard: React.FC<CardData> = ({
  badge,
  title,
  subtitle,
  description,
  buttonText,
  imageUrl,
}) => {
  return (
    <div className="border lg:min-w-3xl min-h-[60vh] rounded-4xl max-md:rounded-none relative overflow-hidden   ">
      <Image src={imageUrl} alt={title} fill className="object-cover " />

      <div className="absolute inset-0 max-md:rounded-none  rounded-4xl bg-gradient-to-b from-black/10 via-black/40 to-black/90" />

      <h1
        className="absolute top-1/2 max-sm:top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 
        text-[6.5em] max-md:text-[5em] max-sm:text-[15vw] font-inter font-[700] tracking-tighter text-white text-center w-full z-10">
        {title}
      </h1>

      <span className="absolute top-[8%] left-[4%] text-xs text-white/70 uppercase z-10">
        {badge}
      </span>

      <div className="absolute bottom-[8%] max-sm:bottom-[20%] left-[4%] max-w-md text-white z-10">
        <h2 className="text-3xl font-medium font-inter  max-md:text-2xl max-sm:text-xl ">
          {subtitle}
        </h2>
        <p className="text-sm text-gray-300 mt-1 w-[90%] font-extralight font-inter  max-md:text-xs">
          {description}
        </p>
      </div>

      <button className="absolute bottom-[7%] sm:right-[4%] text-[.9em]  max-sm:text-[.8em] max-sm:left-[4%] tracking-tighter font-inter  cursor-pointer bg-white text-gray-700 [word-spacing:0.01em] px-[2em] py-[.8em] rounded-full font-semibold shadow-md hover:bg-gray-100 transition z-10">
        {buttonText}
      </button>
    </div>
  );
};

export default CarouselCard;
