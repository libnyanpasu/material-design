import type { ReactNode } from "react";
import { ClientRender } from "./client-render";

export interface MDProviderProps {
  children: ReactNode;
}

export const MDProvider: React.FC<MDProviderProps> = ({ children }) => {
  return (
    <>
      <ClientRender />
      {children}
    </>
  );
};
