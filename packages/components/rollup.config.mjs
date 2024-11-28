import { babel } from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";
import external from "rollup-plugin-peer-deps-external";

export default defineConfig([
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.esm.js",
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
      {
        file: "dist/index.cjs.js",
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      nodeResolve(),
      babel({
        babelHelpers: "inline",
      }),
      typescript(),
      // alias({
      //   entries: [
      //     { find: /^@\/(.*)/, replacement: fileURLToPath(new URL('../src/$1', import.meta.url)) },
      //   ],
      // }),
    ],
  },
]);
