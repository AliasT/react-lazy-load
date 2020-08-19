import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
const rollupTypescript = require("@rollup/plugin-typescript");

export default {
  input: "src/LazyLoad.tsx",
  output: {
    dir: "lib",
    name: "LazyLoad",
    // file: "lib/LazyLoad.js",
    format: "umd",
  },
  plugins: [
    rollupTypescript(),
    resolve(),
    commonjs(),
  ],
  external: [
    "react",
    "react-dom",
    "prop-types",
    "styled-components"
  ]
};
