import { withThemeByClassName } from "@storybook/addon-themes";
import type { Decorator, Preview } from "@storybook/react";
import "./style.css";
import { MDProvider } from "@libnyanpasu/material-design-react";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators: Decorator[] = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
  (Story, context) => {
    const currentTheme = context.globals.theme || "light";
    const background = currentTheme === "dark" ? "#333" : "#fff";

    React.useEffect(() => {
      const originalBackground = document.body.style.backgroundColor;
      document.body.style.backgroundColor = background;
      return () => {
        document.body.style.backgroundColor = originalBackground;
      };
    }, [background]);

    return (
      <MDProvider>
        <Story />
      </MDProvider>
    );
  },
];

export default preview;
