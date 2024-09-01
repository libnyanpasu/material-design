import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(["class-button"], {
  variants: {
    variant: {
      elevated: "elevated",
      filled: "filled",
      filledTonal: "filledTonal",
      outlined: "outlined",
      text: "text",
    },
    disabled: {
      true: "",
      false: "",
    },
  },
  defaultVariants: {
    variant: "filled",
    disabled: false,
  },
});

export interface ButtonVariantsProps
  extends VariantProps<typeof buttonVariants> {}
