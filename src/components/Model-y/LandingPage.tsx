import React from "react";
import { FaCross } from "react-icons/fa";

const LandingPage = () => {
  return (
    <>
      <div
        className="h-screen w-full bg-cover bg-center "
        style={{
          backgroundImage: "url('/Modely/modely.png')",
          boxShadow: "black 0px -172px 201px 0px inset",
        }}
      >
        <div className=" w-1/2 flex mx-auto flex-col left-0 right-0  items-center justify-between  h-[75%] absolute top-[15%]">
          <div className="flex flex-col items-center ">
            <p className="font-semibold text-[40px]"> Model Y </p>
            <p className="text-[17px] font-semibold">
              From $31,490<sup className="text-sm">*</sup>
            </p>
            <p className="text-[10px] font-semibold">After Est.Savings</p>
          </div>
          <div className="flex flex-col  items-center  gap-4">
            <div>
              <div className="flex gap-24 text-[24px] text-white font-bold text-2xl">
                <div>
                  <p>
                    76 <span className="text-[24px] font-semibold">cu ft</span>
                  </p>
                  <p className=" text-white font-medium text-[14px]">
                    Cargo Space
                  </p>
                </div>
                <div>
                  <p>
                    320 <span className="text[14px]">mi</span>
                  </p>
                  <p className=" text-white  text-[14px]">Range (est.)</p>
                </div>
                <div>
                  <p>AWD</p>

                  <p className="flex items-center font-medium    text-white  text-[14px]">
                    Dual Motor
                  </p>
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
      </div>
      <div
        className="h-screen w-full bg-center bg-cover text-white"
        style={{ backgroundImage: "url('/Modely/child.png')" }}
      >
        <div className="h-full w-full flex flex-col justify-end  px-[400px]">
          <p className="text-[28px] font-semibold py-4">
            Engineered for Your Safety
          </p>
          <p className="text-[14px] font-medium py-4">
            We engineer our vehicles to be the safest in the world. With an
            extremely low chance of roll-over and <br></br>occupant injury,
            Model Y receives some of the highest possible{" "}
            <span className="underline">safety ratings.</span>
          </p>
        </div>
      </div>
      <div className="bg-black h-[80%]  w-full">
        <div className="flex items-center justify-center gap-20 py-40">
          <video
            src="/Modely/noaccident.webm"
            autoPlay
            muted
            loop
            className="w-[619.81px] h-[348.64px]"
          ></video>
          <div className=" text-white ">
            <p className="text-[24px] font-semibold">
              The Best Accident is <br></br>No Accident
            </p>
            <p className="text-[14px] font-medium">
              <span className="underline">Active safety features </span>can help
              reduce impact severity or prevent<br></br>
              accidents from happening altogether. Features like Forward{" "}
              <br></br>
              Collision Warning, Active Emergency Braking and Lane Departure{" "}
              <br></br>avoidance all come standard.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
