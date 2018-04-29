/* eslint-disable camelcase */
const { User } = require('../models');
const responseHandler = require('../controllers/response_handler');

const resourceName = 'User';

module.exports.create = (req, res) => {
  req.checkBody('email', 'Email cannot be empty').notEmpty();
  req.getValidationResult().then((validationErrors) => {
    if (!validationErrors.isEmpty()) {
      res.status(400).send({
        errors: validationErrors.array(),
      });
    } else if (req.body.photo) {
      User.create(req.body).then(() => {
        responseHandler.validateCreate(res, resourceName, true);
      }).catch((err) => {
        responseHandler.validateCreate(res, resourceName, err);
      });
    }
  });
};

module.exports.read = (req, res) => {
  req.checkParams('user_id', 'Invalid user_id').notEmpty();
  req.getValidationResult().then((validationErrors) => {
    if (!validationErrors.isEmpty()) {
      res.status(400).send({
        errors: validationErrors.array(),
      });
    } else {
      const {
        user_id,
      } = req.params;
      User.findById(user_id).then((results) => {
        responseHandler.validateRead(res, resourceName, results);
      });
    }
  });
};

module.exports.update = (req, res) => {
  req.checkParams('user_id', 'Invalid user_id').notEmpty();
  req.getValidationResult().then((validationErrors) => {
    if (!validationErrors.isEmpty()) {
      res.status(400).send({
        error: validationErrors.array(),
      });
    } else {
      const {
        user_id,
      } = req.params;
      User.findById(user_id).then((userFound) => {
        const user = userFound;
        Object.keys(req.body).forEach((key, body) => {
          user[key] = body[key];
        });
        return user.save().then((results) => {
          responseHandler.validateUpdate(res, resourceName, results);
        });
      }).catch((err) => {
        responseHandler.validateUpdate(res, resourceName, err);
      });
    }
  });
};

module.exports.delete = (req, res) => {
  req.checkParams('user_id', 'Invalid user_id').notEmpty();
  req.getValidationResult().then((validationErrors) => {
    if (!validationErrors.isEmpty()) {
      res.status(400).send({
        errors: validationErrors.array(),
      });
    } else {
      const {
        user_id,
      } = req.params;
      User.destroy({
        where: {
          id: user_id,
        },
      }).then(() => {
        responseHandler.validateDelete(res, resourceName, true);
      }).catch((err) => {
        responseHandler.validateDelete(res, resourceName, err);
      });
    }
  });
};
