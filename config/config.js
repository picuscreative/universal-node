const assert = require('assert');
require('dotenv').config();

const validEnvironments = ['development', 'test', 'staging', 'production'];
const env = process.env.NODE_ENV || 'development';

assert(validEnvironments.includes(process.env.NODE_ENV), `Expecting NODE_ENV to be one of: ${validEnvironments.join(', ')}`);
assert(process.env.SITE_URL != null, 'Expecting SITE_URL environment variable to be defined');
assert(process.env.DB_USER != null, 'Expecting DB_USER environment variable to be defined');
assert(process.env.DB_PASSWORD != null, 'Expecting DB_PASSWORD environment variable to be defined');
assert(process.env.DB_HOST != null, 'Expecting DB_HOST environment variable to be defined');
assert(process.env.REACT_APP_API_URL != null, 'Expecting REACT_APP_API_URL environment variable to be defined');

const defaultConfig = {
  app: {
    site_url: process.env.SITE_URL,
    api_url: process.env.REACT_APP_API_URL,
  },
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: 'mysql',
  define: {
    underscored: true,
  },
};

const config = {
  development: {
    ...defaultConfig,
    database: 'project_name_development',
  },
  test: {
    ...defaultConfig,
    database: 'project_name_test',
  },
  staging: {
    ...defaultConfig,
    database: 'project_name_staging',
  },
  production: {
    ...defaultConfig,
    database: 'project_name_production',
  },
};

module.exports = config[env];
