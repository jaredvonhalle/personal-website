const webpack = require('webpack');
const path = require('path');

module.exports = {
  target: 'node',
  entry: {
    client: path.join(__dirname, 'src', 'app-client.js'),
    server: path.join(__dirname, 'src', 'server.js')
  },
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    filename: '[name].bundle.js'

  },
  module: {
    rules: [
    {
      test: path.join(__dirname, 'src'),
      use: {
        loader: 'babel-loader'
      },
      exclude:path.join(__dirname, "node_modules"),
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};