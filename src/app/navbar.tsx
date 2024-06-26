"use client";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import React, { act, useState } from "react";
import Icon from "@/components/icon";
import NavbarItemMap from "../data/navbarData";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type TNavbarItem = "vehicle" | "energy" | "charging" | "discover" | "shop" | "";

const Navbar = () => {
  const [activeHoverItem, setActiveHoverItem] = useState<TNavbarItem>("");
  const path = usePathname();

  return (
    <>
      {/* <Home isActive={activeHoverItem} /> */}
      <div
        className={clsx(
          "flex justify-between px-8 py-5 absolute top-0 w-full",
          path === "/learn/model3" && activeHoverItem == ""
            ? "text-white"
            : "text-black"
        )}
      >
        <div
          onMouseLeave={() => setActiveHoverItem("")}
          className={`${
            activeHoverItem ? "h-auto py-12" : "h-0"
          } overflow-hidden ease-in duration-500 bg-white flex justify-center gap-32 shadow-md absolute top-0 left-0 w-full z-10 items-center `}
        >
          <div className="grid grid-cols-4 w-auto pt-10">
            {activeHoverItem &&
              NavbarItemMap[activeHoverItem as TNavbarItem].map(
                (car, index) => {
                  return (
                    <div key={index} className="w-[200px] flex flex-col ">
                      <div>
                        <img src={car.image} />
                      </div>

                      <p className="text-center text-[17px] font-semibold">
                        {car.name}
                      </p>
                      <p className="text-[#696b6e] text-[14px] py-2">
                        {car.Title}
                      </p>
                      {car.categories?.map((data, index) => (
                        <p
                          key={index}
                          className="text-[14px] py-1 font-semibold"
                        >
                          {data}
                        </p>
                      ))}
                      <div className="flex">
                        {index == 5 ? (
                          <div className="text-[#5C5E62] text-[12px] underline pl-14">
                            Get Started
                          </div>
                        ) : (
                          <>
                            <div className="flex w-full justify-center gap-3">
                              {car.learnLink && (
                                <Link
                                  className="text-[#5C5E62] text-center text-[12px] underline"
                                  href={car.learnLink}
                                >
                                  {car.Learn}
                                </Link>
                              )}

                              <div className="text-[#5C5E62] text-center text-[12px] underline">
                                {car.Order}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                }
              )}
          </div>
          {activeHoverItem != "shop" && activeHoverItem !== "discover" ? (
            <div className="w-[2px] h-64 bg-[#f0f0f0]"></div>
          ) : (
            ""
          )}

          {activeHoverItem == "vehicle" && (
            <div className=" font-medium text-[#052252] ">
              <ul className="flex flex-col gap-2">
                <li className="hover:underline decoration-2 ">Inventory</li>
                <li className="hover:underline decoration-2 ">Used Cars </li>
                <li className="hover:underline decoration-2 ">Demo Drive </li>
                <li className="hover:underline decoration-2 "> Trade-in </li>
                <li className="hover:underline decoration-2 "> Compare </li>
                <li className="hover:underline decoration-2 ">
                  Help Me Charge{" "}
                </li>
                <li className="hover:underline decoration-2 "> Fleet </li>
                <li className="hover:underline decoration-2 "> Semi </li>
                <li className="hover:underline decoration-2 "> Roadster </li>
              </ul>
            </div>
          )}
          {activeHoverItem == "energy" && (
            <div className=" font-medium text-[#052252]">
              <ul className="flex flex-col gap-2">
                <li className="hover:underline decoration-2 ">
                  Schedule a Consultation
                </li>
                <li className="hover:underline decoration-2 ">Why Solar </li>
                <li className="hover:underline decoration-2 ">Incentives </li>
                <li className="hover:underline decoration-2 "> Support </li>
                <li className="hover:underline decoration-2 ">
                  Partner with Tesla
                </li>
                <li className="hover:underline decoration-2 "> Commercial </li>
                <li className="hover:underline decoration-2 "> Utilities </li>
              </ul>
            </div>
          )}
          {activeHoverItem == "charging" && (
            <div className=" font-medium text-[#052252]">
              <ul className="flex flex-col gap-2">
                <li className="hover:underline decoration-2 ">
                  Help Me Charge
                </li>
                <li className="hover:underline decoration-2 ">
                  Charging Calculator
                </li>
                <li className="hover:underline decoration-2 ">
                  Charging With NACS
                </li>
                <li className="hover:underline decoration-2 ">
                  Supercharger Voting
                </li>
                <li className="hover:underline decoration-2 ">
                  Host a Supercharger
                </li>
                <li className="hover:underline decoration-2 ">
                  Commercial Charging
                </li>
                <li className="hover:underline decoration-2 ">
                  Host Wall Connectors
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="z-20">
         <Link href="/"> <Icon /></Link>
        </div>

        <div className="flex gap-x-6 items-center font-semibold z-20 text-[14px] cursor-pointer">
          <div
            className="hover:bg-[#F2F2F2] px-3 py-1 rounded-md"
            onMouseOver={() => setActiveHoverItem("vehicle")}
          >
            Vehicles
          </div>
          <div
            className="hover:bg-[#F2F2F2] px-3 py-1 rounded-md"
            onMouseOver={() => setActiveHoverItem("energy")}
          >
            Energy
          </div>
          <div
            className="hover:bg-[#F2F2F2] px-3 py-1 rounded-md"
            onMouseOver={() => setActiveHoverItem("charging")}
          >
            Charging
          </div>
          <div
            className="hover:bg-[#F2F2F2] px-3 py-1 rounded-md"
            onMouseOver={() => setActiveHoverItem("discover")}
          >
            Discover
          </div>
          <div
            className="hover:bg-[#F2F2F2] px-6 py-1 rounded-md"
            onMouseOver={() => setActiveHoverItem("shop")}
          >
            Shop
          </div>
        </div>

        <div className="flex gap-x-4 items-center z-20">
          <FaRegCircleQuestion className="text-[24px]" />
          <BiGlobe className="text-[24px]" />
          <FaRegUserCircle className="text-[24px]" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
