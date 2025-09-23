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
      <div className="flex flex-col pl-6">
        <CarouselContent className="ml-8">
          <CarouselItem className="basis-[900px] m-0 ">
            <CarouselCard />
          </CarouselItem>
          <CarouselItem className="basis-[900px] pl-12">
            <CarouselCard />
          </CarouselItem>
          <CarouselItem className="basis-[900px] pl-12">
            <CarouselCard />
          </CarouselItem>
        </CarouselContent>
        <div className="relative bg-amber-300 w-full h-50vw">
          <CarouselPrevious className="absolute " />
          <CarouselNext />
        </div>
        <CarouselDots />
      </div>
    </Carousel>
  );
};

export default CarouselContainer;
