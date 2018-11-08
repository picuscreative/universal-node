module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: 'project-name',
      script: 'index.js',
      cwd: '<path>',
      watch: false,
      ignoreWatch: './',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      max_restarts: 3,
      min_uptime: '5000',
    },
  ],
  deploy: {
    master: {
      user: '<user>',
      host: '<host-ip>',
      ref: 'origin/master',
      repo: '<git-repo-url>',
      path: '<path>',
      env: {
        NODE_ENV: 'production',
        PORT: '3000',
      },
    },
  },
};
