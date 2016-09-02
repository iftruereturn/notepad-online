var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    // 'webpack-hot-middleware/client',
    // 'babel-polyfill',
    'webpack/hot/only-dev-server',
    'webpack-dev-server/client?http://localhost:3000',
    './app/src/index.jsx',
    './app/styles/bundle.scss'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles.css", {
      allChunks: true
    })
    // new webpack.NoErrorsPlugin()
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint-loader'],
        include: [
          path.resolve(__dirname, "app/src"),
        ],
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel-loader'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'app/src')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader', 'resolve-url-loader', 'sass-loader'])
      }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]/*,
  devServer: {
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/': {
        target: 'http://localhost:8080/'
      }
    }
  },*/
};