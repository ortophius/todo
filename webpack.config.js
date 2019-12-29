const path = require('path');
const CssExtract = require('mini-css-extract-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const dist = 'dist';
const src = 'src';

module.exports = {
  entry: path.resolve(__dirname, src, 'index.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, dist),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react', '@babel/env'],
        }
      },
      {
        test: /\.scss$/,
        use: [CssExtract.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|eot|woff|woff2|ttf|svg)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new CssExtract({
      publicPath: path.resolve(__dirname, dist),
      filename: 'style.css',
    }),
    new HtmlPlugin({
      template: path.resolve(__dirname, src, 'index.html'),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, dist),
  },
};
