/**
 * Create by Le Trong on 10/Feb/2019
 */

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const APP_DIR = path.resolve(process.cwd(), './src');
const BUILD_DIR = path.resolve(process.cwd(), './public');

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
      Actions: path.join(APP_DIR, '/actions/'),
      Components: path.join(APP_DIR, '/components/'),
      Configs: path.join(APP_DIR, '/configs/'),
      Constants: path.join(APP_DIR, '/constants/'),
      Containers: path.join(APP_DIR, '/containers/'),
      Reducers: path.join(APP_DIR, '/reducers/'),
      Routes: path.join(APP_DIR, '/routes/'),
      Stores: path.join(APP_DIR, '/stores/'),
      Styles: path.join(APP_DIR, '/styles/'),
      Utilities: path.join(APP_DIR, '/utilities/')
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
