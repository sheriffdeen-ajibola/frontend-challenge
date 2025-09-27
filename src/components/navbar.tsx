import React, { useState } from "react";
import Image from "next/image";
import { PiHouseFill } from "react-icons/pi";
import { BsImage, BsFillBrightnessHighFill } from "react-icons/bs";
import { HiVideoCamera } from "react-icons/hi2";
import { FaFolder } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";
import { FaWandMagicSparkles, FaRegImage, FaBell } from "react-icons/fa6";
import { GiClawHammer } from "react-icons/gi";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";
import { TbHeadset } from "react-icons/tb";
import ThemeToggle from "./themeToggle";

interface IconItem {
  id: number;
  icon: React.ReactNode;
}

const Navbar: React.FC = () => {
  const [active, setActive] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const icons: IconItem[] = [
    { id: 0, icon: <PiHouseFill /> },
    { id: 1, icon: <BsImage /> },
    { id: 2, icon: <HiVideoCamera /> },
    { id: 3, icon: <FaWandMagicSparkles className="rotate-270" /> },
    { id: 4, icon: <GiClawHammer className="rotate-180" /> },
    { id: 5, icon: <GrAppleAppStore /> },
    { id: 6, icon: <FaFolder /> },
  ];

  return (
    <nav className="px-6 py-2 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between max-w-[1550px] mx-auto">
        <div className="flex-1 flex items-center gap-4">
          <div className="h-full w-12">
            <Image
              src="/krea.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full w-full"
            />
          </div>

          <div className="hidden lg:flex justify-center items-center gap-1.5">
            <div className="w-7 h-7">
              <Image
                src="/circle.webp"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full w-full"
              />
            </div>
            <p className="text-gray-500 text-xs font-inter font-bold">
              benevolentrimbiebat
            </p>
            <span className="cursor-pointer">
              <MdKeyboardArrowDown />
            </span>
          </div>
        </div>

        <div className="flex-1 hidden lg:flex justify-center items-center">
          <div className="flex items-center gap-1 p-1.5 bg-gray-100 text-gray-700 rounded-xl text-2xl">
            {icons.map((item) => (
              <span
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`cursor-pointer text-[14px] rounded-xl py-2.5 px-4 hover:bg-white hover:shadow-2xl shadow-gray-300/50 transition 
                ${active === item.id ? "bg-white" : ""}`}>
                {item.icon}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1 flex items-center justify-end space-x-2">
          <div className="hidden lg:flex items-center gap-2">
            <div className="flex cursor-pointer bg-gray-100 rounded-md py-1.5 px-2 text-gray-700 items-center gap-1">
              <FaRegImage />
              <p className="font-inter text-[10px] font-bold">Gallery</p>
            </div>
            <div className="flex cursor-pointer bg-gray-100 rounded-md py-1.5 px-2 text-gray-700 items-center gap-1">
              <TbHeadset />
              <p className="font-inter text-[10px] font-bold">Support</p>
            </div>
            <div className="flex cursor-pointer bg-gray-100 rounded-md py-1.5 px-1.5 text-gray-700 items-center">
              <FaBell />
            </div>
            <ThemeToggle />
            <div className="w-7 h-7">
              <Image
                src="/circle.webp"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full w-full"
              />
            </div>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <div className="cursor-pointer bg-gray-100 rounded-md p-2 text-gray-700">
              <BsFillBrightnessHighFill />
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-gray-700">
              {menuOpen ? <MdClose /> : <MdMenu />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden mt-3 space-y-3 bg-gray-50 rounded-md p-4 shadow-lg">
          <div className="flex flex-wrap justify-center gap-2">
            {icons.map((item) => (
              <span
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`cursor-pointer text-xl rounded-md py-2 px-3 hover:bg-white hover:shadow-md transition 
                ${active === item.id ? "bg-white" : "bg-gray-100"}`}>
                {item.icon}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 cursor-pointer bg-gray-100 rounded-md py-2 px-3 text-gray-700">
              <FaRegImage />
              <p className="font-inter text-sm font-bold">Gallery</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer bg-gray-100 rounded-md py-2 px-3 text-gray-700">
              <TbHeadset />
              <p className="font-inter text-sm font-bold">Support</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex cursor-pointer bg-gray-100 rounded-md py-2 px-2 text-gray-700">
                <FaBell />
              </div>
              <div className="w-8 h-8">
                <Image
                  src="/circle.webp"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
