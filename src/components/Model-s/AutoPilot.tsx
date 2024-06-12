import React from "react";
import { FaCircle } from "react-icons/fa6";

export const AutoPilot = () => {
  return (
    <>
      <div className="h-screen w-full">
        <div
          style={{
            backgroundImage: `url("/Models/three-tesla.png")`,
          }}
          className="h-[80%] w-full bg-center bg-cover"
        >
          <div className="p-12 h-full flex flex-col justify-between">
            <div className="pt-16">
              <p className="text-[24px] font-semibold pb-2">
                360<sup>o</sup>
              </p>
              <p className="text-[14px] font-medium">
                Rear, side and forward-facing cameras<br></br> provide maximum
                visibility
              </p>
            </div>
            <div>
              <p className="text-[24px] font-semibold pb-2">
                250<span>m</span>
              </p>
              <p className="text-[14px] font-medium">
                Powerful visual processing at up to 250<br></br> meters of range
              </p>
            </div>
            <div className="pb-20">
              <FaCircle />
              <p className="text-[14px] font-medium pt-4">
                Tesla Vision detects nearby cars, helps<br></br> prevent
                potential collisions and assists<br></br> with parking
              </p>
            </div>
          </div>
        </div>
        <div className="h-[20%] ">
          <div className="flex  justify-center mx-[240px] px-[48px] gap-52 pt-8 ">
            <div>
              <p className="text-[17px] font-semibold text-textColor">
                Autopilot
              </p>
              <p className="text-[28px] font-semibold">Future of Driving</p>
              <div className="flex pt-4 gap-10">
                <button className="border-[3px] border-black py-1 px-8 font-semibold rounded-md hover:bg-black hover:text-white">
                  Order Now
                </button>
                <button className=" py-1 px-8 font-semibold rounded-sm hover:bg-[#c4c0c0]">
                  Demo Drive
                </button>
              </div>
            </div>
            <div className="text-textColor text-[14px] font-medium ">
              <p>
                Autopilot enables your car to steer, accelerate and brake
                automatically within its lane under your active<br></br>{" "}
                supervision, assisting with the most burdensome parts of
                driving. With over-the-air software updates, <br></br>the latest
                enhancements are available instantly.{" "}
                <span className="underline">Chat with a Tesla Advisor</span> to
                learn more about Model S <br></br>or{" "}
                <span className="underline">schedule a demo</span> drive today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
