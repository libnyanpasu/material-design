import {
  buttonVariants,
  ButtonVariantsProps,
} from "@nyanpasu/material-design-components";
import { cn } from "@nyanpasu/material-design-libs";
import { Slot } from "@radix-ui/react-slot";
import React from "react";
import { useRipple } from "../ripple";
import { chains } from "../utils/chian";

const Ripple = React.lazy(() => import("../ripple/ripple"));

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    ButtonVariantsProps {
  asChild?: boolean;
}

export const Button = ({
  asChild,
  variant,
  disabled,
  icon,
  className,
  children,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  const ripple = disabled || asChild ? null : useRipple();

  return (
    <Comp
      className={cn(buttonVariants({ variant, disabled, icon }), className)}
      onClick={ripple ? chains(ripple.onClick, props.onClick) : props.onClick}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <>
          {children}

          {ripple && (
            <React.Suspense>
              <Ripple ripples={ripple.ripples} onClear={ripple.onClear} />
            </React.Suspense>
          )}
        </>
      )}
    </Comp>
  );
};

export { buttonVariants };

export type { ButtonVariantsProps };
