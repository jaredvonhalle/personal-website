const path = require('path');

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
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
    },
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

module.exports = clientConfig;