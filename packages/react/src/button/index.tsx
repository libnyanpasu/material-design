import {
  buttonVariants,
  ButtonVariantsProps,
} from "@nyanpasu/material-design-components";
import { cn } from "@nyanpasu/material-design-libs";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { useRipple } from "../ripple";
import { Ripple } from "../ripple/ripple";
import { chains } from "../utils/chian";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    ButtonVariantsProps {
  asChild?: boolean;
}

export const Button = ({
  asChild,
  variant,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  const {
    onClick: onRippleClickHandler,
    onClear,
    ripples,
  } = useRipple();

  return (
    <Comp
      className={cn(buttonVariants({ variant, disabled }), className)}
      onClick={chains(onRippleClickHandler, props.onClick)}
      {...props}
    >
      {children}

      <Ripple ripples={ripples} onClear={onClear} />
    </Comp>
  );
};

export { buttonVariants };

export type { ButtonVariantsProps };
