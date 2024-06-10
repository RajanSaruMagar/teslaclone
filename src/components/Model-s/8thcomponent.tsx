import React from "react";

const Safety = () => {
  return (
    <>
      <div className="h-screen w-full flex">
        <div className="flex flex-col justify-between h-full w-[25%] py-8 pl-10 pr-12">
          <div>
            <div className="pt-4  pb-2">
              <p className="text-[17px] font-semibold">Safety</p>
              <p className="text-[28px] font-semibold">
                High Impact Protection
              </p>
            </div>
            <p className="text-[14px] font-medium text-textColor py-4">
              Model S is built from the ground up as an electric<br></br>{" "}
              vehicle, with a high-strength architecture and<br></br>{" "}
              floor-mounted battery pack for incredible<br></br> occupant
              protection and low rollover risk. Every<br></br> new Model S
              includes Tesla’s latest active safety <br></br>features, such as
              Automatic Emergency Braking, at<br></br> no extra cost.
            </p>
          </div>

          <div className="flex flex-col text-[14px] gap-4">
            <button className="border-[3px] rounded-md  border-black hover:bg-black hover:text-white duration-1000 font-semibold py-2 px-7">
              Order Now
            </button>
            <button className="bg-[#EEEEEE]  py-2 px-7">Demo Drive</button>
          </div>
        </div>
        <div>
            <img src="/Models/High-impact-protection.png" alt="error" className="w-[1504px] h-[911px]" />
        </div>
      </div>
    </>
  );
};

export default Safety;
