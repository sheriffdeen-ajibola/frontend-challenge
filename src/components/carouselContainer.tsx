import React from "react";
import CarouselCard from "./carouselCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "@/components/ui/carousel";

const CarouselContainer = () => {
  return (
    <Carousel>
      <div className="flex flex-col px-6">
        <CarouselContent className="ml-4 bg-amber-300">
          <CarouselItem className="basis-[700px] m-0 bg-amber-700">
            <CarouselCard />
          </CarouselItem>
          <CarouselItem className="basis-[700px]">
            <CarouselCard />
          </CarouselItem>
          <CarouselItem className="basis-[700px]">
            <CarouselCard />
          </CarouselItem>
        </CarouselContent>
        <div className="relative w-full">
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <CarouselDots />
      </div>
    </Carousel>
  );
};

export default CarouselContainer;
