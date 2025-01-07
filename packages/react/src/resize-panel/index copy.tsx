import { cn } from "@nyanpasu/material-design-libs";
import { useSize } from "ahooks";
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
} from "framer-motion";
import React from "react";

type PanelContextType = {
  min: number;
  max: number;
  mvOffset: MotionValue<number>;
};

const PanelContext = React.createContext<PanelContextType | null>(null);

const usePanelContext = () => {
  const context = React.useContext(PanelContext);
  if (!context) {
    throw new Error("ResizePanel must be used inside a ResizeContainer");
  }
  return context;
};

export const ResizeContainer = ({
  min,
  max,
  children,
  className,
  ...props
}: HTMLMotionProps<"div"> & {
  min?: number;
  max?: number;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const size = useSize(containerRef);
  const containerWidth = React.useMemo(() => size?.width ?? 0, [size]);

  const resolvedMin = min ?? 0;
  const resolvedMax = max ?? (containerWidth > 0 ? containerWidth : 800);

  const mvOffset = useMotionValue(0);

  const value = React.useMemo(() => {
    console.log("ResizeContainer value", {
      min: resolvedMin,
      max: resolvedMax,
      mvOffset,
    });

    return {
      min: resolvedMin,
      max: resolvedMax,
      mvOffset,
    };
  }, [resolvedMin, resolvedMax, mvOffset]);

  return (
    <PanelContext.Provider value={value}>
      <AnimatePresence initial={false}>
        <motion.div
          ref={containerRef}
          className={cn(
            "relative flex h-full w-full overflow-hidden",
            className,
          )}
          {...props}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </PanelContext.Provider>
  );
};

ResizeContainer.displayName = "ResizeContainer";

export const ResizePanel = ({
  children,
  className,
  style,
  ...props
}: HTMLMotionProps<"div">) => {
  const { min, max, mvOffset } = usePanelContext();

  const mvWidth = useTransform(mvOffset, (offsetVal) => {
    const width = min + offsetVal;
    return Math.min(Math.max(width, min), max);
  });

  return (
    <motion.div
      className={cn("h-full flex-shrink-0", className)}
      style={{ ...style, width: mvWidth }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

ResizePanel.displayName = "ResizePanel";

export const ResizeHandle = ({
  className,
  ...props
}: HTMLMotionProps<"div">) => {
  const { min, max, mvOffset } = usePanelContext();

  const dragConstraints = React.useMemo(() => {
    return {
      left: 0,
      right: max - min,
    };
  }, [min, max]);

  return (
    <motion.div
      className={cn(
        "absolute top-0 z-10 h-full w-2 cursor-ew-resize opacity-0 bg-primary",
        "left-0",
        className,
      )}
      style={{ x: mvOffset }}
      drag="x"
      dragElastic={0.025}
      dragMomentum={false}
      dragConstraints={dragConstraints}
      variants={{
        active: {
          opacity: 1,
        },
      }}
      whileTap="active"
      whileHover="active"
      {...props}
    />
  );
};

ResizeHandle.displayName = "ResizeHandle";
