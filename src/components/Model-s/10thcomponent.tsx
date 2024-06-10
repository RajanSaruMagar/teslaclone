import React, { useState, useEffect } from "react";
import clsx from "clsx";

type TVideo = {
  src: string;
  title: string;
  description: string;
};

const Features: React.FC = () => {
  const [changeInVideo, setChangeInVideo] = useState<string>(
    "/Models/Navigate.webm"
  );

  const video: TVideo[] = [
    {
      src: "/Models/Navigate.webm",
      title: "Navigate on Autopilot",
      description: "Active guidance from on-ramp to off-ramp",
    },
    {
      src: "/Models/lane.webm",
      title: "Auto Lane Change",
      description: "Automatically change lanes while driving on the highway",
    },
    {
      src: "/Models/summon.webm",
      title: "Summon",
      description: "Automatically retrieve your car",
    },
    {
      src: "/Models/parking.webm",
      title: "Autopark",
      description: "Parallel and perpendicular parking with a single touch",
    },
  ];

   useEffect(() => {
    const interval = setInterval(() => {
      setChangeInVideo((prevVideo) => {
        const currentIndex = video.findIndex(
          (video) => video.src === prevVideo
        );
        const nextIndex = (currentIndex + 1) % video.length;
        return video[nextIndex].src;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [video]);

  return (
    <>
      <div className="h-20"></div>
      <div className="h-screen w-full">
        <div className=" mx-[350px]">
          <p className="text-[28px] font-semibold">Features</p>
          <p className="text-[14px] font-medium text-textColor py-4">
            Full Self-Driving capability introduces additional features and
            improves existing functionality to make your <br></br>vehicle more
            capable over time, including:
          </p>
        </div>
        <div className="flex justify-center">
          <video autoPlay muted loop className="h-[576px] w-[1344px]">
            <source src={changeInVideo} />
          </video>
        </div>
        <div className="flex justify-center gap-4 w-full">
            {video.map((data) => (
              <div key={data.src} onClick={() => setChangeInVideo(data.src)} className="w-52">
                <hr
                  className={clsx(
                    "h-[2px] w-40",
                    changeInVideo === data.src
                      ? "h-[6px] bg-black"
                      : "bg-loader h-[2px]"
                  )}
                />
                <p className="text-[17px] font-medium">{data.title}</p>
                <p className="text-[14px] text-textColor font-semibold">{data.description}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Features;
