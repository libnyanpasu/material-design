const plugin = require("tailwindcss/plugin");

const colorScheme = [
  "primary",
  "on-primary",
  "primary-container",
  "on-primary-container",
  "secondary",
  "on-secondary",
  "secondary-container",
  "on-secondary-container",
  "tertiary",
  "on-tertiary",
  "tertiary-container",
  "on-tertiary-container",
  "error",
  "on-error",
  "error-container",
  "on-error-container",
  "background",
  "on-background",
  "surface",
  "on-surface",
  "surface-variant",
  "on-surface-variant",
  "outline",
  "outline-variant",
  "shadow",
  "scrim",
  "inverse-surface",
  "inverse-on-surface",
  "inverse-primary",
];

module.exports = plugin(
  function ({ addUtilities, theme, e }) {
    const mdColors = colorScheme.reduce((acc, color) => {
      acc[`.bg-${color}`] = {
        "background-color": `rgba(var(--md-light-${color}-rgb), var(--tw-bg-opacity, 1))`,
      };
      acc[`.dark .bg-${color}`] = {
        "background-color": `rgba(var(--md-dark-${color}-rgb), var(--tw-bg-opacity, 1))`,
      };

      acc[`.text-${color}`] = {
        color: `rgba(var(--md-light-${color}-rgb), var(--tw-text-opacity, 1))`,
      };
      acc[`.dark .text-${color}`] = {
        color: `rgba(var(--md-dark-${color}-rgb), var(--tw-text-opacity, 1))`,
      };

      return acc;
    }, {});

    addUtilities(mdColors, ["responsive", "hover", "focus"]);

    const heights = theme("height");

    const subtractRules = Object.keys(heights).reduce((acc, key) => {
      const originalValue = heights[key];
      acc[`.${e(`h-dvh-subtract-${key}`)}`] = {
        height: `calc(100dvh - ${originalValue})`,
      };
      return acc;
    }, {});

    addUtilities(subtractRules, { variants: ["responsive"] });
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
