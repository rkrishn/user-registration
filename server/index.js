import React from 'react'
import express from 'express'
import ReactDOMServer from 'react-dom/server'
import App from '../src/main'
import Html from './Html'
import path from 'path'
import http from 'http'
import reload from 'reload'
import configureStore from '../src/stores/store'
import routes from '../src/routes'
import { match, RouterContext } from 'react-router'
const app = express();

/* START HACK */
if (!process.env.BROWSER) {
  global.window=''; // Temporarily define window for server-side
}
app.use('/static', express.static(path.join(__dirname + '/../dist')));

app.get('*', (req, res) => {
  let preloadState = {
    text : 'Hello React-SSR ! Server Side Rendering'
};
//   let renderProps = {
//     preloadState: `window.__PRELOADED_STATE__ =${JSON.stringify(preloadState).replace(/</g, '\\u003c')}`,
//     script: 'static/bundle.js',
//     mainCss: 'static/css/stylus.css',
//     materialCss: 'static/css/material.css',
//     appComponent: ReactDOMServer.renderToString(<App data={preloadState}/>)
// };
//const store = configureStore();
match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    console.log(location.url);
    console.log(renderProps);
    if (err) {
      log.error('Page rendering failed for URL: ' + req.originalUrl + ' Response Time: ' + (Date.now() - stopwatch) + ' Session ID: ' + sessionInfo.cid + ' ' + err.stack)
      return res.status(500).end(err.stack)
    }

  //   const initialView = renderToString(
  //     <Provider store={store}>
  //         <StaticRouter context={context} location={cxt.req.url}>
  //             <App routes={routes}/>
  //         </StaticRouter>
  //     </Provider>
  // );

    const html = ReactDOMServer.renderToStaticMarkup(<Html {...renderProps}/>); // server-side Renderi
    const appHtml = ReactDOMServer.renderToString(html)
    //res.send(`<!doctype html>${appHtml}`);
    res.send(html);
  });
});

  const server = http.createServer(app);
  const PORT = process.env.PORT || 8082;
  server.listen(PORT, function(err) {
    if (err) {
      return console.error(err);
    }

    console.log(`Listening at ${PORT}`);
  });

reload(app);
