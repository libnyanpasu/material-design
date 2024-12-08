import { tcva, type VariantProps } from "@nyanpasu/material-design-libs";

export const inputContainerVariants = tcva(
  [
    "relative box-border inline-flex w-full flex-auto items-baseline overflow-hidden",
    "rounded-t px-4 bg-surface-variant",
  ],
  {
    variants: {
      haveLabel: {
        true: "pb-2 pt-6",
        false: "py-4",
      },
    },
    defaultVariants: {
      haveLabel: false,
    },
  },
);

export type InputContainerVariants = VariantProps<
  typeof inputContainerVariants
>;

export const inputVariants = tcva([
  "peer w-full border-none bg-transparent p-0 placeholder-transparent outline-none",
]);

export type InputVariants = VariantProps<typeof inputVariants>;

export const inputLabelVariants = tcva(
  [
    "absolute inset-x-4 top-4",
    "pointer-events-none text-base text-opacity-70 transition-all duration-200 text-on-primary-container",
    "peer-focus:top-2 peer-focus:text-xs peer-focus:text-opacity-100 peer-focus:text-primary",
  ],
  {
    variants: {
      haveValue: {
        true: "top-2 text-xs",
        false: "",
      },
    },
    defaultVariants: {
      haveValue: false,
    },
  },
);

export type InputLabelVariants = VariantProps<typeof inputLabelVariants>;

export const inputLineVariants = tcva([
  "absolute inset-x-0 bottom-0 w-full border-b border-on-primary-container",
  "transition-all duration-200 peer-focus:border-b-0",
  "after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:scale-x-0 after:border-b-2 after:opacity-0 after:content-['']",
  "after:transition-all after:duration-200 after:border-primary after:peer-focus:scale-x-100 after:peer-focus:opacity-100",
]);
