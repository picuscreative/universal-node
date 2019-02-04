const express = require('express');
const expressValidator = require('express-validator');
const helmet = require('helmet');
const hpp = require('hpp');
const bodyParser = require('body-parser');
const next = require('next');
const { join } = require('path');
const controllers = require('./server/controllers')(express);
const config = require('./config/config');

const dev = process.env.NODE_ENV !== 'production';
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(hpp());
    server.use(helmet());
    server.use(helmet.contentSecurityPolicy(config.app.csp));
    server.use(expressValidator());
    server.use(express.static('static'));

    server.use('/api', controllers);
    server.get('*', (req, res) => {
      if (req.url.includes('/sw')) {
        const filePath = join(__dirname, 'static', 'workbox', 'sw.js');
        app.serveStatic(req, res, filePath);
      } else if (req.url.startsWith('static/workbox/')) {
        app.serveStatic(req, res, join(__dirname, req.url));
      } else {
        handle(req, res, req.url);
      }
    });

    server.listen(port, host, (err) => {
      if (err) throw err;
      console.log(`> Ready on ${host}:${process.env.PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
