import { cn } from "@nyanpasu/material-design-libs";
import React from "react";

const BASE_STROKE_WIDTH = 10;
const BASE_SIZE = 100;

const getCircleRefence = (value: number) => {
  const radius = (BASE_SIZE - BASE_STROKE_WIDTH) / 2;
  const strokeDasharray = 2 * Math.PI * radius;
  const strokeDashoffset = (strokeDasharray * (100 - value)) / 100;

  return {
    radius,
    strokeDasharray,
    strokeDashoffset,
  };
};

export const Circle = ({
  value,
  className,
  style,
  ...props
}: React.ComponentProps<"circle"> & {
  value: number;
}) => {
  const { strokeDasharray, strokeDashoffset } = getCircleRefence(value);

  return (
    <circle
      className={cn("stroke-primary stroke-1/10 fill-transparent", className)}
      cx="50%"
      cy="50%"
      r="45"
      style={{
        strokeDasharray: `${strokeDasharray}px`,
        strokeDashoffset: `${strokeDashoffset}px`,
        ...style,
      }}
      {...props}
    />
  );
};

export const CircleSVG = ({
  className,
  ...props
}: React.ComponentProps<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("stroke-primary absolute h-full w-full", className)}
      focusable="false"
      viewBox={`0 0 ${BASE_SIZE} ${BASE_SIZE}`}
      {...props}
    />
  );
};
