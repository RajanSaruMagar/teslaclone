import React from "react";

const BlackInterior = () => {
  return (
    <>
      {" "}
      <div className="bg-black text-white h-screen w-full text-[14px] font-semibold">
        <div className="flex items-center justify-center mx-[240px] px-[48px] gap-52">
          <img
            src="/Models/Stay-connected.png"
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
            autoPlay
            muted
            loop
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
    </>
  );
};

export default BlackInterior;
