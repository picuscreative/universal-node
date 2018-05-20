/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();
const webpack = require('webpack');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  distDir: 'public/dist',
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  webpack(config, options) {
    const { dev, isServer } = options;

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
            loader: require.resolve('file-loader'),
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
        use: [
          require.resolve('raw-loader'),
          {
            loader: require.resolve('svgo-loader'),
            options: {
              plugins: [
                { removeTitle: true },
                { removeDimensions: true },
                { cleanupIDs: false },
              ],
            },
          },
          // Uniquify classnames and ids so they don't conflict with eachother
          {
            loader: require.resolve('svg-css-modules-loader'),
            options: {
              transformId: true,
            },
          },
        ],
      },
      // Web fonts
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: require.resolve('file-loader'),
            options: {
              publicPath: '/dist/static/fonts',
              outputPath: 'static/fonts',
              name: dev ? '[name].[ext]' : '[name].[hash:15].[ext]',
            },
          },
        ],
      },
    );

    return config;
  },
});
