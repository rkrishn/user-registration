import React from 'react';

const Html = ({preloadState, script, mainCss, materialCss, appComponent}) => (
    <html className="no-js" lang="en">
    <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>React Server-Side Rendering</title>
        <link rel="stylesheet" type="text/css" href={mainCss}></link>
        <script dangerouslySetInnerHTML={{ __html: preloadState }}></script>
    </head>
    <body>
    <div id="root" dangerouslySetInnerHTML={{ __html: appComponent }} />
    <script src={script} />
    <script src="/reload/reload.js"></script>
    </body>
    </html>
);

export default Html;