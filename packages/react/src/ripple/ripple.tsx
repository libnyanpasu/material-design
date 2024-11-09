"use client";

import {
  AnimatePresence,
  clamp,
  domAnimation,
  LazyMotion,
  motion,
} from "framer-motion";
import type { Key } from "react";

export type RippleConfig = {
  key: Key;
  x: number;
  y: number;
  size: number;
};

export interface RippleProps {
  ripples: RippleConfig[];
  onClear: (key: Key) => void;
}

export const Ripple = ({ ripples, onClear }: RippleProps) => {
  return ripples.map((ripple) => {
    const duration = clamp(
      ripple.size > 100 ? 0.75 : 0.5,
      0.01 * ripple.size,
      0.2,
    );

    return (
      <LazyMotion key={ripple.key} features={domAnimation}>
        <AnimatePresence mode="popLayout">
          <motion.span
            initial={{ transform: "scale(0)", opacity: 0.35 }}
            animate={{ transform: "scale(2)", opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration }}
            style={{
              position: "absolute",
              backgroundColor: "#000",
              borderRadius: "100%",
              transformOrigin: "center",
              pointerEvents: "none",
              overflow: "hidden",
              inset: 0,
              zIndex: 0,
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
