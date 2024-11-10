import type { SyntheticEvent } from "react";

export function chains<T extends SyntheticEvent>(
  ...handlers: Array<((event: T) => void) | undefined>
) {
  return (event: T) => {
    handlers.forEach((handler) => {
      if (handler) {
        handler(event);
      }
    });
  };
}
