import React from "react";
import { useTheme } from "../hooks";

export const ClientRender = ({ children }: { children: React.ReactNode }) => {
  useTheme();

  return children;
};
