import createPlugin from "tailwindcss/plugin";

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

const opacitys = [0, 5, 10, 15, 20, 25, 30, 50, 60, 75, 80, 85, 90, 95, 100];

const color = ({ addUtilities }) => {
  const mdColors = colorScheme.reduce((acc, color) => {
    acc[`.bg-${color}`] = {
      "background-color": `rgb(var(--md-light-${color}-rgb))`,
    };
    acc[`.dark .bg-${color}`] = {
      "background-color": `rgb(var(--md-dark-${color}-rgb))`,
    };

    opacitys.forEach((opacity) => {
      acc[`.bg-${color}/${opacity}`] = {
        "background-color": `rgba(var(--md-light-${color}-rgb), ${opacity / 100})`,
      };
      acc[`.dark .bg-${color}/${opacity}`] = {
        "background-color": `rgba(var(--md-dark-${color}-rgb), ${opacity / 100})`,
      };
    });

    acc[`.text-${color}`] = {
      color: `rgb(var(--md-light-${color}-rgb))`,
    };
    acc[`.dark .text-${color}`] = {
      color: `rgb(var(--md-dark-${color}-rgb))`,
    };

    opacitys.forEach((opacity) => {
      acc[`.text-${color}/${opacity}`] = {
        color: `rgba(var(--md-light-${color}-rgb), ${opacity / 100})`,
      };
      acc[`.dark .text-${color}/${opacity}`] = {
        color: `rgba(var(--md-dark-${color}-rgb), ${opacity / 100})`,
      };
    });

    ["stroke", "fill"].forEach((property) => {
      acc[`.${property}-${color}`] = {
        [property]: `rgb(var(--md-light-${color}-rgb))`,
      };
      acc[`.dark .${property}-${color}`] = {
        [property]: `rgb(var(--md-dark-${color}-rgb))`,
      };

      opacitys.forEach((opacity) => {
        acc[`.${property}-${color}/${opacity}`] = {
          [property]: `rgba(var(--md-light-${color}-rgb), ${opacity / 100})`,
        };
        acc[`.dark .${property}-${color}/${opacity}`] = {
          [property]: `rgba(var(--md-dark-${color}-rgb), ${opacity / 100})`,
        };
      });
    });

    acc[`.border-${color}`] = {
      "border-color": `rgb(var(--md-light-${color}-rgb))`,
    };
    acc[`.dark .border-${color}`] = {
      "border-color": `rgb(var(--md-dark-${color}-rgb))`,
    };

    opacitys.forEach((opacity) => {
      acc[`.border-${color}/${opacity}`] = {
        "border-color": `rgba(var(--md-light-${color}-rgb), ${opacity / 100})`,
      };
      acc[`.dark .border-${color}/${opacity}`] = {
        "border-color": `rgba(var(--md-dark-${color}-rgb), ${opacity / 100})`,
      };
    });

    acc[`.bg-transparent-fallback-${color}`] = {
      "background-color": "transparent",
      "--fallback-bg": `rgb(var(--md-light-${color}-rgb))`,
    };
    acc[`.dark .bg-transparent-fallback-${color}`] = {
      "background-color": "transparent",
      "--fallback-bg": `rgb(var(--md-dark-${color}-rgb))`,
    };

    return acc;
  }, {});

  const fallbackUtility = {
    ".bg-inherit-allow-fallback": {
      "background-color": "var(--fallback-bg, inherit)",
    },
  };

  addUtilities({
    ...mdColors,
    ...fallbackUtility,
  });
};

const subtract = ({ addUtilities, theme }) => {
  const heights = theme("height");
  const subtractRules = Object.keys(heights).reduce((acc, key) => {
    const originalValue = heights[key];
    acc[`.h-dvh-subtract-${key}`] = {
      height: `calc(100dvh - ${originalValue})`,
    };
    return acc;
  }, {});
  addUtilities(subtractRules);
};

export default createPlugin(
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
        strokeOpacity: {
          DEFAULT: "1",
          0: "0",
          25: "0.25",
          50: "0.5",
          75: "0.75",
          100: "1",
        },
        fillOpacity: {
          DEFAULT: "1",
          0: "0",
          25: "0.25",
          50: "0.5",
          75: "0.75",
          100: "1",
        },
        boxShadow: {
          container:
            "0px 2px 1px -1px rgba(0, 0, 0, .2)" +
            ",0px 1px 1px 0px rgba(0, 0, 0, .14)" +
            ",0px 1px 3px 0px rgba(0, 0, 0, .12)",
          "container-lg":
            "0px 3px 3px -2px rgba(0, 0, 0, .2)" +
            ",0px 3px 4px 0px rgba(0, 0, 0, .14)" +
            ",0px 1px 8px 0px rgba(0, 0, 0, .12)",
          "container-xl":
            "0px 3px 5px -1px rgba(0, 0, 0, .2)" +
            ",0px 6px 10px 0px rgba(0, 0, 0, .14)" +
            ",0px 1px 18px 0px rgba(0, 0, 0, .12)",
          "container-2xl":
            "0px 5px 5px -3px rgba(0, 0, 0, .2)" +
            ",0px 8px 10px 1px rgba(0, 0, 0, .14)" +
            ",0px 3px 14px 2px rgba(0, 0, 0, .12)",
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
