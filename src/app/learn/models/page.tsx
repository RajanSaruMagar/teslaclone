"use client";
import VideoCarousel from "@/components/carousel";
import React, { useState } from "react";
import Component from "@/components/Model-s/Component";
import BlackInterior from "@/components/Model-s/BlackInterior";
import BlueCar from "@/components/Model-s/BlueCar";
import Range from "@/components/Model-s/Range";
import RedCar from "@/components/Model-s/RedCar";
import Freedom from "@/components/Model-s/Freedom";
import DemoDrive from "@/components/Model-s/DemoDrive";
import Safety from "@/components/Model-s/Safety";
import { AutoPilot } from "@/components/Model-s/AutoPilot";
import Features from "@/components/Model-s/Features";
import Specs from "@/components/Model-s/Specs";
import Last from "@/components/Model-s/Last";

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
      <DemoDrive/>
      <Safety/>
      <AutoPilot/>
      <Features/>
      <Specs/>
      <Last/>
    </>
  );
};

export default ModelS;
