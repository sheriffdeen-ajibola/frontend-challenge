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
    <Carousel className="bg-amber-700 py-12">
      <div className="flex flex-col bg-amber-200">
        <CarouselContent className="ml-4 bg-blue-300">
          <CarouselItem className="basis-[900px] m-0 ">
            <CarouselCard />
          </CarouselItem>
          <CarouselItem className="basis-[900px] pl-10">
            <CarouselCard />
          </CarouselItem>
          <CarouselItem className="basis-[900px] pl-10">
            <CarouselCard />
          </CarouselItem>
        </CarouselContent>
        <div className=" absolute bottom-14 right-6 w-[40px]">
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <CarouselDots />
      </div>
    </Carousel>
  );
};

export default CarouselContainer;
