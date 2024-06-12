"use client";
import React, { useState, useEffect } from "react";
import clsx from "clsx";

type TImage = {
  src: string;
  title: string;
  distance: string;
};

const MapCart: React.FC = () => {
  const [changeInImage, setChangeInImage] = useState<string>(
    "/Models/freedom.png"
  );

  const images: TImage[] = [
    {
      src: "/Modely/los.png",
      title: "Los Angeles to Las Vegas",
      distance: "270 miles",
    },
    {
      src: "/Modely/santa.png",
      title: "Santa Cruz to Lake Tahoe",
      distance: "257 miles",
    },
    {
      src: "/Modely/phoneix.png",
      title: "Phoenix to Grand Canyon",
      distance: "267 miles",
    },
    {
      src: "/Modely/chicago.png",
      title: "Chicago to Detroit",
      distance: "283 miles",
    },
    {
      src: "/Modely/miami.png",
      title: "miami to Tampa",
      distance: "271 miles",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setChangeInImage((prevImage) => {
        const currentIndex = images.findIndex(
          (data) => data.src === prevImage
        );
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex].src;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
      <div className="h-screen bg-black flex flex-col justify-center items-center">
        <div>
          <img
            src={changeInImage}
            alt="error"
            className="w-[1164px] h-[478.28x] "
          />
        </div>
        <div className="  flex gap-20 text-white pt-10">
          {images.map((data) => (
            <div key={data.src} onClick={() => setChangeInImage(data.src)}>
              <hr
                className={clsx(
                  "h-[2px]",
                  changeInImage === data.src
                    ? "h-[6px] text-white"
                    : "text-loader h-[2px]"
                )}
              />
              <p className="text-[17px] font-medium">{data.title}</p>
              <p className="text-[28px] font-semibold">{data.distance}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MapCart;
