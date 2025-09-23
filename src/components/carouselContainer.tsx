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
    <Carousel className="border border-black  py-12">
      <div className="flex flex-col">
        <CarouselContent className="ml-12 ">
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
        <div className=" absolute bottom-12.5 right-6 w-[40px]">
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <CarouselDots />
      </div>
    </Carousel>
  );
};

export default CarouselContainer;
