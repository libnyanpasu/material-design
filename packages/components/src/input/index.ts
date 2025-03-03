import { tcva, type VariantProps } from "@libnyanpasu/material-design-libs";
import {
  selectLabelVariants,
  selectLineVariants,
  selectTriggerVariants,
} from "../select";

export const inputContainerVariants = tcva(
  [selectTriggerVariants.base, "py-0"],
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
  "peer w-full border-none bg-transparent p-0 placeholder-transparent outline-hidden",
]);

export type InputVariants = VariantProps<typeof inputVariants>;

export const inputLabelVariants = tcva(
  [
    selectLabelVariants.base,
    "peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary",
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
  selectLineVariants.base,
  "peer-focus:border-b-0",
  "after:peer-focus:scale-x-100 after:peer-focus:opacity-100",
]);

export type InputLineVariants = VariantProps<typeof inputLineVariants>;
