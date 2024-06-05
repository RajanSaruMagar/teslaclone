import VideoCarousel from "@/components/carousel";
import React from "react";
import { FaCross } from "react-icons/fa";

const ModelS = () => {
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
      <div className="h-[172px] py-12 bg-black">
        <div className="h-[76px] pt-8 pb-2 flex items-center justify-center">
          <p className="text-[28px] font-semibold text-white">
            Interior of the Future
          </p>
        </div>
      </div>
      <div
        className="h-screen w-full bg-cover bg-center "
        style={{
          backgroundImage: "url('/Models/interior-of-the-future.png')",
          boxShadow: "black 0px 150px 200px 0px inset",
        }}
      ></div>
      <div className=" bg-black rounded-sm">
        <VideoCarousel />
      </div>
      <div className="bg-black text-white h-screen w-full text-[14px] font-semibold">
        <div className="flex items-center justify-center mx-[240px] px-[48px] gap-52">
          <img
            src="/Models/Stay-Connected.png"
            alt="error"
            className="h-[313.33px] w-[558px]"
          />
          <div className="flex flex-col ">
            <h1 className="font-bold">Stay Connected</h1>
            <p>
              Instantly connect with multi-device Bluetooth, or fast <br></br>{" "}
              charge devices with wireless and 36-watt USB-C charging.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mx-[240px] px-[48px] gap-52">
          <div>
            <h1 className="font-bold">Immersive Sound</h1>
            <p>
              {" "}
              A 22-speaker, 960-watt audio system with Active Road <br></br>
              Noise Reduction offers immersive listening and studio-<br></br>
              grade sound quality.
            </p>
          </div>
          <video
            src="/Models/immersive-sound.webm"
            className="h-[307.13px] w-[546px]"
          ></video>
        </div>
        <div className="flex justify-center items-center mx-[240px] px-[48px] gap-52">
          <img
            src="/Models/Room-for-everything.png"
            alt="error"
            className="h-[313.33px] w-[558px]"
          />
          <div>
            <h1 className="font-bold">Room for Everything</h1>
            <p>
              With front and rear trunks and fold-flat seats you can fit{" "}
              <br></br> your bike without taking the wheel off—and your luggage
              <br></br>too. <span className="underline">Compare Models</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black h-40"></div>
      <div className="h-screen w-full">
        <div
          style={{ backgroundImage: "url('/Models/blue-model-s.png')" }}
          className="h-[80%] bg-center bg-cover"
        >
          <div className="text-white flex gap-48 h-full justify-center items-end pb-20">
            <div className="flex flex-col">
              <p className="text-[24px] font-semibold">
                1,020 <span className="text-[20px]">hp</span>
              </p>
              <p className="font-semibold">Peak Power</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[24px] font-semibold">
                9.23 <span className="text-[20px]">s</span>
              </p>
              <p className="font-semibold">@155 mph 1/4 mile</p>
            </div>
            <div className="flex flex-col">
              <p className="text-[24px] font-semibold">
                1.99 <span className="text-[20px]">s</span>
              </p>
              <p className="font-semibold">
                0-60 mph<sup>*</sup>
              </p>
            </div>
          </div>
        </div>
        <div className="flex  justify-center mx-[240px] px-[48px] gap-52 pt-8 ">
          <div>
            <p className="text-[17px] font-semibold">Plaid</p>
            <p className="text-[28px] font-semibold">Beyond Ludicrous</p>
            <div className="flex pt-4 gap-10">
              <button className="border-4 border-black py-1 px-8 font-semibold rounded-md hover:bg-black hover:text-white">
                Order Now
              </button>
              <button className=" py-1 px-8 font-semibold rounded-md hover:bg-[#c4c0c0]">
                Compare Models
              </button>
            </div>
          </div>
          <div className="text-[#393C41] text-[#14px] font-medium ">
            <p>
              Model S Plaid has the quickest acceleration of any vehicle in
              production. Updated battery <br></br>architecture for all Model S
              trims enables back-to-back track runs without performance<br></br>
              degradation.
              <span className="underline"> Chat with a Tesla Advisor</span> to
              learn more about Model S or{" "}
              <span className="underline">schedule a demo</span>
              <span className="underline">drive</span> today.
            </p>
          </div>
        </div>
      </div>
      <div className="h-full w-full bg-[#F4F4F4]">
        <div className="h-20 bg-[#F4F4F4]"></div>
        <div className="mx-[240px] px-[48px] pl-40">
          <p className="text-[28px] font-semibold pt-[72px]">
            Electric Powertrain
          </p>
          <p className="text-[14px] text-[#393C41] py-4 font-medium">
            Model S platforms unite powertrain and battery technologies for
            unrivaled performance, range and <br></br>efficiency. New module and
            pack thermal architecture allows faster charging and gives you more
            power<br></br>
            and endurance in all conditions.
          </p>
        </div>
        <div className="mx-[240px] ">
          <img
            src="/Models/Electric-powertrain.png"
            alt="error"
            className="h-[756px] w-[1344px] pt-[56px] px-[48px]"
          />
        </div>
        <div className=" flex justify-center text-[#393C41] hover:text-black py-10  gap-20">
          <div>
            <hr className="h-1 bg-[#393C41] hover:h-2 hover:bg-black"></hr>
            <p className="text-[17px] font-medium pt-2">Model S</p>
            <p className="text-[14px] font-medium py-4">
              Dual Motor All-Wheel Drive unlocks more range than any other
              vehicle in <br></br>our current lineup, with insane power and
              maximum control.
            </p>
            <div className="flex gap-10 py-4">
              <div>
                <p className="text-[24px] font-semibold">3.1 s</p>
                <p className="text-[12px] font-medium">0-60 mph</p>
              </div>
              <div>
                <p className="text-[24px] font-semibold">402 mi</p>
                <p className="text-[12px] font-medium">Range EPA est.</p>
              </div>
              <div>
                <p className="text-[24px] font-semibold">670 hp</p>
                <p className="text-[12px] font-medium">Peak Power</p>
              </div>
            </div>
          </div>
          <div>
            <hr className="h-1 bg-[#393C41] hover:h-2 hover:bg-black"></hr>
            <p className="text-[17px] font-medium pt-4">Model S Plaid</p>
            <p className="text-[14px] font-medium py-4">
              Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor
              All-<br></br>Wheel Drive, featuring torque vectoring and three
              independent carbon-<br></br>sleeved rotors.
            </p>
            <div className="flex gap-10 py-4">
              <div>
                <p className="text-[24px] font-semibold">
                  1.99 s<sup>*</sup>
                </p>
                <p className="text-[12px] font-medium">0-60 mph</p>
              </div>
              <div>
                <p className="text-[24px] font-semibold">359 mi</p>
                <p className="text-[12px] font-medium">Range EPA est.</p>
              </div>
              <div>
                <p className="text-[24px] font-semibold">1020 hp</p>
                <p className="text-[12px] font-medium">Peak Power</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-[12px] pb-16">
          <sup className="pt-3"> *</sup> With rollout subtracted
        </div>
      </div>
      <div className="h-screen w-full bg-black">
        <div
          style={{ backgroundImage: "url('/Models/red-s.png')" }}
          className="h-[80%]  bg-cover bg-center"
        ></div>
        <div className="text-white flex justify-center gap-10  pt-6 ">
          <div>
            <p className="text-[17px]">Exterior</p>
            <p className="text-[28px] font-semibold">Designed for Efficiency</p>
            <div className="flex gap-4 pt-5">
              <button className="border-2 border-white px-10 py-1 rounded-sm font-medium">
                Order Now
              </button>
              <button className="px-10 py-1 bg-[#393C41] rounded-sm font-medium">
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
      <div className="h-10 bg-black"></div>
      <div className="h-screen w-full flex">
        <div className="h-full w-[80%]">
          <video src="/Models/Range.mp4" autoPlay muted loop></video>
        </div>
        <div className="px-10 py-8">
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
          <div className="flex flex-col justify-end gap-2">
            <button  className="border-2 border-black w-full text-[14px] font-medium">Order Now</button>
            <button className="w-full text-[14px] bg-[#EEEEEE] font-medium">Find My Route</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelS;
