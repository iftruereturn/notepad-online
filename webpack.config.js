var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    // 'webpack-hot-middleware/client',
    // 'babel-polyfill',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
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
        loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
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