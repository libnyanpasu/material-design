/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "../../packages/react/src/**/*.{ts,tsx}",
    "../../packages/components/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("../../packages/tailwind")],
};
