import React from "react";

const Card = () => {
  return (
    <>
      <div className=" h-auto w-full">
        <div className="flex flex-col items-center gap-6 py-16">
          <div className="flex gap-4">
            <div className=" bg-black w-[660px] h-[478.28px] rounded-lg relative">
              <img
                src="/Modely/teslaApp.png"
                alt="error"
                className="bg-cover h-[100%] w-[100%] rounded-lg "
              />
              <div className="absolute bottom-[5%] left-[6%] text-[24px] text-white font-semibold">Tesla App</div>
            </div>
            <div className=" bg-black w-[432px] h-[478.28px] rounded-lg relative">
              <img
                src="/Modely/arcade.webp"
                alt="error"
                className="bg-cover h-[100%] w-[100%] bg-cover bg-center rounded-lg"
              />
              <div  className="absolute bottom-[5%] left-[6%] text-[24px] text-white font-semibold">Tesla arcade</div>
            </div>
          </div>
          <div className=" bg-black w-[1116px] h-[478.28px] rounded-lg relative">
            <img
              src="/Modely/dog.png
          "
              alt="error"
              className="bg-cover h-[100%] w-[100%] rounded-lg"
            />
             <div  className="absolute bottom-[5%] left-[6%] text-[24px] text-white font-semibold">Dog Mode</div>
          </div>
          <div className="flex gap-4">
            <div className=" bg-black w-[432px] h-[478.28px] rounded-lg relative">
              <img
                src="/Modely/audio.jpg"
                alt="error"
                className="bg-cover h-[100%] w-[100%] rounded-lg"
              />
               <div  className="absolute bottom-[5%] left-[6%] text-[24px] text-white font-semibold">Tesla Audio</div>
            </div>
            <div className=" bg-black w-[660px] h-[478.28px] bg-cove rounded-lg relative">
              <img
                src="/Modely/sentry.webp"
                alt="error"
                className="bg-cover h-[100%] w-[100%] rounded-lg  "
              />
               <div  className="absolute bottom-[5%] left-[6%] text-[24px] text-white font-semibold">Sentry Mode</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
