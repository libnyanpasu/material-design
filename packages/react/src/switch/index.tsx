import {
  switchThumbVariants,
  switchVariants,
} from "@libnyanpasu/material-design-components";
import { cn } from "@libnyanpasu/material-design-libs";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import React from "react";

export const Switch = ({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitives.Root>) => {
  return (
    <SwitchPrimitives.Root
      className={cn(switchVariants(), className)}
      {...props}
    >
      <SwitchPrimitives.Thumb className={cn(switchThumbVariants())} />
    </SwitchPrimitives.Root>
  );
};
