import { tcva, type VariantProps } from "@libnyanpasu/material-design-libs";
import {
  selectLineVariants,
  selectTriggerVariants,
  selectValuePlaceholderFieldsetVariants,
  selectValuePlaceholderLegendVariants,
  selectValuePlaceholderVariants,
} from "../select";

export const inputContainerVariants = selectTriggerVariants;

export type InputContainerVariants = VariantProps<
  typeof inputContainerVariants
>;

export const inputVariants = tcva(
  [
    "peer",
    "w-full border-none p-0",
    "bg-transparent placeholder-transparent outline-hidden",
  ],
  {
    variants: {
      variant: {
        filled: "",
        outlined: "",
      },
      haveValue: {
        true: "",
        false: "",
      },
      haveLabel: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "filled",
        haveValue: true,
        haveLabel: true,
        className: "mt-3",
      },
    ],
    defaultVariants: {
      variant: "filled",
      haveValue: false,
      haveLabel: false,
    },
  },
);

export type InputVariants = VariantProps<typeof inputVariants>;

export const inputLabelVariants = selectValuePlaceholderVariants;

export type InputLabelVariants = VariantProps<typeof inputLabelVariants>;

export const inputLineVariants = selectLineVariants;

export type InputLineVariants = VariantProps<typeof inputLineVariants>;

export const inputLabelFieldsetVariants =
  selectValuePlaceholderFieldsetVariants;

export type InputLabelFieldsetVariants = VariantProps<
  typeof inputLabelFieldsetVariants
>;

export const inputLabelLegendVariants = selectValuePlaceholderLegendVariants;

export type InputLabelLegendVariants = VariantProps<
  typeof inputLabelLegendVariants
>;
