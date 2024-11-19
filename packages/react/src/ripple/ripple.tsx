"use client";

import {
  AnimatePresence,
  clamp,
  domAnimation,
  LazyMotion,
  motion,
} from "framer-motion";
import React from "react";

export type RippleConfig = {
  key: React.Key;
  x: number;
  y: number;
  size: number;
};

export interface RippleProps {
  ripples: RippleConfig[];
  color?: string;
  onClear: (key: React.Key) => void;
}

export const Ripple = ({ ripples, color, onClear }: RippleProps) => {
  return ripples.map((ripple) => {
    const duration = clamp(
      ripple.size > 100 ? 0.6 : 0.4,
      0.01 * ripple.size,
      0.2,
    );

    return (
      <LazyMotion key={ripple.key} features={domAnimation}>
        <AnimatePresence mode="popLayout">
          <motion.span
            className="pointer-events-none absolute inset-0 z-0 origin-center overflow-hidden rounded-full"
            initial={{ transform: "scale(0)", opacity: 0.35 }}
            animate={{ transform: "scale(2)", opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration }}
            style={{
              backgroundColor: color ?? "currentColor",
              top: ripple.y,
              left: ripple.x,
              width: `${ripple.size}px`,
              height: `${ripple.size}px`,
            }}
            onAnimationComplete={() => {
              onClear(ripple.key);
            }}
          />
        </AnimatePresence>
      </LazyMotion>
    );
  });
};

export default Ripple;
