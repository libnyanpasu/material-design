import type { Config } from "tailwindcss";
import mdColorPlugin from "./packages/tailwind";

const config = {
  darkMode: ["class"],
  content: [
    "./apps/**/*.{js,ts,jsx,tsx,mdx}",
    "./packages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    extend: {
      transitionProperty: {
        bg: "background",
        "bg-color": "background-color",
      },
    },
  },
  plugins: [mdColorPlugin],
} satisfies Config;

export default config;
