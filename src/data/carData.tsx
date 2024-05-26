import React from "react";

type TCar = {
  image: string;
  title: string;
  price: string;
  sup: string;
  description: string;
  svg_title?: React.ReactNode;
};

const cars: TCar[] = [
  {
    image: "/model3.png",
    title: "Model 3",
    price: "From $33,990",
    sup: "2",
    description: "After Est. Savings",
  },
  {
    image: "/modelx.png",
    title: "Model X",
    price: "From $63,990",
    sup: "3",
    description: "After Est. Savings",
  },
  {
    image: "/models.png",
    title: "Model s",
    price: "From $66,490",
    sup: "4",
    description: "After Est. Savings",
  },
  {
    image: "/cybertruck.jpg",
    title: "",
    price: "",
    sup: "",
    description: "",
  },
  {
    image: "/solar.png",
    title: "Solar Panels",
    price: "Schedule a virtual Consultation",
    sup: "",
    description: "",
  },
  {
    image: "/solarroof.png",
    title: "Solar Roof",
    price: "Produce Clean Energy From Your Roof",
    sup: "",
    description: "",
  },
  {
    image: "/powerwall.png",
    title: "Powerwall",
    price: "",
    sup: "",
    description: "",
  },
  {
    image: "/accessories.png",
    title: "Accessories",
    price: "",
    sup: "",
    description: "",
  },
];

export default cars;
