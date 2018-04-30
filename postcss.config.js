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
        browsers: ['> 3%', 'Chrome >= 58', 'Firefox >= 58', 'Explorer >= 10', 'iOS >= 9.0'],
        autoprefixer: {
          remove: false,
        },
      },
    },
  },
};
