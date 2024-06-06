import React from "react";

const Range = () => {
  return (
    <>
      <div className="h-10 bg-black"></div>
      <div className="h-screen w-full flex">
        <div className="h-full w-[80%] relative">
          <video src="/Models/Range.mp4" autoPlay muted loop></video>
        </div>
        <div className="text-white absolute h-full w-[80%] flex justify-center items-end gap-20">
          <div className="flex flex-col items-center">
            <p className="text-[24px] font-semibold">
              402 <span className="text-[20px]">mi</span>
            </p>
            <p className="text-[13px] font-medium">
              Go anywhere with up to 402 miles of
            </p>
            <p className="text-[13px] font-medium">
              {" "}
              estimated range on a single charge
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[24px] font-semibold">
              15 <span className="text-[20px]">min</span>{" "}
            </p>
            <p className="text-[13px] font-medium">
              Recharge up to 200 miles in 15 minutes at{" "}
            </p>
            <p className="text-[13px] font-medium"> Supercharger locations</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-[24px] font-semibold">50,000 +</p>
            <p className="text-[13px] font-medium flex ">
              Superchargers placed along popular{" "}
            </p>
            <p className="text-[13px] font-medium"> routes</p>
          </div>
        </div>
        <div className="px-10  flex flex-col justify-between">
          <div className="mt-16">
            <p className="text-[17px] font-medium">Range</p>
            <p className="text-[28px] font-semibold">Go Anywhere</p>
            <p className="text-[14px] font-medium">
              With up to 402 miles of estimated range and<br></br> access to the
              world’s largest and most<br></br> powerful fast charging network,
              you’ll spend<br></br> less time plugged in and more time on the
              <br></br> road.{" "}
              <span className="underline">Chat with a Tesla Advisor</span>
              to learn more<br></br> about Model S or{" "}
              <span className="underline">schedule a demo drive</span>
              <br></br> today.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <button className="border-4 border-black w-full text-[14px] rounded-[4px] font-medium py-2 hover:bg-black hover:text-white duration-1000 ">
              Order Now
            </button>
            <button className="w-full text-[14px] bg-[#EEEEEE] text-textColor rounded-[4px] font-medium py-2 ">
              Find My Route
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Range;
