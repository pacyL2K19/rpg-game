const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|mp3)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
    plugins: [
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, 'index.html'),
          to: path.resolve(__dirname, 'dist'),
        },
        {
          from: path.resolve(__dirname, 'assets', '**', '*'),
          to: path.resolve(__dirname, 'dist'),
        },
      ]),
      new webpack.DefinePlugin({
        'typeof CANVAS_RENDERER': JSON.stringify(true),
        'typeof WEBGL_RENDERER': JSON.stringify(true),
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'production-dependencies',
        filename: 'production-dependencies.bundle.js',
      }),
    ],
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
    },
  },
};
