const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Clean = require('clean-webpack-plugin');

module.exports = {
  debug: true,
  watch: true,

  entry: {
    'lib': [
      'angular'
    ],
    'main': [
      path.resolve(__dirname, 'public/main.js'),
      path.resolve(__dirname, 'public/main.scss')
    ]

  },
  // Config for our build files
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].bundle.js', // [name] is used so the bundle file name matches the entry point defined above
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    loaders: [
      {
        // Post-css loader and its plugins.
        test: /\.scss$/,
        include: path.resolve(__dirname, 'public'),
        loaders: [
          'style', // inserts raw css into styles elements.
          'css', // css-loader parses css files resolves url() expressions.
          'sass'
        ]
      },
      { test: /\.html$/, loader: 'raw' },
      {
        test: /\.js?$/,
        include: path.resolve(__dirname, 'public'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.dae$/,
        include: path.resolve(__dirname, 'app/assets'),
        exclude: /node_modules/,
        loader: 'file'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new Clean(['dist'], path.resolve(__dirname)),
    new CopyWebpackPlugin([
      { from: './public/index.html', to: './index.html' }
    ])
  ]
};
