import { tcva, type VariantProps } from "@nyanpasu/material-design-libs";
import { dropdownMenuLabelVariants } from "../dropdown-menu";

export const selectTriggerVariants = tcva([
  "relative box-border inline-flex w-full flex-auto items-baseline overflow-hidden",
  "rounded-t px-4 bg-surface-variant py-4 outline-none",
  "flex items-center justify-between h-14",
]);

export type SelectTriggerVariants = VariantProps<typeof selectTriggerVariants>;

export const selectLineVariants = tcva(
  [
    "absolute inset-x-0 bottom-0 w-full border-b border-on-primary-container",
    "transition-all duration-200",
    "after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:scale-x-0 after:border-b-2 after:opacity-0 after:content-['']",
    "after:transition-all after:duration-200 after:border-primary",
  ],
  {
    variants: {
      focus: {
        true: "border-b-0 after:scale-x-100 after:opacity-100",
        false: "",
      },
    },
    defaultVariants: {
      focus: false,
    },
  },
);

export type SelectLineVariants = VariantProps<typeof selectLineVariants>;

export const selectLabelVariants = tcva(
  [
    "absolute left-4 top-4",
    "pointer-events-none text-base text-opacity-70 transition-all duration-200 text-on-primary-container",
  ],
  {
    variants: {
      haveValue: {
        true: "top-2 text-xs",
        false: "",
      },
      focus: {
        true: "top-2 text-xs text-opacity-100 text-primary",
        false: "",
      },
    },
    defaultVariants: {
      haveValue: false,
      focus: false,
    },
  },
);

export type SelectLabelVariants = VariantProps<typeof selectLabelVariants>;

export const selectIconVariants = tcva(["absolute right-4"]);

export type SelectIconVariants = VariantProps<typeof selectIconVariants>;

export const selectContentVariants = tcva([
  "relative w-full overflow-hidden rounded-b shadow-container bg-inverse-on-surface",
]);

export type SelectContentVariants = VariantProps<typeof selectContentVariants>;

export const selectItemVariants = tcva([
  dropdownMenuLabelVariants.base,
  "cursor-pointer",
  "hover:bg-surface-variant data-[state=checked]:bg-primary-container",
]);

export type SelectItemVariants = VariantProps<typeof selectItemVariants>;
