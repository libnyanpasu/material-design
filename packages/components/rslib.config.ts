import { defineConfig, type LibConfig } from "@rslib/core";

const shared: LibConfig = {
  dts: {
    bundle: false,
  },
};

export default defineConfig({
  lib: [
    {
      ...shared,
      format: "esm",
      output: {
        distPath: {
          root: "./dist/esm",
          css: ".",
          cssAsync: ".",
        },
      },
    },
    {
      ...shared,
      format: "cjs",
      output: {
        distPath: {
          root: "./dist/cjs",
          css: ".",
          cssAsync: ".",
        },
      },
    },
  ],
  output: {
    target: "web",
  },
});
