import {
  buttonVariants,
  ButtonVariantsProps,
} from "@nyanpasu/material-design-components";
import { cn } from "@nyanpasu/material-design-libs";
import { Slot } from "@radix-ui/react-slot";
import { lazy, Suspense, type ButtonHTMLAttributes } from "react";
import { useRipple } from "../ripple";
import { chains } from "../utils/chian";

const Ripple = lazy(() => import("../ripple/ripple"));

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

  const ripple = !disabled ? useRipple() : null;

  return (
    <Comp
      className={cn(buttonVariants({ variant, disabled }), className)}
      onClick={ripple ? chains(ripple.onClick, props.onClick) : props.onClick}
      {...props}
    >
      {children}

      {ripple && (
        <Suspense>
          <Ripple ripples={ripple.ripples} onClear={ripple.onClear} />
        </Suspense>
      )}
    </Comp>
  );
};

export { buttonVariants };

export type { ButtonVariantsProps };
