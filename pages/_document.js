/* eslint-disable quotes */
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class MainDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            key="viewport"
            name="viewport"
            content="width=device-width,minimum-scale=1,maximum-scale=1"
          />
          <meta key="HandheldFriendly" name="HandheldFriendly" content="True" />
          <meta key="MobileOptimized" name="MobileOptimized" content="320" />
          <meta
            key="apple-mobile-web-app-title"
            name="apple-mobile-web-app-title"
            content="project-name"
          />
          <meta
            key="apple-mobile-web-app-capable"
            name="apple-mobile-web-app-capable"
            content="yes"
          />
          <meta key="apple-touch-fullscreen" name="apple-touch-fullscreen" content="yes" />
          <meta
            key="apple-mobile-web-app-status-bar-style"
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta key="application-name" name="application-name" content="project-name" />
          <meta key="msapplication-TileColor" name="msapplication-TileColor" content="#000000" />
          <meta
            name="msapplication-square70x70logo"
            content="/dist/static/favicons/ms-icon-70x70.png"
          />
          <meta
            name="msapplication-square144x144logo"
            content="/dist/static/favicons/ms-icon-144x144.png"
          />
          <meta
            name="msapplication-square150x150logo"
            content="/dist/static/favicons/ms-icon-150x150.png"
          />
          <meta
            name="msapplication-square310x310logo"
            content="/dist/static/favicons/ms-icon-310x310.png"
          />
          <meta
            key="msapplication-config"
            name="msapplication-config"
            content="/dist/static/favicons/browserconfig.xml"
          />
          <meta key="theme-color" name="theme-color" content="#000000" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/dist/static/favicons/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/dist/static/favicons/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/dist/static/favicons/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/dist/static/favicons/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/dist/static/favicons/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/dist/static/favicons/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/dist/static/favicons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/dist/static/favicons/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/dist/static/favicons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/dist/static/favicons/android-icon-36x36.png"
            sizes="36x36"
          />
          <link
            rel="icon"
            type="image/png"
            href="/dist/static/favicons/android-icon-48x48.png"
            sizes="48x48"
          />
          <link
            rel="icon"
            type="image/png"
            href="/dist/static/favicons/android-icon-72x72.png"
            sizes="72x72"
          />
          <link
            rel="icon"
            type="image/png"
            href="/dist/static/favicons/android-icon-96x96.png"
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/png"
            href="/dist/static/favicons/android-icon-144x144.png"
            sizes="144x144"
          />
          <link
            rel="icon"
            type="image/png"
            href="/dist/static/favicons/android-icon-192x192.png"
            sizes="192x192"
          />
          <link
            rel="icon"
            type="image/png"
            href="/dist/static/favicons/favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href="/dist/static/favicons/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/dist/static/favicons/favicon-96x96.png"
            sizes="96x96"
          />
          <link rel="shortcut icon" href="/dist/static/favicons/favicon.ico" />
          <link rel="manifest" href="/dist/static/favicons/manifest.json" />
          <meta key="description" name="description" content="project-name description" />
          <style jsx global>{`CRITICAL CSS`}</style>
        </Head>
        <body>
          <Main />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.0.0/polyfill.min.js" />
          <NextScript />
          {process.env.REACT_APP_GA && process.env.NODE_ENV === 'production' ? (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `  window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.REACT_APP_GA}');`,
                }}
              />
            </>
          ) : null}
        </body>
      </html>
    );
  }
}

export default MainDocument;
