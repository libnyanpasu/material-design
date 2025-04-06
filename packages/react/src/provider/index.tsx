import { insertStyle } from "@libnyanpasu/material-design-libs";
import React from "react";

const ThemeContext = React.createContext<{
  color?: string;
  changeColor: (color?: string) => void;
} | null>(null);

export const useTheme = () => {
  const context = React.useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a MDProvider");
  }

  return context;
};

export interface MDProviderProps {
  children: React.ReactNode;
  color?: string;
}

export const MDProvider = ({ children, ...props }: MDProviderProps) => {
  const [color, setColor] = React.useState<string | undefined>(props.color);

  React.useEffect(() => {
    if (color) {
      insertStyle("material-theme", color);
    }
  }, [color]);

  return (
    <ThemeContext.Provider
      value={{
        color,
        changeColor: setColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
