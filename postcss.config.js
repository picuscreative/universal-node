module.exports = {
  plugins: {
    'postcss-import': {
      path: 'pages/shared',
    },
    'postcss-mixins': {
      mixinsDir: 'pages/shared/mixins',
    },
    'postcss-for': {},
    'postcss-css-variables': {},
    'postcss-conditionals': {},
    'postcss-cssnext': {
      features: {
        customProperties: false,
        browsers: ['extends browserslist-config-google'],
        autoprefixer: {
          remove: false,
        },
      },
    },
  },
};
