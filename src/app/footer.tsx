import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-[13px] flex flex-col  font-semibold justify-evenly h-[350px] w-full ">
        <div className=" text-[#D0D1D2]  flex flex-col items-center gap-2">
          <div className="flex flex-col items-center ">
            <p>
              <sup>1</sup> Excludes taxes and fees with price subject to change.
              Available in select states and requires credit
            </p>
            <p>
              approval.
              <Link
                href={
                  "https://www.tesla.com/modely/design?financeModalTab=gas_savings#overview"
                }
                target="_blank"
              >
                <span className="underline text-white font-medium">
                  Est. gas savings
                </span>
              </Link>{" "}
              is $100/month.
            </p>
            <Link
              href={
                "https://www.tesla.com/modely/design?financeModalTab=finance_options&financeProduct=finplat.AUTO_LOAN%3ALOAN%3ACT_PRIVATE#overview"
              }
              target="_blank"
            >
              {" "}
              <p className="underline text-white font-medium">
                See Details
              </p>{" "}
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <p>
              <sup>2</sup> Price before estimated savings is $38,990, excluding
              taxes and fees. Subject to change.
            </p>
            <Link
              href={
                "https://www.tesla.com/model3/design?financeModalTab=gas_savings#overview"
              }
              target="_blank"
            >
              {" "}
              <p className="underline text-white font-medium">
                Learn about est. gas savings.
              </p>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <p>
              <sup>3</sup> Price before estimated savings is $77,990, excluding
              taxes and fees. Subject to change.
            </p>
            <Link
              href={
                "https://www.tesla.com/modelx/design?financeModalTab=gas_savings#overview"
              }
              target="_blank"
            >
              {" "}
              <p className="underline text-white font-medium">
                Learn about est. gas savings.
              </p>{" "}
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <p>
              <sup>4</sup> Price before estimated savings is $72,990, excluding
              taxes and fees. Subject to change.
            </p>
            <Link
              href={
                "https://www.tesla.com/models/design?financeModalTab=gas_savings#overview"
              }
              target="_blank"
            >
              {" "}
              <p className="underline text-white font-medium">
                Learn about est. gas savings.
              </p>{" "}
            </Link>
          </div>
        </div>
        <div className="text-[#D0D1D2]  flex justify-center gap-2">
          <Link href={"https://www.tesla.com/about"} target="_blank">
            {" "}
            <p>Tesla © 2024</p>{" "}
          </Link>
          <Link href={"https://www.tesla.com/legal"} target="_blank">
            {" "}
            <p>Privacy & Legal</p>{" "}
          </Link>
          <Link
            href={"https://service.tesla.com/en-US/vin-recall-search"}
            target="_blank"
          >
            {" "}
            <p>Vehicle Recalls</p>{" "}
          </Link>
          <Link href={"https://www.tesla.com/contact"} target="_blank">
            {" "}
            <p>Contact</p>
          </Link>
          <Link href={"https://www.tesla.com/blog"} target="_blank">
            {" "}
            <p>News</p>{" "}
          </Link>
          <Link href={"https://www.tesla.com/updates"} target="_blank">
            {" "}
            <p>Get Updates</p>{" "}
          </Link>
          <Link href={"https://www.tesla.com/findus/list"} target="_blank">
            {" "}
            <p>Locations</p>{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
