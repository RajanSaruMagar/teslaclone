import Link from "next/link";
import React from "react";

const Last = () => {
  return (
    <>
      <div className="flex items-center justify-end gap-40  h-screen w-full">
        <div className="text-black flex flex-col justify-center pt-24 h-screen font-semibold gap-8">
          <div>
            <p className="text-[28px] font-semibold">Model S</p>
            <p className="text-[14px]">
              Design yours or get a trade-in estimate for your current vehicle.
            </p>
          </div>
          <div className="flex  gap-2">
            <button className="h-10  text-[14px] rounded-[3px] px-14 py-1 border-[3px] border-black hover:bg-black hover:text-white">
              Order Now
            </button>
            <button className="h-10 text-[14px] rounded-[3px] bg-[#EEEEEE] px-14 py-1 ">
              Get an Estimate
            </button>
          </div>
        </div>
        <img
          src="/Models/model-s-white.png"
          alt="error"
          className="w-[888px] h-[492.34px] "
        />
      </div>
      <div className="flex justify-center h-20 text-[12px] text-textColor text-center">
        <p>
          Certain high data usage vehicle features require at least Standard
          Connectivity, including maps, navigation <br></br>and voice commands.
          Access to features that use cellular data and third-party licenses are
          subject to <br></br>change.{" "}
          <span className="underline font-medium">
            Learn more about Standard Connectivity and any limitations.
          </span>
        </p>
      </div>
      <div className="flex justify-center items-center h-20 font-medium text-[12px]">
        <div className="text-textColor  flex justify-center gap-2">
          <Link href={"https://www.tesla.com/about"} target="_blank">
            {" "}
            <p>Tesla © 2024</p>{" "}
          </Link>
          <Link href={"https://www.tesla.com/legal"} target="_blank">
            {" "}
            <p>Privacy & Legal</p>{" "}
          </Link>
          <Link
            href={"https://service.tesla.com/en-US/vin-recall-search"}
            target="_blank"
          >
            {" "}
            <p>Vehicle Recalls</p>{" "}
          </Link>
          <Link href={"https://www.tesla.com/contact"} target="_blank">
            {" "}
            <p>Contact</p>
          </Link>
          <Link href={"https://www.tesla.com/blog"} target="_blank">
            {" "}
            <p>News</p>{" "}
          </Link>
          <Link href={"https://www.tesla.com/updates"} target="_blank">
            {" "}
            <p>Get Updates</p>{" "}
          </Link>
          <Link href={"https://www.tesla.com/findus/list"} target="_blank">
            {" "}
            <p>Locations</p>{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Last;
