const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const config = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  devServer: {
    // contentBase: path.join(__dirname, 'web/index.html'),
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // extensions: ['.js', '.jsx', '.tsx', '.ts'],
    alias: {
      'react-native$': 'react-native-web',
      // 'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    // new CopyPlugin({
    //   patterns: [{from: 'web/index.html'}],
    // }),
    new HtmlWebpackPlugin({
      appMountId: 'app',
      template: path.join(__dirname, '../index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
  ],
};

module.exports = config;
