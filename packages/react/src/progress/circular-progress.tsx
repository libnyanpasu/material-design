import { cn } from "@nyanpasu/material-design-libs";
import React from "react";
import { Circle, CircleSVG } from "./circle";

const HalfCircle = (
  props: Omit<React.ComponentProps<typeof Circle>, "value">,
) => {
  return <Circle value={50} {...props} />;
};

const HalfCircleSVG = ({
  className,
  ...props
}: React.ComponentProps<typeof CircleSVG>) => {
  return <CircleSVG className={cn("w-full-2", className)} {...props} />;
};

const HalfCircleContainer = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "relative inline-flex h-full w-1/2 overflow-hidden",
        className,
      )}
      {...props}
    />
  );
};

export const CircularProgress = ({
  value,
  indeterminate,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  indeterminate?: boolean;
  value?: number;
}) => {
  return (
    <div
      className={cn("relative size-12 overflow-hidden", className)}
      {...props}
    >
      {indeterminate ? (
        <div className="absolute h-full w-full animate-spin">
          <div className="animate-progress-spin absolute h-full w-full">
            {/* left */}
            <HalfCircleContainer>
              <HalfCircleSVG className="animate-progress-spin-left">
                <HalfCircle />
              </HalfCircleSVG>
            </HalfCircleContainer>

            {/* right */}
            <HalfCircleContainer>
              <HalfCircleSVG className="animate-progress-spin-right -left-full">
                <HalfCircle />
              </HalfCircleSVG>
            </HalfCircleContainer>
          </div>
        </div>
      ) : (
        <div className="absolute h-full w-full -rotate-90">
          <CircleSVG>
            <Circle className="transition-all" value={value ?? 100} />
          </CircleSVG>
        </div>
      )}

      {children && (
        <div className="absolute inset-0 flex items-center justify-center text-xs">
          {children}
        </div>
      )}
    </div>
  );
};
