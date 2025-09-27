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

export interface CardData {
  imageUrl: string;
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

const cards: CardData[] = [
  {
    imageUrl: "/wan.jpg",
    id: 1,
    badge: "new image model",
    title: "WAN 2.2",
    subtitle: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    buttonText: "Try WAN 2.2",
  },
  {
    imageUrl: "/flux.jpg",
    id: 2,
    badge: "OPEN SOURCE MODEL",
    title: "Open Source",
    subtitle: "FLUX.1 Krea",
    description:
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    buttonText: "Try FLUX.",
  },
  {
    imageUrl: "/sketch.jpg",
    id: 3,
    badge: "beta feature",
    title: "Sketch AI",
    subtitle: "Turn sketches into art",
    description:
      "Upload simple doodles and watch them transform into stunning artworks powered by AI sketch recognition.",
    buttonText: "Start Drawing",
  },
  {
    imageUrl: "/voice.jpg",
    id: 4,
    badge: "new update",
    title: "VoiceGen",
    subtitle: "AI Voice Synthesis",
    description:
      "Create natural human-like voices for your apps, podcasts, or videos. Supports multiple languages and accents.",
    buttonText: "Generate Voice",
  },
  {
    imageUrl: "/style.jpg",
    id: 5,
    badge: "limited release",
    title: "StyleMix",
    subtitle: "Blend styles instantly",
    description:
      "Merge different art styles and generate unique, personalized images with advanced neural blending.",
    buttonText: "Blend Now",
  },
  {
    imageUrl: "/video.jpg",
    id: 6,
    badge: "popular",
    title: "Text2Video",
    subtitle: "Video generation tool",
    description:
      "Transform your text prompts into cinematic-quality video clips. Perfect for creators and storytellers.",
    buttonText: "Try Text2Video",
  },
  {
    imageUrl: "/dream.jpg",
    id: 7,
    badge: "experimental",
    title: "Dreamscape",
    subtitle: "Build 3D environments",
    description:
      "Generate interactive 3D landscapes from text. Explore immersive virtual worlds with a single prompt.",
    buttonText: "Explore Worlds",
  },

  {
    imageUrl: "/script.jpg",
    id: 8,
    badge: "exclusive",
    title: "ScriptBot",
    subtitle: "AI for writers",
    description:
      "Get AI-generated scripts, stories, and dialogues tailored for your creative projects in seconds.",
    buttonText: "Write with AI",
  },
  {
    imageUrl: "/pixel.jpg",
    id: 9,
    badge: "pro release",
    title: "PixelFix",
    subtitle: "Image restoration",
    description:
      "Repair old or damaged photos with AI. Restore colors, remove scratches, and bring memories back to life.",
    buttonText: "Restore Now",
  },
];

const CarouselContainer: React.FC = () => {
  return (
    <Carousel className="py-12 ">
      <div className="flex flex-col">
        <CarouselContent className="ml-10">
          {cards.map((card, index) => (
            <CarouselItem
              key={card.id}
              className={`basis-[890px] ${index === 0 ? "m-0" : "pl-14"}`}>
              <CarouselCard {...card} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute bottom-12.5 right-16 w-[40px]">
          <CarouselPrevious />
          <CarouselNext />
        </div>

        <CarouselDots />
      </div>
    </Carousel>
  );
};

export default CarouselContainer;
