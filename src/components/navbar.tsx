import React from "react";
import Image from "next/image";
import {
  FaTwitter,
  FaEnvelope,
  FaBookmark,
  FaUser,
  FaEllipsisH,
} from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { PiHouseFill } from "react-icons/pi";
import { BsImage } from "react-icons/bs";
import { HiVideoCamera } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between border-b border-gray-300 px-6 py-3 bg-white">
      {/* Left Section */}
      <div className="flex items-center space-x-3 text-xl font-bold">
        <FaTwitter className="text-blue-500 text-3xl" />
        <span className="text-gray-900">Home</span>
      </div>

      {/* Middle Section */}
      <div className="flex items-center space-x-8 text-gray-700 text-2xl">
        <span className="cursor-pointer hover:text-blue-500">
          <PiHouseFill />
        </span>
        <span className="cursor-pointer hover:text-blue-500">
          <BsImage />
        </span>
        <span className="cursor-pointer hover:text-blue-500">
          <HiVideoCamera />
        </span>
        <span className="cursor-pointer hover:text-blue-500">
          <FaEnvelope />
        </span>
        <span className="cursor-pointer hover:text-blue-500">
          <FaBookmark />
        </span>
        <span className="cursor-pointer hover:text-blue-500">
          <FaUser />
        </span>
        <span className="cursor-pointer hover:text-blue-500">
          <FaEllipsisH />
        </span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <FiSettings className="text-gray-700 text-2xl cursor-pointer hover:text-blue-500" />

        <div className="flex items-center space-x-2 cursor-pointer">
          <Image
            src="/avatar.png" // replace with your profile image path
            alt="Profile"
            width={32} // same as w-8
            height={32} // same as h-8
            className="rounded-full"
          />
          <span className="text-sm font-medium text-gray-900">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
