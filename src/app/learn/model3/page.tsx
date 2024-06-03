import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import React from "react";

const Model3 = () => {
  return (
    <>
      <div
        className="h-screen w-full bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/Model3/Model-3-white.png')",
        }}
      >
        <div className="text-white flex flex-col justify-center items-center pr-[820px] pt-24 h-screen font-semibold gap-8">
          <div className="w-[285px]">
            <p className="text-[56px]">Model 3</p>
            <p className="text-[20px]"> Standard and Long Range</p>
          </div>
          <div className="flex flex-col gap-2">
            <button className="h-10 w-[285px] text-[14px] rounded-sm px-6 py-1 bg-[#3457B1]">
              Order Now
            </button>
            <button className="h-10 w-[285px] text-[14px] rounded-sm px-6 py-1 bg-[#222222]">
              Learn More
            </button>
          </div>
          <div className="flex items-center gap-2 w-[285px]">
            <IoIosArrowDown />
            <p className="text-[14px] font-bold">Switch to Perfromance</p>
          </div>
        </div>
      </div>
      {/* this is the break poiint of the page for the transition effeect */}
      <div
        className="h-screen w-full bg-cover bg-center z-10"
        style={{
          backgroundImage: "url('/Model3/Model-3-red.png')",
        }}
      >
        <div className="text-white flex flex-col justify-center items-center pr-[820px] pt-24 h-screen font-semibold gap-8">
          <div className="w-[285px]">
            <p className="text-[56px]">Model 3</p>
            <p className="text-[20px]"> Performance</p>
          </div>
          <div className="flex flex-col gap-2">
            <button className="h-10 w-[285px] text-[14px] rounded-sm px-6 py-1 bg-[#3457B1]">
              Order Now
            </button>
            <button className="h-10 w-[285px] text-[14px] rounded-sm px-6 py-1 bg-[#222222]">
              Learn More
            </button>
          </div>
          <div className="flex items-center gap-2 w-[285px]">
            <IoIosArrowUp />
            <p className="text-[14px] font-bold">Switch to Model 3</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model3;
