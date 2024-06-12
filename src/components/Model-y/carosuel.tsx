"use client";
import React, { useState } from "react";
import { Carousel } from "antd";

type TText = {
  src: string;
  title: string;
  description: string;
};

const Text: TText[] = [
  {
    src: "/Modely/while.png",
    title: "While You Sleep",
    description:
      "Charge at home with Wall Connector and add up to 44 miles of range per hour.",
  },
  {
    src: "/Modely/day.png",
    title: "During the  Day",
    description:
      "Plug Mobile Connector in to any standard outlet and add up to 30 miles of range per hour.",
  },
  {
    src: "/Modely/road.png",
    title: "On Road trips",
    description:
      "Add up to 160 miles of range in just 15 minutes† at a Supercharger along your route or recharge at your destination.",
  },
];

const Carosuel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <Carousel
        autoplay
        className="h-[478.28px] w-[1116px]"
        beforeChange={handleChange}
      >
        {Text.map((data) => (
          <div key={data.src}>
            <img src={data.src} alt="error" />
          </div>
        ))}
      </Carousel>
      <div
        key={Text[currentIndex].src}
        className="text-black w-[540px] left-[40%] pt-10"
      >
        <p className="text-[20px] font-semibold">{Text[currentIndex].title}</p>
        <p className="text-[14px] font-medium">
          {Text[currentIndex].description}
        </p>
      </div>
    </div>
  );
};

export default Carosuel;
