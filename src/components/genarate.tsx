import React from "react";
import { BsImage } from "react-icons/bs";
import { HiVideoCamera } from "react-icons/hi2";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { GiClawHammer } from "react-icons/gi";
import { GrAppleAppStore } from "react-icons/gr";
import { GiMicrophone } from "react-icons/gi";
import { TbManFilled } from "react-icons/tb";
import { PiApplePodcastsLogoFill } from "react-icons/pi";

interface CardItem {
  id: number;
  title: string;
  description: string;
  status?: "New" | "Beta";
  icon: React.ReactNode;
  background: string;
}

const cardItems: CardItem[] = [
  {
    id: 1,
    title: "Image",
    description: "Generate images with custom styles in Flux and Ideogram.",
    status: "New",
    icon: <BsImage />,
    background: "bg-gradient-to-b from-gray-700 to-gray-300",
  },
  {
    id: 2,
    title: "Video",
    description: "Generate videos with Hailuo, Pika, Runway, Lumal, and more.",
    icon: <HiVideoCamera />,
    background: "bg-yellow-400",
  },
  {
    id: 3,
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops.",
    icon: <GiClawHammer className="rotate-180" />,
    background: "bg-gradient-to-b from-sky-600 to-sky-200",
  },
  {
    id: 4,
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 22K.",
    status: "New",
    icon: <FaWandMagicSparkles className="rotate-270" />,
    background: "bg-gradient-to-b from-gray-800 to-gray-400",
  },
  {
    id: 5,
    title: "Edit",
    description: "Add objects, change style, or expand photos and generations.",
    status: "New",
    icon: <GrAppleAppStore />,
    background: "bg-gradient-to-b from-black via-purple-900 to-gray-400",
  },
  {
    id: 6,
    title: "Video Lipsync",
    description: "Lip sync any video to any audio.",
    status: "New",
    icon: <GiMicrophone />,
    background: "bg-gradient-to-b from-gray-900 via-gray-500 to-green-200",
  },
  {
    id: 7,
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters.",
    status: "New",
    icon: <TbManFilled />,
    background: "bg-black",
  },
  {
    id: 8,
    title: "Train",
    description: "Teach AI to replicate your style, products, or characters.",
    icon: <PiApplePodcastsLogoFill className="text-blue-600" />,
    background: "bg-white",
  },
];

const Generate: React.FC = () => {
  return (
    <div className="max-w-[1470px] w-[95%]  mx-auto  font-inter">
      <h2 className="text-xl font-semibold mb-4 font-inter">Generate</h2>

      <div className="grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 gap-6">
        {cardItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center p-2 justify-center space-x-2 rounded-2xl  bg-white dark:bg-gray-900 hover:shadow-md transition">
            <div className="flex items-center justify-between ">
              <div
                className={`w-13 h-13 text-2xl flex items-center text-white justify-center rounded-lg ${item.background}`}>
                {item.icon}
              </div>
            </div>

            <div className="flex-1 flex flex-col ">
              <div className="flex gap-2 -mb-1 items-center">
                <h3 className="text-sm font-semibold text-gray-700">
                  {item.title}
                </h3>
                {item.status && (
                  <span className="text-xs font-medium text-white bg-blue-500 px-2 py-0.5 rounded-lg">
                    {item.status}
                  </span>
                )}
              </div>

              <p className="text-xs font-medium text-gray-500 mt-1 ">
                {item.description}
              </p>
            </div>

            <button className="text-xs font-medium text-gray-700 rounded-full px-5 py-2 bg-gray-100 hover:bg-gray-200 cursor-pointer">
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Generate;
