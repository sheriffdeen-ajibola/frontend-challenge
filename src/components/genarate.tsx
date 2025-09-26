import React from "react";
import { FiVideo, FiCpu, FiTrendingUp, FiEdit } from "react-icons/fi";
import { MdOutlineMotionPhotosOn, MdOutlineVideoStable } from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri";
import { BsImage } from "react-icons/bs";

interface CardItem {
  id: number;
  title: string;
  description: string;
  status?: "New" | "Beta";
  icon: React.ReactNode;
}

const cardItems: CardItem[] = [
  {
    id: 1,
    title: "Image",
    description: "Generate images with custom styles in Flux and Ideogram.",
    status: "New",
    icon: <BsImage />,
  },
  {
    id: 2,
    title: "Video",
    description: "Generate videos with Hailuo, Pika, Runway, Lumal, and more.",
    icon: <FiVideo className="text-2xl text-gray-700" />,
  },
  {
    id: 3,
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops.",
    icon: <FiCpu className="text-2xl text-gray-700" />,
  },
  {
    id: 4,
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 22K.",
    status: "New",
    icon: <FiTrendingUp className="text-2xl text-gray-700" />,
  },
  {
    id: 5,
    title: "Edit",
    description: "Add objects, change style, or expand photos and generations.",
    status: "New",
    icon: <FiEdit className="text-2xl text-gray-700" />,
  },
  {
    id: 6,
    title: "Video Lipsync",
    description: "Lip sync any video to any audio.",
    status: "New",
    icon: <MdOutlineVideoStable className="text-2xl text-gray-700" />,
  },
  {
    id: 7,
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters.",
    status: "New",
    icon: <MdOutlineMotionPhotosOn className="text-2xl text-gray-700" />,
  },
  {
    id: 8,
    title: "Train",
    description: "Teach AI to replicate your style, products, or characters.",
    icon: <RiRobot2Line className="text-2xl text-gray-700" />,
  },
];

const Generate: React.FC = () => {
  return (
    <div className="max-w-[1470px] w-[95%] bg-amber-200 mx-auto py-8 font-inter">
      <h2 className="text-xl font-semibold mb-4 font-inter">Generate</h2>

      <div className="grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 gap-6">
        {cardItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border border-gray-200 rounded-2xl p-4 bg-white hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg">
                {item.icon}
              </div>
            </div>

            <div className="mt-4 flex-1">
              <div className="flex gap-2">
                <h3 className="text-sm font-semibold text-gray-900">
                  {item.title}
                </h3>
                {item.status && (
                  <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-0.5 rounded-md">
                    {item.status}
                  </span>
                )}
              </div>

              <p className="text-xs text-gray-500 mt-1">{item.description}</p>
            </div>

            <button className="mt-4 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg px-3 py-1 hover:bg-gray-100">
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Generate;
