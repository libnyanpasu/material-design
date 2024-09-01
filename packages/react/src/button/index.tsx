import {
  buttonVariants,
  ButtonVariantsProps,
} from "@nyanpasu/material-design-components";
import { cn } from "@nyanpasu/material-design-libs";
import { Slot } from "@radix-ui/react-slot";
import React from "react";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    ButtonVariantsProps {
  asChild?: boolean;
}

export const Button = ({
  asChild,
  variant,
  disabled,
  className,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, disabled }), className)}
      {...props}
    />
  );
};
