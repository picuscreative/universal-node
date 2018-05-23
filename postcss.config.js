module.exports = {
  plugins: {
    'postcss-import': {
      path: 'client/shared',
    },
    'postcss-mixins': {
      mixinsDir: 'client/shared/mixins',
    },
    'postcss-for': {},
    'postcss-css-variables': {},
    'postcss-conditionals': {},
    'postcss-cssnext': {
      features: {
        customProperties: false,
        browsers: ['> 3%', 'Chrome >= 58', 'Firefox >= 58', 'Edge >= 16', 'Explorer >= 10', 'Safari >= 11', 'iOS >= 9.0'],
        autoprefixer: {
          remove: false,
        },
      },
    },
  },
};
