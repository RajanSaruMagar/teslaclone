import React, { useState, useEffect } from "react";
import clsx from "clsx";

type TImage = {
  src: string;
  title: string;
  distance: string;
};

const Freedom: React.FC = () => {
  const [changeInImage, setChangeInImage] = useState<string>(
    "/Models/freedom.png"
  );

  const images: TImage[] = [
    {
      src: "/Models/freedom.png",
      title: "San Francisco to Los Angeles",
      distance: "383 miles",
    },
    {
      src: "/Models/berkely.png",
      title: "Berkely to Lake Tahoe",
      distance: "178 miles",
    },
    {
      src: "/Models/manhattan.png",
      title: "Manhattan to Boston",
      distance: "211 miles",
    },
    {
      src: "/Models/fort.png",
      title: "Fort Lauderdale to Orlando",
      distance: "195 miles",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setChangeInImage((prevImage) => {
        const currentIndex = images.findIndex(
          (image) => image.src === prevImage
        );
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex].src;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
      <div className="h-40 "></div>
      <div className="h-screen ">
        <div className="mx-[400px] px-[48px] ">
          <p className="text-[28px] font-semibold py-4">Freedom to Travel</p>
          <p className="text-[14px] font-medium text-textColor py-4">
            Enter a destination on your touchscreen and Trip Planner will
            automatically calculate your route with Superchargers along the way.
          </p>
        </div>
        <div>
          <div>
            <img
              src={changeInImage}
              alt="error"
              className="w-[1392px] h-[756px] mx-[240px] pt-[56px] px-[48px]"
            />
          </div>
        </div>
      </div>
          <div className="flex justify-center gap-44 pt-10 pb-20 w-full">
            {images.map((image) => (
              <div key={image.src} onClick={() => setChangeInImage(image.src)}>
                <hr
                  className={clsx(
                    "h-[2px]",
                    changeInImage === image.src
                      ? "h-[6px] bg-black"
                      : "bg-loader h-[2px]"
                  )}
                />
                <p className="text-[17px] font-medium">{image.title}</p>
                <p className="text-[28px] font-semibold">{image.distance}</p>
              </div>
            ))}
          </div>
      <div className="flex justify-center w-full ">
        <button className="border-[3px] border-black rounded-[3px] py-1 px-16 text-[14px] font-semibold text-textColor hover:bg-black hover:text-white">
          Learn More
        </button>
      </div>
  
    </>
  );
};

export default Freedom;
