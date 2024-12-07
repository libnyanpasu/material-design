import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";
import dts from "rollup-plugin-dts";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { SourceMapConsumer, SourceMapGenerator } from "source-map";

const addUseClient = () => ({
  name: "add-use-client",
  renderChunk(code, chunk, options) {
    const newCode = `'use client';\n${code}`;
    const offset = newCode.split("\n").length - code.split("\n").length;

    if (options.sourcemap && chunk.map) {
      const consumer = new SourceMapConsumer(chunk.map);
      const generator = SourceMapGenerator.fromSourceMap(consumer);
      generator.addMapping({
        source: chunk.fileName,
        original: { line: 1, column: 0 },
        generated: { line: offset, column: 0 },
      });
      const newMap = generator.toJSON();
      return { code: newCode, map: newMap };
    }

    return { code: newCode, map: null };
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
