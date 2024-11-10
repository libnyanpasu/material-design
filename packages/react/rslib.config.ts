import { pluginReact } from "@rsbuild/plugin-react";
import { defineConfig } from "@rslib/core";

export default defineConfig({
  lib: [
    {
      format: "esm",
      syntax: "es2021",
      dts: true,
    },
    {
      format: "cjs",
      syntax: "es2021",
    },
  ],
  output: {
    target: "web",
  },
  plugins: [pluginReact()],
});
