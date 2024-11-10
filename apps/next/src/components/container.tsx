"use client";

import type { HTMLAttributes } from "react";
import { cn } from "@/utils/class-names";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("rounded-2xl border-zinc-500 p-4 border-2/3", className)}
      {...props}
    />
  );
}
