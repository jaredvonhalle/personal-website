const path = require('path');
var nodeExternals = require('webpack-node-externals');

const serverConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    server: path.resolve(__dirname, 'src', 'server.js')
  },
  output: {
    path: path.resolve(__dirname, 'src', 'static', 'js'),
    filename: 'server.bundle.js',
    publicPath: '/'

  },
  module: {
    rules: [
    {
        test:/\.css$/,
        use:[
          { loader: "css-loader" }
        ]
    },
    {
      test: /\.jsx$|\.es6$|\.js$/,
      use: {
        loader: 'babel-loader'
      },
    },
    {
      test: /\.(png|jp(e*)g|svg)$/,  
      use: {
          loader: 'url-loader',
      }
    }
  ]
  },
  node: {
    __dirname: true
  }
};

const clientConfig = {
  mode: 'development',
  devtool: 'inline-source-map', 
  entry: {
    client: path.resolve(__dirname, 'src', 'app-client.js')
  },
  output: {
    path: path.resolve(__dirname, 'src', 'static', 'js'),
    filename: 'client.bundle.js',
    publicPath: '/'

  },
  module: {
    rules: [
    {
        test:/\.css$/,
        use:[
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
    },
    {
      test: /\.jsx$|\.es6$|\.js$/,
      use: {
        loader: 'babel-loader'
      },
      exclude:path.resolve(__dirname, "node_modules"),
    },
    {
      test: /\.(png|jp(e*)g|svg)$/,  
      use: {
          loader: 'url-loader',
      }
    }
  ]
  }
};

module.exports = [ serverConfig, clientConfig ];