import React from 'react'
import { FaCross } from "react-icons/fa";


const Component = () => {
  return (
    <>
        <div
        className="h-screen w-full bg-cover bg-center "
        style={{
          backgroundImage: "url('/Models/model-s.png')",
          boxShadow: "black 0px -172px 201px 0px inset",
        }}
      >
        <div className=" w-1/2 flex mx-auto flex-col left-0 right-0  items-center justify-between  h-[75%] absolute top-[15%]">
          <div className="flex flex-col items-center ">
            <p className="font-semibold text-[40px]"> Model S </p>
            <p className="text-[17px] font-semibold">
              From $66,490<sup className="text-sm">*</sup>
            </p>
            <p className="text-[10px] font-semibold">After Est.Savings</p>
          </div>
          <div className="flex flex-col  items-center  gap-4">
            <div>
              <div className="flex gap-24 text-[24px] text-white font-bold text-2xl">
                <div>
                  <p>
                    359 <span className="text-base"> mi</span>
                  </p>
                  <p className=" text-white  text-[12px]">Range (EPA est.)</p>
                </div>
                <div>
                  <p>
                    1.99 <span className="text-base">s</span>
                  </p>
                  <p className=" text-white  text-[12px]">
                    0-60 mph<sup className="text-sm text-[10px]">*</sup>{" "}
                  </p>
                </div>
                <div>
                  <p>
                    200 <span className="text-base">mph</span>
                  </p>

                  <p className="flex items-center text-white  text-[12px]">
                    Top Speed
                    <sup className="text-sm ">
                      <FaCross className="flex items-center text-[10px]" />
                    </sup>
                  </p>
                </div>
                <div>
                  <p>
                    1,020 <span className="text-base">hp</span>
                  </p>
                  <p className="text-white  text-[12px]">Peak Power</p>
                </div>
              </div>
            </div>
            <div className="flex h-10  w-[552px] justify-center gap-x-6">
              <button className="text-white bg-[#3457B1] font-medium rounded-md py-1 px-6 w-full">
                Order Now
              </button>
              <button className="bg-transparent border-4 text-white font-medium rounded-md py-1 px-6 w-full">
                Demo Drive
              </button>
            </div>
          </div>
        </div>
        <div className="flex  flex-col justify-end items-center text-white text-[12px] font-semibold h-screen w-full pb-2">
          <p>
            *Price before estimated savings is $72,990, excluding taxes and
            fees. Subject to change.
          </p>
          <p className="underline">Learn about est. gas savings.</p>
          <p>Specs displayed are Model S Plaid values.</p>
        </div>
      </div>
    </>
  )
}

export default Component;