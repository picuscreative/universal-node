const express = require('express');
const expressValidator = require('express-validator');
const next = require('next');
const controllers = require('./server/controllers')(express);
require('./config/config');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();
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
