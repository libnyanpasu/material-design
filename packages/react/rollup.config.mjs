import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";
import dts from "rollup-plugin-dts";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

const addUseClient = () => ({
  name: "add-use-client",
  renderChunk(code) {
    return `'use client';\n${code}`;
  },
});

const globals = { react: "React" };

export default defineConfig([
  {
    input: "src/index.ts",
    output: {
      dir: "dist/cjs",
      format: "cjs",
      exports: "named",
      sourcemap: true,
      globals,
      preserveModules: true,
      preserveModulesRoot: "src",
    },
    plugins: [
      external(),
      nodeResolve(),
      commonjs(),
      postcss(),
      addUseClient(),
      typescript({
        tsconfig: "./tsconfig.json",
        compilerOptions: {
          outDir: "dist/cjs",
          declarationDir: "dist/cjs",
        },
      }),
    ],
  },
  {
    input: "src/index.ts",
    output: {
      dir: "dist/esm",
      format: "esm",
      exports: "named",
      sourcemap: true,
      globals,
      preserveModules: true,
      preserveModulesRoot: "src",
    },
    plugins: [
      external(),
      nodeResolve(),
      commonjs(),
      postcss(),
      addUseClient(),
      typescript({
        tsconfig: "./tsconfig.json",
        compilerOptions: {
          outDir: "dist/esm",
          declarationDir: "dist/esm",
        },
      }),
    ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
  },
]);
