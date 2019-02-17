/**
 * Create by Le Trong on 10/Feb/2019
 */

const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 8080
  },
});
