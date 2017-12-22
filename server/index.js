//var path = require('path');
//var webpack = require('webpack');
//var config = require('../webpack.config.dev');


import React from 'react'
import express from 'express'
import ReactDOMServer from 'react-dom/server'
import App from '../src/components/App'
import Html from './Html'
import path from 'path'
import http from 'http'
import reload from 'reload'
const app = express();

/* START HACK */
if (!process.env.BROWSER) {
  global.window=''; // Temporarily define window for server-side
}
/* END HACK */

//var compiler = webpack(config);
app.use('/static', express.static(path.join(__dirname + '/../dist')));
/*app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));


app.use(require("webpack-hot-middleware")(compiler));*/

app.get('/',function(req, res, next){
  
      let preloadState = {
          text : 'Hello React-SSR ! Server Side Rendering'
      };
  
      let renderProps = {
          preloadState: `window.__PRELOADED_STATE__ =${JSON.stringify(preloadState).replace(/</g, '\\u003c')}`,
          script: 'static/bundle.js',
          css: 'static/css/stylus.css',
          appComponent: ReactDOMServer.renderToString(<App data={preloadState}/>)
      };
  
      const html = ReactDOMServer.renderToStaticMarkup(<Html {...renderProps}/>); // server-side Rendering
  
      res.send(`<!doctype html>${html}`);
  });

  const server = http.createServer(app);

server.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});

reload(app);
