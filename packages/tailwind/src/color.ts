import type { PluginAPI } from "tailwindcss/types/config";
import { colorScheme } from "./scheme";

export const color = ({ addUtilities }: PluginAPI) => {
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

    acc[`.stroke-${color}`] = {
      stroke: `rgba(var(--md-light-${color}-rgb), var(--tw-stroke-opacity, 1))`,
    };
    acc[`.dark .stroke-${color}`] = {
      stroke: `rgba(var(--md-dark-${color}-rgb), var(--tw-stroke-opacity, 1))`,
    };

    acc[`.fill-${color}`] = {
      fill: `rgba(var(--md-light-${color}-rgb), var(--tw-fill-opacity, 1))`,
    };
    acc[`.dark .fill-${color}`] = {
      fill: `rgba(var(--md-dark-${color}-rgb), var(--tw-fill-opacity, 1))`,
    };

    acc[`.border-${color}`] = {
      "border-color": `rgba(var(--md-light-${color}-rgb), var(--tw-border-opacity, 1))`,
    };
    acc[`.dark .border-${color}`] = {
      "border-color": `rgba(var(--md-dark-${color}-rgb), var(--tw-border-opacity, 1))`,
    };

    return acc;
  }, {});

  addUtilities(mdColors);
};
