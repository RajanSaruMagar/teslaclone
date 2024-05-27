"use client";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";

import React, { act, useState } from "react";
import Icon from "@/components/icon";
import Link from "next/link";
import Home from "./page";
type TNavbarItem = "vehicle" | "energy" | "charging" | "discover" | "shop" | "";

interface TNavbarItemCar {
  name: string;
  image: string;
}

const Navbar = () => {
  const [activeHoverItem, setActiveHoverItem] = useState<TNavbarItem>();

  const NavbarItemMap = {
    vehicle: [
      { name: "Model S", image: "/Model s.png" },
      { name: " Model 3", image: "/model 3.png" },
      { name: "Model x", image: "/model x.png" },
      { name: " Model y ", image: "/model y.png" },
      { name: "Cybertruck", image: "/cybertruck2.png" },
      { name: " Help Me Choose", image: "/helpme.png" },
    ],
    energy: [
      { name: "energy 1", image: "" },
      { name: "energy 2 ", image: "" },
    ],
    shop: [
      { name: "shop 1", image: "" },
      { name: "shop 2", image: "" },
    ],
    discover: [
      { name: "discover 1", image: "" },
      { name: "discover 2", image: "" },
    ],
    charging: [
      { name: "chargning 1", image: "" },
      { name: "charging 2", image: "" },
    ],
  } as Record<TNavbarItem, TNavbarItemCar[]>;

  return (
    <>
      <Home isActive={activeHoverItem} />
      <div className="flex justify-between px-8 py-5 absolute top-0 w-full  ">
        <div
          onMouseLeave={() => setActiveHoverItem("")}
          className={`${
            activeHoverItem ? "h-[600px]" : "h-0"
          } overflow-hidden ease-in duration-500 bg-white flex justify-center gap-32 shadow-md absolute top-0 left-0 w-full z-10 items-center`}
        >
          <div className="grid grid-cols-4 pt-32">
            {activeHoverItem &&
              NavbarItemMap[activeHoverItem as TNavbarItem].map(
                (car, index) => {
                  return (
                    <div key={index} className="w-[200px] h-[200px]   ">
                      <img src={car.image} />
                      <p className="font-medium">{car.name} </p>
                      <div className="flex">
                        <p>Learn</p>
                        <p>Order</p>
                      </div>
                    </div>
                  );
                }
              )}
          </div>
          <div className="w-[2px] h-64 bg-[#f0f0f0]"></div>
          <div className=" font-medium text-[#052252]">
            <ul>
              <li>Inventory</li>
              <li>Used Cars </li>
              <li>Demo Drive </li>
              <li> Trade-in </li>
              <li> Compare </li>
              <li> Help Me Charge </li>
              <li> Fleet </li>
              <li> Semi </li>
              <li> Roadster </li>
            </ul>
          </div>
        </div>

        <div className="z-20">
          <Icon />
        </div>

        <div className="flex gap-x-6   items-center font-semibold z-20 text-[14px] cursor-pointer">
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
