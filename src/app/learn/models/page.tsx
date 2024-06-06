"use client";
import VideoCarousel from "@/components/carousel";
import React, { useState } from "react";
import Component from "@/components/Model-s/1stcomponent";
import BlackInterior from "@/components/Model-s/2ndcomponent";
import BlueCar from "@/components/Model-s/3rdcomponent";
import Range from "@/components/Model-s/5thcomponent";
import RedCar from "@/components/Model-s/4thcomponent";
import Freedom from "@/components/Model-s/6thcomponent";

const ModelS = () => {
  return (
    <>
      <Component />
      <div className="h-[172px] py-12 bg-black">
        <div className="h-[76px] pt-8 pb-2 flex items-center justify-center">
          <p className="text-[28px] font-semibold text-white">
            Interior of the Future
          </p>
        </div>
      </div>
      <div
        className="h-screen w-full bg-cover bg-center "
        style={{
          backgroundImage: "url('/Models/interior-of-the-future.png')",
          boxShadow: "black 0px 150px 200px 0px inset",
        }}
      ></div>
      <div className=" bg-black rounded-sm">
        <VideoCarousel />
      </div>
      <BlackInterior />

      <BlueCar />
      <RedCar />
      <Range />
      <Freedom />
    </>
  );
};

export default ModelS;
