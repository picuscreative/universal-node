import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class MainDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta key="viewport" name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1" />
          <meta key="HandheldFriendly" name="HandheldFriendly" content="True" />
          <meta key="MobileOptimized" name="MobileOptimized" content="320" />
          <meta key="apple-mobile-web-app-title" name="apple-mobile-web-app-title" content="project-name" />
          <meta key="apple-mobile-web-app-capable" name="apple-mobile-web-app-capable" content="yes" />
          <meta key="apple-touch-fullscreen" name="apple-touch-fullscreen" content="yes" />
          <meta key="apple-mobile-web-app-status-bar-style" name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta key="application-name" name="application-name" content="project-name" />
          <meta key="msapplication-TileColor" name="msapplication-TileColor" content="#ffffff" />
          <meta key="msapplication-TileImage" name="msapplication-TileImage" content="/dist/static/images/mstile-150x150.png" />
          <meta key="msapplication-config" name="msapplication-config" content="/dist/static/images/browserconfig.xml" />
          <meta key="theme-color" name="theme-color" content="#ffffff" />
          <link rel="apple-touch-icon" sizes="180x180" href="/dist/static/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" href="/dist/static/images/android-chrome-192x192.png" sizes="192x192" />
          <link rel="icon" type="image/png" href="/dist/static/images/android-chrome-512x512.png" sizes="512x512" />
          <link rel="icon" type="image/png" href="/dist/static/images/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/dist/static/images/favicon-16x16.png" sizes="16x16" />
          <link rel="shortcut icon" href="/dist/static/images/favicon.ico" />
          <link rel="manifest" href="/dist/static/images/manifest.json" />
          <link rel="mask-icon" href="/dist/static/images/safari-pinned-tab.svg" color="#ffffff" />
          <meta key="description" name="description" content="project-name default description" />
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
