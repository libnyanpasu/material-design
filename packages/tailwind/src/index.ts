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
      },
    },
  },
);
