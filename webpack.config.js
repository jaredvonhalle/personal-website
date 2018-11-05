const webpack = require('webpack');
const path = require('path');
var nodeExternals = require('webpack-node-externals');

const serverConfig = {
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    server: path.join(__dirname, 'src', 'server.js')
  },
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    filename: 'server.bundle.js'

  },
  module: {
    rules: [
    {
      test: path.join(__dirname, 'src'),
      use: {
        loader: 'babel-loader'
      },
    }]
  },
  node: {
    __dirname: true
  }
};

const clientConfig = {
  mode: 'development',
  entry: {
    client: path.join(__dirname, 'src', 'app-client.js')
  },
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    filename: 'client.bundle.js'

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
  }
};

module.exports = [ serverConfig, clientConfig ];