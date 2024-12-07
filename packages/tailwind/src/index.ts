import plugin from "tailwindcss/plugin";
import { color } from "./color";
import { subtract } from "./subtract";

export default plugin(
  (api) => {
    color(api);
    subtract(api);
  },
  {
    theme: {
      extend: {
        height: {
          "full-2": "200%",
        },
        width: {
          "full-2": "200%",
        },
        strokeWidth: {
          "1/10": "10%",
          "1/5": "20%",
          "1/4": "25%",
          "1/2": "50%",
          "3/4": "75%",
          "4/5": "80%",
          "9/10": "90%",
        },
        strokeOpacity: {
          DEFAULT: "1",
          "0": "0",
          "25": "0.25",
          "50": "0.5",
          "75": "0.75",
          "100": "1",
        },
        fillOpacity: {
          DEFAULT: "1",
          "0": "0",
          "25": "0.25",
          "50": "0.5",
          "75": "0.75",
          "100": "1",
        },
        boxShadow: {
          container:
            "0px 2px 1px -1px rgba(0, 0, 0, .2)," +
            "0px 1px 1px 0px rgba(0, 0, 0, .14)," +
            "0px 1px 3px 0px rgba(0, 0, 0, .12)",
          "container-lg":
            "0px 3px 3px -2px rgba(0, 0, 0, .2)," +
            "0px 3px 4px 0px rgba(0, 0, 0, .14)," +
            "0px 1px 8px 0px rgba(0, 0, 0, .12)",
          "container-xl":
            "0px 3px 5px -1px rgba(0, 0, 0, .2)," +
            "0px 6px 10px 0px rgba(0, 0, 0, .14)," +
            "0px 1px 18px 0px rgba(0, 0, 0, .12)",
          "container-2xl":
            "0px 5px 5px -3px rgba(0, 0, 0, .2)," +
            "0px 8px 10px 1px rgba(0, 0, 0, .14)," +
            "0px 3px 14px 2px rgba(0, 0, 0, .12)",
        },
        borderWidth: {
          "1/3": `${1 / 3}px`,
          "2/3": `${2 / 3}px`,
        },
        keyframes: {
          "progress-spin": {
            "12.5%": { transform: "rotate(135deg)" },
            "25%": { transform: "rotate(270deg)" },
            "37.5%": { transform: "rotate(405deg)" },
            "50%": { transform: "rotate(540deg)" },
            "62.5%": { transform: "rotate(675deg)" },
            "75%": { transform: "rotate(810deg)" },
            "87.5%": { transform: "rotate(945deg)" },
            "100%": { transform: "rotate(1080deg)" },
          },
          "progress-spin-left": {
            "0%": { transform: "rotate(265deg)" },
            "50%": { transform: "rotate(130deg)" },
            "100%": { transform: "rotate(265deg)" },
          },
          "progress-spin-right": {
            "0%": { transform: "rotate(-265deg)" },
            "50%": { transform: "rotate(-130deg)" },
            "100%": { transform: "rotate(-265deg)" },
          },
        },
        animation: {
          "progress-spin":
            "progress-spin 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;",
          "progress-spin-left":
            "progress-spin-left 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;",
          "progress-spin-right":
            "progress-spin-right 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;",
        },
      },
    },
  },
);
