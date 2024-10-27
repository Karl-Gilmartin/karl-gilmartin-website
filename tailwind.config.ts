import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#000",
        "navy": "#14213D",
        "orange": "#FCA311",
        "grey": "#E5E5E5",
        "white": "#fff",
      },
    },
  },
  plugins: [],
};
export default config;
