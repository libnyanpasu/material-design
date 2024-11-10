import {
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
  type Scheme,
} from "@material/material-color-utilities";
import { kebabCase } from "lodash-es";
import { insertStyle } from "../utils/style";

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

const convertScheme = (scheme: Scheme) => {
  return Object.entries(scheme.toJSON()).reduce(
    (acc: { [key: string]: number }, [key, value]) => {
      const kebabKey = kebabCase(key);
      acc[kebabKey] = value;
      return acc;
    },
    {},
  );
};

const argbToRgba = (argb: number, withoutAlpha?: boolean) => {
  const hex = argb.toString(16).padStart(8, "0");

  const a = parseInt(hex.slice(0, 2), 16); // Alpha
  const r = parseInt(hex.slice(2, 4), 16); // Red
  const g = parseInt(hex.slice(4, 6), 16); // Green
  const b = parseInt(hex.slice(6, 8), 16); // Blue

  const alpha = (a / 255).toFixed(2);

  if (withoutAlpha) {
    return `${r}, ${g}, ${b}`;
  } else {
    return `${r}, ${g}, ${b}, ${alpha}`;
  }
};

const argbToRgb = (argb: number) => argbToRgba(argb, true);

export const createTheme = (colorInput: string) => {
  const materialColor = themeFromSourceColor(argbFromHex(colorInput));

  const light = convertScheme(materialColor.schemes.light);

  const dark = convertScheme(materialColor.schemes.dark);

  let style = `:root{`;

  for (const color of colorScheme) {
    style += `--md-light-${color}:${hexFromArgb(light[color])};`;
    style += `--md-light-${color}-rgb:${argbToRgb(light[color])};`;
  }

  for (const color of colorScheme) {
    style += `--md-dark-${color}:${hexFromArgb(dark[color])};`;
    style += `--md-dark-${color}-rgb:${argbToRgb(light[color])};`;
  }

  style += `}`;

  insertStyle("material-theme", style);
};
