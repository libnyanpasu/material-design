import type { PluginAPI } from "tailwindcss/types/config";

export const subtract = ({ addUtilities, theme, e }: PluginAPI) => {
  const heights = theme("height")!;

  const subtractRules = Object.keys(heights).reduce((acc, key) => {
    const originalValue = heights[key];
    acc[`.${e(`h-dvh-subtract-${key}`)}`] = {
      height: `calc(100dvh - ${originalValue})`,
    };
    return acc;
  }, {});

  addUtilities(subtractRules);
};
