"use strict";

var _path = _interopRequireDefault(require("path"));

var _http = require("http");

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import React from 'react';
//import { renderToString} from 'react-dom/server';
//import { StaticRouter} from 'react-router-dom';
//import App from './components/App';
// initialize the server and configure support for ejs templates
var app = new _express.default();
var server = new _http.Server(app); // define the folder that will be used for static assets

app.use(_express.default.static(_path.default.join(__dirname, '..', 'static'))); // universal routing and rendering

app.get('*', function (req, res) {
  return res.sendFile(_path.default.resolve(__dirname, 'views', 'index.html'));
}); //console.log(app.get('env'));
//console.log(process.env.NODE_ENV);
//const env = process.env.NODE_ENV || 'production';
// start the server

var port = process.env.PORT || 3002;
server.listen(port, function (err) {
  if (err) {
    return console.error(err);
  }

  return console.info("Server running");
});
