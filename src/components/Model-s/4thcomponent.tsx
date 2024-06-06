import React from "react";

const RedCar = () => {
  return (
    <>
      <div className="h-screen w-full bg-black">
        <div
          style={{ backgroundImage: "url('/Models/red-s.png')" }}
          className="h-[80%]  bg-cover bg-center"
        ></div>
        <div className="text-white flex  mx-[350px] px-[48px]  pt-14  ">
          <div>
            <p className="text-[17px]">Exterior</p>
            <p className="text-[28px] font-semibold">Designed for Efficiency</p>
            <div className="flex gap-4 pt-5">
              <button className="border-2 border-white px-10 py-1 rounded-sm font-medium">
                Order Now
              </button>
              <button className="px-10 py-1 bg-textColor rounded-sm font-medium">
                Demo Drive
              </button>
            </div>
          </div>
          <p className="text-[14px] text-[#C7C7C7] font-medium">
            With a drag coefficient of just .208 Cd, the lowest on the planet,
            Model S is built for <br></br> speed, endurance and range. Improved
            aerodynamics and a wider chassis offer more<br></br> responsive
            performance so you can take corners quicker and with more
            confidence.
          </p>
        </div>
      </div>
      <div className="h-10 bg-black"></div>
      <div className="bg-black text-white">
        <div className="flex items-center justify-center mx-[240px] px-[48px] gap-40 ">
          <div>
            <p>Relentless Performance</p>
            <p>
              Staggered, performance wheels and tires keep the car <br></br>
              planted and help transfer maximum power down to the<br></br> road.
            </p>
          </div>
          <img
            src="/Models/Relentless-performance.png"
            alt="error"
            className="h-[313.88px] w-[558px]"
          />
        </div>
        <div className="flex items-center justify-center mx-[240px] px-[48px] gap-40 ">
          <img
            src="/Models/Optimized-Aerodynamics.png"
            alt="error"
            className="h-[313.88px] w-[558px]"
          />
          <div>
            <p>Optimized Aerodynamics</p>
            <p>
              Attention to detail on all exterior surfaces makes Model S
              <br></br> the most aerodynamic production car on Earth.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mx-[240px] px-[48px] gap-40 ">
          <div>
            <p>Refined Styling</p>
            <p>An iconic silhouette meets refreshed, elegant proportions.</p>
          </div>
          <img
            src="/Models/Refined-styling.png"
            alt="error"
            className="h-[313.88px] w-[558px]"
          />
        </div>
      </div>
    </>
  );
};

export default RedCar;
