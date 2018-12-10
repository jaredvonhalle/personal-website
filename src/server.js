import path from 'path';
import { Server } from 'http';
import Express from 'express';
//import React from 'react';
//import { renderToString} from 'react-dom/server';
//import { StaticRouter} from 'react-router-dom';
//import App from './components/App';

// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, '..', 'static')));

// universal routing and rendering
app.get('*', (req, res) => {
  return res.sendFile(path.resolve(__dirname, 'views', 'index.html'));
});

console.log("NODE_ENV:" + process.env.NODE_ENV);

// start the server
const port = process.env.PORT || 3002;
server.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.info(
    "Server running");
});

