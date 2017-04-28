const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const pkg = require('./package');

const now = new Date();

export default {
  entry: 'src/index.js',
  targets: [
    {
      dest: 'dist/vue-qrcode.js',
    },
    {
      dest: 'dist/vue-qrcode.common.js',
      format: 'cjs',
    },
    {
      dest: 'dist/vue-qrcode.esm.js',
      format: 'es',
    },
    {
      dest: 'docs/js/vue-qrcode.js',
    },
  ],
  format: 'umd',
  moduleName: 'VueQrcode',
  plugins: [
    nodeResolve({
      jsnext: true,
    }),
    commonjs(),
    babel(),
  ],
  banner: `/*!
 * vue-qrcode v${pkg.version}
 * https://github.com/${pkg.repository}
 *
 * Copyright (c) ${now.getFullYear()} ${pkg.author}
 * Released under the ${pkg.license} license
 *
 * Date: ${now.toISOString()}
 */
`,
};
