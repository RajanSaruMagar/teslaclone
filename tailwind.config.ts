import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/modely.png')",
      },
      colors: {
        textColor: "#393C41",
        loader: "#5C5E62",
      },
    },
  },
  plugins: [],
};
export default config;
