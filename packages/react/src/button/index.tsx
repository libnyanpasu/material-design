import {
  buttonVariants,
  ButtonVariantsProps,
} from "@libnyanpasu/material-design-components";
import { cn } from "@libnyanpasu/material-design-libs";
import { Slot } from "@radix-ui/react-slot";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { CircularProgress } from "../progress";
import { useRipple } from "../ripple";
import { chains } from "../utils/chian";

const Ripple = React.lazy(() => import("../ripple/ripple"));

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    ButtonVariantsProps {
  asChild?: boolean;
  loading?: boolean;
}

export const Button = ({
  loading,
  asChild,
  variant,
  disabled,
  icon,
  className,
  children,
  onClick,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  const ripple = disabled || asChild ? null : useRipple();

  const handleClick = disabled ? undefined : chains(onClick, ripple?.onClick);

  return (
    <Comp
      className={cn(
        buttonVariants({
          variant,
          disabled,
          icon,
        }),
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <>
          {children}

          <AnimatePresence initial={false}>
            {loading && (
              <motion.span
                className={cn(
                  "absolute inset-0 flex h-full w-full cursor-wait items-center justify-center",
                  "bg-inherit-allow-fallback",
                )}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <CircularProgress className="size-6" indeterminate />
              </motion.span>
            )}
          </AnimatePresence>

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
