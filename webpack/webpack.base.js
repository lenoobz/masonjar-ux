/**
 * Create by Le Trong on 10/Feb/2019
 */

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../src');
const BUILD_DIR = path.resolve(__dirname, '../public');

module.exports = {
  entry: { index: `${APP_DIR}/index.js` },
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
    publicPath: '/'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      Actions: path.resolve(__dirname, '../src/actions/'),
      Components: path.resolve(__dirname, '../src/components/'),
      Configs: path.resolve(__dirname, '../src/configs/'),
      Constants: path.resolve(__dirname, '../src/constants/'),
      Containers: path.resolve(__dirname, '../src/containers/'),
      Reducers: path.resolve(__dirname, '../src/reducers/'),
      Routes: path.resolve(__dirname, '../src/routes/'),
      Stores: path.resolve(__dirname, '../src/stores/'),
      Styles: path.resolve(__dirname, '../src/styles/'),
      Utilities: path.resolve(__dirname, '../src/utilities/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-transform-async-to-generator'
              ]
            }
          },
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /(\.css|.scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: APP_DIR,
              outputPath: '/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      filename: '../public/index.html',
      hash: true
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/assets',
        to: 'assets'
      },
      {
        from: 'src/styles',
        to: 'styles'
      }
    ])
  ]
};
