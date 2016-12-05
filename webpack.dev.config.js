const path = require('path');
const webpack = require('webpack');

module.exports = {
   devtool: 'eval',
  entry: [
    'webpack-dev-server/client?https://0.0.0.0:8080', 
    'webpack/hot/only-dev-server', 
    'react-hot-loader/patch',
    './index' 
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: { 
   path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    stats: { colors: true },
    contentBase: './dist'
  }
};