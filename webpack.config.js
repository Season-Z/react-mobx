const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash:8].js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    host: '0.0.0.0',
    compress: true,
    port: 8080,
    overlay: true
  },
  plugins: [
    new htmlWebpackPlugin(),
  ]
};

module.exports = config;