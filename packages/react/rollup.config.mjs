import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";
import dts from "rollup-plugin-dts";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

const globals = { react: "React" };

export default defineConfig([
  {
    input: "src/index.ts",
    output: {
      dir: "dist/cjs",
      format: "cjs",
      sourcemap: true,
      globals,
      preserveModules: true,
      preserveModulesRoot: "src",
    },
    plugins: [
      external(),
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        compilerOptions: {
          outDir: "dist/cjs",
          declarationDir: "dist/cjs",
        },
      }),
      postcss(),
    ],
  },
  {
    input: "src/index.ts",
    output: {
      dir: "dist/esm",
      format: "esm",
      sourcemap: true,
      globals,
      preserveModules: true,
      preserveModulesRoot: "src",
    },
    plugins: [
      external(),
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        compilerOptions: {
          outDir: "dist/esm",
          declarationDir: "dist/esm",
        },
      }),
      postcss(),
    ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
  },
]);
