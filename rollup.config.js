import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import tailwindcss from 'tailwindcss';
import { terser } from 'rollup-plugin-terser';

import tailwindConfig from './tailwind.config.js';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
  },
  plugins: [
    typescript(),
    postcss({
      plugins: [tailwindcss(tailwindConfig)],
      extract: true,
      minimize: true,
    }),
    nodeResolve(),
    commonjs(),
    terser(),
  ],
  external: ['react'],
};
