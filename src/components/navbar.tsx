import React, { useState } from "react";
import Image from "next/image";
import { FiSettings } from "react-icons/fi";
import { PiHouseFill } from "react-icons/pi";
import { BsImage } from "react-icons/bs";
import { HiVideoCamera } from "react-icons/hi2";
import { FaFolder } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { GiClawHammer } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";

interface IconItem {
  id: number;
  icon: React.ReactNode;
}

const Navbar: React.FC = () => {
  const [active, setActive] = useState<number | null>(0);

  const icons: IconItem[] = [
    { id: 0, icon: <PiHouseFill /> },
    { id: 1, icon: <BsImage /> },
    { id: 2, icon: <HiVideoCamera /> },
    { id: 3, icon: <FaWandMagicSparkles className="rotate-180" /> },
    { id: 4, icon: <GiClawHammer className="rotate-180" /> },
    { id: 5, icon: <GrAppleAppStore /> },
    { id: 6, icon: <FaFolder /> },
  ];

  return (
    <div className="flex items-center justify-between border-b border-gray-300 px-6 py-1 bg-white max-w-[1565px] mx-auto">
      <div className="flex-1 flex items-center gap-4 px-0 border">
        <div className="h-full">
          <Image
            src="/krea.png"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full w-full"
          />
        </div>

        <div className="flex justify-center items-center gap-2">
          <div className="w-8 h-8">
            <Image
              src="/circle.webp"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full w-full"
            />
          </div>

          <p className="text-gray-500 text-xs font-inter font-medium">
            benevolentrimbiebat
          </p>
          <span className="cursor-pointer">
            <MdKeyboardArrowDown />
          </span>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center border">
        <div className="flex items-center gap-1 p-1.5 py-1 bg-gray-100 text-gray-700 rounded-xl text-2xl">
          {icons.map((item) => (
            <span
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`cursor-pointer text-[16px] rounded-xl py-2.5 px-4 hover:bg-white hover:shadow-lg shadow-gray-200/10 transition 
              ${active === item.id ? "bg-white" : ""}`}>
              {item.icon}
            </span>
          ))}
        </div>
      </div>

      <div className="flex-1 flex items-center space-x-4 border">
        <FiSettings className="text-gray-700 text-2xl cursor-pointer" />

        <div className="flex items-center space-x-2 cursor-pointer">
          <Image
            src="/avatar.png"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-sm font-medium text-gray-900">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
