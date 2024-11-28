import React from "react";
import { ClientRender } from "./client-render";

export interface MDProviderProps {
  children: React.ReactNode;
}

export const MDProvider: React.FC<MDProviderProps> = ({ children }) => {
  return (
    <>
      <ClientRender />
      {children}
    </>
  );
};
