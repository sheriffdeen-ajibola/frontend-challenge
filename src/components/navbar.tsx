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
    <nav className="px-6 py-2 dark:bg-gray-900 bg-white  border-b">
      <div className="flex items-center justify-between max-w-[1550px] mx-auto">
        {/* LEFT SECTION */}
        <div className="flex-1 flex items-center gap-4">
          {/* Logo */}
          <div className="w-12 dark:hidden ">
            <Image
              src="/krea.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full w-full"
            />
          </div>
          <div className=" w-7 max-lg:w-6.5 m-2.5 max-lg:m-3 hidden dark:block ">
            <Image
              src="/kreawhite.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full w-full"
            />
          </div>

          {/* Username (hide on small) */}
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

        {/* CENTER SECTION (nav icons) */}
        <div className="flex-1 hidden lg:flex justify-center items-center">
          <div className="flex items-center gap-1 p-1.5 bg-gray-100 text-gray-700  dark:bg-gray-800 dark:text-white rounded-xl text-2xl">
            {icons.map((item) => (
              <span
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`cursor-pointer text-[14px] rounded-xl py-2.5 px-4 hover:bg-white dark:hover:bg-gray-700 hover:shadow-2xl dark:shadow-none shadow-gray-300/50 transition 
                ${
                  active === item.id
                    ? "bg-white dark:bg-gray-700 "
                    : "bg-gray-100 dark:bg-gray-800"
                }`}>
                {item.icon}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex-1 flex items-center justify-end space-x-2">
          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="flex cursor-pointer bg-gray-100  dark:bg-gray-800 dark:text-white rounded-md py-1.5 px-2 text-gray-700 items-center gap-1">
              <FaRegImage />
              <p className="font-inter text-[10px] font-bold">Gallery</p>
            </div>
            <div className="flex cursor-pointer bg-gray-100  dark:bg-gray-800 dark:text-white rounded-md py-1.5 px-2 text-gray-700 items-center gap-1">
              <TbHeadset />
              <p className="font-inter text-[10px] font-bold">Support</p>
            </div>
            <div className="flex cursor-pointer bg-gray-100  dark:bg-gray-800 dark:text-white rounded-md py-1.5 px-1.5 text-gray-700 items-center">
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

          {/* Mobile Right (lg:hidden) */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-gray-700 dark:text-white">
              {menuOpen ? <MdClose /> : <MdMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* DROPDOWN MENU for Mobile */}
      {menuOpen && (
        <div className="lg:hidden mt-3 space-y-3 bg-gray-50 dark:bg-gray-800 rounded-md p-4 shadow-lg">
          {/* Center Icons */}
          <div className="flex flex-wrap justify-center gap-2">
            {icons.map((item) => (
              <span
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`cursor-pointer text-xl rounded-md py-2 px-3 hover:bg-white hover:shadow-md transition 
                ${
                  active === item.id
                    ? "bg-white dark:bg-gray-900 "
                    : "bg-gray-100 dark:bg-gray-700"
                }`}>
                {item.icon}
              </span>
            ))}
          </div>

          {/* Right Section Items */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 cursor-pointer bg-gray-100 dark:bg-gray-700 dark:text-white rounded-md py-2 px-3 text-gray-700 ">
              <FaRegImage />
              <p className="font-inter text-sm font-bold">Gallery</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer bg-gray-100 rounded-md py-2 px-3 text-gray-700  dark:bg-gray-700 dark:text-white">
              <TbHeadset />
              <p className="font-inter text-sm font-bold">Support</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex cursor-pointer bg-gray-100 rounded-md py-2 px-2 text-gray-700  dark:bg-gray-700 dark:text-white">
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
