import createPlugin from "tailwindcss/plugin";

// define by user
const CUSTOM_COLOR_SEED_CSS_VARIABLE = "--md-custom-color-seed";
const COLOR_SEED_CSS_VARIABLE = "--md-color-seed";
const DEFAULT_SEED_COLOR = "oklch(0.5 0.20 256)";

const CSS_COLOR_SCHEMA = {
  primary: {
    light: `var(${COLOR_SEED_CSS_VARIABLE})`,
    dark: `color-mix(in oklch, var(${COLOR_SEED_CSS_VARIABLE}) 60%, white 40%)`,
  },
  "primary-container": {
    light: "color-mix(in oklch, var(--md-light-primary) 80%, white 20%)",
    dark: "color-mix(in oklch, var(--md-dark-primary) 30%, black 70%)",
  },
  "on-primary": {
    light: "color-contrast(var(--md-light-primary) vs white, black)",
    dark: "color-contrast(var(--md-dark-primary) vs white, black)",
  },
  "on-primary-container": {
    light: "color-contrast(var(--md-light-primary-container) vs white, black)",
    dark: "color-contrast(var(--md-dark-primary-container) vs white, black)",
  },
  secondary: {
    light: `color-mix(in oklch, var(${COLOR_SEED_CSS_VARIABLE}) 60%, white 40%)`,
    dark: `color-mix(in oklch, var(${COLOR_SEED_CSS_VARIABLE}) 40%, white 60%)`,
  },
  "secondary-container": {
    light: "color-mix(in oklch, var(--md-light-secondary) 80%, white 20%)",
    dark: "color-mix(in oklch, var(--md-dark-secondary) 20%, black 80%)",
  },
  "on-secondary": {
    light: "color-contrast(var(--md-light-secondary) vs white, black)",
    dark: "color-contrast(var(--md-dark-secondary) vs white, black)",
  },
  "on-secondary-container": {
    light:
      "color-contrast(var(--md-light-secondary-container) vs white, black)",
    dark: "color-contrast(var(--md-dark-secondary-container) vs white, black)",
  },
  tertiary: {
    light: `color-mix(in oklch, var(${COLOR_SEED_CSS_VARIABLE}) 40%, white 60%)`,
    dark: `color-mix(in oklch, var(${COLOR_SEED_CSS_VARIABLE}) 20%, white 80%)`,
  },
  "tertiary-container": {
    light: "color-mix(in oklch, var(--md-light-tertiary) 80%, white 20%)",
    dark: "color-mix(in oklch, var(--md-dark-tertiary) 10%, black 90%)",
  },
  "on-tertiary": {
    light: "color-contrast(var(--md-light-tertiary) vs white, black)",
    dark: "color-contrast(var(--md-dark-tertiary) vs white, black)",
  },
  "on-tertiary-container": {
    light: "color-contrast(var(--md-light-tertiary-container) vs white, black)",
    dark: "color-contrast(var(--md-dark-tertiary-container) vs white, black)",
  },
  background: {
    light: "oklch(98% 0 0)",
    dark: "oklch(20% 0 0)",
  },
  surface: {
    light: "oklch(98% 0 0)",
    dark: "oklch(20% 0 0)",
  },
  "on-background": {
    light: "color-contrast(var(--md-light-background) vs white, black)",
    dark: "color-contrast(var(--md-dark-background) vs white, black)",
  },
  "on-surface": {
    light: "color-contrast(var(--md-light-surface) vs white, black)",
    dark: "color-contrast(var(--md-dark-surface) vs white, black)",
  },
  error: {
    light: "oklch(62% 0.257 29)",
    dark: "oklch(70% 0.2 29)",
  },
  "error-container": {
    light: "oklch(90% 0.1 29)",
    dark: "oklch(40% 0.15 29)",
  },
  "on-error": {
    light: "color-contrast(var(--md-light-error) vs white, black)",
    dark: "color-contrast(var(--md-dark-error) vs white, black)",
  },
  "on-error-container": {
    light: "color-contrast(var(--md-light-error-container) vs white, black)",
    dark: "color-contrast(var(--md-dark-error-container) vs white, black)",
  },
  shadow: {
    light: "rgba(0, 0, 0, 0.25)",
    dark: "rgba(0, 0, 0, 0.25)",
  },
  scrim: {
    light: "rgba(0, 0, 0, 0.5)",
    dark: "rgba(0, 0, 0, 0.5)",
  },
};

const themeVars = ({ addBase }) => {
  addBase({
    ":root": {
      [COLOR_SEED_CSS_VARIABLE]: `var(${CUSTOM_COLOR_SEED_CSS_VARIABLE}, ${DEFAULT_SEED_COLOR})`,
      // Generate CSS variables
      ...Object.fromEntries(
        Object.entries(CSS_COLOR_SCHEMA).flatMap(([color, modes]) =>
          Object.entries(modes).map(([mode, value]) => [
            `--md-${mode}-${color}`,
            value,
          ]),
        ),
      ),
    },
  });
};

const opacitys = [0, 5, 10, 15, 20, 25, 30, 50, 60, 75, 80, 85, 90, 95, 100];

const color = ({ addUtilities }) => {
  const mdColors = Object.keys(CSS_COLOR_SCHEMA).reduce((acc, color) => {
    acc[`.bg-${color}`] = {
      "background-color": `var(--md-light-${color})`,
    };
    acc[`.dark .bg-${color}`] = {
      "background-color": `var(--md-dark-${color})`,
    };

    opacitys.forEach((opacity) => {
      acc[`.bg-${color}/${opacity}`] = {
        "background-color": `color-mix(in oklch, var(--md-light-${color}) ${opacity}%, transparent)`,
      };
      acc[`.dark .bg-${color}/${opacity}`] = {
        "background-color": `color-mix(in oklch, var(--md-dark-${color}) ${opacity}%, transparent)`,
      };
    });

    acc[`.text-${color}`] = {
      color: `var(--md-light-${color})`,
    };
    acc[`.dark .text-${color}`] = {
      color: `var(--md-dark-${color})`,
    };

    opacitys.forEach((opacity) => {
      acc[`.text-${color}/${opacity}`] = {
        color: `color-mix(in oklch, var(--md-light-${color}) ${opacity}%, transparent)`,
      };
      acc[`.dark .text-${color}/${opacity}`] = {
        color: `color-mix(in oklch, var(--md-dark-${color}) ${opacity}%, transparent)`,
      };
    });

    ["stroke", "fill"].forEach((property) => {
      acc[`.${property}-${color}`] = {
        [property]: `var(--md-light-${color})`,
      };
      acc[`.dark .${property}-${color}`] = {
        [property]: `var(--md-dark-${color})`,
      };

      opacitys.forEach((opacity) => {
        acc[`.${property}-${color}/${opacity}`] = {
          [property]: `color-mix(in oklch, var(--md-light-${color}) ${opacity}%, transparent)`,
        };
        acc[`.dark .${property}-${color}/${opacity}`] = {
          [property]: `color-mix(in oklch, var(--md-dark-${color}) ${opacity}%, transparent)`,
        };
      });
    });

    acc[`.border-${color}`] = {
      "border-color": `var(--md-light-${color})`,
    };
    acc[`.dark .border-${color}`] = {
      "border-color": `var(--md-dark-${color})`,
    };

    opacitys.forEach((opacity) => {
      acc[`.border-${color}/${opacity}`] = {
        "border-color": `color-mix(in oklch, var(--md-light-${color}) ${opacity}%, transparent)`,
      };
      acc[`.dark .border-${color}/${opacity}`] = {
        "border-color": `color-mix(in oklch, var(--md-dark-${color}) ${opacity}%, transparent)`,
      };
    });

    acc[`.bg-transparent-fallback-${color}`] = {
      "background-color": "transparent",
      "--fallback-bg": `var(--md-light-${color})`,
    };
    acc[`.dark .bg-transparent-fallback-${color}`] = {
      "background-color": "transparent",
      "--fallback-bg": `var(--md-dark-${color})`,
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

    acc[`.max-h-dvh-subtract-${key}`] = {
      "max-height": `calc(100dvh - ${originalValue})`,
    };

    acc[`.min-h-dvh-subtract-${key}`] = {
      "min-height": `calc(100dvh - ${originalValue})`,
    };

    return acc;
  }, {});

  addUtilities(subtractRules);
};

const textShadow = ({ addUtilities }) => {
  const defaultShadows = {
    ".text-shadow-none": {
      "text-shadow": "none",
    },
    ".text-shadow-sm": {
      "text-shadow": "0px 1px 1px rgba(0, 0, 0, 0.14)",
    },
    ".text-shadow": {
      "text-shadow": "0px 2px 2px rgba(0, 0, 0, 0.14)",
    },
    ".text-shadow-md": {
      "text-shadow": "0px 3px 3px rgba(0, 0, 0, 0.14)",
    },
    ".text-shadow-lg": {
      "text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.14)",
    },
    ".text-shadow-xl": {
      "text-shadow": "0px 6px 6px rgba(0, 0, 0, 0.14)",
    },
    ".text-shadow-2xl": {
      "text-shadow": "0px 8px 8px rgba(0, 0, 0, 0.14)",
    },
  };

  const coloredShadows = Object.keys(CSS_COLOR_SCHEMA).reduce((acc, color) => {
    acc[`.text-shadow-${color}`] = {
      "text-shadow": `0px 2px 2px color-mix(in oklch, var(--md-light-${color}) 14%, transparent)`,
    };
    acc[`.dark .text-shadow-${color}`] = {
      "text-shadow": `0px 2px 2px color-mix(in oklch, var(--md-dark-${color}) 14%, transparent)`,
    };

    ["sm", "md", "lg", "xl", "2xl"].forEach((size, index) => {
      const pixelSize = [1, 3, 4, 6, 8][index];
      acc[`.text-shadow-${size}-${color}`] = {
        "text-shadow": `0px ${pixelSize}px ${pixelSize}px color-mix(in oklch, var(--md-light-${color}) 14%, transparent)`,
      };
      acc[`.dark .text-shadow-${size}-${color}`] = {
        "text-shadow": `0px ${pixelSize}px ${pixelSize}px color-mix(in oklch, var(--md-dark-${color}) 14%, transparent)`,
      };
    });

    //Opacity variants
    opacitys.forEach((opacity) => {
      acc[`.text-shadow-${color}/${opacity}`] = {
        "text-shadow": `0px 2px 2px color-mix(in oklch, var(--md-light-${color}) ${opacity}%, transparent)`,
      };
      acc[`.dark .text-shadow-${color}/${opacity}`] = {
        "text-shadow": `0px 2px 2px color-mix(in oklch, var(--md-dark-${color}) ${opacity}%, transparent)`,
      };
    });

    return acc;
  }, {});

  addUtilities({
    ...defaultShadows,
    ...coloredShadows,
  });
};

export default createPlugin(
  (api) => {
    themeVars(api);
    color(api);
    subtract(api);
    textShadow(api);
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
