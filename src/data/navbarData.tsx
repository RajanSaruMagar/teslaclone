import React from "react";

interface TNavbarItemCar {
  name: string;
  image: string;
  Learn?: string;
  Order: string;
  Title?: string;
  Des?: string;
}

const NavbarItemMap = {
  vehicle: [
    {
      name: "Model S",
      image: "/Model s.png",
      Learn: "https://youtube.com",
      Order: "Order",
    },
    {
      name: " Model 3",
      image: "/model 3.png",
      Learn: "Learn",
      Order: "Order",
    },
    {
      name: "Model X",
      image: "/model x.png",
      Learn: "Learn",
      Order: "Order",
    },
    {
      name: " Model Y ",
      image: "/model y.png",
      Learn: "Learn",
      Order: "Order",
    },
    {
      name: "Cybertruck",
      image: "/cybertruck2.png",
      Learn: "Learn",
      Order: "Order",
    },
    {
      name: " Help Me Choose",
      image: "/helpme.png",
      Learn: "Learn",
      Order: "Order",
    },
  ],
  energy: [
    { name: "Solar Panels", image: "/Solar Panel.png" },
    { name: "Solar Roof ", image: "/Solar Roof.png" },
    { name: "Powerwall", image: "/Power wall.png" },
    { name: "Megapack", image: "/Mega pack.png" },
  ],
  charging: [
    { name: "", image: "" },
    { name: "Chargning", image: "/Charging.png" },
    { name: "Home Charging", image: "/Home Charging.png" },
    { name: "Supercharging", image: "/SuperCharging.png" },
  ],
  discover: [
    { Title: "Resources" },
    { Title: "Location Services" },
    { Title: "Company" },
  ],
  shop: [
    { name: "Charging", image: "/Charging.png" },
    { name: "Vehicles Accesories", image: "/Vehicle Accessories.png" },
    { name: "Apparel", image: "/Apparel.png" },
    { name: "Lifestyle", image: "/Lifestyle.png" },
  ],
} as Record<TNavbarItem, TNavbarItemCar[]>;
export default NavbarItemMap;
