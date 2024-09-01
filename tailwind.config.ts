import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./apps/**/*.{js,ts,jsx,tsx,mdx}",
    "./packages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {},
} satisfies Config;

export default config;
