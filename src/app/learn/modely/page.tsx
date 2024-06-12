import DemoDrive from "@/components/Model-y/DemoDrive";
import DoMore from "@/components/Model-y/DoMore";
import LandingPage from "@/components/Model-y/LandingPage";
import Card from "@/components/Model-y/card";
import Carosuel from "@/components/Model-y/carosuel";
import GoAnywhere from "@/components/Model-y/goAnywhere";
import MapCart from "@/components/Model-y/mapCart";
import Safety from "@/components/Model-y/safety";
import SliderZoom from "@/components/Model-y/sliderZoom";
import React from "react";

const Modely = () => {
  return (
    <>
      <div>
        <LandingPage />
        <Safety />
        <Carosuel />
        <GoAnywhere />
        <MapCart />
        <DemoDrive />
        <DoMore />
        <Card />
        <SliderZoom/>
      </div>
    </>
  );
};

export default Modely;
