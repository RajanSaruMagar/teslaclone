import React from "react";

const DoMore = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-end text-center h-60 w-full absolute bg-white">
        <p className="text-[28px] font-semibold">Do More Than Drive</p>
        <div className="text-[14px] font-medium  ">
          <p>
            Your favorite song, movie or game is just a few taps away. An
            ultra-responsive 15-inch touchscreen sits at
          </p>
          <p>the center of your driving experience.</p>
        </div>
      </div>
      <div
        className="h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/Modely/do.png')" }}
      ></div>
    </>
  );
};

export default DoMore;
