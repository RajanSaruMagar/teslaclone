"use client";
import cars from "@/data/carData";
import React from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
const Home = () => {
  const path = usePathname();

  return (
    <>
      <div className="bg-custom-image h-screen bg-cover bg-center  ">
        <div className=" w-1/2 flex mx-auto flex-col left-0 right-0  items-center justify-between  h-[70%] absolute top-[15%]">
          <div className="flex flex-col items-center ">
            <p className="font-semibold text-[40px]"> Model Y </p>
            <p className="text-[24px] underline">
              <span className="font-semibold">0.99%</span> APR Financing
            </p>
            <p className="text-[14px]">
              From <span className="font-medium"> $299</span>/mo
              <sup className="text-sm">1</sup> Lease After Est. Gas Savings
            </p>
          </div>
          <div className="flex h-10  w-[552px] justify-center gap-x-6">
            <button className="bg-white text-black font-medium rounded-md py-1 px-6 w-full">
              Order Now
            </button>
            <button className="bg-black text-white font-medium rounded-md py-1 px-6 w-full">
              Demo Drive
            </button>
          </div>
        </div>
      </div>
      {cars.map((car, index) => {
        return (
          <div
            className="h-screen bg-center relative bg-cover"
            key={index}
            style={{
              backgroundImage: `url(${car.image})`,
            }}
          >
            <div className="flex items-center justify-between flex-col h-[70%] absolute top-[15%] left-[25%] right-[25%]">
              <div>
                <div className="font-semibold text-[40px]">{car.title}</div>
                <p className="text-[17px]">
                  {car.price}
                  <sup className="text-sm">{car.sup}</sup>
                </p>
                <p className="text-[10.2px]">{car.description}</p>
              </div>
              <div className="flex h-10 justify-center w-[552px]  gap-x-6">
                {index == 7 ? (
                  <button className="bg-white font-medium text-black text-[#14px] rounded-md w-60 ">

                    Shop Now
                  </button>
                ) : (
                  <>
                    <button
                      className={clsx(
                        "text-black font-semibold py-1 px-6 w-full",
                        index == 3
                          ? "bg-[#111111] text-[#8e8e8e] border-t-4 border-gray-600 font-bold"
                          : "bg-white"
                      )}
                    >
                      ORDER NOW
                    </button>
                    <button
                      className={clsx(
                        " text-white py-1 px-6 w-full",
                        index == 3
                          ? "bg-[#111111] text-[#8e8e8e] font-bold"
                          : "bg-black font-medium"
                      )}
                    >
                      {index >= 3 ? "Learn More" : "Demo Drive"}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Home;
