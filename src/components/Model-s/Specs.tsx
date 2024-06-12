import React from "react";

const Specs = () => {
  return (
    <>
      <div className="flex h-screen w-full bg-black">
        <img src="/Models/model-s-specs.png" alt="error" className="w-[60%]" />
        <div className="h-full flex  flex-col justify-center gap-4  bg-black text-white">
          <p className="text-[28px]  ">
            <span className="font-bold">Model S</span> Specs
          </p>
          <div className="flex flex-col   gap-8">
            <div className="flex gap-2  text-[12px] font-medium ">
              <button className="border-[3px] border-white rounded-sm py-1 px-20 ">
                Model S Plaid
              </button>
              <button className="border-2 border-[#222222] rounded-sm py-1 px-20">
                Model S
              </button>
            </div>
            <div className="flex gap-10 text-[14px] font-medium">
              <div className="flex flex-col gap-4 ">
                <div className="bg-textColor h-[2px] w-10"></div>
                <div>
                  <p>Range (EPA est.)</p>
                  <p>359 mi</p>
                </div>
                <div className="bg-textColor h-[2px] w-10"></div>
                <div>
                  <p>1/4 Mile </p>
                  <p>9.23@155 mph trap speed</p>
                </div>
                <div className="bg-textColor h-[2px] w-10"></div>
                <div>
                  <p>Peak Power</p>
                  <p>1,020 hp</p>
                </div>
                <div className="bg-textColor h-[2px] w-10"></div>
                <div>
                  <p>*Acceleration</p>
                  <p>1.99 s 0-60 mph</p>
                  <p>with rollout subtracted</p>
                </div>
                <div className="bg-textColor h-[2px] w-10"></div>
                <div>
                  <p>Wheels</p>
                  <p>19&#34; or 21&#34;</p>
                </div>
                <div className="bg-textColor h-[2px] w-10"></div>
                <div>
                  <p>Cargo</p>
                  <p>28 cu ft</p>
                </div>
                <div className="bg-textColor h-[2px] w-10"></div>
                <div>
                  <p>Weight (Curb Mass)</p>
                  <p>4,776 lbs</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 ">
                <div className="bg-textColor h-[2px] w-10"></div>
                <div>
                  <p>†Top Speed</p>
                  <p>200 mph</p>
                  <p>when equipped with paid hardware</p>
                  <p>upgrades</p>
                </div>
                <div className="bg-textColor h-[2px] w-10"></div>
                <div>
                  <p>Drag Coefficient</p>
                  <p>0.208 Cd</p>
                </div>
                <div className="bg-textColor h-[2px] w-10"></div>
                <div>
                  <p>Powertrain</p>
                  <p>Tri Motor</p>
                </div>
                <div className="bg-textColor h-[2px] w-10"></div>
                <div>
                  <p>Supercharging Max</p>
                  <p>250 kW</p>
                </div>
                <div className="bg-textColor h-[2px] w-10"></div>
                <div>
                  <p>Warranty</p>
                  <p>Basic Vehicle - 4 years or 50,000</p>
                  <p>miles, whichever comes first</p>
                  <p>Battery & Drive Unit - 8 years or</p>
                  <p>150,000 miles, whichever comes first</p>
                  <p className="underline">See Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full h-20 bg-black ">
        <div>
          <button className=" border-[3px] border-white rounded-sm text-white py-1 px-10">
            Compare Models
          </button>
        </div>
      </div>
    </>
  );
};

export default Specs;
