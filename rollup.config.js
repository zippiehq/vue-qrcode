const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const pkg = require('./package');

const now = new Date();

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/vue-qrcode.js',
      format: 'umd',
    },
    {
      file: 'dist/vue-qrcode.common.js',
      format: 'cjs',
    },
    {
      file: 'dist/vue-qrcode.esm.js',
      format: 'es',
    },
    {
      file: 'docs/js/vue-qrcode.js',
      format: 'umd',
    },
  ],
  name: 'VueQrcode',
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  banner: `/*!
 * vue-qrcode v${pkg.version}
 * https://github.com/${pkg.repository}
 *
 * Copyright (c) ${now.getFullYear()} Xkeshi
 * Released under the ${pkg.license} license
 *
 * Date: ${now.toISOString()}
 */
`,
};
