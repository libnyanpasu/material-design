"use client";

import { useCallback, useState } from "react";
import type { Key, MouseEvent } from "react";
import type { RippleConfig } from "./ripple";

export const useRipple = () => {
  const [ripples, setRipples] = useState<RippleConfig[]>([]);

  const onClick = useCallback((e: MouseEvent) => {
    const target = e.currentTarget;

    const size = Math.max(target.clientWidth, target.clientHeight);
    const rect = target.getBoundingClientRect();

    setRipples((prev) => [
      ...prev,
      {
        key: new Date().getTime(),
        size,
        x: e.clientX - rect.left - size / 2,
        y: e.clientY - rect.top - size / 2,
      },
    ]);
  }, []);

  const onClear = useCallback((key: Key) => {
    setRipples((prev) => prev.filter((ripple) => ripple.key !== key));
  }, []);

  return { ripples, onClick, onClear };
};
