import React from 'react'

const BlueCar = () => {
  return (
    <>
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
          <div className="text-textColor text-[#14px] font-medium ">
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
          <p className="text-[14px] text-textColor py-4 font-medium">
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
        <div className=" flex justify-center text-textColor hover:text-black py-10  gap-20">
          <div>
            <hr className="h-1 bg-textColor hover:h-2 hover:bg-black"></hr>
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
            <hr className="h-1 bg-textColor hover:h-2 hover:bg-black"></hr>
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
    </>
  )
}

export default BlueCar