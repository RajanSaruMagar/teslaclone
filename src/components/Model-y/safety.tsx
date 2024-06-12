"use client";
import React, { useEffect, useState } from "react";

type TImage = {
  src: string;
  title: string;
  description: string;
};

const Safety = () => {
  const [changeInImage, setChangeInImage] = useState<string>(
    "/Modely/charging.png"
  );

  const images: TImage[] = [
    {
      src: "/Modely/charging.jpg",
      title: "Charging",
      description:
        "Up to 320 miles (est.) of range and access to more than 50,000 Superchargers globally.",
    },
    {
      src: "/Modely/performance.png",
      title: "Performance",
      description: "Dual motor powertrain, instant torque, maximum dopamine.",
    },
    {
      src: "/Modely/active.png",
      title: "Active Safety",
      description: "Advanced active safety features that come standard.",
    },
    {
      src: "/Modely/utility.png",
      title: "Utility",
      description:
        "Seating for up to seven and enough storage for the gear they bring along.",
    },
    {
      src: "/Modely/phone.png",
      title: "Phone Integration",
      description:
        "Remote locking, key sharing and vehicle monitoring—all through your phone.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setChangeInImage((prevImage: string) => {
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
      <div className="h-screen w-full flex items-center justify-center gap-10 bg-black text-white">
        <div>
          {images.map((data) => {
            return (
              <>
                {" "}
                <div
                  key={data.src}
                  onClick={() => setChangeInImage(data.src)}
                  className="text-[24px] "
                >
                  <div>{data.title}</div>
                  <div className="text-[14px] w-[410px]">
                    {data.description}
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <img
          src={changeInImage}
          alt="error"
          className="w-[620px] h-[465.25px] rounded-lg bg-center" 
        />
      </div>
      <div className="w-full relative">
        <video src="/Modely/Charge.webm" autoPlay muted loop></video>
        <div className="h-20  absolute bottom-[10%] left-[20%] text-white ">
          <p className="text-[28px] font-semibold py-4">Charge Everywhere</p>
          <p className="text-[14px] font-medium py-4">
            Plenty of range for every kind of drive. From daily driving to
            family road trips,{" "}
            <span className="underline">charging Model Y</span> is fast,{" "}
            <br></br>convenient and accessible anywhere there’s electricity.
          </p>
        </div>
      </div>
    </>
  );
};

export default Safety;
