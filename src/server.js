import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString} from 'react-dom/server';
import { StaticRouter} from 'react-router-dom';
import App from './components/App';

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../webpack.config.js');
const compiler = webpack(config);

// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

/*
app.use(webpackDevMiddleware(compiler, {
  publicPath: config[0].output.publicPath
}));
*/


// universal routing and rendering
app.get('*', (req, res) => {
  let markup = '';
  let status = 200;

  const context = {};
  markup = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>,
  );


  // context.url will contain the URL to redirect to if a <Redirect> was used
  if (context.url) {
    return res.redirect(302, context.url);
  }


  if (context.is404) {
    status = 404;
  }


  return res.status(status).render('index', { markup });
});

//console.log(app.get('env'));
//console.log(process.env.NODE_ENV);
//const env = process.env.NODE_ENV || 'production';

// start the server
const port = process.env.PORT || 3002;
server.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.info(
    "Server running");
});

