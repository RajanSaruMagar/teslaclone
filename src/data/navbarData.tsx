interface TNavbarItemCar {
  name?: string;
  categories?: [];
  image?: string;
  Learn?: string;
  Order?: string;
  Title?: string;
  learnLink?: string;
}

const NavbarItemMap = {
  vehicle: [
    {
      name: "Model S",
      image: "/Model s.png",
      Learn: "Learn",
      Order: "Order",
      learnLink: "/learn/models",
    },
    {
      name: " Model 3",
      image: "/model 3.png",
      Learn: "Learn",
      Order: "Order",
      learnLink: "/learn/model3",
    },
    {
      name: "Model X",
      image: "/model x.png",
      Learn: "Learn",
      Order: "Order",
      learnLink: "/learn/modelx",
    },
    {
      name: " Model Y ",
      image: "/model y.png",
      Learn: "Learn",
      Order: "Order",
      learnLink: "/learn/modely",
    },
    {
      name: "Cybertruck",
      image: "/cybertruck2.png",
      Learn: "Learn",
      Order: "Order",
      learnLink: "/learn/cybertruck",
    },
    {
      name: " Help Me Choose",
      image: "/helpme.png",
      Learn: "Learn",
      Order: "Order",
      learnLink: "/learn/getstarted",
    },
  ],
  energy: [
    {
      name: "Solar Panels",
      image: "/Solar Panel.png",
      Learn: "Learn",
      Order: "Order",
      learnLink: "/learn/1",
    },
    {
      name: "Solar Roof ",
      image: "/Solar Roof.png",
      Learn: "Learn",
      Order: "Order",
      learnLink: "/learn/1",
    },
    {
      name: "Powerwall",
      image: "/Power wall.png",
      Learn: "Learn",
      Order: "Order",
      learnLink: "/learn/1",
    },
    {
      name: "Megapack",
      image: "/Mega pack.png",
      Learn: "Learn",
      Order: "",
      learnLink: "/learn/1",
    },
  ],
  charging: [
    {
      name: "Chargning",
      image: "/Charging.png",
      Learn: "Learn",
      Order: "",
      learnLink: "/learn/1",
    },
    {
      name: "Home Charging",
      image: "/Home Charging.png",
      Learn: "Learn",
      Order: "shop",
      learnLink: "/learn/1",
    },
    {
      name: "Supercharging",
      image: "/SuperCharging.png",
      Learn: "Learn",
      Order: "Find",
      learnLink: "/learn/1",
    },
  ],
  discover: [
    {
      Title: "Resources",
      categories: [
        "Demo Drive",
        "Insurance",
        "Video Guides",
        "Customer Stories",
        "Events",
      ],
    },
    {
      Title: "Location Servises",
      categories: [
        "Find us",
        "Find a collision center",
        "Find a certified installer",
      ],
    },
    {
      Title: "Company",
      categories: ["About", "Careers", "Investor Relations"],
    },
  ],
  shop: [
    { name: "Charging", image: "/shopCharging.png" },
    { name: "Vehicles Accesories", image: "/Vehicle Accessories.png" },
    { name: "Apparel", image: "/Apparel.png" },
    { name: "Lifestyle", image: "/Lifestyle.png" },
  ],
} as unknown as Record<TNavbarItem, TNavbarItemCar[]>;
export default NavbarItemMap;
