/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */

require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const withSourceMaps = require('@zeit/next-source-maps');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const NextWorkboxPlugin = require('next-workbox-webpack-plugin');
const cached = require('./config/cached');

module.exports = withSourceMaps({
  distDir: 'static/dist',
  webpack(config, options) {
    const { dev, buildId, isServer } = options;

    if (!isServer) {
      const envVariables = {};
      Object.keys(process.env)
        .filter(key => /REACT_APP_/.test(key))
        .forEach((key) => {
          envVariables[key] = process.env[key];
        });
      config.plugins.push(new webpack.EnvironmentPlugin(envVariables));
    }

    config.module.rules.push(
      // Raster images (png, jpg, etc)
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/,
        exclude: [/\.svg$/, 'client/shared/media/fonts'],
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/dist/static/images',
              outputPath: 'static/images',
              name: dev ? '[name].[ext]' : '[name].[hash:15].[ext]',
            },
          },
        ],
      },
      // SVGs
      {
        test: /\.svg$/,
        oneOf: [
          {
            include: path.resolve(__dirname, 'client/shared/media/images/backgrounds'),
            use: 'url-loader',
          },
          {
            exclude: path.resolve(__dirname, 'client/shared/media/images/backgrounds'),
            use: 'svg-inline-loader',
          },
        ],
      },
      // Web fonts
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/dist/static/fonts',
              outputPath: 'static/fonts',
              name: dev ? '[name].[ext]' : '[name].[hash:15].[ext]',
            },
          },
        ],
      },
    );

    const workboxOptions = {
      clientsClaim: true,
      skipWaiting: true,
      globPatterns: ['.next/static/*', '.next/static/commons/*'],
      modifyUrlPrefix: {
        '.next': '/_next',
      },
      runtimeCaching: [
        ...Object.values(cached.pageRoutes).map(route => ({
          urlPattern: route,
          handler: 'networkFirst',
          options: {
            cacheName: 'html-cache',
          },
        })),
        {
          urlPattern: cached.stylesRoutes,
          handler: 'networkFirst',
          options: {
            cacheName: 'css-cache',
          },
        },
        {
          urlPattern: cached.staticRoutes,
          handler: 'cacheFirst',
          options: {
            cacheName: 'image-cache',
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    };

    if (!isServer && !dev) {
      config.plugins.push(
        new NextWorkboxPlugin({
          buildId,
          ...workboxOptions,
        }),
      );
    }

    if (process.env.ANALYZE && !isServer) {
      config.plugins.push(new BundleAnalyzerPlugin({ analyzerPort: 3002 }));
    }

    return config;
  },
});
