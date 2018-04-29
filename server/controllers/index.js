const usersController = require('./users_controller');

module.exports = (express) => {
  const router = express.Router();

  router.post('/v1/users', usersController.create);
  router.get('/v1/users/:user_id', usersController.read);
  router.put('/v1/users/:user_id', usersController.update);
  router.delete('/v1/users/:user_id', usersController.delete);

  return router;
};
