import mdplugin from "@nyanpasu/material-design-tailwind";
import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "../../packages/react/src/**/*.{ts,tsx}",
    "../../packages/components/src/**/*.{ts,tsx}",
  ],
  plugins: [mdplugin],
} satisfies Config;
