import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";

import React from "react";
import Icon from "@/components/icon";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between px-8 py-5 absolute top-0 w-full  ">
        {/* <img src="/Navlogo.png" alt="error" width={70} /> */}
        <Icon />
        <div className="flex gap-x-4 items-center font-semibold text-[14px]">
          <div>Vehicles</div>
          <div>Energy</div>
          <div>Charging</div>
          <div>Discover</div>
          <div>Shop</div>
        </div>

        <div className="flex gap-x-4 items-center">
          <FaRegCircleQuestion className="text-[24px]" />
          <BiGlobe className="text-[24px]" />
          <FaRegUserCircle className="text-[24px]" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
