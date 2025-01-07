import { createTheme } from "@nyanpasu/material-design-libs";
import React from "react";

const DEFAULT_COLOR = "#005cbb";

const ThemeContext = React.createContext<{
  color: string;
  changeColor: (color: string) => void;
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
  const [color, setColor] = React.useState<string>(
    props.color || DEFAULT_COLOR,
  );

  React.useEffect(() => {
    if (color) {
      createTheme(color);
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
