const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
console.log(isDev);

const config = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash:8].js'
  },
  mode: 'production',
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './index.tmpl.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? "'development'" : "'production'"
      }
    })
  ],
  resolve: {
    extensions: ["*", ".jsx", ".js", ".json"]
  }
};

if (isDev) {
  config.mode = 'development';
  config.devtool = 'cheap-eval-module-source-map';
  config.devServer = {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    host: '0.0.0.0',
    compress: true,
    port: 8080,
    overlay: true
  };
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin() // 不必要信息不展示
  );
} else {
  config.entry = {
    app: path.resolve(__dirname, 'src/index.js'),
    vendor: ['react']
  };
  config.output.filename = '[name].[chunkhash:8].js'
  config.optimization = {
    splitChunks: {
      name: 'vendor'
    },
    runtimeChunk: {
      name: 'runtime'
    },
    minimize: true
  };
  config.devtool = "source-map";
  config.performance = { hints: false };
  config.plugins.push(
    new ExtractPlugin('styles.[contentHash:8].css')
  );
}

module.exports = config;