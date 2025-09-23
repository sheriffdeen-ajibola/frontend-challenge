import React from "react";

const Navbar = () => {
  return (
    <div className="border-2 flex border-black w-full">
      <div className="bg-blue-400  flex-1 p-4">left</div>
      <div className="bg-green-400 flex-1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="bg-yellow-400 flex-1">right</div>
    </div>
  );
};

export default Navbar;
