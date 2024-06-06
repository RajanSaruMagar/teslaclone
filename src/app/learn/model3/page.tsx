"use client";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import React, { useEffect, useRef, useState } from "react";
import Model1 from "@/data/Model3Data.ts/first";
import Model2 from "@/data/Model3Data.ts/second";

const Model3 = () => {
  const [content, setContent] = useState(Model1);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = divRef.current;

    const handleWheel = (event: WheelEvent) => {
      const isScrollingUp = event.deltaY < 0;
      const isScrollingDown = event.deltaY > 0;

      if (isScrollingUp) {
        setContent(Model1);
      } else if (isScrollingDown) {
        setContent(Model2);
      }
    };

    if (div) {
      div.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (div) {
        div.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);


  return (
    <>
      <div className="relative">
        {content.map((data, index) => {
          return (
            <div
              className="h-screen w-full bg-cover bg-center absolute "
              key={index}
              style={{
                backgroundImage: `url(${data.image})`,
              }}
              ref={divRef}
            >
              <div className="text-white flex flex-col justify-center items-center pr-[820px] pt-24 h-screen font-semibold gap-8">
                <div className="w-[285px]">
                  <p className="text-[56px]">{data.name}</p>
                  <p className="text-[20px]"> {data.description}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="h-10 w-[285px] text-[14px] rounded-sm px-6 py-1 bg-[#3457B1]">
                    {data.order}
                  </button>
                  <button className="h-10 w-[285px] text-[14px] rounded-sm px-6 py-1 bg-[#222222]">
                    {data.Learn}
                  </button>
                </div>
                <div className="flex items-center gap-2 w-[285px]">
                  {data.description === "Performance" ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}

                  <p className="text-[14px] font-bold">{data.switch}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Model3;
