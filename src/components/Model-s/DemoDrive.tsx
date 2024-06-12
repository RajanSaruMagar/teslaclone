import React from "react";

const DemoDrive = () => {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="flex  gap-48  ">
          <div className="flex flex-col gap-4 ">
            <div>
              <p className="text-[28px] font-semibold">Demo Drive Model S</p>
              <p className="text-[14px] font-medium text-textColor mt-2">
                Enter a zip code to find Tesla showrooms near you.
              </p>
            </div>
            <div>
              <p className="text-[14px] font-medium text-textColor">Zip code</p>

              <label htmlFor="text">
                <input
                  type="text"
                  id="text"
                  className="bg-[#5350502d] rounded-sm p-2 mt-2 "
                />
              </label>
            </div>
            <p className="flex justify-center bg-blue-700 text-white p-2 font-medium rounded-sm text-[14px] w-[199px] ">
              Next
            </p>
          </div>
          <div className="">
            <img
              src="/Models/redModels.png"
              alt="error"
              className="w-[796.81px] h-[597.61px] bg-center"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoDrive;
