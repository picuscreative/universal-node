module.exports = {
  testMatch: ['<rootDir>/client/**/*.test.js'],
  setupFiles: ['<rootDir>/__tests__/setup/setupEnzyme.js'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/setup/',
  ],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '^.+\\.svg$': 'svg-inline-loader',
  },
};
