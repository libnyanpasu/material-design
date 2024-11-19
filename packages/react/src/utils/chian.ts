import React from "react";

export function chains<T extends React.SyntheticEvent>(
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
