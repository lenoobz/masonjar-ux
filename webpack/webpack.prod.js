/**
 * Create by Le Trong on 10/Feb/2019
 */

const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const BUILD_DIR = path.resolve(__dirname, './public');

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  }
});
