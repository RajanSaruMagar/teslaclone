import React from "react";

const GoAnywhere = () => {
  return (
    <>
      <div
        className="h-screen w-full bg-cover bg-center relative"
        style={{ backgroundImage: "url('/Modely/go.png')" }}
      >
        <div className="absolute left-[20%] ">
          <p className="text-[28px] font-semibold py-4">Go Anywhere</p>
          <p className="text-[14px] font-medium py-4 text-textColor">
            Go ahead, take the road trip. With up to 320 miles (est.) of range
            on a single charge, chances are you’ll need <br></br>a break before
            your Model Y will. Dual motor all-wheel drive ensures you’re ready
            to tackle any road <br></br>conditions.
          </p>
        </div>
      </div>
    </>
  );
};

export default GoAnywhere;
