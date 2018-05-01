import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class MainDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="MobileOptimized" content="320" />
          <meta name="apple-mobile-web-app-title" content="project-name" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-touch-fullscreen" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="application-name" content="project-name" />
          <link rel="apple-touch-icon" sizes="180x180" href="/dist/static/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" href="/dist/static/images/android-chrome-192x192.png" sizes="192x192" />
          <link rel="icon" type="image/png" href="/dist/static/images/android-chrome-512x512.png" sizes="512x512" />
          <link rel="icon" type="image/png" href="/dist/static/images/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/dist/static/images/favicon-16x16.png" sizes="16x16" />
          <link rel="shortcut icon" href="/dist/static/images/favicon.ico" />
          <link rel="manifest" href="/dist/static/images/manifest.json" />
          <link rel="mask-icon" href="/dist/static/images/safari-pinned-tab.svg" color="#ffffff" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/dist/static/images/mstile-150x150.png" />
          <meta name="msapplication-config" content="/dist/static/images/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
          <style>
            {'/* INPUT CRITICAL CSS */'}
          </style>
          <link rel="stylesheet" href="/dist/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {process.env.REACT_APP_GA ? (
            <script dangerouslySetInnerHTML={{
   __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
              ga('create', '${process.env.REACT_APP_GA}', 'auto');
              ga('send', 'pageview');`,
  }}>
            </script>
          ) : null }
        </body>
      </html>
    );
  }
}

export default MainDocument;
