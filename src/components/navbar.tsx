import React from "react";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { PiHouseFill } from "react-icons/pi";
import { BsImage } from "react-icons/bs";
import { HiVideoCamera } from "react-icons/hi2";
import { FaFolder } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { GiClawHammer } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between border-b border-gray-300 px-6 py-1 bg-white">
      <div className="flex-1 flex items-center space-x-3 text-xl font-bold bg-gray-300  border">
        <FaTwitter className="text-blue-500 text-3xl" />
        <span className="text-gray-900">Home</span>
      </div>

      <div className="flex-1 flex justify-center items-center border">
        <div className="flex items-center gap-1 p-1.5 py-1 bg-gray-100 text-gray-700 rounded-xl text-2xl">
          <span className="cursor-pointer text-[16px] rounded-xl hover:shadow-lg shadow-gray-200/10 py-2.5 px-4 hover:bg-white">
            <PiHouseFill />
          </span>
          <span className="cursor-pointer text-[16px] rounded-xl hover:shadow-lg shadow-gray-200/10 py-2.5 px-4 hover:bg-white">
            <BsImage />
          </span>
          <span className="cursor-pointer text-[16px] rounded-xl hover:shadow-lg shadow-gray-200/10 py-2.5 px-4 hover:bg-white">
            <HiVideoCamera />
          </span>
          <span className="cursor-pointer text-[16px] rounded-xl hover:shadow-lg shadow-gray-200/10 py-2.5 px-4 hover:bg-white  rotate-180">
            <FaWandMagicSparkles />
          </span>
          <span className="cursor-pointer text-[16px] rounded-xl hover:shadow-lg shadow-gray-200/10 py-2.5 px-4 hover:bg-white  rotate-180">
            <GiClawHammer />
          </span>
          <span className="cursor-pointer text-[16px] rounded-xl hover:shadow-lg shadow-gray-200/10 py-2.5 px-4 hover:bg-white">
            <GrAppleAppStore />
          </span>
          <span className="cursor-pointer text-[16px] rounded-xl hover:shadow-lg shadow-gray-200/10 py-2.5 px-4 hover:bg-white">
            <FaFolder />
          </span>
        </div>
      </div>

      <div className="flex-1 flex items-center space-x-4  border">
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
