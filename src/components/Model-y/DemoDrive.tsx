import React from "react";

const DemoDrive = () => {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center bg-black">
        <div className="flex  gap-48  ">
          <div className="flex flex-col gap-4 ">
            <div className="text-white ">
              <p className="text-[28px] font-semibold">Demo Drive Model Y</p>
              <p className="text-[14px] font-medium text-[#D0D1D2] mt-2">
                Enter a zip code to find Tesla showrooms near you.
              </p>
            </div>
            <div>
              <p className="text-[14px] font-medium text-[#D0D1D2] ">
                Zip code
              </p>

              <label htmlFor="text">
                <input
                  type="text"
                  id="text"
                  className="bg-[#222222] text-white rounded-sm p-2 mt-2 "
                />
              </label>
            </div>
            <p className="flex justify-center bg-blue-700 text-white p-2 font-medium rounded-sm text-[14px] w-[199px] ">
              Next
            </p>
          </div>
          <div className="">
            <img
              src="/Modely/demo.png"
              alt="error"
              className="w-[660px] h-[495px] bg-center"
            />
          </div>
        </div>
      </div>
      <div className="h-screen w-full relative">
        <video
          src="/Modely/room.webm"
          className="relative"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute left-[20%] top-[0%] text-white ">
          <p className="text-[28px] font-semibold">Room for Everything</p>
          <p className="text-[14px] font-medium">
            Fold-flat seats, two trunks and 3,500 pounds of towing capability—if
            you need to bring it, Model Y can help.
          </p>
        </div>
      </div>
    </>
  );
};

export default DemoDrive;
