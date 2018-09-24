const express = require('express');
const expressValidator = require('express-validator');
const helmet = require('helmet');
const hpp = require('hpp');
const bodyParser = require('body-parser');
const next = require('next');
const controllers = require('./server/controllers')(express);
const config = require('./config/config');

const dev = process.env.NODE_ENV !== 'production';
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
    server.use(express.static('public'));

    server.use('/api', controllers);
    server.get('*', (req, res) => handle(req, res));

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log(`> Ready on ${process.env.SITE_URL}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
